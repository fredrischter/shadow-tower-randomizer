e asm.arch=mips
e asm.bits=32
e anal.arch=mips
aa
aaa
afl > /tmp/functions.txt
s 0x0
pdf > /tmp/func_0x0.txt
s 0x100
pdf > /tmp/func_0x100.txt
s 0x200
pdf > /tmp/func_0x200.txt
s 0x300
pdf > /tmp/func_0x300.txt
q
