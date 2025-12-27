#!/usr/bin/env python3
"""
Shadow Tower ST.EXE Hex Viewer
View raw bytes at specific offsets in the executable

Usage:
    python3 hex_viewer.py <runtime_address> [--bytes N]
    python3 hex_viewer.py --file-offset <hex_offset> [--bytes N]
"""

import sys
import argparse

# PSX-EXE constants
PSX_LOAD_ADDRESS = 0x80010000
PSX_HEADER_SIZE = 0x800
EXE_PATH = "iso-dump/ST.EXE"

def runtime_to_file_offset(runtime_addr):
    """Convert runtime address to file offset"""
    return runtime_addr - PSX_LOAD_ADDRESS + PSX_HEADER_SIZE

def file_offset_to_runtime(file_offset):
    """Convert file offset to runtime address"""
    return file_offset + PSX_LOAD_ADDRESS - PSX_HEADER_SIZE

def hex_dump(data, offset, runtime_offset, bytes_per_line=16):
    """Generate a hex dump of the data"""
    lines = []
    for i in range(0, len(data), bytes_per_line):
        # Addresses
        file_addr = offset + i
        runtime_addr = runtime_offset + i
        
        # Hex bytes
        hex_bytes = ' '.join(f'{b:02x}' for b in data[i:i+bytes_per_line])
        
        # ASCII representation
        ascii_chars = ''.join(
            chr(b) if 32 <= b < 127 else '.'
            for b in data[i:i+bytes_per_line]
        )
        
        # Format line
        line = f"0x{runtime_addr:08x} (0x{file_addr:05x}): {hex_bytes:<48}  |{ascii_chars}|"
        lines.append(line)
    
    return '\n'.join(lines)

def main():
    parser = argparse.ArgumentParser(description='View hex dump of Shadow Tower ST.EXE')
    parser.add_argument('address', nargs='?', help='Runtime address (0x8003d7f8) or file offset with --file-offset')
    parser.add_argument('--file-offset', action='store_true', help='Treat address as file offset')
    parser.add_argument('--bytes', type=int, default=256, help='Number of bytes to display (default: 256)')
    parser.add_argument('--before', type=int, default=0, help='Bytes to show before target (default: 0)')
    
    args = parser.parse_args()
    
    if not args.address:
        # Default example: the HP instruction area
        print("Example usage:")
        print(f"  python3 {sys.argv[0]} 0x8003d7f8")
        print(f"  python3 {sys.argv[0]} 0x8003d7f8 --bytes 128")
        print(f"  python3 {sys.argv[0]} 0x2dff8 --file-offset --bytes 64")
        return
    
    # Parse address
    addr = int(args.address, 16) if '0x' in args.address.lower() else int(args.address)
    
    # Convert to file offset
    if args.file_offset:
        file_offset = addr
        runtime_addr = file_offset_to_runtime(file_offset)
    else:
        runtime_addr = addr
        file_offset = runtime_to_file_offset(addr)
    
    # Adjust for before bytes
    file_offset -= args.before
    runtime_addr -= args.before
    total_bytes = args.bytes + args.before
    
    # Read executable
    try:
        with open(EXE_PATH, 'rb') as f:
            f.seek(file_offset)
            data = f.read(total_bytes)
    except FileNotFoundError:
        print(f"Error: Could not find {EXE_PATH}")
        return
    except Exception as e:
        print(f"Error reading file: {e}")
        return
    
    print(f"Shadow Tower ST.EXE Hex Viewer")
    print(f"=" * 80)
    print(f"Starting Runtime Address: 0x{runtime_addr:08x}")
    print(f"Starting File Offset:     0x{file_offset:x} ({file_offset} bytes)")
    print(f"Bytes to display:         {len(data)}")
    print()
    print(hex_dump(data, file_offset, runtime_addr))

if __name__ == '__main__':
    main()
