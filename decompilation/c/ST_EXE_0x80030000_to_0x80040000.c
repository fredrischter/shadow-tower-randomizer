/*
 * Shadow Tower - Readable C Decompilation
 * Address Range: 0x80030000 to 0x80040000
 * Decompiled from ST_EXE_0x80030000_to_0x80040000.asm
 */

#include <stdint.h>
#include <stdbool.h>

/* Global variables and registers */
uint8_t* stack;
uint32_t reg_sp, reg_gp, reg_s0, reg_s1, reg_s2, reg_s3, reg_s4, reg_s5, reg_s6, reg_s7;


/* Function at 0x80030000 */
void func_0x80030000() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_v1 = var_v1 << 0x10; /* 0x80030000 */
    var_v1 = var_v1 >> 0x10; /* 0x80030004 */
    var_a0 = var_v1 << 0x2; /* 0x80030008 */
    var_a0 = var_a0 + var_v1; /* 0x8003000c */
    var_v0 = var_v0 << 0x10; /* 0x80030010 */
    var_v0 = var_v0 >> 0x10; /* 0x80030014 */
    var_s0 = var_a0 + var_v0; /* 0x80030018 */
    var_a0 = var_s0 + 1; /* 0x8003001c */
    var_a0 = var_a0 & 0xffff; /* 0x80030020 */
    var_v1 = 0x300 << 16; /* 0x80030024 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80030028 */
    var_v0 = var_v0 + var_s0; /* 0x80030030 */
    var_s1 = *(uint8_t*)(reg_v0 + 0); /* 0x80030034 */
    func_0x80027440(); /* 0x80030038 */
    var_a0 = 14; /* 0x80030040 */
    var_a1 = 531; /* 0x80030044 */
    var_a2 = 214; /* 0x80030048 */
    var_a3 = 0x1f80 << 16; /* 0x8003004c */
    func_0x80026ecc(); /* 0x80030050 */
    var_a0 = 0x300 << 16; /* 0x80030058 */
    var_a0 = var_a0 | 0x96; /* 0x8003005c */
    var_a1 = 551; /* 0x80030060 */
    var_a2 = 214; /* 0x80030064 */
    var_a3 = 0x1f80 << 16; /* 0x80030068 */
    func_0x80027440(); /* 0x8003006c */
    var_v0 = *(uint16_t*)(reg_s3 + 12); /* 0x80030074 */
    var_v0 = var_v0 << 0x10; /* 0x8003007c */
    var_v0 = var_v0 >> 0x10; /* 0x80030080 */
    /* Branch beqz at 0x80030088 */
    var_a1 = 40; /* 0x8003008c */
    var_a2 = 214; /* 0x80030090 */
    var_a3 = 0x1f80 << 16; /* 0x80030094 */
    var_v0 = *(uint8_t*)(reg_s3 + 771); /* 0x80030098 */
    var_v1 = *(int32_t*)(reg_s3 + 4); /* 0x8003009c */
    var_v0 = var_v0 | 0x80; /* 0x800300a0 */
    *(int8_t*)(reg_s3 + 771) = var_v0; /* 0x800300a4 */
    var_v0 = var_s1 << 0x1; /* 0x800300a8 */
    var_v0 = var_v0 + var_v1; /* 0x800300ac */
    var_a0 = *(uint16_t*)(reg_v0 + 0); /* 0x800300b0 */
    var_a3 = var_a3 | 0x300; /* 0x800300b4 */
    var_a0 = var_a0 + 3072; /* 0x800300b8 */
    func_0x8002732c(); /* 0x800300bc */
    var_v0 = *(uint8_t*)(reg_s3 + 771); /* 0x800300c4 */
    var_v0 = var_v0 & 0x7f; /* 0x800300cc */
    *(int8_t*)(reg_s3 + 771) = var_v0; /* 0x800300d0 */
    var_a0 = 32; /* 0x800300d4 */
    var_a1 = 210; /* 0x800300d8 */
    var_a2 = 576; /* 0x800300dc */
    func_0x80029548(); /* 0x800300e0 */
    var_s4 = var_zero; /* 0x800300e8 */
    var_s5 = 0x1f80 << 16; /* 0x800300ec */
    var_s5 = var_s5 | 0x350; /* 0x800300f0 */
    var_v0 = *(uint16_t*)(reg_s3 + 738); /* 0x800300f4 */
    var_v1 = 32; /* 0x800300f8 */
    *(int16_t*)(reg_s3 + 852) = var_s6; /* 0x800300fc */
    *(int16_t*)(reg_s3 + 854) = var_s2; /* 0x80030100 */
    *(int16_t*)(reg_s3 + 850) = var_v1; /* 0x80030104 */
    var_v0 = var_v0 << 0x10; /* 0x80030108 */
    var_v0 = var_v0 >> 0x10; /* 0x8003010c */
    var_v1 = var_v0 << 0x2; /* 0x80030110 */
    var_s0 = var_v1 + var_v0; /* 0x80030114 */
    var_v0 = *(uint16_t*)(reg_s3 + 738); /* 0x80030118 */
    var_v1 = *(uint16_t*)(reg_s3 + 14); /* 0x8003011c */
    var_v0 = var_v0 << 0x10; /* 0x80030120 */
    var_v0 = var_v0 >> 0x10; /* 0x80030124 */
    var_v0 = var_v0 + var_s4; /* 0x80030128 */
    var_v1 = var_v1 << 0x10; /* 0x8003012c */
    var_v1 = var_v1 >> 0x10; /* 0x80030130 */
    /* Branch bne at 0x80030134 */
    var_s2 = 5; /* 0x80030138 */
    var_v0 = *(uint16_t*)(reg_s3 + 16); /* 0x8003013c */
    var_v0 = var_v0 << 0x10; /* 0x80030144 */
    var_s2 = var_v0 >> 0x10; /* 0x80030148 */
    var_v0 = 48; /* 0x8003014c */
    *(int16_t*)(reg_s3 + 848) = var_v0; /* 0x80030150 */
    /* Branch blez at 0x80030154 */
    var_s1 = var_zero; /* 0x80030158 */
    var_v0 = *(uint16_t*)(reg_s3 + 12); /* 0x8003015c */
    var_v0 = var_v0 << 0x10; /* 0x80030164 */
    var_v0 = var_v0 >> 0x10; /* 0x80030168 */
    /* Branch beqz at 0x80030170 */
    var_a0 = var_s5; /* 0x80030174 */
    var_a1 = var_s3 + 768; /* 0x80030178 */
    var_a2 = 513; /* 0x8003017c */
    func_0x80027d18(); /* 0x80030180 */
    var_v0 = 0x8888 << 16; /* 0x80030188 */
    var_v0 = var_v0 | 0x8889; /* 0x8003018c */
    var_v0 = 16; /* 0x80030194 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x80030198 */
    var_a0 = var_s5; /* 0x8003019c */
    var_a2 = var_zero; /* 0x800301a0 */
    var_a3 = var_a2; /* 0x800301a4 */
    var_v1 = var_s0 >> 0x1f; /* 0x800301a8 */
    var_v0 = var_t1 + var_s0; /* 0x800301b0 */
    var_v0 = var_v0 >> 0x3; /* 0x800301b4 */
    var_a1 = var_v0 << 0x4; /* 0x800301bc */
    var_a1 = var_a1 << 0x2; /* 0x800301c8 */
    var_a1 = var_a1 + 20; /* 0x800301cc */
    func_0x80028364(); /* 0x800301d0 */
    var_v0 = *(uint16_t*)(reg_s3 + 848); /* 0x800301d8 */
    var_s1 = var_s1 + 1; /* 0x800301dc */
    var_v0 = var_v0 + 112; /* 0x800301e0 */
    *(int16_t*)(reg_s3 + 848) = var_v0; /* 0x800301e4 */
    /* Branch bnez at 0x800301ec */
    var_s0 = var_s0 + 1; /* 0x800301f0 */
    var_v0 = *(uint16_t*)(reg_s3 + 850); /* 0x800301f4 */
    var_s4 = var_s4 + 1; /* 0x800301f8 */
    var_v0 = var_v0 + 56; /* 0x800301fc */
    *(int16_t*)(reg_s3 + 850) = var_v0; /* 0x80030200 */
    /* Branch bnez at 0x80030208 */
    var_a0 = var_zero; /* 0x8003020c */
    var_a1 = var_a0; /* 0x80030210 */
    func_0x800286a8(); /* 0x80030214 */
    var_a0 = 32; /* 0x8003021c */
    var_a1 = 24; /* 0x80030220 */
    var_a2 = 576; /* 0x80030224 */
    func_0x80029548(); /* 0x80030228 */
    var_ra = *(int32_t*)(stack + 68); /* 0x80030230 */
    var_s6 = *(int32_t*)(stack + 64); /* 0x80030234 */
    var_s5 = *(int32_t*)(stack + 60); /* 0x80030238 */
    var_s4 = *(int32_t*)(stack + 56); /* 0x8003023c */
    var_s3 = *(int32_t*)(stack + 52); /* 0x80030240 */
    var_s2 = *(int32_t*)(stack + 48); /* 0x80030244 */
    var_s1 = *(int32_t*)(stack + 44); /* 0x80030248 */
    var_s0 = *(int32_t*)(stack + 40); /* 0x8003024c */
    var_sp = var_sp + 72; /* 0x80030250 */
    return; /* 0x80030254 */
}

/* Function at 0x80030258 */
void func_0x80030258() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_at;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -136; /* 0x8003025c */
    *(int32_t*)(stack + 132) = var_ra; /* 0x80030260 */
    *(int32_t*)(stack + 128) = var_s6; /* 0x80030264 */
    *(int32_t*)(stack + 124) = var_s5; /* 0x80030268 */
    *(int32_t*)(stack + 120) = var_s4; /* 0x8003026c */
    *(int32_t*)(stack + 116) = var_s3; /* 0x80030270 */
    *(int32_t*)(stack + 112) = var_s2; /* 0x80030274 */
    *(int32_t*)(stack + 108) = var_s1; /* 0x80030278 */
    *(int32_t*)(stack + 104) = var_s0; /* 0x8003027c */
    var_v0 = 960; /* 0x80030280 */
    *(int16_t*)(stack + 24) = var_v0; /* 0x80030284 */
    var_v0 = 446; /* 0x80030288 */
    *(int16_t*)(stack + 26) = var_v0; /* 0x8003028c */
    var_v0 = 560; /* 0x80030290 */
    *(int16_t*)(stack + 32) = var_v0; /* 0x80030294 */
    var_v0 = 498; /* 0x80030298 */
    *(int16_t*)(stack + 34) = var_v0; /* 0x8003029c */
    var_v0 = 34; /* 0x800302a0 */
    *(int16_t*)(stack + 40) = var_v0; /* 0x800302a4 */
    var_v0 = 154; /* 0x800302a8 */
    *(int16_t*)(stack + 42) = var_v0; /* 0x800302ac */
    var_v0 = 0x8008 << 16; /* 0x800302b0 */
    var_a2 = var_v0 + 32680; /* 0x800302b4 */
    var_v0 = 0x8008 << 16; /* 0x800302d8 */
    var_a2 = var_v0 + 32688; /* 0x800302dc */
    var_a3 = var_sp + 64; /* 0x80030300 */
    var_v0 = 0x8001 << 16; /* 0x80030304 */
    var_a2 = var_v0 + 5000; /* 0x80030308 */
    var_v0 = var_a2 & 0x3; /* 0x8003030c */
    /* Branch beqz at 0x80030310 */
    var_s5 = 0x1f80 << 16; /* 0x80030314 */
    var_t0 = var_a2 + 32; /* 0x80030318 */
    var_a2 = var_a2 + 16; /* 0x8003035c */
    /* Branch bne at 0x80030360 */
    var_a3 = var_a3 + 16; /* 0x80030364 */
    var_t0 = var_a2 + 32; /* 0x80030370 */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x80030374 */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x80030378 */
    var_a0 = *(int32_t*)(reg_a2 + 8); /* 0x8003037c */
    var_a1 = *(int32_t*)(reg_a2 + 12); /* 0x80030380 */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x80030384 */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x80030388 */
    *(int32_t*)(reg_a3 + 8) = var_a0; /* 0x8003038c */
    *(int32_t*)(reg_a3 + 12) = var_a1; /* 0x80030390 */
    var_a2 = var_a2 + 16; /* 0x80030394 */
    /* Branch bne at 0x80030398 */
    var_a3 = var_a3 + 16; /* 0x8003039c */
    var_v0 = *(int16_t*)(reg_a2 + 0); /* 0x800303a0 */
    *(int16_t*)(reg_a3 + 0) = var_v0; /* 0x800303a8 */
    var_v1 = *(uint16_t*)(reg_s5 + 738); /* 0x800303ac */
    var_a0 = *(uint16_t*)(reg_s5 + 736); /* 0x800303b0 */
    var_v1 = var_v1 << 0x10; /* 0x800303b4 */
    var_v1 = var_v1 >> 0x10; /* 0x800303b8 */
    var_a0 = var_a0 << 0x10; /* 0x800303bc */
    var_a0 = var_a0 >> 0x10; /* 0x800303c0 */
    var_v0 = var_v1 << 0x2; /* 0x800303c4 */
    var_v0 = var_v0 + var_v1; /* 0x800303c8 */
    var_v1 = *(int32_t*)(reg_s5 + 8); /* 0x800303cc */
    var_v0 = var_v0 + var_a0; /* 0x800303d0 */
    var_v1 = var_v1 + var_v0; /* 0x800303d4 */
    var_s0 = *(uint8_t*)(reg_v1 + 0); /* 0x800303d8 */
    var_v1 = 0x801d << 16; /* 0x800303dc */
    var_a1 = var_v1 + -11904; /* 0x800303e0 */
    var_v1 = *(int32_t*)(reg_s5 + 0); /* 0x800303e4 */
    var_a0 = *(uint16_t*)(reg_a1 + 4); /* 0x800303e8 */
    var_v0 = var_s0 << 0x1; /* 0x800303ec */
    var_v0 = var_v0 + var_s0; /* 0x800303f0 */
    var_v0 = var_v0 << 0x2; /* 0x800303f4 */
    var_v0 = var_v0 << 0x2; /* 0x800303fc */
    var_s4 = var_v1 + var_v0; /* 0x80030400 */
    var_v0 = var_a0 & 0x800; /* 0x80030404 */
    /* Branch beqz at 0x80030408 */
    var_v0 = 1; /* 0x8003040c */
    var_at = 0x8009 << 16; /* 0x80030410 */
    *(int16_t*)(reg_at + -32342) = var_v0; /* 0x80030414 */
    var_v0 = var_a0 & 0x400; /* 0x80030418 */
    /* Branch beqz at 0x8003041c */
    var_at = 0x8009 << 16; /* 0x80030424 */
    *(int16_t*)(reg_at + -32342) = var_zero; /* 0x80030428 */
    var_v0 = 0x8009 << 16; /* 0x8003042c */
    var_v0 = *(uint16_t*)(reg_v0 + -32342); /* 0x80030430 */
    /* Branch bnez at 0x80030438 */
    *(int16_t*)(reg_a1 + 4) = var_zero; /* 0x8003043c */
    var_a0 = var_sp + 56; /* 0x80030440 */
    var_a1 = var_s5 | 0x32c; /* 0x80030444 */
    var_a2 = var_zero; /* 0x8003044c */
    var_a0 = var_sp + 48; /* 0x80030450 */
    var_a1 = var_s5 | 0x32c; /* 0x80030454 */
    var_a2 = 2048; /* 0x80030458 */
    func_0x8002916c(); /* 0x8003045c */
    var_a0 = 1; /* 0x80030464 */
    var_a1 = var_zero; /* 0x80030468 */
    func_0x800286a8(); /* 0x8003046c */
    var_a1 = 32; /* 0x80030474 */
    var_a2 = 16; /* 0x80030478 */
    var_v0 = *(uint8_t*)(reg_s5 + 771); /* 0x8003047c */
    var_v1 = *(int32_t*)(reg_s5 + 4); /* 0x80030480 */
    var_v0 = var_v0 | 0x80; /* 0x80030484 */
    *(int8_t*)(reg_s5 + 771) = var_v0; /* 0x80030488 */
    var_v0 = var_s0 << 0x1; /* 0x8003048c */
    var_v0 = var_v0 + var_v1; /* 0x80030490 */
    var_s0 = var_s5 + 768; /* 0x80030494 */
    var_a0 = *(uint16_t*)(reg_v0 + 0); /* 0x80030498 */
    var_a3 = var_s0; /* 0x8003049c */
    var_a0 = var_a0 + 3072; /* 0x800304a0 */
    func_0x8002732c(); /* 0x800304a4 */
    var_v1 = 0xf << 16; /* 0x800304ac */
    var_v1 = var_v1 | 0x5; /* 0x800304b0 */
    var_a0 = var_sp + 40; /* 0x800304b4 */
    var_a1 = var_sp + 24; /* 0x800304b8 */
    var_a2 = var_sp + 32; /* 0x800304bc */
    var_v0 = *(uint8_t*)(reg_s5 + 771); /* 0x800304c0 */
    var_a3 = var_s0; /* 0x800304c4 */
    *(int32_t*)(stack + 16) = var_v1; /* 0x800304c8 */
    var_v0 = var_v0 & 0x7f; /* 0x800304cc */
    func_0x8002f1f8(); /* 0x800304d0 */
    var_v0 = 0x8009 << 16; /* 0x800304d8 */
    var_v0 = *(uint16_t*)(reg_v0 + -32342); /* 0x800304dc */
    /* Branch beqz at 0x800304e4 */
    var_s1 = var_zero; /* 0x800304e8 */
    var_v0 = 0x801e << 16; /* 0x800304ec */
    var_v0 = var_v0 + 3408; /* 0x800304f0 */
    var_s6 = var_v0 + 3072; /* 0x800304f4 */
    var_s3 = 16; /* 0x800304f8 */
    var_s2 = var_v0; /* 0x800304fc */
    var_a1 = 336; /* 0x80030500 */
    var_s0 = var_s3 & 0xffff; /* 0x80030504 */
    var_a2 = var_s0; /* 0x80030508 */
    var_a3 = var_s5 + 768; /* 0x8003050c */
    var_s3 = var_s3 + 15; /* 0x80030510 */
    var_a0 = *(uint16_t*)(reg_s2 + 200); /* 0x80030514 */
    var_s2 = var_s2 + 2; /* 0x80030518 */
    func_0x8002732c(); /* 0x8003051c */
    var_a1 = 582; /* 0x80030524 */
    var_a2 = var_s0; /* 0x80030528 */
    var_a3 = var_s5 + 784; /* 0x8003052c */
    var_v0 = var_s4 + var_s1; /* 0x80030530 */
    var_s1 = var_s1 + 1; /* 0x80030534 */
    var_a0 = *(uint8_t*)(reg_v0 + 28); /* 0x80030538 */
    var_v0 = 0x200 << 16; /* 0x8003053c */
    var_a0 = var_a0 << 0x18; /* 0x80030540 */
    var_a0 = var_a0 >> 0x18; /* 0x80030544 */
    var_a0 = var_a0 & 0xffff; /* 0x80030548 */
    func_0x80027440(); /* 0x8003054c */
    /* Branch bnez at 0x80030558 */
    var_a1 = 336; /* 0x8003055c */
    var_s0 = var_s5 + 848; /* 0x80030564 */
    var_v0 = 0x801e << 16; /* 0x80030568 */
    var_v0 = var_v0 + 3408; /* 0x8003056c */
    var_s3 = var_v0 + 3072; /* 0x80030570 */
    var_s2 = 16; /* 0x80030574 */
    var_s0 = var_v0; /* 0x80030578 */
    var_a1 = 336; /* 0x8003057c */
    var_a2 = var_s2 & 0xffff; /* 0x80030580 */
    var_a3 = var_s5 + 768; /* 0x80030584 */
    var_s2 = var_s2 + 15; /* 0x80030588 */
    var_a0 = *(uint16_t*)(reg_s0 + 234); /* 0x8003058c */
    var_s0 = var_s0 + 2; /* 0x80030590 */
    var_s1 = var_s1 + 1; /* 0x80030594 */
    func_0x8002732c(); /* 0x80030598 */
    /* Branch bnez at 0x800305a4 */
    var_a1 = 336; /* 0x800305a8 */
    var_v0 = *(uint8_t*)(reg_s4 + 0); /* 0x800305ac */
    /* Branch beqz at 0x800305b8 */
    var_a2 = 16; /* 0x800305bc */
    var_a3 = var_s5 | 0x300; /* 0x800305c0 */
    var_a0 = 0x801e << 16; /* 0x800305c4 */
    var_v1 = *(uint8_t*)(reg_s4 + 0); /* 0x800305c8 */
    var_a0 = var_a0 + 3408; /* 0x800305cc */
    var_v1 = var_v1 << 0x1; /* 0x800305d0 */
    var_v0 = var_v1 + var_a0; /* 0x800305d4 */
    var_v0 = *(uint16_t*)(reg_v0 + 300); /* 0x800305d8 */
    var_a0 = var_a0 + 3072; /* 0x800305dc */
    var_a0 = var_v0 + var_a0; /* 0x800305e0 */
    var_v0 = var_sp + var_v1; /* 0x800305e4 */
    var_v0 = *(uint16_t*)(reg_v0 + 64); /* 0x800305e8 */
    var_a1 = 606; /* 0x800305ec */
    func_0x8002732c(); /* 0x800305f4 */
    var_a1 = 558; /* 0x800305fc */
    var_a2 = 31; /* 0x80030600 */
    var_s2 = var_s5 + 784; /* 0x80030604 */
    var_a3 = var_s2; /* 0x80030608 */
    var_a0 = *(uint16_t*)(reg_s4 + 2); /* 0x8003060c */
    var_s1 = 0x400 << 16; /* 0x80030610 */
    func_0x80027440(); /* 0x80030614 */
    var_a1 = 582; /* 0x8003061c */
    var_a2 = 46; /* 0x80030620 */
    var_a3 = var_s2; /* 0x80030624 */
    var_a0 = *(uint8_t*)(reg_s4 + 1); /* 0x80030628 */
    var_s0 = 0x200 << 16; /* 0x8003062c */
    func_0x80027440(); /* 0x80030630 */
    var_a0 = 0x2b00 << 16; /* 0x80030638 */
    var_v1 = *(int16_t*)(reg_s4 + 4); /* 0x8003063c */
    var_a0 = var_a0 | 0xac03; /* 0x80030640 */
    var_v0 = var_v1 << 0x2; /* 0x80030644 */
    var_v0 = var_v0 + var_v1; /* 0x80030648 */
    var_v0 = var_v0 << 0x1; /* 0x8003064c */
    var_a1 = 522; /* 0x80030654 */
    var_a2 = 61; /* 0x80030658 */
    var_a3 = var_s2; /* 0x8003065c */
    var_v0 = var_v0 >> 0x1f; /* 0x80030660 */
    var_v1 = var_v1 >> 0x9; /* 0x80030668 */
    var_at = 0x8009 << 16; /* 0x80030670 */
    *(int16_t*)(reg_at + -32354) = var_v1; /* 0x80030674 */
    var_a0 = 0x8009 << 16; /* 0x80030678 */
    var_a0 = *(uint16_t*)(reg_a0 + -32354); /* 0x8003067c */
    var_s3 = 0x300 << 16; /* 0x80030680 */
    func_0x80027440(); /* 0x80030684 */
    var_a0 = 55; /* 0x8003068c */
    var_a1 = 559; /* 0x80030690 */
    var_a2 = 61; /* 0x80030694 */
    func_0x80026ecc(); /* 0x80030698 */
    var_v0 = *(int16_t*)(reg_s4 + 4); /* 0x800306a0 */
    var_a0 = var_v0 << 0x2; /* 0x800306a8 */
    var_a0 = var_a0 + var_v0; /* 0x800306ac */
    var_v0 = 0x8009 << 16; /* 0x800306b0 */
    var_v0 = *(uint16_t*)(reg_v0 + -32354); /* 0x800306b4 */
    var_a0 = var_a0 << 0x1; /* 0x800306b8 */
    var_v1 = var_v0 << 0x1; /* 0x800306bc */
    var_v1 = var_v1 + var_v0; /* 0x800306c0 */
    var_v0 = var_v1 << 0x7; /* 0x800306c4 */
    var_v0 = var_v0 << 0x3; /* 0x800306cc */
    var_a0 = var_a0 & 0xffff; /* 0x800306d4 */
    var_a0 = (uint32_t)var_a0 >> 0x1; /* 0x800306d8 */
    var_v0 = 0x8102 << 16; /* 0x800306dc */
    var_v0 = var_v0 | 0x409; /* 0x800306e0 */
    var_a1 = 570; /* 0x800306e8 */
    var_a2 = 61; /* 0x800306ec */
    var_a3 = var_s2; /* 0x800306f0 */
    var_a0 = (uint32_t)var_v0 >> 0x6; /* 0x800306f8 */
    var_a0 = var_a0 & 0xffff; /* 0x800306fc */
    func_0x80027440(); /* 0x80030700 */
    var_a0 = 54; /* 0x80030708 */
    var_a1 = 595; /* 0x8003070c */
    var_a2 = 61; /* 0x80030710 */
    func_0x80026ecc(); /* 0x80030714 */
    var_a1 = 0x2416 << 16; /* 0x8003071c */
    var_v0 = *(int16_t*)(reg_s4 + 6); /* 0x80030720 */
    var_a1 = var_a1 | 0x8e19; /* 0x80030724 */
    var_a0 = var_v0 << 0x1; /* 0x80030728 */
    var_a0 = var_a0 + var_v0; /* 0x8003072c */
    var_a0 = var_a0 << 0x3; /* 0x80030730 */
    var_a0 = var_a0 + var_v0; /* 0x80030734 */
    var_a0 = var_a0 << 0x2; /* 0x80030738 */
    var_v1 = var_v0 << 0x5; /* 0x80030740 */
    var_v1 = var_v1 << 0x2; /* 0x80030748 */
    var_v1 = var_v1 + var_v0; /* 0x80030750 */
    var_v1 = var_v1 << 0x3; /* 0x80030754 */
    var_a2 = 76; /* 0x8003075c */
    var_a3 = var_s2; /* 0x80030760 */
    var_a0 = var_a0 >> 0x1f; /* 0x80030764 */
    var_a1 = 522; /* 0x80030768 */
    var_v0 = var_t0 >> 0x6; /* 0x8003076c */
    var_at = 0x8009 << 16; /* 0x80030774 */
    *(int16_t*)(reg_at + -32354) = var_v0; /* 0x80030778 */
    var_a0 = 0x8009 << 16; /* 0x8003077c */
    var_a0 = *(uint16_t*)(reg_a0 + -32354); /* 0x80030780 */
    var_v1 = var_v1 >> 0x1f; /* 0x80030784 */
    var_v0 = var_t2 >> 0x6; /* 0x8003078c */
    var_at = 0x8009 << 16; /* 0x80030794 */
    *(int16_t*)(reg_at + -32376) = var_v0; /* 0x80030798 */
    func_0x80027440(); /* 0x8003079c */
    var_a0 = 18; /* 0x800307a4 */
    var_a1 = 574; /* 0x800307a8 */
    var_a2 = 76; /* 0x800307ac */
    func_0x80026ecc(); /* 0x800307b0 */
    var_a1 = 582; /* 0x800307b8 */
    var_a2 = 76; /* 0x800307bc */
    var_a3 = var_s2; /* 0x800307c0 */
    var_v1 = 0x8009 << 16; /* 0x800307c4 */
    var_v1 = *(uint16_t*)(reg_v1 + -32354); /* 0x800307c8 */
    var_a0 = 0x8009 << 16; /* 0x800307cc */
    var_a0 = *(uint16_t*)(reg_a0 + -32376); /* 0x800307d0 */
    var_v0 = var_v1 << 0x2; /* 0x800307d4 */
    var_v0 = var_v0 + var_v1; /* 0x800307d8 */
    var_v0 = var_v0 << 0x1; /* 0x800307dc */
    var_a0 = var_a0 & 0xffff; /* 0x800307e4 */
    var_v0 = 0x100 << 16; /* 0x800307e8 */
    func_0x80027440(); /* 0x800307ec */
    var_a0 = 53; /* 0x800307f4 */
    var_a1 = 594; /* 0x800307f8 */
    var_a2 = 76; /* 0x800307fc */
    func_0x80026ecc(); /* 0x80030800 */
    var_v0 = *(int16_t*)(reg_s4 + 10); /* 0x80030808 */
    /* Branch beqz at 0x80030810 */
    var_a1 = 522; /* 0x80030814 */
    var_a2 = 91; /* 0x80030818 */
    var_a0 = *(uint16_t*)(reg_s4 + 10); /* 0x8003081c */
    var_a3 = var_s2; /* 0x80030820 */
    func_0x80027440(); /* 0x80030824 */
    var_a0 = 15; /* 0x8003082c */
    var_a1 = 558; /* 0x80030830 */
    var_a2 = 91; /* 0x80030834 */
    func_0x80026ecc(); /* 0x80030838 */
    var_a1 = 570; /* 0x80030840 */
    var_a2 = 91; /* 0x80030844 */
    var_a0 = *(uint16_t*)(reg_s4 + 8); /* 0x80030848 */
    var_a3 = var_s2; /* 0x8003084c */
    func_0x80027440(); /* 0x80030850 */
    var_v0 = *(int16_t*)(reg_s4 + 14); /* 0x80030858 */
    /* Branch beqz at 0x80030860 */
    var_a1 = 522; /* 0x80030864 */
    var_a2 = 106; /* 0x80030868 */
    var_a0 = *(uint16_t*)(reg_s4 + 14); /* 0x8003086c */
    var_a3 = var_s2; /* 0x80030870 */
    func_0x80027440(); /* 0x80030874 */
    var_a0 = 15; /* 0x8003087c */
    var_a1 = 558; /* 0x80030880 */
    var_a2 = 106; /* 0x80030884 */
    func_0x80026ecc(); /* 0x80030888 */
    var_a1 = 570; /* 0x80030890 */
    var_a2 = 106; /* 0x80030894 */
    var_a0 = *(uint16_t*)(reg_s4 + 12); /* 0x80030898 */
    var_a3 = var_s2; /* 0x8003089c */
    func_0x80027440(); /* 0x800308a0 */
    var_v0 = *(int16_t*)(reg_s4 + 18); /* 0x800308a8 */
    /* Branch beqz at 0x800308b0 */
    var_a1 = 522; /* 0x800308b4 */
    var_a2 = 121; /* 0x800308b8 */
    var_a0 = *(uint16_t*)(reg_s4 + 18); /* 0x800308bc */
    var_a3 = var_s2; /* 0x800308c0 */
    func_0x80027440(); /* 0x800308c4 */
    var_a0 = 15; /* 0x800308cc */
    var_a1 = 558; /* 0x800308d0 */
    var_a2 = 121; /* 0x800308d4 */
    func_0x80026ecc(); /* 0x800308d8 */
    var_a1 = 570; /* 0x800308e0 */
    var_a2 = 121; /* 0x800308e4 */
    var_a0 = *(uint16_t*)(reg_s4 + 16); /* 0x800308e8 */
    var_a3 = var_s2; /* 0x800308ec */
    func_0x80027440(); /* 0x800308f0 */
    var_v0 = *(int16_t*)(reg_s4 + 22); /* 0x800308f8 */
    /* Branch beqz at 0x80030900 */
    var_a1 = 522; /* 0x80030904 */
    var_a2 = 136; /* 0x80030908 */
    var_a0 = *(uint16_t*)(reg_s4 + 22); /* 0x8003090c */
    var_a3 = var_s2; /* 0x80030910 */
    func_0x80027440(); /* 0x80030914 */
    var_a0 = 15; /* 0x8003091c */
    var_a1 = 558; /* 0x80030920 */
    var_a2 = 136; /* 0x80030924 */
    func_0x80026ecc(); /* 0x80030928 */
    var_a1 = 570; /* 0x80030930 */
    var_a2 = 136; /* 0x80030934 */
    var_a0 = *(uint16_t*)(reg_s4 + 20); /* 0x80030938 */
    var_a3 = var_s2; /* 0x8003093c */
    func_0x80027440(); /* 0x80030940 */
    var_v0 = *(int32_t*)(reg_s4 + 24); /* 0x80030948 */
    var_v0 = var_v0 & 0xf; /* 0x80030950 */
    /* Branch beqz at 0x80030954 */
    var_a1 = 336; /* 0x80030958 */
    var_a2 = 181; /* 0x8003095c */
    var_a3 = var_s5 | 0x300; /* 0x80030960 */
    var_a0 = 0x801e << 16; /* 0x80030964 */
    var_a0 = var_a0 + 3408; /* 0x80030968 */
    var_v0 = var_v0 << 0x1; /* 0x8003096c */
    var_v0 = var_v0 + var_a0; /* 0x80030970 */
    var_v0 = *(uint16_t*)(reg_v0 + 258); /* 0x80030974 */
    var_a0 = var_a0 + 3072; /* 0x80030978 */
    func_0x8002732c(); /* 0x8003097c */
    var_v0 = *(int32_t*)(reg_s4 + 24); /* 0x80030984 */
    var_v0 = (uint32_t)var_v0 >> 0x8; /* 0x8003098c */
    var_v0 = var_v0 & 0xf; /* 0x80030990 */
    /* Branch beqz at 0x80030994 */
    var_a1 = 336; /* 0x80030998 */
    var_a2 = 196; /* 0x8003099c */
    var_a3 = var_s5 | 0x300; /* 0x800309a0 */
    var_a0 = 0x801e << 16; /* 0x800309a4 */
    var_a0 = var_a0 + 3408; /* 0x800309a8 */
    var_v0 = var_v0 << 0x1; /* 0x800309ac */
    var_v0 = var_v0 + var_a0; /* 0x800309b0 */
    var_v0 = *(uint16_t*)(reg_v0 + 258); /* 0x800309b4 */
    var_a0 = var_a0 + 3072; /* 0x800309b8 */
    func_0x8002732c(); /* 0x800309bc */
    var_v0 = *(uint16_t*)(reg_s4 + 26); /* 0x800309c4 */
    var_v0 = var_v0 & 0xf; /* 0x800309cc */
    /* Branch beqz at 0x800309d0 */
    var_a1 = 336; /* 0x800309d4 */
    var_a2 = 211; /* 0x800309d8 */
    var_a3 = var_s5 | 0x300; /* 0x800309dc */
    var_a0 = 0x801e << 16; /* 0x800309e0 */
    var_a0 = var_a0 + 3408; /* 0x800309e4 */
    var_v0 = var_v0 << 0x1; /* 0x800309e8 */
    var_v0 = var_v0 + var_a0; /* 0x800309ec */
    var_v0 = *(uint16_t*)(reg_v0 + 258); /* 0x800309f0 */
    var_a0 = var_a0 + 3072; /* 0x800309f4 */
    func_0x8002732c(); /* 0x800309f8 */
    var_s0 = var_s5 + 848; /* 0x80030a00 */
    var_a0 = var_s0; /* 0x80030a04 */
    var_a1 = var_s5 | 0x300; /* 0x80030a08 */
    var_a2 = 513; /* 0x80030a0c */
    var_a3 = 1; /* 0x80030a10 */
    var_v0 = 55; /* 0x80030a14 */
    *(int16_t*)(reg_s5 + 848) = var_v0; /* 0x80030a18 */
    var_v0 = 32; /* 0x80030a1c */
    *(int16_t*)(reg_s5 + 850) = var_v0; /* 0x80030a20 */
    var_v0 = 230; /* 0x80030a24 */
    *(int16_t*)(reg_s5 + 852) = var_v0; /* 0x80030a28 */
    var_v0 = 115; /* 0x80030a2c */
    func_0x80027d18(); /* 0x80030a30 */
    var_a0 = var_zero; /* 0x80030a38 */
    var_a1 = var_a0; /* 0x80030a3c */
    func_0x800286a8(); /* 0x80030a40 */
    var_a0 = var_s0; /* 0x80030a48 */
    var_a1 = var_s5 | 0x50; /* 0x80030a4c */
    var_a2 = var_zero; /* 0x80030a50 */
    var_a3 = var_a2; /* 0x80030a54 */
    var_v0 = 16; /* 0x80030a58 */
    func_0x80028364(); /* 0x80030a5c */
    var_a0 = 24; /* 0x80030a64 */
    var_a1 = 12; /* 0x80030a68 */
    var_a2 = 292; /* 0x80030a6c */
    func_0x80029548(); /* 0x80030a70 */
    var_a0 = 324; /* 0x80030a78 */
    var_a1 = 12; /* 0x80030a7c */
    var_a2 = 292; /* 0x80030a80 */
    func_0x80029548(); /* 0x80030a84 */
    var_ra = *(int32_t*)(stack + 132); /* 0x80030a8c */
    var_s6 = *(int32_t*)(stack + 128); /* 0x80030a90 */
    var_s5 = *(int32_t*)(stack + 124); /* 0x80030a94 */
    var_s4 = *(int32_t*)(stack + 120); /* 0x80030a98 */
    var_s3 = *(int32_t*)(stack + 116); /* 0x80030a9c */
    var_s2 = *(int32_t*)(stack + 112); /* 0x80030aa0 */
    var_s1 = *(int32_t*)(stack + 108); /* 0x80030aa4 */
    var_s0 = *(int32_t*)(stack + 104); /* 0x80030aa8 */
    var_sp = var_sp + 136; /* 0x80030aac */
    return; /* 0x80030ab0 */
}

/* Function at 0x80030ab4 */
void func_0x80030ab4() {
    /* Local variables */
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -48; /* 0x80030ab8 */
    var_v0 = 0x8008 << 16; /* 0x80030abc */
    *(int32_t*)(stack + 44) = var_ra; /* 0x80030ac0 */
    *(int32_t*)(stack + 40) = var_s0; /* 0x80030ac4 */
    var_a2 = var_v0 + 32696; /* 0x80030ac8 */
    var_v0 = 0x8008 << 16; /* 0x80030aec */
    var_a2 = var_v0 + 32704; /* 0x80030af0 */
    func_0x800174c4(); /* 0x80030b14 */
    var_v0 = 80; /* 0x80030b1c */
    *(int8_t*)(reg_s0 + 784) = var_v0; /* 0x80030b20 */
    *(int8_t*)(reg_s0 + 768) = var_v0; /* 0x80030b24 */
    *(int8_t*)(reg_s0 + 785) = var_v0; /* 0x80030b28 */
    *(int8_t*)(reg_s0 + 769) = var_v0; /* 0x80030b2c */
    *(int8_t*)(reg_s0 + 786) = var_v0; /* 0x80030b30 */
    *(int8_t*)(reg_s0 + 770) = var_v0; /* 0x80030b34 */
    var_v0 = 73; /* 0x80030b38 */
    *(int8_t*)(reg_s0 + 771) = var_v0; /* 0x80030b3c */
    var_v0 = *(uint8_t*)(reg_s0 + 740); /* 0x80030b40 */
    var_v1 = 49; /* 0x80030b44 */
    /* Branch beqz at 0x80030b4c */
    *(int8_t*)(reg_s0 + 787) = var_v1; /* 0x80030b50 */
    var_v1 = *(uint8_t*)(reg_s0 + 740); /* 0x80030b54 */
    var_v0 = 8; /* 0x80030b58 */
    var_v0 = *(uint8_t*)(reg_s0 + 740); /* 0x80030b64 */
    var_v0 = var_v0 + -24; /* 0x80030b6c */
    *(int16_t*)(reg_s0 + 864) = var_v0; /* 0x80030b70 */
    var_v0 = *(uint8_t*)(reg_s0 + 864); /* 0x80030b74 */
    var_v1 = *(uint8_t*)(reg_s0 + 864); /* 0x80030b78 */
    *(int8_t*)(reg_s0 + 814) = var_zero; /* 0x80030b7c */
    var_v0 = var_v0 << 0x2; /* 0x80030b80 */
    var_v1 = var_v1 << 0x1; /* 0x80030b84 */
    var_v1 = var_v1 + 48; /* 0x80030b88 */
    *(int8_t*)(reg_s0 + 813) = var_v1; /* 0x80030b8c */
    var_v1 = *(uint16_t*)(reg_s0 + 732); /* 0x80030b90 */
    var_v0 = var_v0 + 96; /* 0x80030b94 */
    *(int8_t*)(reg_s0 + 812) = var_v0; /* 0x80030b98 */
    var_v0 = 2; /* 0x80030b9c */
    /* Branch bne at 0x80030ba0 */
    func_0x8003025c(); /* 0x80030ba8 */
    func_0x8002fe4c(); /* 0x80030bb8 */
    func_0x8002c9e8(); /* 0x80030bc0 */
    func_0x80017680(); /* 0x80030bc8 */
    var_ra = *(int32_t*)(stack + 44); /* 0x80030bd0 */
    var_s0 = *(int32_t*)(stack + 40); /* 0x80030bd4 */
    var_sp = var_sp + 48; /* 0x80030bd8 */
    return; /* 0x80030bdc */
}

/* Function at 0x80030be0 */
void func_0x80030be0() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -120; /* 0x80030be4 */
    var_v0 = 0x8008 << 16; /* 0x80030be8 */
    *(int32_t*)(stack + 116) = var_ra; /* 0x80030bec */
    *(int32_t*)(stack + 112) = var_s6; /* 0x80030bf0 */
    *(int32_t*)(stack + 108) = var_s5; /* 0x80030bf4 */
    *(int32_t*)(stack + 104) = var_s4; /* 0x80030bf8 */
    *(int32_t*)(stack + 100) = var_s3; /* 0x80030bfc */
    *(int32_t*)(stack + 96) = var_s2; /* 0x80030c00 */
    *(int32_t*)(stack + 92) = var_s1; /* 0x80030c04 */
    *(int32_t*)(stack + 88) = var_s0; /* 0x80030c08 */
    var_a2 = var_v0 + 32604; /* 0x80030c0c */
    var_v0 = 0x8008 << 16; /* 0x80030c24 */
    var_a2 = var_v0 + 32712; /* 0x80030c28 */
    var_v0 = 0x8008 << 16; /* 0x80030c4c */
    var_a2 = var_v0 + 32720; /* 0x80030c50 */
    var_v0 = 0x8008 << 16; /* 0x80030c74 */
    var_a2 = var_v0 + 32728; /* 0x80030c78 */
    var_v1 = 0x8008 << 16; /* 0x80030c9c */
    var_s2 = 0x1f80 << 16; /* 0x80030ca0 */
    var_v0 = *(uint16_t*)(reg_s2 + 736); /* 0x80030ca4 */
    var_a3 = var_v1 + 32736; /* 0x80030ca8 */
    var_s5 = 64; /* 0x80030cc0 */
    var_s6 = 32; /* 0x80030cc4 */
    var_v0 = var_v0 << 0x10; /* 0x80030cc8 */
    var_a0 = var_v0 >> 0x10; /* 0x80030ccc */
    var_v0 = var_a0; /* 0x80030cd4 */
    var_v0 = var_a0 + 7; /* 0x80030cd8 */
    var_t0 = var_v0 >> 0x3; /* 0x80030cdc */
    var_v0 = var_t0 << 0x3; /* 0x80030ce0 */
    var_v0 = var_v0 << 0x10; /* 0x80030ce8 */
    var_v1 = var_v0 >> 0x10; /* 0x80030cec */
    /* Branch beqz at 0x80030cf4 */
    var_v0 = var_v1 << 0x6; /* 0x80030cf8 */
    var_v0 = var_v0 + 50; /* 0x80030cfc */
    *(int16_t*)(reg_s2 + 816) = var_v0; /* 0x80030d00 */
    var_a0 = 0x1f80 << 16; /* 0x80030d04 */
    var_a0 = var_a0 | 0x330; /* 0x80030d08 */
    var_a1 = 0x1f80 << 16; /* 0x80030d0c */
    var_a1 = var_a1 | 0x32c; /* 0x80030d10 */
    var_a2 = 513; /* 0x80030d14 */
    var_a3 = 1; /* 0x80030d18 */
    var_v0 = var_t0 << 0x5; /* 0x80030d1c */
    var_v0 = var_v0 + 35; /* 0x80030d20 */
    *(int16_t*)(reg_s2 + 818) = var_v0; /* 0x80030d24 */
    var_v0 = 56; /* 0x80030d28 */
    *(int16_t*)(reg_s2 + 820) = var_v0; /* 0x80030d2c */
    var_v0 = 28; /* 0x80030d30 */
    func_0x80027d18(); /* 0x80030d34 */
    var_v0 = *(int16_t*)(reg_s2 + 0); /* 0x80030d3c */
    /* Branch blez at 0x80030d44 */
    var_a0 = var_sp + 40; /* 0x80030d48 */
    var_a1 = var_s2 | 0x32c; /* 0x80030d4c */
    func_0x8002916c(); /* 0x80030d50 */
    var_v0 = *(int16_t*)(reg_s2 + 0); /* 0x80030d58 */
    /* Branch beqz at 0x80030d64 */
    var_a0 = var_sp + 48; /* 0x80030d68 */
    var_a1 = var_s2 | 0x32c; /* 0x80030d6c */
    func_0x8002916c(); /* 0x80030d70 */
    var_a0 = 0xdd67 << 16; /* 0x80030d78 */
    var_v0 = *(int16_t*)(reg_s2 + 0); /* 0x80030d7c */
    var_a0 = var_a0 | 0xc8a7; /* 0x80030d80 */
    var_v1 = var_v0 << 0x4; /* 0x80030d84 */
    var_v1 = var_v1 + var_v0; /* 0x80030d88 */
    var_v1 = var_v1 << 0x3; /* 0x80030d8c */
    var_s0 = var_sp + 64; /* 0x80030d94 */
    var_a1 = var_s0; /* 0x80030d98 */
    var_a2 = 1; /* 0x80030d9c */
    var_a0 = var_sp + 56; /* 0x80030da0 */
    var_v0 = var_t1 + var_v1; /* 0x80030da8 */
    var_v0 = var_v0 >> 0x6; /* 0x80030dac */
    var_v1 = var_v1 >> 0x1f; /* 0x80030db0 */
    var_v0 = var_v0 + 47; /* 0x80030db8 */
    func_0x80028220(); /* 0x80030dbc */
    var_a0 = 1; /* 0x80030dc4 */
    var_a1 = var_zero; /* 0x80030dc8 */
    func_0x800286a8(); /* 0x80030dcc */
    var_a0 = var_sp + 72; /* 0x80030dd4 */
    var_a1 = var_s0; /* 0x80030dd8 */
    var_v0 = *(uint16_t*)(stack + 56); /* 0x80030ddc */
    var_v1 = *(uint16_t*)(stack + 60); /* 0x80030de0 */
    var_a3 = *(uint16_t*)(stack + 62); /* 0x80030de4 */
    var_v0 = var_v0 + -2; /* 0x80030de8 */
    *(int16_t*)(stack + 72) = var_v0; /* 0x80030dec */
    var_v0 = *(uint16_t*)(stack + 58); /* 0x80030df0 */
    var_a2 = 1; /* 0x80030df4 */
    *(int16_t*)(stack + 76) = var_v1; /* 0x80030df8 */
    *(int16_t*)(stack + 78) = var_a3; /* 0x80030dfc */
    var_v0 = var_v0 + -1; /* 0x80030e00 */
    func_0x80028220(); /* 0x80030e04 */
    var_a0 = 2; /* 0x80030e0c */
    var_a1 = var_zero; /* 0x80030e10 */
    func_0x800286a8(); /* 0x80030e14 */
    var_a0 = var_s2 | 0x33c; /* 0x80030e1c */
    var_a1 = var_s2 | 0x358; /* 0x80030e20 */
    var_a2 = var_s2 | 0x35c; /* 0x80030e24 */
    var_a3 = var_zero; /* 0x80030e28 */
    var_v0 = 60; /* 0x80030e2c */
    *(int16_t*)(reg_s2 + 828) = var_v0; /* 0x80030e30 */
    var_v0 = 12; /* 0x80030e34 */
    *(int16_t*)(reg_s2 + 830) = var_v0; /* 0x80030e38 */
    var_v0 = 196; /* 0x80030e3c */
    *(int16_t*)(reg_s2 + 832) = var_v0; /* 0x80030e40 */
    var_v0 = 16; /* 0x80030e44 */
    *(int16_t*)(reg_s2 + 834) = var_v0; /* 0x80030e48 */
    var_v0 = 896; /* 0x80030e4c */
    *(int16_t*)(reg_s2 + 856) = var_v0; /* 0x80030e50 */
    var_v0 = 448; /* 0x80030e54 */
    *(int16_t*)(reg_s2 + 858) = var_v0; /* 0x80030e58 */
    var_v0 = 544; /* 0x80030e5c */
    *(int16_t*)(reg_s2 + 860) = var_v0; /* 0x80030e60 */
    var_v0 = 502; /* 0x80030e64 */
    *(int16_t*)(reg_s2 + 862) = var_v0; /* 0x80030e68 */
    var_v0 = 3; /* 0x80030e6c */
    func_0x80028364(); /* 0x80030e70 */
    var_v0 = 0x6666 << 16; /* 0x80030e78 */
    var_a0 = *(int16_t*)(reg_s2 + 0); /* 0x80030e7c */
    var_v0 = var_v0 | 0x6667; /* 0x80030e80 */
    var_a0 = var_a0 << 0x2; /* 0x80030e84 */
    var_s3 = var_zero; /* 0x80030e8c */
    var_s4 = 16; /* 0x80030e90 */
    var_v0 = 35; /* 0x80030e94 */
    *(int16_t*)(reg_s2 + 850) = var_v0; /* 0x80030e98 */
    var_v0 = 56; /* 0x80030e9c */
    *(int16_t*)(reg_s2 + 852) = var_v0; /* 0x80030ea0 */
    var_v0 = 28; /* 0x80030ea4 */
    *(int16_t*)(reg_s2 + 854) = var_v0; /* 0x80030ea8 */
    var_v0 = var_a0 >> 0x1f; /* 0x80030eac */
    var_v1 = var_t1 >> 0x3; /* 0x80030eb4 */
    var_v0 = var_s0 << 0x2; /* 0x80030ebc */
    var_v0 = var_v0 + var_s0; /* 0x80030ec0 */
    var_v0 = var_v0 << 0x2; /* 0x80030ec4 */
    var_v0 = 50; /* 0x80030ecc */
    *(int16_t*)(reg_s2 + 848) = var_v0; /* 0x80030ed0 */
    var_s1 = var_zero; /* 0x80030ed4 */
    var_a0 = var_s2 + 848; /* 0x80030ed8 */
    var_a2 = var_zero; /* 0x80030edc */
    var_a3 = var_a2; /* 0x80030ee0 */
    *(int32_t*)(stack + 16) = var_s4; /* 0x80030ee4 */
    var_v0 = *(int32_t*)(reg_s2 + 16); /* 0x80030ee8 */
    var_a1 = var_s0 << 0x2; /* 0x80030eec */
    func_0x80028364(); /* 0x80030ef0 */
    var_v0 = 0x6666 << 16; /* 0x80030ef8 */
    var_v0 = var_v0 | 0x6667; /* 0x80030efc */
    var_a0 = var_s0 + 1; /* 0x80030f00 */
    var_v0 = *(uint16_t*)(reg_s2 + 848); /* 0x80030f08 */
    var_s1 = var_s1 + 1; /* 0x80030f0c */
    var_v0 = var_v0 + var_s5; /* 0x80030f10 */
    *(int16_t*)(reg_s2 + 848) = var_v0; /* 0x80030f14 */
    var_v0 = var_a0 >> 0x1f; /* 0x80030f18 */
    var_v1 = var_t1 >> 0x3; /* 0x80030f20 */
    var_v0 = var_s0 << 0x2; /* 0x80030f28 */
    var_v0 = var_v0 + var_s0; /* 0x80030f2c */
    var_v0 = var_v0 << 0x2; /* 0x80030f30 */
    /* Branch bnez at 0x80030f3c */
    var_a0 = var_s2 + 848; /* 0x80030f40 */
    var_v0 = *(uint16_t*)(reg_s2 + 850); /* 0x80030f44 */
    var_s3 = var_s3 + 1; /* 0x80030f48 */
    var_v0 = var_v0 + var_s6; /* 0x80030f4c */
    *(int16_t*)(reg_s2 + 850) = var_v0; /* 0x80030f50 */
    /* Branch bnez at 0x80030f58 */
    var_v0 = 50; /* 0x80030f5c */
    var_a0 = 10; /* 0x80030f60 */
    var_a1 = 9; /* 0x80030f64 */
    var_a2 = 296; /* 0x80030f68 */
    func_0x80029548(); /* 0x80030f6c */
    var_ra = *(int32_t*)(stack + 116); /* 0x80030f74 */
    var_s6 = *(int32_t*)(stack + 112); /* 0x80030f78 */
    var_s5 = *(int32_t*)(stack + 108); /* 0x80030f7c */
    var_s4 = *(int32_t*)(stack + 104); /* 0x80030f80 */
    var_s3 = *(int32_t*)(stack + 100); /* 0x80030f84 */
    var_s2 = *(int32_t*)(stack + 96); /* 0x80030f88 */
    var_s1 = *(int32_t*)(stack + 92); /* 0x80030f8c */
    var_s0 = *(int32_t*)(stack + 88); /* 0x80030f90 */
    var_sp = var_sp + 120; /* 0x80030f94 */
    return; /* 0x80030f98 */
}

/* Function at 0x80030f9c */
void func_0x80030f9c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -120; /* 0x80030fa0 */
    var_v0 = 0x8008 << 16; /* 0x80030fa4 */
    *(int32_t*)(stack + 116) = var_ra; /* 0x80030fa8 */
    *(int32_t*)(stack + 112) = var_s6; /* 0x80030fac */
    *(int32_t*)(stack + 108) = var_s5; /* 0x80030fb0 */
    *(int32_t*)(stack + 104) = var_s4; /* 0x80030fb4 */
    *(int32_t*)(stack + 100) = var_s3; /* 0x80030fb8 */
    *(int32_t*)(stack + 96) = var_s2; /* 0x80030fbc */
    *(int32_t*)(stack + 92) = var_s1; /* 0x80030fc0 */
    *(int32_t*)(stack + 88) = var_s0; /* 0x80030fc4 */
    var_a2 = var_v0 + 32604; /* 0x80030fc8 */
    var_v0 = 0x8008 << 16; /* 0x80030fe0 */
    var_a2 = var_v0 + 32740; /* 0x80030fe4 */
    var_v0 = 0x8008 << 16; /* 0x80031008 */
    var_a2 = var_v0 + 32748; /* 0x8003100c */
    var_v0 = 0x8008 << 16; /* 0x80031030 */
    var_a2 = var_v0 + 32756; /* 0x80031034 */
    var_v1 = 0x8008 << 16; /* 0x80031058 */
    var_s2 = 0x1f80 << 16; /* 0x8003105c */
    var_v0 = *(uint16_t*)(reg_s2 + 736); /* 0x80031060 */
    var_a3 = var_v1 + 32736; /* 0x80031064 */
    var_s5 = 64; /* 0x8003107c */
    var_s6 = 32; /* 0x80031080 */
    var_v0 = var_v0 << 0x10; /* 0x80031084 */
    var_a0 = var_v0 >> 0x10; /* 0x80031088 */
    var_v0 = var_a0; /* 0x80031090 */
    var_v0 = var_a0 + 7; /* 0x80031094 */
    var_t0 = var_v0 >> 0x3; /* 0x80031098 */
    var_v0 = var_t0 << 0x3; /* 0x8003109c */
    var_v0 = var_v0 << 0x10; /* 0x800310a4 */
    var_v1 = var_v0 >> 0x10; /* 0x800310a8 */
    /* Branch bnez at 0x800310b0 */
    var_v0 = var_v1 << 0x6; /* 0x800310b4 */
    var_v0 = var_v0 + 82; /* 0x800310b8 */
    *(int16_t*)(reg_s2 + 816) = var_v0; /* 0x800310bc */
    var_a0 = 0x1f80 << 16; /* 0x800310c0 */
    var_a0 = var_a0 | 0x330; /* 0x800310c4 */
    var_a1 = 0x1f80 << 16; /* 0x800310c8 */
    var_a1 = var_a1 | 0x32c; /* 0x800310cc */
    var_a2 = 513; /* 0x800310d0 */
    var_a3 = 1; /* 0x800310d4 */
    var_v0 = var_t0 << 0x5; /* 0x800310d8 */
    var_v0 = var_v0 + 35; /* 0x800310dc */
    *(int16_t*)(reg_s2 + 818) = var_v0; /* 0x800310e0 */
    var_v0 = 56; /* 0x800310e4 */
    *(int16_t*)(reg_s2 + 820) = var_v0; /* 0x800310e8 */
    var_v0 = 28; /* 0x800310ec */
    func_0x80027d18(); /* 0x800310f0 */
    var_v0 = *(uint16_t*)(reg_s2 + 2); /* 0x800310f8 */
    var_v0 = var_v0 << 0x10; /* 0x80031100 */
    /* Branch blez at 0x80031104 */
    var_a0 = var_sp + 40; /* 0x80031108 */
    var_a1 = var_s2 | 0x32c; /* 0x8003110c */
    func_0x8002916c(); /* 0x80031110 */
    var_v0 = *(uint16_t*)(reg_s2 + 2); /* 0x80031118 */
    var_v0 = var_v0 << 0x10; /* 0x80031120 */
    var_v0 = var_v0 >> 0x10; /* 0x80031124 */
    /* Branch beqz at 0x8003112c */
    var_a0 = var_sp + 48; /* 0x80031130 */
    var_a1 = var_s2 | 0x32c; /* 0x80031134 */
    func_0x8002916c(); /* 0x80031138 */
    var_a0 = 0xdd67 << 16; /* 0x80031140 */
    var_v0 = *(uint16_t*)(reg_s2 + 2); /* 0x80031144 */
    var_a0 = var_a0 | 0xc8a7; /* 0x80031148 */
    var_v0 = var_v0 << 0x10; /* 0x8003114c */
    var_v0 = var_v0 >> 0x10; /* 0x80031150 */
    var_v1 = var_v0 << 0x4; /* 0x80031154 */
    var_v1 = var_v1 + var_v0; /* 0x80031158 */
    var_v1 = var_v1 << 0x3; /* 0x8003115c */
    var_s0 = var_sp + 64; /* 0x80031164 */
    var_a1 = var_s0; /* 0x80031168 */
    var_a2 = 1; /* 0x8003116c */
    var_a0 = var_sp + 56; /* 0x80031170 */
    var_v0 = var_t1 + var_v1; /* 0x80031178 */
    var_v0 = var_v0 >> 0x6; /* 0x8003117c */
    var_v1 = var_v1 >> 0x1f; /* 0x80031180 */
    var_v0 = var_v0 + 47; /* 0x80031188 */
    func_0x80028220(); /* 0x8003118c */
    var_a0 = 1; /* 0x80031194 */
    var_a1 = var_zero; /* 0x80031198 */
    func_0x800286a8(); /* 0x8003119c */
    var_a0 = var_sp + 72; /* 0x800311a4 */
    var_a1 = var_s0; /* 0x800311a8 */
    var_v0 = *(uint16_t*)(stack + 56); /* 0x800311ac */
    var_v1 = *(uint16_t*)(stack + 60); /* 0x800311b0 */
    var_a3 = *(uint16_t*)(stack + 62); /* 0x800311b4 */
    var_v0 = var_v0 + -2; /* 0x800311b8 */
    *(int16_t*)(stack + 72) = var_v0; /* 0x800311bc */
    var_v0 = *(uint16_t*)(stack + 58); /* 0x800311c0 */
    var_a2 = 1; /* 0x800311c4 */
    *(int16_t*)(stack + 76) = var_v1; /* 0x800311c8 */
    *(int16_t*)(stack + 78) = var_a3; /* 0x800311cc */
    var_v0 = var_v0 + -1; /* 0x800311d0 */
    func_0x80028220(); /* 0x800311d4 */
    var_a0 = 2; /* 0x800311dc */
    var_a1 = var_zero; /* 0x800311e0 */
    func_0x800286a8(); /* 0x800311e4 */
    var_a0 = var_s2 | 0x33c; /* 0x800311ec */
    var_a1 = var_s2 | 0x358; /* 0x800311f0 */
    var_a2 = var_s2 | 0x35c; /* 0x800311f4 */
    var_a3 = var_zero; /* 0x800311f8 */
    var_v0 = 384; /* 0x800311fc */
    *(int16_t*)(reg_s2 + 828) = var_v0; /* 0x80031200 */
    var_v0 = 12; /* 0x80031204 */
    *(int16_t*)(reg_s2 + 830) = var_v0; /* 0x80031208 */
    var_v0 = 196; /* 0x8003120c */
    *(int16_t*)(reg_s2 + 832) = var_v0; /* 0x80031210 */
    var_v0 = 16; /* 0x80031214 */
    *(int16_t*)(reg_s2 + 834) = var_v0; /* 0x80031218 */
    var_v0 = 896; /* 0x8003121c */
    *(int16_t*)(reg_s2 + 856) = var_v0; /* 0x80031220 */
    var_v0 = 464; /* 0x80031224 */
    *(int16_t*)(reg_s2 + 858) = var_v0; /* 0x80031228 */
    var_v0 = 544; /* 0x8003122c */
    *(int16_t*)(reg_s2 + 860) = var_v0; /* 0x80031230 */
    var_v0 = 502; /* 0x80031234 */
    *(int16_t*)(reg_s2 + 862) = var_v0; /* 0x80031238 */
    var_v0 = 3; /* 0x8003123c */
    func_0x80028364(); /* 0x80031240 */
    var_v0 = 0x6666 << 16; /* 0x80031248 */
    var_v1 = *(uint16_t*)(reg_s2 + 2); /* 0x8003124c */
    var_v0 = var_v0 | 0x6667; /* 0x80031250 */
    var_v1 = var_v1 << 0x10; /* 0x80031254 */
    var_v1 = var_v1 >> 0xe; /* 0x80031258 */
    var_s3 = var_zero; /* 0x80031260 */
    var_s4 = 16; /* 0x80031264 */
    var_v0 = 35; /* 0x80031268 */
    *(int16_t*)(reg_s2 + 850) = var_v0; /* 0x8003126c */
    var_v0 = 56; /* 0x80031270 */
    *(int16_t*)(reg_s2 + 852) = var_v0; /* 0x80031274 */
    var_v0 = 28; /* 0x80031278 */
    *(int16_t*)(reg_s2 + 854) = var_v0; /* 0x8003127c */
    var_v0 = var_v1 >> 0x1f; /* 0x80031280 */
    var_a0 = var_t1 >> 0x3; /* 0x80031288 */
    var_v0 = var_s0 << 0x2; /* 0x80031290 */
    var_v0 = var_v0 + var_s0; /* 0x80031294 */
    var_v0 = var_v0 << 0x2; /* 0x80031298 */
    var_v0 = 338; /* 0x800312a0 */
    *(int16_t*)(reg_s2 + 848) = var_v0; /* 0x800312a4 */
    var_s1 = var_zero; /* 0x800312a8 */
    var_a0 = var_s2 + 848; /* 0x800312ac */
    var_a2 = var_zero; /* 0x800312b0 */
    var_a3 = var_a2; /* 0x800312b4 */
    var_a1 = var_s0 << 0x2; /* 0x800312b8 */
    *(int32_t*)(stack + 16) = var_s4; /* 0x800312bc */
    var_v0 = *(int32_t*)(reg_s2 + 16); /* 0x800312c0 */
    var_a1 = var_a1 + 80; /* 0x800312c4 */
    func_0x80028364(); /* 0x800312c8 */
    var_v0 = 0x6666 << 16; /* 0x800312d0 */
    var_v0 = var_v0 | 0x6667; /* 0x800312d4 */
    var_a0 = var_s0 + 1; /* 0x800312d8 */
    var_v0 = *(uint16_t*)(reg_s2 + 848); /* 0x800312e0 */
    var_s1 = var_s1 + 1; /* 0x800312e4 */
    var_v0 = var_v0 + var_s5; /* 0x800312e8 */
    *(int16_t*)(reg_s2 + 848) = var_v0; /* 0x800312ec */
    var_v0 = var_a0 >> 0x1f; /* 0x800312f0 */
    var_v1 = var_t1 >> 0x3; /* 0x800312f8 */
    var_v0 = var_s0 << 0x2; /* 0x80031300 */
    var_v0 = var_v0 + var_s0; /* 0x80031304 */
    var_v0 = var_v0 << 0x2; /* 0x80031308 */
    /* Branch bnez at 0x80031314 */
    var_a0 = var_s2 + 848; /* 0x80031318 */
    var_v0 = *(uint16_t*)(reg_s2 + 850); /* 0x8003131c */
    var_s3 = var_s3 + 1; /* 0x80031320 */
    var_v0 = var_v0 + var_s6; /* 0x80031324 */
    *(int16_t*)(reg_s2 + 850) = var_v0; /* 0x80031328 */
    /* Branch bnez at 0x80031330 */
    var_v0 = 338; /* 0x80031334 */
    var_a0 = 334; /* 0x80031338 */
    var_a1 = 9; /* 0x8003133c */
    var_a2 = 296; /* 0x80031340 */
    func_0x80029548(); /* 0x80031344 */
    var_ra = *(int32_t*)(stack + 116); /* 0x8003134c */
    var_s6 = *(int32_t*)(stack + 112); /* 0x80031350 */
    var_s5 = *(int32_t*)(stack + 108); /* 0x80031354 */
    var_s4 = *(int32_t*)(stack + 104); /* 0x80031358 */
    var_s3 = *(int32_t*)(stack + 100); /* 0x8003135c */
    var_s2 = *(int32_t*)(stack + 96); /* 0x80031360 */
    var_s1 = *(int32_t*)(stack + 92); /* 0x80031364 */
    var_s0 = *(int32_t*)(stack + 88); /* 0x80031368 */
    var_sp = var_sp + 120; /* 0x8003136c */
    return; /* 0x80031370 */
}

/* Function at 0x80031374 */
void func_0x80031374() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_at;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -48; /* 0x80031378 */
    *(int32_t*)(stack + 36) = var_s3; /* 0x8003137c */
    var_s3 = 0x1f80 << 16; /* 0x80031380 */
    *(int32_t*)(stack + 44) = var_ra; /* 0x80031384 */
    *(int32_t*)(stack + 40) = var_s4; /* 0x80031388 */
    *(int32_t*)(stack + 32) = var_s2; /* 0x8003138c */
    *(int32_t*)(stack + 28) = var_s1; /* 0x80031390 */
    *(int32_t*)(stack + 24) = var_s0; /* 0x80031394 */
    var_v0 = *(uint16_t*)(reg_s3 + 736); /* 0x80031398 */
    var_v0 = var_v0 << 0x10; /* 0x800313a0 */
    var_v1 = var_v0 >> 0x10; /* 0x800313a4 */
    var_v0 = var_v1; /* 0x800313ac */
    var_v0 = var_v1 + 7; /* 0x800313b0 */
    var_a0 = var_v0 >> 0x3; /* 0x800313b4 */
    var_v0 = var_a0 << 0x3; /* 0x800313b8 */
    var_v0 = var_v0 << 0x10; /* 0x800313c0 */
    var_a1 = var_v0 >> 0x10; /* 0x800313c4 */
    /* Branch beqz at 0x800313cc */
    var_v0 = *(int16_t*)(reg_s3 + 0); /* 0x800313d4 */
    var_v0 = var_v0 + var_a0; /* 0x800313dc */
    var_v0 = var_v0 << 0x2; /* 0x800313e0 */
    var_v0 = var_v0 + var_a1; /* 0x800313e4 */
    var_v1 = *(int32_t*)(reg_s3 + 4); /* 0x800313e8 */
    var_v0 = var_v0 << 0x1; /* 0x800313ec */
    var_v0 = var_v0 + var_v1; /* 0x800313f0 */
    var_s0 = *(int16_t*)(reg_v0 + 0); /* 0x800313f4 */
    var_v0 = *(uint16_t*)(reg_s3 + 2); /* 0x80031400 */
    var_v0 = var_v0 << 0x10; /* 0x80031408 */
    var_v0 = var_v0 >> 0x10; /* 0x8003140c */
    var_v0 = var_v0 + var_a0; /* 0x80031410 */
    var_v0 = var_v0 << 0x2; /* 0x80031414 */
    var_v0 = var_v0 + var_a1; /* 0x80031418 */
    var_v1 = *(int32_t*)(reg_s3 + 8); /* 0x8003141c */
    var_v0 = var_v0 << 0x1; /* 0x80031420 */
    var_v0 = var_v0 + var_v1; /* 0x80031424 */
    var_s0 = *(int16_t*)(reg_v0 + -8); /* 0x80031428 */
    var_v0 = *(uint8_t*)(reg_s3 + 771); /* 0x8003142c */
    var_s1 = -1; /* 0x80031430 */
    var_v0 = var_v0 | 0x80; /* 0x80031434 */
    /* Branch beq at 0x80031438 */
    *(int8_t*)(reg_s3 + 771) = var_v0; /* 0x8003143c */
    var_a1 = 18; /* 0x80031440 */
    var_a2 = 202; /* 0x80031444 */
    var_a0 = *(int32_t*)(reg_s3 + 20); /* 0x80031448 */
    var_v0 = var_s0 << 0x1; /* 0x8003144c */
    var_v0 = var_v0 + var_a0; /* 0x80031450 */
    var_v0 = *(uint16_t*)(reg_v0 + 0); /* 0x80031454 */
    var_a3 = var_s3 | 0x300; /* 0x80031458 */
    var_v0 = var_v0 + 3072; /* 0x8003145c */
    func_0x8002732c(); /* 0x80031460 */
    var_v0 = *(uint8_t*)(reg_s3 + 771); /* 0x80031468 */
    var_v0 = var_v0 & 0x7f; /* 0x80031470 */
    /* Branch beq at 0x80031474 */
    *(int8_t*)(reg_s3 + 771) = var_v0; /* 0x80031478 */
    var_v0 = 0x801c << 16; /* 0x8003147c */
    var_v0 = var_v0 + 30456; /* 0x80031480 */
    var_v1 = var_s0 << 0x1; /* 0x80031484 */
    var_v1 = var_v1 + var_s0; /* 0x80031488 */
    var_v1 = var_v1 << 0x2; /* 0x8003148c */
    var_v1 = var_v1 << 0x2; /* 0x80031494 */
    var_s4 = var_v1 + var_v0; /* 0x80031498 */
    var_v0 = *(uint8_t*)(reg_s4 + 319); /* 0x8003149c */
    /* Branch beqz at 0x800314a4 */
    var_a1 = 74; /* 0x800314a8 */
    var_a2 = 215; /* 0x800314ac */
    var_s2 = var_s3 + 768; /* 0x800314b0 */
    var_a3 = var_s2; /* 0x800314b4 */
    var_a0 = 0x801e << 16; /* 0x800314b8 */
    var_a0 = var_a0 + 3408; /* 0x800314bc */
    var_v0 = *(uint16_t*)(reg_a0 + 58); /* 0x800314c0 */
    var_a0 = var_a0 + 3072; /* 0x800314c4 */
    func_0x8002732c(); /* 0x800314c8 */
    var_a1 = 138; /* 0x800314d0 */
    var_a2 = 215; /* 0x800314d4 */
    var_s1 = var_s3 + 784; /* 0x800314d8 */
    var_a3 = var_s1; /* 0x800314dc */
    var_a0 = *(uint8_t*)(reg_s4 + 320); /* 0x800314e0 */
    var_s0 = 0x300 << 16; /* 0x800314e4 */
    func_0x80027440(); /* 0x800314e8 */
    var_a0 = 14; /* 0x800314f0 */
    var_a1 = 174; /* 0x800314f4 */
    var_a2 = 215; /* 0x800314f8 */
    func_0x80026ecc(); /* 0x800314fc */
    var_a1 = 190; /* 0x80031504 */
    var_a2 = 215; /* 0x80031508 */
    var_a0 = *(uint8_t*)(reg_s4 + 319); /* 0x8003150c */
    var_a3 = var_s1; /* 0x80031510 */
    func_0x80027440(); /* 0x80031514 */
    var_v0 = *(uint16_t*)(reg_s4 + 316); /* 0x8003151c */
    /* Branch beqz at 0x80031524 */
    var_a1 = 250; /* 0x80031528 */
    var_a2 = 215; /* 0x8003152c */
    var_s1 = var_s3 + 768; /* 0x80031530 */
    var_a3 = var_s1; /* 0x80031534 */
    var_a0 = 0x801e << 16; /* 0x80031538 */
    var_a0 = var_a0 + 3408; /* 0x8003153c */
    var_v0 = *(uint16_t*)(reg_a0 + 56); /* 0x80031540 */
    var_a0 = var_a0 + 3072; /* 0x80031544 */
    func_0x8002732c(); /* 0x80031548 */
    var_a0 = 0x2416 << 16; /* 0x80031550 */
    var_v1 = *(uint16_t*)(reg_s4 + 316); /* 0x80031554 */
    var_a0 = var_a0 | 0x8e19; /* 0x80031558 */
    var_v0 = var_v1 << 0x1; /* 0x8003155c */
    var_v0 = var_v0 + var_v1; /* 0x80031560 */
    var_v0 = var_v0 << 0x3; /* 0x80031564 */
    var_v0 = var_v0 + var_v1; /* 0x80031568 */
    var_v0 = var_v0 << 0x2; /* 0x8003156c */
    var_v0 = var_v1 << 0x5; /* 0x80031574 */
    var_v0 = var_v0 << 0x2; /* 0x8003157c */
    var_v0 = var_v0 + var_v1; /* 0x80031584 */
    var_v0 = var_v0 << 0x3; /* 0x80031588 */
    var_a1 = 300; /* 0x80031590 */
    var_a2 = 215; /* 0x80031594 */
    var_s0 = var_s3 + 784; /* 0x80031598 */
    var_a3 = var_s0; /* 0x8003159c */
    var_v1 = var_t0 >> 0x6; /* 0x800315a0 */
    var_v0 = var_v0 >> 0x1f; /* 0x800315a4 */
    var_at = 0x8009 << 16; /* 0x800315a8 */
    *(int16_t*)(reg_at + -32354) = var_v1; /* 0x800315ac */
    var_v1 = var_t2 >> 0x6; /* 0x800315b4 */
    var_v0 = 0x8009 << 16; /* 0x800315bc */
    var_v0 = *(uint16_t*)(reg_v0 + -32354); /* 0x800315c0 */
    var_a0 = 0x300 << 16; /* 0x800315c4 */
    var_at = 0x8009 << 16; /* 0x800315c8 */
    *(int16_t*)(reg_at + -32376) = var_v1; /* 0x800315cc */
    func_0x80027440(); /* 0x800315d0 */
    var_a0 = 18; /* 0x800315d8 */
    var_a1 = 339; /* 0x800315dc */
    var_a2 = 215; /* 0x800315e0 */
    func_0x80026ecc(); /* 0x800315e4 */
    var_a1 = 346; /* 0x800315ec */
    var_a2 = 215; /* 0x800315f0 */
    var_a3 = var_s0; /* 0x800315f4 */
    var_v1 = 0x8009 << 16; /* 0x800315f8 */
    var_v1 = *(uint16_t*)(reg_v1 + -32354); /* 0x800315fc */
    var_a0 = 0x8009 << 16; /* 0x80031600 */
    var_a0 = *(uint16_t*)(reg_a0 + -32376); /* 0x80031604 */
    var_v0 = var_v1 << 0x2; /* 0x80031608 */
    var_v0 = var_v0 + var_v1; /* 0x8003160c */
    var_v0 = var_v0 << 0x1; /* 0x80031610 */
    var_a0 = var_a0 & 0xffff; /* 0x80031618 */
    var_v0 = 0x100 << 16; /* 0x8003161c */
    func_0x80027440(); /* 0x80031620 */
    var_a0 = 53; /* 0x80031628 */
    var_a1 = 362; /* 0x8003162c */
    var_a2 = 215; /* 0x80031630 */
    func_0x80026ecc(); /* 0x80031634 */
    var_a0 = 10; /* 0x8003163c */
    var_a1 = 198; /* 0x80031640 */
    var_a2 = 620; /* 0x80031644 */
    func_0x80029548(); /* 0x80031648 */
    var_ra = *(int32_t*)(stack + 44); /* 0x80031650 */
    var_s4 = *(int32_t*)(stack + 40); /* 0x80031654 */
    var_s3 = *(int32_t*)(stack + 36); /* 0x80031658 */
    var_s2 = *(int32_t*)(stack + 32); /* 0x8003165c */
    var_s1 = *(int32_t*)(stack + 28); /* 0x80031660 */
    var_s0 = *(int32_t*)(stack + 24); /* 0x80031664 */
    var_sp = var_sp + 48; /* 0x80031668 */
    return; /* 0x8003166c */
}

/* Function at 0x80031670 */
void func_0x80031670() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_s7;
    int32_t var_s8;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -104; /* 0x80031674 */
    var_t0 = 0x1f80 << 16; /* 0x80031678 */
    *(int32_t*)(stack + 100) = var_ra; /* 0x8003167c */
    *(int32_t*)(stack + 96) = var_s8; /* 0x80031680 */
    *(int32_t*)(stack + 92) = var_s7; /* 0x80031684 */
    *(int32_t*)(stack + 88) = var_s6; /* 0x80031688 */
    *(int32_t*)(stack + 84) = var_s5; /* 0x8003168c */
    *(int32_t*)(stack + 80) = var_s4; /* 0x80031690 */
    *(int32_t*)(stack + 76) = var_s3; /* 0x80031694 */
    *(int32_t*)(stack + 72) = var_s2; /* 0x80031698 */
    *(int32_t*)(stack + 68) = var_s1; /* 0x8003169c */
    *(int32_t*)(stack + 64) = var_s0; /* 0x800316a0 */
    var_v0 = *(uint16_t*)(reg_t0 + 736); /* 0x800316a4 */
    var_v0 = var_v0 << 0x10; /* 0x800316ac */
    var_v1 = var_v0 >> 0x10; /* 0x800316b0 */
    var_v0 = var_v1; /* 0x800316b8 */
    var_v0 = var_v1 + 7; /* 0x800316bc */
    var_v0 = var_v0 >> 0x3; /* 0x800316c0 */
    var_v0 = var_v0 << 0x3; /* 0x800316c4 */
    var_v0 = var_v0 << 0x10; /* 0x800316cc */
    var_v0 = var_v0 >> 0x10; /* 0x800316d0 */
    /* Branch beqz at 0x800316d8 */
    var_t1 = 334; /* 0x800316dc */
    *(int16_t*)(stack + 32) = var_t1; /* 0x800316e0 */
    var_t1 = 9; /* 0x800316e4 */
    *(int16_t*)(stack + 40) = var_t1; /* 0x800316e8 */
    var_t1 = 135; /* 0x800316ec */
    *(int32_t*)(stack + 24) = var_t1; /* 0x800316f0 */
    var_t1 = *(uint16_t*)(stack + 32); /* 0x800316f4 */
    var_s4 = 342; /* 0x800316fc */
    var_t1 = 10; /* 0x80031700 */
    *(int16_t*)(stack + 32) = var_t1; /* 0x80031704 */
    var_t1 = 9; /* 0x80031708 */
    *(int16_t*)(stack + 40) = var_t1; /* 0x8003170c */
    var_t1 = 135; /* 0x80031710 */
    *(int32_t*)(stack + 24) = var_t1; /* 0x80031714 */
    var_t1 = *(uint16_t*)(stack + 32); /* 0x80031718 */
    var_s4 = 18; /* 0x8003171c */
    *(int16_t*)(reg_t0 + 848) = var_t1; /* 0x80031720 */
    var_t1 = *(uint16_t*)(stack + 40); /* 0x80031724 */
    var_v0 = 192; /* 0x80031728 */
    *(int16_t*)(reg_t0 + 852) = var_v0; /* 0x8003172c */
    var_v0 = 124; /* 0x80031730 */
    *(int16_t*)(reg_t0 + 854) = var_v0; /* 0x80031734 */
    *(int16_t*)(reg_t0 + 850) = var_t1; /* 0x80031738 */
    var_v0 = *(uint16_t*)(reg_t0 + 736); /* 0x8003173c */
    var_a2 = var_zero; /* 0x80031740 */
    var_v0 = var_v0 << 0x10; /* 0x80031744 */
    var_v1 = var_v0 >> 0x10; /* 0x80031748 */
    var_v0 = var_v1; /* 0x80031750 */
    var_v0 = var_v1 + 7; /* 0x80031754 */
    var_a0 = var_v0 >> 0x3; /* 0x80031758 */
    var_v0 = var_a0 << 0x3; /* 0x8003175c */
    var_v0 = var_a1 << 0x10; /* 0x80031764 */
    var_v0 = var_v0 >> 0x10; /* 0x80031768 */
    /* Branch beqz at 0x80031770 */
    var_v0 = *(int16_t*)(reg_t0 + 0); /* 0x80031778 */
    var_v0 = var_v0 + var_a0; /* 0x80031780 */
    var_v0 = var_v0 << 0x2; /* 0x80031784 */
    var_v0 = var_v0 + var_a1; /* 0x80031788 */
    var_v1 = *(int32_t*)(reg_t0 + 4); /* 0x8003178c */
    var_v0 = var_v0 << 0x10; /* 0x80031794 */
    var_v0 = *(uint16_t*)(reg_t0 + 2); /* 0x80031798 */
    var_v0 = var_v0 << 0x10; /* 0x800317a0 */
    var_v0 = var_v0 >> 0x10; /* 0x800317a4 */
    var_v0 = var_v0 + var_a0; /* 0x800317a8 */
    var_v0 = var_v0 << 0x2; /* 0x800317ac */
    var_v0 = var_v0 + -4; /* 0x800317b0 */
    var_v0 = var_v0 + var_a1; /* 0x800317b4 */
    var_v0 = var_v0 << 0x10; /* 0x800317b8 */
    var_v1 = *(int32_t*)(reg_t0 + 8); /* 0x800317bc */
    var_v0 = var_v0 >> 0xf; /* 0x800317c0 */
    var_v0 = var_v0 + var_v1; /* 0x800317c4 */
    var_s3 = *(uint16_t*)(reg_v0 + 0); /* 0x800317c8 */
    var_v1 = *(int16_t*)(reg_v0 + 0); /* 0x800317cc */
    var_v0 = -1; /* 0x800317d0 */
    /* Branch bne at 0x800317d4 */
    var_v0 = var_a2; /* 0x800317d8 */
    var_a2 = 1; /* 0x800317dc */
    var_v0 = var_a2; /* 0x800317e0 */
    /* Branch bnez at 0x800317e4 */
    var_s0 = var_t0 + 856; /* 0x800317e8 */
    var_s1 = var_t0 + 848; /* 0x800317ec */
    var_a0 = var_s1; /* 0x800317f0 */
    var_a1 = var_s0; /* 0x800317f4 */
    var_a2 = var_zero; /* 0x800317f8 */
    var_a3 = var_a2; /* 0x800317fc */
    var_v0 = 640; /* 0x80031800 */
    var_s2 = 16; /* 0x80031804 */
    *(int16_t*)(reg_t0 + 856) = var_v0; /* 0x80031808 */
    *(int16_t*)(reg_t0 + 858) = var_zero; /* 0x8003180c */
    *(int32_t*)(stack + 16) = var_s2; /* 0x80031810 */
    func_0x80028364(); /* 0x80031814 */
    var_a0 = var_s1; /* 0x8003181c */
    var_a1 = var_s0; /* 0x80031820 */
    var_a2 = var_zero; /* 0x80031824 */
    var_a3 = var_a2; /* 0x80031828 */
    var_s5 = var_a2; /* 0x8003182c */
    var_s8 = 2; /* 0x80031830 */
    var_t0 = *(int32_t*)(stack + 56); /* 0x80031834 */
    var_s6 = var_s4; /* 0x80031838 */
    *(int32_t*)(stack + 28) = var_zero; /* 0x8003183c */
    var_v1 = *(uint16_t*)(reg_t0 + 848); /* 0x80031840 */
    var_v0 = 100; /* 0x80031844 */
    *(int16_t*)(reg_t0 + 852) = var_v0; /* 0x80031848 */
    var_v0 = 832; /* 0x8003184c */
    *(int16_t*)(reg_t0 + 856) = var_v0; /* 0x80031850 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x80031854 */
    var_v1 = var_v1 + 192; /* 0x80031858 */
    func_0x80028364(); /* 0x8003185c */
    var_v1 = var_s3 << 0x10; /* 0x80031864 */
    var_v1 = var_v1 >> 0x10; /* 0x80031868 */
    var_v0 = var_v1 << 0x1; /* 0x8003186c */
    var_v0 = var_v0 + var_v1; /* 0x80031870 */
    var_v0 = var_v0 << 0x2; /* 0x80031874 */
    var_v0 = var_v0 << 0x2; /* 0x8003187c */
    var_v1 = 0x801c << 16; /* 0x80031880 */
    var_v1 = var_v1 + 30752; /* 0x80031884 */
    var_s4 = var_v0 + var_v1; /* 0x80031888 */
    var_t0 = *(int32_t*)(stack + 56); /* 0x8003188c */
    var_s3 = var_zero; /* 0x80031890 */
    var_t1 = var_s6 + 42; /* 0x80031894 */
    var_v0 = var_s8 << 0x1; /* 0x80031898 */
    *(int32_t*)(stack + 52) = var_t1; /* 0x8003189c */
    var_t1 = 0x801e << 16; /* 0x800318a0 */
    var_t1 = var_t1 + 3408; /* 0x800318a4 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x800318a8 */
    var_s1 = var_v0 + var_t1; /* 0x800318ac */
    *(int32_t*)(stack + 48) = var_s6; /* 0x800318b0 */
    var_s7 = 14; /* 0x800318b4 */
    /* Branch beq at 0x800318b8 */
    var_v0 = *(uint8_t*)(reg_s4 + 0); /* 0x800318c0 */
    /* Branch beqz at 0x800318c8 */
    var_s5 = var_s5 + 1; /* 0x800318cc */
    var_s0 = var_s2 & 0xffff; /* 0x800318d0 */
    var_a2 = var_s0; /* 0x800318d4 */
    var_a3 = var_t0 + 768; /* 0x800318d8 */
    var_t1 = 0x801e << 16; /* 0x800318dc */
    var_a1 = *(uint16_t*)(stack + 48); /* 0x800318e0 */
    var_a0 = *(uint16_t*)(reg_s1 + 400); /* 0x800318e4 */
    var_t1 = var_t1 + 6480; /* 0x800318e8 */
    *(int32_t*)(stack + 56) = var_t0; /* 0x800318ec */
    func_0x8002732c(); /* 0x800318f0 */
    var_a2 = var_s0; /* 0x800318f8 */
    var_a0 = 0x1300 << 16; /* 0x800318fc */
    var_a1 = *(uint16_t*)(stack + 52); /* 0x80031900 */
    var_t0 = *(int32_t*)(stack + 56); /* 0x80031904 */
    var_v0 = *(uint8_t*)(reg_s4 + 0); /* 0x80031908 */
    var_a3 = var_t0 + 784; /* 0x8003190c */
    func_0x80027440(); /* 0x80031910 */
    var_t0 = *(int32_t*)(stack + 56); /* 0x80031918 */
    var_s4 = var_s4 + 1; /* 0x8003191c */
    var_s1 = var_s1 + 2; /* 0x80031920 */
    var_s8 = var_s8 + 1; /* 0x80031924 */
    var_s3 = var_s3 + 1; /* 0x80031928 */
    /* Branch bnez at 0x80031930 */
    var_s2 = var_s2 + 15; /* 0x80031934 */
    /* Branch beq at 0x80031938 */
    var_t1 = *(int32_t*)(stack + 28); /* 0x80031940 */
    var_s6 = var_s6 + 70; /* 0x80031944 */
    var_t1 = var_t1 + 1; /* 0x80031948 */
    /* Branch bnez at 0x80031950 */
    *(int32_t*)(stack + 28) = var_t1; /* 0x80031954 */
    var_t1 = *(uint16_t*)(stack + 32); /* 0x80031958 */
    var_a2 = 296; /* 0x8003195c */
    var_a0 = var_t1; /* 0x80031960 */
    var_t1 = *(uint16_t*)(stack + 40); /* 0x80031964 */
    var_a3 = 188; /* 0x80031968 */
    func_0x80029548(); /* 0x8003196c */
    var_ra = *(int32_t*)(stack + 100); /* 0x80031974 */
    var_s8 = *(int32_t*)(stack + 96); /* 0x80031978 */
    var_s7 = *(int32_t*)(stack + 92); /* 0x8003197c */
    var_s6 = *(int32_t*)(stack + 88); /* 0x80031980 */
    var_s5 = *(int32_t*)(stack + 84); /* 0x80031984 */
    var_s4 = *(int32_t*)(stack + 80); /* 0x80031988 */
    var_s3 = *(int32_t*)(stack + 76); /* 0x8003198c */
    var_s2 = *(int32_t*)(stack + 72); /* 0x80031990 */
    var_s1 = *(int32_t*)(stack + 68); /* 0x80031994 */
    var_s0 = *(int32_t*)(stack + 64); /* 0x80031998 */
    var_sp = var_sp + 104; /* 0x8003199c */
    return; /* 0x800319a0 */
}

/* Function at 0x800319a4 */
void func_0x800319a4() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_sp;
    int32_t var_v0;

    var_sp = var_sp + -56; /* 0x800319a8 */
    var_v0 = 0x8008 << 16; /* 0x800319ac */
    *(int32_t*)(stack + 48) = var_ra; /* 0x800319b0 */
    *(int32_t*)(stack + 44) = var_s1; /* 0x800319b4 */
    *(int32_t*)(stack + 40) = var_s0; /* 0x800319b8 */
    var_a2 = var_v0 + 32604; /* 0x800319bc */
    var_v0 = 0x8008 << 16; /* 0x800319d4 */
    var_a2 = var_v0 + 32764; /* 0x800319d8 */
    var_a0 = 0x1f80 << 16; /* 0x800319f0 */
    var_a0 = var_a0 | 0x350; /* 0x800319f4 */
    var_a1 = 0x1f80 << 16; /* 0x800319f8 */
    var_a1 = var_a1 | 0x358; /* 0x800319fc */
    var_a2 = 0x1f80 << 16; /* 0x80031a00 */
    var_a2 = var_a2 | 0x35c; /* 0x80031a04 */
    var_a3 = var_zero; /* 0x80031a08 */
    var_s0 = 0x1f80 << 16; /* 0x80031a0c */
    var_v0 = 896; /* 0x80031a10 */
    *(int16_t*)(reg_s0 + 856) = var_v0; /* 0x80031a14 */
    var_v0 = 480; /* 0x80031a18 */
    *(int16_t*)(reg_s0 + 858) = var_v0; /* 0x80031a1c */
    var_v0 = 544; /* 0x80031a20 */
    *(int16_t*)(reg_s0 + 860) = var_v0; /* 0x80031a24 */
    var_v0 = 503; /* 0x80031a28 */
    *(int16_t*)(reg_s0 + 862) = var_v0; /* 0x80031a2c */
    var_v0 = 32; /* 0x80031a30 */
    *(int16_t*)(reg_s0 + 852) = var_v0; /* 0x80031a34 */
    var_v0 = 16; /* 0x80031a38 */
    *(int16_t*)(reg_s0 + 854) = var_v0; /* 0x80031a3c */
    var_v0 = 353; /* 0x80031a40 */
    var_s1 = 168; /* 0x80031a44 */
    *(int16_t*)(reg_s0 + 848) = var_v0; /* 0x80031a48 */
    *(int16_t*)(reg_s0 + 850) = var_s1; /* 0x80031a4c */
    func_0x80028364(); /* 0x80031a50 */
    var_a0 = var_s0; /* 0x80031a58 */
    var_a0 = var_a0 | 0x350; /* 0x80031a5c */
    var_a1 = var_s0; /* 0x80031a60 */
    var_a1 = var_a1 | 0x358; /* 0x80031a64 */
    var_a2 = var_s0; /* 0x80031a68 */
    var_a2 = var_a2 | 0x35c; /* 0x80031a6c */
    var_a3 = var_zero; /* 0x80031a70 */
    var_v0 = 904; /* 0x80031a74 */
    *(int16_t*)(reg_s0 + 856) = var_v0; /* 0x80031a78 */
    var_v0 = 504; /* 0x80031a7c */
    *(int16_t*)(reg_s0 + 862) = var_v0; /* 0x80031a80 */
    var_v0 = 232; /* 0x80031a84 */
    *(int16_t*)(reg_s0 + 848) = var_v0; /* 0x80031a88 */
    *(int16_t*)(reg_s0 + 850) = var_s1; /* 0x80031a8c */
    func_0x80028364(); /* 0x80031a90 */
    var_a1 = 188; /* 0x80031a98 */
    var_a2 = 150; /* 0x80031a9c */
    var_a3 = var_s0; /* 0x80031aa0 */
    var_a3 = var_a3 | 0x300; /* 0x80031aa4 */
    var_a0 = 0x801e << 16; /* 0x80031aa8 */
    var_a0 = var_a0 + 3408; /* 0x80031aac */
    var_v0 = *(uint16_t*)(reg_a0 + 432); /* 0x80031ab0 */
    var_a0 = var_a0 + 3072; /* 0x80031ab4 */
    func_0x8002732c(); /* 0x80031ab8 */
    var_a0 = 168; /* 0x80031ac0 */
    var_a1 = 144; /* 0x80031ac4 */
    var_a2 = 319; /* 0x80031ac8 */
    func_0x80029548(); /* 0x80031acc */
    var_ra = *(int32_t*)(stack + 48); /* 0x80031ad4 */
    var_s1 = *(int32_t*)(stack + 44); /* 0x80031ad8 */
    var_s0 = *(int32_t*)(stack + 40); /* 0x80031adc */
    var_sp = var_sp + 56; /* 0x80031ae0 */
    return; /* 0x80031ae4 */
}

/* Function at 0x80031ae8 */
void func_0x80031ae8() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_at;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -40; /* 0x80031aec */
    var_v0 = 0x8009 << 16; /* 0x80031af0 */
    *(int32_t*)(stack + 36) = var_ra; /* 0x80031af4 */
    *(int32_t*)(stack + 32) = var_s0; /* 0x80031af8 */
    var_a2 = var_v0 + -32768; /* 0x80031afc */
    var_v0 = 0x8009 << 16; /* 0x80031b20 */
    var_a2 = var_v0 + -32760; /* 0x80031b24 */
    func_0x800174c4(); /* 0x80031b3c */
    var_v0 = 96; /* 0x80031b44 */
    *(int8_t*)(reg_s0 + 784) = var_v0; /* 0x80031b48 */
    *(int8_t*)(reg_s0 + 768) = var_v0; /* 0x80031b4c */
    *(int8_t*)(reg_s0 + 785) = var_v0; /* 0x80031b50 */
    *(int8_t*)(reg_s0 + 769) = var_v0; /* 0x80031b54 */
    *(int8_t*)(reg_s0 + 786) = var_v0; /* 0x80031b58 */
    *(int8_t*)(reg_s0 + 770) = var_v0; /* 0x80031b5c */
    var_v0 = 73; /* 0x80031b60 */
    *(int8_t*)(reg_s0 + 771) = var_v0; /* 0x80031b64 */
    var_v0 = *(uint8_t*)(reg_s0 + 740); /* 0x80031b68 */
    var_v1 = 49; /* 0x80031b6c */
    /* Branch beqz at 0x80031b74 */
    *(int8_t*)(reg_s0 + 787) = var_v1; /* 0x80031b78 */
    var_v1 = *(uint8_t*)(reg_s0 + 740); /* 0x80031b7c */
    var_v0 = 8; /* 0x80031b80 */
    var_v0 = *(uint8_t*)(reg_s0 + 740); /* 0x80031b8c */
    var_v0 = var_v0 + -24; /* 0x80031b94 */
    *(int16_t*)(reg_s0 + 864) = var_v0; /* 0x80031b98 */
    var_v0 = *(uint8_t*)(reg_s0 + 864); /* 0x80031b9c */
    var_v1 = *(uint8_t*)(reg_s0 + 864); /* 0x80031ba0 */
    *(int8_t*)(reg_s0 + 814) = var_zero; /* 0x80031ba4 */
    var_v0 = var_v0 << 0x2; /* 0x80031ba8 */
    var_v0 = var_v0 + 96; /* 0x80031bac */
    var_v1 = var_v1 << 0x1; /* 0x80031bb0 */
    *(int8_t*)(reg_s0 + 812) = var_v0; /* 0x80031bb4 */
    var_v0 = *(uint16_t*)(reg_s0 + 732); /* 0x80031bb8 */
    var_v1 = var_v1 + 48; /* 0x80031bbc */
    var_v0 = var_v0 & 0x8000; /* 0x80031bc0 */
    /* Branch beqz at 0x80031bc4 */
    *(int8_t*)(reg_s0 + 813) = var_v1; /* 0x80031bc8 */
    func_0x800319a8(); /* 0x80031bcc */
    var_v0 = *(uint16_t*)(reg_s0 + 732); /* 0x80031bd4 */
    var_v1 = 1; /* 0x80031bd8 */
    var_at = 0x8009 << 16; /* 0x80031bdc */
    *(int16_t*)(reg_at + -32338) = var_v1; /* 0x80031be0 */
    var_v0 = var_v0 & 0x1; /* 0x80031be4 */
    /* Branch beqz at 0x80031be8 */
    func_0x80030be4(); /* 0x80031bf0 */
    func_0x80030fa0(); /* 0x80031bf8 */
    var_v0 = *(uint16_t*)(reg_s0 + 736); /* 0x80031c08 */
    var_v0 = var_v0 << 0x10; /* 0x80031c10 */
    var_v1 = var_v0 >> 0x10; /* 0x80031c14 */
    var_v0 = var_v1; /* 0x80031c1c */
    var_v0 = var_v1 + 7; /* 0x80031c20 */
    var_v0 = var_v0 >> 0x3; /* 0x80031c24 */
    var_v0 = var_v0 << 0x3; /* 0x80031c28 */
    var_v0 = var_v0 << 0x10; /* 0x80031c30 */
    var_v0 = var_v0 >> 0x10; /* 0x80031c34 */
    /* Branch beqz at 0x80031c3c */
    func_0x80030be4(); /* 0x80031c44 */
    func_0x80030fa0(); /* 0x80031c54 */
    func_0x80031674(); /* 0x80031c5c */
    var_v0 = *(uint16_t*)(reg_s0 + 736); /* 0x80031c64 */
    var_at = 0x8009 << 16; /* 0x80031c68 */
    *(int16_t*)(reg_at + -32338) = var_zero; /* 0x80031c6c */
    var_v0 = var_v0 << 0x10; /* 0x80031c70 */
    var_v1 = var_v0 >> 0x10; /* 0x80031c74 */
    var_v0 = var_v1; /* 0x80031c7c */
    var_v0 = var_v1 + 7; /* 0x80031c80 */
    var_v0 = var_v0 >> 0x3; /* 0x80031c84 */
    var_v0 = var_v0 << 0x3; /* 0x80031c88 */
    var_v0 = var_v0 << 0x10; /* 0x80031c90 */
    var_v0 = var_v0 >> 0x10; /* 0x80031c94 */
    /* Branch beqz at 0x80031c9c */
    var_a0 = var_sp + 16; /* 0x80031ca0 */
    var_a1 = var_sp + 24; /* 0x80031ca4 */
    var_a2 = var_zero; /* 0x80031cac */
    var_a1 = var_sp + 24; /* 0x80031cb0 */
    var_a2 = 2048; /* 0x80031cb4 */
    func_0x8002916c(); /* 0x80031cb8 */
    var_a0 = 1; /* 0x80031cc0 */
    var_a1 = var_zero; /* 0x80031cc4 */
    func_0x800286a8(); /* 0x80031cc8 */
    func_0x80031378(); /* 0x80031cd0 */
    func_0x8002c9e8(); /* 0x80031cd8 */
    func_0x80017680(); /* 0x80031ce0 */
    var_ra = *(int32_t*)(stack + 36); /* 0x80031ce8 */
    var_s0 = *(int32_t*)(stack + 32); /* 0x80031cec */
    var_sp = var_sp + 40; /* 0x80031cf0 */
    return; /* 0x80031cf4 */
}

/* Function at 0x80031cf8 */
void func_0x80031cf8() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_v0;

    var_sp = var_sp + -32; /* 0x80031cfc */
    *(int32_t*)(stack + 24) = var_ra; /* 0x80031d00 */
    var_v0 = 0x8009 << 16; /* 0x80031d04 */
    var_a2 = var_v0 + -32756; /* 0x80031d08 */
    var_a0 = var_sp + 16; /* 0x80031d2c */
    var_a1 = var_zero; /* 0x80031d30 */
    var_a2 = var_a1; /* 0x80031d34 */
    func_0x80079be4(); /* 0x80031d38 */
    var_ra = *(int32_t*)(stack + 24); /* 0x80031d40 */
    var_sp = var_sp + 32; /* 0x80031d44 */
    return; /* 0x80031d48 */
}

/* Function at 0x80031d4c */
void func_0x80031d4c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_v0;

    var_sp = var_sp + -72; /* 0x80031d50 */
    *(int32_t*)(stack + 64) = var_ra; /* 0x80031d54 */
    func_0x800174c4(); /* 0x80031d58 */
    func_0x800175a4(); /* 0x80031d60 */
    func_0x8002948c(); /* 0x80031d68 */
    var_v0 = 144; /* 0x80031d70 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x80031d74 */
    var_v0 = 80; /* 0x80031d78 */
    *(int32_t*)(stack + 24) = var_v0; /* 0x80031d7c */
    var_v0 = 16; /* 0x80031d80 */
    *(int32_t*)(stack + 28) = var_v0; /* 0x80031d84 */
    var_v0 = 255; /* 0x80031d88 */
    *(int32_t*)(stack + 32) = var_v0; /* 0x80031d8c */
    var_v0 = 25; /* 0x80031d90 */
    *(int32_t*)(stack + 36) = var_v0; /* 0x80031d94 */
    var_v0 = 32738; /* 0x80031d98 */
    *(int32_t*)(stack + 40) = var_v0; /* 0x80031d9c */
    var_v0 = 96; /* 0x80031da0 */
    var_a0 = 120; /* 0x80031da4 */
    var_a1 = var_a0; /* 0x80031da8 */
    var_a2 = 200; /* 0x80031dac */
    var_a3 = 136; /* 0x80031db0 */
    *(int32_t*)(stack + 16) = var_zero; /* 0x80031db4 */
    *(int32_t*)(stack + 44) = var_v0; /* 0x80031db8 */
    *(int32_t*)(stack + 48) = var_v0; /* 0x80031dbc */
    *(int32_t*)(stack + 52) = var_v0; /* 0x80031dc0 */
    func_0x80021518(); /* 0x80031dc4 */
    func_0x80017634(); /* 0x80031dcc */
    var_ra = *(int32_t*)(stack + 64); /* 0x80031dd4 */
    var_sp = var_sp + 72; /* 0x80031dd8 */
    return; /* 0x80031ddc */
}

/* Function at 0x80031de0 */
void func_0x80031de0() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -40; /* 0x80031de4 */
    *(int32_t*)(stack + 28) = var_s3; /* 0x80031de8 */
    var_s3 = var_a0; /* 0x80031dec */
    var_v0 = 0x8016 << 16; /* 0x80031df0 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x80031df4 */
    var_s2 = var_v0 + -15220; /* 0x80031df8 */
    *(int32_t*)(stack + 32) = var_s4; /* 0x80031dfc */
    var_s4 = 127; /* 0x80031e00 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80031e04 */
    var_s0 = var_s3 + 14; /* 0x80031e08 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80031e0c */
    var_s1 = var_s2 + 5; /* 0x80031e10 */
    *(int32_t*)(stack + 36) = var_ra; /* 0x80031e14 */
    var_a0 = *(uint16_t*)(reg_s3 + 0); /* 0x80031e18 */
    var_v0 = 0xffff; /* 0x80031e1c */
    var_v1 = var_a0 & 0xffff; /* 0x80031e20 */
    /* Branch beq at 0x80031e24 */
    *(int16_t*)(reg_s2 + 0) = var_a0; /* 0x80031e2c */
    var_v0 = *(uint8_t*)(reg_s0 + -6); /* 0x80031e30 */
    var_v1 = *(uint8_t*)(reg_s0 + -10); /* 0x80031e34 */
    var_v0 = var_v0 << 0x6; /* 0x80031e38 */
    var_v1 = var_v1 | var_v0; /* 0x80031e3c */
    *(int8_t*)(reg_s1 + -3) = var_v1; /* 0x80031e40 */
    var_v0 = *(uint8_t*)(reg_s0 + -12); /* 0x80031e44 */
    *(int8_t*)(reg_s1 + -2) = var_v0; /* 0x80031e4c */
    var_v0 = *(uint8_t*)(reg_s0 + -11); /* 0x80031e50 */
    *(int8_t*)(reg_s1 + -1) = var_v0; /* 0x80031e58 */
    var_v0 = *(uint8_t*)(reg_s0 + -9); /* 0x80031e5c */
    var_v1 = *(int16_t*)(reg_s0 + -4); /* 0x80031e60 */
    var_v0 = var_v0 << 0xc; /* 0x80031e64 */
    var_v0 = var_v0 + var_v1; /* 0x80031e68 */
    *(int32_t*)(reg_s1 + 3) = var_v0; /* 0x80031e6c */
    var_v0 = *(uint8_t*)(reg_s0 + -8); /* 0x80031e70 */
    var_v1 = *(int16_t*)(reg_s0 + -2); /* 0x80031e74 */
    var_v0 = var_v0 << 0xc; /* 0x80031e78 */
    var_v0 = var_v0 + var_v1; /* 0x80031e7c */
    *(int32_t*)(reg_s1 + 7) = var_v0; /* 0x80031e80 */
    var_v0 = *(uint8_t*)(reg_s0 + -7); /* 0x80031e84 */
    var_v1 = *(int16_t*)(reg_s0 + 0); /* 0x80031e88 */
    var_v0 = var_v0 << 0xc; /* 0x80031e8c */
    var_v0 = var_v0 + var_v1; /* 0x80031e90 */
    func_0x80078ac4(); /* 0x80031e94 */
    var_v1 = *(uint8_t*)(reg_s1 + -2); /* 0x80031e9c */
    var_v0 = var_a1 >> 0xf; /* 0x80031eac */
    *(int8_t*)(reg_s1 + 0) = var_v0; /* 0x80031eb4 */
    *(int16_t*)(reg_s2 + 0) = var_v1; /* 0x80031eb8 */
    var_s1 = var_s1 + 24; /* 0x80031ebc */
    var_s2 = var_s2 + 24; /* 0x80031ec0 */
    var_s0 = var_s0 + 16; /* 0x80031ec4 */
    var_s4 = var_s4 + -1; /* 0x80031ec8 */
    var_v0 = -1; /* 0x80031ecc */
    /* Branch bne at 0x80031ed0 */
    var_s3 = var_s3 + 16; /* 0x80031ed4 */
    var_ra = *(int32_t*)(stack + 36); /* 0x80031ed8 */
    var_s4 = *(int32_t*)(stack + 32); /* 0x80031edc */
    var_s3 = *(int32_t*)(stack + 28); /* 0x80031ee0 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x80031ee4 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x80031ee8 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80031eec */
    var_sp = var_sp + 40; /* 0x80031ef0 */
    return; /* 0x80031ef4 */
}

/* Function at 0x80031ef8 */
void func_0x80031ef8() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -48; /* 0x80031efc */
    *(int32_t*)(stack + 28) = var_s3; /* 0x80031f00 */
    var_s3 = var_a0; /* 0x80031f04 */
    *(int32_t*)(stack + 32) = var_s4; /* 0x80031f08 */
    var_s4 = var_a1; /* 0x80031f0c */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80031f10 */
    var_s1 = var_s3; /* 0x80031f14 */
    *(int32_t*)(stack + 36) = var_s5; /* 0x80031f18 */
    var_s5 = var_s3; /* 0x80031f1c */
    *(int32_t*)(stack + 40) = var_ra; /* 0x80031f20 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x80031f24 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80031f28 */
    var_v0 = var_v0 + 8; /* 0x80031f30 */
    /* Branch bnez at 0x80031f38 */
    var_v0 = var_s1; /* 0x80031f3c */
    var_v0 = *(int32_t*)(reg_v0 + 4); /* 0x80031f40 */
    var_v0 = var_v0 & 0x8; /* 0x80031f48 */
    /* Branch beqz at 0x80031f4c */
    var_s1 = var_s1 + 8; /* 0x80031f50 */
    var_v0 = var_v0 + 12; /* 0x80031f58 */
    /* Branch bnez at 0x80031f60 */
    var_s2 = var_s1; /* 0x80031f64 */
    var_v1 = *(uint16_t*)(reg_s2 + 8); /* 0x80031f68 */
    var_v0 = *(uint16_t*)(reg_s2 + 10); /* 0x80031f6c */
    var_v1 = *(int32_t*)(reg_s2 + 0); /* 0x80031f78 */
    var_a0 = var_a2 << 0x1; /* 0x80031f80 */
    var_v0 = var_a0 + 12; /* 0x80031f84 */
    /* Branch bne at 0x80031f88 */
    var_s1 = var_s1 + 12; /* 0x80031f8c */
    var_v0 = var_v0 + var_a0; /* 0x80031f94 */
    /* Branch bnez at 0x80031f9c */
    var_s0 = var_s1; /* 0x80031fa0 */
    var_s1 = var_s1 + var_a0; /* 0x80031fa4 */
    func_0x80077104(); /* 0x80031fa8 */
    var_a0 = var_s2 + 4; /* 0x80031fb0 */
    func_0x80079d0c(); /* 0x80031fb4 */
    var_v0 = var_v0 + 12; /* 0x80031fc0 */
    /* Branch bnez at 0x80031fc8 */
    var_s2 = var_s1; /* 0x80031fcc */
    var_v1 = *(uint16_t*)(reg_s2 + 8); /* 0x80031fd0 */
    var_v0 = *(uint16_t*)(reg_s2 + 10); /* 0x80031fd4 */
    var_v1 = *(int32_t*)(reg_s2 + 0); /* 0x80031fe0 */
    var_a0 = var_a2 << 0x1; /* 0x80031fe8 */
    var_v0 = var_a0 + 12; /* 0x80031fec */
    /* Branch bne at 0x80031ff0 */
    var_s1 = var_s1 + 12; /* 0x80031ff4 */
    var_v0 = var_v0 + var_a0; /* 0x80031ffc */
    /* Branch bnez at 0x80032004 */
    var_s0 = var_s1; /* 0x80032008 */
    var_s1 = var_s1 + var_a0; /* 0x8003200c */
    func_0x80077104(); /* 0x80032010 */
    var_a0 = var_s2 + 4; /* 0x80032018 */
    func_0x80079d0c(); /* 0x8003201c */
    var_s5 = var_s1; /* 0x80032028 */
    var_ra = *(int32_t*)(stack + 40); /* 0x80032030 */
    var_s5 = *(int32_t*)(stack + 36); /* 0x80032034 */
    var_s4 = *(int32_t*)(stack + 32); /* 0x80032038 */
    var_s3 = *(int32_t*)(stack + 28); /* 0x8003203c */
    var_s2 = *(int32_t*)(stack + 24); /* 0x80032040 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x80032044 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80032048 */
    var_sp = var_sp + 48; /* 0x8003204c */
    return; /* 0x80032050 */
}

/* Function at 0x80032054 */
void func_0x80032054() {
    /* Local variables */
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_t3;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x8008 << 16; /* 0x80032058 */
    var_t1 = var_v0 + -2164; /* 0x8003205c */
    var_v0 = 0x8019 << 16; /* 0x80032060 */
    var_t0 = var_v0 + -18628; /* 0x80032064 */
    var_t2 = 63; /* 0x80032068 */
    var_t3 = -1; /* 0x8003206c */
    var_a3 = var_t0 + 106; /* 0x80032070 */
    var_a2 = var_t1 + 46; /* 0x80032074 */
    var_t1 = var_t1 + 48; /* 0x80032134 */
    var_t0 = var_t0 + 108; /* 0x80032138 */
    var_v0 = *(uint16_t*)(reg_a2 + -2); /* 0x8003213c */
    var_t2 = var_t2 + -1; /* 0x80032140 */
    *(int16_t*)(reg_a3 + -2) = var_v0; /* 0x80032144 */
    var_v0 = *(uint16_t*)(reg_a2 + 0); /* 0x80032148 */
    var_a2 = var_a2 + 48; /* 0x8003214c */
    *(int16_t*)(reg_a3 + 0) = var_v0; /* 0x80032150 */
    /* Branch bne at 0x80032154 */
    var_a3 = var_a3 + 108; /* 0x80032158 */
    var_v1 = 0x8019 << 16; /* 0x8003215c */
    var_v0 = 1; /* 0x80032160 */
    return; /* 0x80032164 */
}

/* Function at 0x80032168 */
void func_0x80032168() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_sp;
    int32_t var_v0;

    *(int8_t*)(reg_v1 + -18734) = var_v0; /* 0x80032168 */
    var_sp = var_sp + -32; /* 0x8003216c */
    var_v0 = 0x8019 << 16; /* 0x80032170 */
    var_a0 = var_v0 + -18736; /* 0x80032174 */
    *(int32_t*)(stack + 28) = var_ra; /* 0x80032178 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x8003217c */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80032180 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80032184 */
    var_v0 = *(uint8_t*)(reg_a0 + 2); /* 0x80032188 */
    /* Branch beqz at 0x80032190 */
    var_s0 = var_a0 + 108; /* 0x80032194 */
    var_s1 = 63; /* 0x80032198 */
    var_s2 = -1; /* 0x8003219c */
    var_a0 = var_s0; /* 0x800321a0 */
    var_a1 = var_s0; /* 0x800321a4 */
    func_0x80049aac(); /* 0x800321a8 */
    var_a0 = var_s0; /* 0x800321b0 */
    var_a1 = var_s0 + 20; /* 0x800321b4 */
    func_0x80049aac(); /* 0x800321b8 */
    var_a0 = var_s0; /* 0x800321c0 */
    var_a1 = var_s0 + 40; /* 0x800321c4 */
    func_0x80049aac(); /* 0x800321c8 */
    var_a0 = var_s0; /* 0x800321d0 */
    var_a1 = var_s0 + 60; /* 0x800321d4 */
    func_0x80049aac(); /* 0x800321d8 */
    var_s1 = var_s1 + -1; /* 0x800321e0 */
    /* Branch bne at 0x800321e4 */
    var_s0 = var_s0 + 108; /* 0x800321e8 */
    var_v0 = 0x8019 << 16; /* 0x800321ec */
    *(int8_t*)(reg_v0 + -18734) = var_zero; /* 0x800321f0 */
    var_ra = *(int32_t*)(stack + 28); /* 0x800321f4 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x800321f8 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x800321fc */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80032200 */
    var_sp = var_sp + 32; /* 0x80032204 */
    return; /* 0x80032208 */
}

/* Function at 0x8003220c */
void func_0x8003220c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_v0;

    var_sp = var_sp + -24; /* 0x80032210 */
    *(int32_t*)(stack + 16) = var_ra; /* 0x80032214 */
    var_v0 = var_a0; /* 0x80032218 */
    var_a0 = var_a1; /* 0x8003221c */
    var_a3 = var_a2 << 0x10; /* 0x80032220 */
    var_a1 = var_v0; /* 0x80032224 */
    var_a2 = var_a0; /* 0x80032228 */
    func_0x8004a888(); /* 0x8003222c */
    var_ra = *(int32_t*)(stack + 16); /* 0x80032234 */
    var_sp = var_sp + 24; /* 0x80032238 */
    return; /* 0x8003223c */
}

/* Function at 0x80032240 */
void func_0x80032240() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_v0;

    var_sp = var_sp + -24; /* 0x80032244 */
    *(int32_t*)(stack + 16) = var_ra; /* 0x80032248 */
    var_a1 = var_a1 + 80; /* 0x8003224c */
    var_v0 = var_a0 + 20; /* 0x80032250 */
    var_a3 = var_a2 << 0x10; /* 0x80032254 */
    var_a0 = var_a1; /* 0x80032258 */
    var_a1 = var_v0; /* 0x8003225c */
    var_a2 = var_a0; /* 0x80032260 */
    func_0x8004a888(); /* 0x80032264 */
    var_ra = *(int32_t*)(stack + 16); /* 0x8003226c */
    var_sp = var_sp + 24; /* 0x80032270 */
    return; /* 0x80032274 */
}

/* Function at 0x80032278 */
void func_0x80032278() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_sp;

    var_sp = var_sp + -32; /* 0x8003227c */
    *(int32_t*)(stack + 24) = var_s2; /* 0x80032280 */
    var_s2 = var_a0; /* 0x80032284 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80032288 */
    var_s1 = var_a1; /* 0x8003228c */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80032290 */
    var_s0 = var_a2 << 0x10; /* 0x80032294 */
    var_s0 = var_s0 >> 0x10; /* 0x80032298 */
    *(int32_t*)(stack + 28) = var_ra; /* 0x8003229c */
    var_a0 = *(uint8_t*)(reg_s1 + 100); /* 0x800322a0 */
    var_a1 = *(uint8_t*)(reg_s2 + 40); /* 0x800322a4 */
    func_0x8004a830(); /* 0x800322a8 */
    var_a0 = *(uint8_t*)(reg_s1 + 101); /* 0x800322b0 */
    *(int8_t*)(reg_s1 + 100) = var_v0; /* 0x800322b4 */
    var_a1 = *(uint8_t*)(reg_s2 + 41); /* 0x800322b8 */
    func_0x8004a830(); /* 0x800322bc */
    var_a0 = *(uint8_t*)(reg_s1 + 102); /* 0x800322c4 */
    *(int8_t*)(reg_s1 + 101) = var_v0; /* 0x800322c8 */
    var_a1 = *(uint8_t*)(reg_s2 + 42); /* 0x800322cc */
    func_0x8004a830(); /* 0x800322d0 */
    *(int8_t*)(reg_s1 + 102) = var_v0; /* 0x800322d8 */
    var_ra = *(int32_t*)(stack + 28); /* 0x800322dc */
    var_s2 = *(int32_t*)(stack + 24); /* 0x800322e0 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x800322e4 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x800322e8 */
    var_sp = var_sp + 32; /* 0x800322ec */
    return; /* 0x800322f0 */
}

/* Function at 0x800322f4 */
void func_0x800322f4() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -24; /* 0x800322f8 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x800322fc */
    var_s0 = var_a1; /* 0x80032300 */
    var_a2 = var_a2 << 0x10; /* 0x80032304 */
    *(int32_t*)(stack + 20) = var_ra; /* 0x80032308 */
    var_a1 = *(int16_t*)(reg_a0 + 44); /* 0x8003230c */
    var_a0 = *(int16_t*)(reg_s0 + 104); /* 0x80032310 */
    func_0x8004a830(); /* 0x80032314 */
    var_a0 = var_v0; /* 0x8003231c */
    var_v1 = var_a0 << 0x10; /* 0x80032320 */
    var_v0 = *(int16_t*)(reg_s0 + 106); /* 0x80032324 */
    var_v1 = var_v1 >> 0x10; /* 0x80032328 */
    var_v0 = var_v0 + -4096; /* 0x8003232c */
    /* Branch beqz at 0x80032334 */
    *(int16_t*)(reg_s0 + 104) = var_a0; /* 0x80032338 */
    var_v0 = var_a0 + 4096; /* 0x8003233c */
    *(int16_t*)(reg_s0 + 106) = var_v0; /* 0x80032340 */
    var_ra = *(int32_t*)(stack + 20); /* 0x80032344 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80032348 */
    var_sp = var_sp + 24; /* 0x8003234c */
    return; /* 0x80032350 */
}

/* Function at 0x80032354 */
void func_0x80032354() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -24; /* 0x80032358 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003235c */
    var_s0 = var_a1; /* 0x80032360 */
    var_a2 = var_a2 << 0x10; /* 0x80032364 */
    *(int32_t*)(stack + 20) = var_ra; /* 0x80032368 */
    var_a1 = *(int16_t*)(reg_a0 + 46); /* 0x8003236c */
    var_a0 = *(int16_t*)(reg_s0 + 106); /* 0x80032370 */
    func_0x8004a830(); /* 0x80032374 */
    var_a0 = var_v0; /* 0x8003237c */
    var_v1 = var_a0 << 0x10; /* 0x80032380 */
    var_v0 = *(int16_t*)(reg_s0 + 104); /* 0x80032384 */
    var_v1 = var_v1 >> 0x10; /* 0x80032388 */
    var_v0 = var_v0 + 4096; /* 0x8003238c */
    /* Branch beqz at 0x80032394 */
    *(int16_t*)(reg_s0 + 106) = var_a0; /* 0x80032398 */
    var_v0 = var_a0 + -4096; /* 0x8003239c */
    *(int16_t*)(reg_s0 + 104) = var_v0; /* 0x800323a0 */
    var_ra = *(int32_t*)(stack + 20); /* 0x800323a4 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x800323a8 */
    var_sp = var_sp + 24; /* 0x800323ac */
    return; /* 0x800323b0 */
}

/* Function at 0x800323b4 */
void func_0x800323b4() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -48; /* 0x800323b8 */
    *(int32_t*)(stack + 36) = var_s5; /* 0x800323bc */
    var_s5 = var_a0; /* 0x800323c0 */
    *(int32_t*)(stack + 28) = var_s3; /* 0x800323c4 */
    var_s3 = var_a1; /* 0x800323c8 */
    *(int32_t*)(stack + 32) = var_s4; /* 0x800323cc */
    var_s4 = var_a2; /* 0x800323d0 */
    var_v0 = var_s5 & 0x1; /* 0x800323d4 */
    *(int32_t*)(stack + 40) = var_ra; /* 0x800323d8 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x800323dc */
    *(int32_t*)(stack + 20) = var_s1; /* 0x800323e0 */
    /* Branch beqz at 0x800323e4 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x800323e8 */
    var_v0 = 0x8019 << 16; /* 0x800323ec */
    var_s1 = var_v0 + -18628; /* 0x800323f0 */
    var_s0 = var_zero; /* 0x800323f4 */
    var_s2 = var_a2 << 0x10; /* 0x800323f8 */
    var_a0 = var_s3; /* 0x800323fc */
    var_a1 = var_s1; /* 0x80032400 */
    func_0x80032210(); /* 0x80032404 */
    var_s0 = var_s0 + 1; /* 0x8003240c */
    /* Branch bnez at 0x80032414 */
    var_s1 = var_s1 + 108; /* 0x80032418 */
    var_v1 = 0x8019 << 16; /* 0x8003241c */
    var_v0 = 1; /* 0x80032420 */
    *(int8_t*)(reg_v1 + -18734) = var_v0; /* 0x80032424 */
    var_v0 = var_s5 & 0x2; /* 0x80032428 */
    /* Branch beqz at 0x8003242c */
    var_v0 = 0x8019 << 16; /* 0x80032430 */
    var_s1 = var_v0 + -18628; /* 0x80032434 */
    var_s0 = var_zero; /* 0x80032438 */
    var_s2 = var_s4 << 0x10; /* 0x8003243c */
    var_a0 = var_s3; /* 0x80032440 */
    var_a1 = var_s1; /* 0x80032444 */
    func_0x80032244(); /* 0x80032448 */
    var_s0 = var_s0 + 1; /* 0x80032450 */
    /* Branch bnez at 0x80032458 */
    var_s1 = var_s1 + 108; /* 0x8003245c */
    var_v0 = var_s5 & 0x4; /* 0x80032460 */
    /* Branch beqz at 0x80032464 */
    var_v0 = 0x8019 << 16; /* 0x80032468 */
    var_s1 = var_v0 + -18628; /* 0x8003246c */
    var_s0 = var_zero; /* 0x80032470 */
    var_s2 = var_s4 << 0x10; /* 0x80032474 */
    var_a0 = var_s3; /* 0x80032478 */
    var_a1 = var_s1; /* 0x8003247c */
    func_0x8003227c(); /* 0x80032480 */
    var_s0 = var_s0 + 1; /* 0x80032488 */
    /* Branch bnez at 0x80032490 */
    var_s1 = var_s1 + 108; /* 0x80032494 */
    var_v0 = var_s5 & 0x8; /* 0x80032498 */
    /* Branch beqz at 0x8003249c */
    var_v0 = 0x8019 << 16; /* 0x800324a0 */
    var_s1 = var_v0 + -18628; /* 0x800324a4 */
    var_s0 = var_zero; /* 0x800324a8 */
    var_s2 = var_s4 << 0x10; /* 0x800324ac */
    var_a0 = var_s3; /* 0x800324b0 */
    var_a1 = var_s1; /* 0x800324b4 */
    func_0x800322f8(); /* 0x800324b8 */
    var_s0 = var_s0 + 1; /* 0x800324c0 */
    /* Branch bnez at 0x800324c8 */
    var_s1 = var_s1 + 108; /* 0x800324cc */
    var_v0 = var_s5 & 0x10; /* 0x800324d0 */
    /* Branch beqz at 0x800324d4 */
    var_v0 = 0x8019 << 16; /* 0x800324d8 */
    var_s1 = var_v0 + -18628; /* 0x800324dc */
    var_s0 = var_zero; /* 0x800324e0 */
    var_s2 = var_s4 << 0x10; /* 0x800324e4 */
    var_a0 = var_s3; /* 0x800324e8 */
    var_a1 = var_s1; /* 0x800324ec */
    func_0x80032358(); /* 0x800324f0 */
    var_s0 = var_s0 + 1; /* 0x800324f8 */
    /* Branch bnez at 0x80032500 */
    var_s1 = var_s1 + 108; /* 0x80032504 */
    var_ra = *(int32_t*)(stack + 40); /* 0x80032508 */
    var_s5 = *(int32_t*)(stack + 36); /* 0x8003250c */
    var_s4 = *(int32_t*)(stack + 32); /* 0x80032510 */
    var_s3 = *(int32_t*)(stack + 28); /* 0x80032514 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x80032518 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x8003251c */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80032520 */
    var_sp = var_sp + 48; /* 0x80032524 */
    return; /* 0x80032528 */
}

/* Function at 0x8003252c */
void func_0x8003252c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_t3;
    int32_t var_t4;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -72; /* 0x80032530 */
    var_t2 = var_a0; /* 0x80032534 */
    var_a0 = var_zero; /* 0x80032538 */
    var_t0 = var_a1; /* 0x8003253c */
    var_t1 = var_a2; /* 0x80032540 */
    var_v0 = var_t2 & 0xff; /* 0x80032544 */
    var_t4 = *(int32_t*)(stack + 88); /* 0x80032548 */
    var_t3 = *(uint16_t*)(stack + 92); /* 0x8003254c */
    var_v1 = 255; /* 0x80032550 */
    /* Branch beq at 0x80032554 */
    *(int32_t*)(stack + 64) = var_ra; /* 0x80032558 */
    var_v0 = var_t0 & 0xff; /* 0x8003255c */
    /* Branch beq at 0x80032560 */
    var_v0 = var_t1 & 0xff; /* 0x80032564 */
    /* Branch beq at 0x80032568 */
    var_v0 = 0xffff; /* 0x8003256c */
    var_a0 = 4; /* 0x80032570 */
    *(int8_t*)(stack + 56) = var_t2; /* 0x80032574 */
    *(int8_t*)(stack + 57) = var_a1; /* 0x80032578 */
    *(int8_t*)(stack + 58) = var_a2; /* 0x8003257c */
    var_v0 = 0xffff; /* 0x80032580 */
    /* Branch beq at 0x80032584 */
    *(int16_t*)(stack + 60) = var_a3; /* 0x8003258c */
    var_a0 = var_a0 | 0x8; /* 0x80032590 */
    /* Branch beq at 0x80032594 */
    *(int16_t*)(stack + 62) = var_t4; /* 0x8003259c */
    var_a0 = var_a0 | 0x10; /* 0x800325a0 */
    var_a2 = var_t3 << 0x10; /* 0x800325a4 */
    var_a1 = var_sp + 16; /* 0x800325a8 */
    func_0x800323b8(); /* 0x800325ac */
    var_ra = *(int32_t*)(stack + 64); /* 0x800325b4 */
    var_sp = var_sp + 72; /* 0x800325b8 */
    return; /* 0x800325bc */
}

/* Function at 0x800325c0 */
void func_0x800325c0() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_t3;
    int32_t var_t4;
    int32_t var_t5;
    int32_t var_t6;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -72; /* 0x800325c4 */
    *(int32_t*)(stack + 72) = var_a0; /* 0x800325c8 */
    var_a0 = var_zero; /* 0x800325cc */
    *(int32_t*)(stack + 80) = var_a2; /* 0x800325d0 */
    var_a2 = *(uint16_t*)(stack + 112); /* 0x800325d4 */
    var_v0 = *(int16_t*)(stack + 72); /* 0x800325d8 */
    var_t6 = *(uint16_t*)(stack + 72); /* 0x800325dc */
    var_v1 = 32767; /* 0x800325e0 */
    *(int32_t*)(stack + 64) = var_ra; /* 0x800325e4 */
    *(int32_t*)(stack + 76) = var_a1; /* 0x800325e8 */
    /* Branch beq at 0x800325ec */
    *(int32_t*)(stack + 84) = var_a3; /* 0x800325f0 */
    var_v0 = *(int16_t*)(stack + 78); /* 0x800325f4 */
    var_t5 = *(uint16_t*)(stack + 78); /* 0x800325f8 */
    /* Branch beq at 0x800325fc */
    var_v0 = *(int16_t*)(stack + 84); /* 0x80032604 */
    var_t4 = *(uint16_t*)(stack + 84); /* 0x80032608 */
    /* Branch beq at 0x8003260c */
    var_v0 = *(int16_t*)(stack + 74); /* 0x80032614 */
    var_t3 = *(uint16_t*)(stack + 74); /* 0x80032618 */
    /* Branch beq at 0x8003261c */
    var_v0 = *(int16_t*)(stack + 80); /* 0x80032624 */
    var_t2 = *(uint16_t*)(stack + 80); /* 0x80032628 */
    /* Branch beq at 0x8003262c */
    var_v0 = *(int16_t*)(stack + 86); /* 0x80032634 */
    var_t1 = *(uint16_t*)(stack + 86); /* 0x80032638 */
    /* Branch beq at 0x8003263c */
    var_v0 = *(int16_t*)(stack + 76); /* 0x80032644 */
    var_t0 = *(uint16_t*)(stack + 76); /* 0x80032648 */
    /* Branch beq at 0x8003264c */
    var_v0 = *(int16_t*)(stack + 82); /* 0x80032654 */
    var_a3 = *(uint16_t*)(stack + 82); /* 0x80032658 */
    /* Branch beq at 0x8003265c */
    var_v0 = *(int16_t*)(stack + 88); /* 0x80032664 */
    var_a1 = *(uint16_t*)(stack + 88); /* 0x80032668 */
    /* Branch beq at 0x8003266c */
    var_a0 = 2; /* 0x80032674 */
    *(int16_t*)(stack + 36) = var_t6; /* 0x80032678 */
    *(int16_t*)(stack + 42) = var_t5; /* 0x8003267c */
    *(int16_t*)(stack + 48) = var_t4; /* 0x80032680 */
    *(int16_t*)(stack + 38) = var_t3; /* 0x80032684 */
    *(int16_t*)(stack + 44) = var_t2; /* 0x80032688 */
    *(int16_t*)(stack + 50) = var_t1; /* 0x8003268c */
    *(int16_t*)(stack + 40) = var_t0; /* 0x80032690 */
    *(int16_t*)(stack + 46) = var_a3; /* 0x80032694 */
    *(int16_t*)(stack + 52) = var_a1; /* 0x80032698 */
    var_v0 = *(int16_t*)(stack + 92); /* 0x8003269c */
    var_t6 = *(uint16_t*)(stack + 92); /* 0x800326a0 */
    /* Branch beq at 0x800326a4 */
    var_v0 = *(int16_t*)(stack + 94); /* 0x800326ac */
    var_t5 = *(uint16_t*)(stack + 94); /* 0x800326b0 */
    /* Branch beq at 0x800326b4 */
    var_v0 = *(int16_t*)(stack + 96); /* 0x800326bc */
    var_t4 = *(uint16_t*)(stack + 96); /* 0x800326c0 */
    /* Branch beq at 0x800326c4 */
    var_v0 = *(int16_t*)(stack + 98); /* 0x800326cc */
    var_t3 = *(uint16_t*)(stack + 98); /* 0x800326d0 */
    /* Branch beq at 0x800326d4 */
    var_v0 = *(int16_t*)(stack + 100); /* 0x800326dc */
    var_t2 = *(uint16_t*)(stack + 100); /* 0x800326e0 */
    /* Branch beq at 0x800326e4 */
    var_v0 = *(int16_t*)(stack + 102); /* 0x800326ec */
    var_t1 = *(uint16_t*)(stack + 102); /* 0x800326f0 */
    /* Branch beq at 0x800326f4 */
    var_v0 = *(int16_t*)(stack + 104); /* 0x800326fc */
    var_t0 = *(uint16_t*)(stack + 104); /* 0x80032700 */
    /* Branch beq at 0x80032704 */
    var_v0 = *(int16_t*)(stack + 106); /* 0x8003270c */
    var_a3 = *(uint16_t*)(stack + 106); /* 0x80032710 */
    /* Branch beq at 0x80032714 */
    var_v0 = *(int16_t*)(stack + 108); /* 0x8003271c */
    var_a1 = *(uint16_t*)(stack + 108); /* 0x80032720 */
    /* Branch beq at 0x80032724 */
    var_a0 = var_a0 | 0x1; /* 0x8003272c */
    *(int16_t*)(stack + 16) = var_t6; /* 0x80032730 */
    *(int16_t*)(stack + 18) = var_t5; /* 0x80032734 */
    *(int16_t*)(stack + 20) = var_t4; /* 0x80032738 */
    *(int16_t*)(stack + 22) = var_t3; /* 0x8003273c */
    *(int16_t*)(stack + 24) = var_t2; /* 0x80032740 */
    *(int16_t*)(stack + 26) = var_t1; /* 0x80032744 */
    *(int16_t*)(stack + 28) = var_t0; /* 0x80032748 */
    *(int16_t*)(stack + 30) = var_a3; /* 0x8003274c */
    *(int16_t*)(stack + 32) = var_a1; /* 0x80032750 */
    var_a2 = var_a2 << 0x10; /* 0x80032754 */
    var_a1 = var_sp + 16; /* 0x80032758 */
    func_0x800323b8(); /* 0x8003275c */
    var_ra = *(int32_t*)(stack + 64); /* 0x80032764 */
    var_sp = var_sp + 72; /* 0x80032768 */
    return; /* 0x8003276c */
}

/* Function at 0x80032770 */
void func_0x80032770() {
    /* Local variables */
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_v0;
    int32_t var_v1;

    var_v1 = var_zero; /* 0x80032774 */
    var_a1 = var_v1; /* 0x80032778 */
    var_v0 = var_a0 & 0x10; /* 0x8003277c */
    /* Branch bnez at 0x80032780 */
    var_a2 = var_a0; /* 0x80032784 */
    var_v0 = var_a0 & 0x20; /* 0x80032788 */
    /* Branch beqz at 0x8003278c */
    var_v0 = var_a0 & 0x40; /* 0x80032790 */
    var_v1 = 1; /* 0x80032798 */
    /* Branch beqz at 0x8003279c */
    var_v0 = var_a0 & 0x80; /* 0x800327a0 */
    var_v1 = 2; /* 0x800327a8 */
    /* Branch beqz at 0x800327ac */
    var_v0 = var_a2 & 0x1; /* 0x800327b0 */
    var_v1 = 3; /* 0x800327b4 */
    var_v0 = var_a2 & 0x1; /* 0x800327b8 */
    /* Branch beqz at 0x800327bc */
    var_a1 = var_zero; /* 0x800327c8 */
    var_v0 = var_a2 & 0x2; /* 0x800327cc */
    /* Branch beqz at 0x800327d0 */
    var_a1 = 1; /* 0x800327dc */
    var_v0 = var_a2 & 0x4; /* 0x800327e0 */
    /* Branch beqz at 0x800327e4 */
    var_a1 = 2; /* 0x800327ec */
    var_v0 = var_v1 << 0x1; /* 0x800327f0 */
    var_v0 = var_v0 + var_v1; /* 0x800327f4 */
    return; /* 0x800327f8 */
}

/* Function at 0x800327fc */
void func_0x800327fc() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = var_v0 + var_a1; /* 0x800327fc */
    var_sp = var_sp + -32; /* 0x80032800 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80032804 */
    var_s1 = var_zero; /* 0x80032808 */
    var_v1 = var_a0; /* 0x8003280c */
    var_a3 = var_a0; /* 0x80032810 */
    var_a0 = var_a0 & 0x10; /* 0x80032814 */
    *(int32_t*)(stack + 28) = var_ra; /* 0x80032818 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x8003281c */
    /* Branch bnez at 0x80032820 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80032824 */
    var_v0 = var_v1 & 0xff; /* 0x80032828 */
    var_v0 = (uint32_t)var_v0 >> 0x1; /* 0x8003282c */
    var_v1 = var_v0; /* 0x80032830 */
    var_v0 = var_v0 & 0x10; /* 0x80032834 */
    /* Branch beqz at 0x80032838 */
    var_s1 = var_s1 + 1; /* 0x8003283c */
    var_s2 = var_zero; /* 0x80032840 */
    var_v0 = var_a1 & 0x1; /* 0x80032844 */
    /* Branch bnez at 0x80032848 */
    var_v1 = var_a1; /* 0x8003284c */
    var_v0 = var_v1 & 0xff; /* 0x80032850 */
    var_v0 = (uint32_t)var_v0 >> 0x1; /* 0x80032854 */
    var_v1 = var_v0; /* 0x80032858 */
    var_v0 = var_v0 & 0x1; /* 0x8003285c */
    /* Branch beqz at 0x80032860 */
    var_s2 = var_s2 + 1; /* 0x80032864 */
    var_v1 = 0x1 << 16; /* 0x80032868 */
    var_v1 = var_v1 | 0x8000; /* 0x8003286c */
    var_v0 = 0x8016 << 16; /* 0x80032870 */
    var_v0 = var_v0 + -12144; /* 0x80032874 */
    var_s0 = var_v0 + var_v1; /* 0x80032878 */
    var_v0 = var_a3 | var_a1; /* 0x8003287c */
    /* Branch bnez at 0x80032880 */
    *(int8_t*)(reg_s0 + 28180) = var_v0; /* 0x80032884 */
    *(int8_t*)(reg_s0 + 28156) = var_v0; /* 0x80032888 */
    var_v0 = var_s1 << 0x1; /* 0x8003288c */
    var_v0 = var_v0 + var_s1; /* 0x80032890 */
    var_v0 = var_v0 + var_s2; /* 0x80032894 */
    *(int8_t*)(reg_s0 + 28157) = var_v0; /* 0x8003289c */
    var_v0 = *(uint8_t*)(reg_s0 + 28158); /* 0x800328a0 */
    var_v0 = var_v0 & 0x80; /* 0x800328a8 */
    /* Branch bnez at 0x800328ac */
    var_v1 = 0x1 << 16; /* 0x800328b0 */
    var_v1 = *(uint8_t*)(reg_s0 + 28156); /* 0x800328b4 */
    var_v0 = var_v1 & 0x2; /* 0x800328bc */
    /* Branch beqz at 0x800328c0 */
    var_v0 = var_v1 & 0x10; /* 0x800328c4 */
    /* Branch beqz at 0x800328c8 */
    var_v0 = 0x8019 << 16; /* 0x800328cc */
    var_a3 = *(int32_t*)(reg_s0 + 28168); /* 0x800328d0 */
    var_v1 = var_v0 + -18736; /* 0x800328d4 */
    var_a2 = var_v1 + 1404; /* 0x800328d8 */
    var_v0 = var_a3 | var_a2; /* 0x800328dc */
    var_v0 = var_v0 & 0x3; /* 0x800328e0 */
    /* Branch beqz at 0x800328e4 */
    var_t0 = var_v1 + 1500; /* 0x800328e8 */
    var_a2 = var_a2 + 16; /* 0x8003292c */
    /* Branch bne at 0x80032930 */
    var_a3 = var_a3 + 16; /* 0x80032934 */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x80032940 */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x80032944 */
    var_a0 = *(int32_t*)(reg_a2 + 8); /* 0x80032948 */
    var_a1 = *(int32_t*)(reg_a2 + 12); /* 0x8003294c */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x80032950 */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x80032954 */
    *(int32_t*)(reg_a3 + 8) = var_a0; /* 0x80032958 */
    *(int32_t*)(reg_a3 + 12) = var_a1; /* 0x8003295c */
    var_a2 = var_a2 + 16; /* 0x80032960 */
    /* Branch bne at 0x80032964 */
    var_a3 = var_a3 + 16; /* 0x80032968 */
    var_v0 = var_v1 & 0x20; /* 0x80032974 */
    /* Branch beqz at 0x80032978 */
    var_v0 = 0x8019 << 16; /* 0x8003297c */
    var_a3 = *(int32_t*)(reg_s0 + 28168); /* 0x80032980 */
    var_v1 = var_v0 + -18736; /* 0x80032984 */
    var_a2 = var_v1 + 1512; /* 0x80032988 */
    var_v0 = var_a3 | var_a2; /* 0x8003298c */
    var_v0 = var_v0 & 0x3; /* 0x80032990 */
    /* Branch beqz at 0x80032994 */
    var_t0 = var_v1 + 1608; /* 0x80032998 */
    var_a2 = var_a2 + 16; /* 0x800329dc */
    /* Branch bne at 0x800329e0 */
    var_a3 = var_a3 + 16; /* 0x800329e4 */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x800329f0 */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x800329f4 */
    var_a0 = *(int32_t*)(reg_a2 + 8); /* 0x800329f8 */
    var_a1 = *(int32_t*)(reg_a2 + 12); /* 0x800329fc */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x80032a00 */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x80032a04 */
    *(int32_t*)(reg_a3 + 8) = var_a0; /* 0x80032a08 */
    *(int32_t*)(reg_a3 + 12) = var_a1; /* 0x80032a0c */
    var_a2 = var_a2 + 16; /* 0x80032a10 */
    /* Branch bne at 0x80032a14 */
    var_a3 = var_a3 + 16; /* 0x80032a18 */
    var_v0 = var_v1 & 0x40; /* 0x80032a24 */
    /* Branch beqz at 0x80032a28 */
    var_v0 = 0x8019 << 16; /* 0x80032a2c */
    var_a3 = *(int32_t*)(reg_s0 + 28168); /* 0x80032a30 */
    var_v1 = var_v0 + -18736; /* 0x80032a34 */
    var_a2 = var_v1 + 1728; /* 0x80032a38 */
    var_v0 = var_a3 | var_a2; /* 0x80032a3c */
    var_v0 = var_v0 & 0x3; /* 0x80032a40 */
    /* Branch beqz at 0x80032a44 */
    var_t0 = var_v1 + 1824; /* 0x80032a48 */
    var_a2 = var_a2 + 16; /* 0x80032a8c */
    /* Branch bne at 0x80032a90 */
    var_a3 = var_a3 + 16; /* 0x80032a94 */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x80032aa0 */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x80032aa4 */
    var_a0 = *(int32_t*)(reg_a2 + 8); /* 0x80032aa8 */
    var_a1 = *(int32_t*)(reg_a2 + 12); /* 0x80032aac */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x80032ab0 */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x80032ab4 */
    *(int32_t*)(reg_a3 + 8) = var_a0; /* 0x80032ab8 */
    *(int32_t*)(reg_a3 + 12) = var_a1; /* 0x80032abc */
    var_a2 = var_a2 + 16; /* 0x80032ac0 */
    /* Branch bne at 0x80032ac4 */
    var_a3 = var_a3 + 16; /* 0x80032ac8 */
    var_v0 = var_v1 & 0x80; /* 0x80032ad4 */
    /* Branch beqz at 0x80032ad8 */
    var_v0 = 0x8019 << 16; /* 0x80032adc */
    var_a3 = *(int32_t*)(reg_s0 + 28168); /* 0x80032ae0 */
    var_v1 = var_v0 + -18736; /* 0x80032ae4 */
    var_a2 = var_v1 + 1944; /* 0x80032ae8 */
    var_v0 = var_a3 | var_a2; /* 0x80032aec */
    var_v0 = var_v0 & 0x3; /* 0x80032af0 */
    /* Branch beqz at 0x80032af4 */
    var_t0 = var_v1 + 2040; /* 0x80032af8 */
    var_a2 = var_a2 + 16; /* 0x80032b3c */
    /* Branch bne at 0x80032b40 */
    var_a3 = var_a3 + 16; /* 0x80032b44 */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x80032b50 */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x80032b54 */
    var_a0 = *(int32_t*)(reg_a2 + 8); /* 0x80032b58 */
    var_a1 = *(int32_t*)(reg_a2 + 12); /* 0x80032b5c */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x80032b60 */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x80032b64 */
    *(int32_t*)(reg_a3 + 8) = var_a0; /* 0x80032b68 */
    *(int32_t*)(reg_a3 + 12) = var_a1; /* 0x80032b6c */
    var_a2 = var_a2 + 16; /* 0x80032b70 */
    /* Branch bne at 0x80032b74 */
    var_a3 = var_a3 + 16; /* 0x80032b78 */
    var_v0 = var_v1 & 0x4; /* 0x80032b84 */
    /* Branch beqz at 0x80032b88 */
    var_v0 = var_v1 & 0x20; /* 0x80032b8c */
    /* Branch beqz at 0x80032b90 */
    var_v0 = 0x8019 << 16; /* 0x80032b94 */
    var_a3 = *(int32_t*)(reg_s0 + 28168); /* 0x80032b98 */
    var_v1 = var_v0 + -18736; /* 0x80032b9c */
    var_a2 = var_v1 + 1620; /* 0x80032ba0 */
    var_v0 = var_a3 | var_a2; /* 0x80032ba4 */
    var_v0 = var_v0 & 0x3; /* 0x80032ba8 */
    /* Branch beqz at 0x80032bac */
    var_t0 = var_v1 + 1716; /* 0x80032bb0 */
    var_a2 = var_a2 + 16; /* 0x80032bf4 */
    /* Branch bne at 0x80032bf8 */
    var_a3 = var_a3 + 16; /* 0x80032bfc */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x80032c08 */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x80032c0c */
    var_a0 = *(int32_t*)(reg_a2 + 8); /* 0x80032c10 */
    var_a1 = *(int32_t*)(reg_a2 + 12); /* 0x80032c14 */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x80032c18 */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x80032c1c */
    *(int32_t*)(reg_a3 + 8) = var_a0; /* 0x80032c20 */
    *(int32_t*)(reg_a3 + 12) = var_a1; /* 0x80032c24 */
    var_a2 = var_a2 + 16; /* 0x80032c28 */
    /* Branch bne at 0x80032c2c */
    var_a3 = var_a3 + 16; /* 0x80032c30 */
    var_v0 = var_v1 & 0x40; /* 0x80032c3c */
    /* Branch beqz at 0x80032c40 */
    var_v0 = 0x8019 << 16; /* 0x80032c44 */
    var_a3 = *(int32_t*)(reg_s0 + 28168); /* 0x80032c48 */
    var_v1 = var_v0 + -18736; /* 0x80032c4c */
    var_a2 = var_v1 + 1836; /* 0x80032c50 */
    var_v0 = var_a3 | var_a2; /* 0x80032c54 */
    var_v0 = var_v0 & 0x3; /* 0x80032c58 */
    /* Branch beqz at 0x80032c5c */
    var_t0 = var_v1 + 1932; /* 0x80032c60 */
    var_a2 = var_a2 + 16; /* 0x80032ca4 */
    /* Branch bne at 0x80032ca8 */
    var_a3 = var_a3 + 16; /* 0x80032cac */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x80032cb8 */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x80032cbc */
    var_a0 = *(int32_t*)(reg_a2 + 8); /* 0x80032cc0 */
    var_a1 = *(int32_t*)(reg_a2 + 12); /* 0x80032cc4 */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x80032cc8 */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x80032ccc */
    *(int32_t*)(reg_a3 + 8) = var_a0; /* 0x80032cd0 */
    *(int32_t*)(reg_a3 + 12) = var_a1; /* 0x80032cd4 */
    var_a2 = var_a2 + 16; /* 0x80032cd8 */
    /* Branch bne at 0x80032cdc */
    var_a3 = var_a3 + 16; /* 0x80032ce0 */
    var_v0 = var_v1 & 0x80; /* 0x80032cec */
    /* Branch beqz at 0x80032cf0 */
    var_v0 = 0x8019 << 16; /* 0x80032cf4 */
    var_a3 = *(int32_t*)(reg_s0 + 28168); /* 0x80032cf8 */
    var_v1 = var_v0 + -18736; /* 0x80032cfc */
    var_a2 = var_v1 + 2052; /* 0x80032d00 */
    var_v0 = var_a3 | var_a2; /* 0x80032d04 */
    var_v0 = var_v0 & 0x3; /* 0x80032d08 */
    /* Branch beqz at 0x80032d0c */
    var_t0 = var_v1 + 2148; /* 0x80032d10 */
    var_a2 = var_a2 + 16; /* 0x80032d54 */
    /* Branch bne at 0x80032d58 */
    var_a3 = var_a3 + 16; /* 0x80032d5c */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x80032d68 */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x80032d6c */
    var_a0 = *(int32_t*)(reg_a2 + 8); /* 0x80032d70 */
    var_a1 = *(int32_t*)(reg_a2 + 12); /* 0x80032d74 */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x80032d78 */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x80032d7c */
    *(int32_t*)(reg_a3 + 8) = var_a0; /* 0x80032d80 */
    *(int32_t*)(reg_a3 + 12) = var_a1; /* 0x80032d84 */
    var_a2 = var_a2 + 16; /* 0x80032d88 */
    /* Branch bne at 0x80032d8c */
    var_a3 = var_a3 + 16; /* 0x80032d90 */
    var_a0 = *(uint8_t*)(reg_s0 + 28156); /* 0x80032d9c */
    func_0x80032774(); /* 0x80032da0 */
    var_a0 = 0x8019 << 16; /* 0x80032da8 */
    var_a0 = var_a0 + -18736; /* 0x80032dac */
    var_v1 = var_v0 << 0x3; /* 0x80032db0 */
    var_v1 = var_v1 << 0x2; /* 0x80032db8 */
    var_v1 = var_v1 << 0x2; /* 0x80032dc0 */
    var_v1 = var_v1 + var_a0; /* 0x80032dc4 */
    var_a3 = *(int32_t*)(reg_s0 + 28168); /* 0x80032dc8 */
    var_a2 = var_v1 + 108; /* 0x80032dcc */
    var_v0 = var_a2 | var_a3; /* 0x80032dd0 */
    var_v0 = var_v0 & 0x3; /* 0x80032dd4 */
    /* Branch beqz at 0x80032dd8 */
    var_t0 = var_v1 + 204; /* 0x80032ddc */
    var_a2 = var_a2 + 16; /* 0x80032e20 */
    /* Branch bne at 0x80032e24 */
    var_a3 = var_a3 + 16; /* 0x80032e28 */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x80032e34 */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x80032e38 */
    var_a0 = *(int32_t*)(reg_a2 + 8); /* 0x80032e3c */
    var_a1 = *(int32_t*)(reg_a2 + 12); /* 0x80032e40 */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x80032e44 */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x80032e48 */
    *(int32_t*)(reg_a3 + 8) = var_a0; /* 0x80032e4c */
    *(int32_t*)(reg_a3 + 12) = var_a1; /* 0x80032e50 */
    var_a2 = var_a2 + 16; /* 0x80032e54 */
    /* Branch bne at 0x80032e58 */
    var_a3 = var_a3 + 16; /* 0x80032e5c */
    var_v1 = 0x1 << 16; /* 0x80032e90 */
    var_v1 = var_v1 | 0x8000; /* 0x80032e94 */
    var_v0 = 0x8016 << 16; /* 0x80032e98 */
    var_v0 = var_v0 + -12144; /* 0x80032e9c */
    var_a1 = var_v0 + var_v1; /* 0x80032ea0 */
    var_v0 = var_s1 << 0x1; /* 0x80032ea4 */
    var_v0 = var_v0 + var_s1; /* 0x80032ea8 */
    var_v0 = var_v0 + var_s2; /* 0x80032eac */
    *(int8_t*)(reg_a1 + 28157) = var_v0; /* 0x80032eb0 */
    var_v1 = *(uint8_t*)(reg_a1 + 28157); /* 0x80032eb4 */
    var_a0 = *(uint8_t*)(reg_a1 + 28180); /* 0x80032eb8 */
    var_v0 = var_v1 << 0x3; /* 0x80032ebc */
    var_v0 = var_v0 << 0x2; /* 0x80032ec4 */
    var_v0 = var_v0 << 0x2; /* 0x80032ecc */
    var_v1 = 0x8019 << 16; /* 0x80032ed0 */
    var_v1 = var_v1 + -18628; /* 0x80032ed4 */
    var_v0 = var_v0 + var_v1; /* 0x80032ed8 */
    *(int32_t*)(reg_a1 + 28176) = var_v0; /* 0x80032edc */
    var_v0 = var_a0 & 0x2; /* 0x80032ee0 */
    /* Branch beqz at 0x80032ee4 */
    var_v0 = var_a0 & 0x10; /* 0x80032ee8 */
    /* Branch bnez at 0x80032eec */
    var_v0 = var_v1 + 1296; /* 0x80032ef0 */
    var_v0 = var_a0 & 0x20; /* 0x80032ef4 */
    /* Branch bnez at 0x80032ef8 */
    var_v0 = var_v1 + 1404; /* 0x80032efc */
    var_v0 = var_a0 & 0x40; /* 0x80032f00 */
    /* Branch bnez at 0x80032f04 */
    var_v0 = var_v1 + 1620; /* 0x80032f08 */
    var_v0 = var_a0 & 0x80; /* 0x80032f0c */
    /* Branch beqz at 0x80032f10 */
    var_v0 = var_v1 + 1836; /* 0x80032f14 */
    *(int32_t*)(reg_a1 + 28176) = var_v0; /* 0x80032f1c */
    var_v0 = var_a0 & 0x4; /* 0x80032f20 */
    /* Branch beqz at 0x80032f24 */
    var_v0 = var_a0 & 0x20; /* 0x80032f28 */
    /* Branch bnez at 0x80032f2c */
    var_v0 = var_v1 + 1512; /* 0x80032f30 */
    var_v0 = var_a0 & 0x40; /* 0x80032f34 */
    /* Branch bnez at 0x80032f38 */
    var_v0 = var_v1 + 1728; /* 0x80032f3c */
    var_v0 = var_a0 & 0x80; /* 0x80032f40 */
    /* Branch beqz at 0x80032f44 */
    var_v0 = var_v1 + 1944; /* 0x80032f48 */
    *(int32_t*)(reg_a1 + 28176) = var_v0; /* 0x80032f4c */
    var_v1 = 0x1 << 16; /* 0x80032f50 */
    var_v1 = var_v1 | 0x8000; /* 0x80032f54 */
    var_v0 = 0x8016 << 16; /* 0x80032f58 */
    var_v0 = var_v0 + -12144; /* 0x80032f5c */
    var_v0 = var_v0 + var_v1; /* 0x80032f60 */
    var_a3 = *(int32_t*)(reg_v0 + 28172); /* 0x80032f64 */
    var_a2 = *(int32_t*)(reg_v0 + 28168); /* 0x80032f68 */
    var_v0 = var_a2 | var_a3; /* 0x80032f70 */
    var_v0 = var_v0 & 0x3; /* 0x80032f74 */
    /* Branch beqz at 0x80032f78 */
    var_t0 = var_a2 + 96; /* 0x80032f7c */
    var_a2 = var_a2 + 16; /* 0x80032fc0 */
    /* Branch bne at 0x80032fc4 */
    var_a3 = var_a3 + 16; /* 0x80032fc8 */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x80032fd4 */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x80032fd8 */
    var_a0 = *(int32_t*)(reg_a2 + 8); /* 0x80032fdc */
    var_a1 = *(int32_t*)(reg_a2 + 12); /* 0x80032fe0 */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x80032fe4 */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x80032fe8 */
    *(int32_t*)(reg_a3 + 8) = var_a0; /* 0x80032fec */
    *(int32_t*)(reg_a3 + 12) = var_a1; /* 0x80032ff0 */
    var_a2 = var_a2 + 16; /* 0x80032ff4 */
    /* Branch bne at 0x80032ff8 */
    var_a3 = var_a3 + 16; /* 0x80032ffc */
    var_v1 = 0x1 << 16; /* 0x80033030 */
    var_v1 = var_v1 | 0x8000; /* 0x80033034 */
    var_v0 = 0x8016 << 16; /* 0x80033038 */
    var_v0 = var_v0 + -12144; /* 0x8003303c */
    var_v0 = var_v0 + var_v1; /* 0x80033040 */
    var_v1 = 128; /* 0x80033044 */
    *(int8_t*)(reg_v0 + 28156) = var_zero; /* 0x80033048 */
    *(int8_t*)(reg_v0 + 28158) = var_v1; /* 0x8003304c */
    var_ra = *(int32_t*)(stack + 28); /* 0x80033050 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x80033054 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x80033058 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003305c */
    var_sp = var_sp + 32; /* 0x80033060 */
    return; /* 0x80033064 */
}

/* Function at 0x80033068 */
void func_0x80033068() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -24; /* 0x8003306c */
    var_v0 = 0x1 << 16; /* 0x80033070 */
    var_v0 = var_v0 | 0x8000; /* 0x80033074 */
    var_v1 = 0x8016 << 16; /* 0x80033078 */
    var_v1 = var_v1 + -12144; /* 0x8003307c */
    var_v1 = var_v1 + var_v0; /* 0x80033080 */
    var_v0 = 0x8019 << 16; /* 0x80033084 */
    var_v0 = var_v0 + -13984; /* 0x80033088 */
    var_a0 = var_v0 + 108; /* 0x8003308c */
    *(int32_t*)(stack + 16) = var_ra; /* 0x80033090 */
    *(int32_t*)(reg_v1 + 28168) = var_v0; /* 0x80033094 */
    *(int32_t*)(reg_v1 + 28172) = var_a0; /* 0x80033098 */
    var_v1 = 0x801b << 16; /* 0x8003309c */
    var_v1 = *(uint8_t*)(reg_v1 + 22825); /* 0x800330a0 */
    var_v0 = var_v0 + -4752; /* 0x800330a4 */
    *(int8_t*)(reg_v0 + 4) = var_zero; /* 0x800330a8 */
    *(int8_t*)(reg_v0 + 6) = var_zero; /* 0x800330ac */
    *(int8_t*)(reg_v0 + 3) = var_zero; /* 0x800330b0 */
    *(int8_t*)(reg_v0 + 5) = var_zero; /* 0x800330b4 */
    *(int8_t*)(reg_v0 + 4) = var_zero; /* 0x800330b8 */
    *(int8_t*)(reg_v0 + 3) = var_zero; /* 0x800330bc */
    *(int8_t*)(reg_v0 + 7) = var_zero; /* 0x800330c0 */
    var_v1 = var_v1 << 0x1; /* 0x800330c4 */
    var_v1 = var_v1 + var_v0; /* 0x800330c8 */
    var_a1 = *(uint8_t*)(reg_v1 + 12); /* 0x800330cc */
    var_a2 = var_zero; /* 0x800330d0 */
    var_a0 = var_a1 & 0xf0; /* 0x800330d4 */
    func_0x80032800(); /* 0x800330d8 */
    var_ra = *(int32_t*)(stack + 16); /* 0x800330e0 */
    var_sp = var_sp + 24; /* 0x800330e4 */
    return; /* 0x800330e8 */
}

/* Function at 0x800330ec */
void func_0x800330ec() {
    /* Local variables */
    int32_t var_v0;

    var_v0 = 0x8019 << 16; /* 0x800330f0 */
    var_v0 = var_v0 + -18736; /* 0x800330f4 */
    *(int8_t*)(reg_v0 + 9) = var_zero; /* 0x800330f8 */
    *(int8_t*)(reg_v0 + 4) = var_zero; /* 0x800330fc */
    *(int8_t*)(reg_v0 + 3) = var_zero; /* 0x80033100 */
    *(int8_t*)(reg_v0 + 6) = var_zero; /* 0x80033104 */
    return; /* 0x80033108 */
}

/* Function at 0x8003310c */
void func_0x8003310c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_v0;
    int32_t var_v1;

    *(int8_t*)(reg_v0 + 5) = var_zero; /* 0x8003310c */
    var_sp = var_sp + -32; /* 0x80033110 */
    var_a0 = 0x8019 << 16; /* 0x80033114 */
    var_v0 = 0x801b << 16; /* 0x80033118 */
    var_v1 = *(uint8_t*)(reg_v0 + 22825); /* 0x8003311c */
    var_a0 = var_a0 + -18736; /* 0x80033120 */
    *(int32_t*)(stack + 28) = var_ra; /* 0x80033124 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x80033128 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x8003312c */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80033130 */
    var_v0 = var_v1 << 0x1; /* 0x80033134 */
    var_v0 = var_v0 + var_a0; /* 0x80033138 */
    var_v0 = *(uint8_t*)(reg_v0 + 12); /* 0x8003313c */
    var_s2 = var_v0 & 0xf; /* 0x80033144 */
    var_s1 = var_v0 & 0xf0; /* 0x80033148 */
    var_v0 = var_v1; /* 0x8003314c */
    var_v1 = var_v1 + -25; /* 0x80033150 */
    /* Branch bnez at 0x80033158 */
    var_v1 = 0x8019 << 16; /* 0x8003315c */
    var_v1 = var_v0 & 0xff; /* 0x80033160 */
    var_v0 = 14; /* 0x80033164 */
    /* Branch beq at 0x80033168 */
    var_v0 = 23; /* 0x8003316c */
    /* Branch bne at 0x80033170 */
    var_v0 = 0x801a << 16; /* 0x80033174 */
    var_v1 = 0x8019 << 16; /* 0x80033178 */
    var_v1 = var_v1 + -18736; /* 0x8003317c */
    var_v0 = *(uint8_t*)(reg_v1 + 4); /* 0x80033180 */
    *(int8_t*)(reg_v1 + 9) = var_zero; /* 0x80033184 */
    var_v0 = var_v0 & 0xdf; /* 0x80033188 */
    *(int8_t*)(reg_v1 + 4) = var_v0; /* 0x8003318c */
    var_v0 = 0x801a << 16; /* 0x80033190 */
    var_v0 = *(int8_t*)(reg_v0 + -28433); /* 0x80033194 */
    var_v0 = 0x8019 << 16; /* 0x800331a4 */
    var_v0 = var_v0 + -18736; /* 0x800331a8 */
    var_v1 = *(uint8_t*)(reg_v0 + 3); /* 0x800331ac */
    var_a0 = *(uint8_t*)(reg_v0 + 4); /* 0x800331b0 */
    var_v1 = var_v1 | 0x1; /* 0x800331b4 */
    var_a0 = var_a0 | 0x4; /* 0x800331bc */
    /* Branch blez at 0x800331c0 */
    var_v0 = 0x8019 << 16; /* 0x800331c4 */
    var_v0 = var_v0 + -18736; /* 0x800331c8 */
    var_v1 = *(uint8_t*)(reg_v0 + 3); /* 0x800331cc */
    var_a0 = *(uint8_t*)(reg_v0 + 4); /* 0x800331d0 */
    var_v1 = var_v1 | 0x1; /* 0x800331d4 */
    var_a0 = var_a0 | 0x10; /* 0x800331d8 */
    *(int8_t*)(reg_v0 + 3) = var_v1; /* 0x800331dc */
    *(int8_t*)(reg_v0 + 4) = var_a0; /* 0x800331e0 */
    var_v0 = 0x8019 << 16; /* 0x800331e4 */
    var_a0 = var_v0 + -18736; /* 0x800331e8 */
    var_v0 = *(uint8_t*)(reg_a0 + 10); /* 0x800331ec */
    var_a2 = 1; /* 0x800331f0 */
    /* Branch beq at 0x800331f4 */
    var_a3 = 2; /* 0x800331f8 */
    /* Branch bne at 0x800331fc */
    var_v0 = 0x801b << 16; /* 0x80033200 */
    *(int8_t*)(reg_a0 + 10) = var_zero; /* 0x80033208 */
    var_a1 = *(uint8_t*)(reg_v0 + 22825); /* 0x8003320c */
    var_v0 = *(uint8_t*)(reg_a0 + 7); /* 0x80033210 */
    /* Branch beq at 0x80033218 */
    var_v1 = 0x1 << 16; /* 0x8003321c */
    var_v1 = var_v1 | 0x8000; /* 0x80033220 */
    var_v0 = 0x8016 << 16; /* 0x80033224 */
    var_v0 = var_v0 + -12144; /* 0x80033228 */
    var_v0 = var_v0 + var_v1; /* 0x8003322c */
    *(int8_t*)(reg_a0 + 8) = var_a2; /* 0x80033230 */
    *(int8_t*)(reg_a0 + 7) = var_a1; /* 0x80033234 */
    *(int8_t*)(reg_v0 + 28158) = var_zero; /* 0x80033238 */
    var_v0 = *(uint8_t*)(reg_a0 + 8); /* 0x8003323c */
    /* Branch bne at 0x80033244 */
    var_v0 = 0x8019 << 16; /* 0x80033248 */
    var_v0 = 0x801a << 16; /* 0x8003324c */
    var_v1 = *(uint8_t*)(reg_v0 + -28352); /* 0x80033250 */
    var_v0 = 6; /* 0x80033254 */
    /* Branch bne at 0x80033258 */
    var_v0 = 0x8019 << 16; /* 0x8003325c */
    *(int8_t*)(reg_a0 + 3) = var_zero; /* 0x80033260 */
    *(int8_t*)(reg_a0 + 4) = var_zero; /* 0x80033264 */
    var_a0 = var_v0 + -18736; /* 0x80033268 */
    var_v0 = *(uint8_t*)(reg_a0 + 9); /* 0x8003326c */
    /* Branch beqz at 0x80033274 */
    var_v0 = 0x801b << 16; /* 0x80033278 */
    var_s2 = 1; /* 0x8003327c */
    *(int8_t*)(reg_a0 + 9) = var_zero; /* 0x80033284 */
    var_v0 = *(uint8_t*)(reg_v0 + 22825); /* 0x80033288 */
    var_v0 = var_v0 << 0x1; /* 0x80033290 */
    var_v0 = var_v0 + var_a0; /* 0x80033294 */
    var_v1 = *(int16_t*)(reg_v0 + 12); /* 0x80033298 */
    var_v0 = 17; /* 0x8003329c */
    /* Branch bne at 0x800332a0 */
    var_s2 = 1; /* 0x800332ac */
    var_v0 = *(uint8_t*)(reg_a0 + 3); /* 0x800332b0 */
    var_v1 = var_s2 | var_v0; /* 0x800332b8 */
    var_v0 = var_v1 & 0x4; /* 0x800332bc */
    /* Branch bnez at 0x800332c0 */
    var_s2 = 4; /* 0x800332c4 */
    var_v0 = var_v1 & 0x2; /* 0x800332c8 */
    /* Branch beqz at 0x800332cc */
    var_s2 = 1; /* 0x800332d0 */
    var_s2 = 2; /* 0x800332d4 */
    var_v0 = 0x8019 << 16; /* 0x800332d8 */
    var_a0 = var_v0 + -18736; /* 0x800332dc */
    var_v1 = *(uint8_t*)(reg_a0 + 4); /* 0x800332e0 */
    /* Branch beqz at 0x800332e8 */
    var_v0 = var_v1 & 0xe0; /* 0x800332ec */
    /* Branch bnez at 0x800332f0 */
    var_v0 = var_v1 & 0xf; /* 0x800332f4 */
    /* Branch bnez at 0x800332f8 */
    var_s1 = 64; /* 0x800332fc */
    var_v0 = 0x801b << 16; /* 0x80033300 */
    var_v0 = *(uint8_t*)(reg_v0 + 22825); /* 0x80033304 */
    var_v0 = var_v0 << 0x1; /* 0x8003330c */
    var_v0 = var_v0 + var_a0; /* 0x80033310 */
    var_v0 = *(uint16_t*)(reg_v0 + 12); /* 0x80033314 */
    var_v0 = var_v0 & 0x10; /* 0x8003331c */
    /* Branch beqz at 0x80033320 */
    var_s1 = 32; /* 0x80033324 */
    var_s1 = 16; /* 0x80033328 */
    var_v0 = 0x8019 << 16; /* 0x8003332c */
    var_s0 = var_v0 + -18736; /* 0x80033330 */
    var_v0 = *(uint8_t*)(reg_s0 + 5); /* 0x80033334 */
    var_a1 = var_s2 & 0xff; /* 0x80033338 */
    /* Branch bne at 0x8003333c */
    var_v0 = *(uint8_t*)(reg_s0 + 6); /* 0x80033344 */
    /* Branch beq at 0x8003334c */
    var_v0 = 0x8019 << 16; /* 0x80033350 */
    var_v1 = *(uint8_t*)(reg_s0 + 8); /* 0x80033354 */
    var_v0 = 2; /* 0x80033358 */
    /* Branch bne at 0x8003335c */
    var_a0 = var_s1; /* 0x80033360 */
    var_a2 = var_zero; /* 0x80033368 */
    /* Branch bnez at 0x8003336c */
    var_v0 = 0x8019 << 16; /* 0x80033370 */
    var_a0 = var_s1; /* 0x80033374 */
    var_a2 = 1; /* 0x80033378 */
    func_0x80032800(); /* 0x8003337c */
    *(int8_t*)(reg_s0 + 5) = var_s2; /* 0x80033384 */
    *(int8_t*)(reg_s0 + 6) = var_s1; /* 0x80033388 */
    var_v0 = 0x8019 << 16; /* 0x8003338c */
    var_a0 = var_v0 + -18736; /* 0x80033390 */
    var_v1 = *(uint8_t*)(reg_a0 + 8); /* 0x80033394 */
    var_v0 = 1; /* 0x80033398 */
    /* Branch bne at 0x8003339c */
    var_v0 = 0x8019 << 16; /* 0x800333a0 */
    var_v0 = 0x801b << 16; /* 0x800333a4 */
    var_v0 = var_v0 + 22816; /* 0x800333a8 */
    var_v0 = *(uint16_t*)(reg_v0 + 2); /* 0x800333ac */
    var_v0 = var_v0 << 0x10; /* 0x800333b4 */
    var_v0 = var_v0 >> 0x10; /* 0x800333b8 */
    /* Branch bnez at 0x800333c0 */
    var_v0 = 0x8019 << 16; /* 0x800333c4 */
    var_v0 = 2; /* 0x800333c8 */
    *(int8_t*)(reg_a0 + 8) = var_v0; /* 0x800333d0 */
    var_a0 = var_v0 + -18736; /* 0x800333d4 */
    var_v1 = *(uint8_t*)(reg_a0 + 8); /* 0x800333d8 */
    var_v0 = 2; /* 0x800333dc */
    /* Branch bne at 0x800333e0 */
    var_v1 = 0x1 << 16; /* 0x800333e4 */
    *(int8_t*)(reg_a0 + 8) = var_zero; /* 0x800333e8 */
    var_v1 = 0x1 << 16; /* 0x800333ec */
    var_v1 = var_v1 | 0x8000; /* 0x800333f0 */
    var_a0 = 0x8019 << 16; /* 0x800333f4 */
    var_v0 = 0x8016 << 16; /* 0x800333f8 */
    var_v0 = var_v0 + -12144; /* 0x800333fc */
    var_a1 = var_v0 + var_v1; /* 0x80033400 */
    var_v1 = *(uint8_t*)(reg_a1 + 28158); /* 0x80033404 */
    var_a0 = var_a0 + -18736; /* 0x80033408 */
    *(int8_t*)(reg_a0 + 4) = var_zero; /* 0x8003340c */
    var_v0 = var_v1 & 0x80; /* 0x80033410 */
    /* Branch beqz at 0x80033414 */
    *(int8_t*)(reg_a0 + 3) = var_zero; /* 0x80033418 */
    var_a2 = var_v1 & 0x7f; /* 0x8003341c */
    /* Branch bnez at 0x80033424 */
    var_v0 = 0x1 << 16; /* 0x80033428 */
    var_t0 = *(int32_t*)(reg_a1 + 28168); /* 0x8003342c */
    var_v1 = *(uint8_t*)(reg_a1 + 28157); /* 0x80033430 */
    *(int8_t*)(reg_a1 + 28158) = var_zero; /* 0x80033434 */
    var_v0 = var_v1 << 0x3; /* 0x80033438 */
    var_v0 = var_v0 << 0x2; /* 0x80033440 */
    var_v0 = var_v0 << 0x2; /* 0x80033448 */
    var_a0 = var_v0 + var_a0; /* 0x8003344c */
    var_a3 = var_a0 + 108; /* 0x80033450 */
    var_v0 = var_a3 | var_t0; /* 0x80033454 */
    var_v1 = *(uint8_t*)(reg_a1 + 28180); /* 0x80033458 */
    var_v0 = var_v0 & 0x3; /* 0x8003345c */
    /* Branch beqz at 0x80033460 */
    *(int8_t*)(reg_a1 + 28156) = var_v1; /* 0x80033464 */
    var_t1 = var_a0 + 204; /* 0x80033468 */
    var_a3 = var_a3 + 16; /* 0x800334ac */
    /* Branch bne at 0x800334b0 */
    var_t0 = var_t0 + 16; /* 0x800334b4 */
    var_t1 = var_a0 + 204; /* 0x800334c0 */
    var_v0 = *(int32_t*)(reg_a3 + 0); /* 0x800334c4 */
    var_v1 = *(int32_t*)(reg_a3 + 4); /* 0x800334c8 */
    var_a0 = *(int32_t*)(reg_a3 + 8); /* 0x800334cc */
    var_a1 = *(int32_t*)(reg_a3 + 12); /* 0x800334d0 */
    *(int32_t*)(reg_t0 + 0) = var_v0; /* 0x800334d4 */
    *(int32_t*)(reg_t0 + 4) = var_v1; /* 0x800334d8 */
    *(int32_t*)(reg_t0 + 8) = var_a0; /* 0x800334dc */
    *(int32_t*)(reg_t0 + 12) = var_a1; /* 0x800334e0 */
    var_a3 = var_a3 + 16; /* 0x800334e4 */
    /* Branch bne at 0x800334e8 */
    var_t0 = var_t0 + 16; /* 0x800334ec */
    var_v0 = 0x1 << 16; /* 0x80033520 */
    var_v0 = var_v0 | 0x8000; /* 0x80033524 */
    var_v1 = 0x8016 << 16; /* 0x80033528 */
    var_v1 = var_v1 + -12144; /* 0x8003352c */
    var_v1 = var_v1 + var_v0; /* 0x80033530 */
    var_a2 = var_a2 & 0xff; /* 0x80033534 */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x80033538 */
    var_a1 = 64; /* 0x8003353c */
    var_v0 = *(int16_t*)(reg_v0 + 104); /* 0x80033540 */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x8003354c */
    var_v0 = *(int16_t*)(reg_v0 + 104); /* 0x80033554 */
    var_v0 = var_a0 + var_v0; /* 0x80033564 */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x80033568 */
    var_v0 = var_v0 >> 0x6; /* 0x8003356c */
    *(int16_t*)(reg_a0 + 104) = var_v0; /* 0x80033570 */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x80033574 */
    var_v0 = *(int16_t*)(reg_v0 + 106); /* 0x8003357c */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x80033588 */
    var_v0 = *(int16_t*)(reg_v0 + 106); /* 0x80033590 */
    var_v0 = var_a0 + var_v0; /* 0x800335a0 */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x800335a4 */
    var_v0 = var_v0 >> 0x6; /* 0x800335a8 */
    *(int16_t*)(reg_a0 + 106) = var_v0; /* 0x800335ac */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x800335b0 */
    var_v0 = *(int16_t*)(reg_v0 + 80); /* 0x800335b8 */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x800335c4 */
    var_v0 = *(int16_t*)(reg_v0 + 80); /* 0x800335cc */
    var_v0 = var_a0 + var_v0; /* 0x800335dc */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x800335e0 */
    var_v0 = (uint32_t)var_v0 >> 0x6; /* 0x800335e4 */
    *(int16_t*)(reg_a0 + 80) = var_v0; /* 0x800335e8 */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x800335ec */
    var_v0 = *(int16_t*)(reg_v0 + 82); /* 0x800335f4 */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x80033600 */
    var_v0 = *(int16_t*)(reg_v0 + 82); /* 0x80033608 */
    var_v0 = var_a0 + var_v0; /* 0x80033618 */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x8003361c */
    var_v0 = (uint32_t)var_v0 >> 0x6; /* 0x80033620 */
    *(int16_t*)(reg_a0 + 82) = var_v0; /* 0x80033624 */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x80033628 */
    var_v0 = *(int16_t*)(reg_v0 + 84); /* 0x80033630 */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x8003363c */
    var_v0 = *(int16_t*)(reg_v0 + 84); /* 0x80033644 */
    var_v0 = var_a0 + var_v0; /* 0x80033654 */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x80033658 */
    var_v0 = (uint32_t)var_v0 >> 0x6; /* 0x8003365c */
    *(int16_t*)(reg_a0 + 84) = var_v0; /* 0x80033660 */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x80033664 */
    var_v0 = *(int16_t*)(reg_v0 + 86); /* 0x8003366c */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x80033678 */
    var_v0 = *(int16_t*)(reg_v0 + 86); /* 0x80033680 */
    var_v0 = var_a0 + var_v0; /* 0x80033690 */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x80033694 */
    var_v0 = (uint32_t)var_v0 >> 0x6; /* 0x80033698 */
    *(int16_t*)(reg_a0 + 86) = var_v0; /* 0x8003369c */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x800336a0 */
    var_v0 = *(int16_t*)(reg_v0 + 88); /* 0x800336a8 */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x800336b4 */
    var_v0 = *(int16_t*)(reg_v0 + 88); /* 0x800336bc */
    var_v0 = var_a0 + var_v0; /* 0x800336cc */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x800336d0 */
    var_v0 = (uint32_t)var_v0 >> 0x6; /* 0x800336d4 */
    *(int16_t*)(reg_a0 + 88) = var_v0; /* 0x800336d8 */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x800336dc */
    var_v0 = *(int16_t*)(reg_v0 + 90); /* 0x800336e4 */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x800336f0 */
    var_v0 = *(int16_t*)(reg_v0 + 90); /* 0x800336f8 */
    var_v0 = var_a0 + var_v0; /* 0x80033708 */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x8003370c */
    var_v0 = (uint32_t)var_v0 >> 0x6; /* 0x80033710 */
    *(int16_t*)(reg_a0 + 90) = var_v0; /* 0x80033714 */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x80033718 */
    var_v0 = *(int16_t*)(reg_v0 + 92); /* 0x80033720 */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x8003372c */
    var_v0 = *(int16_t*)(reg_v0 + 92); /* 0x80033734 */
    var_v0 = var_a0 + var_v0; /* 0x80033744 */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x80033748 */
    var_v0 = (uint32_t)var_v0 >> 0x6; /* 0x8003374c */
    *(int16_t*)(reg_a0 + 92) = var_v0; /* 0x80033750 */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x80033754 */
    var_v0 = *(int16_t*)(reg_v0 + 94); /* 0x8003375c */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x80033768 */
    var_v0 = *(int16_t*)(reg_v0 + 94); /* 0x80033770 */
    var_v0 = var_a0 + var_v0; /* 0x80033780 */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x80033784 */
    var_v0 = (uint32_t)var_v0 >> 0x6; /* 0x80033788 */
    *(int16_t*)(reg_a0 + 94) = var_v0; /* 0x8003378c */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x80033790 */
    var_v0 = *(int16_t*)(reg_v0 + 96); /* 0x80033798 */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x800337a4 */
    var_v0 = *(int16_t*)(reg_v0 + 96); /* 0x800337ac */
    var_v0 = var_a0 + var_v0; /* 0x800337bc */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x800337c0 */
    var_v0 = (uint32_t)var_v0 >> 0x6; /* 0x800337c4 */
    *(int16_t*)(reg_a0 + 96) = var_v0; /* 0x800337c8 */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x800337cc */
    var_v0 = *(uint8_t*)(reg_v0 + 100); /* 0x800337d4 */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x800337e0 */
    var_v0 = *(uint8_t*)(reg_v0 + 100); /* 0x800337e8 */
    var_v0 = var_a0 + var_v0; /* 0x800337f8 */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x800337fc */
    var_v0 = (uint32_t)var_v0 >> 0x6; /* 0x80033800 */
    *(int8_t*)(reg_a0 + 100) = var_v0; /* 0x80033804 */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x80033808 */
    var_v0 = *(uint8_t*)(reg_v0 + 101); /* 0x80033810 */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x8003381c */
    var_v0 = *(uint8_t*)(reg_v0 + 101); /* 0x80033824 */
    var_v0 = var_a0 + var_v0; /* 0x80033834 */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x80033838 */
    var_v0 = (uint32_t)var_v0 >> 0x6; /* 0x8003383c */
    *(int8_t*)(reg_a0 + 101) = var_v0; /* 0x80033840 */
    var_v0 = *(int32_t*)(reg_v1 + 28172); /* 0x80033844 */
    var_v0 = *(uint8_t*)(reg_v0 + 102); /* 0x8003384c */
    var_v0 = *(int32_t*)(reg_v1 + 28176); /* 0x80033858 */
    var_v0 = *(uint8_t*)(reg_v0 + 102); /* 0x80033860 */
    var_v0 = var_a0 + var_v0; /* 0x80033870 */
    var_a0 = *(int32_t*)(reg_v1 + 28168); /* 0x80033874 */
    var_v0 = (uint32_t)var_v0 >> 0x6; /* 0x80033878 */
    *(int8_t*)(reg_a0 + 102) = var_v0; /* 0x8003387c */
    var_v0 = *(uint8_t*)(reg_v1 + 28158); /* 0x80033880 */
    var_v0 = var_v0 + 1; /* 0x80033888 */
    *(int8_t*)(reg_v1 + 28158) = var_v0; /* 0x80033890 */
    var_v0 = *(uint8_t*)(reg_a1 + 28157); /* 0x80033894 */
    var_a3 = *(int32_t*)(reg_a1 + 28168); /* 0x80033898 */
    var_v1 = var_v0 << 0x3; /* 0x8003389c */
    var_v1 = var_v1 << 0x2; /* 0x800338a4 */
    var_v1 = var_v1 << 0x2; /* 0x800338ac */
    var_v1 = var_v1 + var_a0; /* 0x800338b0 */
    var_a2 = var_v1 + 108; /* 0x800338b4 */
    var_v0 = var_a2 | var_a3; /* 0x800338b8 */
    var_v0 = var_v0 & 0x3; /* 0x800338bc */
    /* Branch beqz at 0x800338c0 */
    var_t0 = var_v1 + 204; /* 0x800338c4 */
    var_a2 = var_a2 + 16; /* 0x80033908 */
    /* Branch bne at 0x8003390c */
    var_a3 = var_a3 + 16; /* 0x80033910 */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x8003391c */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x80033920 */
    var_a0 = *(int32_t*)(reg_a2 + 8); /* 0x80033924 */
    var_a1 = *(int32_t*)(reg_a2 + 12); /* 0x80033928 */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x8003392c */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x80033930 */
    *(int32_t*)(reg_a3 + 8) = var_a0; /* 0x80033934 */
    *(int32_t*)(reg_a3 + 12) = var_a1; /* 0x80033938 */
    var_a2 = var_a2 + 16; /* 0x8003393c */
    /* Branch bne at 0x80033940 */
    var_a3 = var_a3 + 16; /* 0x80033944 */
    var_v1 = 0x1 << 16; /* 0x80033978 */
    var_v1 = var_v1 | 0x8000; /* 0x8003397c */
    var_v0 = 0x8016 << 16; /* 0x80033980 */
    var_v0 = var_v0 + -12144; /* 0x80033984 */
    var_v0 = var_v0 + var_v1; /* 0x80033988 */
    var_v1 = *(int32_t*)(reg_v0 + 28168); /* 0x8003398c */
    var_v1 = *(int16_t*)(reg_v1 + 104); /* 0x80033994 */
    var_a0 = 4096; /* 0x80033998 */
    *(int32_t*)(reg_v0 + 28164) = var_a0; /* 0x8003399c */
    var_v1 = var_v1 + -1024; /* 0x800339a0 */
    *(int32_t*)(reg_v0 + 28160) = var_v1; /* 0x800339a4 */
    var_ra = *(int32_t*)(stack + 28); /* 0x800339a8 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x800339ac */
    var_s1 = *(int32_t*)(stack + 20); /* 0x800339b0 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x800339b4 */
    var_sp = var_sp + 32; /* 0x800339b8 */
    return; /* 0x800339bc */
}

/* Function at 0x800339c0 */
void func_0x800339c0() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_v0;
    int32_t var_v1;

    var_a2 = *(uint16_t*)(reg_a1 + 0); /* 0x800339c4 */
    var_a1 = var_a1 + 4; /* 0x800339c8 */
    var_v1 = 0xffff; /* 0x800339cc */
    var_v0 = var_a2 + -1; /* 0x800339d0 */
    var_a2 = var_v0; /* 0x800339d4 */
    var_v0 = var_v0 & 0xffff; /* 0x800339d8 */
    /* Branch beq at 0x800339dc */
    var_t2 = 0x1f80 << 16; /* 0x800339e0 */
    var_v0 = 0x8016 << 16; /* 0x800339e4 */
    var_t1 = var_v0 + -12144; /* 0x800339e8 */
    var_t0 = 0x834c; /* 0x800339ec */
    var_a3 = var_v1; /* 0x800339f0 */
    var_v1 = *(int32_t*)(reg_a1 + 0); /* 0x800339f4 */
    /* Branch bnez at 0x80033a00 */
    var_v0 = var_a0 & 0xffff; /* 0x80033a04 */
    var_v0 = var_v0 << 0x2; /* 0x80033a08 */
    var_v0 = var_v0 + var_t1; /* 0x80033a0c */
    var_v0 = var_v0 + var_t0; /* 0x80033a10 */
    *(int32_t*)(reg_v0 + 0) = var_a1; /* 0x80033a14 */
    var_v0 = *(int32_t*)(reg_a1 + 8); /* 0x80033a18 */
    var_v0 = var_a1 + var_v0; /* 0x80033a20 */
    *(int32_t*)(reg_t2 + 12) = var_v0; /* 0x80033a24 */
    var_a1 = var_a1 + var_v1; /* 0x80033a28 */
    var_v0 = var_a2 + -1; /* 0x80033a2c */
    var_a2 = var_v0; /* 0x80033a30 */
    var_v0 = var_v0 & 0xffff; /* 0x80033a34 */
    /* Branch bne at 0x80033a38 */
    var_a0 = var_a0 + 1; /* 0x80033a3c */
    return; /* 0x80033a40 */
}

/* Function at 0x80033a44 */
void func_0x80033a44() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_at;
    int32_t var_v0;

    var_v0 = 0x8016 << 16; /* 0x80033a48 */
    var_v0 = var_v0 + -12144; /* 0x80033a4c */
    var_a0 = var_a0 & 0xffff; /* 0x80033a50 */
    var_a0 = var_a0 << 0x2; /* 0x80033a54 */
    var_a0 = var_a0 + var_v0; /* 0x80033a58 */
    var_v0 = 0x834c; /* 0x80033a5c */
    var_a0 = var_a0 + var_v0; /* 0x80033a60 */
    *(int32_t*)(reg_a0 + 0) = var_a1; /* 0x80033a64 */
    var_v0 = *(int32_t*)(reg_a1 + 8); /* 0x80033a68 */
    var_a1 = var_a1 + var_v0; /* 0x80033a70 */
    var_at = 0x1f80 << 16; /* 0x80033a74 */
    *(int32_t*)(reg_at + 12) = var_a1; /* 0x80033a78 */
    return; /* 0x80033a7c */
}

/* Function at 0x80033a80 */
void func_0x80033a80() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_t3;
    int32_t var_v0;
    int32_t var_v1;

    var_t1 = var_a0; /* 0x80033a84 */
    var_t2 = var_a1; /* 0x80033a88 */
    var_t3 = var_a2; /* 0x80033a8c */
    /* Branch beqz at 0x80033a90 */
    var_t0 = var_a3 + -1; /* 0x80033a94 */
    var_a3 = -1; /* 0x80033a98 */
    var_a2 = var_a2 + 4; /* 0x80033a9c */
    var_a1 = var_a1 + 4; /* 0x80033aa0 */
    var_a0 = var_a0 + 4; /* 0x80033aa4 */
    var_v1 = *(uint16_t*)(reg_t2 + 0); /* 0x80033aa8 */
    var_t2 = var_t2 + 8; /* 0x80033aac */
    var_v0 = *(uint16_t*)(reg_t3 + 0); /* 0x80033ab0 */
    var_t3 = var_t3 + 8; /* 0x80033ab4 */
    var_t0 = var_t0 + -1; /* 0x80033ab8 */
    *(int16_t*)(reg_t1 + 0) = var_v0; /* 0x80033ac0 */
    var_v0 = *(uint16_t*)(reg_a2 + -2); /* 0x80033ac4 */
    var_v1 = *(uint16_t*)(reg_a1 + -2); /* 0x80033ac8 */
    var_t1 = var_t1 + 8; /* 0x80033acc */
    *(int16_t*)(reg_a0 + -2) = var_v0; /* 0x80033ad4 */
    var_v1 = *(uint16_t*)(reg_a1 + 0); /* 0x80033ad8 */
    var_a1 = var_a1 + 8; /* 0x80033adc */
    var_v0 = *(uint16_t*)(reg_a2 + 0); /* 0x80033ae0 */
    var_a2 = var_a2 + 8; /* 0x80033ae4 */
    *(int16_t*)(reg_a0 + 0) = var_v0; /* 0x80033aec */
    /* Branch bne at 0x80033af0 */
    var_a0 = var_a0 + 8; /* 0x80033af4 */
    return; /* 0x80033af8 */
}

/* Function at 0x80033afc */
void func_0x80033afc() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_t3;
    int32_t var_v0;
    int32_t var_v1;

    var_t1 = var_a0; /* 0x80033b00 */
    var_t2 = var_a1; /* 0x80033b04 */
    var_t3 = var_a2; /* 0x80033b08 */
    /* Branch beqz at 0x80033b0c */
    var_t0 = var_a3 + -1; /* 0x80033b10 */
    var_a3 = -1; /* 0x80033b14 */
    var_a2 = var_a2 + 4; /* 0x80033b18 */
    var_a1 = var_a1 + 4; /* 0x80033b1c */
    var_a0 = var_a0 + 4; /* 0x80033b20 */
    var_v0 = *(uint16_t*)(reg_t2 + 0); /* 0x80033b24 */
    var_t2 = var_t2 + 8; /* 0x80033b28 */
    var_v1 = *(uint16_t*)(reg_t3 + 0); /* 0x80033b2c */
    var_t3 = var_t3 + 8; /* 0x80033b30 */
    var_t0 = var_t0 + -1; /* 0x80033b34 */
    var_v0 = var_v0 + var_v1; /* 0x80033b38 */
    *(int16_t*)(reg_t1 + 0) = var_v0; /* 0x80033b3c */
    var_v0 = *(uint16_t*)(reg_a1 + -2); /* 0x80033b40 */
    var_v1 = *(uint16_t*)(reg_a2 + -2); /* 0x80033b44 */
    var_t1 = var_t1 + 8; /* 0x80033b48 */
    var_v0 = var_v0 + var_v1; /* 0x80033b4c */
    *(int16_t*)(reg_a0 + -2) = var_v0; /* 0x80033b50 */
    var_v0 = *(uint16_t*)(reg_a1 + 0); /* 0x80033b54 */
    var_a1 = var_a1 + 8; /* 0x80033b58 */
    var_v1 = *(uint16_t*)(reg_a2 + 0); /* 0x80033b5c */
    var_a2 = var_a2 + 8; /* 0x80033b60 */
    var_v0 = var_v0 + var_v1; /* 0x80033b64 */
    *(int16_t*)(reg_a0 + 0) = var_v0; /* 0x80033b68 */
    /* Branch bne at 0x80033b6c */
    var_a0 = var_a0 + 8; /* 0x80033b70 */
    return; /* 0x80033b74 */
}

/* Function at 0x80033b78 */
void func_0x80033b78() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_v0;
    int32_t var_v1;

    var_a2 = *(int16_t*)(reg_a1 + 0); /* 0x80033b7c */
    var_a1 = var_a1 + 4; /* 0x80033b80 */
    var_v0 = -1; /* 0x80033b84 */
    *(int16_t*)(reg_a0 + 0) = var_a2; /* 0x80033b88 */
    var_a2 = var_a2 + -1; /* 0x80033b8c */
    /* Branch beq at 0x80033b90 */
    var_a0 = var_a0 + 4; /* 0x80033b94 */
    var_a3 = var_v0; /* 0x80033b98 */
    var_v1 = var_a0 + 4; /* 0x80033b9c */
    var_v0 = *(uint16_t*)(reg_a1 + 0); /* 0x80033ba0 */
    var_a1 = var_a1 + 2; /* 0x80033ba4 */
    var_a2 = var_a2 + -1; /* 0x80033ba8 */
    *(int16_t*)(reg_a0 + 0) = var_v0; /* 0x80033bac */
    var_v0 = *(uint16_t*)(reg_a1 + 0); /* 0x80033bb0 */
    var_a1 = var_a1 + 2; /* 0x80033bb4 */
    var_a0 = var_a0 + 8; /* 0x80033bb8 */
    *(int16_t*)(reg_v1 + -2) = var_v0; /* 0x80033bbc */
    var_v0 = *(uint16_t*)(reg_a1 + 0); /* 0x80033bc0 */
    var_a1 = var_a1 + 4; /* 0x80033bc4 */
    *(int16_t*)(reg_v1 + 0) = var_v0; /* 0x80033bc8 */
    /* Branch bne at 0x80033bcc */
    var_v1 = var_v1 + 8; /* 0x80033bd0 */
    return; /* 0x80033bd4 */
}

/* Function at 0x80033bd8 */
void func_0x80033bd8() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_t3;
    int32_t var_v0;
    int32_t var_v1;

    var_t1 = var_a0; /* 0x80033bdc */
    var_t2 = var_a1; /* 0x80033be0 */
    var_t0 = *(int16_t*)(reg_a2 + 0); /* 0x80033be4 */
    var_v0 = -1; /* 0x80033be8 */
    var_t0 = var_t0 + -1; /* 0x80033bec */
    /* Branch beq at 0x80033bf0 */
    var_a2 = var_a2 + 4; /* 0x80033bf4 */
    var_t3 = var_v0; /* 0x80033bf8 */
    var_a1 = var_a1 + 4; /* 0x80033bfc */
    var_a0 = var_a0 + 4; /* 0x80033c00 */
    var_a3 = var_a2 + 4; /* 0x80033c04 */
    var_v1 = *(uint16_t*)(reg_a2 + 0); /* 0x80033c08 */
    var_a2 = var_a2 + 8; /* 0x80033c0c */
    var_v0 = *(uint16_t*)(reg_t2 + 0); /* 0x80033c10 */
    var_t2 = var_t2 + 8; /* 0x80033c14 */
    var_t0 = var_t0 + -1; /* 0x80033c18 */
    var_v0 = var_v0 + var_v1; /* 0x80033c1c */
    *(int16_t*)(reg_t1 + 0) = var_v0; /* 0x80033c20 */
    var_v0 = *(uint16_t*)(reg_a1 + -2); /* 0x80033c24 */
    var_v1 = *(uint16_t*)(reg_a3 + -2); /* 0x80033c28 */
    var_t1 = var_t1 + 8; /* 0x80033c2c */
    var_v0 = var_v0 + var_v1; /* 0x80033c30 */
    *(int16_t*)(reg_a0 + -2) = var_v0; /* 0x80033c34 */
    var_v1 = *(uint16_t*)(reg_a3 + 0); /* 0x80033c38 */
    var_a3 = var_a3 + 8; /* 0x80033c3c */
    var_v0 = *(uint16_t*)(reg_a1 + 0); /* 0x80033c40 */
    var_a1 = var_a1 + 8; /* 0x80033c44 */
    var_v0 = var_v0 + var_v1; /* 0x80033c48 */
    *(int16_t*)(reg_a0 + 0) = var_v0; /* 0x80033c4c */
    /* Branch bne at 0x80033c50 */
    var_a0 = var_a0 + 8; /* 0x80033c54 */
    return; /* 0x80033c58 */
}

/* Function at 0x80033c5c */
void func_0x80033c5c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_v0;
    int32_t var_v1;

    var_t0 = var_a0; /* 0x80033c60 */
    var_a3 = *(int16_t*)(reg_a1 + 0); /* 0x80033c64 */
    var_v0 = -1; /* 0x80033c68 */
    var_a3 = var_a3 + -1; /* 0x80033c6c */
    /* Branch beq at 0x80033c70 */
    var_a1 = var_a1 + 4; /* 0x80033c74 */
    var_t1 = var_v0; /* 0x80033c78 */
    var_a0 = var_a0 + 4; /* 0x80033c7c */
    var_a2 = var_a1 + 4; /* 0x80033c80 */
    var_v1 = *(uint16_t*)(reg_a1 + 0); /* 0x80033c84 */
    var_a1 = var_a1 + 8; /* 0x80033c88 */
    var_v0 = *(uint16_t*)(reg_t0 + 0); /* 0x80033c8c */
    var_a3 = var_a3 + -1; /* 0x80033c90 */
    var_v0 = var_v0 + var_v1; /* 0x80033c94 */
    *(int16_t*)(reg_t0 + 0) = var_v0; /* 0x80033c98 */
    var_v0 = *(uint16_t*)(reg_a0 + -2); /* 0x80033c9c */
    var_v1 = *(uint16_t*)(reg_a2 + -2); /* 0x80033ca0 */
    var_t0 = var_t0 + 8; /* 0x80033ca4 */
    var_v0 = var_v0 + var_v1; /* 0x80033ca8 */
    *(int16_t*)(reg_a0 + -2) = var_v0; /* 0x80033cac */
    var_v0 = *(uint16_t*)(reg_a0 + 0); /* 0x80033cb0 */
    var_v1 = *(uint16_t*)(reg_a2 + 0); /* 0x80033cb4 */
    var_a2 = var_a2 + 8; /* 0x80033cb8 */
    var_v0 = var_v0 + var_v1; /* 0x80033cbc */
    *(int16_t*)(reg_a0 + 0) = var_v0; /* 0x80033cc0 */
    /* Branch bne at 0x80033cc4 */
    var_a0 = var_a0 + 8; /* 0x80033cc8 */
    return; /* 0x80033ccc */
}

/* Function at 0x80033cd0 */
void func_0x80033cd0() {
    /* Local variables */
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_sp;

    var_sp = var_sp + -24; /* 0x80033cd4 */
    var_a3 = var_a2; /* 0x80033cd8 */
    *(int32_t*)(stack + 16) = var_ra; /* 0x80033cdc */
    var_a2 = *(int16_t*)(reg_a1 + 0); /* 0x80033ce0 */
    func_0x80074a04(); /* 0x80033ce4 */
    var_ra = *(int32_t*)(stack + 16); /* 0x80033cec */
    var_sp = var_sp + 24; /* 0x80033cf0 */
    return; /* 0x80033cf4 */
}

/* Function at 0x80033cf8 */
void func_0x80033cf8() {
    /* Local variables */
    int32_t var_a1;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_t3;
    int32_t var_t4;
    int32_t var_t5;
    int32_t var_v0;
    int32_t var_v1;

    var_t4 = var_zero; /* 0x80033cfc */
    var_t2 = var_t4; /* 0x80033d00 */
    var_t0 = var_t2; /* 0x80033d04 */
    var_v0 = *(int32_t*)(reg_a0 + 16); /* 0x80033d08 */
    var_a1 = var_a1 << 0x2; /* 0x80033d0c */
    var_v0 = var_a0 + var_v0; /* 0x80033d10 */
    var_a1 = var_a1 + var_v0; /* 0x80033d14 */
    var_v0 = *(int32_t*)(reg_a1 + 0); /* 0x80033d18 */
    var_v0 = var_a0 + var_v0; /* 0x80033d20 */
    var_t1 = var_v0 + 4; /* 0x80033d24 */
    var_a1 = *(uint8_t*)(reg_v0 + 0); /* 0x80033d28 */
    var_v0 = -1; /* 0x80033d2c */
    var_a1 = var_a1 + -1; /* 0x80033d30 */
    /* Branch beq at 0x80033d34 */
    var_t3 = var_t0; /* 0x80033d38 */
    var_t5 = var_v0; /* 0x80033d3c */
    var_v0 = *(int32_t*)(reg_t1 + 0); /* 0x80033d40 */
    var_t4 = var_a0 + var_v0; /* 0x80033d48 */
    var_v1 = *(uint16_t*)(reg_t4 + 0); /* 0x80033d4c */
    var_t0 = var_t0 + var_v1; /* 0x80033d54 */
    /* Branch beqz at 0x80033d5c */
    var_t1 = var_t1 + 4; /* 0x80033d60 */
    var_v0 = var_v0 << 0xc; /* 0x80033d68 */
    /* Branch bnez at 0x80033d70 */
    *(int32_t*)(reg_a3 + 0) = var_t2; /* 0x80033d84 */
    var_t3 = var_t0; /* 0x80033d88 */
    var_a1 = var_a1 + -1; /* 0x80033d8c */
    /* Branch bne at 0x80033d90 */
    var_t2 = var_t2 + 1; /* 0x80033d94 */
    var_t2 = var_t2 + -1; /* 0x80033d98 */
    var_v1 = 4096; /* 0x80033d9c */
    *(int32_t*)(reg_a3 + 0) = var_t2; /* 0x80033da0 */
    var_v0 = *(int32_t*)(stack + 16); /* 0x80033da4 */
    *(int32_t*)(reg_v0 + 0) = var_v1; /* 0x80033dac */
    return; /* 0x80033db0 */
}

/* Function at 0x80033db4 */
void func_0x80033db4() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = var_t4; /* 0x80033db4 */
    var_sp = var_sp + -24; /* 0x80033db8 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80033dbc */
    var_s0 = var_a1; /* 0x80033dc0 */
    var_v1 = 0x8016 << 16; /* 0x80033dc4 */
    var_v1 = var_v1 + -12144; /* 0x80033dc8 */
    var_a0 = var_a0 & 0xffff; /* 0x80033dcc */
    var_v0 = var_a0 << 0x2; /* 0x80033dd0 */
    var_v0 = var_v0 + var_v1; /* 0x80033dd4 */
    var_v1 = 0x834c; /* 0x80033dd8 */
    var_v0 = var_v0 + var_v1; /* 0x80033ddc */
    *(int32_t*)(stack + 20) = var_ra; /* 0x80033de0 */
    var_v0 = *(int32_t*)(reg_v0 + 0); /* 0x80033de4 */
    /* Branch bnez at 0x80033dec */
    *(int32_t*)(reg_s0 + 0) = var_v0; /* 0x80033df0 */
    /* Branch beqz at 0x80033df4 */
    func_0x80015258(); /* 0x80033dfc */
    var_v0 = var_v0 + -1; /* 0x80033e04 */
    var_v0 = var_v0 & 0xff; /* 0x80033e08 */
    /* Branch bnez at 0x80033e10 */
    *(int32_t*)(reg_s0 + 0) = var_zero; /* 0x80033e18 */
    var_ra = *(int32_t*)(stack + 20); /* 0x80033e1c */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80033e20 */
    var_sp = var_sp + 24; /* 0x80033e24 */
    return; /* 0x80033e28 */
}

/* Function at 0x80033e2c */
void func_0x80033e2c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -80; /* 0x80033e30 */
    *(int32_t*)(stack + 60) = var_s1; /* 0x80033e34 */
    var_s1 = var_a1; /* 0x80033e38 */
    *(int32_t*)(stack + 68) = var_s3; /* 0x80033e3c */
    var_s3 = var_a2; /* 0x80033e40 */
    *(int32_t*)(stack + 72) = var_s4; /* 0x80033e44 */
    var_s4 = var_a3; /* 0x80033e48 */
    var_a0 = var_a0 & 0xffff; /* 0x80033e4c */
    *(int32_t*)(stack + 64) = var_s2; /* 0x80033e50 */
    var_s2 = *(int32_t*)(stack + 96); /* 0x80033e54 */
    var_a1 = var_sp + 24; /* 0x80033e58 */
    *(int32_t*)(stack + 76) = var_ra; /* 0x80033e5c */
    func_0x80033db8(); /* 0x80033e60 */
    var_s0 = *(int32_t*)(stack + 24); /* 0x80033e68 */
    /* Branch bnez at 0x80033e70 */
    var_v0 = 1; /* 0x80033e74 */
    *(int16_t*)(reg_s2 + 4) = var_zero; /* 0x80033e78 */
    *(int16_t*)(reg_s2 + 2) = var_zero; /* 0x80033e7c */
    *(int16_t*)(reg_s2 + 0) = var_zero; /* 0x80033e84 */
    var_v0 = *(int32_t*)(reg_s0 + 8); /* 0x80033e88 */
    var_a2 = var_s0 + var_v0; /* 0x80033e90 */
    /* Branch bnez at 0x80033e98 */
    var_v1 = var_s1 & 0x7f; /* 0x80033ea0 */
    var_v0 = var_v1 << 0x2; /* 0x80033ea4 */
    var_v0 = var_v0 + var_v1; /* 0x80033ea8 */
    var_v0 = var_v0 << 0x3; /* 0x80033eac */
    var_v0 = var_v0 + var_a2; /* 0x80033eb0 */
    var_v0 = *(int32_t*)(reg_v0 + 12); /* 0x80033eb4 */
    var_v0 = var_v0 + 12; /* 0x80033ebc */
    var_s1 = var_a2 + var_v0; /* 0x80033ec0 */
    var_v0 = var_s4 << 0x3; /* 0x80033ec4 */
    var_v0 = var_v0 + var_s1; /* 0x80033ec8 */
    var_v0 = *(uint16_t*)(reg_s0 + 4); /* 0x80033ef0 */
    /* Branch bnez at 0x80033ef8 */
    var_a0 = var_s0; /* 0x80033efc */
    var_s1 = var_zero; /* 0x80033f04 */
    var_a1 = var_s1; /* 0x80033f08 */
    var_v1 = var_sp + 52; /* 0x80033f0c */
    var_v0 = *(int32_t*)(reg_a2 + 12); /* 0x80033f10 */
    var_a3 = var_sp + 48; /* 0x80033f14 */
    *(int32_t*)(stack + 16) = var_v1; /* 0x80033f18 */
    var_v0 = var_v0 + 12; /* 0x80033f1c */
    var_s1 = var_a2 + var_v0; /* 0x80033f20 */
    func_0x80033cfc(); /* 0x80033f24 */
    var_a0 = *(int32_t*)(reg_s0 + 12); /* 0x80033f2c */
    var_v1 = *(uint8_t*)(reg_v0 + 3); /* 0x80033f30 */
    var_v0 = *(uint8_t*)(reg_v0 + 2); /* 0x80033f34 */
    var_a0 = var_s0 + var_a0; /* 0x80033f38 */
    var_v1 = var_v1 << 0x2; /* 0x80033f3c */
    var_v1 = var_v1 + var_a0; /* 0x80033f40 */
    var_v0 = var_v0 << 0x2; /* 0x80033f44 */
    var_v0 = var_v0 + var_a0; /* 0x80033f48 */
    var_a0 = var_s4 << 0x3; /* 0x80033f4c */
    var_a2 = var_a0 + var_s1; /* 0x80033f50 */
    var_a1 = *(int32_t*)(reg_v1 + 0); /* 0x80033f54 */
    var_t0 = *(uint16_t*)(reg_a2 + 0); /* 0x80033f58 */
    var_a1 = var_s0 + var_a1; /* 0x80033f5c */
    var_a1 = var_a0 + var_a1; /* 0x80033f60 */
    var_v1 = *(uint16_t*)(reg_a1 + 0); /* 0x80033f64 */
    var_a3 = *(int32_t*)(reg_v0 + 0); /* 0x80033f68 */
    var_t0 = var_t0 + var_v1; /* 0x80033f6c */
    *(int16_t*)(stack + 32) = var_t0; /* 0x80033f70 */
    var_v0 = *(uint16_t*)(reg_a2 + 2); /* 0x80033f74 */
    var_v1 = *(uint16_t*)(reg_a1 + 2); /* 0x80033f78 */
    var_a3 = var_s0 + var_a3; /* 0x80033f7c */
    var_v0 = var_v0 + var_v1; /* 0x80033f80 */
    *(int16_t*)(stack + 34) = var_v0; /* 0x80033f84 */
    var_v0 = *(uint16_t*)(reg_a2 + 4); /* 0x80033f88 */
    var_v1 = *(uint16_t*)(reg_a1 + 4); /* 0x80033f8c */
    var_a0 = var_a0 + var_a3; /* 0x80033f90 */
    var_v0 = var_v0 + var_v1; /* 0x80033f94 */
    *(int16_t*)(stack + 36) = var_v0; /* 0x80033f98 */
    var_v1 = *(uint16_t*)(reg_a0 + 0); /* 0x80033f9c */
    var_v0 = *(uint16_t*)(reg_a1 + 0); /* 0x80033fa0 */
    var_a2 = *(int32_t*)(stack + 52); /* 0x80033fa4 */
    var_v0 = var_v1 << 0x10; /* 0x80033fac */
    var_v0 = var_v0 >> 0x10; /* 0x80033fb0 */
    *(int16_t*)(stack + 40) = var_v1; /* 0x80033fb8 */
    var_v0 = *(uint16_t*)(reg_a0 + 2); /* 0x80033fbc */
    var_v1 = *(uint16_t*)(reg_a1 + 2); /* 0x80033fc0 */
    *(int16_t*)(stack + 42) = var_v0; /* 0x80033fcc */
    var_v0 = *(uint16_t*)(reg_a0 + 4); /* 0x80033fd0 */
    var_v1 = *(uint16_t*)(reg_a1 + 4); /* 0x80033fd4 */
    *(int16_t*)(stack + 44) = var_v0; /* 0x80033fe0 */
    var_v0 = var_t1 >> 0xc; /* 0x80033fe8 */
    var_t0 = var_t0 + var_v0; /* 0x80033fec */
    *(int16_t*)(reg_s2 + 0) = var_t0; /* 0x80033ff0 */
    var_v0 = *(int16_t*)(stack + 42); /* 0x80033ff4 */
    var_v0 = *(uint16_t*)(stack + 34); /* 0x80034000 */
    var_v1 = var_t1 >> 0xc; /* 0x80034008 */
    var_v0 = var_v0 + var_v1; /* 0x8003400c */
    *(int16_t*)(reg_s2 + 2) = var_v0; /* 0x80034010 */
    var_v0 = *(int16_t*)(stack + 44); /* 0x80034014 */
    var_v0 = *(uint16_t*)(stack + 36); /* 0x80034020 */
    var_v1 = var_t1 >> 0xc; /* 0x80034028 */
    var_v0 = var_v0 + var_v1; /* 0x8003402c */
    *(int16_t*)(reg_s2 + 4) = var_v0; /* 0x80034030 */
    var_v0 = var_zero; /* 0x80034034 */
    var_ra = *(int32_t*)(stack + 76); /* 0x80034038 */
    var_s4 = *(int32_t*)(stack + 72); /* 0x8003403c */
    var_s3 = *(int32_t*)(stack + 68); /* 0x80034040 */
    var_s2 = *(int32_t*)(stack + 64); /* 0x80034044 */
    var_s1 = *(int32_t*)(stack + 60); /* 0x80034048 */
    var_s0 = *(int32_t*)(stack + 56); /* 0x8003404c */
    var_sp = var_sp + 80; /* 0x80034050 */
    return; /* 0x80034054 */
}

/* Function at 0x80034058 */
void func_0x80034058() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x8016 << 16; /* 0x8003405c */
    var_v0 = var_v0 + -12144; /* 0x80034060 */
    var_a0 = var_a0 << 0x2; /* 0x80034064 */
    var_a0 = var_a0 + var_v0; /* 0x80034068 */
    var_v0 = 0x834c; /* 0x8003406c */
    var_a0 = var_a0 + var_v0; /* 0x80034070 */
    var_a0 = *(int32_t*)(reg_a0 + 0); /* 0x80034074 */
    /* Branch beqz at 0x8003407c */
    var_v0 = var_zero; /* 0x80034080 */
    var_v0 = *(int32_t*)(reg_a0 + 8); /* 0x80034084 */
    var_a0 = var_a0 + var_v0; /* 0x8003408c */
    /* Branch beqz at 0x80034094 */
    var_v1 = var_a1 & 0x7f; /* 0x80034098 */
    var_v0 = *(int32_t*)(reg_a0 + 16); /* 0x8003409c */
    var_v0 = var_v1 << 0x2; /* 0x800340a8 */
    var_v0 = var_v0 + var_v1; /* 0x800340ac */
    var_v0 = var_v0 << 0x3; /* 0x800340b0 */
    var_v0 = var_v0 + var_a0; /* 0x800340b4 */
    var_v0 = *(int32_t*)(reg_v0 + 16); /* 0x800340b8 */
    return; /* 0x800340bc */
}

/* Function at 0x800340c0 */
void func_0x800340c0() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x8016 << 16; /* 0x800340c4 */
    var_v1 = var_v0 + 30348; /* 0x800340c8 */
    var_a0 = 16; /* 0x800340cc */
    var_a1 = 4; /* 0x800340d0 */
    *(int16_t*)(reg_v1 + 0) = var_a1; /* 0x800340d4 */
    *(int32_t*)(reg_v1 + 16) = var_zero; /* 0x800340d8 */
    var_v0 = var_a0 + -1; /* 0x800340dc */
    var_a0 = var_v0; /* 0x800340e0 */
    var_v0 = var_v0 & 0xffff; /* 0x800340e4 */
    /* Branch bnez at 0x800340e8 */
    var_v1 = var_v1 + 24; /* 0x800340ec */
    return; /* 0x800340f0 */
}

/* Function at 0x800340f4 */
void func_0x800340f4() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x8016 << 16; /* 0x800340f8 */
    var_v1 = var_v0 + 30348; /* 0x800340fc */
    var_a0 = 16; /* 0x80034100 */
    var_a2 = -5; /* 0x80034104 */
    var_a1 = 5; /* 0x80034108 */
    var_v0 = *(uint16_t*)(reg_v1 + 0); /* 0x8003410c */
    var_v0 = var_v0 & var_a2; /* 0x80034114 */
    /* Branch beqz at 0x80034118 */
    var_v0 = var_a0 + -1; /* 0x8003411c */
    *(int16_t*)(reg_v1 + 0) = var_a1; /* 0x80034120 */
    var_a0 = var_v0; /* 0x80034124 */
    var_v0 = var_v0 & 0xffff; /* 0x80034128 */
    /* Branch bnez at 0x8003412c */
    var_v1 = var_v1 + 24; /* 0x80034130 */
    return; /* 0x80034134 */
}

/* Function at 0x80034138 */
void func_0x80034138() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -24; /* 0x8003413c */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80034140 */
    var_s0 = var_a0; /* 0x80034144 */
    /* Branch beqz at 0x80034148 */
    *(int32_t*)(stack + 20) = var_ra; /* 0x8003414c */
    var_v0 = *(uint16_t*)(reg_s0 + 0); /* 0x80034150 */
    var_v0 = var_v0 & 0x4; /* 0x80034158 */
    /* Branch beqz at 0x8003415c */
    var_v0 = 4; /* 0x80034160 */
    var_v1 = *(int32_t*)(reg_s0 + 20); /* 0x80034164 */
    *(int16_t*)(reg_s0 + 0) = var_v0; /* 0x80034168 */
    *(int32_t*)(reg_v1 + 0) = var_zero; /* 0x8003416c */
    var_a0 = *(int32_t*)(reg_s0 + 16); /* 0x80034170 */
    /* Branch beqz at 0x80034178 */
    func_0x800152f8(); /* 0x80034180 */
    *(int32_t*)(reg_s0 + 16) = var_zero; /* 0x80034188 */
    var_ra = *(int32_t*)(stack + 20); /* 0x8003418c */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80034190 */
    var_sp = var_sp + 24; /* 0x80034194 */
    return; /* 0x80034198 */
}

/* Function at 0x8003419c */
void func_0x8003419c() {
    /* Local variables */
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_sp;
    int32_t var_v0;

    var_sp = var_sp + -40; /* 0x800341a0 */
    var_v0 = 0x8016 << 16; /* 0x800341a4 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x800341a8 */
    var_s0 = var_v0 + 30348; /* 0x800341ac */
    *(int32_t*)(stack + 20) = var_s1; /* 0x800341b0 */
    var_s1 = 16; /* 0x800341b4 */
    *(int32_t*)(stack + 28) = var_s3; /* 0x800341b8 */
    var_s3 = -5; /* 0x800341bc */
    *(int32_t*)(stack + 24) = var_s2; /* 0x800341c0 */
    var_s2 = 1; /* 0x800341c4 */
    *(int32_t*)(stack + 32) = var_ra; /* 0x800341c8 */
    var_v0 = *(uint16_t*)(reg_s0 + 0); /* 0x800341cc */
    var_v0 = var_v0 & var_s3; /* 0x800341d4 */
    var_v0 = var_v0 << 0x10; /* 0x800341d8 */
    var_v0 = var_v0 >> 0x10; /* 0x800341dc */
    /* Branch bne at 0x800341e0 */
    var_v0 = var_s1 + -1; /* 0x800341e4 */
    func_0x8003413c(); /* 0x800341e8 */
    var_v0 = var_s1 + -1; /* 0x800341f0 */
    var_s1 = var_v0; /* 0x800341f4 */
    var_v0 = var_v0 & 0xffff; /* 0x800341f8 */
    /* Branch bnez at 0x800341fc */
    var_s0 = var_s0 + 24; /* 0x80034200 */
    var_ra = *(int32_t*)(stack + 32); /* 0x80034204 */
    var_s3 = *(int32_t*)(stack + 28); /* 0x80034208 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x8003420c */
    var_s1 = *(int32_t*)(stack + 20); /* 0x80034210 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80034214 */
    var_sp = var_sp + 40; /* 0x80034218 */
    return; /* 0x8003421c */
}

/* Function at 0x80034220 */
void func_0x80034220() {
    /* Local variables */
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_sp;
    int32_t var_v0;

    var_sp = var_sp + -32; /* 0x80034224 */
    var_v0 = 0x8016 << 16; /* 0x80034228 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003422c */
    var_s0 = var_v0 + 30348; /* 0x80034230 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80034234 */
    var_s1 = 16; /* 0x80034238 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x8003423c */
    var_s2 = -5; /* 0x80034240 */
    *(int32_t*)(stack + 28) = var_ra; /* 0x80034244 */
    var_v0 = *(uint16_t*)(reg_s0 + 0); /* 0x80034248 */
    var_v0 = var_v0 & var_s2; /* 0x80034250 */
    /* Branch beqz at 0x80034254 */
    var_v0 = var_s1 + -1; /* 0x80034258 */
    func_0x8003413c(); /* 0x8003425c */
    var_v0 = var_s1 + -1; /* 0x80034264 */
    var_s1 = var_v0; /* 0x80034268 */
    var_v0 = var_v0 << 0x10; /* 0x8003426c */
    /* Branch bnez at 0x80034270 */
    var_s0 = var_s0 + 24; /* 0x80034274 */
    var_ra = *(int32_t*)(stack + 28); /* 0x80034278 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x8003427c */
    var_s1 = *(int32_t*)(stack + 20); /* 0x80034280 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80034284 */
    var_sp = var_sp + 32; /* 0x80034288 */
    return; /* 0x8003428c */
}

/* Function at 0x80034290 */
void func_0x80034290() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -24; /* 0x80034294 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80034298 */
    var_s0 = var_a0; /* 0x8003429c */
    var_v0 = 0x8016 << 16; /* 0x800342a0 */
    var_v0 = var_v0 + 30348; /* 0x800342a4 */
    var_a0 = 16; /* 0x800342a8 */
    var_a1 = -5; /* 0x800342ac */
    var_a2 = 255; /* 0x800342b0 */
    *(int32_t*)(stack + 20) = var_ra; /* 0x800342b4 */
    *(int32_t*)(reg_s0 + 0) = var_v0; /* 0x800342b8 */
    var_v1 = *(int32_t*)(reg_s0 + 0); /* 0x800342bc */
    var_v0 = *(uint16_t*)(reg_v1 + 0); /* 0x800342c4 */
    var_v0 = var_v0 & var_a1; /* 0x800342cc */
    /* Branch beqz at 0x800342d0 */
    var_v0 = var_v1 + 24; /* 0x800342d4 */
    *(int32_t*)(reg_s0 + 0) = var_v0; /* 0x800342d8 */
    var_v0 = var_a0 + -1; /* 0x800342dc */
    var_a0 = var_v0; /* 0x800342e0 */
    var_v0 = var_v0 & 0xffff; /* 0x800342e4 */
    /* Branch bnez at 0x800342e8 */
    func_0x800341a0(); /* 0x800342f0 */
    var_v0 = 0x8016 << 16; /* 0x800342f8 */
    var_v0 = var_v0 + 30348; /* 0x800342fc */
    *(int32_t*)(reg_s0 + 0) = var_v0; /* 0x80034300 */
    var_a0 = 16; /* 0x80034304 */
    var_a1 = -5; /* 0x80034308 */
    var_a2 = 255; /* 0x8003430c */
    var_v1 = *(int32_t*)(reg_s0 + 0); /* 0x80034310 */
    var_v0 = *(uint16_t*)(reg_v1 + 0); /* 0x80034318 */
    var_v0 = var_v0 & var_a1; /* 0x80034320 */
    /* Branch bnez at 0x80034324 */
    var_v0 = var_v1 + 24; /* 0x80034328 */
    *(int16_t*)(reg_v1 + 4) = var_a2; /* 0x80034330 */
    *(int32_t*)(reg_s0 + 0) = var_v0; /* 0x80034334 */
    var_v0 = var_a0 + -1; /* 0x80034338 */
    var_a0 = var_v0; /* 0x8003433c */
    var_v0 = var_v0 & 0xffff; /* 0x80034340 */
    /* Branch bnez at 0x80034344 */
    *(int32_t*)(reg_s0 + 0) = var_zero; /* 0x8003434c */
    var_ra = *(int32_t*)(stack + 20); /* 0x80034350 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80034354 */
    var_sp = var_sp + 24; /* 0x80034358 */
    return; /* 0x8003435c */
}

/* Function at 0x80034360 */
void func_0x80034360() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -72; /* 0x80034364 */
    *(int32_t*)(stack + 48) = var_s2; /* 0x80034368 */
    var_s2 = var_a0; /* 0x8003436c */
    *(int32_t*)(stack + 40) = var_s0; /* 0x80034370 */
    var_s0 = var_a1; /* 0x80034374 */
    *(int32_t*)(stack + 56) = var_s4; /* 0x80034378 */
    var_s4 = var_a2; /* 0x8003437c */
    *(int32_t*)(stack + 60) = var_s5; /* 0x80034380 */
    var_s5 = var_a3; /* 0x80034384 */
    *(int32_t*)(stack + 52) = var_s3; /* 0x80034388 */
    var_v0 = 0x8016 << 16; /* 0x8003438c */
    var_v0 = var_v0 + -12144; /* 0x80034390 */
    var_v1 = var_s0 << 0x2; /* 0x80034394 */
    var_v1 = var_v1 + var_v0; /* 0x80034398 */
    var_v0 = 0x834c; /* 0x8003439c */
    *(int32_t*)(stack + 64) = var_ra; /* 0x800343a0 */
    *(int32_t*)(stack + 44) = var_s1; /* 0x800343a4 */
    var_a0 = *(int32_t*)(reg_s2 + 0); /* 0x800343a8 */
    var_v1 = var_v1 + var_v0; /* 0x800343ac */
    *(int32_t*)(stack + 24) = var_a0; /* 0x800343b0 */
    var_s1 = *(int32_t*)(reg_v1 + 0); /* 0x800343b4 */
    /* Branch bnez at 0x800343b8 */
    var_s3 = 0x1f80 << 16; /* 0x800343bc */
    func_0x80034294(); /* 0x800343c0 */
    var_v0 = *(int32_t*)(stack + 24); /* 0x800343c8 */
    /* Branch bnez at 0x800343d0 */
    var_v0 = var_zero; /* 0x800343dc */
    var_v0 = *(int32_t*)(stack + 24); /* 0x800343e0 */
    var_a0 = *(int32_t*)(reg_v0 + 16); /* 0x800343e8 */
    *(int16_t*)(reg_v0 + 2) = var_s0; /* 0x800343ec */
    /* Branch beqz at 0x800343f0 */
    *(int32_t*)(reg_v0 + 20) = var_s2; /* 0x800343f4 */
    func_0x800152f8(); /* 0x800343f8 */
    var_v0 = *(int32_t*)(stack + 24); /* 0x80034400 */
    *(int32_t*)(reg_v0 + 16) = var_zero; /* 0x80034408 */
    var_v0 = *(int32_t*)(reg_s3 + 32); /* 0x8003440c */
    var_a0 = *(int32_t*)(reg_v0 + 4); /* 0x80034414 */
    func_0x800152d0(); /* 0x80034418 */
    var_v1 = *(int32_t*)(stack + 24); /* 0x80034420 */
    /* Branch bnez at 0x80034424 */
    *(int32_t*)(reg_v1 + 16) = var_v0; /* 0x80034428 */
    func_0x800341a0(); /* 0x8003442c */
    func_0x8003509c(); /* 0x80034434 */
    func_0x80034224(); /* 0x8003443c */
    func_0x80035120(); /* 0x80034444 */
    var_v0 = var_zero; /* 0x8003444c */
    var_a0 = *(int32_t*)(stack + 24); /* 0x80034450 */
    var_v1 = 0xffff; /* 0x80034454 */
    *(int32_t*)(reg_a0 + 20) = var_zero; /* 0x80034458 */
    *(int16_t*)(reg_a0 + 2) = var_v1; /* 0x80034460 */
    *(int32_t*)(reg_s2 + 0) = var_v1; /* 0x80034468 */
    var_v0 = *(uint16_t*)(reg_a0 + 2); /* 0x8003446c */
    /* Branch beq at 0x80034474 */
    func_0x8003413c(); /* 0x8003447c */
    var_v1 = *(int32_t*)(stack + 24); /* 0x80034484 */
    var_v0 = 255; /* 0x80034488 */
    *(int16_t*)(reg_v1 + 4) = var_v0; /* 0x80034490 */
    var_a0 = var_s1; /* 0x80034494 */
    var_a1 = var_s4; /* 0x80034498 */
    var_a2 = var_s5; /* 0x8003449c */
    var_a3 = var_sp + 28; /* 0x800344a0 */
    var_v0 = var_sp + 32; /* 0x800344a4 */
    func_0x80033cfc(); /* 0x800344a8 */
    var_a1 = *(int32_t*)(stack + 24); /* 0x800344b0 */
    var_v1 = *(uint16_t*)(reg_a1 + 4); /* 0x800344b8 */
    /* Branch bne at 0x800344c0 */
    var_s2 = var_v0; /* 0x800344c4 */
    var_v1 = *(uint16_t*)(reg_a1 + 6); /* 0x800344c8 */
    var_v0 = *(int32_t*)(stack + 28); /* 0x800344cc */
    /* Branch beq at 0x800344d4 */
    var_s0 = 0x8017 << 16; /* 0x800344d8 */
    var_v1 = *(int32_t*)(reg_s3 + 12); /* 0x800344dc */
    var_v0 = var_v1 + 12; /* 0x800344e4 */
    *(int32_t*)(reg_s3 + 32) = var_v0; /* 0x800344e8 */
    var_v0 = *(int32_t*)(reg_v1 + 12); /* 0x800344ec */
    var_v0 = var_v0 + 12; /* 0x800344f4 */
    var_v1 = var_v1 + var_v0; /* 0x800344f8 */
    *(int32_t*)(reg_s3 + 72) = var_v1; /* 0x800344fc */
    var_v1 = *(int32_t*)(reg_s1 + 12); /* 0x80034500 */
    var_v0 = *(uint8_t*)(reg_s2 + 3); /* 0x80034504 */
    var_v1 = var_s1 + var_v1; /* 0x80034508 */
    var_v0 = var_v0 << 0x2; /* 0x8003450c */
    var_v0 = var_v0 + var_v1; /* 0x80034510 */
    var_v0 = *(int32_t*)(reg_v0 + 0); /* 0x80034514 */
    var_v0 = var_s1 + var_v0; /* 0x8003451c */
    *(int32_t*)(reg_a1 + 8) = var_v0; /* 0x80034520 */
    var_v0 = *(uint8_t*)(reg_s2 + 2); /* 0x80034524 */
    var_v0 = var_v0 << 0x2; /* 0x8003452c */
    var_v0 = var_v0 + var_v1; /* 0x80034530 */
    var_a2 = *(int32_t*)(reg_v0 + 0); /* 0x80034534 */
    var_a0 = *(int32_t*)(reg_a1 + 16); /* 0x80034538 */
    var_a2 = var_s1 + var_a2; /* 0x8003453c */
    *(int32_t*)(reg_a1 + 12) = var_a2; /* 0x80034540 */
    var_v0 = *(int32_t*)(reg_s3 + 32); /* 0x80034544 */
    var_a1 = *(int32_t*)(reg_a1 + 8); /* 0x80034548 */
    var_a3 = *(int32_t*)(reg_v0 + 4); /* 0x8003454c */
    func_0x80033a84(); /* 0x80034550 */
    var_v0 = *(int32_t*)(stack + 24); /* 0x80034558 */
    var_v1 = *(uint16_t*)(stack + 28); /* 0x8003455c */
    *(int16_t*)(reg_v0 + 4) = var_s4; /* 0x80034560 */
    *(int16_t*)(reg_v0 + 6) = var_v1; /* 0x80034564 */
    var_s0 = var_s0 + -17456; /* 0x80034568 */
    var_v1 = *(int32_t*)(reg_s1 + 12); /* 0x8003456c */
    var_v0 = *(uint8_t*)(reg_s2 + 3); /* 0x80034570 */
    var_v1 = var_s1 + var_v1; /* 0x80034574 */
    var_v0 = var_v0 << 0x2; /* 0x80034578 */
    var_v0 = var_v0 + var_v1; /* 0x8003457c */
    var_a2 = *(int32_t*)(reg_v0 + 0); /* 0x80034580 */
    var_v0 = *(int32_t*)(stack + 24); /* 0x80034584 */
    var_a2 = var_s1 + var_a2; /* 0x80034588 */
    *(int32_t*)(reg_v0 + 8) = var_a2; /* 0x8003458c */
    var_v0 = *(int32_t*)(reg_s3 + 32); /* 0x80034590 */
    var_a0 = var_s0; /* 0x80034594 */
    var_a3 = *(int32_t*)(reg_v0 + 4); /* 0x80034598 */
    var_a1 = *(int32_t*)(reg_v0 + 0); /* 0x8003459c */
    var_v0 = *(int32_t*)(reg_s3 + 12); /* 0x800345a0 */
    var_a1 = var_a1 + 12; /* 0x800345a4 */
    func_0x80033b00(); /* 0x800345a8 */
    var_a3 = *(int32_t*)(stack + 32); /* 0x800345b0 */
    var_v0 = *(int32_t*)(stack + 24); /* 0x800345b4 */
    var_v1 = *(int32_t*)(reg_s3 + 32); /* 0x800345b8 */
    var_a1 = *(int32_t*)(reg_v0 + 16); /* 0x800345bc */
    var_a2 = *(int32_t*)(reg_v1 + 4); /* 0x800345c0 */
    func_0x80074a04(); /* 0x800345c4 */
    var_v0 = *(int32_t*)(stack + 24); /* 0x800345cc */
    var_v1 = 6; /* 0x800345d0 */
    *(int32_t*)(reg_s3 + 72) = var_s0; /* 0x800345d4 */
    *(int16_t*)(reg_v0 + 0) = var_v1; /* 0x800345d8 */
    var_ra = *(int32_t*)(stack + 64); /* 0x800345dc */
    var_s5 = *(int32_t*)(stack + 60); /* 0x800345e0 */
    var_s4 = *(int32_t*)(stack + 56); /* 0x800345e4 */
    var_s3 = *(int32_t*)(stack + 52); /* 0x800345e8 */
    var_s2 = *(int32_t*)(stack + 48); /* 0x800345ec */
    var_s1 = *(int32_t*)(stack + 44); /* 0x800345f0 */
    var_s0 = *(int32_t*)(stack + 40); /* 0x800345f4 */
    var_sp = var_sp + 72; /* 0x800345f8 */
    return; /* 0x800345fc */
}

/* Function at 0x80034600 */
void func_0x80034600() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -32; /* 0x80034604 */
    var_v0 = 0x8016 << 16; /* 0x80034608 */
    var_v0 = var_v0 + -12144; /* 0x8003460c */
    var_v1 = var_a1 << 0x2; /* 0x80034610 */
    var_v1 = var_v1 + var_v0; /* 0x80034614 */
    var_v0 = 0x834c; /* 0x80034618 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x8003461c */
    var_s1 = var_v1 + var_v0; /* 0x80034620 */
    *(int32_t*)(stack + 28) = var_ra; /* 0x80034624 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x80034628 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003462c */
    var_v1 = *(int32_t*)(reg_s1 + 0); /* 0x80034630 */
    var_v0 = *(uint16_t*)(reg_v1 + 4); /* 0x80034638 */
    var_s0 = *(int32_t*)(reg_a0 + 0); /* 0x8003463c */
    /* Branch bnez at 0x80034640 */
    var_s2 = 0x1f80 << 16; /* 0x80034644 */
    /* Branch beqz at 0x80034648 */
    func_0x8003413c(); /* 0x80034650 */
    func_0x80035008(); /* 0x80034658 */
    var_v1 = *(int32_t*)(reg_s1 + 0); /* 0x80034660 */
    var_v0 = *(int32_t*)(reg_v1 + 8); /* 0x80034668 */
    var_v1 = var_v1 + var_v0; /* 0x80034670 */
    var_v0 = var_v1 + 12; /* 0x80034674 */
    *(int32_t*)(reg_s2 + 12) = var_v1; /* 0x80034678 */
    *(int32_t*)(reg_s2 + 32) = var_v0; /* 0x8003467c */
    var_a0 = *(int32_t*)(reg_v1 + 12); /* 0x80034680 */
    var_v0 = 1; /* 0x80034684 */
    var_a0 = var_a0 + 12; /* 0x80034688 */
    var_v1 = var_v1 + var_a0; /* 0x8003468c */
    *(int32_t*)(reg_s2 + 72) = var_v1; /* 0x80034694 */
    var_v0 = *(uint16_t*)(reg_v1 + 6); /* 0x80034698 */
    /* Branch beqz at 0x800346a0 */
    func_0x8003569c(); /* 0x800346a8 */
    func_0x80034364(); /* 0x800346b8 */
    var_ra = *(int32_t*)(stack + 28); /* 0x800346c0 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x800346c4 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x800346c8 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x800346cc */
    var_sp = var_sp + 32; /* 0x800346d0 */
    return; /* 0x800346d4 */
}

/* Function at 0x800346d8 */
void func_0x800346d8() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_t3;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = *(int32_t*)(reg_a0 + 52); /* 0x800346dc */
    var_a3 = *(int32_t*)(reg_a0 + 40); /* 0x800346e0 */
    var_a2 = *(int32_t*)(reg_a0 + 44); /* 0x800346e4 */
    var_t0 = *(int32_t*)(reg_a0 + 48); /* 0x800346e8 */
    *(int32_t*)(reg_v0 + 4) = var_zero; /* 0x800346ec */
    var_v0 = *(int32_t*)(reg_a0 + 52); /* 0x800346f0 */
    *(int32_t*)(reg_v0 + 8) = var_a1; /* 0x800346f8 */
    var_v1 = *(int32_t*)(reg_a0 + 52); /* 0x800346fc */
    var_v0 = *(int32_t*)(reg_a0 + 40); /* 0x80034700 */
    var_a0 = var_zero; /* 0x80034704 */
    /* Branch blez at 0x80034708 */
    *(int32_t*)(reg_v1 + 0) = var_v0; /* 0x8003470c */
    var_t3 = 0x8000 << 16; /* 0x80034710 */
    var_t2 = -1; /* 0x80034714 */
    var_t1 = 0xffff; /* 0x80034718 */
    var_v1 = var_a3 + 11; /* 0x8003471c */
    *(int32_t*)(reg_a3 + 0) = var_t3; /* 0x80034720 */
    *(int32_t*)(reg_v1 + 1) = var_t2; /* 0x80034724 */
    *(int32_t*)(reg_v1 + -7) = var_a2; /* 0x80034728 */
    *(int32_t*)(reg_a2 + 68) = var_t0; /* 0x8003472c */
    *(int16_t*)(reg_v1 + -3) = var_t1; /* 0x80034730 */
    *(int8_t*)(reg_v1 + -1) = var_zero; /* 0x80034734 */
    *(int8_t*)(reg_v1 + 0) = var_zero; /* 0x80034738 */
    var_v1 = var_v1 + 16; /* 0x8003473c */
    var_a3 = var_a3 + 16; /* 0x80034740 */
    var_a2 = var_a2 + 80; /* 0x80034744 */
    var_a0 = var_a0 + 1; /* 0x80034748 */
    /* Branch bnez at 0x80034750 */
    var_t0 = var_t0 + 40; /* 0x80034754 */
    return; /* 0x80034758 */
}

/* Function at 0x8003475c */
void func_0x8003475c() {
    /* Local variables */
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_v0;
    int32_t var_v1;

    var_v1 = *(int32_t*)(reg_a0 + 4); /* 0x80034760 */
    var_a3 = *(int32_t*)(reg_a0 + 0); /* 0x80034764 */
    /* Branch blez at 0x80034768 */
    var_a2 = var_zero; /* 0x8003476c */
    var_v0 = *(uint16_t*)(reg_a3 + 8); /* 0x80034770 */
    /* Branch beq at 0x80034778 */
    var_a2 = var_a2 + 1; /* 0x80034780 */
    /* Branch bnez at 0x80034788 */
    var_a3 = var_a3 + 16; /* 0x8003478c */
    var_v1 = *(int32_t*)(reg_a0 + 4); /* 0x80034790 */
    /* Branch beq at 0x80034798 */
    var_v0 = var_zero; /* 0x8003479c */
    var_v0 = var_a3; /* 0x800347a0 */
    return; /* 0x800347a4 */
}

/* Function at 0x800347a8 */
void func_0x800347a8() {
    /* Local variables */
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_v0;
    int32_t var_v1;

    var_v1 = *(int32_t*)(reg_a0 + 4); /* 0x800347ac */
    var_a3 = *(int32_t*)(reg_a0 + 0); /* 0x800347b0 */
    /* Branch blez at 0x800347b4 */
    var_a2 = var_zero; /* 0x800347b8 */
    var_v0 = *(int32_t*)(reg_a3 + 12); /* 0x800347bc */
    /* Branch beq at 0x800347c4 */
    var_a2 = var_a2 + 1; /* 0x800347cc */
    /* Branch bnez at 0x800347d4 */
    var_a3 = var_a3 + 16; /* 0x800347d8 */
    var_v1 = *(int32_t*)(reg_a0 + 4); /* 0x800347dc */
    /* Branch beq at 0x800347e4 */
    var_v0 = var_zero; /* 0x800347e8 */
    var_v0 = var_a3; /* 0x800347ec */
    return; /* 0x800347f0 */
}

/* Function at 0x800347f4 */
void func_0x800347f4() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_a3 = var_a0; /* 0x800347f8 */
    var_a2 = *(int32_t*)(reg_a3 + 4); /* 0x800347fc */
    var_a0 = *(int32_t*)(reg_a3 + 0); /* 0x80034800 */
    /* Branch blez at 0x80034804 */
    var_v1 = var_zero; /* 0x80034808 */
    var_t0 = -1; /* 0x8003480c */
    var_v0 = *(int32_t*)(reg_a0 + 12); /* 0x80034810 */
    /* Branch beq at 0x80034818 */
    var_v1 = var_v1 + 1; /* 0x80034820 */
    /* Branch bnez at 0x80034828 */
    var_a0 = var_a0 + 16; /* 0x8003482c */
    var_v0 = *(int32_t*)(reg_a3 + 4); /* 0x80034830 */
    /* Branch bnez at 0x8003483c */
    var_v0 = *(int32_t*)(reg_a3 + 8); /* 0x80034844 */
    /* Branch beqz at 0x80034850 */
    var_v0 = var_zero; /* 0x80034854 */
    var_v0 = *(int32_t*)(reg_a3 + 4); /* 0x80034858 */
    var_a0 = *(int32_t*)(reg_a3 + 0); /* 0x8003485c */
    var_v1 = var_v0 << 0x4; /* 0x80034860 */
    var_a0 = var_a0 + var_v1; /* 0x80034864 */
    var_v0 = var_v0 + 1; /* 0x80034868 */
    *(int32_t*)(reg_a3 + 4) = var_v0; /* 0x8003486c */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x80034870 */
    *(int32_t*)(reg_a0 + 12) = var_a1; /* 0x80034874 */
    *(int32_t*)(reg_a0 + 0) = var_zero; /* 0x80034878 */
    *(int32_t*)(reg_v0 + 72) = var_zero; /* 0x8003487c */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x80034880 */
    var_v1 = 4096; /* 0x80034884 */
    *(int16_t*)(reg_v0 + 4) = var_v1; /* 0x80034888 */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x8003488c */
    *(int16_t*)(reg_v0 + 6) = var_zero; /* 0x80034894 */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x80034898 */
    *(int16_t*)(reg_v0 + 8) = var_zero; /* 0x800348a0 */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x800348a4 */
    *(int16_t*)(reg_v0 + 10) = var_zero; /* 0x800348ac */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x800348b0 */
    *(int16_t*)(reg_v0 + 12) = var_v1; /* 0x800348b8 */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x800348bc */
    *(int16_t*)(reg_v0 + 14) = var_zero; /* 0x800348c4 */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x800348c8 */
    *(int16_t*)(reg_v0 + 16) = var_zero; /* 0x800348d0 */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x800348d4 */
    *(int16_t*)(reg_v0 + 18) = var_zero; /* 0x800348dc */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x800348e0 */
    *(int16_t*)(reg_v0 + 20) = var_v1; /* 0x800348e8 */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x800348ec */
    *(int32_t*)(reg_v0 + 24) = var_zero; /* 0x800348f4 */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x800348f8 */
    *(int32_t*)(reg_v0 + 28) = var_zero; /* 0x80034900 */
    var_v1 = *(int32_t*)(reg_a0 + 4); /* 0x80034904 */
    var_v0 = var_a0; /* 0x80034908 */
    *(int32_t*)(reg_v1 + 32) = var_zero; /* 0x8003490c */
    var_v1 = 0xffff; /* 0x80034910 */
    *(int16_t*)(reg_v0 + 8) = var_v1; /* 0x80034914 */
    *(int8_t*)(reg_v0 + 10) = var_zero; /* 0x80034918 */
    *(int8_t*)(reg_v0 + 11) = var_zero; /* 0x8003491c */
    return; /* 0x80034920 */
}

/* Function at 0x80034924 */
void func_0x80034924() {
    /* Local variables */
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_v0;
    int32_t var_v1;

    var_a3 = *(int32_t*)(reg_a0 + 4); /* 0x80034928 */
    var_a2 = *(int32_t*)(reg_a0 + 0); /* 0x8003492c */
    /* Branch blez at 0x80034930 */
    var_v1 = var_zero; /* 0x80034934 */
    var_v0 = *(int32_t*)(reg_a2 + 12); /* 0x80034938 */
    /* Branch beq at 0x80034940 */
    var_v1 = var_v1 + 1; /* 0x80034948 */
    /* Branch bnez at 0x80034950 */
    var_a2 = var_a2 + 16; /* 0x80034954 */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x80034958 */
    /* Branch bnez at 0x80034964 */
    var_v0 = var_a2; /* 0x80034968 */
    var_v0 = var_zero; /* 0x80034970 */
    var_v1 = 0xffff; /* 0x80034974 */
    *(int16_t*)(reg_v0 + 8) = var_v1; /* 0x80034978 */
    *(int8_t*)(reg_v0 + 10) = var_zero; /* 0x8003497c */
    *(int8_t*)(reg_v0 + 11) = var_zero; /* 0x80034980 */
    return; /* 0x80034984 */
}

/* Function at 0x80034988 */
void func_0x80034988() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_v0;
    int32_t var_v1;

    var_v1 = *(int32_t*)(reg_a0 + 4); /* 0x8003498c */
    /* Branch blez at 0x80034994 */
    var_a0 = var_zero; /* 0x80034998 */
    var_v0 = *(int32_t*)(reg_a1 + 0); /* 0x8003499c */
    /* Branch beq at 0x800349a4 */
    var_a0 = var_a0 + 1; /* 0x800349ac */
    var_v1 = var_v1 + -1; /* 0x800349b0 */
    /* Branch bgtz at 0x800349b4 */
    var_a1 = var_a1 + 4; /* 0x800349b8 */
    /* Branch beqz at 0x800349bc */
    var_v0 = 0xffff; /* 0x800349c0 */
    var_v0 = var_a0 & 0xffff; /* 0x800349c4 */
    return; /* 0x800349c8 */
}

/* Function at 0x800349cc */
void func_0x800349cc() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_s7;
    int32_t var_s8;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -176; /* 0x800349d0 */
    *(int32_t*)(stack + 160) = var_s6; /* 0x800349d4 */
    var_s6 = var_a1; /* 0x800349d8 */
    *(int32_t*)(stack + 140) = var_s1; /* 0x800349dc */
    var_s1 = var_a0 + 4; /* 0x800349e0 */
    *(int32_t*)(stack + 172) = var_ra; /* 0x800349e4 */
    *(int32_t*)(stack + 168) = var_s8; /* 0x800349e8 */
    *(int32_t*)(stack + 164) = var_s7; /* 0x800349ec */
    *(int32_t*)(stack + 156) = var_s5; /* 0x800349f0 */
    *(int32_t*)(stack + 152) = var_s4; /* 0x800349f4 */
    *(int32_t*)(stack + 148) = var_s3; /* 0x800349f8 */
    *(int32_t*)(stack + 144) = var_s2; /* 0x800349fc */
    *(int32_t*)(stack + 136) = var_s0; /* 0x80034a00 */
    *(int32_t*)(stack + 176) = var_a0; /* 0x80034a04 */
    *(int32_t*)(stack + 184) = var_a2; /* 0x80034a08 */
    *(int32_t*)(stack + 188) = var_a3; /* 0x80034a0c */
    var_v0 = *(int32_t*)(reg_a0 + 0); /* 0x80034a10 */
    var_a0 = var_s6; /* 0x80034a14 */
    var_s8 = *(int32_t*)(stack + 192); /* 0x80034a18 */
    var_s3 = var_v0 & 0xffff; /* 0x80034a1c */
    var_a1 = var_s3; /* 0x80034a20 */
    var_v1 = (uint32_t)var_v0 >> 0x10; /* 0x80034a24 */
    var_s7 = var_v1 & 0xf; /* 0x80034a28 */
    var_v1 = (uint32_t)var_v0 >> 0x14; /* 0x80034a2c */
    var_s4 = var_v1 & 0xf; /* 0x80034a30 */
    var_v0 = (uint32_t)var_v0 >> 0x18; /* 0x80034a34 */
    func_0x800347ac(); /* 0x80034a38 */
    var_s2 = var_v0; /* 0x80034a40 */
    /* Branch bnez at 0x80034a44 */
    var_s5 = var_sp + 56; /* 0x80034a48 */
    var_s2 = var_sp + 40; /* 0x80034a4c */
    var_s0 = var_sp + 88; /* 0x80034a54 */
    var_v0 = *(int32_t*)(reg_s2 + 4); /* 0x80034a58 */
    var_s0 = *(int32_t*)(reg_v0 + 68); /* 0x80034a60 */
    var_s5 = var_v0 + 4; /* 0x80034a64 */
    *(int16_t*)(reg_v0 + 0) = var_zero; /* 0x80034a68 */
    /* Branch beqz at 0x80034a70 */
    var_v0 = 0x8001 << 16; /* 0x80034a74 */
    var_v0 = var_v0 + 5288; /* 0x80034a78 */
    var_v1 = var_s7 << 0x2; /* 0x80034a7c */
    var_v1 = var_v1 + var_v0; /* 0x80034a80 */
    var_v0 = *(int32_t*)(reg_v1 + 0); /* 0x80034a84 */
    var_v0 = *(int32_t*)(reg_s2 + 0); /* 0x80034a94 */
    var_v1 = *(int32_t*)(reg_s1 + 0); /* 0x80034a98 */
    var_a0 = *(int32_t*)(reg_s1 + 4); /* 0x80034a9c */
    var_v0 = var_v0 & var_v1; /* 0x80034aa0 */
    var_v0 = var_v0 | var_a0; /* 0x80034aa4 */
    *(int32_t*)(reg_s2 + 0) = var_v0; /* 0x80034aac */
    var_v0 = var_s4 & 0x1; /* 0x80034ab0 */
    /* Branch beqz at 0x80034ab4 */
    var_v0 = var_s4 & 0x2; /* 0x80034ab8 */
    /* Branch beqz at 0x80034abc */
    var_a1 = 0xb60b << 16; /* 0x80034ac0 */
    var_a0 = *(int32_t*)(reg_s1 + 0); /* 0x80034ac4 */
    var_a1 = var_a1 | 0x60b7; /* 0x80034ac8 */
    var_v0 = *(uint16_t*)(reg_s0 + 16); /* 0x80034ad0 */
    var_v1 = var_t0 + var_a0; /* 0x80034ad8 */
    var_v1 = var_v1 >> 0x8; /* 0x80034adc */
    var_a0 = var_a0 >> 0x1f; /* 0x80034ae0 */
    var_v0 = var_v0 + var_v1; /* 0x80034ae8 */
    *(int16_t*)(reg_s0 + 16) = var_v0; /* 0x80034aec */
    var_a0 = *(int32_t*)(reg_s1 + 4); /* 0x80034af0 */
    var_v0 = *(uint16_t*)(reg_s0 + 18); /* 0x80034afc */
    var_v1 = var_t0 + var_a0; /* 0x80034b04 */
    var_v1 = var_v1 >> 0x8; /* 0x80034b08 */
    var_a0 = var_a0 >> 0x1f; /* 0x80034b0c */
    var_v0 = var_v0 + var_v1; /* 0x80034b14 */
    *(int16_t*)(reg_s0 + 18) = var_v0; /* 0x80034b18 */
    var_a0 = *(int32_t*)(reg_s1 + 8); /* 0x80034b1c */
    var_s1 = var_s1 + 12; /* 0x80034b28 */
    var_v0 = *(uint16_t*)(reg_s0 + 20); /* 0x80034b2c */
    var_v1 = var_t0 + var_a0; /* 0x80034b34 */
    var_v1 = var_v1 >> 0x8; /* 0x80034b38 */
    var_a0 = var_a0 >> 0x1f; /* 0x80034b3c */
    var_v0 = var_v0 + var_v1; /* 0x80034b44 */
    *(int16_t*)(reg_s0 + 20) = var_v0; /* 0x80034b48 */
    var_v0 = var_s4 & 0x4; /* 0x80034b4c */
    /* Branch beqz at 0x80034b50 */
    var_v0 = var_s4 & 0x8; /* 0x80034b54 */
    var_v1 = *(int16_t*)(reg_s1 + 0); /* 0x80034b58 */
    var_v0 = *(int32_t*)(reg_s0 + 0); /* 0x80034b5c */
    var_v0 = var_v0 + 4095; /* 0x80034b74 */
    var_v0 = var_v0 >> 0xc; /* 0x80034b78 */
    *(int32_t*)(reg_s0 + 0) = var_v0; /* 0x80034b7c */
    var_v1 = *(int16_t*)(reg_s1 + 2); /* 0x80034b80 */
    var_v0 = *(int32_t*)(reg_s0 + 4); /* 0x80034b84 */
    var_v0 = var_v0 + 4095; /* 0x80034b9c */
    var_v0 = var_v0 >> 0xc; /* 0x80034ba0 */
    *(int32_t*)(reg_s0 + 4) = var_v0; /* 0x80034ba4 */
    var_v1 = *(int16_t*)(reg_s1 + 4); /* 0x80034ba8 */
    var_v0 = *(int32_t*)(reg_s0 + 8); /* 0x80034bac */
    var_v0 = var_v0 + 4095; /* 0x80034bc4 */
    var_v0 = var_v0 >> 0xc; /* 0x80034bc8 */
    *(int32_t*)(reg_s0 + 8) = var_v0; /* 0x80034bcc */
    var_s1 = var_s1 + 8; /* 0x80034bd0 */
    var_v0 = var_s4 & 0x8; /* 0x80034bd4 */
    /* Branch beqz at 0x80034bd8 */
    var_a0 = var_s0 + 16; /* 0x80034bdc */
    var_v0 = *(int32_t*)(reg_s0 + 24); /* 0x80034be0 */
    var_v1 = *(int32_t*)(reg_s1 + 0); /* 0x80034be4 */
    var_v0 = var_v0 + var_v1; /* 0x80034bec */
    *(int32_t*)(reg_s0 + 24) = var_v0; /* 0x80034bf0 */
    var_v0 = *(int32_t*)(reg_s0 + 28); /* 0x80034bf4 */
    var_v1 = *(int32_t*)(reg_s1 + 4); /* 0x80034bf8 */
    var_v0 = var_v0 + var_v1; /* 0x80034c00 */
    *(int32_t*)(reg_s0 + 28) = var_v0; /* 0x80034c04 */
    var_v0 = *(int32_t*)(reg_s0 + 32); /* 0x80034c08 */
    var_v1 = *(int32_t*)(reg_s1 + 8); /* 0x80034c0c */
    var_v0 = var_v0 + var_v1; /* 0x80034c14 */
    *(int32_t*)(reg_s0 + 32) = var_v0; /* 0x80034c18 */
    func_0x80074ec4(); /* 0x80034c1c */
    var_a0 = var_s5; /* 0x80034c24 */
    func_0x80074d84(); /* 0x80034c28 */
    var_a0 = var_s5; /* 0x80034c30 */
    func_0x80074d54(); /* 0x80034c34 */
    var_v1 = *(int32_t*)(reg_s2 + 4); /* 0x80034c3c */
    var_v0 = 1; /* 0x80034c40 */
    *(int16_t*)(reg_v1 + 2) = var_v0; /* 0x80034c48 */
    var_s2 = var_s4 & 0x2; /* 0x80034c4c */
    /* Branch beqz at 0x80034c50 */
    var_a0 = 0xb60b << 16; /* 0x80034c54 */
    var_v1 = *(int32_t*)(reg_s1 + 0); /* 0x80034c58 */
    var_a0 = var_a0 | 0x60b7; /* 0x80034c5c */
    var_v0 = var_t0 + var_v1; /* 0x80034c68 */
    var_v0 = var_v0 >> 0x8; /* 0x80034c6c */
    var_v1 = var_v1 >> 0x1f; /* 0x80034c70 */
    *(int16_t*)(reg_s0 + 16) = var_v0; /* 0x80034c78 */
    var_v1 = *(int32_t*)(reg_s1 + 4); /* 0x80034c7c */
    var_v0 = var_t0 + var_v1; /* 0x80034c8c */
    var_v0 = var_v0 >> 0x8; /* 0x80034c90 */
    var_v1 = var_v1 >> 0x1f; /* 0x80034c94 */
    *(int16_t*)(reg_s0 + 18) = var_v0; /* 0x80034c9c */
    var_v1 = *(int32_t*)(reg_s1 + 8); /* 0x80034ca0 */
    var_a1 = var_s5; /* 0x80034cac */
    var_s1 = var_s1 + 12; /* 0x80034cb0 */
    var_a0 = var_s0 + 16; /* 0x80034cb4 */
    var_v0 = var_t0 + var_v1; /* 0x80034cbc */
    var_v0 = var_v0 >> 0x8; /* 0x80034cc0 */
    var_v1 = var_v1 >> 0x1f; /* 0x80034cc4 */
    func_0x80074ec4(); /* 0x80034ccc */
    var_v0 = var_s4 & 0x4; /* 0x80034cd4 */
    /* Branch beqz at 0x80034cd8 */
    var_v0 = var_s4 & 0x8; /* 0x80034cdc */
    var_v0 = *(int16_t*)(reg_s1 + 0); /* 0x80034ce0 */
    *(int32_t*)(reg_s0 + 0) = var_v0; /* 0x80034ce8 */
    var_v0 = *(int16_t*)(reg_s1 + 2); /* 0x80034cec */
    *(int32_t*)(reg_s0 + 4) = var_v0; /* 0x80034cf4 */
    var_v0 = *(int16_t*)(reg_s1 + 4); /* 0x80034cf8 */
    var_s1 = var_s1 + 8; /* 0x80034cfc */
    /* Branch bnez at 0x80034d00 */
    *(int32_t*)(reg_s0 + 8) = var_v0; /* 0x80034d04 */
    var_a0 = var_s0 + 16; /* 0x80034d08 */
    func_0x80074ec4(); /* 0x80034d0c */
    var_a0 = var_s5; /* 0x80034d14 */
    func_0x80074d84(); /* 0x80034d18 */
    var_v0 = var_s4 & 0x8; /* 0x80034d20 */
    /* Branch beqz at 0x80034d24 */
    var_a0 = var_s5; /* 0x80034d28 */
    var_v0 = *(int32_t*)(reg_s1 + 0); /* 0x80034d2c */
    *(int32_t*)(reg_s0 + 24) = var_v0; /* 0x80034d34 */
    var_v0 = *(int32_t*)(reg_s1 + 4); /* 0x80034d38 */
    *(int32_t*)(reg_s0 + 28) = var_v0; /* 0x80034d40 */
    var_v0 = *(int32_t*)(reg_s1 + 8); /* 0x80034d44 */
    var_a1 = var_s0 + 24; /* 0x80034d48 */
    func_0x80074d54(); /* 0x80034d4c */
    /* Branch beqz at 0x80034d5c */
    var_a2 = *(uint16_t*)(reg_s1 + 0); /* 0x80034d64 */
    var_a1 = *(int32_t*)(stack + 184); /* 0x80034d68 */
    func_0x8003498c(); /* 0x80034d6c */
    *(int16_t*)(reg_s2 + 8) = var_v0; /* 0x80034d74 */
    var_v0 = *(uint16_t*)(reg_s2 + 8); /* 0x80034d78 */
    var_t0 = *(int32_t*)(stack + 188); /* 0x80034d7c */
    var_v0 = var_v0 << 0x2; /* 0x80034d80 */
    var_v0 = var_v0 + var_t0; /* 0x80034d84 */
    var_v0 = *(uint8_t*)(reg_v0 + 0); /* 0x80034d88 */
    *(int8_t*)(reg_s2 + 10) = var_v0; /* 0x80034d90 */
    var_a1 = *(int32_t*)(reg_s1 + 0); /* 0x80034d94 */
    /* Branch beqz at 0x80034d9c */
    var_v0 = 0xffff; /* 0x80034da0 */
    /* Branch bne at 0x80034da4 */
    var_v0 = *(int32_t*)(reg_s2 + 4); /* 0x80034dac */
    *(int32_t*)(reg_v0 + 72) = var_zero; /* 0x80034db4 */
    func_0x800347ac(); /* 0x80034db8 */
    var_v1 = *(int32_t*)(reg_s2 + 4); /* 0x80034dc0 */
    var_v0 = *(int32_t*)(reg_v0 + 4); /* 0x80034dc4 */
    *(int32_t*)(reg_v1 + 72) = var_v0; /* 0x80034dcc */
    /* Branch beqz at 0x80034dd0 */
    /* Branch beqz at 0x80034dd8 */
    var_v0 = 1; /* 0x80034ddc */
    /* Branch beq at 0x80034de0 */
    var_a0 = var_s6; /* 0x80034de4 */
    var_a0 = var_s6; /* 0x80034df0 */
    func_0x800347ac(); /* 0x80034df4 */
    /* Branch bnez at 0x80034dfc */
    var_a0 = var_s6; /* 0x80034e00 */
    func_0x800347f8(); /* 0x80034e04 */
    func_0x80034928(); /* 0x80034e14 */
    var_t0 = *(int32_t*)(stack + 128); /* 0x80034e1c */
    var_v0 = var_t0 << 0x2; /* 0x80034e24 */
    var_t0 = *(int32_t*)(stack + 176); /* 0x80034e28 */
    var_v0 = var_t0 + var_v0; /* 0x80034e30 */
    var_ra = *(int32_t*)(stack + 172); /* 0x80034e34 */
    var_s8 = *(int32_t*)(stack + 168); /* 0x80034e38 */
    var_s7 = *(int32_t*)(stack + 164); /* 0x80034e3c */
    var_s6 = *(int32_t*)(stack + 160); /* 0x80034e40 */
    var_s5 = *(int32_t*)(stack + 156); /* 0x80034e44 */
    var_s4 = *(int32_t*)(stack + 152); /* 0x80034e48 */
    var_s3 = *(int32_t*)(stack + 148); /* 0x80034e4c */
    var_s2 = *(int32_t*)(stack + 144); /* 0x80034e50 */
    var_s1 = *(int32_t*)(stack + 140); /* 0x80034e54 */
    var_s0 = *(int32_t*)(stack + 136); /* 0x80034e58 */
    var_sp = var_sp + 176; /* 0x80034e5c */
    return; /* 0x80034e60 */
}

/* Function at 0x80034e64 */
void func_0x80034e64() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_sp;
    int32_t var_v0;

    var_sp = var_sp + -56; /* 0x80034e68 */
    *(int32_t*)(stack + 40) = var_s4; /* 0x80034e6c */
    var_s4 = var_a2; /* 0x80034e70 */
    *(int32_t*)(stack + 44) = var_s5; /* 0x80034e74 */
    *(int32_t*)(stack + 48) = var_ra; /* 0x80034e78 */
    *(int32_t*)(stack + 36) = var_s3; /* 0x80034e7c */
    *(int32_t*)(stack + 32) = var_s2; /* 0x80034e80 */
    *(int32_t*)(stack + 28) = var_s1; /* 0x80034e84 */
    *(int32_t*)(stack + 24) = var_s0; /* 0x80034e88 */
    var_v0 = *(int32_t*)(reg_a1 + 4); /* 0x80034e8c */
    var_s3 = *(int32_t*)(stack + 72); /* 0x80034e90 */
    var_s2 = *(int32_t*)(stack + 76); /* 0x80034e94 */
    var_s1 = *(uint16_t*)(reg_a1 + 2); /* 0x80034e98 */
    /* Branch bnez at 0x80034ea0 */
    var_s5 = var_a3; /* 0x80034ea4 */
    var_a1 = var_a1 + 8; /* 0x80034ea8 */
    /* Branch beqz at 0x80034eac */
    var_s0 = var_zero; /* 0x80034eb0 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x80034eb4 */
    var_a0 = var_a1; /* 0x80034eb8 */
    var_a1 = var_s4; /* 0x80034ebc */
    var_a2 = var_s5; /* 0x80034ec0 */
    func_0x800349d0(); /* 0x80034ec4 */
    var_a1 = var_v0; /* 0x80034ecc */
    var_s0 = var_s0 + 1; /* 0x80034ed0 */
    /* Branch bnez at 0x80034ed8 */
    var_v0 = var_a1; /* 0x80034ee0 */
    var_ra = *(int32_t*)(stack + 48); /* 0x80034ee4 */
    var_s5 = *(int32_t*)(stack + 44); /* 0x80034ee8 */
    var_s4 = *(int32_t*)(stack + 40); /* 0x80034eec */
    var_s3 = *(int32_t*)(stack + 36); /* 0x80034ef0 */
    var_s2 = *(int32_t*)(stack + 32); /* 0x80034ef4 */
    var_s1 = *(int32_t*)(stack + 28); /* 0x80034ef8 */
    var_s0 = *(int32_t*)(stack + 24); /* 0x80034efc */
    var_sp = var_sp + 56; /* 0x80034f00 */
    return; /* 0x80034f04 */
}

/* Function at 0x80034f08 */
void func_0x80034f08() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_at;
    int32_t var_v0;

    var_v0 = 0x8016 << 16; /* 0x80034f0c */
    var_v0 = var_v0 + -12144; /* 0x80034f10 */
    var_a0 = var_a0 & 0xffff; /* 0x80034f14 */
    var_a0 = var_a0 << 0x2; /* 0x80034f18 */
    var_a0 = var_a0 + var_v0; /* 0x80034f1c */
    var_v0 = 0x834c; /* 0x80034f20 */
    var_a0 = var_a0 + var_v0; /* 0x80034f24 */
    *(int32_t*)(reg_a0 + 0) = var_a1; /* 0x80034f28 */
    var_v0 = *(int32_t*)(reg_a1 + 8); /* 0x80034f2c */
    var_a1 = var_a1 + var_v0; /* 0x80034f34 */
    var_at = 0x1f80 << 16; /* 0x80034f38 */
    *(int32_t*)(reg_at + 12) = var_a1; /* 0x80034f3c */
    return; /* 0x80034f40 */
}

/* Function at 0x80034f44 */
void func_0x80034f44() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x8016 << 16; /* 0x80034f48 */
    var_a0 = var_v0 + 30732; /* 0x80034f4c */
    var_a1 = 16; /* 0x80034f50 */
    var_t0 = 8; /* 0x80034f54 */
    var_a3 = 255; /* 0x80034f58 */
    var_a2 = 0xffff; /* 0x80034f5c */
    var_v1 = var_a0 + 56; /* 0x80034f60 */
    *(int16_t*)(reg_a0 + 0) = var_t0; /* 0x80034f64 */
    *(int16_t*)(reg_v1 + -54) = var_a2; /* 0x80034f68 */
    *(int16_t*)(reg_v1 + -52) = var_a3; /* 0x80034f6c */
    *(int32_t*)(reg_v1 + -48) = var_zero; /* 0x80034f70 */
    *(int32_t*)(reg_v1 + -44) = var_zero; /* 0x80034f74 */
    *(int32_t*)(reg_v1 + -40) = var_zero; /* 0x80034f78 */
    *(int32_t*)(reg_v1 + -36) = var_zero; /* 0x80034f7c */
    *(int32_t*)(reg_v1 + -32) = var_zero; /* 0x80034f80 */
    *(int32_t*)(reg_v1 + -28) = var_zero; /* 0x80034f84 */
    *(int32_t*)(reg_v1 + -24) = var_a2; /* 0x80034f88 */
    *(int32_t*)(reg_v1 + -20) = var_zero; /* 0x80034f8c */
    *(int32_t*)(reg_v1 + -16) = var_zero; /* 0x80034f90 */
    *(int32_t*)(reg_v1 + -12) = var_zero; /* 0x80034f94 */
    *(int32_t*)(reg_v1 + -8) = var_zero; /* 0x80034f98 */
    *(int32_t*)(reg_v1 + -4) = var_zero; /* 0x80034f9c */
    *(int32_t*)(reg_v1 + 0) = var_zero; /* 0x80034fa0 */
    var_v1 = var_v1 + 60; /* 0x80034fa4 */
    var_v0 = var_a1 + -1; /* 0x80034fa8 */
    var_a1 = var_v0; /* 0x80034fac */
    var_v0 = var_v0 & 0xffff; /* 0x80034fb0 */
    /* Branch bnez at 0x80034fb4 */
    var_a0 = var_a0 + 60; /* 0x80034fb8 */
    return; /* 0x80034fbc */
}

/* Function at 0x80034fc0 */
void func_0x80034fc0() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x8016 << 16; /* 0x80034fc4 */
    var_v1 = var_v0 + 30732; /* 0x80034fc8 */
    var_a0 = 16; /* 0x80034fcc */
    var_a2 = -9; /* 0x80034fd0 */
    var_a1 = 9; /* 0x80034fd4 */
    var_v0 = *(uint16_t*)(reg_v1 + 0); /* 0x80034fd8 */
    var_v0 = var_v0 & var_a2; /* 0x80034fe0 */
    /* Branch beqz at 0x80034fe4 */
    var_v0 = var_a0 + -1; /* 0x80034fe8 */
    *(int16_t*)(reg_v1 + 0) = var_a1; /* 0x80034fec */
    var_a0 = var_v0; /* 0x80034ff0 */
    var_v0 = var_v0 & 0xffff; /* 0x80034ff4 */
    /* Branch bnez at 0x80034ff8 */
    var_v1 = var_v1 + 60; /* 0x80034ffc */
    return; /* 0x80035000 */
}

/* Function at 0x80035004 */
void func_0x80035004() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -24; /* 0x80035008 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003500c */
    var_s0 = var_a0; /* 0x80035010 */
    /* Branch beqz at 0x80035014 */
    *(int32_t*)(stack + 20) = var_ra; /* 0x80035018 */
    var_v0 = *(uint16_t*)(reg_s0 + 0); /* 0x8003501c */
    var_v0 = var_v0 & 0x8; /* 0x80035024 */
    /* Branch beqz at 0x80035028 */
    var_v0 = 8; /* 0x8003502c */
    var_v1 = *(int32_t*)(reg_s0 + 56); /* 0x80035030 */
    *(int16_t*)(reg_s0 + 0) = var_v0; /* 0x80035034 */
    *(int32_t*)(reg_v1 + 0) = var_zero; /* 0x80035038 */
    var_a0 = *(int32_t*)(reg_s0 + 40); /* 0x8003503c */
    var_v0 = 0xffff; /* 0x80035040 */
    *(int16_t*)(reg_s0 + 2) = var_v0; /* 0x80035044 */
    var_v0 = 255; /* 0x80035048 */
    *(int16_t*)(reg_s0 + 4) = var_v0; /* 0x8003504c */
    var_v0 = 0xffff; /* 0x80035050 */
    *(int32_t*)(reg_s0 + 8) = var_zero; /* 0x80035054 */
    *(int32_t*)(reg_s0 + 12) = var_zero; /* 0x80035058 */
    *(int32_t*)(reg_s0 + 16) = var_zero; /* 0x8003505c */
    *(int32_t*)(reg_s0 + 20) = var_zero; /* 0x80035060 */
    *(int32_t*)(reg_s0 + 24) = var_zero; /* 0x80035064 */
    *(int32_t*)(reg_s0 + 28) = var_zero; /* 0x80035068 */
    *(int32_t*)(reg_s0 + 32) = var_v0; /* 0x8003506c */
    /* Branch beqz at 0x80035070 */
    *(int32_t*)(reg_s0 + 36) = var_zero; /* 0x80035074 */
    func_0x800152f8(); /* 0x80035078 */
    *(int32_t*)(reg_s0 + 40) = var_zero; /* 0x80035080 */
    *(int32_t*)(reg_s0 + 56) = var_zero; /* 0x80035084 */
    var_ra = *(int32_t*)(stack + 20); /* 0x80035088 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003508c */
    var_sp = var_sp + 24; /* 0x80035090 */
    return; /* 0x80035094 */
}

/* Function at 0x80035098 */
void func_0x80035098() {
    /* Local variables */
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_sp;
    int32_t var_v0;

    var_sp = var_sp + -40; /* 0x8003509c */
    var_v0 = 0x8016 << 16; /* 0x800350a0 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x800350a4 */
    var_s0 = var_v0 + 30732; /* 0x800350a8 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x800350ac */
    var_s1 = 16; /* 0x800350b0 */
    *(int32_t*)(stack + 28) = var_s3; /* 0x800350b4 */
    var_s3 = -9; /* 0x800350b8 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x800350bc */
    var_s2 = 1; /* 0x800350c0 */
    *(int32_t*)(stack + 32) = var_ra; /* 0x800350c4 */
    var_v0 = *(uint16_t*)(reg_s0 + 0); /* 0x800350c8 */
    var_v0 = var_v0 & var_s3; /* 0x800350d0 */
    var_v0 = var_v0 << 0x10; /* 0x800350d4 */
    var_v0 = var_v0 >> 0x10; /* 0x800350d8 */
    /* Branch bne at 0x800350dc */
    var_v0 = var_s1 + -1; /* 0x800350e0 */
    func_0x80035008(); /* 0x800350e4 */
    var_v0 = var_s1 + -1; /* 0x800350ec */
    var_s1 = var_v0; /* 0x800350f0 */
    var_v0 = var_v0 & 0xffff; /* 0x800350f4 */
    /* Branch bnez at 0x800350f8 */
    var_s0 = var_s0 + 60; /* 0x800350fc */
    var_ra = *(int32_t*)(stack + 32); /* 0x80035100 */
    var_s3 = *(int32_t*)(stack + 28); /* 0x80035104 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x80035108 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x8003510c */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80035110 */
    var_sp = var_sp + 40; /* 0x80035114 */
    return; /* 0x80035118 */
}

/* Function at 0x8003511c */
void func_0x8003511c() {
    /* Local variables */
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_sp;
    int32_t var_v0;

    var_sp = var_sp + -32; /* 0x80035120 */
    var_v0 = 0x8016 << 16; /* 0x80035124 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80035128 */
    var_s0 = var_v0 + 30732; /* 0x8003512c */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80035130 */
    var_s1 = 16; /* 0x80035134 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x80035138 */
    var_s2 = -9; /* 0x8003513c */
    *(int32_t*)(stack + 28) = var_ra; /* 0x80035140 */
    var_v0 = *(uint16_t*)(reg_s0 + 0); /* 0x80035144 */
    var_v0 = var_v0 & var_s2; /* 0x8003514c */
    /* Branch beqz at 0x80035150 */
    var_v0 = var_s1 + -1; /* 0x80035154 */
    func_0x80035008(); /* 0x80035158 */
    var_v0 = var_s1 + -1; /* 0x80035160 */
    var_s1 = var_v0; /* 0x80035164 */
    var_v0 = var_v0 << 0x10; /* 0x80035168 */
    /* Branch bnez at 0x8003516c */
    var_s0 = var_s0 + 60; /* 0x80035170 */
    var_ra = *(int32_t*)(stack + 28); /* 0x80035174 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x80035178 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x8003517c */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80035180 */
    var_sp = var_sp + 32; /* 0x80035184 */
    return; /* 0x80035188 */
}

/* Function at 0x8003518c */
void func_0x8003518c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -24; /* 0x80035190 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80035194 */
    var_s0 = var_a0; /* 0x80035198 */
    var_v0 = 0x8016 << 16; /* 0x8003519c */
    var_v0 = var_v0 + 30732; /* 0x800351a0 */
    var_a0 = 16; /* 0x800351a4 */
    var_a1 = -9; /* 0x800351a8 */
    var_a2 = 255; /* 0x800351ac */
    *(int32_t*)(stack + 20) = var_ra; /* 0x800351b0 */
    *(int32_t*)(reg_s0 + 0) = var_v0; /* 0x800351b4 */
    var_v1 = *(int32_t*)(reg_s0 + 0); /* 0x800351b8 */
    var_v0 = *(uint16_t*)(reg_v1 + 0); /* 0x800351c0 */
    var_v0 = var_v0 & var_a1; /* 0x800351c8 */
    /* Branch beqz at 0x800351cc */
    var_v0 = var_v1 + 60; /* 0x800351d0 */
    *(int32_t*)(reg_s0 + 0) = var_v0; /* 0x800351d4 */
    var_v0 = var_a0 + -1; /* 0x800351d8 */
    var_a0 = var_v0; /* 0x800351dc */
    var_v0 = var_v0 & 0xffff; /* 0x800351e0 */
    /* Branch bnez at 0x800351e4 */
    func_0x8003509c(); /* 0x800351ec */
    var_v0 = 0x8016 << 16; /* 0x800351f4 */
    var_v0 = var_v0 + 30732; /* 0x800351f8 */
    *(int32_t*)(reg_s0 + 0) = var_v0; /* 0x800351fc */
    var_a0 = 16; /* 0x80035200 */
    var_a1 = -9; /* 0x80035204 */
    var_a2 = 255; /* 0x80035208 */
    var_v1 = *(int32_t*)(reg_s0 + 0); /* 0x8003520c */
    var_v0 = *(uint16_t*)(reg_v1 + 0); /* 0x80035214 */
    var_v0 = var_v0 & var_a1; /* 0x8003521c */
    /* Branch bnez at 0x80035220 */
    var_v0 = var_v1 + 60; /* 0x80035224 */
    *(int16_t*)(reg_v1 + 4) = var_a2; /* 0x8003522c */
    *(int32_t*)(reg_s0 + 0) = var_v0; /* 0x80035230 */
    var_v0 = var_a0 + -1; /* 0x80035234 */
    var_a0 = var_v0; /* 0x80035238 */
    var_v0 = var_v0 & 0xffff; /* 0x8003523c */
    /* Branch bnez at 0x80035240 */
    *(int32_t*)(reg_s0 + 0) = var_zero; /* 0x80035248 */
    var_ra = *(int32_t*)(stack + 20); /* 0x8003524c */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80035250 */
    var_sp = var_sp + 24; /* 0x80035254 */
    return; /* 0x80035258 */
}

/* Function at 0x8003525c */
void func_0x8003525c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_sp;
    int32_t var_t4;
    int32_t var_t5;
    int32_t var_t6;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -32; /* 0x80035260 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80035264 */
    var_s0 = var_a0; /* 0x80035268 */
    *(int32_t*)(stack + 24) = var_ra; /* 0x8003526c */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80035270 */
    var_a0 = *(int32_t*)(reg_s0 + 72); /* 0x80035274 */
    /* Branch bnez at 0x8003527c */
    var_s1 = 0x1f80 << 16; /* 0x80035280 */
    var_a1 = 0x1f80 << 16; /* 0x80035284 */
    var_a1 = var_a1 | 0xa8; /* 0x80035288 */
    var_t4 = *(int32_t*)(reg_a1 + 0); /* 0x8003528c */
    var_t5 = *(int32_t*)(reg_a1 + 4); /* 0x80035290 */
    var_t4 = *(int32_t*)(reg_a1 + 8); /* 0x8003529c */
    var_t5 = *(int32_t*)(reg_a1 + 12); /* 0x800352a0 */
    var_t6 = *(int32_t*)(reg_a1 + 16); /* 0x800352a4 */
    var_t4 = *(int32_t*)(reg_a1 + 20); /* 0x800352b4 */
    var_t5 = *(int32_t*)(reg_a1 + 24); /* 0x800352b8 */
    var_t6 = *(int32_t*)(reg_a1 + 28); /* 0x800352c0 */
    var_v0 = *(uint16_t*)(reg_s0 + 24); /* 0x800352cc */
    *(int16_t*)(reg_s1 + 156) = var_v0; /* 0x800352d4 */
    var_v0 = *(uint16_t*)(reg_s0 + 28); /* 0x800352d8 */
    *(int16_t*)(reg_s1 + 158) = var_v0; /* 0x800352e0 */
    var_v0 = *(uint16_t*)(reg_s0 + 32); /* 0x800352e4 */
    var_a1 = 0x1f80 << 16; /* 0x800352e8 */
    var_a1 = var_a1 | 0x9c; /* 0x800352ec */
    *(int16_t*)(reg_s1 + 160) = var_v0; /* 0x800352f0 */
    var_v0 = var_s0 + 56; /* 0x80035308 */
    var_v1 = var_s0 + 36; /* 0x80035318 */
    var_t4 = *(int32_t*)(reg_v1 + 20); /* 0x8003531c */
    var_t5 = *(int32_t*)(reg_v1 + 24); /* 0x80035320 */
    var_t6 = *(int32_t*)(reg_v1 + 28); /* 0x80035328 */
    var_v0 = var_s0 + 4; /* 0x80035334 */
    var_t4 = *(uint16_t*)(reg_v0 + 0); /* 0x80035338 */
    var_t5 = *(uint16_t*)(reg_v0 + 6); /* 0x8003533c */
    var_t6 = *(uint16_t*)(reg_v0 + 12); /* 0x80035340 */
    *(int16_t*)(reg_v1 + 0) = var_t4; /* 0x80035368 */
    *(int16_t*)(reg_v1 + 6) = var_t5; /* 0x8003536c */
    *(int16_t*)(reg_v1 + 12) = var_t6; /* 0x80035370 */
    var_v0 = var_s0 + 6; /* 0x80035374 */
    var_t4 = *(uint16_t*)(reg_v0 + 0); /* 0x80035378 */
    var_t5 = *(uint16_t*)(reg_v0 + 6); /* 0x8003537c */
    var_t6 = *(uint16_t*)(reg_v0 + 12); /* 0x80035380 */
    var_v0 = var_s0 + 38; /* 0x8003539c */
    *(int16_t*)(reg_v0 + 0) = var_t4; /* 0x800353ac */
    *(int16_t*)(reg_v0 + 6) = var_t5; /* 0x800353b0 */
    *(int16_t*)(reg_v0 + 12) = var_t6; /* 0x800353b4 */
    var_v0 = var_s0 + 8; /* 0x800353b8 */
    var_t4 = *(uint16_t*)(reg_v0 + 0); /* 0x800353bc */
    var_t5 = *(uint16_t*)(reg_v0 + 6); /* 0x800353c0 */
    var_t6 = *(uint16_t*)(reg_v0 + 12); /* 0x800353c4 */
    var_v0 = var_s0 + 40; /* 0x800353e0 */
    *(int16_t*)(reg_v0 + 0) = var_t4; /* 0x800353f0 */
    *(int16_t*)(reg_v0 + 6) = var_t5; /* 0x800353f4 */
    *(int16_t*)(reg_v0 + 12) = var_t6; /* 0x800353f8 */
    var_t4 = *(int32_t*)(reg_v1 + 0); /* 0x800353fc */
    var_t5 = *(int32_t*)(reg_v1 + 4); /* 0x80035400 */
    var_t4 = *(int32_t*)(reg_v1 + 8); /* 0x8003540c */
    var_t5 = *(int32_t*)(reg_v1 + 12); /* 0x80035410 */
    var_t6 = *(int32_t*)(reg_v1 + 16); /* 0x80035414 */
    var_v0 = 1; /* 0x80035428 */
    var_v0 = *(uint16_t*)(reg_s0 + 0); /* 0x8003542c */
    /* Branch beqz at 0x80035434 */
    var_v0 = var_s0 + 36; /* 0x80035438 */
    var_t4 = *(int32_t*)(reg_v0 + 20); /* 0x8003543c */
    var_t5 = *(int32_t*)(reg_v0 + 24); /* 0x80035440 */
    var_t6 = *(int32_t*)(reg_v0 + 28); /* 0x80035448 */
    var_t4 = *(int32_t*)(reg_v0 + 0); /* 0x80035454 */
    var_t5 = *(int32_t*)(reg_v0 + 4); /* 0x80035458 */
    var_t4 = *(int32_t*)(reg_v0 + 8); /* 0x80035464 */
    var_t5 = *(int32_t*)(reg_v0 + 12); /* 0x80035468 */
    var_t6 = *(int32_t*)(reg_v0 + 16); /* 0x8003546c */
    func_0x80035260(); /* 0x80035484 */
    var_v0 = *(uint16_t*)(reg_s0 + 24); /* 0x8003548c */
    *(int16_t*)(reg_s1 + 156) = var_v0; /* 0x80035494 */
    var_v0 = *(uint16_t*)(reg_s0 + 28); /* 0x80035498 */
    *(int16_t*)(reg_s1 + 158) = var_v0; /* 0x800354a0 */
    var_v0 = *(uint16_t*)(reg_s0 + 32); /* 0x800354a4 */
    var_a1 = 0x1f80 << 16; /* 0x800354a8 */
    var_a1 = var_a1 | 0x9c; /* 0x800354ac */
    *(int16_t*)(reg_s1 + 160) = var_v0; /* 0x800354b0 */
    var_v0 = var_s0 + 56; /* 0x800354c8 */
    var_v1 = var_s0 + 36; /* 0x800354d8 */
    var_t4 = *(int32_t*)(reg_v1 + 20); /* 0x800354dc */
    var_t5 = *(int32_t*)(reg_v1 + 24); /* 0x800354e0 */
    var_t6 = *(int32_t*)(reg_v1 + 28); /* 0x800354e8 */
    var_v0 = var_s0 + 4; /* 0x800354f4 */
    var_t4 = *(uint16_t*)(reg_v0 + 0); /* 0x800354f8 */
    var_t5 = *(uint16_t*)(reg_v0 + 6); /* 0x800354fc */
    var_t6 = *(uint16_t*)(reg_v0 + 12); /* 0x80035500 */
    *(int16_t*)(reg_v1 + 0) = var_t4; /* 0x80035528 */
    *(int16_t*)(reg_v1 + 6) = var_t5; /* 0x8003552c */
    *(int16_t*)(reg_v1 + 12) = var_t6; /* 0x80035530 */
    var_v0 = var_s0 + 6; /* 0x80035534 */
    var_t4 = *(uint16_t*)(reg_v0 + 0); /* 0x80035538 */
    var_t5 = *(uint16_t*)(reg_v0 + 6); /* 0x8003553c */
    var_t6 = *(uint16_t*)(reg_v0 + 12); /* 0x80035540 */
    var_v0 = var_s0 + 38; /* 0x8003555c */
    *(int16_t*)(reg_v0 + 0) = var_t4; /* 0x8003556c */
    *(int16_t*)(reg_v0 + 6) = var_t5; /* 0x80035570 */
    *(int16_t*)(reg_v0 + 12) = var_t6; /* 0x80035574 */
    var_v0 = var_s0 + 8; /* 0x80035578 */
    var_t4 = *(uint16_t*)(reg_v0 + 0); /* 0x8003557c */
    var_t5 = *(uint16_t*)(reg_v0 + 6); /* 0x80035580 */
    var_t6 = *(uint16_t*)(reg_v0 + 12); /* 0x80035584 */
    var_v0 = var_s0 + 40; /* 0x800355a0 */
    *(int16_t*)(reg_v0 + 0) = var_t4; /* 0x800355b0 */
    *(int16_t*)(reg_v0 + 6) = var_t5; /* 0x800355b4 */
    *(int16_t*)(reg_v0 + 12) = var_t6; /* 0x800355b8 */
    var_t4 = *(int32_t*)(reg_v1 + 0); /* 0x800355bc */
    var_t5 = *(int32_t*)(reg_v1 + 4); /* 0x800355c0 */
    var_t4 = *(int32_t*)(reg_v1 + 8); /* 0x800355cc */
    var_t5 = *(int32_t*)(reg_v1 + 12); /* 0x800355d0 */
    var_t6 = *(int32_t*)(reg_v1 + 16); /* 0x800355d4 */
    var_v0 = 1; /* 0x800355e4 */
    *(int16_t*)(reg_s0 + 0) = var_v0; /* 0x800355e8 */
    var_ra = *(int32_t*)(stack + 24); /* 0x800355ec */
    var_s1 = *(int32_t*)(stack + 20); /* 0x800355f0 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x800355f4 */
    var_sp = var_sp + 32; /* 0x800355f8 */
    return; /* 0x800355fc */
}

/* Function at 0x80035600 */
void func_0x80035600() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -40; /* 0x80035604 */
    var_v1 = 0x1f80 << 16; /* 0x80035608 */
    var_v1 = *(int32_t*)(reg_v1 + 164); /* 0x8003560c */
    var_v0 = -1; /* 0x80035610 */
    *(int32_t*)(stack + 32) = var_ra; /* 0x80035614 */
    *(int32_t*)(stack + 28) = var_s3; /* 0x80035618 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x8003561c */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80035620 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80035624 */
    var_s1 = *(int32_t*)(reg_v1 + 4); /* 0x80035628 */
    var_v1 = *(int32_t*)(reg_v1 + 0); /* 0x8003562c */
    var_s1 = var_s1 + -1; /* 0x80035630 */
    /* Branch beq at 0x80035634 */
    var_s2 = var_v0; /* 0x80035638 */
    var_s3 = 0xffff; /* 0x8003563c */
    var_s0 = var_v1 + 4; /* 0x80035640 */
    var_v0 = *(int32_t*)(reg_s0 + 8); /* 0x80035644 */
    /* Branch beq at 0x8003564c */
    var_v0 = *(uint16_t*)(reg_s0 + 4); /* 0x80035654 */
    /* Branch beq at 0x8003565c */
    var_a0 = *(int32_t*)(reg_s0 + 0); /* 0x80035664 */
    func_0x80035260(); /* 0x80035668 */
    var_s1 = var_s1 + -1; /* 0x80035670 */
    /* Branch bne at 0x80035674 */
    var_s0 = var_s0 + 16; /* 0x80035678 */
    var_ra = *(int32_t*)(stack + 32); /* 0x8003567c */
    var_s3 = *(int32_t*)(stack + 28); /* 0x80035680 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x80035684 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x80035688 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003568c */
    var_sp = var_sp + 40; /* 0x80035690 */
    return; /* 0x80035694 */
}

/* Function at 0x80035698 */
void func_0x80035698() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_at;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -56; /* 0x8003569c */
    *(int32_t*)(stack + 40) = var_s2; /* 0x800356a0 */
    var_s2 = var_a0; /* 0x800356a4 */
    *(int32_t*)(stack + 36) = var_s1; /* 0x800356a8 */
    var_s1 = var_a1; /* 0x800356ac */
    *(int32_t*)(stack + 44) = var_s3; /* 0x800356b0 */
    var_s3 = var_a2; /* 0x800356b4 */
    *(int32_t*)(stack + 48) = var_s4; /* 0x800356b8 */
    var_v0 = 0x8016 << 16; /* 0x800356bc */
    var_v0 = var_v0 + -12144; /* 0x800356c0 */
    var_v1 = var_s1 << 0x2; /* 0x800356c4 */
    var_v1 = var_v1 + var_v0; /* 0x800356c8 */
    var_v0 = 0x834c; /* 0x800356cc */
    *(int32_t*)(stack + 52) = var_ra; /* 0x800356d0 */
    *(int32_t*)(stack + 32) = var_s0; /* 0x800356d4 */
    var_a0 = *(int32_t*)(reg_s2 + 0); /* 0x800356d8 */
    var_v1 = var_v1 + var_v0; /* 0x800356dc */
    *(int32_t*)(stack + 24) = var_a0; /* 0x800356e0 */
    var_s0 = *(int32_t*)(reg_v1 + 0); /* 0x800356e4 */
    /* Branch bnez at 0x800356e8 */
    var_s4 = var_a3; /* 0x800356ec */
    func_0x80035190(); /* 0x800356f0 */
    var_v0 = *(int32_t*)(stack + 24); /* 0x800356f8 */
    /* Branch bnez at 0x80035700 */
    var_v0 = var_zero; /* 0x8003570c */
    var_v0 = *(int32_t*)(stack + 24); /* 0x80035710 */
    var_a0 = *(int32_t*)(reg_v0 + 40); /* 0x80035718 */
    *(int16_t*)(reg_v0 + 2) = var_s1; /* 0x8003571c */
    /* Branch beqz at 0x80035720 */
    *(int32_t*)(reg_v0 + 56) = var_s2; /* 0x80035724 */
    func_0x800152f8(); /* 0x80035728 */
    var_v0 = *(int32_t*)(stack + 24); /* 0x80035730 */
    *(int32_t*)(reg_v0 + 40) = var_zero; /* 0x80035738 */
    var_v0 = *(uint16_t*)(reg_s0 + 6); /* 0x8003573c */
    var_a0 = 148; /* 0x80035740 */
    func_0x800152d0(); /* 0x8003574c */
    var_a1 = *(int32_t*)(stack + 24); /* 0x80035754 */
    *(int32_t*)(reg_a1 + 40) = var_v0; /* 0x8003575c */
    var_v1 = *(uint16_t*)(reg_s0 + 6); /* 0x80035760 */
    var_v1 = var_v1 << 0x4; /* 0x80035768 */
    var_v0 = var_v0 + var_v1; /* 0x8003576c */
    *(int32_t*)(reg_a1 + 44) = var_v0; /* 0x80035770 */
    var_a0 = *(uint16_t*)(reg_s0 + 6); /* 0x80035774 */
    var_v1 = var_a0 << 0x2; /* 0x8003577c */
    var_v1 = var_v1 + var_a0; /* 0x80035780 */
    var_v1 = var_v1 << 0x4; /* 0x80035784 */
    var_v0 = var_v0 + var_v1; /* 0x80035788 */
    *(int32_t*)(reg_a1 + 48) = var_v0; /* 0x8003578c */
    var_a0 = *(uint16_t*)(reg_s0 + 6); /* 0x80035790 */
    var_v1 = var_a0 << 0x2; /* 0x80035798 */
    var_v1 = var_v1 + var_a0; /* 0x8003579c */
    var_v1 = var_v1 << 0x3; /* 0x800357a0 */
    var_a0 = *(int32_t*)(reg_a1 + 40); /* 0x800357a4 */
    var_v0 = var_v0 + var_v1; /* 0x800357a8 */
    /* Branch bnez at 0x800357ac */
    *(int32_t*)(reg_a1 + 52) = var_v0; /* 0x800357b0 */
    func_0x800341a0(); /* 0x800357b4 */
    func_0x8003509c(); /* 0x800357bc */
    func_0x80034224(); /* 0x800357c4 */
    func_0x80035120(); /* 0x800357cc */
    var_v0 = var_zero; /* 0x800357d4 */
    var_a0 = *(int32_t*)(stack + 24); /* 0x800357d8 */
    var_v1 = 0xffff; /* 0x800357dc */
    *(int32_t*)(reg_a0 + 56) = var_zero; /* 0x800357e0 */
    *(int16_t*)(reg_a0 + 2) = var_v1; /* 0x800357e8 */
    *(int32_t*)(reg_s2 + 0) = var_a1; /* 0x800357ec */
    var_a0 = *(int32_t*)(stack + 24); /* 0x800357f0 */
    var_a1 = *(uint16_t*)(reg_s0 + 6); /* 0x800357f4 */
    func_0x800346dc(); /* 0x800357f8 */
    var_v0 = *(int32_t*)(reg_s0 + 12); /* 0x80035800 */
    var_v1 = *(int32_t*)(stack + 24); /* 0x80035804 */
    var_v0 = var_s0 + var_v0; /* 0x80035808 */
    *(int32_t*)(reg_v1 + 8) = var_v0; /* 0x8003580c */
    var_v0 = *(int32_t*)(reg_s0 + 16); /* 0x80035810 */
    var_v0 = var_s0 + var_v0; /* 0x80035818 */
    *(int32_t*)(reg_v1 + 12) = var_v0; /* 0x80035820 */
    var_v0 = *(uint16_t*)(reg_a0 + 2); /* 0x80035824 */
    /* Branch beq at 0x8003582c */
    func_0x80035008(); /* 0x80035834 */
    var_v1 = *(int32_t*)(stack + 24); /* 0x8003583c */
    var_v0 = 255; /* 0x80035840 */
    *(int16_t*)(reg_v1 + 4) = var_v0; /* 0x80035848 */
    var_a0 = *(int32_t*)(stack + 24); /* 0x8003584c */
    var_v0 = *(uint16_t*)(reg_a0 + 4); /* 0x80035854 */
    /* Branch beq at 0x8003585c */
    var_v1 = var_s3 << 0x2; /* 0x80035860 */
    var_v0 = *(int32_t*)(reg_s0 + 20); /* 0x80035864 */
    var_v0 = var_s0 + var_v0; /* 0x8003586c */
    var_v1 = var_v1 + var_v0; /* 0x80035870 */
    var_v0 = *(int32_t*)(reg_v1 + 0); /* 0x80035874 */
    var_v0 = var_s0 + var_v0; /* 0x8003587c */
    var_v1 = var_v0 + 4; /* 0x80035880 */
    *(int32_t*)(reg_a0 + 16) = var_v1; /* 0x80035884 */
    var_v1 = *(int32_t*)(reg_v0 + 4); /* 0x80035888 */
    var_v0 = var_v0 + 8; /* 0x8003588c */
    *(int32_t*)(reg_a0 + 16) = var_v0; /* 0x80035890 */
    *(int32_t*)(reg_a0 + 36) = var_v0; /* 0x80035894 */
    var_v0 = var_v1 + -2; /* 0x80035898 */
    *(int32_t*)(reg_a0 + 24) = var_v1; /* 0x8003589c */
    var_v1 = var_v1 + -1; /* 0x800358a0 */
    /* Branch beqz at 0x800358a4 */
    *(int32_t*)(reg_a0 + 20) = var_v0; /* 0x800358a8 */
    var_a2 = var_a0; /* 0x800358ac */
    var_v0 = *(int32_t*)(reg_a2 + 20); /* 0x800358b0 */
    var_a0 = *(int32_t*)(reg_a2 + 36); /* 0x800358b4 */
    var_a1 = var_v0; /* 0x800358b8 */
    var_v1 = *(uint16_t*)(reg_a0 + 0); /* 0x800358bc */
    var_v0 = var_v0 + -1; /* 0x800358c0 */
    *(int32_t*)(reg_a2 + 20) = var_v0; /* 0x800358c4 */
    var_v1 = var_v1 << 0x2; /* 0x800358c8 */
    var_a0 = var_a0 + var_v1; /* 0x800358cc */
    /* Branch bnez at 0x800358d0 */
    *(int32_t*)(reg_a2 + 36) = var_a0; /* 0x800358d4 */
    var_v1 = *(int32_t*)(stack + 24); /* 0x800358d8 */
    var_v0 = *(int32_t*)(reg_v1 + 36); /* 0x800358e0 */
    var_a0 = *(int32_t*)(reg_v1 + 16); /* 0x800358e4 */
    var_a1 = *(int32_t*)(reg_v0 + 4); /* 0x800358e8 */
    var_v0 = -1; /* 0x800358ec */
    *(int32_t*)(reg_v1 + 36) = var_a0; /* 0x800358f0 */
    *(int32_t*)(reg_v1 + 20) = var_zero; /* 0x800358f4 */
    *(int32_t*)(reg_v1 + 32) = var_v0; /* 0x800358f8 */
    *(int32_t*)(reg_v1 + 28) = var_a1; /* 0x800358fc */
    var_a1 = *(int32_t*)(stack + 24); /* 0x80035900 */
    var_v0 = *(int32_t*)(reg_a1 + 28); /* 0x80035908 */
    var_v1 = *(int32_t*)(reg_a1 + 32); /* 0x80035914 */
    var_s1 = (uint32_t)var_t0 >> 0xc; /* 0x8003591c */
    /* Branch beqz at 0x80035924 */
    *(int16_t*)(reg_a1 + 4) = var_s3; /* 0x80035928 */
    var_v0 = -1; /* 0x8003592c */
    /* Branch beq at 0x80035930 */
    var_v0 = *(int32_t*)(reg_a1 + 20); /* 0x80035938 */
    var_a0 = *(int32_t*)(reg_a1 + 24); /* 0x8003593c */
    var_v1 = var_v0; /* 0x80035940 */
    var_v0 = var_v0 + 1; /* 0x80035944 */
    /* Branch beqz at 0x8003594c */
    *(int32_t*)(reg_a1 + 20) = var_v0; /* 0x80035950 */
    var_v1 = *(int32_t*)(stack + 24); /* 0x80035954 */
    var_v0 = *(int32_t*)(reg_v1 + 12); /* 0x8003595c */
    var_a0 = *(int32_t*)(reg_v1 + 36); /* 0x80035960 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x80035964 */
    var_v0 = *(int32_t*)(reg_s0 + 8); /* 0x80035968 */
    var_v0 = var_s0 + var_v0; /* 0x80035970 */
    var_v0 = var_v0 + 4; /* 0x80035974 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x80035978 */
    var_a0 = *(int32_t*)(reg_a0 + 4); /* 0x8003597c */
    var_a1 = *(int32_t*)(reg_v1 + 36); /* 0x80035980 */
    var_a2 = *(int32_t*)(reg_v1 + 52); /* 0x80035984 */
    var_a3 = *(int32_t*)(reg_v1 + 8); /* 0x80035988 */
    func_0x80034e68(); /* 0x8003598c */
    var_a0 = *(int32_t*)(stack + 24); /* 0x80035994 */
    var_v1 = *(int32_t*)(reg_a0 + 20); /* 0x8003599c */
    var_a1 = *(int32_t*)(reg_a0 + 24); /* 0x800359a0 */
    *(int32_t*)(reg_a0 + 36) = var_v0; /* 0x800359a4 */
    var_v0 = var_v1; /* 0x800359a8 */
    var_v1 = var_v1 + 1; /* 0x800359ac */
    /* Branch bnez at 0x800359b4 */
    *(int32_t*)(reg_a0 + 20) = var_v1; /* 0x800359b8 */
    var_v0 = *(int32_t*)(stack + 24); /* 0x800359bc */
    var_v1 = *(int32_t*)(reg_v0 + 16); /* 0x800359c4 */
    *(int32_t*)(reg_v0 + 20) = var_zero; /* 0x800359c8 */
    *(int32_t*)(reg_v0 + 36) = var_v1; /* 0x800359cc */
    var_v1 = *(int32_t*)(stack + 24); /* 0x800359d0 */
    var_v0 = *(int32_t*)(reg_v1 + 52); /* 0x800359d8 */
    var_at = 0x1f80 << 16; /* 0x800359dc */
    *(int32_t*)(reg_at + 164) = var_v0; /* 0x800359e0 */
    var_v0 = *(int32_t*)(reg_v1 + 36); /* 0x800359e4 */
    var_v0 = *(int32_t*)(reg_v0 + 4); /* 0x800359ec */
    /* Branch bnez at 0x800359f8 */
    var_v1 = *(int32_t*)(stack + 24); /* 0x80035a00 */
    var_v0 = *(int32_t*)(reg_v1 + 12); /* 0x80035a08 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x80035a10 */
    var_v0 = *(int32_t*)(reg_s0 + 8); /* 0x80035a14 */
    var_v0 = var_s0 + var_v0; /* 0x80035a1c */
    var_v0 = var_v0 + 4; /* 0x80035a20 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x80035a24 */
    var_a1 = *(int32_t*)(reg_v1 + 36); /* 0x80035a28 */
    var_a2 = *(int32_t*)(reg_v1 + 52); /* 0x80035a2c */
    var_a3 = *(int32_t*)(reg_v1 + 8); /* 0x80035a30 */
    func_0x80034e68(); /* 0x80035a34 */
    var_v1 = *(int32_t*)(stack + 24); /* 0x80035a3c */
    func_0x80035604(); /* 0x80035a40 */
    var_v1 = *(int32_t*)(stack + 24); /* 0x80035a48 */
    var_v0 = *(int32_t*)(reg_v1 + 20); /* 0x80035a50 */
    var_a0 = *(int32_t*)(reg_v1 + 36); /* 0x80035a54 */
    var_v0 = var_v0 + 1; /* 0x80035a58 */
    *(int32_t*)(reg_v1 + 20) = var_v0; /* 0x80035a5c */
    var_v0 = *(int32_t*)(reg_a0 + 4); /* 0x80035a60 */
    /* Branch beqz at 0x80035a6c */
    var_v0 = *(int32_t*)(stack + 24); /* 0x80035a74 */
    var_v1 = 10; /* 0x80035a78 */
    *(int32_t*)(reg_v0 + 32) = var_s1; /* 0x80035a7c */
    *(int16_t*)(reg_v0 + 0) = var_v1; /* 0x80035a80 */
    var_ra = *(int32_t*)(stack + 52); /* 0x80035a84 */
    var_s4 = *(int32_t*)(stack + 48); /* 0x80035a88 */
    var_s3 = *(int32_t*)(stack + 44); /* 0x80035a8c */
    var_s2 = *(int32_t*)(stack + 40); /* 0x80035a90 */
    var_s1 = *(int32_t*)(stack + 36); /* 0x80035a94 */
    var_s0 = *(int32_t*)(stack + 32); /* 0x80035a98 */
    var_sp = var_sp + 56; /* 0x80035a9c */
    return; /* 0x80035aa0 */
}

/* Function at 0x80035aa4 */
void func_0x80035aa4() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -32; /* 0x80035aa8 */
    var_v0 = 0x8016 << 16; /* 0x80035aac */
    var_v0 = var_v0 + -12144; /* 0x80035ab0 */
    var_v1 = var_a1 << 0x2; /* 0x80035ab4 */
    var_v1 = var_v1 + var_v0; /* 0x80035ab8 */
    var_v0 = 0x834c; /* 0x80035abc */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80035ac0 */
    var_s1 = var_v1 + var_v0; /* 0x80035ac4 */
    *(int32_t*)(stack + 28) = var_ra; /* 0x80035ac8 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x80035acc */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80035ad0 */
    var_v1 = *(int32_t*)(reg_s1 + 0); /* 0x80035ad4 */
    var_v0 = *(uint16_t*)(reg_v1 + 4); /* 0x80035adc */
    var_s0 = *(int32_t*)(reg_a0 + 0); /* 0x80035ae0 */
    /* Branch bnez at 0x80035ae4 */
    var_s2 = 0x1f80 << 16; /* 0x80035ae8 */
    /* Branch beqz at 0x80035aec */
    func_0x80035008(); /* 0x80035af4 */
    func_0x8003413c(); /* 0x80035afc */
    var_v1 = *(int32_t*)(reg_s1 + 0); /* 0x80035b04 */
    var_v0 = *(int32_t*)(reg_v1 + 8); /* 0x80035b0c */
    var_v1 = var_v1 + var_v0; /* 0x80035b14 */
    var_v0 = var_v1 + 12; /* 0x80035b18 */
    *(int32_t*)(reg_s2 + 12) = var_v1; /* 0x80035b1c */
    *(int32_t*)(reg_s2 + 32) = var_v0; /* 0x80035b20 */
    var_a0 = *(int32_t*)(reg_v1 + 12); /* 0x80035b24 */
    var_v0 = 1; /* 0x80035b28 */
    var_a0 = var_a0 + 12; /* 0x80035b2c */
    var_v1 = var_v1 + var_a0; /* 0x80035b30 */
    *(int32_t*)(reg_s2 + 72) = var_v1; /* 0x80035b38 */
    var_v0 = *(uint16_t*)(reg_v1 + 6); /* 0x80035b3c */
    /* Branch beqz at 0x80035b44 */
    func_0x8003569c(); /* 0x80035b4c */
    func_0x80034364(); /* 0x80035b5c */
    var_ra = *(int32_t*)(stack + 28); /* 0x80035b64 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x80035b68 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x80035b6c */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80035b70 */
    var_sp = var_sp + 32; /* 0x80035b74 */
    return; /* 0x80035b78 */
}

/* Function at 0x80035b7c */
void func_0x80035b7c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -64; /* 0x80035b80 */
    var_v0 = 0x8016 << 16; /* 0x80035b84 */
    var_v0 = var_v0 + -12144; /* 0x80035b88 */
    var_a1 = var_a1 << 0x2; /* 0x80035b8c */
    var_a1 = var_a1 + var_v0; /* 0x80035b90 */
    var_v0 = 0x834c; /* 0x80035b94 */
    var_a1 = var_a1 + var_v0; /* 0x80035b98 */
    *(int32_t*)(stack + 56) = var_ra; /* 0x80035b9c */
    *(int32_t*)(stack + 52) = var_s1; /* 0x80035ba0 */
    *(int32_t*)(stack + 48) = var_s0; /* 0x80035ba4 */
    var_a1 = *(int32_t*)(reg_a1 + 0); /* 0x80035ba8 */
    var_s0 = *(int32_t*)(stack + 80); /* 0x80035bac */
    /* Branch beqz at 0x80035bb0 */
    /* Branch bnez at 0x80035bb8 */
    var_v0 = var_a2 << 0x2; /* 0x80035bbc */
    *(int32_t*)(reg_s0 + 8) = var_zero; /* 0x80035bc0 */
    *(int32_t*)(reg_s0 + 4) = var_zero; /* 0x80035bc4 */
    *(int32_t*)(reg_s0 + 0) = var_zero; /* 0x80035bcc */
    var_v0 = var_v0 + var_a2; /* 0x80035bd0 */
    var_v0 = var_v0 << 0x3; /* 0x80035bd4 */
    var_v1 = *(int32_t*)(reg_a1 + 8); /* 0x80035bd8 */
    var_a0 = *(int32_t*)(reg_a0 + 52); /* 0x80035bdc */
    var_v1 = var_a1 + var_v1; /* 0x80035be0 */
    var_v0 = var_v0 + var_v1; /* 0x80035be4 */
    var_v0 = *(int32_t*)(reg_v0 + 12); /* 0x80035be8 */
    var_a1 = var_a2; /* 0x80035bec */
    var_v0 = var_v0 + 12; /* 0x80035bf0 */
    var_v1 = var_v1 + var_v0; /* 0x80035bf4 */
    var_v0 = var_a3 << 0x3; /* 0x80035bf8 */
    func_0x80034760(); /* 0x80035bfc */
    var_a3 = var_v0; /* 0x80035c04 */
    /* Branch beqz at 0x80035c08 */
    var_v0 = *(int32_t*)(reg_a3 + 4); /* 0x80035c10 */
    /* Branch beqz at 0x80035c18 */
    *(int16_t*)(reg_v0 + 0) = var_zero; /* 0x80035c20 */
    var_v0 = *(int32_t*)(reg_v0 + 72); /* 0x80035c24 */
    /* Branch bnez at 0x80035c2c */
    var_v0 = 0x8008 << 16; /* 0x80035c34 */
    var_a2 = 0x1f80 << 16; /* 0x80035c38 */
    var_a2 = var_a2 | 0xa8; /* 0x80035c3c */
    var_a1 = var_v0 + 1036; /* 0x80035c40 */
    var_v1 = *(int32_t*)(reg_a1 + 0); /* 0x80035c44 */
    var_a0 = *(int32_t*)(reg_a1 + 4); /* 0x80035c48 */
    *(int32_t*)(reg_a2 + 0) = var_v1; /* 0x80035c4c */
    *(int32_t*)(reg_a2 + 4) = var_a0; /* 0x80035c50 */
    var_v1 = *(int32_t*)(reg_a1 + 8); /* 0x80035c54 */
    var_a0 = *(int32_t*)(reg_a1 + 12); /* 0x80035c58 */
    *(int32_t*)(reg_a2 + 8) = var_v1; /* 0x80035c5c */
    *(int32_t*)(reg_a2 + 12) = var_a0; /* 0x80035c60 */
    var_v1 = *(int32_t*)(reg_a1 + 16); /* 0x80035c64 */
    var_a0 = *(int32_t*)(reg_a1 + 20); /* 0x80035c68 */
    *(int32_t*)(reg_a2 + 16) = var_v1; /* 0x80035c6c */
    *(int32_t*)(reg_a2 + 20) = var_a0; /* 0x80035c70 */
    var_v1 = *(int32_t*)(reg_a1 + 24); /* 0x80035c74 */
    var_a0 = *(int32_t*)(reg_a1 + 28); /* 0x80035c78 */
    *(int32_t*)(reg_a2 + 24) = var_v1; /* 0x80035c7c */
    *(int32_t*)(reg_a2 + 28) = var_a0; /* 0x80035c80 */
    var_a0 = *(int32_t*)(reg_a3 + 4); /* 0x80035c84 */
    func_0x80035260(); /* 0x80035c88 */
    var_ra = *(int32_t*)(stack + 56); /* 0x80035cb0 */
    var_s1 = *(int32_t*)(stack + 52); /* 0x80035cb4 */
    var_s0 = *(int32_t*)(stack + 48); /* 0x80035cb8 */
    var_sp = var_sp + 64; /* 0x80035cbc */
    return; /* 0x80035cc0 */
}

/* Function at 0x80035cc4 */
void func_0x80035cc4() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_v0;

    var_sp = var_sp + -32; /* 0x80035cc8 */
    var_v0 = 29000; /* 0x80035ccc */
    *(int32_t*)(stack + 16) = var_v0; /* 0x80035cd0 */
    var_v0 = var_a0 + 32; /* 0x80035cd4 */
    var_a0 = var_a1; /* 0x80035cd8 */
    var_a1 = var_v0; /* 0x80035cdc */
    var_a2 = 128; /* 0x80035ce0 */
    var_a3 = 28000; /* 0x80035ce4 */
    *(int32_t*)(stack + 24) = var_ra; /* 0x80035ce8 */
    func_0x80058254(); /* 0x80035cec */
    var_ra = *(int32_t*)(stack + 24); /* 0x80035cf4 */
    var_sp = var_sp + 32; /* 0x80035cf8 */
    return; /* 0x80035cfc */
}

/* Function at 0x80035d00 */
void func_0x80035d00() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -48; /* 0x80035d04 */
    var_v0 = 0x8019 << 16; /* 0x80035d08 */
    *(int32_t*)(stack + 32) = var_s0; /* 0x80035d0c */
    var_s0 = *(int32_t*)(reg_v0 + 3868); /* 0x80035d10 */
    var_t0 = var_a0; /* 0x80035d14 */
    *(int32_t*)(stack + 44) = var_ra; /* 0x80035d18 */
    *(int32_t*)(stack + 40) = var_s2; /* 0x80035d1c */
    *(int32_t*)(stack + 36) = var_s1; /* 0x80035d20 */
    var_v0 = *(uint8_t*)(reg_s0 + 8); /* 0x80035d24 */
    /* Branch bnez at 0x80035d2c */
    var_a3 = var_a1; /* 0x80035d30 */
    var_v1 = 0xfff << 16; /* 0x80035d34 */
    var_v1 = var_v1 | 0xffff; /* 0x80035d38 */
    var_v0 = *(int32_t*)(reg_s0 + 32); /* 0x80035d3c */
    var_v1 = var_a3 & var_v1; /* 0x80035d40 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x80035d44 */
    var_v0 = *(int32_t*)(reg_s0 + 36); /* 0x80035d48 */
    var_s2 = 0x801b << 16; /* 0x80035d4c */
    var_v0 = var_v0 + var_a2; /* 0x80035d54 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x80035d58 */
    var_v0 = *(int32_t*)(reg_s0 + 40); /* 0x80035d5c */
    var_s1 = var_s2 + 22856; /* 0x80035d60 */
    *(int32_t*)(stack + 24) = var_v0; /* 0x80035d64 */
    var_v0 = *(int32_t*)(stack + 16); /* 0x80035d68 */
    var_v1 = *(int32_t*)(stack + 20); /* 0x80035d6c */
    var_a0 = *(int32_t*)(stack + 24); /* 0x80035d70 */
    var_a1 = *(int32_t*)(stack + 28); /* 0x80035d74 */
    *(int32_t*)(reg_s1 + 4) = var_v0; /* 0x80035d78 */
    *(int32_t*)(reg_s1 + 8) = var_v1; /* 0x80035d7c */
    *(int32_t*)(reg_s1 + 12) = var_a0; /* 0x80035d80 */
    *(int32_t*)(reg_s1 + 16) = var_a1; /* 0x80035d84 */
    *(int16_t*)(reg_s1 + 28) = var_t0; /* 0x80035d88 */
    *(int16_t*)(reg_s1 + 30) = var_a3; /* 0x80035d8c */
    var_v0 = *(int16_t*)(reg_s0 + 64); /* 0x80035db0 */
    var_v0 = *(int16_t*)(reg_s0 + 68); /* 0x80035dc0 */
    func_0x800746c4(); /* 0x80035dd0 */
    *(int16_t*)(reg_s1 + 34) = var_v0; /* 0x80035dd8 */
    var_a0 = *(int16_t*)(reg_s0 + 68); /* 0x80035ddc */
    var_a1 = *(int16_t*)(reg_s0 + 64); /* 0x80035de0 */
    func_0x80076ea4(); /* 0x80035de4 */
    *(int16_t*)(reg_s1 + 32) = var_v0; /* 0x80035dec */
    var_v0 = *(uint8_t*)(reg_s0 + 0); /* 0x80035df0 */
    var_a0 = 2; /* 0x80035df4 */
    var_v1 = var_v0 & 0x7; /* 0x80035df8 */
    /* Branch beq at 0x80035dfc */
    /* Branch beqz at 0x80035e04 */
    var_v0 = 1; /* 0x80035e08 */
    /* Branch beq at 0x80035e0c */
    var_v0 = var_zero; /* 0x80035e10 */
    var_v0 = 3; /* 0x80035e1c */
    /* Branch beq at 0x80035e20 */
    var_v0 = 4; /* 0x80035e24 */
    /* Branch beq at 0x80035e28 */
    var_v0 = var_zero; /* 0x80035e2c */
    var_v0 = 50; /* 0x80035e38 */
    *(int32_t*)(reg_s2 + 22856) = var_v0; /* 0x80035e40 */
    var_v0 = 162; /* 0x80035e44 */
    *(int32_t*)(reg_s2 + 22856) = var_v0; /* 0x80035e4c */
    var_v0 = 178; /* 0x80035e50 */
    *(int32_t*)(reg_s2 + 22856) = var_v0; /* 0x80035e58 */
    *(int32_t*)(reg_s2 + 22856) = var_a0; /* 0x80035e5c */
    func_0x80049544(); /* 0x80035e60 */
    var_v0 = var_v0 + -1; /* 0x80035e70 */
    *(int8_t*)(reg_s0 + 8) = var_v0; /* 0x80035e74 */
    var_v0 = var_zero; /* 0x80035e78 */
    var_ra = *(int32_t*)(stack + 44); /* 0x80035e7c */
    var_s2 = *(int32_t*)(stack + 40); /* 0x80035e80 */
    var_s1 = *(int32_t*)(stack + 36); /* 0x80035e84 */
    var_s0 = *(int32_t*)(stack + 32); /* 0x80035e88 */
    var_sp = var_sp + 48; /* 0x80035e8c */
    return; /* 0x80035e90 */
}

/* Function at 0x80035e94 */
void func_0x80035e94() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -96; /* 0x80035e98 */
    *(int32_t*)(stack + 64) = var_s0; /* 0x80035e9c */
    var_s0 = var_a0; /* 0x80035ea0 */
    *(int32_t*)(stack + 68) = var_s1; /* 0x80035ea4 */
    var_s1 = var_a1; /* 0x80035ea8 */
    *(int32_t*)(stack + 76) = var_s3; /* 0x80035eac */
    var_s3 = var_a2; /* 0x80035eb0 */
    *(int32_t*)(stack + 88) = var_s6; /* 0x80035eb4 */
    var_s6 = var_a3; /* 0x80035eb8 */
    var_a0 = var_sp + 48; /* 0x80035ebc */
    var_a1 = var_zero; /* 0x80035ec0 */
    *(int32_t*)(stack + 72) = var_s2; /* 0x80035ec4 */
    var_s2 = *(int32_t*)(stack + 112); /* 0x80035ec8 */
    var_a2 = 12; /* 0x80035ecc */
    *(int32_t*)(stack + 92) = var_ra; /* 0x80035ed0 */
    *(int32_t*)(stack + 84) = var_s5; /* 0x80035ed4 */
    func_0x80078ab4(); /* 0x80035ed8 */
    var_v0 = var_s1 & 0x20; /* 0x80035ee0 */
    var_s4 = (uint32_t)var_v0 >> 0x5; /* 0x80035ee4 */
    var_v1 = 0xfff0 << 16; /* 0x80035ee8 */
    var_v1 = var_v1 | 0xffff; /* 0x80035eec */
    var_v0 = 0xf << 16; /* 0x80035ef0 */
    var_s5 = var_s0 & var_v0; /* 0x80035ef4 */
    var_s0 = var_s0 & var_v1; /* 0x80035ef8 */
    var_v0 = var_s0 & 0x80; /* 0x80035efc */
    /* Branch beqz at 0x80035f00 */
    var_a0 = var_s3 + 4; /* 0x80035f04 */
    var_a1 = 4096; /* 0x80035f08 */
    var_a2 = *(uint16_t*)(reg_s3 + 22); /* 0x80035f0c */
    func_0x8003dbe0(); /* 0x80035f10 */
    var_v0 = var_s0 & 0x10; /* 0x80035f18 */
    /* Branch beqz at 0x80035f1c */
    var_v0 = 0x801b << 16; /* 0x80035f20 */
    var_v1 = *(int32_t*)(reg_v0 + 22948); /* 0x80035f24 */
    var_v0 = var_v1 << 0x1; /* 0x80035f2c */
    var_v0 = var_v0 + var_v1; /* 0x80035f30 */
    var_v0 = var_v0 << 0x2; /* 0x80035f34 */
    var_v0 = var_v0 + var_v1; /* 0x80035f38 */
    var_v0 = var_v0 << 0x2; /* 0x80035f3c */
    var_v0 = var_v0 + var_v1; /* 0x80035f40 */
    var_v0 = var_v0 << 0x2; /* 0x80035f44 */
    var_v1 = 0x801c << 16; /* 0x80035f48 */
    var_v1 = var_v1 + -24264; /* 0x80035f4c */
    /* Branch beqz at 0x80035f50 */
    var_s0 = var_v0 + var_v1; /* 0x80035f54 */
    var_v1 = *(int32_t*)(reg_s0 + 116); /* 0x80035f58 */
    var_a0 = *(int32_t*)(reg_s2 + 0); /* 0x80035f5c */
    var_v0 = *(int32_t*)(reg_s0 + 124); /* 0x80035f60 */
    var_a1 = *(int32_t*)(reg_s2 + 8); /* 0x80035f64 */
    func_0x8004a1b4(); /* 0x80035f6c */
    var_a1 = var_v0 + 2048; /* 0x80035f74 */
    var_a0 = *(int16_t*)(reg_s0 + 142); /* 0x80035f78 */
    func_0x8004a148(); /* 0x80035f7c */
    /* Branch beqz at 0x80035f84 */
    var_v0 = 0x2 << 16; /* 0x80035f8c */
    var_v0 = var_s5 & var_v0; /* 0x80035f90 */
    /* Branch beqz at 0x80035f94 */
    var_s1 = var_s1 & 0xc0; /* 0x80035f98 */
    var_s1 = var_s1 | 0x10; /* 0x80035fa0 */
    var_s1 = var_s1 | 0x20; /* 0x80035fa4 */
    var_v0 = var_s4 & 0xff; /* 0x80035fa8 */
    /* Branch beqz at 0x80035fac */
    var_v0 = 0x801a << 16; /* 0x80035fb0 */
    var_v1 = *(uint16_t*)(reg_v0 + -28808); /* 0x80035fb4 */
    var_v0 = 0x801a << 16; /* 0x80035fc0 */
    var_v1 = *(uint16_t*)(reg_v0 + -28820); /* 0x80035fc4 */
    var_v0 = 0xaaaa << 16; /* 0x80035fc8 */
    var_v0 = var_v0 | 0xaaab; /* 0x80035fcc */
    var_t0 = (uint32_t)var_t2 >> 0x2; /* 0x80035fd8 */
    var_v1 = var_t0 & 0xff; /* 0x80035fdc */
    /* Branch beqz at 0x80035fe4 */
    var_a1 = var_v1 << 0x2; /* 0x80035fe8 */
    var_v0 = var_v1 << 0x1; /* 0x80035fec */
    var_v1 = 0x801a << 16; /* 0x80035ff0 */
    var_v1 = var_v1 + -28888; /* 0x80035ff4 */
    var_v0 = var_v0 + var_v1; /* 0x80035ff8 */
    var_a0 = *(uint16_t*)(reg_v0 + 120); /* 0x80035ffc */
    var_v0 = var_sp + var_a1; /* 0x80036000 */
    *(int16_t*)(reg_v0 + 50) = var_a0; /* 0x80036004 */
    *(int16_t*)(reg_v0 + 48) = var_a0; /* 0x80036008 */
    var_a3 = *(uint16_t*)(reg_v1 + 184); /* 0x8003600c */
    var_v0 = var_t0 & 0xff; /* 0x80036014 */
    var_a3 = var_zero; /* 0x80036018 */
    var_v0 = var_t0 & 0xff; /* 0x8003601c */
    /* Branch bnez at 0x80036024 */
    var_a2 = var_s3 + 4; /* 0x80036028 */
    var_v0 = 0x801a << 16; /* 0x8003602c */
    var_a2 = var_v0 + -28702; /* 0x80036030 */
    var_a1 = var_zero; /* 0x80036034 */
    var_v1 = var_sp + 24; /* 0x80036038 */
    var_a1 = var_a1 + 1; /* 0x8003603c */
    var_v0 = *(uint16_t*)(reg_a2 + 0); /* 0x80036040 */
    var_a2 = var_a2 + 2; /* 0x80036044 */
    *(int16_t*)(reg_v1 + 0) = var_v0; /* 0x80036048 */
    /* Branch bnez at 0x80036050 */
    var_v1 = var_v1 + 2; /* 0x80036054 */
    var_a2 = var_s3 + 10; /* 0x80036058 */
    var_a1 = var_zero; /* 0x8003605c */
    var_t1 = 0xaaaa << 16; /* 0x80036060 */
    var_t1 = var_t1 | 0xaaab; /* 0x80036064 */
    var_a0 = var_sp + 24; /* 0x80036068 */
    var_v1 = *(uint16_t*)(reg_a2 + 0); /* 0x8003606c */
    /* Branch bnez at 0x80036074 */
    *(int16_t*)(reg_a0 + 6) = var_zero; /* 0x80036080 */
    var_v0 = *(uint16_t*)(reg_a0 + 24); /* 0x80036084 */
    var_v0 = var_v1 + var_a3; /* 0x80036090 */
    var_v1 = (uint32_t)var_t2 >> 0x2; /* 0x80036098 */
    var_v0 = var_v0 + var_v1; /* 0x8003609c */
    *(int16_t*)(reg_a0 + 6) = var_v0; /* 0x800360a0 */
    var_a0 = var_a0 + 2; /* 0x800360a4 */
    var_a1 = var_a1 + 1; /* 0x800360a8 */
    /* Branch bnez at 0x800360b0 */
    var_a2 = var_a2 + 2; /* 0x800360b4 */
    var_v0 = var_t0 & 0xff; /* 0x800360b8 */
    /* Branch beqz at 0x800360c0 */
    var_v0 = 1; /* 0x800360c4 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x800360cc */
    *(int32_t*)(stack + 16) = var_zero; /* 0x800360d0 */
    var_a0 = var_s0; /* 0x800360d4 */
    var_a1 = 1; /* 0x800360d8 */
    var_a2 = var_s6; /* 0x800360dc */
    func_0x8004def8(); /* 0x800360e0 */
    var_a0 = var_v0; /* 0x800360e8 */
    var_v0 = var_s1 & 0x40; /* 0x800360ec */
    /* Branch beqz at 0x800360f0 */
    var_v0 = 0x1 << 16; /* 0x800360f4 */
    var_a0 = var_a0 << 0x10; /* 0x800360f8 */
    func_0x80026a88(); /* 0x800360fc */
    var_v0 = 0x1 << 16; /* 0x80036104 */
    var_v0 = var_s5 & var_v0; /* 0x80036108 */
    /* Branch beqz at 0x8003610c */
    var_v0 = *(int32_t*)(reg_s0 + 112); /* 0x80036114 */
    var_v0 = var_v0 | 0x800; /* 0x8003611c */
    *(int32_t*)(reg_s0 + 112) = var_v0; /* 0x80036120 */
    var_ra = *(int32_t*)(stack + 92); /* 0x80036124 */
    var_s6 = *(int32_t*)(stack + 88); /* 0x80036128 */
    var_s5 = *(int32_t*)(stack + 84); /* 0x8003612c */
    var_s4 = *(int32_t*)(stack + 80); /* 0x80036130 */
    var_s3 = *(int32_t*)(stack + 76); /* 0x80036134 */
    var_s2 = *(int32_t*)(stack + 72); /* 0x80036138 */
    var_s1 = *(int32_t*)(stack + 68); /* 0x8003613c */
    var_s0 = *(int32_t*)(stack + 64); /* 0x80036140 */
    var_sp = var_sp + 96; /* 0x80036144 */
    return; /* 0x80036148 */
}

/* Function at 0x8003614c */
void func_0x8003614c() {
    /* Local variables */
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -32; /* 0x80036150 */
    var_v1 = 0x8019 << 16; /* 0x80036154 */
    var_v1 = var_v1 + -11624; /* 0x80036158 */
    *(int32_t*)(stack + 24) = var_ra; /* 0x8003615c */
    var_v0 = *(int32_t*)(reg_v1 + 15492); /* 0x80036160 */
    var_a3 = var_a1; /* 0x80036164 */
    var_a1 = *(uint8_t*)(reg_v0 + 0); /* 0x80036168 */
    *(int32_t*)(stack + 16) = var_a2; /* 0x8003616c */
    var_a2 = *(int32_t*)(reg_v1 + 15488); /* 0x80036170 */
    func_0x80035e98(); /* 0x80036174 */
    var_ra = *(int32_t*)(stack + 24); /* 0x8003617c */
    var_sp = var_sp + 32; /* 0x80036180 */
    return; /* 0x80036184 */
}

/* Function at 0x80036188 */
void func_0x80036188() {
    /* Local variables */
    int32_t var_a1;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x8019 << 16; /* 0x8003618c */
    var_a1 = *(int32_t*)(reg_v0 + 3868); /* 0x80036190 */
    var_sp = var_sp + -40; /* 0x80036194 */
    *(int32_t*)(stack + 32) = var_ra; /* 0x80036198 */
    var_v0 = *(int16_t*)(reg_a1 + 64); /* 0x8003619c */
    var_v1 = *(int32_t*)(reg_a1 + 32); /* 0x800361a0 */
    var_v0 = var_v0 << 0x3; /* 0x800361a4 */
    *(int32_t*)(stack + 16) = var_v1; /* 0x800361ac */
    var_v0 = *(int16_t*)(reg_a1 + 66); /* 0x800361b0 */
    var_v1 = *(int32_t*)(reg_a1 + 36); /* 0x800361b4 */
    var_v0 = var_v0 << 0x3; /* 0x800361b8 */
    *(int32_t*)(stack + 20) = var_v1; /* 0x800361c0 */
    var_v0 = *(int16_t*)(reg_a1 + 68); /* 0x800361c4 */
    var_v1 = *(int32_t*)(reg_a1 + 40); /* 0x800361c8 */
    var_v0 = var_v0 << 0x3; /* 0x800361cc */
    *(int32_t*)(stack + 24) = var_v1; /* 0x800361d4 */
    var_v0 = *(uint8_t*)(reg_a1 + 1); /* 0x800361d8 */
    var_v0 = var_v0 + -44; /* 0x800361e0 */
    /* Branch beqz at 0x800361e8 */
    var_a1 = *(int16_t*)(reg_a1 + 82); /* 0x800361f0 */
    var_a1 = 5120; /* 0x800361fc */
    func_0x80036150(); /* 0x80036200 */
    var_ra = *(int32_t*)(stack + 32); /* 0x80036208 */
    var_sp = var_sp + 40; /* 0x8003620c */
    return; /* 0x80036210 */
}

/* Function at 0x80036214 */
void func_0x80036214() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -64; /* 0x80036218 */
    *(int32_t*)(stack + 40) = var_s0; /* 0x8003621c */
    var_s0 = var_a0; /* 0x80036220 */
    var_v0 = var_a1; /* 0x80036224 */
    *(int32_t*)(stack + 52) = var_s3; /* 0x80036228 */
    var_s3 = var_a2; /* 0x8003622c */
    *(int32_t*)(stack + 44) = var_s1; /* 0x80036230 */
    var_s1 = var_a3; /* 0x80036234 */
    *(int32_t*)(stack + 48) = var_s2; /* 0x80036238 */
    var_s2 = var_sp + 32; /* 0x8003623c */
    *(int32_t*)(stack + 56) = var_ra; /* 0x80036240 */
    var_a0 = *(int16_t*)(reg_s0 + 10); /* 0x80036244 */
    var_a1 = *(uint8_t*)(reg_s0 + 2); /* 0x80036248 */
    var_a2 = *(uint16_t*)(reg_s0 + 20); /* 0x8003624c */
    var_a3 = var_v0; /* 0x80036250 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x80036254 */
    func_0x80033e30(); /* 0x80036258 */
    var_v1 = *(int16_t*)(stack + 32); /* 0x80036260 */
    var_v0 = *(int16_t*)(reg_s1 + 0); /* 0x80036264 */
    var_v1 = *(int16_t*)(stack + 34); /* 0x80036270 */
    var_v0 = var_t0 >> 0xc; /* 0x80036278 */
    *(int16_t*)(stack + 32) = var_v0; /* 0x8003627c */
    var_v0 = *(int16_t*)(reg_s1 + 2); /* 0x80036280 */
    var_v1 = *(int16_t*)(stack + 36); /* 0x8003628c */
    var_v0 = var_t0 >> 0xc; /* 0x80036294 */
    *(int16_t*)(stack + 34) = var_v0; /* 0x80036298 */
    var_v0 = *(int16_t*)(reg_s1 + 4); /* 0x8003629c */
    var_v0 = var_t0 >> 0xc; /* 0x800362ac */
    *(int16_t*)(stack + 36) = var_v0; /* 0x800362b0 */
    var_v0 = *(uint16_t*)(reg_s0 + 48); /* 0x800362b4 */
    var_a0 = var_sp + 24; /* 0x800362b8 */
    *(int16_t*)(stack + 24) = var_v0; /* 0x800362bc */
    var_v0 = *(uint16_t*)(reg_s0 + 50); /* 0x800362c0 */
    var_a1 = var_s2; /* 0x800362c4 */
    var_v0 = var_v0 + 2048; /* 0x800362c8 */
    *(int16_t*)(stack + 26) = var_v0; /* 0x800362cc */
    var_v0 = *(uint16_t*)(reg_s0 + 52); /* 0x800362d0 */
    var_a2 = var_s3; /* 0x800362d4 */
    func_0x8004a078(); /* 0x800362d8 */
    var_ra = *(int32_t*)(stack + 56); /* 0x800362e0 */
    var_s3 = *(int32_t*)(stack + 52); /* 0x800362e4 */
    var_s2 = *(int32_t*)(stack + 48); /* 0x800362e8 */
    var_s1 = *(int32_t*)(stack + 44); /* 0x800362ec */
    var_s0 = *(int32_t*)(stack + 40); /* 0x800362f0 */
    var_sp = var_sp + 64; /* 0x800362f4 */
    return; /* 0x800362f8 */
}

/* Function at 0x800362fc */
void func_0x800362fc() {
    /* Local variables */
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -32; /* 0x80036300 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80036304 */
    var_s1 = var_a0; /* 0x80036308 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003630c */
    *(int32_t*)(stack + 24) = var_ra; /* 0x80036310 */
    func_0x80036218(); /* 0x80036314 */
    var_v0 = *(int32_t*)(reg_s0 + 0); /* 0x8003631c */
    var_v1 = *(int32_t*)(reg_s1 + 32); /* 0x80036320 */
    var_v0 = var_v0 + var_v1; /* 0x80036328 */
    *(int32_t*)(reg_s0 + 0) = var_v0; /* 0x8003632c */
    var_v0 = *(int32_t*)(reg_s0 + 4); /* 0x80036330 */
    var_v1 = *(int32_t*)(reg_s1 + 36); /* 0x80036334 */
    var_v0 = var_v0 + var_v1; /* 0x8003633c */
    *(int32_t*)(reg_s0 + 4) = var_v0; /* 0x80036340 */
    var_v0 = *(int32_t*)(reg_s0 + 8); /* 0x80036344 */
    var_v1 = *(int32_t*)(reg_s1 + 40); /* 0x80036348 */
    var_v0 = var_v0 + var_v1; /* 0x80036350 */
    *(int32_t*)(reg_s0 + 8) = var_v0; /* 0x80036354 */
    var_ra = *(int32_t*)(stack + 24); /* 0x80036358 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x8003635c */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80036360 */
    var_sp = var_sp + 32; /* 0x80036364 */
    return; /* 0x80036368 */
}

/* Function at 0x8003636c */
void func_0x8003636c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x8019 << 16; /* 0x80036370 */
    var_v1 = var_v0 + -7400; /* 0x80036374 */
    var_a0 = 128; /* 0x80036378 */
    var_a1 = 255; /* 0x8003637c */
    var_v0 = *(uint8_t*)(reg_v1 + 0); /* 0x80036380 */
    /* Branch beq at 0x80036388 */
    var_v0 = var_a0 + -1; /* 0x8003638c */
    var_a0 = var_v0; /* 0x80036390 */
    var_v0 = var_v0 & 0xffff; /* 0x80036394 */
    /* Branch bnez at 0x80036398 */
    var_v1 = var_v1 + 88; /* 0x8003639c */
    var_v0 = var_zero; /* 0x800363a4 */
    var_v0 = var_v1; /* 0x800363a8 */
    return; /* 0x800363ac */
}

/* Function at 0x800363b0 */
void func_0x800363b0() {
    /* Local variables */
    int32_t var_v0;

    var_v0 = 1; /* 0x800363b4 */
    *(int8_t*)(reg_a0 + 6) = var_v0; /* 0x800363b8 */
    var_v0 = 128; /* 0x800363bc */
    *(int8_t*)(reg_a0 + 2) = var_v0; /* 0x800363c0 */
    var_v0 = 52; /* 0x800363c4 */
    *(int8_t*)(reg_a0 + 9) = var_v0; /* 0x800363c8 */
    var_v0 = 4096; /* 0x800363cc */
    *(int16_t*)(reg_a0 + 10) = var_a1; /* 0x800363d0 */
    *(int8_t*)(reg_a0 + 7) = var_a3; /* 0x800363d4 */
    *(int16_t*)(reg_a0 + 18) = var_v0; /* 0x800363d8 */
    *(int16_t*)(reg_a0 + 60) = var_a2; /* 0x800363dc */
    *(int16_t*)(reg_a0 + 58) = var_a2; /* 0x800363e0 */
    return; /* 0x800363e4 */
}

/* Function at 0x800363e8 */
void func_0x800363e8() {
    /* Local variables */
    int32_t var_v0;

    *(int16_t*)(reg_a0 + 56) = var_a2; /* 0x800363e8 */
    var_v0 = 5; /* 0x800363ec */
    *(int8_t*)(reg_a0 + 6) = var_v0; /* 0x800363f0 */
    var_v0 = 128; /* 0x800363f4 */
    *(int8_t*)(reg_a0 + 2) = var_v0; /* 0x800363f8 */
    var_v0 = 51; /* 0x800363fc */
    *(int8_t*)(reg_a0 + 9) = var_v0; /* 0x80036400 */
    var_v0 = 4096; /* 0x80036404 */
    *(int16_t*)(reg_a0 + 10) = var_a1; /* 0x80036408 */
    *(int8_t*)(reg_a0 + 7) = var_a3; /* 0x8003640c */
    *(int16_t*)(reg_a0 + 18) = var_v0; /* 0x80036410 */
    *(int16_t*)(reg_a0 + 60) = var_a2; /* 0x80036414 */
    *(int16_t*)(reg_a0 + 58) = var_a2; /* 0x80036418 */
    return; /* 0x8003641c */
}

/* Function at 0x80036420 */
void func_0x80036420() {
    /* Local variables */
    int32_t var_a3;
    int32_t var_v0;

    *(int16_t*)(reg_a0 + 56) = var_a2; /* 0x80036420 */
    var_v0 = 14; /* 0x80036424 */
    *(int8_t*)(reg_a0 + 6) = var_v0; /* 0x80036428 */
    var_v0 = 128; /* 0x8003642c */
    *(int8_t*)(reg_a0 + 2) = var_v0; /* 0x80036430 */
    var_v0 = 5; /* 0x80036434 */
    *(int8_t*)(reg_a0 + 7) = var_v0; /* 0x80036438 */
    var_v0 = 52; /* 0x8003643c */
    *(int8_t*)(reg_a0 + 9) = var_v0; /* 0x80036440 */
    var_v0 = 4096; /* 0x80036444 */
    *(int16_t*)(reg_a0 + 18) = var_v0; /* 0x80036448 */
    var_v0 = 256; /* 0x8003644c */
    *(int16_t*)(reg_a0 + 58) = var_v0; /* 0x80036450 */
    *(int16_t*)(reg_a0 + 60) = var_v0; /* 0x80036454 */
    *(int16_t*)(reg_a0 + 56) = var_v0; /* 0x80036458 */
    var_v0 = 160; /* 0x8003645c */
    var_a3 = var_a3 + 120; /* 0x80036460 */
    *(int16_t*)(reg_a0 + 10) = var_a1; /* 0x80036464 */
    *(int32_t*)(reg_a0 + 32) = var_v0; /* 0x80036468 */
    *(int32_t*)(reg_a0 + 36) = var_a3; /* 0x8003646c */
    *(int32_t*)(reg_a0 + 40) = var_zero; /* 0x80036470 */
    *(int16_t*)(reg_a0 + 48) = var_a2; /* 0x80036474 */
    *(int16_t*)(reg_a0 + 52) = var_zero; /* 0x80036478 */
    return; /* 0x8003647c */
}

/* Function at 0x80036480 */
void func_0x80036480() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    *(int16_t*)(reg_a0 + 50) = var_zero; /* 0x80036480 */
    var_sp = var_sp + -96; /* 0x80036484 */
    *(int32_t*)(stack + 64) = var_s0; /* 0x80036488 */
    var_s0 = var_a1; /* 0x8003648c */
    *(int32_t*)(stack + 68) = var_s1; /* 0x80036490 */
    var_s1 = var_a2; /* 0x80036494 */
    *(int32_t*)(stack + 84) = var_s5; /* 0x80036498 */
    var_s5 = var_a3; /* 0x8003649c */
    var_v0 = var_s0 & 0x20; /* 0x800364a0 */
    *(int32_t*)(stack + 80) = var_s4; /* 0x800364a4 */
    var_s4 = (uint32_t)var_v0 >> 0x5; /* 0x800364a8 */
    *(int32_t*)(stack + 88) = var_s6; /* 0x800364ac */
    var_s6 = var_a0; /* 0x800364b0 */
    *(int32_t*)(stack + 76) = var_s3; /* 0x800364b4 */
    var_s3 = var_sp + 112; /* 0x800364b8 */
    *(int32_t*)(stack + 92) = var_ra; /* 0x800364bc */
    func_0x80036370(); /* 0x800364c0 */
    var_s2 = var_v0; /* 0x800364c8 */
    /* Branch beqz at 0x800364cc */
    var_v0 = var_s2; /* 0x800364d0 */
    *(int8_t*)(reg_s2 + 0) = var_s0; /* 0x800364d4 */
    /* Branch beqz at 0x800364d8 */
    *(int8_t*)(reg_s2 + 1) = var_s1; /* 0x800364dc */
    var_v0 = *(int32_t*)(reg_s5 + 0); /* 0x800364e0 */
    var_v1 = *(int32_t*)(reg_s5 + 4); /* 0x800364e4 */
    var_a0 = *(int32_t*)(reg_s5 + 8); /* 0x800364e8 */
    var_a1 = *(int32_t*)(reg_s5 + 12); /* 0x800364ec */
    *(int32_t*)(reg_s2 + 32) = var_v0; /* 0x800364f0 */
    *(int32_t*)(reg_s2 + 36) = var_v1; /* 0x800364f4 */
    *(int32_t*)(reg_s2 + 40) = var_a0; /* 0x800364f8 */
    *(int32_t*)(reg_s2 + 44) = var_a1; /* 0x800364fc */
    var_a2 = *(int32_t*)(stack + 112); /* 0x80036500 */
    /* Branch beqz at 0x80036508 */
    *(int16_t*)(reg_s2 + 68) = var_zero; /* 0x80036538 */
    *(int16_t*)(reg_s2 + 66) = var_zero; /* 0x8003653c */
    *(int16_t*)(reg_s2 + 64) = var_zero; /* 0x80036540 */
    var_v1 = *(uint8_t*)(reg_s2 + 1); /* 0x80036544 */
    var_v0 = 4096; /* 0x80036548 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x8003654c */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80036550 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80036554 */
    var_v0 = 1; /* 0x80036558 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x8003655c */
    var_v0 = 255; /* 0x80036560 */
    *(int8_t*)(reg_s2 + 9) = var_v0; /* 0x80036564 */
    var_v0 = -1; /* 0x80036568 */
    *(int8_t*)(reg_s2 + 5) = var_zero; /* 0x8003656c */
    *(int8_t*)(reg_s2 + 4) = var_s6; /* 0x80036570 */
    *(int16_t*)(reg_s2 + 52) = var_zero; /* 0x80036574 */
    *(int16_t*)(reg_s2 + 50) = var_zero; /* 0x80036578 */
    *(int16_t*)(reg_s2 + 48) = var_zero; /* 0x8003657c */
    *(int16_t*)(reg_s2 + 20) = var_zero; /* 0x80036580 */
    *(int8_t*)(reg_s2 + 3) = var_zero; /* 0x80036584 */
    *(int8_t*)(reg_s2 + 8) = var_zero; /* 0x80036588 */
    *(int16_t*)(reg_s2 + 18) = var_zero; /* 0x8003658c */
    *(int8_t*)(reg_s2 + 7) = var_zero; /* 0x80036590 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80036594 */
    *(int16_t*)(reg_s2 + 14) = var_zero; /* 0x80036598 */
    /* Branch beqz at 0x800365a0 */
    *(int32_t*)(reg_s2 + 28) = var_zero; /* 0x800365a4 */
    var_v0 = 0x8001 << 16; /* 0x800365a8 */
    var_v0 = var_v0 + 5324; /* 0x800365ac */
    var_v1 = var_v1 << 0x2; /* 0x800365b0 */
    var_v1 = var_v1 + var_v0; /* 0x800365b4 */
    var_v0 = *(int32_t*)(reg_v1 + 0); /* 0x800365b8 */
    var_s1 = var_s2 + 32; /* 0x800365c8 */
    var_a1 = var_s1; /* 0x800365cc */
    var_a2 = 128; /* 0x800365d0 */
    var_a3 = 28000; /* 0x800365d4 */
    var_a0 = *(uint8_t*)(reg_s2 + 0); /* 0x800365d8 */
    var_v0 = 29000; /* 0x800365dc */
    *(int32_t*)(stack + 16) = var_v0; /* 0x800365e0 */
    *(int32_t*)(stack + 20) = var_zero; /* 0x800365e4 */
    var_a0 = (uint32_t)var_a0 >> 0x2; /* 0x800365e8 */
    var_a0 = var_a0 & 0x8; /* 0x800365ec */
    func_0x80058254(); /* 0x800365f0 */
    var_v1 = 0x8000 << 16; /* 0x800365f8 */
    var_v1 = var_v1 | 0x40; /* 0x800365fc */
    var_a0 = 10; /* 0x80036600 */
    var_a2 = 171; /* 0x80036604 */
    var_v0 = 50; /* 0x80036608 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x8003660c */
    var_v0 = 64; /* 0x80036610 */
    var_a1 = *(uint8_t*)(reg_s2 + 0); /* 0x80036614 */
    var_s0 = var_s2 + 64; /* 0x80036618 */
    *(int8_t*)(reg_s2 + 80) = var_zero; /* 0x8003661c */
    *(int8_t*)(reg_s2 + 81) = var_zero; /* 0x80036620 */
    *(int8_t*)(reg_s2 + 6) = var_zero; /* 0x80036624 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80036628 */
    *(int32_t*)(reg_s2 + 24) = var_v1; /* 0x8003662c */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80036630 */
    var_v0 = *(int32_t*)(reg_s3 + 4); /* 0x80036634 */
    var_a3 = var_s1; /* 0x80036638 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x8003663c */
    func_0x80036484(); /* 0x80036640 */
    var_a0 = 10; /* 0x80036648 */
    var_a1 = *(uint8_t*)(reg_s2 + 0); /* 0x8003664c */
    var_a2 = 170; /* 0x80036650 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80036654 */
    var_v0 = *(int32_t*)(reg_s3 + 4); /* 0x80036658 */
    var_a3 = var_s1; /* 0x80036660 */
    var_a0 = var_s2; /* 0x80036664 */
    var_a1 = var_s4 << 0x3; /* 0x80036668 */
    var_a1 = var_a1 | 0x4; /* 0x8003666c */
    var_a2 = *(int32_t*)(reg_s3 + 4); /* 0x80036670 */
    func_0x800363ec(); /* 0x80036674 */
    var_v0 = 50; /* 0x8003667c */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80036684 */
    var_a0 = var_s2; /* 0x80036688 */
    var_a1 = var_s4 << 0x3; /* 0x8003668c */
    var_a1 = var_a1 | 0x3; /* 0x80036694 */
    var_a0 = var_s2; /* 0x80036698 */
    var_a1 = var_s4 << 0x3; /* 0x8003669c */
    var_a2 = *(int32_t*)(reg_s3 + 4); /* 0x800366a0 */
    var_v0 = *(int32_t*)(reg_s3 + 16); /* 0x800366a4 */
    var_a3 = *(int32_t*)(reg_s3 + 24); /* 0x800366a8 */
    func_0x800363b4(); /* 0x800366ac */
    var_v0 = *(uint16_t*)(reg_s3 + 8); /* 0x800366b4 */
    *(int16_t*)(reg_s2 + 80) = var_v0; /* 0x800366bc */
    var_v0 = *(uint16_t*)(reg_s3 + 12); /* 0x800366c0 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x800366c8 */
    var_v0 = *(uint16_t*)(reg_s3 + 20); /* 0x800366cc */
    *(int16_t*)(reg_s2 + 82) = var_v0; /* 0x800366d4 */
    var_v0 = *(int32_t*)(reg_s3 + 28); /* 0x800366d8 */
    var_v0 = var_s2; /* 0x80036704 */
    var_s1 = var_s2 + 32; /* 0x80036708 */
    var_a1 = var_s1; /* 0x8003670c */
    var_a2 = 128; /* 0x80036710 */
    var_a3 = 28000; /* 0x80036714 */
    var_a0 = *(uint8_t*)(reg_s2 + 0); /* 0x80036718 */
    var_v0 = 29000; /* 0x8003671c */
    *(int32_t*)(stack + 16) = var_v0; /* 0x80036720 */
    *(int32_t*)(stack + 20) = var_zero; /* 0x80036724 */
    var_a0 = (uint32_t)var_a0 >> 0x2; /* 0x80036728 */
    var_a0 = var_a0 & 0x8; /* 0x8003672c */
    func_0x80058254(); /* 0x80036730 */
    var_a1 = 0x8000 << 16; /* 0x80036738 */
    var_a1 = var_a1 | 0x40; /* 0x8003673c */
    var_a0 = 10; /* 0x80036740 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80036744 */
    var_a2 = 175; /* 0x80036748 */
    var_v1 = *(uint16_t*)(reg_s2 + 50); /* 0x8003676c */
    var_s0 = var_s2 + 64; /* 0x80036770 */
    *(int32_t*)(reg_s2 + 24) = var_a1; /* 0x80036774 */
    var_a1 = *(uint8_t*)(reg_s2 + 0); /* 0x80036778 */
    var_v0 = 50; /* 0x8003677c */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80036780 */
    var_v0 = 64; /* 0x80036784 */
    *(int8_t*)(reg_s2 + 80) = var_zero; /* 0x80036788 */
    *(int8_t*)(reg_s2 + 81) = var_zero; /* 0x8003678c */
    *(int8_t*)(reg_s2 + 6) = var_zero; /* 0x80036790 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80036794 */
    var_v1 = var_v1 + 2048; /* 0x80036798 */
    *(int16_t*)(reg_s2 + 50) = var_v1; /* 0x8003679c */
    *(int32_t*)(stack + 16) = var_s0; /* 0x800367a0 */
    var_v0 = *(int32_t*)(reg_s3 + 4); /* 0x800367a4 */
    var_a3 = var_s1; /* 0x800367a8 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x800367ac */
    func_0x80036484(); /* 0x800367b0 */
    var_a0 = 10; /* 0x800367b8 */
    var_a1 = *(uint8_t*)(reg_s2 + 0); /* 0x800367bc */
    var_a2 = 176; /* 0x800367c0 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x800367c4 */
    var_v0 = *(int32_t*)(reg_s3 + 4); /* 0x800367c8 */
    var_a3 = var_s1; /* 0x800367d0 */
    var_a0 = var_s2; /* 0x800367d4 */
    var_a1 = var_s4 << 0x3; /* 0x800367d8 */
    var_a2 = *(int32_t*)(reg_s3 + 4); /* 0x800367dc */
    func_0x800363b4(); /* 0x800367e0 */
    var_v0 = 50; /* 0x800367e8 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x800367ec */
    *(int8_t*)(reg_s2 + 80) = var_zero; /* 0x800367f0 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x800367f4 */
    *(int32_t*)(reg_s2 + 28) = var_v0; /* 0x800367fc */
    var_v0 = var_s2; /* 0x80036824 */
    var_a0 = var_s2; /* 0x80036828 */
    var_a1 = var_s4 << 0x3; /* 0x8003682c */
    var_a1 = var_a1 | 0x1; /* 0x80036830 */
    var_a2 = *(int32_t*)(reg_s3 + 4); /* 0x80036834 */
    func_0x800363ec(); /* 0x80036838 */
    var_v0 = 50; /* 0x80036840 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80036844 */
    *(int8_t*)(reg_s2 + 80) = var_zero; /* 0x80036848 */
    *(int8_t*)(reg_s2 + 81) = var_zero; /* 0x80036850 */
    var_a0 = var_s2; /* 0x80036854 */
    var_a1 = var_s4 << 0x3; /* 0x80036858 */
    var_a2 = *(int32_t*)(reg_s3 + 4); /* 0x8003685c */
    var_v0 = *(int32_t*)(reg_s3 + 16); /* 0x80036860 */
    var_a3 = *(int32_t*)(reg_s3 + 20); /* 0x80036864 */
    func_0x800363ec(); /* 0x80036868 */
    var_a0 = var_s2; /* 0x80036878 */
    var_a1 = var_s4 << 0x3; /* 0x8003687c */
    var_a2 = *(int32_t*)(reg_s3 + 4); /* 0x80036880 */
    var_v0 = *(int32_t*)(reg_s3 + 16); /* 0x80036884 */
    var_a3 = *(int32_t*)(reg_s3 + 20); /* 0x80036888 */
    func_0x800363ec(); /* 0x8003688c */
    var_a0 = var_s2; /* 0x8003689c */
    var_a1 = var_s4 << 0x3; /* 0x800368a0 */
    var_a2 = *(int32_t*)(reg_s3 + 4); /* 0x800368a4 */
    var_v0 = *(int32_t*)(reg_s3 + 16); /* 0x800368a8 */
    var_a3 = *(int32_t*)(reg_s3 + 20); /* 0x800368ac */
    func_0x800363b4(); /* 0x800368b0 */
    var_a0 = *(int16_t*)(reg_s2 + 56); /* 0x800368c0 */
    var_v0 = 16; /* 0x800368c4 */
    *(int8_t*)(reg_s2 + 80) = var_v0; /* 0x800368cc */
    var_a0 = var_a0 + 15; /* 0x800368d0 */
    var_v1 = *(int16_t*)(reg_s2 + 58); /* 0x800368d4 */
    var_v0 = var_a0 >> 0x4; /* 0x800368dc */
    var_a0 = *(int16_t*)(reg_s2 + 56); /* 0x800368e0 */
    var_v0 = 8; /* 0x800368e4 */
    *(int8_t*)(reg_s2 + 80) = var_v0; /* 0x800368ec */
    var_a0 = var_a0 + 15; /* 0x800368f0 */
    var_v1 = *(int16_t*)(reg_s2 + 58); /* 0x800368f4 */
    var_v0 = var_a0 >> 0x4; /* 0x800368f8 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80036900 */
    var_v1 = var_v1 + 15; /* 0x80036904 */
    var_v0 = var_v1 >> 0x4; /* 0x80036908 */
    var_v1 = 0x8000 << 16; /* 0x8003690c */
    var_v0 = var_v0 | var_v1; /* 0x80036910 */
    func_0x80078ac4(); /* 0x80036914 */
    var_v0 = var_v0 + 127; /* 0x80036924 */
    var_v0 = var_v0 >> 0x7; /* 0x80036928 */
    *(int16_t*)(reg_s2 + 82) = var_v0; /* 0x80036930 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80036934 */
    var_v0 = 15; /* 0x80036938 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x8003693c */
    var_v0 = var_v1 << 0x1; /* 0x80036940 */
    var_v0 = var_v0 + var_v1; /* 0x80036944 */
    var_v0 = var_v0 << 0x7; /* 0x80036948 */
    *(int8_t*)(reg_s2 + 80) = var_zero; /* 0x80036950 */
    var_v0 = var_v0 + 4095; /* 0x80036954 */
    var_v1 = *(int16_t*)(reg_s2 + 58); /* 0x80036958 */
    var_v0 = var_v0 >> 0xc; /* 0x8003695c */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80036960 */
    var_v0 = var_v1 << 0x1; /* 0x80036964 */
    var_v0 = var_v0 + var_v1; /* 0x80036968 */
    var_v0 = var_v0 << 0x7; /* 0x8003696c */
    var_v0 = var_v0 + 4095; /* 0x80036978 */
    var_v0 = var_v0 >> 0xc; /* 0x80036980 */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x80036984 */
    *(int8_t*)(reg_s2 + 80) = var_zero; /* 0x80036990 */
    var_v0 = var_v0 + 15; /* 0x80036994 */
    var_v1 = *(int16_t*)(reg_s2 + 58); /* 0x80036998 */
    var_v0 = var_v0 >> 0x4; /* 0x8003699c */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x800369a4 */
    var_v1 = var_v1 + 63; /* 0x800369a8 */
    var_v0 = var_v1 >> 0x6; /* 0x800369b0 */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x800369b4 */
    *(int8_t*)(reg_s2 + 80) = var_zero; /* 0x800369c0 */
    var_v0 = var_v0 + 15; /* 0x800369c4 */
    var_v1 = *(int16_t*)(reg_s2 + 58); /* 0x800369c8 */
    var_v0 = var_v0 >> 0x4; /* 0x800369cc */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x800369d4 */
    var_v1 = var_v1 + 255; /* 0x800369d8 */
    var_v0 = var_v1 >> 0x8; /* 0x800369e0 */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x800369e4 */
    *(int8_t*)(reg_s2 + 80) = var_zero; /* 0x800369f0 */
    var_v0 = var_v0 + 15; /* 0x800369f4 */
    var_v1 = *(int16_t*)(reg_s2 + 58); /* 0x800369f8 */
    var_v0 = var_v0 >> 0x4; /* 0x800369fc */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80036a04 */
    var_v1 = var_v1 + 15; /* 0x80036a08 */
    var_v0 = var_v1 >> 0x4; /* 0x80036a0c */
    var_v1 = 0x8000 << 16; /* 0x80036a10 */
    var_v0 = var_v0 | var_v1; /* 0x80036a14 */
    *(int32_t*)(reg_s2 + 24) = var_v0; /* 0x80036a18 */
    var_s0 = var_s2 + 32; /* 0x80036a1c */
    var_a1 = var_s0; /* 0x80036a20 */
    var_a2 = 128; /* 0x80036a24 */
    var_a3 = 28000; /* 0x80036a28 */
    var_a0 = *(uint8_t*)(reg_s2 + 0); /* 0x80036a2c */
    var_v0 = 29000; /* 0x80036a30 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x80036a34 */
    *(int32_t*)(stack + 20) = var_zero; /* 0x80036a38 */
    var_a0 = (uint32_t)var_a0 >> 0x2; /* 0x80036a3c */
    var_a0 = var_a0 & 0x8; /* 0x80036a40 */
    func_0x80058254(); /* 0x80036a44 */
    var_v0 = 50; /* 0x80036a4c */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80036a50 */
    var_v0 = 128; /* 0x80036a54 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80036a58 */
    var_v0 = var_s4 << 0x3; /* 0x80036a5c */
    *(int16_t*)(reg_s2 + 10) = var_v0; /* 0x80036a60 */
    var_v0 = 13; /* 0x80036a64 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80036a68 */
    var_v0 = 51; /* 0x80036a6c */
    *(int8_t*)(reg_s2 + 9) = var_v0; /* 0x80036a70 */
    var_v0 = 4096; /* 0x80036a74 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80036a78 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80036a7c */
    var_a0 = 10; /* 0x80036a80 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80036a84 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80036a88 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80036a8c */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80036a90 */
    var_a2 = 43; /* 0x80036a94 */
    var_a1 = *(uint8_t*)(reg_s2 + 0); /* 0x80036ab8 */
    var_v0 = var_s2 + 64; /* 0x80036abc */
    *(int32_t*)(stack + 16) = var_v0; /* 0x80036ac0 */
    var_v0 = *(int32_t*)(reg_s3 + 4); /* 0x80036ac4 */
    var_a3 = var_s0; /* 0x80036ac8 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x80036acc */
    func_0x80036484(); /* 0x80036ad0 */
    var_v0 = var_s2; /* 0x80036adc */
    var_a0 = var_s2; /* 0x80036ae0 */
    var_a1 = var_s4 << 0x3; /* 0x80036ae4 */
    var_a1 = var_a1 | 0x1; /* 0x80036ae8 */
    var_a2 = *(int32_t*)(reg_s3 + 4); /* 0x80036aec */
    func_0x800363ec(); /* 0x80036af0 */
    var_v0 = 50; /* 0x80036af8 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80036afc */
    *(int8_t*)(reg_s2 + 80) = var_zero; /* 0x80036b00 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80036b04 */
    *(int32_t*)(reg_s2 + 28) = var_v0; /* 0x80036b0c */
    var_v0 = *(int32_t*)(reg_s3 + 4); /* 0x80036b10 */
    var_v1 = 0x8000 << 16; /* 0x80036b14 */
    var_v0 = 50; /* 0x80036b38 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80036b3c */
    var_v0 = 128; /* 0x80036b40 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80036b44 */
    var_v0 = 51; /* 0x80036b48 */
    *(int8_t*)(reg_s2 + 9) = var_v0; /* 0x80036b4c */
    var_v0 = 4096; /* 0x80036b50 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80036b54 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80036b58 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80036b5c */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80036b60 */
    var_v0 = 32; /* 0x80036b64 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80036b68 */
    var_v0 = *(uint8_t*)(reg_s2 + 1); /* 0x80036b6c */
    var_v1 = var_v1 | 0x20; /* 0x80036b70 */
    *(int32_t*)(reg_s2 + 24) = var_v1; /* 0x80036b74 */
    var_v1 = 8; /* 0x80036b78 */
    *(int8_t*)(reg_s2 + 7) = var_zero; /* 0x80036b7c */
    *(int8_t*)(reg_s2 + 80) = var_v1; /* 0x80036b80 */
    var_v0 = var_v0 + -94; /* 0x80036b84 */
    *(int16_t*)(reg_s2 + 10) = var_v0; /* 0x80036b88 */
    var_v0 = *(uint16_t*)(reg_s3 + 8); /* 0x80036b8c */
    *(int16_t*)(reg_s2 + 82) = var_v0; /* 0x80036b94 */
    var_v0 = 96; /* 0x80036b98 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80036b9c */
    var_v0 = 128; /* 0x80036ba0 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80036ba4 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x80036ba8 */
    var_v0 = 15; /* 0x80036bac */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80036bb0 */
    var_v0 = 51; /* 0x80036bb4 */
    *(int8_t*)(reg_s2 + 9) = var_v0; /* 0x80036bb8 */
    var_v0 = 4096; /* 0x80036bbc */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80036bc0 */
    var_v1 = var_v1 + 16; /* 0x80036bc4 */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80036bc8 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80036bcc */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80036bd4 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80036bd8 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80036bdc */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80036be0 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80036c08 */
    var_v0 = var_v1 << 0x3; /* 0x80036c10 */
    var_v0 = var_v0 << 0x7; /* 0x80036c18 */
    var_v0 = var_v0 + 4095; /* 0x80036c24 */
    var_v0 = var_v0 >> 0xc; /* 0x80036c28 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80036c2c */
    var_v0 = var_v1 << 0x3; /* 0x80036c30 */
    var_v0 = var_v0 << 0x7; /* 0x80036c38 */
    var_v0 = var_v0 + 4095; /* 0x80036c44 */
    var_v0 = var_v0 >> 0xc; /* 0x80036c4c */
    var_v0 = 96; /* 0x80036c50 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80036c54 */
    var_v0 = 128; /* 0x80036c58 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80036c5c */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x80036c60 */
    var_v0 = 13; /* 0x80036c64 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80036c68 */
    var_v0 = 51; /* 0x80036c6c */
    *(int8_t*)(reg_s2 + 9) = var_v0; /* 0x80036c70 */
    var_v0 = 4096; /* 0x80036c74 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80036c78 */
    var_v1 = var_v1 + 16; /* 0x80036c7c */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80036c80 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80036c84 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80036c8c */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80036c90 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80036c94 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80036c98 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80036cc0 */
    var_v0 = var_v1 << 0x3; /* 0x80036cc8 */
    var_v0 = var_v0 << 0x7; /* 0x80036cd0 */
    var_v0 = var_v0 + 4095; /* 0x80036cdc */
    var_v0 = var_v0 >> 0xc; /* 0x80036ce0 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80036ce4 */
    var_v0 = var_v1 << 0x3; /* 0x80036ce8 */
    var_v0 = var_v0 << 0x7; /* 0x80036cf0 */
    var_v0 = var_v0 + 4095; /* 0x80036cfc */
    var_v0 = var_v0 >> 0xc; /* 0x80036d04 */
    var_v0 = 96; /* 0x80036d08 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80036d0c */
    var_v0 = 132; /* 0x80036d10 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80036d14 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x80036d18 */
    var_v0 = 13; /* 0x80036d1c */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80036d20 */
    var_v0 = 51; /* 0x80036d24 */
    *(int8_t*)(reg_s2 + 9) = var_v0; /* 0x80036d28 */
    var_v0 = 4096; /* 0x80036d2c */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80036d30 */
    var_v1 = var_v1 + 16; /* 0x80036d34 */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80036d38 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80036d3c */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80036d44 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80036d48 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80036d4c */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80036d50 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80036d78 */
    var_v0 = var_v1 << 0x3; /* 0x80036d80 */
    var_v0 = var_v0 << 0x7; /* 0x80036d88 */
    var_v0 = var_v0 + 4095; /* 0x80036d94 */
    var_v0 = var_v0 >> 0xc; /* 0x80036d98 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80036d9c */
    var_v0 = var_v1 << 0x3; /* 0x80036da0 */
    var_v0 = var_v0 << 0x7; /* 0x80036da8 */
    var_v0 = var_v0 + 4095; /* 0x80036db4 */
    var_v0 = var_v0 >> 0xc; /* 0x80036dbc */
    var_v1 = *(uint8_t*)(reg_s2 + 1); /* 0x80036dc0 */
    var_v0 = 5; /* 0x80036dc4 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80036dc8 */
    var_v0 = 135; /* 0x80036dcc */
    /* Branch bne at 0x80036dd0 */
    var_v0 = 64; /* 0x80036dd4 */
    var_v0 = 128; /* 0x80036dd8 */
    func_0x80078ac4(); /* 0x80036ddc */
    var_v1 = var_v0 << 0x1; /* 0x80036de4 */
    var_v1 = var_v1 + var_v0; /* 0x80036de8 */
    var_v1 = var_v1 + 32767; /* 0x80036df4 */
    var_v1 = (uint32_t)var_v1 >> 0xf; /* 0x80036df8 */
    var_v0 = var_v1 & 0xff; /* 0x80036dfc */
    /* Branch bnez at 0x80036e04 */
    var_v1 = 2; /* 0x80036e0c */
    var_a0 = *(uint8_t*)(reg_s2 + 1); /* 0x80036e10 */
    var_v0 = 96; /* 0x80036e14 */
    /* Branch bne at 0x80036e18 */
    var_a2 = 153; /* 0x80036e1c */
    var_v1 = var_v1 + 4; /* 0x80036e20 */
    /* Branch bne at 0x80036e24 */
    var_v0 = 121; /* 0x80036e28 */
    var_v1 = var_v1 + 3; /* 0x80036e2c */
    /* Branch bne at 0x80036e30 */
    var_a1 = 133; /* 0x80036e34 */
    var_v1 = var_v1 + 2; /* 0x80036e38 */
    /* Branch bne at 0x80036e3c */
    var_v0 = 163; /* 0x80036e40 */
    var_v1 = var_v1 + 4; /* 0x80036e44 */
    /* Branch bne at 0x80036e48 */
    var_v0 = var_v1 | 0x80; /* 0x80036e4c */
    var_v1 = var_v1 + 2; /* 0x80036e50 */
    var_v0 = var_v1 | 0x80; /* 0x80036e54 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80036e58 */
    var_v0 = *(uint8_t*)(reg_s3 + 8); /* 0x80036e5c */
    var_v1 = *(uint8_t*)(reg_s2 + 1); /* 0x80036e60 */
    var_v0 = var_v0 + 16; /* 0x80036e64 */
    *(int16_t*)(reg_s2 + 10) = var_v0; /* 0x80036e68 */
    var_v0 = 52; /* 0x80036e6c */
    /* Branch beq at 0x80036e70 */
    var_v0 = 143; /* 0x80036e74 */
    /* Branch beq at 0x80036e78 */
    var_v0 = 14; /* 0x80036e7c */
    /* Branch beq at 0x80036e80 */
    var_v0 = 75; /* 0x80036e84 */
    /* Branch beq at 0x80036e88 */
    var_v0 = 115; /* 0x80036e8c */
    /* Branch beq at 0x80036e90 */
    var_v0 = 14; /* 0x80036e94 */
    /* Branch bne at 0x80036e98 */
    var_v0 = 15; /* 0x80036e9c */
    var_v0 = 14; /* 0x80036ea0 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80036ea4 */
    var_v0 = 4096; /* 0x80036ea8 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80036eac */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80036eb0 */
    var_v1 = var_v0 << 0x10; /* 0x80036eb8 */
    var_v1 = var_v1 >> 0x10; /* 0x80036ebc */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80036ec0 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80036ec4 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80036ecc */
    var_v1 = var_v1 + 7; /* 0x80036ed0 */
    var_a0 = *(int16_t*)(reg_s2 + 56); /* 0x80036ed4 */
    var_v0 = var_v1 >> 0x3; /* 0x80036ed8 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80036ee0 */
    var_a0 = var_a0 + 7; /* 0x80036ee4 */
    var_v0 = var_a0 >> 0x3; /* 0x80036ee8 */
    var_v1 = 0x8000 << 16; /* 0x80036eec */
    var_v0 = var_v0 | var_v1; /* 0x80036ef0 */
    var_v1 = *(uint8_t*)(reg_s2 + 1); /* 0x80036ef4 */
    *(int32_t*)(reg_s2 + 24) = var_v0; /* 0x80036ef8 */
    var_v0 = 86; /* 0x80036efc */
    /* Branch beq at 0x80036f00 */
    var_v0 = 95; /* 0x80036f04 */
    /* Branch beq at 0x80036f08 */
    var_v0 = 121; /* 0x80036f0c */
    /* Branch beq at 0x80036f10 */
    var_v0 = 112; /* 0x80036f14 */
    /* Branch bne at 0x80036f18 */
    func_0x80078ac4(); /* 0x80036f20 */
    var_v0 = var_v0 >> 0x9; /* 0x80036f28 */
    var_v0 = var_v0 + -128; /* 0x80036f2c */
    *(int8_t*)(reg_s2 + 80) = var_v0; /* 0x80036f34 */
    var_v0 = 1; /* 0x80036f38 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80036f3c */
    var_v0 = 32; /* 0x80036f40 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80036f44 */
    var_v0 = 130; /* 0x80036f48 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80036f4c */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x80036f50 */
    var_v0 = 13; /* 0x80036f54 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80036f58 */
    var_v0 = 4096; /* 0x80036f5c */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80036f60 */
    var_v1 = var_v1 + 16; /* 0x80036f64 */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80036f68 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80036f6c */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80036f74 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80036f78 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80036f7c */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80036f80 */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x80036fa8 */
    var_v0 = var_v0 + 7; /* 0x80036fb8 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80036fbc */
    var_v0 = var_v0 >> 0x3; /* 0x80036fc0 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80036fc8 */
    var_v1 = var_v1 + 7; /* 0x80036fcc */
    var_v0 = var_v1 >> 0x3; /* 0x80036fd0 */
    var_v1 = 0x8000 << 16; /* 0x80036fd4 */
    var_v0 = var_v0 | var_v1; /* 0x80036fd8 */
    *(int32_t*)(reg_s2 + 24) = var_v0; /* 0x80036fdc */
    var_v0 = *(int32_t*)(reg_s3 + 16); /* 0x80036fe0 */
    *(int32_t*)(reg_s2 + 76) = var_v0; /* 0x80036fe8 */
    var_v0 = 1; /* 0x80036fec */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80036ff0 */
    var_v0 = 96; /* 0x80036ff4 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80036ff8 */
    var_v0 = 128; /* 0x80037000 */
    var_v0 = 1; /* 0x80037004 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037008 */
    var_v0 = 96; /* 0x8003700c */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80037010 */
    var_v0 = 129; /* 0x80037014 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037018 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x8003701c */
    var_v0 = 13; /* 0x80037020 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80037024 */
    var_v0 = 4096; /* 0x80037028 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x8003702c */
    var_v1 = var_v1 + 16; /* 0x80037030 */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80037034 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80037038 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80037040 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80037044 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80037048 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x8003704c */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x80037074 */
    var_v0 = var_v0 + 7; /* 0x80037084 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80037088 */
    var_v0 = var_v0 >> 0x3; /* 0x8003708c */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80037094 */
    var_v1 = var_v1 + 7; /* 0x80037098 */
    var_v0 = var_v1 >> 0x3; /* 0x8003709c */
    var_v1 = 0x8000 << 16; /* 0x800370a0 */
    var_v0 = var_v0 | var_v1; /* 0x800370a4 */
    *(int32_t*)(reg_s2 + 24) = var_v0; /* 0x800370a8 */
    var_v0 = -896; /* 0x800370ac */
    *(int16_t*)(reg_s2 + 80) = var_v0; /* 0x800370b0 */
    var_v0 = *(int32_t*)(reg_s3 + 16); /* 0x800370b4 */
    *(int32_t*)(reg_s2 + 28) = var_v0; /* 0x800370bc */
    var_v0 = 1; /* 0x800370c0 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x800370c4 */
    var_v0 = 36; /* 0x800370c8 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x800370cc */
    var_v0 = 130; /* 0x800370d0 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x800370d4 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x800370d8 */
    var_v0 = 13; /* 0x800370dc */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x800370e0 */
    var_v0 = 4096; /* 0x800370e4 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x800370e8 */
    var_v1 = var_v1 + 16; /* 0x800370ec */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x800370f0 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x800370f4 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x800370fc */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80037100 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80037104 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80037108 */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x80037130 */
    var_v0 = var_v0 + 7; /* 0x80037140 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80037144 */
    var_v0 = var_v0 >> 0x3; /* 0x80037148 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80037150 */
    var_v1 = var_v1 + 7; /* 0x80037154 */
    var_v0 = var_v1 >> 0x3; /* 0x80037158 */
    var_v1 = 0x8000 << 16; /* 0x8003715c */
    var_v0 = var_v0 | var_v1; /* 0x80037160 */
    *(int32_t*)(reg_s2 + 24) = var_v0; /* 0x80037164 */
    var_v0 = *(int32_t*)(reg_s3 + 16); /* 0x80037168 */
    *(int32_t*)(reg_s2 + 76) = var_v0; /* 0x80037170 */
    var_v0 = *(int32_t*)(reg_v0 + 168); /* 0x80037174 */
    var_v1 = *(int32_t*)(reg_s2 + 76); /* 0x80037178 */
    var_v0 = *(uint16_t*)(reg_v0 + 28); /* 0x8003717c */
    *(int16_t*)(reg_s2 + 80) = var_v0; /* 0x80037184 */
    var_v0 = *(int32_t*)(reg_v1 + 168); /* 0x80037188 */
    var_v0 = *(uint16_t*)(reg_v0 + 34); /* 0x80037190 */
    *(int16_t*)(reg_s2 + 82) = var_v0; /* 0x80037198 */
    var_v0 = 5; /* 0x8003719c */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x800371a0 */
    var_v0 = 32; /* 0x800371a4 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x800371a8 */
    var_v0 = 128; /* 0x800371ac */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x800371b0 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x800371b4 */
    var_v0 = 13; /* 0x800371b8 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x800371bc */
    var_v0 = 4096; /* 0x800371c0 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x800371c4 */
    var_v1 = var_v1 + 16; /* 0x800371c8 */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x800371cc */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x800371d0 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x800371d8 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x800371dc */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x800371e0 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x800371e4 */
    var_v1 = *(uint16_t*)(reg_s2 + 56); /* 0x8003720c */
    var_v0 = -896; /* 0x80037210 */
    *(int16_t*)(reg_s2 + 80) = var_v0; /* 0x80037214 */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x80037218 */
    *(int16_t*)(reg_s2 + 12) = var_v1; /* 0x8003721c */
    var_v1 = 0x8000 << 16; /* 0x80037220 */
    var_v0 = var_v0 | var_v1; /* 0x80037224 */
    *(int32_t*)(reg_s2 + 24) = var_v0; /* 0x80037228 */
    var_v0 = *(int32_t*)(reg_s3 + 16); /* 0x8003722c */
    *(int32_t*)(reg_s2 + 28) = var_v0; /* 0x80037234 */
    var_v0 = *(int32_t*)(reg_v0 + 76); /* 0x80037238 */
    *(int32_t*)(reg_s2 + 76) = var_v0; /* 0x80037240 */
    var_v0 = *(int32_t*)(reg_v0 + 120); /* 0x80037244 */
    *(int16_t*)(reg_s2 + 50) = var_zero; /* 0x80037248 */
    *(int16_t*)(reg_s2 + 64) = var_zero; /* 0x8003724c */
    *(int16_t*)(reg_s2 + 66) = var_zero; /* 0x80037250 */
    *(int16_t*)(reg_s2 + 68) = var_zero; /* 0x80037254 */
    *(int32_t*)(reg_s2 + 36) = var_v0; /* 0x8003725c */
    var_v0 = 5; /* 0x80037260 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037264 */
    var_v0 = 32; /* 0x80037268 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x8003726c */
    var_v0 = 128; /* 0x80037270 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037274 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x80037278 */
    var_v0 = 13; /* 0x8003727c */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80037280 */
    var_v0 = 4096; /* 0x80037284 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80037288 */
    var_v1 = var_v1 + 16; /* 0x8003728c */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80037290 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80037294 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x8003729c */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x800372a0 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x800372a4 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x800372a8 */
    var_v1 = *(uint16_t*)(reg_s2 + 56); /* 0x800372d0 */
    var_v0 = -896; /* 0x800372d4 */
    *(int16_t*)(reg_s2 + 80) = var_v0; /* 0x800372d8 */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x800372dc */
    *(int16_t*)(reg_s2 + 12) = var_v1; /* 0x800372e0 */
    var_v1 = 0x8000 << 16; /* 0x800372e4 */
    var_v0 = var_v0 | var_v1; /* 0x800372e8 */
    *(int32_t*)(reg_s2 + 24) = var_v0; /* 0x800372ec */
    var_v0 = *(int32_t*)(reg_s3 + 16); /* 0x800372f0 */
    *(int32_t*)(reg_s2 + 28) = var_v0; /* 0x800372f8 */
    var_v0 = *(int32_t*)(reg_v0 + 76); /* 0x800372fc */
    *(int32_t*)(reg_s2 + 76) = var_v0; /* 0x80037304 */
    var_v0 = 0x801a << 16; /* 0x80037308 */
    var_v0 = *(int32_t*)(reg_v0 + -28300); /* 0x8003730c */
    *(int16_t*)(reg_s2 + 50) = var_zero; /* 0x80037310 */
    *(int16_t*)(reg_s2 + 64) = var_zero; /* 0x80037314 */
    *(int16_t*)(reg_s2 + 66) = var_zero; /* 0x80037318 */
    *(int16_t*)(reg_s2 + 68) = var_zero; /* 0x8003731c */
    var_v0 = var_v0 + 1600; /* 0x80037320 */
    *(int32_t*)(reg_s2 + 36) = var_v0; /* 0x80037328 */
    var_v0 = 1; /* 0x8003732c */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037330 */
    var_v0 = 32; /* 0x80037334 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80037338 */
    var_v0 = 129; /* 0x8003733c */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037340 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x80037344 */
    var_v0 = 13; /* 0x80037348 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x8003734c */
    var_v0 = 4096; /* 0x80037350 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80037354 */
    var_v1 = var_v1 + 16; /* 0x80037358 */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x8003735c */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80037360 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80037368 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x8003736c */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80037370 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80037374 */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x8003739c */
    var_v0 = var_v0 + 7; /* 0x800373ac */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x800373b0 */
    var_v0 = var_v0 >> 0x3; /* 0x800373b4 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x800373bc */
    var_v1 = var_v1 + 7; /* 0x800373c0 */
    var_v0 = var_v1 >> 0x3; /* 0x800373c4 */
    var_v1 = 0x8000 << 16; /* 0x800373c8 */
    var_v0 = var_v0 | var_v1; /* 0x800373cc */
    *(int32_t*)(reg_s2 + 24) = var_v0; /* 0x800373d0 */
    var_v0 = -896; /* 0x800373d4 */
    *(int16_t*)(reg_s2 + 80) = var_v0; /* 0x800373d8 */
    var_v0 = *(int32_t*)(reg_s3 + 16); /* 0x800373dc */
    *(int32_t*)(reg_s2 + 28) = var_v0; /* 0x800373e4 */
    var_v0 = *(int32_t*)(reg_v0 + 76); /* 0x800373e8 */
    *(int32_t*)(reg_s2 + 76) = var_v0; /* 0x800373f0 */
    var_a0 = var_s2; /* 0x800373f4 */
    var_a2 = *(int32_t*)(reg_s3 + 4); /* 0x800373f8 */
    var_a1 = *(int32_t*)(reg_s3 + 16); /* 0x800373fc */
    var_a3 = *(int32_t*)(reg_s3 + 20); /* 0x80037400 */
    var_a1 = var_a1 + 16; /* 0x80037404 */
    func_0x800363ec(); /* 0x80037408 */
    var_v0 = 131; /* 0x80037410 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037414 */
    var_v0 = *(uint16_t*)(reg_s3 + 8); /* 0x80037418 */
    *(int16_t*)(reg_s2 + 80) = var_v0; /* 0x80037420 */
    var_v0 = *(uint16_t*)(reg_s3 + 12); /* 0x80037424 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x8003742c */
    var_v0 = 1; /* 0x80037430 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037434 */
    var_v0 = 32; /* 0x8003743c */
    var_v1 = *(uint8_t*)(reg_s2 + 1); /* 0x80037440 */
    var_v0 = 1; /* 0x80037444 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037448 */
    var_v0 = 64; /* 0x8003744c */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80037450 */
    var_v0 = 131; /* 0x80037454 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037458 */
    var_v0 = 164; /* 0x8003745c */
    /* Branch bne at 0x80037460 */
    var_v0 = 133; /* 0x80037464 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037468 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x8003746c */
    var_v0 = 13; /* 0x80037470 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80037474 */
    var_v0 = 4096; /* 0x80037478 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x8003747c */
    var_v1 = var_v1 + 16; /* 0x80037480 */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80037484 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80037488 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80037490 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80037494 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80037498 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x8003749c */
    var_v0 = *(uint16_t*)(reg_s2 + 56); /* 0x800374c4 */
    var_a0 = *(uint16_t*)(reg_s2 + 56); /* 0x800374c8 */
    var_v0 = var_v0 << 0x10; /* 0x800374cc */
    var_v1 = var_v0 >> 0x10; /* 0x800374d0 */
    var_v0 = (uint32_t)var_v0 >> 0x1f; /* 0x800374d4 */
    var_v1 = var_v1 + var_v0; /* 0x800374d8 */
    var_v1 = var_v1 >> 0x1; /* 0x800374dc */
    var_a0 = var_a0 << 0x10; /* 0x800374e0 */
    var_v0 = var_a0 >> 0x10; /* 0x800374e4 */
    var_a0 = (uint32_t)var_a0 >> 0x1f; /* 0x800374e8 */
    var_v0 = var_v0 + var_a0; /* 0x800374ec */
    var_v0 = var_v0 >> 0x1; /* 0x800374f0 */
    *(int16_t*)(reg_s2 + 12) = var_v1; /* 0x800374f8 */
    var_v0 = 16; /* 0x800374fc */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80037500 */
    *(int8_t*)(reg_s2 + 6) = var_zero; /* 0x80037504 */
    var_v0 = *(int32_t*)(reg_s3 + 4); /* 0x80037508 */
    var_v1 = var_v0; /* 0x80037510 */
    *(int32_t*)(reg_s2 + 76) = var_v0; /* 0x80037514 */
    var_v0 = 4096; /* 0x80037518 */
    *(int16_t*)(reg_v1 + 36) = var_v0; /* 0x8003751c */
    var_v0 = 13; /* 0x80037520 */
    *(int8_t*)(reg_v1 + 30) = var_v0; /* 0x80037524 */
    var_v0 = 4095; /* 0x80037528 */
    *(int16_t*)(reg_v1 + 54) = var_v0; /* 0x80037530 */
    var_v0 = 5; /* 0x80037534 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037538 */
    var_v0 = 16; /* 0x8003753c */
    func_0x80078ac4(); /* 0x80037540 */
    var_v1 = var_v0 << 0x1; /* 0x80037548 */
    var_v1 = var_v1 + var_v0; /* 0x8003754c */
    var_v1 = var_v1 + 32767; /* 0x80037558 */
    var_v1 = (uint32_t)var_v1 >> 0xf; /* 0x8003755c */
    var_v0 = var_v1 & 0xff; /* 0x80037560 */
    /* Branch bnez at 0x80037568 */
    var_v1 = 2; /* 0x80037570 */
    var_v0 = var_v1 + 3; /* 0x80037574 */
    var_v0 = var_v0 | 0x80; /* 0x8003757c */
    var_v0 = 1; /* 0x80037580 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037584 */
    var_v0 = 64; /* 0x80037588 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x8003758c */
    var_v0 = 131; /* 0x80037590 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037594 */
    var_v1 = *(uint8_t*)(reg_s3 + 8); /* 0x80037598 */
    var_v0 = 15; /* 0x8003759c */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x800375a0 */
    var_v0 = 4096; /* 0x800375a4 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x800375a8 */
    var_v1 = var_v1 + 16; /* 0x800375ac */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x800375b0 */
    var_a0 = *(uint16_t*)(reg_s3 + 4); /* 0x800375b4 */
    var_v1 = var_a0 << 0x10; /* 0x800375bc */
    var_v1 = var_v1 >> 0x10; /* 0x800375c0 */
    var_v0 = var_v1 << 0x1; /* 0x800375c4 */
    var_v0 = var_v0 + var_v1; /* 0x800375c8 */
    var_v0 = var_v0 << 0x9; /* 0x800375cc */
    *(int16_t*)(reg_s2 + 60) = var_a0; /* 0x800375d0 */
    *(int16_t*)(reg_s2 + 58) = var_a0; /* 0x800375d4 */
    *(int16_t*)(reg_s2 + 56) = var_a0; /* 0x800375dc */
    var_v0 = var_v0 + 4095; /* 0x800375e0 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x800375e4 */
    var_v0 = var_v0 >> 0xc; /* 0x800375e8 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x800375ec */
    var_v0 = var_v1 << 0x1; /* 0x800375f0 */
    var_v0 = var_v0 + var_v1; /* 0x800375f4 */
    var_v0 = var_v0 << 0x9; /* 0x800375f8 */
    var_a0 = 10; /* 0x80037600 */
    var_v0 = var_v0 + 4095; /* 0x80037604 */
    var_v0 = var_v0 >> 0xc; /* 0x80037608 */
    var_v1 = 0x8000 << 16; /* 0x8003760c */
    var_a1 = *(uint8_t*)(reg_s2 + 0); /* 0x80037610 */
    var_v0 = var_v0 | var_v1; /* 0x80037614 */
    *(int32_t*)(reg_s2 + 24) = var_v0; /* 0x80037618 */
    var_v0 = var_s2 + 64; /* 0x8003761c */
    *(int32_t*)(stack + 16) = var_v0; /* 0x80037620 */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x80037624 */
    var_a2 = 214; /* 0x80037628 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003762c */
    var_v0 = *(int16_t*)(reg_s2 + 10); /* 0x80037630 */
    var_a3 = var_s2 + 32; /* 0x80037638 */
    var_v0 = 5; /* 0x8003763c */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037640 */
    var_v0 = 64; /* 0x80037644 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80037648 */
    var_v0 = 128; /* 0x8003764c */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037650 */
    var_v1 = *(uint8_t*)(reg_s3 + 8); /* 0x80037654 */
    var_v0 = 15; /* 0x8003765c */
    var_v0 = 5; /* 0x80037660 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037664 */
    var_v0 = 16; /* 0x80037668 */
    func_0x80078ac4(); /* 0x8003766c */
    var_v1 = var_v0 << 0x1; /* 0x80037674 */
    var_v1 = var_v1 + var_v0; /* 0x80037678 */
    var_v1 = var_v1 + 32767; /* 0x80037684 */
    var_v1 = (uint32_t)var_v1 >> 0xf; /* 0x80037688 */
    var_v0 = var_v1 & 0xff; /* 0x8003768c */
    /* Branch bnez at 0x80037694 */
    var_v0 = var_v1 | 0x80; /* 0x80037698 */
    var_v1 = 2; /* 0x8003769c */
    var_v0 = var_v1 | 0x80; /* 0x800376a0 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x800376a4 */
    var_v1 = *(uint8_t*)(reg_s3 + 8); /* 0x800376a8 */
    var_v0 = 15; /* 0x800376ac */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x800376b0 */
    var_v0 = 4096; /* 0x800376b4 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x800376b8 */
    var_v1 = var_v1 + 16; /* 0x800376bc */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x800376c0 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x800376c4 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x800376cc */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x800376d0 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x800376d4 */
    func_0x80078ac4(); /* 0x800376d8 */
    var_v0 = var_v0 >> 0xb; /* 0x800376e0 */
    var_v0 = var_v0 + 16; /* 0x800376e4 */
    *(int8_t*)(reg_s2 + 80) = var_v0; /* 0x800376ec */
    var_v0 = 1; /* 0x800376f0 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x800376f4 */
    var_v0 = 64; /* 0x800376f8 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x800376fc */
    var_v0 = 134; /* 0x80037700 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037704 */
    var_v1 = *(uint8_t*)(reg_s3 + 8); /* 0x80037708 */
    var_v0 = 15; /* 0x8003770c */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80037710 */
    var_v0 = 4096; /* 0x80037714 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80037718 */
    var_v1 = var_v1 + 16; /* 0x8003771c */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80037720 */
    var_a0 = *(uint16_t*)(reg_s3 + 4); /* 0x80037724 */
    var_v1 = var_a0 << 0x10; /* 0x8003772c */
    var_v1 = var_v1 >> 0x10; /* 0x80037730 */
    var_v0 = var_v1 << 0x1; /* 0x80037734 */
    var_v0 = var_v0 + var_v1; /* 0x80037738 */
    var_v0 = var_v0 << 0x9; /* 0x8003773c */
    *(int16_t*)(reg_s2 + 60) = var_a0; /* 0x80037740 */
    *(int16_t*)(reg_s2 + 58) = var_a0; /* 0x80037744 */
    *(int16_t*)(reg_s2 + 56) = var_a0; /* 0x8003774c */
    var_v0 = var_v0 + 4095; /* 0x80037750 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80037754 */
    var_v0 = var_v0 >> 0xc; /* 0x80037758 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x8003775c */
    var_v0 = var_v1 << 0x1; /* 0x80037760 */
    var_v0 = var_v0 + var_v1; /* 0x80037764 */
    var_v0 = var_v0 << 0x9; /* 0x80037768 */
    var_v0 = var_v0 + 4095; /* 0x80037774 */
    var_v0 = var_v0 >> 0xc; /* 0x8003777c */
    var_v0 = 1; /* 0x80037780 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037784 */
    var_v0 = 64; /* 0x80037788 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x8003778c */
    var_v0 = 131; /* 0x80037790 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037794 */
    var_v1 = *(uint8_t*)(reg_s3 + 8); /* 0x80037798 */
    var_v0 = 15; /* 0x8003779c */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x800377a0 */
    var_v0 = 4096; /* 0x800377a4 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x800377a8 */
    var_v1 = var_v1 + 16; /* 0x800377ac */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x800377b0 */
    var_a0 = *(uint16_t*)(reg_s3 + 4); /* 0x800377b4 */
    var_v1 = var_a0 << 0x10; /* 0x800377bc */
    var_v1 = var_v1 >> 0x10; /* 0x800377c0 */
    var_v0 = var_v1 << 0x1; /* 0x800377c4 */
    var_v0 = var_v0 + var_v1; /* 0x800377c8 */
    var_v0 = var_v0 << 0x9; /* 0x800377cc */
    *(int16_t*)(reg_s2 + 60) = var_a0; /* 0x800377d0 */
    *(int16_t*)(reg_s2 + 58) = var_a0; /* 0x800377d4 */
    *(int16_t*)(reg_s2 + 56) = var_a0; /* 0x800377dc */
    var_v0 = var_v0 + 4095; /* 0x800377e0 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x800377e4 */
    var_v0 = var_v0 >> 0xc; /* 0x800377e8 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x800377ec */
    var_v0 = var_v1 << 0x1; /* 0x800377f0 */
    var_v0 = var_v0 + var_v1; /* 0x800377f4 */
    var_v0 = var_v0 << 0x9; /* 0x800377f8 */
    var_v0 = var_v0 + 4095; /* 0x80037804 */
    var_v0 = var_v0 >> 0xc; /* 0x8003780c */
    var_v0 = 1; /* 0x80037810 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037814 */
    var_v0 = 64; /* 0x80037818 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x8003781c */
    var_v0 = 132; /* 0x80037820 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037824 */
    var_v1 = *(uint8_t*)(reg_s3 + 8); /* 0x80037828 */
    var_v0 = 15; /* 0x8003782c */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80037830 */
    var_v0 = 4096; /* 0x80037834 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80037838 */
    var_v1 = var_v1 + 16; /* 0x8003783c */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80037840 */
    var_a0 = *(uint16_t*)(reg_s3 + 4); /* 0x80037844 */
    var_v1 = var_a0 << 0x10; /* 0x8003784c */
    var_v1 = var_v1 >> 0x10; /* 0x80037850 */
    var_v0 = var_v1 << 0x1; /* 0x80037854 */
    var_v0 = var_v0 + var_v1; /* 0x80037858 */
    var_v0 = var_v0 << 0x9; /* 0x8003785c */
    *(int16_t*)(reg_s2 + 60) = var_a0; /* 0x80037860 */
    *(int16_t*)(reg_s2 + 58) = var_a0; /* 0x80037864 */
    *(int16_t*)(reg_s2 + 56) = var_a0; /* 0x8003786c */
    var_v0 = var_v0 + 4095; /* 0x80037870 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80037874 */
    var_v0 = var_v0 >> 0xc; /* 0x80037878 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x8003787c */
    var_v0 = var_v1 << 0x1; /* 0x80037880 */
    var_v0 = var_v0 + var_v1; /* 0x80037884 */
    var_v0 = var_v0 << 0x9; /* 0x80037888 */
    var_v0 = var_v0 + 4095; /* 0x80037894 */
    var_v0 = var_v0 >> 0xc; /* 0x8003789c */
    var_v0 = 5; /* 0x800378a0 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x800378a4 */
    var_v0 = 64; /* 0x800378a8 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x800378ac */
    var_v0 = 128; /* 0x800378b0 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x800378b4 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x800378b8 */
    var_v0 = 13; /* 0x800378bc */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x800378c0 */
    var_v0 = 4096; /* 0x800378c4 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x800378c8 */
    var_v1 = var_v1 + 16; /* 0x800378cc */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x800378d0 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x800378d4 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x800378dc */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x800378e0 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x800378e4 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x800378e8 */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x80037910 */
    *(int16_t*)(reg_s2 + 48) = var_zero; /* 0x80037914 */
    *(int16_t*)(reg_s2 + 50) = var_zero; /* 0x80037918 */
    *(int16_t*)(reg_s2 + 52) = var_zero; /* 0x80037920 */
    var_v0 = 1; /* 0x80037924 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037928 */
    var_v0 = 64; /* 0x8003792c */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80037930 */
    var_v0 = 132; /* 0x80037934 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037938 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x8003793c */
    var_v0 = 128; /* 0x80037940 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80037944 */
    var_v0 = 4096; /* 0x8003794c */
    var_v0 = 1; /* 0x80037950 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037954 */
    var_v0 = 64; /* 0x80037958 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x8003795c */
    var_v0 = 132; /* 0x80037960 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037964 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x80037968 */
    var_v0 = 13; /* 0x8003796c */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80037970 */
    var_v0 = 4096; /* 0x80037974 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80037978 */
    var_v1 = var_v1 + 16; /* 0x8003797c */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80037980 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80037984 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x8003798c */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80037990 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80037994 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80037998 */
    var_v0 = *(uint16_t*)(reg_s2 + 56); /* 0x800379c0 */
    var_a0 = *(uint16_t*)(reg_s2 + 56); /* 0x800379c4 */
    var_v0 = var_v0 << 0x10; /* 0x800379c8 */
    var_v1 = var_v0 >> 0x10; /* 0x800379cc */
    var_v0 = (uint32_t)var_v0 >> 0x1f; /* 0x800379d0 */
    var_v1 = var_v1 + var_v0; /* 0x800379d4 */
    var_v1 = var_v1 >> 0x1; /* 0x800379d8 */
    var_a0 = var_a0 << 0x10; /* 0x800379dc */
    var_v0 = var_a0 >> 0x10; /* 0x800379e0 */
    var_a0 = (uint32_t)var_a0 >> 0x1f; /* 0x800379e4 */
    var_v0 = var_v0 + var_a0; /* 0x800379e8 */
    var_v0 = var_v0 >> 0x1; /* 0x800379ec */
    *(int16_t*)(reg_s2 + 12) = var_v1; /* 0x800379f4 */
    var_v0 = 1; /* 0x800379f8 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x800379fc */
    var_v0 = 64; /* 0x80037a00 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80037a04 */
    var_v0 = 129; /* 0x80037a08 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037a0c */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x80037a10 */
    var_v0 = 13; /* 0x80037a14 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80037a18 */
    var_v0 = 4096; /* 0x80037a1c */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80037a20 */
    var_v1 = var_v1 + 16; /* 0x80037a24 */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80037a2c */
    var_v1 = *(uint8_t*)(reg_s2 + 1); /* 0x80037a30 */
    var_v0 = 1; /* 0x80037a34 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037a38 */
    var_v0 = 64; /* 0x80037a3c */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80037a40 */
    var_v0 = 128; /* 0x80037a44 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037a48 */
    var_v0 = 168; /* 0x80037a4c */
    /* Branch bne at 0x80037a50 */
    var_v0 = 132; /* 0x80037a54 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037a58 */
    var_v0 = *(uint8_t*)(reg_s2 + 1); /* 0x80037a5c */
    var_a0 = 64; /* 0x80037a60 */
    /* Branch bne at 0x80037a64 */
    var_v0 = 132; /* 0x80037a68 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037a6c */
    var_v0 = *(uint8_t*)(reg_s3 + 12); /* 0x80037a70 */
    var_v1 = *(uint8_t*)(reg_s2 + 1); /* 0x80037a74 */
    var_v0 = var_v0 + 16; /* 0x80037a78 */
    /* Branch bne at 0x80037a7c */
    *(int16_t*)(reg_s2 + 10) = var_v0; /* 0x80037a80 */
    var_v0 = 14; /* 0x80037a88 */
    var_v0 = 13; /* 0x80037a8c */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80037a90 */
    var_v0 = 4096; /* 0x80037a94 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80037a98 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80037a9c */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80037aa4 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80037aa8 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80037aac */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80037ab0 */
    var_v0 = *(uint16_t*)(reg_s2 + 56); /* 0x80037ad8 */
    var_a0 = *(uint16_t*)(reg_s2 + 58); /* 0x80037adc */
    var_v0 = var_v0 << 0x10; /* 0x80037ae0 */
    var_v1 = var_v0 >> 0x10; /* 0x80037ae4 */
    var_v0 = (uint32_t)var_v0 >> 0x1f; /* 0x80037ae8 */
    var_v1 = var_v1 + var_v0; /* 0x80037aec */
    var_v1 = var_v1 >> 0x1; /* 0x80037af0 */
    var_a0 = var_a0 << 0x10; /* 0x80037af4 */
    var_v0 = var_a0 >> 0x10; /* 0x80037af8 */
    var_a0 = (uint32_t)var_a0 >> 0x1f; /* 0x80037afc */
    var_v0 = var_v0 + var_a0; /* 0x80037b00 */
    var_v0 = var_v0 >> 0x1; /* 0x80037b04 */
    *(int16_t*)(reg_s2 + 12) = var_v1; /* 0x80037b08 */
    *(int32_t*)(reg_s2 + 24) = var_v0; /* 0x80037b10 */
    var_v0 = 1; /* 0x80037b14 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037b18 */
    var_v0 = 64; /* 0x80037b1c */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80037b20 */
    var_v0 = 128; /* 0x80037b24 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037b28 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x80037b2c */
    var_v0 = 4096; /* 0x80037b30 */
    *(int8_t*)(reg_s2 + 7) = var_zero; /* 0x80037b34 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80037b38 */
    var_v1 = var_v1 + 16; /* 0x80037b3c */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80037b40 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80037b44 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80037b4c */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80037b50 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80037b54 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80037b58 */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x80037b80 */
    var_v0 = var_v0 + 7; /* 0x80037b90 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80037b94 */
    var_v0 = var_v0 >> 0x3; /* 0x80037b98 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80037ba0 */
    var_v1 = var_v1 + 7; /* 0x80037ba4 */
    var_v0 = var_v1 >> 0x3; /* 0x80037ba8 */
    var_v1 = 0x8000 << 16; /* 0x80037bac */
    var_v0 = var_v0 | var_v1; /* 0x80037bb0 */
    *(int32_t*)(reg_s2 + 24) = var_v0; /* 0x80037bb8 */
    var_v0 = 1; /* 0x80037bbc */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037bc0 */
    var_v0 = 64; /* 0x80037bc4 */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80037bc8 */
    var_v0 = 128; /* 0x80037bcc */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037bd0 */
    var_v1 = *(uint8_t*)(reg_s3 + 12); /* 0x80037bd4 */
    var_v0 = 13; /* 0x80037bd8 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80037bdc */
    var_v0 = 4096; /* 0x80037be0 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80037be4 */
    var_v1 = var_v1 + 16; /* 0x80037be8 */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80037bec */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80037bf0 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80037bf8 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80037bfc */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80037c00 */
    var_v0 = *(int32_t*)(reg_s3 + 8); /* 0x80037c04 */
    var_v0 = *(uint16_t*)(reg_s2 + 56); /* 0x80037c2c */
    var_v1 = 0x8000 << 16; /* 0x80037c30 */
    *(int16_t*)(reg_s2 + 12) = var_v0; /* 0x80037c34 */
    var_v0 = *(int16_t*)(reg_s2 + 56); /* 0x80037c38 */
    var_a0 = *(int16_t*)(reg_s2 + 52); /* 0x80037c3c */
    var_v0 = var_v0 | var_v1; /* 0x80037c40 */
    func_0x800744c4(); /* 0x80037c44 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80037c4c */
    var_v1 = var_v1 + 4095; /* 0x80037c64 */
    var_v0 = *(int32_t*)(reg_s2 + 32); /* 0x80037c68 */
    var_v1 = var_v1 >> 0xc; /* 0x80037c6c */
    var_v0 = var_v0 + var_v1; /* 0x80037c70 */
    *(int32_t*)(stack + 32) = var_v0; /* 0x80037c74 */
    var_a0 = *(int16_t*)(reg_s2 + 52); /* 0x80037c78 */
    func_0x800743f4(); /* 0x80037c7c */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80037c84 */
    var_v1 = var_v1 + 4095; /* 0x80037c9c */
    var_v0 = *(int32_t*)(reg_s2 + 36); /* 0x80037ca0 */
    var_v1 = var_v1 >> 0xc; /* 0x80037ca4 */
    var_v0 = var_v0 + var_v1; /* 0x80037ca8 */
    *(int32_t*)(stack + 36) = var_v0; /* 0x80037cac */
    var_a0 = *(int16_t*)(reg_s2 + 52); /* 0x80037cb0 */
    func_0x800744c4(); /* 0x80037cb4 */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80037cbc */
    var_v1 = var_v1 + 4095; /* 0x80037cd4 */
    var_v0 = *(int32_t*)(reg_s2 + 32); /* 0x80037cd8 */
    var_v1 = var_v1 >> 0xc; /* 0x80037cdc */
    var_v0 = var_v0 + var_v1; /* 0x80037ce0 */
    *(int32_t*)(stack + 48) = var_v0; /* 0x80037ce4 */
    var_a0 = *(int16_t*)(reg_s2 + 52); /* 0x80037ce8 */
    func_0x800743f4(); /* 0x80037cec */
    var_v1 = *(int16_t*)(reg_s2 + 56); /* 0x80037cf4 */
    var_a0 = 10; /* 0x80037d08 */
    var_v1 = var_v1 + 4095; /* 0x80037d0c */
    var_a2 = 233; /* 0x80037d10 */
    var_v1 = var_v1 >> 0xc; /* 0x80037d14 */
    var_v0 = *(int32_t*)(reg_s2 + 36); /* 0x80037d18 */
    var_s1 = var_s2 + 64; /* 0x80037d1c */
    var_v0 = var_v0 + var_v1; /* 0x80037d20 */
    *(int32_t*)(stack + 52) = var_v0; /* 0x80037d24 */
    var_a1 = *(uint8_t*)(reg_s2 + 0); /* 0x80037d28 */
    var_s0 = 1024; /* 0x80037d2c */
    *(int32_t*)(stack + 16) = var_s1; /* 0x80037d30 */
    *(int32_t*)(stack + 20) = var_s0; /* 0x80037d34 */
    var_v0 = *(int16_t*)(reg_s2 + 10); /* 0x80037d38 */
    var_a3 = var_sp + 32; /* 0x80037d3c */
    *(int32_t*)(stack + 28) = var_s2; /* 0x80037d40 */
    var_v0 = var_v0 + -16; /* 0x80037d44 */
    func_0x80036484(); /* 0x80037d48 */
    var_a0 = 10; /* 0x80037d50 */
    var_a1 = *(uint8_t*)(reg_s2 + 0); /* 0x80037d54 */
    var_a2 = 234; /* 0x80037d58 */
    *(int32_t*)(stack + 16) = var_s1; /* 0x80037d5c */
    *(int32_t*)(stack + 20) = var_s0; /* 0x80037d60 */
    var_v0 = *(int16_t*)(reg_s2 + 10); /* 0x80037d64 */
    var_a3 = var_sp + 48; /* 0x80037d68 */
    *(int32_t*)(stack + 28) = var_s2; /* 0x80037d6c */
    var_v0 = var_v0 + -16; /* 0x80037d70 */
    func_0x80036484(); /* 0x80037d74 */
    var_v0 = var_s2; /* 0x80037d80 */
    var_v0 = 5; /* 0x80037d84 */
    *(int8_t*)(reg_s2 + 6) = var_v0; /* 0x80037d88 */
    var_v0 = 64; /* 0x80037d8c */
    *(int16_t*)(reg_s2 + 16) = var_v0; /* 0x80037d90 */
    var_v0 = 131; /* 0x80037d94 */
    *(int8_t*)(reg_s2 + 2) = var_v0; /* 0x80037d98 */
    var_v1 = *(uint8_t*)(reg_s3 + 8); /* 0x80037d9c */
    var_v0 = 13; /* 0x80037da0 */
    *(int8_t*)(reg_s2 + 7) = var_v0; /* 0x80037da4 */
    var_v0 = 4096; /* 0x80037da8 */
    *(int16_t*)(reg_s2 + 18) = var_v0; /* 0x80037dac */
    var_v1 = var_v1 + 16; /* 0x80037db0 */
    *(int16_t*)(reg_s2 + 10) = var_v1; /* 0x80037db4 */
    var_v0 = *(uint16_t*)(reg_s3 + 4); /* 0x80037db8 */
    *(int16_t*)(reg_s2 + 60) = var_v0; /* 0x80037dc0 */
    *(int16_t*)(reg_s2 + 58) = var_v0; /* 0x80037dc4 */
    *(int16_t*)(reg_s2 + 56) = var_v0; /* 0x80037dc8 */
    var_v0 = *(int32_t*)(reg_s3 + 12); /* 0x80037dcc */
    *(int32_t*)(reg_s2 + 28) = var_v0; /* 0x80037dd4 */
    var_v0 = 255; /* 0x80037dd8 */
    *(int8_t*)(reg_s2 + 0) = var_v0; /* 0x80037ddc */
    var_v0 = var_s2; /* 0x80037de0 */
    var_ra = *(int32_t*)(stack + 92); /* 0x80037de4 */
    var_s6 = *(int32_t*)(stack + 88); /* 0x80037de8 */
    var_s5 = *(int32_t*)(stack + 84); /* 0x80037dec */
    var_s4 = *(int32_t*)(stack + 80); /* 0x80037df0 */
    var_s3 = *(int32_t*)(stack + 76); /* 0x80037df4 */
    var_s2 = *(int32_t*)(stack + 72); /* 0x80037df8 */
    var_s1 = *(int32_t*)(stack + 68); /* 0x80037dfc */
    var_s0 = *(int32_t*)(stack + 64); /* 0x80037e00 */
    var_sp = var_sp + 96; /* 0x80037e04 */
    return; /* 0x80037e08 */
}

/* Function at 0x80037e0c */
void func_0x80037e0c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_at;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -40; /* 0x80037e10 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80037e14 */
    var_s0 = *(int32_t*)(stack + 56); /* 0x80037e18 */
    var_v0 = 0x8019 << 16; /* 0x80037e1c */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80037e20 */
    var_s1 = *(int32_t*)(reg_v0 + 3868); /* 0x80037e24 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x80037e28 */
    var_s2 = var_a1; /* 0x80037e2c */
    *(int32_t*)(stack + 32) = var_s4; /* 0x80037e30 */
    var_s4 = var_a2; /* 0x80037e34 */
    *(int32_t*)(stack + 28) = var_s3; /* 0x80037e38 */
    var_s3 = var_a3; /* 0x80037e3c */
    *(int32_t*)(stack + 36) = var_ra; /* 0x80037e40 */
    func_0x8004a0f8(); /* 0x80037e44 */
    var_v0 = *(uint16_t*)(reg_s1 + 64); /* 0x80037e4c */
    var_v1 = *(uint16_t*)(reg_s0 + 0); /* 0x80037e50 */
    var_v0 = var_v0 + var_v1; /* 0x80037e58 */
    *(int16_t*)(reg_s1 + 64) = var_v0; /* 0x80037e5c */
    var_v0 = *(uint16_t*)(reg_s1 + 66); /* 0x80037e60 */
    var_v1 = *(uint16_t*)(reg_s0 + 2); /* 0x80037e64 */
    var_a0 = *(int16_t*)(reg_s1 + 64); /* 0x80037e68 */
    var_v0 = var_v0 + var_v1; /* 0x80037e6c */
    *(int16_t*)(reg_s1 + 66) = var_v0; /* 0x80037e70 */
    var_v0 = *(uint16_t*)(reg_s1 + 68); /* 0x80037e74 */
    var_v1 = *(uint16_t*)(reg_s0 + 4); /* 0x80037e78 */
    var_a1 = *(int16_t*)(reg_s1 + 66); /* 0x80037e7c */
    var_v0 = var_v0 + var_v1; /* 0x80037e80 */
    var_a2 = var_v0 << 0x10; /* 0x80037e84 */
    var_a2 = var_a2 >> 0x10; /* 0x80037e88 */
    func_0x8004a340(); /* 0x80037e8c */
    var_a1 = var_v0; /* 0x80037e94 */
    /* Branch beqz at 0x80037e9c */
    var_v0 = *(int16_t*)(reg_s1 + 64); /* 0x80037ea4 */
    /* Branch bnez at 0x80037ec0 */
    var_at = -1; /* 0x80037ecc */
    /* Branch bne at 0x80037ed0 */
    var_at = 0x8000 << 16; /* 0x80037ed4 */
    /* Branch bne at 0x80037ed8 */
    var_v0 = *(int16_t*)(reg_s1 + 66); /* 0x80037ee8 */
    /* Branch bnez at 0x80037f04 */
    var_at = -1; /* 0x80037f10 */
    /* Branch bne at 0x80037f14 */
    var_at = 0x8000 << 16; /* 0x80037f18 */
    /* Branch bne at 0x80037f1c */
    var_v0 = *(int16_t*)(reg_s1 + 68); /* 0x80037f2c */
    /* Branch bnez at 0x80037f48 */
    var_at = -1; /* 0x80037f54 */
    /* Branch bne at 0x80037f58 */
    var_at = 0x8000 << 16; /* 0x80037f5c */
    /* Branch bne at 0x80037f60 */
    *(int16_t*)(reg_s1 + 64) = var_a0; /* 0x80037f70 */
    *(int16_t*)(reg_s1 + 66) = var_v1; /* 0x80037f74 */
    *(int16_t*)(reg_s1 + 68) = var_v0; /* 0x80037f78 */
    var_v1 = *(int16_t*)(reg_s1 + 64); /* 0x80037f7c */
    var_v0 = *(int32_t*)(reg_s1 + 32); /* 0x80037f80 */
    var_a0 = *(int16_t*)(reg_s1 + 66); /* 0x80037f84 */
    var_a1 = *(int16_t*)(reg_s1 + 68); /* 0x80037f88 */
    var_v0 = var_v0 + var_v1; /* 0x80037f8c */
    *(int32_t*)(reg_s1 + 32) = var_v0; /* 0x80037f90 */
    var_v0 = *(int32_t*)(reg_s1 + 36); /* 0x80037f94 */
    var_v1 = *(int32_t*)(reg_s1 + 40); /* 0x80037f98 */
    var_v0 = var_v0 + var_a0; /* 0x80037f9c */
    var_v1 = var_v1 + var_a1; /* 0x80037fa0 */
    *(int32_t*)(reg_s1 + 36) = var_v0; /* 0x80037fa4 */
    var_v0 = -1; /* 0x80037fa8 */
    /* Branch beq at 0x80037fac */
    *(int32_t*)(reg_s1 + 40) = var_v1; /* 0x80037fb0 */
    var_a0 = var_s4; /* 0x80037fb4 */
    var_a1 = var_s3; /* 0x80037fb8 */
    func_0x80035d04(); /* 0x80037fbc */
    var_v1 = var_v0; /* 0x80037fc4 */
    /* Branch bnez at 0x80037fc8 */
    var_v0 = -1; /* 0x80037fcc */
    var_v0 = var_zero; /* 0x80037fd0 */
    var_ra = *(int32_t*)(stack + 36); /* 0x80037fd4 */
    var_s4 = *(int32_t*)(stack + 32); /* 0x80037fd8 */
    var_s3 = *(int32_t*)(stack + 28); /* 0x80037fdc */
    var_s2 = *(int32_t*)(stack + 24); /* 0x80037fe0 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x80037fe4 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x80037fe8 */
    var_sp = var_sp + 40; /* 0x80037fec */
    return; /* 0x80037ff0 */
}

/* Function at 0x80037ff4 */
void func_0x80037ff4() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -96; /* 0x80037ff8 */
    var_v0 = 0x8019 << 16; /* 0x80037ffc */
    *(int32_t*)(stack + 72) = var_s0; /* 0x80038000 */
    var_s0 = *(int32_t*)(reg_v0 + 3868); /* 0x80038004 */
    *(int32_t*)(stack + 84) = var_s3; /* 0x80038008 */
    var_s3 = var_a0; /* 0x8003800c */
    *(int32_t*)(stack + 76) = var_s1; /* 0x80038010 */
    var_s1 = var_a1; /* 0x80038014 */
    *(int32_t*)(stack + 80) = var_s2; /* 0x80038018 */
    var_s2 = var_a2; /* 0x8003801c */
    *(int32_t*)(stack + 88) = var_s4; /* 0x80038020 */
    *(int32_t*)(stack + 92) = var_ra; /* 0x80038024 */
    var_v0 = *(uint8_t*)(reg_s0 + 0); /* 0x80038028 */
    var_v1 = *(int32_t*)(stack + 124); /* 0x8003802c */
    var_v0 = var_v0 & 0x40; /* 0x80038030 */
    /* Branch beqz at 0x80038034 */
    var_s4 = var_a3; /* 0x80038038 */
    var_a0 = var_s0 + 32; /* 0x8003803c */
    var_a3 = 24000; /* 0x80038040 */
    var_a1 = *(int16_t*)(reg_s0 + 50); /* 0x80038044 */
    var_a2 = *(int16_t*)(reg_s0 + 48); /* 0x80038048 */
    var_v0 = var_sp + 64; /* 0x8003804c */
    *(int32_t*)(stack + 16) = var_v1; /* 0x80038050 */
    *(int32_t*)(stack + 20) = var_v1; /* 0x80038054 */
    *(int32_t*)(stack + 24) = var_v0; /* 0x80038058 */
    func_0x8004b658(); /* 0x8003805c */
    var_a0 = var_v0; /* 0x80038064 */
    /* Branch beqz at 0x80038068 */
    var_v0 = *(int32_t*)(reg_a0 + 116); /* 0x80038070 */
    *(int32_t*)(stack + 32) = var_v0; /* 0x80038078 */
    var_v0 = *(uint16_t*)(reg_a0 + 48); /* 0x8003807c */
    var_v1 = *(int32_t*)(reg_a0 + 120); /* 0x80038080 */
    var_v0 = (uint32_t)var_v0 >> 0x1; /* 0x80038084 */
    *(int32_t*)(stack + 36) = var_v1; /* 0x8003808c */
    var_v0 = *(int32_t*)(reg_a0 + 124); /* 0x80038090 */
    *(int32_t*)(stack + 40) = var_v0; /* 0x80038098 */
    var_a3 = var_sp + 48; /* 0x8003809c */
    var_v0 = *(int32_t*)(stack + 32); /* 0x800380a0 */
    var_a0 = *(int32_t*)(reg_s0 + 32); /* 0x800380a4 */
    var_v1 = *(int32_t*)(stack + 36); /* 0x800380a8 */
    var_a1 = *(int32_t*)(reg_s0 + 36); /* 0x800380ac */
    var_a2 = *(int32_t*)(reg_s0 + 40); /* 0x800380b0 */
    var_v0 = *(int32_t*)(stack + 40); /* 0x800380b8 */
    func_0x8004a390(); /* 0x800380c0 */
    var_a0 = *(int16_t*)(reg_s0 + 48); /* 0x800380c8 */
    var_a1 = *(int16_t*)(stack + 48); /* 0x800380cc */
    func_0x800496c8(); /* 0x800380d0 */
    var_a0 = *(int16_t*)(reg_s0 + 50); /* 0x800380d8 */
    *(int16_t*)(reg_s0 + 48) = var_v0; /* 0x800380dc */
    var_a1 = *(int16_t*)(stack + 50); /* 0x800380e0 */
    func_0x800496c8(); /* 0x800380e4 */
    *(int16_t*)(reg_s0 + 50) = var_v0; /* 0x800380f0 */
    var_a0 = var_s0 + 32; /* 0x800380f4 */
    var_a2 = 24000; /* 0x800380f8 */
    var_a1 = *(int16_t*)(reg_s0 + 50); /* 0x800380fc */
    func_0x8003eb34(); /* 0x80038100 */
    var_v1 = -1; /* 0x80038108 */
    /* Branch beq at 0x8003810c */
    *(int32_t*)(stack + 64) = var_v0; /* 0x80038110 */
    var_v0 = 0x801a << 16; /* 0x80038114 */
    var_v0 = var_v0 + -28888; /* 0x80038118 */
    var_v1 = *(int32_t*)(reg_v0 + 584); /* 0x8003811c */
    var_a0 = *(int32_t*)(reg_v0 + 588); /* 0x80038120 */
    var_v0 = *(int32_t*)(reg_v0 + 592); /* 0x80038124 */
    *(int32_t*)(stack + 32) = var_v1; /* 0x80038128 */
    *(int32_t*)(stack + 36) = var_a0; /* 0x80038130 */
    var_a0 = var_s0 + 48; /* 0x80038134 */
    func_0x80049f08(); /* 0x80038138 */
    var_v1 = *(int32_t*)(stack + 64); /* 0x80038140 */
    var_v0 = var_sp + 56; /* 0x8003814c */
    var_v0 = *(int32_t*)(stack + 116); /* 0x80038150 */
    /* Branch bnez at 0x8003815c */
    var_v0 = var_sp + 56; /* 0x80038160 */
    var_s1 = *(int32_t*)(stack + 120); /* 0x80038164 */
    var_a0 = var_s1; /* 0x8003816c */
    var_a1 = var_s3; /* 0x80038170 */
    var_a3 = *(int32_t*)(stack + 112); /* 0x80038174 */
    var_a2 = var_s4; /* 0x80038178 */
    func_0x80037e10(); /* 0x8003817c */
    var_ra = *(int32_t*)(stack + 92); /* 0x80038184 */
    var_s4 = *(int32_t*)(stack + 88); /* 0x80038188 */
    var_s3 = *(int32_t*)(stack + 84); /* 0x8003818c */
    var_s2 = *(int32_t*)(stack + 80); /* 0x80038190 */
    var_s1 = *(int32_t*)(stack + 76); /* 0x80038194 */
    var_s0 = *(int32_t*)(stack + 72); /* 0x80038198 */
    var_sp = var_sp + 96; /* 0x8003819c */
    return; /* 0x800381a0 */
}

/* Function at 0x800381a4 */
void func_0x800381a4() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -40; /* 0x800381a8 */
    var_a3 = var_a0; /* 0x800381ac */
    var_v0 = 0x8019 << 16; /* 0x800381b0 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x800381b4 */
    var_s2 = *(int32_t*)(reg_v0 + 3868); /* 0x800381b8 */
    var_t0 = var_a1; /* 0x800381bc */
    *(int32_t*)(stack + 28) = var_s3; /* 0x800381c0 */
    var_s3 = var_a2; /* 0x800381c4 */
    *(int32_t*)(stack + 32) = var_ra; /* 0x800381c8 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x800381cc */
    *(int32_t*)(stack + 16) = var_s0; /* 0x800381d0 */
    var_v0 = *(uint8_t*)(reg_s2 + 8); /* 0x800381d4 */
    /* Branch bnez at 0x800381dc */
    var_a2 = var_zero; /* 0x800381e0 */
    var_s1 = 0x801b << 16; /* 0x800381e4 */
    var_s0 = var_s1 + 22856; /* 0x800381e8 */
    var_v0 = *(int32_t*)(reg_s2 + 32); /* 0x800381ec */
    var_v1 = *(int32_t*)(reg_s2 + 36); /* 0x800381f0 */
    var_a0 = *(int32_t*)(reg_s2 + 40); /* 0x800381f4 */
    var_a1 = *(int32_t*)(reg_s2 + 44); /* 0x800381f8 */
    *(int32_t*)(reg_s0 + 4) = var_v0; /* 0x800381fc */
    *(int32_t*)(reg_s0 + 8) = var_v1; /* 0x80038200 */
    *(int32_t*)(reg_s0 + 12) = var_a0; /* 0x80038204 */
    *(int32_t*)(reg_s0 + 16) = var_a1; /* 0x80038208 */
    *(int16_t*)(reg_s0 + 28) = var_a3; /* 0x8003820c */
    *(int16_t*)(reg_s0 + 30) = var_t0; /* 0x80038210 */
    var_v0 = *(int16_t*)(reg_s2 + 64); /* 0x80038234 */
    var_v0 = *(int16_t*)(reg_s2 + 68); /* 0x80038244 */
    func_0x800746c4(); /* 0x80038254 */
    *(int16_t*)(reg_s0 + 34) = var_v0; /* 0x8003825c */
    var_a0 = *(int16_t*)(reg_s2 + 68); /* 0x80038260 */
    var_a1 = *(int16_t*)(reg_s2 + 64); /* 0x80038264 */
    func_0x80076ea4(); /* 0x80038268 */
    var_a0 = var_s0; /* 0x80038270 */
    *(int16_t*)(reg_a0 + 32) = var_v0; /* 0x80038274 */
    var_v0 = 128; /* 0x80038278 */
    func_0x8003beb4(); /* 0x8003827c */
    var_a2 = var_v0 << 0x7; /* 0x8003828c */
    var_a0 = *(int16_t*)(reg_s2 + 64); /* 0x80038290 */
    var_v0 = *(int32_t*)(reg_s2 + 32); /* 0x80038294 */
    var_a1 = *(int16_t*)(reg_s2 + 66); /* 0x80038298 */
    var_v1 = *(int32_t*)(reg_s2 + 36); /* 0x8003829c */
    var_v0 = var_v0 + var_a0; /* 0x800382a0 */
    var_a0 = *(int16_t*)(reg_s2 + 68); /* 0x800382a4 */
    *(int32_t*)(reg_s2 + 32) = var_v0; /* 0x800382a8 */
    var_v0 = *(int32_t*)(reg_s2 + 40); /* 0x800382ac */
    var_v1 = var_v1 + var_a1; /* 0x800382b0 */
    *(int32_t*)(reg_s2 + 36) = var_v1; /* 0x800382b4 */
    var_v1 = *(uint16_t*)(reg_s2 + 52); /* 0x800382b8 */
    var_v0 = var_v0 + var_a0; /* 0x800382bc */
    var_v1 = var_v1 & 0xfff; /* 0x800382c4 */
    *(int32_t*)(reg_s2 + 40) = var_v0; /* 0x800382c8 */
    *(int16_t*)(reg_s2 + 52) = var_v1; /* 0x800382d0 */
    var_v0 = var_v0 + -1; /* 0x800382d4 */
    *(int8_t*)(reg_s2 + 8) = var_v0; /* 0x800382d8 */
    var_v0 = var_a2; /* 0x800382dc */
    var_ra = *(int32_t*)(stack + 32); /* 0x800382e0 */
    var_s3 = *(int32_t*)(stack + 28); /* 0x800382e4 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x800382e8 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x800382ec */
    var_s0 = *(int32_t*)(stack + 16); /* 0x800382f0 */
    var_sp = var_sp + 40; /* 0x800382f4 */
    return; /* 0x800382f8 */
}

/* Function at 0x800382fc */
void func_0x800382fc() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -32; /* 0x80038300 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x80038304 */
    var_s1 = var_a2; /* 0x80038308 */
    var_v0 = 0x8019 << 16; /* 0x8003830c */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80038310 */
    var_s0 = *(int32_t*)(reg_v0 + 3868); /* 0x80038314 */
    *(int32_t*)(stack + 24) = var_ra; /* 0x80038318 */
    func_0x80035d04(); /* 0x8003831c */
    var_a1 = *(int16_t*)(reg_s0 + 64); /* 0x80038324 */
    var_v1 = *(int32_t*)(reg_s0 + 32); /* 0x80038328 */
    var_a2 = *(int16_t*)(reg_s0 + 66); /* 0x8003832c */
    var_a0 = *(int32_t*)(reg_s0 + 36); /* 0x80038330 */
    var_v1 = var_v1 + var_a1; /* 0x80038334 */
    var_a1 = *(int16_t*)(reg_s0 + 68); /* 0x80038338 */
    *(int32_t*)(reg_s0 + 32) = var_v1; /* 0x8003833c */
    var_v1 = *(int32_t*)(reg_s0 + 40); /* 0x80038340 */
    var_a0 = var_a0 + var_a2; /* 0x80038344 */
    *(int32_t*)(reg_s0 + 36) = var_a0; /* 0x80038348 */
    var_a0 = *(uint16_t*)(reg_s0 + 52); /* 0x8003834c */
    var_v1 = var_v1 + var_a1; /* 0x80038350 */
    var_a0 = var_a0 & 0xfff; /* 0x80038358 */
    *(int32_t*)(reg_s0 + 40) = var_v1; /* 0x8003835c */
    *(int16_t*)(reg_s0 + 52) = var_a0; /* 0x80038360 */
    var_ra = *(int32_t*)(stack + 24); /* 0x80038364 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x80038368 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003836c */
    var_sp = var_sp + 32; /* 0x80038370 */
    return; /* 0x80038374 */
}

/* Function at 0x80038378 */
void func_0x80038378() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x8019 << 16; /* 0x8003837c */
    var_v1 = *(int32_t*)(reg_v0 + 3868); /* 0x80038380 */
    var_a0 = *(int16_t*)(reg_v1 + 64); /* 0x80038388 */
    var_v0 = *(int32_t*)(reg_v1 + 32); /* 0x8003838c */
    var_a1 = *(int16_t*)(reg_v1 + 66); /* 0x80038390 */
    var_a2 = *(int16_t*)(reg_v1 + 68); /* 0x80038394 */
    *(int32_t*)(reg_v1 + 32) = var_v0; /* 0x8003839c */
    var_v0 = *(int32_t*)(reg_v1 + 36); /* 0x800383a0 */
    var_a0 = *(int32_t*)(reg_v1 + 40); /* 0x800383a4 */
    *(int32_t*)(reg_v1 + 36) = var_v0; /* 0x800383b0 */
    return; /* 0x800383b4 */
}

/* Function at 0x800383b8 */
void func_0x800383b8() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_v0;
    int32_t var_v1;

    *(int32_t*)(reg_v1 + 40) = var_a0; /* 0x800383b8 */
    var_v0 = 0x8019 << 16; /* 0x800383bc */
    var_a2 = *(int32_t*)(reg_v0 + 3868); /* 0x800383c0 */
    var_v0 = *(uint16_t*)(reg_a2 + 64); /* 0x800383c8 */
    var_v1 = *(uint16_t*)(reg_a2 + 66); /* 0x800383cc */
    var_v0 = var_v0 << 0x10; /* 0x800383d0 */
    var_a0 = var_v0 >> 0x10; /* 0x800383d4 */
    var_v0 = (uint32_t)var_v0 >> 0x1f; /* 0x800383d8 */
    var_a0 = var_a0 + var_v0; /* 0x800383dc */
    var_a0 = var_a0 >> 0x1; /* 0x800383e0 */
    var_v1 = var_v1 << 0x10; /* 0x800383e4 */
    var_a1 = var_v1 >> 0x10; /* 0x800383e8 */
    var_v1 = (uint32_t)var_v1 >> 0x1f; /* 0x800383ec */
    var_a1 = var_a1 + var_v1; /* 0x800383f0 */
    var_v0 = *(int32_t*)(reg_a2 + 32); /* 0x800383f4 */
    var_a1 = var_a1 >> 0x1; /* 0x800383f8 */
    *(int32_t*)(reg_a2 + 32) = var_v0; /* 0x80038400 */
    var_v0 = *(int32_t*)(reg_a2 + 36); /* 0x80038404 */
    var_a0 = *(uint16_t*)(reg_a2 + 68); /* 0x80038408 */
    var_a0 = var_a0 << 0x10; /* 0x80038410 */
    var_v1 = var_a0 >> 0x10; /* 0x80038414 */
    var_a0 = (uint32_t)var_a0 >> 0x1f; /* 0x80038418 */
    var_v1 = var_v1 + var_a0; /* 0x8003841c */
    *(int32_t*)(reg_a2 + 36) = var_v0; /* 0x80038420 */
    var_v0 = *(int32_t*)(reg_a2 + 40); /* 0x80038424 */
    var_v1 = var_v1 >> 0x1; /* 0x80038428 */
    return; /* 0x80038430 */
}

/* Function at 0x80038434 */
void func_0x80038434() {
    /* Local variables */
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_v0;

    *(int32_t*)(reg_a2 + 40) = var_v0; /* 0x80038434 */
    var_sp = var_sp + -24; /* 0x80038438 */
    var_v0 = var_a1; /* 0x8003843c */
    *(int32_t*)(stack + 16) = var_ra; /* 0x80038440 */
    var_a1 = *(int16_t*)(reg_v0 + 0); /* 0x80038444 */
    var_a2 = *(int16_t*)(reg_v0 + 2); /* 0x80038448 */
    func_0x80079dcc(); /* 0x8003844c */
    var_ra = *(int32_t*)(stack + 16); /* 0x80038454 */
    var_sp = var_sp + 24; /* 0x80038458 */
    return; /* 0x8003845c */
}

/* Function at 0x80038460 */
void func_0x80038460() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -48; /* 0x80038464 */
    *(int32_t*)(stack + 40) = var_s0; /* 0x80038468 */
    var_s0 = var_a1; /* 0x8003846c */
    *(int32_t*)(stack + 44) = var_ra; /* 0x80038470 */
    var_a1 = var_sp + 32; /* 0x800384a8 */
    var_a0 = var_a0 & 0xff; /* 0x800384ac */
    /* Branch beqz at 0x800384b0 */
    var_a2 = var_sp + 24; /* 0x800384b4 */
    var_v0 = *(uint16_t*)(stack + 24); /* 0x800384b8 */
    var_v1 = *(uint16_t*)(stack + 32); /* 0x800384bc */
    var_v0 = var_v0 + 64; /* 0x800384c0 */
    var_v1 = var_v1 + 64; /* 0x800384c4 */
    *(int16_t*)(stack + 24) = var_v0; /* 0x800384c8 */
    *(int16_t*)(stack + 32) = var_v1; /* 0x800384cc */
    var_v0 = *(uint8_t*)(reg_s0 + 0); /* 0x800384d0 */
    /* Branch bnez at 0x800384d8 */
    func_0x80038438(); /* 0x800384e0 */
    var_v1 = *(int16_t*)(stack + 30); /* 0x800384f0 */
    /* Branch bnez at 0x800384fc */
    *(int8_t*)(reg_s0 + 0) = var_zero; /* 0x80038504 */
    var_v0 = *(uint16_t*)(stack + 32); /* 0x80038508 */
    var_v1 = *(uint16_t*)(stack + 34); /* 0x8003850c */
    var_a1 = *(uint16_t*)(stack + 24); /* 0x80038510 */
    var_a2 = *(uint16_t*)(stack + 26); /* 0x80038514 */
    var_a0 = var_sp + 16; /* 0x80038518 */
    *(int16_t*)(stack + 32) = var_a1; /* 0x8003851c */
    var_a1 = var_a1 << 0x10; /* 0x80038520 */
    var_a1 = var_a1 >> 0x10; /* 0x80038524 */
    *(int16_t*)(stack + 16) = var_v0; /* 0x80038528 */
    *(int16_t*)(stack + 18) = var_v1; /* 0x8003852c */
    var_v1 = *(uint8_t*)(reg_s0 + 0); /* 0x80038530 */
    var_v0 = *(uint16_t*)(stack + 28); /* 0x80038534 */
    var_a2 = var_a2 + var_v1; /* 0x80038538 */
    *(int16_t*)(stack + 34) = var_a2; /* 0x8003853c */
    var_a2 = var_a2 << 0x10; /* 0x80038540 */
    *(int16_t*)(stack + 20) = var_v0; /* 0x80038544 */
    var_v1 = *(uint8_t*)(reg_s0 + 0); /* 0x80038548 */
    var_v0 = *(uint16_t*)(stack + 30); /* 0x8003854c */
    var_a2 = var_a2 >> 0x10; /* 0x80038550 */
    func_0x80079dcc(); /* 0x80038558 */
    var_v0 = *(uint8_t*)(reg_s0 + 0); /* 0x80038560 */
    /* Branch beqz at 0x80038568 */
    var_a0 = var_sp + 16; /* 0x8003856c */
    var_a2 = *(uint16_t*)(stack + 26); /* 0x80038570 */
    var_v0 = *(uint16_t*)(stack + 22); /* 0x80038574 */
    var_a1 = *(int16_t*)(stack + 32); /* 0x80038578 */
    var_v0 = var_a2 + var_v0; /* 0x8003857c */
    *(int16_t*)(stack + 34) = var_a2; /* 0x80038580 */
    var_a2 = var_a2 << 0x10; /* 0x80038584 */
    *(int16_t*)(stack + 18) = var_v0; /* 0x80038588 */
    var_v0 = *(uint8_t*)(reg_s0 + 0); /* 0x8003858c */
    var_a2 = var_a2 >> 0x10; /* 0x80038590 */
    func_0x80079dcc(); /* 0x80038594 */
    var_ra = *(int32_t*)(stack + 44); /* 0x8003859c */
    var_s0 = *(int32_t*)(stack + 40); /* 0x800385a0 */
    var_sp = var_sp + 48; /* 0x800385a4 */
    return; /* 0x800385a8 */
}

/* Function at 0x800385ac */
void func_0x800385ac() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_at;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_s7;
    int32_t var_s8;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -400; /* 0x800385b0 */
    var_v0 = 0x8019 << 16; /* 0x800385b4 */
    *(int32_t*)(stack + 384) = var_s6; /* 0x800385b8 */
    var_s6 = *(int32_t*)(reg_v0 + 3868); /* 0x800385bc */
    *(int32_t*)(stack + 360) = var_s0; /* 0x800385c0 */
    var_s0 = var_zero; /* 0x800385c4 */
    *(int32_t*)(stack + 372) = var_s3; /* 0x800385c8 */
    *(int32_t*)(stack + 396) = var_ra; /* 0x800385cc */
    *(int32_t*)(stack + 392) = var_s8; /* 0x800385d0 */
    *(int32_t*)(stack + 388) = var_s7; /* 0x800385d4 */
    *(int32_t*)(stack + 380) = var_s5; /* 0x800385d8 */
    *(int32_t*)(stack + 376) = var_s4; /* 0x800385dc */
    *(int32_t*)(stack + 368) = var_s2; /* 0x800385e0 */
    *(int32_t*)(stack + 364) = var_s1; /* 0x800385e4 */
    var_s1 = *(uint8_t*)(reg_s6 + 1); /* 0x800385e8 */
    var_s2 = *(uint8_t*)(reg_s6 + 5); /* 0x800385ec */
    /* Branch beqz at 0x800385f4 */
    var_s3 = var_s0; /* 0x800385f8 */
    var_v0 = 0x8001 << 16; /* 0x800385fc */
    var_v0 = var_v0 + 6308; /* 0x80038600 */
    var_v1 = var_s1 << 0x2; /* 0x80038604 */
    var_v1 = var_v1 + var_v0; /* 0x80038608 */
    var_v0 = *(int32_t*)(reg_v1 + 0); /* 0x8003860c */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x8003861c */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x80038620 */
    func_0x80038300(); /* 0x80038624 */
    var_s0 = var_v0; /* 0x8003862c */
    /* Branch beqz at 0x80038630 */
    var_v0 = var_s0 & 0x10; /* 0x80038634 */
    /* Branch beqz at 0x80038638 */
    var_v0 = 0x801b << 16; /* 0x8003863c */
    var_v1 = *(int32_t*)(reg_v0 + 22948); /* 0x80038640 */
    var_v0 = var_v1 << 0x1; /* 0x80038648 */
    var_v0 = var_v0 + var_v1; /* 0x8003864c */
    var_v0 = var_v0 << 0x2; /* 0x80038650 */
    var_v0 = var_v0 + var_v1; /* 0x80038654 */
    var_v0 = var_v0 << 0x2; /* 0x80038658 */
    var_v0 = var_v0 + var_v1; /* 0x8003865c */
    var_v0 = var_v0 << 0x2; /* 0x80038660 */
    var_v1 = 0x801c << 16; /* 0x80038664 */
    var_v1 = var_v1 + -24264; /* 0x80038668 */
    var_v1 = var_v0 + var_v1; /* 0x8003866c */
    var_v0 = *(uint16_t*)(reg_v1 + 44); /* 0x80038670 */
    /* Branch beqz at 0x80038678 */
    var_v0 = 1; /* 0x8003867c */
    var_v1 = *(uint8_t*)(reg_v1 + 31); /* 0x80038680 */
    /* Branch beq at 0x80038688 */
    func_0x8003618c(); /* 0x80038690 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80038698 */
    var_a0 = var_s6; /* 0x8003869c */
    var_a1 = (uint32_t)var_a1 >> 0x2; /* 0x800386a0 */
    var_a1 = var_a1 & 0x8; /* 0x800386a4 */
    func_0x80035cc8(); /* 0x800386a8 */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x800386b0 */
    *(int32_t*)(stack + 80) = var_v0; /* 0x800386b8 */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x800386bc */
    *(int32_t*)(stack + 84) = var_v0; /* 0x800386c4 */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x800386c8 */
    *(int32_t*)(stack + 88) = var_v0; /* 0x800386d0 */
    var_v0 = *(uint16_t*)(reg_s6 + 64); /* 0x800386d4 */
    var_v0 = var_v0 << 0x10; /* 0x800386dc */
    var_v0 = var_v0 >> 0x11; /* 0x800386e0 */
    *(int16_t*)(stack + 104) = var_v0; /* 0x800386e4 */
    var_v0 = *(uint16_t*)(reg_s6 + 66); /* 0x800386e8 */
    var_v0 = var_v0 << 0x10; /* 0x800386f0 */
    var_v0 = var_v0 >> 0x11; /* 0x800386f4 */
    *(int16_t*)(stack + 106) = var_v0; /* 0x800386f8 */
    var_v0 = *(uint16_t*)(reg_s6 + 68); /* 0x800386fc */
    var_v0 = var_v0 << 0x10; /* 0x80038704 */
    var_v0 = var_v0 >> 0x11; /* 0x80038708 */
    *(int16_t*)(stack + 108) = var_v0; /* 0x8003870c */
    var_v0 = var_s0 & 0x1; /* 0x80038710 */
    /* Branch beqz at 0x80038714 */
    var_v0 = 32; /* 0x80038718 */
    *(int16_t*)(stack + 106) = var_v0; /* 0x80038720 */
    var_v0 = var_s0 & 0x2; /* 0x80038724 */
    /* Branch beqz at 0x80038728 */
    var_v0 = 0x801b << 16; /* 0x8003872c */
    var_v0 = var_v0 + 22856; /* 0x80038730 */
    var_a0 = *(int16_t*)(reg_v0 + 144); /* 0x80038734 */
    var_a1 = *(int16_t*)(reg_v0 + 140); /* 0x80038738 */
    func_0x80076ea4(); /* 0x8003873c */
    var_a0 = *(int16_t*)(stack + 108); /* 0x80038744 */
    var_a1 = *(int16_t*)(stack + 104); /* 0x80038748 */
    func_0x80076ea4(); /* 0x8003874c */
    func_0x800744c4(); /* 0x80038754 */
    var_v1 = var_v0 << 0x2; /* 0x8003875c */
    var_v1 = var_v1 + var_v0; /* 0x80038760 */
    var_v0 = var_v1 << 0x4; /* 0x80038764 */
    var_v0 = var_v0 << 0x2; /* 0x8003876c */
    var_a0 = var_s0; /* 0x80038774 */
    var_v0 = var_v0 + 4095; /* 0x80038778 */
    func_0x800744c4(); /* 0x8003877c */
    var_v0 = var_v0 + 4095; /* 0x80038794 */
    var_v0 = var_v0 >> 0xc; /* 0x80038798 */
    *(int16_t*)(stack + 104) = var_v0; /* 0x8003879c */
    func_0x800743f4(); /* 0x800387a0 */
    var_v0 = var_v0 + 4095; /* 0x800387b8 */
    var_v0 = var_v0 >> 0xc; /* 0x800387bc */
    *(int16_t*)(stack + 108) = var_v0; /* 0x800387c0 */
    var_v0 = 1024; /* 0x800387c4 */
    *(int16_t*)(stack + 96) = var_v0; /* 0x800387c8 */
    *(int16_t*)(stack + 98) = var_s0; /* 0x800387d0 */
    var_v0 = var_s0 & 0x4; /* 0x800387d4 */
    /* Branch beqz at 0x800387d8 */
    var_v0 = 2048; /* 0x800387dc */
    *(int16_t*)(stack + 106) = var_zero; /* 0x800387e0 */
    *(int16_t*)(stack + 96) = var_v0; /* 0x800387e8 */
    *(int16_t*)(stack + 96) = var_zero; /* 0x800387ec */
    *(int16_t*)(stack + 98) = var_zero; /* 0x800387f0 */
    *(int16_t*)(stack + 100) = var_zero; /* 0x800387f4 */
    var_a0 = 10; /* 0x800387f8 */
    var_a2 = 172; /* 0x800387fc */
    var_s5 = var_sp + 80; /* 0x80038800 */
    var_a3 = var_s5; /* 0x80038804 */
    var_s4 = var_sp + 104; /* 0x80038808 */
    var_s0 = 1024; /* 0x8003880c */
    var_s1 = 6; /* 0x80038810 */
    var_v0 = 13; /* 0x80038814 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80038818 */
    var_s3 = var_sp + 96; /* 0x8003881c */
    *(int32_t*)(stack + 16) = var_s4; /* 0x80038820 */
    *(int32_t*)(stack + 20) = var_s0; /* 0x80038824 */
    *(int32_t*)(stack + 24) = var_s0; /* 0x80038828 */
    *(int32_t*)(stack + 28) = var_s1; /* 0x8003882c */
    *(int32_t*)(stack + 32) = var_zero; /* 0x80038830 */
    *(int32_t*)(stack + 36) = var_zero; /* 0x80038834 */
    *(int32_t*)(stack + 40) = var_v0; /* 0x80038838 */
    func_0x80036484(); /* 0x8003883c */
    var_a0 = 10; /* 0x80038844 */
    var_a2 = 173; /* 0x80038848 */
    var_a3 = var_s5; /* 0x8003884c */
    var_v0 = 1; /* 0x80038850 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80038854 */
    var_s2 = 15; /* 0x80038858 */
    *(int32_t*)(stack + 16) = var_s4; /* 0x8003885c */
    *(int32_t*)(stack + 20) = var_s0; /* 0x80038860 */
    *(int32_t*)(stack + 24) = var_s0; /* 0x80038864 */
    *(int32_t*)(stack + 28) = var_s1; /* 0x80038868 */
    *(int32_t*)(stack + 32) = var_v0; /* 0x8003886c */
    *(int32_t*)(stack + 36) = var_zero; /* 0x80038870 */
    *(int32_t*)(stack + 40) = var_s2; /* 0x80038874 */
    func_0x80036484(); /* 0x80038878 */
    var_a0 = 10; /* 0x80038880 */
    var_a2 = 174; /* 0x80038884 */
    var_a3 = var_s5; /* 0x80038888 */
    var_s1 = 2048; /* 0x8003888c */
    var_v0 = 14; /* 0x80038890 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80038894 */
    var_s0 = 2; /* 0x80038898 */
    *(int32_t*)(stack + 16) = var_s4; /* 0x8003889c */
    *(int32_t*)(stack + 20) = var_zero; /* 0x800388a0 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x800388a4 */
    *(int32_t*)(stack + 28) = var_v0; /* 0x800388a8 */
    *(int32_t*)(stack + 32) = var_s0; /* 0x800388ac */
    *(int32_t*)(stack + 36) = var_zero; /* 0x800388b0 */
    *(int32_t*)(stack + 40) = var_s2; /* 0x800388b4 */
    func_0x80036484(); /* 0x800388b8 */
    var_a0 = 10; /* 0x800388c0 */
    var_a2 = 174; /* 0x800388c4 */
    var_a3 = var_s5; /* 0x800388c8 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x800388cc */
    var_v0 = 2024; /* 0x800388d0 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x800388d4 */
    var_v0 = 12; /* 0x800388d8 */
    *(int32_t*)(stack + 16) = var_s4; /* 0x800388dc */
    *(int32_t*)(stack + 24) = var_s1; /* 0x800388e0 */
    *(int32_t*)(stack + 28) = var_v0; /* 0x800388e4 */
    *(int32_t*)(stack + 32) = var_s0; /* 0x800388e8 */
    *(int32_t*)(stack + 36) = var_zero; /* 0x800388ec */
    *(int32_t*)(stack + 40) = var_s2; /* 0x800388f0 */
    func_0x80036484(); /* 0x800388f4 */
    var_a0 = 10; /* 0x800388fc */
    var_a2 = 174; /* 0x80038900 */
    var_a3 = var_s5; /* 0x80038904 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80038908 */
    var_v0 = 4096; /* 0x8003890c */
    *(int32_t*)(stack + 20) = var_v0; /* 0x80038910 */
    var_v0 = var_a0; /* 0x80038914 */
    *(int32_t*)(stack + 16) = var_s4; /* 0x80038918 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x8003891c */
    *(int32_t*)(stack + 28) = var_v0; /* 0x80038920 */
    *(int32_t*)(stack + 32) = var_s0; /* 0x80038924 */
    *(int32_t*)(stack + 36) = var_zero; /* 0x80038928 */
    *(int32_t*)(stack + 40) = var_s2; /* 0x8003892c */
    func_0x80036484(); /* 0x80038930 */
    var_v0 = 255; /* 0x8003893c */
    var_a2 = *(int32_t*)(reg_s6 + 28); /* 0x80038940 */
    var_v1 = *(uint8_t*)(reg_a2 + 0); /* 0x80038948 */
    var_v0 = 255; /* 0x8003894c */
    /* Branch beq at 0x80038950 */
    var_v0 = *(int32_t*)(reg_a2 + 32); /* 0x80038958 */
    var_v1 = *(int32_t*)(reg_a2 + 36); /* 0x8003895c */
    var_a0 = *(int32_t*)(reg_a2 + 40); /* 0x80038960 */
    var_a1 = *(int32_t*)(reg_a2 + 44); /* 0x80038964 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x80038968 */
    *(int32_t*)(reg_s6 + 36) = var_v1; /* 0x8003896c */
    *(int32_t*)(reg_s6 + 40) = var_a0; /* 0x80038970 */
    *(int32_t*)(reg_s6 + 44) = var_a1; /* 0x80038974 */
    *(int8_t*)(reg_s6 + 0) = var_v1; /* 0x80038980 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x80038984 */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x80038990 */
    var_v1 = *(uint8_t*)(reg_v0 + 0); /* 0x80038998 */
    var_v0 = 255; /* 0x8003899c */
    /* Branch beq at 0x800389a0 */
    var_v0 = 0x8009 << 16; /* 0x800389a4 */
    var_a2 = var_v0 + -32744; /* 0x800389a8 */
    var_a0 = *(int8_t*)(reg_a2 + 4); /* 0x800389b4 */
    var_a1 = *(int8_t*)(reg_a2 + 5); /* 0x800389b8 */
    *(int8_t*)(stack + 116) = var_a0; /* 0x800389c4 */
    *(int8_t*)(stack + 117) = var_a1; /* 0x800389c8 */
    var_v0 = *(uint8_t*)(reg_s6 + 80); /* 0x800389cc */
    var_v0 = var_v0 + 1; /* 0x800389d4 */
    *(int8_t*)(reg_s6 + 80) = var_v0; /* 0x800389d8 */
    var_v0 = var_v0 << 0x18; /* 0x800389dc */
    var_v0 = var_v0 >> 0x18; /* 0x800389e0 */
    /* Branch bnez at 0x800389e8 */
    var_v1 = var_sp + 112; /* 0x800389ec */
    *(int8_t*)(reg_s6 + 80) = var_zero; /* 0x800389f0 */
    var_v0 = *(int8_t*)(reg_s6 + 80); /* 0x800389f4 */
    var_v0 = var_v1 + var_v0; /* 0x800389fc */
    var_v0 = *(uint8_t*)(reg_v0 + 0); /* 0x80038a00 */
    var_v1 = *(int32_t*)(reg_s6 + 28); /* 0x80038a04 */
    var_v0 = var_v0 | 0x80; /* 0x80038a08 */
    *(int8_t*)(reg_s6 + 2) = var_v0; /* 0x80038a0c */
    var_v0 = *(int32_t*)(reg_v1 + 32); /* 0x80038a10 */
    var_a0 = *(int32_t*)(reg_v1 + 36); /* 0x80038a14 */
    var_a1 = *(int32_t*)(reg_v1 + 40); /* 0x80038a18 */
    var_a2 = *(int32_t*)(reg_v1 + 44); /* 0x80038a1c */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x80038a20 */
    *(int32_t*)(reg_s6 + 36) = var_a0; /* 0x80038a24 */
    *(int32_t*)(reg_s6 + 40) = var_a1; /* 0x80038a28 */
    *(int32_t*)(reg_s6 + 44) = var_a2; /* 0x80038a2c */
    *(int8_t*)(reg_s6 + 0) = var_v1; /* 0x80038a38 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x80038a3c */
    var_v0 = *(uint16_t*)(reg_s6 + 66); /* 0x80038a48 */
    var_v1 = *(uint16_t*)(reg_s6 + 82); /* 0x80038a4c */
    var_a0 = *(int16_t*)(reg_s6 + 64); /* 0x80038a50 */
    var_a1 = *(int16_t*)(reg_s6 + 68); /* 0x80038a54 */
    var_v0 = var_v0 + var_v1; /* 0x80038a58 */
    *(int16_t*)(reg_s6 + 66) = var_v0; /* 0x80038a5c */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x80038a60 */
    var_v1 = *(int32_t*)(reg_s6 + 40); /* 0x80038a64 */
    var_v0 = var_v0 + var_a0; /* 0x80038a68 */
    var_a0 = *(int16_t*)(reg_s6 + 66); /* 0x80038a6c */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x80038a70 */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x80038a74 */
    var_v1 = var_v1 + var_a1; /* 0x80038a78 */
    *(int32_t*)(reg_s6 + 40) = var_v1; /* 0x80038a7c */
    var_v1 = *(uint8_t*)(reg_s6 + 5); /* 0x80038a80 */
    var_v0 = var_v0 + var_a0; /* 0x80038a84 */
    /* Branch beqz at 0x80038a8c */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x80038a90 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x80038a94 */
    var_v1 = *(uint16_t*)(reg_s6 + 80); /* 0x80038a98 */
    var_v0 = var_v0 + var_v1; /* 0x80038aa0 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x80038aa4 */
    var_v1 = *(uint16_t*)(reg_s6 + 80); /* 0x80038aa8 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x80038ab4 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x80038ab8 */
    var_v1 = var_v0; /* 0x80038ac0 */
    *(int16_t*)(reg_s6 + 60) = var_v0; /* 0x80038ac4 */
    var_v0 = *(uint8_t*)(reg_s6 + 5); /* 0x80038ac8 */
    *(int16_t*)(reg_s6 + 58) = var_v1; /* 0x80038acc */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x80038ad0 */
    var_v0 = var_v0 + 1; /* 0x80038ad4 */
    *(int8_t*)(reg_s6 + 5) = var_v0; /* 0x80038adc */
    var_v1 = *(uint16_t*)(reg_s6 + 66); /* 0x80038ae0 */
    var_a1 = *(int16_t*)(reg_s6 + 64); /* 0x80038ae4 */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x80038ae8 */
    var_a0 = *(uint16_t*)(reg_s6 + 82); /* 0x80038aec */
    var_v0 = var_v0 + var_a1; /* 0x80038af0 */
    var_a1 = *(int16_t*)(reg_s6 + 68); /* 0x80038af4 */
    var_v1 = var_v1 + var_a0; /* 0x80038af8 */
    *(int16_t*)(reg_s6 + 66) = var_v1; /* 0x80038afc */
    var_v1 = *(uint16_t*)(reg_s6 + 56); /* 0x80038b00 */
    var_a0 = *(uint16_t*)(reg_s6 + 80); /* 0x80038b04 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x80038b08 */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x80038b0c */
    var_v1 = var_v1 + var_a0; /* 0x80038b10 */
    var_a0 = *(int16_t*)(reg_s6 + 66); /* 0x80038b14 */
    var_v0 = var_v0 + var_a1; /* 0x80038b18 */
    *(int32_t*)(reg_s6 + 40) = var_v0; /* 0x80038b1c */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x80038b20 */
    *(int16_t*)(reg_s6 + 56) = var_v1; /* 0x80038b24 */
    *(int16_t*)(reg_s6 + 60) = var_v1; /* 0x80038b28 */
    var_v1 = *(uint8_t*)(reg_s6 + 5); /* 0x80038b2c */
    var_v0 = var_v0 + var_a0; /* 0x80038b30 */
    /* Branch beqz at 0x80038b38 */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x80038b3c */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x80038b40 */
    var_v0 = var_v0 << 0x1; /* 0x80038b48 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x80038b4c */
    var_v1 = *(uint16_t*)(reg_s6 + 80); /* 0x80038b50 */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x80038b5c */
    var_v0 = *(uint8_t*)(reg_s6 + 5); /* 0x80038b60 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x80038b64 */
    var_v0 = var_v0 + 1; /* 0x80038b68 */
    *(int8_t*)(reg_s6 + 5) = var_v0; /* 0x80038b70 */
    var_v0 = *(uint16_t*)(reg_s6 + 66); /* 0x80038b74 */
    var_v1 = *(uint16_t*)(reg_s6 + 82); /* 0x80038b78 */
    var_a0 = *(int16_t*)(reg_s6 + 64); /* 0x80038b7c */
    var_a1 = *(int16_t*)(reg_s6 + 68); /* 0x80038b80 */
    var_v0 = var_v0 + var_v1; /* 0x80038b84 */
    *(int16_t*)(reg_s6 + 66) = var_v0; /* 0x80038b88 */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x80038b8c */
    var_v1 = *(int32_t*)(reg_s6 + 40); /* 0x80038b90 */
    var_v0 = var_v0 + var_a0; /* 0x80038b94 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x80038b98 */
    var_v0 = *(uint8_t*)(reg_s6 + 5); /* 0x80038b9c */
    var_v1 = var_v1 + var_a1; /* 0x80038ba0 */
    *(int32_t*)(reg_s6 + 40) = var_v1; /* 0x80038ba4 */
    var_v1 = *(uint16_t*)(reg_s6 + 80); /* 0x80038ba8 */
    var_v0 = var_v0 << 0x7; /* 0x80038bac */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x80038bb4 */
    var_a0 = *(uint8_t*)(reg_s6 + 5); /* 0x80038bb8 */
    var_v0 = var_v0 + var_v1; /* 0x80038bbc */
    var_v1 = *(int16_t*)(reg_s6 + 66); /* 0x80038bc0 */
    var_a0 = var_a0 + 1; /* 0x80038bc4 */
    *(int8_t*)(reg_s6 + 5) = var_a0; /* 0x80038bc8 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x80038bcc */
    *(int16_t*)(reg_s6 + 60) = var_v0; /* 0x80038bd0 */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x80038bd4 */
    var_a0 = *(int16_t*)(reg_s6 + 16); /* 0x80038bd8 */
    var_v0 = var_v0 + var_v1; /* 0x80038bdc */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x80038be0 */
    /* Branch beqz at 0x80038be8 */
    var_v0 = var_a0 << 0x9; /* 0x80038bec */
    *(int16_t*)(reg_s6 + 18) = var_v0; /* 0x80038bf4 */
    var_v0 = 0x8009 << 16; /* 0x80038bf8 */
    var_a2 = var_v0 + -32736; /* 0x80038bfc */
    var_a1 = var_s6 + 80; /* 0x80038c20 */
    var_a2 = var_sp + 120; /* 0x80038c24 */
    var_v0 = 784; /* 0x80038c28 */
    *(int16_t*)(stack + 128) = var_v0; /* 0x80038c2c */
    var_v0 = 352; /* 0x80038c30 */
    *(int16_t*)(stack + 130) = var_v0; /* 0x80038c34 */
    var_a0 = *(uint8_t*)(reg_s6 + 0); /* 0x80038c38 */
    var_a3 = var_sp + 128; /* 0x80038c3c */
    var_a0 = var_a0 & 0x20; /* 0x80038c40 */
    func_0x80038464(); /* 0x80038c44 */
    var_v0 = *(uint8_t*)(reg_s6 + 80); /* 0x80038c4c */
    var_v0 = var_v0 + 4; /* 0x80038c54 */
    /* Branch bnez at 0x80038c58 */
    *(int8_t*)(reg_s6 + 80) = var_v0; /* 0x80038c5c */
    var_v0 = *(uint8_t*)(reg_s6 + 81); /* 0x80038c60 */
    var_v0 = var_v0 + 1; /* 0x80038c68 */
    *(int8_t*)(reg_s6 + 81) = var_v0; /* 0x80038c6c */
    var_v0 = var_v0 << 0x18; /* 0x80038c70 */
    var_v0 = var_v0 >> 0x18; /* 0x80038c74 */
    /* Branch beqz at 0x80038c7c */
    var_v0 = *(uint16_t*)(reg_s6 + 66); /* 0x80038c84 */
    var_v0 = var_v0 + -56; /* 0x80038c8c */
    *(int16_t*)(reg_s6 + 66) = var_v0; /* 0x80038c90 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x80038c94 */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x80038c98 */
    func_0x80038300(); /* 0x80038c9c */
    var_s0 = var_v0; /* 0x80038ca4 */
    /* Branch beqz at 0x80038ca8 */
    var_v0 = var_s0 & 0x10; /* 0x80038cac */
    /* Branch beqz at 0x80038cb0 */
    var_v0 = 0x801b << 16; /* 0x80038cb4 */
    var_v1 = *(int32_t*)(reg_v0 + 22948); /* 0x80038cb8 */
    var_v0 = var_v1 << 0x1; /* 0x80038cc0 */
    var_v0 = var_v0 + var_v1; /* 0x80038cc4 */
    var_v0 = var_v0 << 0x2; /* 0x80038cc8 */
    var_v0 = var_v0 + var_v1; /* 0x80038ccc */
    var_v0 = var_v0 << 0x2; /* 0x80038cd0 */
    var_v0 = var_v0 + var_v1; /* 0x80038cd4 */
    var_v0 = var_v0 << 0x2; /* 0x80038cd8 */
    var_v1 = 0x801c << 16; /* 0x80038cdc */
    var_v1 = var_v1 + -24264; /* 0x80038ce0 */
    var_v1 = var_v0 + var_v1; /* 0x80038ce4 */
    var_v0 = *(uint16_t*)(reg_v1 + 44); /* 0x80038ce8 */
    /* Branch beqz at 0x80038cf0 */
    var_v0 = 1; /* 0x80038cf4 */
    var_v1 = *(uint8_t*)(reg_v1 + 31); /* 0x80038cf8 */
    /* Branch beq at 0x80038d00 */
    func_0x8003618c(); /* 0x80038d08 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80038d10 */
    var_a0 = var_s6; /* 0x80038d14 */
    var_a1 = (uint32_t)var_a1 >> 0x2; /* 0x80038d18 */
    var_a1 = var_a1 & 0x8; /* 0x80038d1c */
    func_0x80035cc8(); /* 0x80038d20 */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x80038d28 */
    *(int32_t*)(stack + 144) = var_v0; /* 0x80038d30 */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x80038d34 */
    *(int32_t*)(stack + 148) = var_v0; /* 0x80038d3c */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x80038d40 */
    *(int32_t*)(stack + 152) = var_v0; /* 0x80038d48 */
    var_v0 = *(uint16_t*)(reg_s6 + 64); /* 0x80038d4c */
    var_v0 = var_v0 << 0x10; /* 0x80038d54 */
    var_v0 = var_v0 >> 0x11; /* 0x80038d58 */
    *(int16_t*)(stack + 136) = var_v0; /* 0x80038d5c */
    var_v0 = *(uint16_t*)(reg_s6 + 66); /* 0x80038d60 */
    var_v0 = var_v0 << 0x10; /* 0x80038d68 */
    var_v0 = var_v0 >> 0x11; /* 0x80038d6c */
    *(int16_t*)(stack + 138) = var_v0; /* 0x80038d70 */
    var_v0 = *(uint16_t*)(reg_s6 + 68); /* 0x80038d74 */
    var_v0 = var_v0 << 0x10; /* 0x80038d7c */
    var_v0 = var_v0 >> 0x11; /* 0x80038d80 */
    *(int16_t*)(stack + 140) = var_v0; /* 0x80038d84 */
    var_v0 = var_s0 & 0x11; /* 0x80038d88 */
    /* Branch beqz at 0x80038d8c */
    var_a0 = 10; /* 0x80038d90 */
    var_a2 = 179; /* 0x80038d94 */
    var_a3 = var_sp + 144; /* 0x80038d98 */
    var_v0 = 1; /* 0x80038d9c */
    *(int8_t*)(reg_s6 + 5) = var_v0; /* 0x80038da0 */
    *(int16_t*)(stack + 138) = var_zero; /* 0x80038da4 */
    *(int16_t*)(stack + 160) = var_zero; /* 0x80038da8 */
    *(int16_t*)(stack + 162) = var_zero; /* 0x80038dac */
    *(int16_t*)(stack + 164) = var_zero; /* 0x80038db0 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80038db4 */
    var_v0 = var_sp + 136; /* 0x80038db8 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x80038dbc */
    var_v0 = 512; /* 0x80038dc0 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x80038dc4 */
    var_v0 = 256; /* 0x80038dc8 */
    *(int32_t*)(stack + 24) = var_v0; /* 0x80038dcc */
    var_v0 = 8; /* 0x80038dd0 */
    *(int32_t*)(stack + 28) = var_v0; /* 0x80038dd4 */
    var_v0 = 4; /* 0x80038dd8 */
    *(int32_t*)(stack + 32) = var_v0; /* 0x80038ddc */
    var_v0 = 15; /* 0x80038de0 */
    func_0x80036484(); /* 0x80038de4 */
    *(int8_t*)(reg_s6 + 82) = var_zero; /* 0x80038dec */
    *(int8_t*)(reg_s6 + 83) = var_zero; /* 0x80038df4 */
    var_v0 = 2; /* 0x80038df8 */
    *(int8_t*)(reg_s6 + 5) = var_v0; /* 0x80038dfc */
    var_v0 = 8; /* 0x80038e00 */
    *(int16_t*)(reg_s6 + 64) = var_zero; /* 0x80038e04 */
    *(int16_t*)(reg_s6 + 66) = var_v0; /* 0x80038e08 */
    *(int16_t*)(reg_s6 + 68) = var_zero; /* 0x80038e0c */
    var_v0 = 0x801b << 16; /* 0x80038e10 */
    var_a0 = var_v0 + 22856; /* 0x80038e14 */
    var_v1 = *(uint16_t*)(reg_a0 + 48); /* 0x80038e18 */
    var_v0 = 2048; /* 0x80038e1c */
    var_t0 = var_v0 << 0x10; /* 0x80038e24 */
    /* Branch blez at 0x80038e28 */
    var_a2 = 177; /* 0x80038e2c */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x80038e30 */
    *(int32_t*)(stack + 144) = var_v0; /* 0x80038e38 */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x80038e3c */
    var_v1 = *(int32_t*)(reg_a0 + 48); /* 0x80038e40 */
    var_v0 = var_v0 + var_v1; /* 0x80038e48 */
    *(int32_t*)(stack + 148) = var_v0; /* 0x80038e4c */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x80038e50 */
    *(int32_t*)(stack + 152) = var_v0; /* 0x80038e58 */
    var_v0 = *(uint16_t*)(reg_s6 + 64); /* 0x80038e5c */
    var_v0 = var_v0 << 0x10; /* 0x80038e64 */
    var_v0 = var_v0 >> 0x11; /* 0x80038e68 */
    *(int16_t*)(stack + 136) = var_v0; /* 0x80038e6c */
    var_v0 = *(uint16_t*)(reg_s6 + 66); /* 0x80038e70 */
    var_a3 = var_sp + 144; /* 0x80038e74 */
    var_v0 = var_v0 << 0x10; /* 0x80038e78 */
    var_v0 = var_v0 >> 0x11; /* 0x80038e7c */
    *(int16_t*)(stack + 138) = var_v0; /* 0x80038e80 */
    var_v0 = *(uint16_t*)(reg_s6 + 68); /* 0x80038e84 */
    var_a0 = 10; /* 0x80038e88 */
    var_v0 = var_v0 << 0x10; /* 0x80038e8c */
    var_v0 = var_v0 >> 0x11; /* 0x80038e90 */
    *(int16_t*)(stack + 140) = var_v0; /* 0x80038e94 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80038e98 */
    var_v0 = var_sp + 136; /* 0x80038e9c */
    *(int32_t*)(stack + 16) = var_v0; /* 0x80038ea0 */
    var_v0 = var_t0 >> 0x12; /* 0x80038ea4 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x80038ea8 */
    var_v0 = var_t0 >> 0x13; /* 0x80038eac */
    *(int32_t*)(stack + 24) = var_v0; /* 0x80038eb0 */
    var_v0 = 6; /* 0x80038eb4 */
    *(int32_t*)(stack + 28) = var_v0; /* 0x80038eb8 */
    var_v0 = 2; /* 0x80038ebc */
    *(int32_t*)(stack + 32) = var_v0; /* 0x80038ec0 */
    var_v0 = 15; /* 0x80038ec8 */
    var_v0 = 1; /* 0x80038ecc */
    /* Branch bne at 0x80038ed0 */
    var_v0 = *(uint8_t*)(reg_s6 + 82); /* 0x80038ed8 */
    var_v0 = var_v0 + 1; /* 0x80038ee0 */
    *(int8_t*)(reg_s6 + 82) = var_v0; /* 0x80038ee4 */
    var_v0 = *(uint8_t*)(reg_s6 + 83); /* 0x80038ee8 */
    var_v1 = *(int8_t*)(reg_s6 + 82); /* 0x80038eec */
    var_v0 = var_v0 + 1; /* 0x80038ef0 */
    *(int8_t*)(reg_s6 + 83) = var_v0; /* 0x80038ef4 */
    /* Branch beqz at 0x80038efc */
    /* Branch beqz at 0x80038f04 */
    var_a0 = var_sp + 224; /* 0x80038f08 */
    var_v0 = *(uint16_t*)(reg_s6 + 64); /* 0x80038f0c */
    *(int16_t*)(stack + 162) = var_zero; /* 0x80038f10 */
    var_v0 = var_v0 << 0x10; /* 0x80038f14 */
    var_v0 = var_v0 >> 0x11; /* 0x80038f18 */
    *(int16_t*)(stack + 160) = var_v0; /* 0x80038f1c */
    var_v0 = *(uint16_t*)(reg_s6 + 68); /* 0x80038f20 */
    var_v0 = var_v0 << 0x10; /* 0x80038f28 */
    var_v0 = var_v0 >> 0x11; /* 0x80038f2c */
    *(int16_t*)(stack + 164) = var_v0; /* 0x80038f30 */
    var_v0 = *(uint16_t*)(reg_s6 + 48); /* 0x80038f34 */
    *(int16_t*)(stack + 224) = var_v0; /* 0x80038f40 */
    var_v0 = *(uint16_t*)(reg_s6 + 50); /* 0x80038f44 */
    var_s1 = var_sp + 192; /* 0x80038f48 */
    *(int16_t*)(stack + 226) = var_v0; /* 0x80038f50 */
    var_v0 = *(uint16_t*)(reg_s6 + 52); /* 0x80038f54 */
    var_a1 = var_s1; /* 0x80038f58 */
    func_0x80075154(); /* 0x80038f60 */
    var_a0 = *(int8_t*)(reg_s6 + 82); /* 0x80038f68 */
    var_a0 = var_a0 << 0x9; /* 0x80038f70 */
    func_0x800744c4(); /* 0x80038f74 */
    var_v0 = var_v0 + 15; /* 0x80038f84 */
    var_v0 = var_v0 >> 0x4; /* 0x80038f88 */
    var_v0 = var_v0 + 256; /* 0x80038f8c */
    *(int16_t*)(stack + 184) = var_v0; /* 0x80038f90 */
    *(int16_t*)(stack + 186) = var_zero; /* 0x80038f94 */
    var_a0 = *(int8_t*)(reg_s6 + 82); /* 0x80038f98 */
    var_a0 = var_a0 << 0x9; /* 0x80038fa0 */
    func_0x800743f4(); /* 0x80038fa4 */
    var_v0 = var_v0 + 15; /* 0x80038fb4 */
    var_a0 = var_s1; /* 0x80038fb8 */
    var_s0 = var_sp + 184; /* 0x80038fbc */
    var_a1 = var_s0; /* 0x80038fc0 */
    var_a2 = var_s0; /* 0x80038fc4 */
    var_v0 = var_v0 >> 0x4; /* 0x80038fc8 */
    func_0x80074cf4(); /* 0x80038fcc */
    var_a0 = 10; /* 0x80038fd4 */
    var_a2 = 178; /* 0x80038fd8 */
    var_s3 = var_sp + 168; /* 0x80038fdc */
    var_a3 = var_s3; /* 0x80038fe0 */
    var_s2 = var_sp + 160; /* 0x80038fe4 */
    var_s8 = 128; /* 0x80038fe8 */
    var_v1 = *(int16_t*)(stack + 184); /* 0x80038fec */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x80038ff0 */
    var_s7 = 6; /* 0x80038ff4 */
    var_v0 = var_v0 + var_v1; /* 0x80038ff8 */
    *(int32_t*)(stack + 168) = var_v0; /* 0x80038ffc */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x80039000 */
    var_v1 = *(int16_t*)(stack + 188); /* 0x80039004 */
    var_s5 = 3; /* 0x80039008 */
    *(int32_t*)(stack + 172) = var_v0; /* 0x8003900c */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x80039010 */
    var_s4 = 15; /* 0x80039014 */
    var_v0 = var_v0 + var_v1; /* 0x80039018 */
    *(int32_t*)(stack + 176) = var_v0; /* 0x8003901c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039020 */
    var_t1 = 256; /* 0x80039024 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x80039028 */
    *(int32_t*)(stack + 20) = var_t1; /* 0x8003902c */
    *(int32_t*)(stack + 24) = var_s8; /* 0x80039030 */
    *(int32_t*)(stack + 28) = var_s7; /* 0x80039034 */
    *(int32_t*)(stack + 32) = var_s5; /* 0x80039038 */
    func_0x80036484(); /* 0x8003903c */
    var_a0 = *(int8_t*)(reg_s6 + 82); /* 0x80039044 */
    func_0x800744c4(); /* 0x80039048 */
    var_v0 = var_v0 + 15; /* 0x80039058 */
    var_v0 = var_v0 >> 0x4; /* 0x8003905c */
    var_v0 = var_v0 + -256; /* 0x80039060 */
    *(int16_t*)(stack + 184) = var_v0; /* 0x80039064 */
    *(int16_t*)(stack + 186) = var_zero; /* 0x80039068 */
    var_a0 = *(int8_t*)(reg_s6 + 82); /* 0x8003906c */
    func_0x800743f4(); /* 0x80039070 */
    var_a0 = var_s1; /* 0x8003907c */
    var_v0 = var_v0 + 15; /* 0x80039080 */
    var_a1 = var_s0; /* 0x80039084 */
    var_a2 = var_a1; /* 0x80039088 */
    var_v0 = var_v0 >> 0x4; /* 0x8003908c */
    func_0x80074cf4(); /* 0x80039090 */
    var_v1 = *(int16_t*)(stack + 184); /* 0x80039098 */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x8003909c */
    var_a0 = 10; /* 0x800390a0 */
    var_v0 = var_v0 + var_v1; /* 0x800390a4 */
    *(int32_t*)(stack + 168) = var_v0; /* 0x800390a8 */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x800390ac */
    var_v1 = *(int16_t*)(stack + 188); /* 0x800390b0 */
    var_a2 = 178; /* 0x800390b4 */
    *(int32_t*)(stack + 172) = var_v0; /* 0x800390b8 */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x800390bc */
    var_a3 = var_s3; /* 0x800390c0 */
    var_v0 = var_v0 + var_v1; /* 0x800390c4 */
    *(int32_t*)(stack + 176) = var_v0; /* 0x800390c8 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x800390cc */
    var_t1 = 256; /* 0x800390d0 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x800390d4 */
    *(int32_t*)(stack + 20) = var_t1; /* 0x800390d8 */
    *(int32_t*)(stack + 24) = var_s8; /* 0x800390dc */
    *(int32_t*)(stack + 28) = var_s7; /* 0x800390e0 */
    *(int32_t*)(stack + 32) = var_s5; /* 0x800390e4 */
    func_0x80036484(); /* 0x800390e8 */
    var_v0 = *(uint16_t*)(reg_s6 + 48); /* 0x800390f8 */
    var_v1 = *(uint8_t*)(reg_s6 + 5); /* 0x800390fc */
    var_v0 = var_v0 + 64; /* 0x80039100 */
    *(int16_t*)(reg_s6 + 48) = var_v0; /* 0x80039104 */
    var_v0 = var_v1 + 1; /* 0x80039108 */
    /* Branch bnez at 0x80039110 */
    *(int8_t*)(reg_s6 + 5) = var_v0; /* 0x80039114 */
    var_v0 = 255; /* 0x8003911c */
    var_a2 = *(int32_t*)(reg_s6 + 28); /* 0x80039120 */
    var_v1 = *(uint8_t*)(reg_a2 + 0); /* 0x80039128 */
    var_v0 = 255; /* 0x8003912c */
    /* Branch beq at 0x80039130 */
    var_v0 = 1; /* 0x80039134 */
    var_v1 = *(uint8_t*)(reg_a2 + 5); /* 0x80039138 */
    /* Branch beq at 0x80039140 */
    var_v0 = 255; /* 0x80039144 */
    /* Branch bnez at 0x80039148 */
    var_v0 = *(int32_t*)(reg_a2 + 32); /* 0x80039150 */
    var_v1 = *(int32_t*)(reg_a2 + 36); /* 0x80039154 */
    var_a0 = *(int32_t*)(reg_a2 + 40); /* 0x80039158 */
    var_a1 = *(int32_t*)(reg_a2 + 44); /* 0x8003915c */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x80039160 */
    *(int32_t*)(reg_s6 + 36) = var_v1; /* 0x80039164 */
    *(int32_t*)(reg_s6 + 40) = var_a0; /* 0x80039168 */
    *(int32_t*)(reg_s6 + 44) = var_a1; /* 0x8003916c */
    var_v0 = *(uint8_t*)(reg_s6 + 80); /* 0x80039178 */
    var_v1 = *(int32_t*)(reg_s6 + 36); /* 0x8003917c */
    var_v0 = var_v0 + 1; /* 0x80039180 */
    *(int8_t*)(reg_s6 + 80) = var_v0; /* 0x80039184 */
    var_v0 = var_v0 << 0x18; /* 0x80039188 */
    var_v0 = var_v0 >> 0x14; /* 0x8003918c */
    var_v1 = var_v1 + var_v0; /* 0x80039190 */
    *(int32_t*)(reg_s6 + 36) = var_v1; /* 0x80039194 */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x80039198 */
    var_v0 = 255; /* 0x800391c8 */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x800391cc */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x800391d0 */
    var_a2 = *(int32_t*)(reg_s6 + 28); /* 0x800391dc */
    var_v1 = *(uint8_t*)(reg_a2 + 0); /* 0x800391e4 */
    var_v0 = 255; /* 0x800391e8 */
    /* Branch beq at 0x800391ec */
    var_v0 = 1; /* 0x800391f0 */
    var_v1 = *(uint8_t*)(reg_a2 + 5); /* 0x800391f4 */
    /* Branch beq at 0x800391fc */
    var_v0 = 255; /* 0x80039200 */
    /* Branch bnez at 0x80039204 */
    var_v0 = *(int32_t*)(reg_a2 + 32); /* 0x8003920c */
    var_v1 = *(int32_t*)(reg_a2 + 36); /* 0x80039210 */
    var_a0 = *(int32_t*)(reg_a2 + 40); /* 0x80039214 */
    var_a1 = *(int32_t*)(reg_a2 + 44); /* 0x80039218 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x8003921c */
    *(int32_t*)(reg_s6 + 36) = var_v1; /* 0x80039220 */
    *(int32_t*)(reg_s6 + 40) = var_a0; /* 0x80039224 */
    *(int32_t*)(reg_s6 + 44) = var_a1; /* 0x80039228 */
    var_v0 = *(uint8_t*)(reg_s6 + 80); /* 0x80039234 */
    var_v1 = *(int32_t*)(reg_s6 + 36); /* 0x80039238 */
    var_v0 = var_v0 + 1; /* 0x8003923c */
    *(int8_t*)(reg_s6 + 80) = var_v0; /* 0x80039240 */
    var_v0 = var_v0 << 0x18; /* 0x80039244 */
    var_v0 = var_v0 >> 0x16; /* 0x80039248 */
    var_v1 = var_v1 + var_v0; /* 0x8003924c */
    *(int32_t*)(reg_s6 + 36) = var_v1; /* 0x80039250 */
    var_v0 = *(uint8_t*)(reg_s6 + 81); /* 0x80039254 */
    var_v0 = var_v0 + 1; /* 0x8003925c */
    *(int8_t*)(reg_s6 + 81) = var_v0; /* 0x80039260 */
    var_v0 = var_v0 << 0x18; /* 0x80039264 */
    var_v0 = var_v0 >> 0x18; /* 0x80039268 */
    /* Branch bnez at 0x80039270 */
    *(int8_t*)(reg_s6 + 81) = var_zero; /* 0x80039278 */
    var_v0 = *(uint8_t*)(reg_s6 + 81); /* 0x8003927c */
    var_v0 = var_v0 | 0x80; /* 0x80039284 */
    *(int8_t*)(reg_s6 + 2) = var_v0; /* 0x8003928c */
    var_v0 = 255; /* 0x80039290 */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x80039294 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x80039298 */
    var_v1 = *(int16_t*)(reg_s6 + 64); /* 0x800392a4 */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x800392a8 */
    var_a0 = *(int16_t*)(reg_s6 + 66); /* 0x800392ac */
    var_a1 = *(int16_t*)(reg_s6 + 68); /* 0x800392b0 */
    var_v0 = var_v0 + var_v1; /* 0x800392b4 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x800392b8 */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x800392bc */
    var_v1 = *(int32_t*)(reg_s6 + 40); /* 0x800392c0 */
    var_v0 = var_v0 + var_a0; /* 0x800392c4 */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x800392c8 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x800392cc */
    var_a0 = *(uint16_t*)(reg_s6 + 80); /* 0x800392d0 */
    var_v1 = var_v1 + var_a1; /* 0x800392d4 */
    *(int32_t*)(reg_s6 + 40) = var_v1; /* 0x800392d8 */
    var_v1 = *(uint8_t*)(reg_s6 + 5); /* 0x800392dc */
    var_v0 = var_v0 + var_a0; /* 0x800392e0 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x800392e8 */
    /* Branch beqz at 0x800392ec */
    *(int16_t*)(reg_s6 + 60) = var_v0; /* 0x800392f0 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x800392f4 */
    var_v0 = var_v0 << 0x1; /* 0x800392fc */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x80039300 */
    var_v1 = *(uint16_t*)(reg_s6 + 80); /* 0x80039304 */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x80039310 */
    var_v0 = *(uint8_t*)(reg_s6 + 5); /* 0x80039314 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x80039318 */
    var_v0 = var_v0 + 1; /* 0x8003931c */
    *(int8_t*)(reg_s6 + 5) = var_v0; /* 0x80039324 */
    var_v1 = *(int16_t*)(reg_s6 + 64); /* 0x80039328 */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x8003932c */
    var_a0 = *(int16_t*)(reg_s6 + 66); /* 0x80039330 */
    var_a1 = *(int16_t*)(reg_s6 + 68); /* 0x80039334 */
    var_v0 = var_v0 + var_v1; /* 0x80039338 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x8003933c */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x80039340 */
    var_v1 = *(int32_t*)(reg_s6 + 40); /* 0x80039344 */
    var_v0 = var_v0 + var_a0; /* 0x80039348 */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x8003934c */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x80039350 */
    var_a0 = *(uint16_t*)(reg_s6 + 80); /* 0x80039354 */
    var_v1 = var_v1 + var_a1; /* 0x80039358 */
    *(int32_t*)(reg_s6 + 40) = var_v1; /* 0x8003935c */
    var_v1 = *(uint8_t*)(reg_s6 + 5); /* 0x80039360 */
    var_v0 = var_v0 + var_a0; /* 0x80039364 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x8003936c */
    /* Branch beqz at 0x80039370 */
    *(int16_t*)(reg_s6 + 60) = var_v0; /* 0x80039374 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x80039378 */
    var_v0 = var_v0 << 0x1; /* 0x80039380 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x80039384 */
    var_v1 = *(uint16_t*)(reg_s6 + 80); /* 0x80039388 */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x80039394 */
    var_v0 = *(uint8_t*)(reg_s6 + 5); /* 0x80039398 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003939c */
    var_v0 = var_v0 + 1; /* 0x800393a0 */
    *(int8_t*)(reg_s6 + 5) = var_v0; /* 0x800393a8 */
    var_v1 = *(int16_t*)(reg_s6 + 64); /* 0x800393ac */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x800393b0 */
    var_a0 = *(int16_t*)(reg_s6 + 66); /* 0x800393b4 */
    var_a1 = *(int16_t*)(reg_s6 + 68); /* 0x800393b8 */
    var_v0 = var_v0 + var_v1; /* 0x800393bc */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x800393c0 */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x800393c4 */
    var_v1 = *(int32_t*)(reg_s6 + 40); /* 0x800393c8 */
    var_v0 = var_v0 + var_a0; /* 0x800393cc */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x800393d0 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x800393d4 */
    var_a0 = *(uint16_t*)(reg_s6 + 80); /* 0x800393d8 */
    var_v1 = var_v1 + var_a1; /* 0x800393dc */
    *(int32_t*)(reg_s6 + 40) = var_v1; /* 0x800393e0 */
    var_v1 = *(uint8_t*)(reg_s6 + 5); /* 0x800393e4 */
    var_v0 = var_v0 + var_a0; /* 0x800393e8 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x800393f0 */
    /* Branch beqz at 0x800393f4 */
    *(int16_t*)(reg_s6 + 60) = var_v0; /* 0x800393f8 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x800393fc */
    var_v0 = var_v0 << 0x1; /* 0x80039404 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x80039408 */
    var_v1 = *(uint16_t*)(reg_s6 + 80); /* 0x8003940c */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x80039418 */
    var_v0 = *(uint8_t*)(reg_s6 + 5); /* 0x8003941c */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x80039420 */
    var_v0 = var_v0 + 1; /* 0x80039424 */
    *(int8_t*)(reg_s6 + 5) = var_v0; /* 0x8003942c */
    var_v0 = *(uint16_t*)(reg_s6 + 16); /* 0x80039430 */
    var_v0 = (uint32_t)var_v0 >> 0x3; /* 0x80039438 */
    var_v0 = var_v0 & 0x1; /* 0x8003943c */
    /* Branch beqz at 0x80039440 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x80039448 */
    var_v0 = var_v0 + -64; /* 0x80039450 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x80039454 */
    var_v0 = var_v0 + 64; /* 0x8003945c */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x80039460 */
    var_s0 = var_zero; /* 0x80039468 */
    var_v0 = *(uint16_t*)(reg_s6 + 50); /* 0x8003946c */
    var_v1 = *(uint16_t*)(reg_s6 + 82); /* 0x80039470 */
    var_v0 = var_v0 + var_v1; /* 0x80039478 */
    func_0x80078ac4(); /* 0x8003947c */
    var_v1 = *(uint16_t*)(reg_s6 + 64); /* 0x80039484 */
    var_v1 = var_v1 + 32; /* 0x8003948c */
    var_v0 = var_v0 + 511; /* 0x80039490 */
    var_v0 = var_v0 >> 0x9; /* 0x80039494 */
    func_0x80078ac4(); /* 0x8003949c */
    var_v1 = *(uint16_t*)(reg_s6 + 66); /* 0x800394a4 */
    var_v1 = var_v1 + 16; /* 0x800394ac */
    var_v0 = var_v0 + 1023; /* 0x800394b0 */
    var_v0 = var_v0 >> 0xa; /* 0x800394b4 */
    func_0x80078ac4(); /* 0x800394bc */
    var_v1 = *(uint16_t*)(reg_s6 + 68); /* 0x800394c4 */
    var_v1 = var_v1 + 32; /* 0x800394cc */
    var_v0 = var_v0 + 511; /* 0x800394d0 */
    var_v0 = var_v0 >> 0x9; /* 0x800394d4 */
    *(int16_t*)(reg_s6 + 68) = var_v0; /* 0x800394e0 */
    var_s0 = 128; /* 0x800394e4 */
    var_s3 = 1; /* 0x800394ec */
    var_s0 = 384; /* 0x800394f4 */
    var_s0 = 384; /* 0x800394f8 */
    var_s3 = 1; /* 0x80039500 */
    var_v0 = *(uint16_t*)(reg_s6 + 50); /* 0x80039504 */
    *(int16_t*)(reg_s6 + 48) = var_zero; /* 0x80039508 */
    var_v0 = var_v0 + 384; /* 0x8003950c */
    *(int16_t*)(reg_s6 + 50) = var_v0; /* 0x80039510 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x80039514 */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x80039518 */
    func_0x80038300(); /* 0x8003951c */
    var_s0 = var_v0; /* 0x80039524 */
    /* Branch beqz at 0x80039528 */
    var_v0 = var_s0 & 0x10; /* 0x8003952c */
    /* Branch beqz at 0x80039530 */
    var_v0 = 0x801b << 16; /* 0x80039534 */
    var_v1 = *(int32_t*)(reg_v0 + 22948); /* 0x80039538 */
    var_v0 = var_v1 << 0x1; /* 0x80039540 */
    var_v0 = var_v0 + var_v1; /* 0x80039544 */
    var_v0 = var_v0 << 0x2; /* 0x80039548 */
    var_v0 = var_v0 + var_v1; /* 0x8003954c */
    var_v0 = var_v0 << 0x2; /* 0x80039550 */
    var_v0 = var_v0 + var_v1; /* 0x80039554 */
    var_v0 = var_v0 << 0x2; /* 0x80039558 */
    var_v1 = 0x801c << 16; /* 0x8003955c */
    var_v1 = var_v1 + -24264; /* 0x80039560 */
    var_s1 = var_v0 + var_v1; /* 0x80039564 */
    var_v0 = *(uint16_t*)(reg_s1 + 44); /* 0x80039568 */
    /* Branch beqz at 0x80039570 */
    var_s2 = 1; /* 0x80039574 */
    var_v0 = *(uint8_t*)(reg_s1 + 31); /* 0x80039578 */
    /* Branch beq at 0x80039580 */
    func_0x8003618c(); /* 0x80039588 */
    *(int8_t*)(reg_s6 + 5) = var_s2; /* 0x80039590 */
    *(int32_t*)(reg_s6 + 84) = var_s1; /* 0x80039598 */
    func_0x8003618c(); /* 0x8003959c */
    /* Branch bnez at 0x800395a4 */
    var_v0 = 255; /* 0x800395a8 */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x800395ac */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x800395b0 */
    var_a0 = var_s6; /* 0x800395b4 */
    var_a1 = (uint32_t)var_a1 >> 0x2; /* 0x800395b8 */
    var_a1 = var_a1 & 0x8; /* 0x800395bc */
    func_0x80035cc8(); /* 0x800395c0 */
    var_v0 = 7; /* 0x800395c8 */
    *(int8_t*)(reg_s6 + 8) = var_v0; /* 0x800395d0 */
    var_v0 = *(uint8_t*)(reg_s6 + 80); /* 0x800395d4 */
    var_v1 = *(uint16_t*)(reg_s6 + 66); /* 0x800395d8 */
    var_v0 = var_v0 << 0x18; /* 0x800395dc */
    var_v0 = var_v0 >> 0x18; /* 0x800395e0 */
    var_v1 = var_v1 + var_v0; /* 0x800395e4 */
    *(int16_t*)(reg_s6 + 66) = var_v1; /* 0x800395e8 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x800395ec */
    var_v0 = *(uint16_t*)(reg_s6 + 50); /* 0x800395f8 */
    var_v1 = *(uint8_t*)(reg_s6 + 5); /* 0x800395fc */
    *(int16_t*)(reg_s6 + 48) = var_zero; /* 0x80039600 */
    var_v0 = var_v0 + 128; /* 0x80039604 */
    /* Branch beqz at 0x80039608 */
    *(int16_t*)(reg_s6 + 50) = var_v0; /* 0x8003960c */
    var_v0 = 1; /* 0x80039610 */
    /* Branch bne at 0x80039614 */
    var_v0 = *(uint16_t*)(reg_s6 + 52); /* 0x8003961c */
    var_v0 = var_v0 + 128; /* 0x80039624 */
    *(int16_t*)(reg_s6 + 52) = var_v0; /* 0x80039628 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x8003962c */
    var_v1 = *(uint16_t*)(reg_s6 + 60); /* 0x80039630 */
    var_v0 = var_v0 + 128; /* 0x80039634 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x80039638 */
    var_a0 = *(int16_t*)(reg_s6 + 56); /* 0x8003963c */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x80039640 */
    var_v1 = var_v1 + 128; /* 0x80039644 */
    *(int16_t*)(reg_s6 + 60) = var_v1; /* 0x80039648 */
    var_v0 = var_v0 + 128; /* 0x8003964c */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x80039654 */
    var_a0 = var_a0 + 15; /* 0x80039658 */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x8003965c */
    var_v0 = var_a0 >> 0x4; /* 0x80039660 */
    *(int16_t*)(reg_s6 + 12) = var_v0; /* 0x80039668 */
    var_v1 = var_v1 + 15; /* 0x8003966c */
    var_v0 = var_v1 >> 0x4; /* 0x80039670 */
    var_a0 = 0x8000 << 16; /* 0x80039674 */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x80039678 */
    var_v0 = var_v0 | var_a0; /* 0x8003967c */
    /* Branch bnez at 0x80039684 */
    *(int32_t*)(reg_s6 + 24) = var_v0; /* 0x80039688 */
    var_a2 = var_zero; /* 0x8003968c */
    var_a1 = var_v0; /* 0x80039690 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x80039694 */
    var_v0 = 255; /* 0x80039698 */
    func_0x80035d04(); /* 0x8003969c */
    var_a0 = var_v0; /* 0x800396a4 */
    var_v0 = var_a0 & 0x10; /* 0x800396a8 */
    /* Branch beqz at 0x800396ac */
    func_0x8003618c(); /* 0x800396b4 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x800396c4 */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x800396c8 */
    func_0x80038300(); /* 0x800396cc */
    var_s0 = var_v0; /* 0x800396d4 */
    /* Branch beqz at 0x800396d8 */
    var_a0 = var_s6; /* 0x800396dc */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x800396e0 */
    var_a1 = (uint32_t)var_a1 >> 0x2; /* 0x800396e8 */
    var_a1 = var_a1 & 0x8; /* 0x800396ec */
    func_0x80035cc8(); /* 0x800396f0 */
    var_v0 = var_s0 & 0x10; /* 0x800396f8 */
    /* Branch beqz at 0x800396fc */
    var_v0 = 0x801b << 16; /* 0x80039700 */
    var_v1 = *(int32_t*)(reg_v0 + 22948); /* 0x80039704 */
    var_v0 = var_v1 << 0x1; /* 0x8003970c */
    var_v0 = var_v0 + var_v1; /* 0x80039710 */
    var_v0 = var_v0 << 0x2; /* 0x80039714 */
    var_v0 = var_v0 + var_v1; /* 0x80039718 */
    var_v0 = var_v0 << 0x2; /* 0x8003971c */
    var_v0 = var_v0 + var_v1; /* 0x80039720 */
    var_v0 = var_v0 << 0x2; /* 0x80039724 */
    var_v1 = 0x801c << 16; /* 0x80039728 */
    var_v1 = var_v1 + -24264; /* 0x8003972c */
    var_s2 = var_v0 + var_v1; /* 0x80039730 */
    var_v0 = *(uint16_t*)(reg_s2 + 44); /* 0x80039734 */
    /* Branch beqz at 0x8003973c */
    var_s3 = 1; /* 0x80039740 */
    var_v0 = *(uint8_t*)(reg_s2 + 31); /* 0x80039744 */
    /* Branch beq at 0x8003974c */
    var_v0 = 255; /* 0x80039750 */
    func_0x8003618c(); /* 0x80039754 */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x8003975c */
    /* Branch bnez at 0x80039768 */
    var_v0 = 32; /* 0x8003976c */
    *(int16_t*)(reg_s6 + 16) = var_v0; /* 0x80039770 */
    *(int8_t*)(reg_s6 + 5) = var_s3; /* 0x80039774 */
    /* Branch beq at 0x80039778 */
    *(int32_t*)(reg_s6 + 84) = var_s2; /* 0x8003977c */
    var_v0 = 16; /* 0x80039780 */
    /* Branch beq at 0x80039784 */
    var_v0 = 255; /* 0x80039788 */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x80039790 */
    func_0x8003618c(); /* 0x80039794 */
    var_v0 = 255; /* 0x8003979c */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x800397a0 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x800397a4 */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x800397b0 */
    var_v1 = *(uint8_t*)(reg_v0 + 0); /* 0x800397b8 */
    var_v0 = 255; /* 0x800397bc */
    /* Branch beq at 0x800397c0 */
    var_v0 = 0x8009 << 16; /* 0x800397c4 */
    var_a2 = var_v0 + -32728; /* 0x800397c8 */
    var_v0 = *(uint8_t*)(reg_s6 + 80); /* 0x800397e0 */
    var_v0 = var_v0 + 1; /* 0x800397e8 */
    *(int8_t*)(reg_s6 + 80) = var_v0; /* 0x800397ec */
    var_v0 = var_v0 << 0x18; /* 0x800397f0 */
    var_v0 = var_v0 >> 0x18; /* 0x800397f4 */
    /* Branch bnez at 0x800397fc */
    var_v1 = var_sp + 160; /* 0x80039800 */
    *(int8_t*)(reg_s6 + 80) = var_zero; /* 0x80039804 */
    var_v0 = *(int8_t*)(reg_s6 + 80); /* 0x80039808 */
    var_v0 = var_v1 + var_v0; /* 0x80039810 */
    var_v0 = *(uint8_t*)(reg_v0 + 0); /* 0x80039814 */
    var_v1 = *(int32_t*)(reg_s6 + 28); /* 0x80039818 */
    var_v0 = var_v0 | 0x80; /* 0x8003981c */
    *(int8_t*)(reg_s6 + 2) = var_v0; /* 0x80039820 */
    var_v0 = *(int32_t*)(reg_v1 + 32); /* 0x80039824 */
    var_a0 = *(int32_t*)(reg_v1 + 36); /* 0x80039828 */
    var_a1 = *(int32_t*)(reg_v1 + 40); /* 0x8003982c */
    var_a2 = *(int32_t*)(reg_v1 + 44); /* 0x80039830 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x80039834 */
    *(int32_t*)(reg_s6 + 36) = var_a0; /* 0x80039838 */
    *(int32_t*)(reg_s6 + 40) = var_a1; /* 0x8003983c */
    *(int32_t*)(reg_s6 + 44) = var_a2; /* 0x80039840 */
    *(int8_t*)(reg_s6 + 0) = var_v1; /* 0x8003984c */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x80039850 */
    /* Branch beqz at 0x8003985c */
    var_v0 = var_v1 << 0x8; /* 0x80039860 */
    *(int16_t*)(reg_s6 + 18) = var_v0; /* 0x80039868 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x8003986c */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x80039870 */
    func_0x80038300(); /* 0x80039874 */
    var_s0 = var_v0; /* 0x8003987c */
    /* Branch beqz at 0x80039880 */
    var_v0 = var_s0 & 0x10; /* 0x80039884 */
    /* Branch beqz at 0x80039888 */
    var_v0 = 0x801b << 16; /* 0x8003988c */
    var_v1 = *(int32_t*)(reg_v0 + 22948); /* 0x80039890 */
    var_v0 = var_v1 << 0x1; /* 0x80039898 */
    var_v0 = var_v0 + var_v1; /* 0x8003989c */
    var_v0 = var_v0 << 0x2; /* 0x800398a0 */
    var_v0 = var_v0 + var_v1; /* 0x800398a4 */
    var_v0 = var_v0 << 0x2; /* 0x800398a8 */
    var_v0 = var_v0 + var_v1; /* 0x800398ac */
    var_v0 = var_v0 << 0x2; /* 0x800398b0 */
    var_v1 = 0x801c << 16; /* 0x800398b4 */
    var_v1 = var_v1 + -24264; /* 0x800398b8 */
    var_v1 = var_v0 + var_v1; /* 0x800398bc */
    var_v0 = *(uint16_t*)(reg_v1 + 44); /* 0x800398c0 */
    /* Branch beqz at 0x800398c8 */
    var_v0 = 1; /* 0x800398cc */
    var_v1 = *(uint8_t*)(reg_v1 + 31); /* 0x800398d0 */
    /* Branch beq at 0x800398d8 */
    var_v0 = 255; /* 0x800398dc */
    func_0x8003618c(); /* 0x800398e0 */
    var_v0 = 255; /* 0x800398ec */
    var_a3 = var_s6 + 48; /* 0x800398f0 */
    var_a0 = *(int16_t*)(reg_s6 + 64); /* 0x800398f4 */
    var_v0 = *(uint8_t*)(reg_s6 + 80); /* 0x800398f8 */
    var_a2 = *(int16_t*)(reg_s6 + 68); /* 0x800398fc */
    var_v1 = *(uint16_t*)(reg_s6 + 66); /* 0x80039900 */
    var_v0 = var_v0 << 0x18; /* 0x80039904 */
    var_v0 = var_v0 >> 0x18; /* 0x80039908 */
    var_v1 = var_v1 + var_v0; /* 0x8003990c */
    var_a1 = var_v1 << 0x10; /* 0x80039910 */
    var_a1 = var_a1 >> 0x10; /* 0x80039914 */
    func_0x8004a40c(); /* 0x80039918 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x80039928 */
    var_v0 = var_v0 + 96; /* 0x80039930 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x80039934 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x80039938 */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x8003993c */
    var_v0 = var_v0 + 96; /* 0x80039940 */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x80039944 */
    var_v0 = var_v1 << 0x3; /* 0x80039948 */
    var_v0 = var_v0 << 0x7; /* 0x80039950 */
    var_v0 = var_v0 + 4095; /* 0x8003995c */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x80039960 */
    var_v0 = var_v0 >> 0xc; /* 0x80039968 */
    var_v0 = 0x5555 << 16; /* 0x8003996c */
    var_v1 = *(uint16_t*)(reg_s6 + 16); /* 0x80039970 */
    var_v0 = var_v0 | 0x5556; /* 0x80039974 */
    var_v1 = var_v1 << 0x10; /* 0x80039978 */
    var_a0 = var_v1 >> 0x10; /* 0x8003997c */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x80039984 */
    var_v1 = var_v1 >> 0x1f; /* 0x80039988 */
    var_v0 = var_v0 + 96; /* 0x8003998c */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x80039990 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x80039994 */
    var_a1 = *(int16_t*)(reg_s6 + 56); /* 0x80039998 */
    var_v0 = var_v0 + 96; /* 0x8003999c */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x800399a0 */
    var_v0 = var_a1 << 0x3; /* 0x800399a4 */
    var_a1 = var_v0 << 0x7; /* 0x800399ac */
    var_v0 = var_v1 << 0x1; /* 0x800399b8 */
    var_v0 = var_v0 + var_v1; /* 0x800399bc */
    var_a0 = var_a0 | 0x80; /* 0x800399c8 */
    var_v0 = 0x5555 << 16; /* 0x800399cc */
    var_v1 = *(uint16_t*)(reg_s6 + 16); /* 0x800399d0 */
    var_v0 = var_v0 | 0x5556; /* 0x800399d4 */
    var_v1 = var_v1 << 0x10; /* 0x800399d8 */
    var_a0 = var_v1 >> 0x10; /* 0x800399dc */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x800399e4 */
    var_v1 = var_v1 >> 0x1f; /* 0x800399e8 */
    var_v0 = var_v0 + 96; /* 0x800399ec */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x800399f0 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x800399f4 */
    var_a1 = *(int16_t*)(reg_s6 + 56); /* 0x800399f8 */
    var_v0 = var_v0 + 96; /* 0x800399fc */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x80039a00 */
    var_v0 = var_a1 << 0x3; /* 0x80039a04 */
    var_a1 = var_v0 << 0x7; /* 0x80039a0c */
    var_v0 = var_v1 << 0x1; /* 0x80039a18 */
    var_v0 = var_v0 + var_v1; /* 0x80039a1c */
    var_a0 = var_a0 | 0x84; /* 0x80039a24 */
    *(int8_t*)(reg_s6 + 2) = var_a0; /* 0x80039a2c */
    var_a1 = var_a1 + 4095; /* 0x80039a30 */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x80039a34 */
    var_v0 = var_a1 >> 0xc; /* 0x80039a38 */
    *(int16_t*)(reg_s6 + 12) = var_v0; /* 0x80039a3c */
    var_v0 = var_v1 << 0x3; /* 0x80039a40 */
    var_v0 = var_v0 << 0x7; /* 0x80039a48 */
    var_a1 = var_v0 >> 0xc; /* 0x80039a50 */
    var_v0 = var_v0 + 4095; /* 0x80039a54 */
    var_a1 = var_v0 >> 0xc; /* 0x80039a58 */
    var_v0 = 0x8000 << 16; /* 0x80039a5c */
    var_a1 = var_a1 | var_v0; /* 0x80039a60 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x80039a64 */
    var_a2 = 32; /* 0x80039a68 */
    func_0x80038300(); /* 0x80039a6c */
    var_s0 = var_v0; /* 0x80039a74 */
    /* Branch beqz at 0x80039a78 */
    var_v0 = var_s0 & 0x80; /* 0x80039a7c */
    /* Branch bnez at 0x80039a80 */
    var_v0 = var_s0 & 0xf; /* 0x80039a84 */
    /* Branch beqz at 0x80039a88 */
    var_v0 = 255; /* 0x80039a90 */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x80039a98 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x80039a9c */
    var_v0 = var_v0 + 96; /* 0x80039aa4 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x80039aa8 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x80039aac */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x80039ab0 */
    var_v0 = var_v0 + 96; /* 0x80039ab4 */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x80039ab8 */
    var_v0 = var_v1 << 0x3; /* 0x80039abc */
    var_v0 = var_v0 << 0x7; /* 0x80039ac4 */
    var_v0 = var_v0 + 4095; /* 0x80039ad0 */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x80039ad4 */
    var_v0 = var_v0 >> 0xc; /* 0x80039ad8 */
    *(int16_t*)(reg_s6 + 12) = var_v0; /* 0x80039adc */
    var_v0 = var_v1 << 0x3; /* 0x80039ae0 */
    var_v0 = var_v0 << 0x7; /* 0x80039ae8 */
    var_a1 = var_v0 >> 0xc; /* 0x80039af0 */
    var_v0 = var_v0 + 4095; /* 0x80039af4 */
    var_a1 = var_v0 >> 0xc; /* 0x80039af8 */
    var_v0 = 0x8000 << 16; /* 0x80039afc */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x80039b00 */
    var_a2 = *(int8_t*)(reg_s6 + 80); /* 0x80039b04 */
    var_a1 = var_a1 | var_v0; /* 0x80039b08 */
    func_0x800381a8(); /* 0x80039b0c */
    var_s0 = var_v0; /* 0x80039b14 */
    /* Branch beqz at 0x80039b18 */
    var_v0 = var_s0 & 0x80; /* 0x80039b1c */
    /* Branch beqz at 0x80039b20 */
    func_0x8003618c(); /* 0x80039b28 */
    var_v0 = 3; /* 0x80039b30 */
    *(int8_t*)(reg_s6 + 8) = var_v0; /* 0x80039b38 */
    var_v0 = *(uint16_t*)(reg_s6 + 52); /* 0x80039b3c */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x80039b40 */
    var_v0 = var_v0 + -32; /* 0x80039b44 */
    var_v0 = var_v0 & 0xfff; /* 0x80039b48 */
    *(int16_t*)(reg_s6 + 52) = var_v0; /* 0x80039b4c */
    var_v0 = 8; /* 0x80039b50 */
    /* Branch bne at 0x80039b54 */
    var_v0 = 200; /* 0x80039b58 */
    /* Branch bne at 0x80039b5c */
    var_v0 = 238; /* 0x80039b60 */
    var_a0 = 10; /* 0x80039b64 */
    var_a2 = 53; /* 0x80039b68 */
    var_s2 = var_s6 + 32; /* 0x80039b6c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039b70 */
    var_s0 = var_s6 + 64; /* 0x80039b74 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80039b78 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x80039b7c */
    var_s1 = var_s6 + 48; /* 0x80039b80 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x80039b84 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x80039b88 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x80039b8c */
    var_a3 = var_s2; /* 0x80039b90 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x80039b94 */
    var_v0 = var_v0 + -16; /* 0x80039b98 */
    func_0x80036484(); /* 0x80039b9c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039ba4 */
    var_a0 = 10; /* 0x80039ba8 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80039bac */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x80039bb0 */
    var_a2 = 201; /* 0x80039bb8 */
    /* Branch bne at 0x80039bbc */
    var_v0 = 228; /* 0x80039bc0 */
    var_a0 = 10; /* 0x80039bc4 */
    var_a2 = 141; /* 0x80039bc8 */
    var_s2 = var_s6 + 32; /* 0x80039bcc */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039bd0 */
    var_s0 = var_s6 + 64; /* 0x80039bd4 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80039bd8 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x80039bdc */
    var_s1 = var_s6 + 48; /* 0x80039be0 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x80039be4 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x80039be8 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x80039bec */
    var_a3 = var_s2; /* 0x80039bf0 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x80039bf4 */
    var_v0 = var_v0 + -16; /* 0x80039bf8 */
    func_0x80036484(); /* 0x80039bfc */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039c04 */
    var_a0 = 10; /* 0x80039c08 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80039c0c */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x80039c10 */
    var_a2 = 239; /* 0x80039c18 */
    /* Branch bne at 0x80039c1c */
    var_v0 = 211; /* 0x80039c20 */
    var_a0 = 10; /* 0x80039c24 */
    var_a2 = 130; /* 0x80039c28 */
    var_s2 = var_s6 + 32; /* 0x80039c2c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039c30 */
    var_s0 = var_s6 + 64; /* 0x80039c34 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80039c38 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x80039c3c */
    var_s1 = var_s6 + 48; /* 0x80039c40 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x80039c44 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x80039c48 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x80039c4c */
    var_a3 = var_s2; /* 0x80039c50 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x80039c54 */
    var_v0 = var_v0 + -16; /* 0x80039c58 */
    func_0x80036484(); /* 0x80039c5c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039c64 */
    var_a0 = 10; /* 0x80039c68 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80039c6c */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x80039c70 */
    var_a2 = 229; /* 0x80039c78 */
    /* Branch bne at 0x80039c7c */
    var_a0 = 10; /* 0x80039c80 */
    var_a2 = 83; /* 0x80039c84 */
    var_s2 = var_s6 + 32; /* 0x80039c88 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039c8c */
    var_s0 = var_s6 + 64; /* 0x80039c90 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80039c94 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x80039c98 */
    var_s1 = var_s6 + 48; /* 0x80039c9c */
    *(int32_t*)(stack + 24) = var_s1; /* 0x80039ca0 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x80039ca4 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x80039ca8 */
    var_a3 = var_s2; /* 0x80039cac */
    *(int32_t*)(stack + 32) = var_s6; /* 0x80039cb0 */
    var_v0 = var_v0 + -16; /* 0x80039cb4 */
    func_0x80036484(); /* 0x80039cb8 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039cc0 */
    var_a0 = 10; /* 0x80039cc4 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80039cc8 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x80039ccc */
    var_a2 = 212; /* 0x80039cd0 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x80039cd4 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x80039cd8 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x80039cdc */
    var_a3 = var_s2; /* 0x80039ce0 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x80039ce4 */
    var_v0 = var_v0 + -16; /* 0x80039ce8 */
    func_0x80036484(); /* 0x80039cec */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x80039cf4 */
    /* Branch beqz at 0x80039d00 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x80039d08 */
    var_v1 = *(uint16_t*)(reg_s6 + 60); /* 0x80039d0c */
    var_v0 = var_v0 + -64; /* 0x80039d10 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x80039d14 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x80039d18 */
    var_v1 = var_v1 + -64; /* 0x80039d1c */
    *(int16_t*)(reg_s6 + 60) = var_v1; /* 0x80039d20 */
    var_v0 = var_v0 + -64; /* 0x80039d28 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x80039d2c */
    var_v1 = *(uint16_t*)(reg_s6 + 60); /* 0x80039d30 */
    var_v0 = var_v0 + 64; /* 0x80039d34 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x80039d38 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x80039d3c */
    var_v1 = var_v1 + 64; /* 0x80039d40 */
    *(int16_t*)(reg_s6 + 60) = var_v1; /* 0x80039d44 */
    var_v0 = var_v0 + 64; /* 0x80039d48 */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x80039d4c */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x80039d50 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x80039d5c */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x80039d60 */
    func_0x80038300(); /* 0x80039d64 */
    /* Branch beqz at 0x80039d6c */
    var_v0 = 255; /* 0x80039d70 */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x80039d74 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x80039d78 */
    var_a2 = 32; /* 0x80039d84 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x80039d88 */
    var_v0 = *(uint16_t*)(reg_s6 + 60); /* 0x80039d8c */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x80039d90 */
    var_v0 = var_v0 + 224; /* 0x80039d94 */
    func_0x80038300(); /* 0x80039d98 */
    var_s0 = var_v0; /* 0x80039da0 */
    /* Branch beqz at 0x80039da4 */
    var_v0 = var_s0 & 0x80; /* 0x80039da8 */
    /* Branch beqz at 0x80039dac */
    var_v0 = 255; /* 0x80039db0 */
    func_0x8003618c(); /* 0x80039db4 */
    var_v0 = 255; /* 0x80039dbc */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x80039dc0 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x80039dc4 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x80039dd0 */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x80039dd4 */
    func_0x80038300(); /* 0x80039dd8 */
    var_s0 = var_v0; /* 0x80039de0 */
    /* Branch beqz at 0x80039de4 */
    var_v0 = var_s0 & 0x80; /* 0x80039de8 */
    /* Branch beqz at 0x80039dec */
    var_v0 = 255; /* 0x80039df0 */
    func_0x8003618c(); /* 0x80039df4 */
    var_v0 = 255; /* 0x80039dfc */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x80039e00 */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x80039e04 */
    /* Branch beqz at 0x80039e10 */
    var_v1 = 13; /* 0x80039e14 */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x80039e18 */
    *(int8_t*)(reg_s6 + 7) = var_v1; /* 0x80039e1c */
    var_v0 = var_v0 << 0x7; /* 0x80039e24 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x80039e28 */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x80039e2c */
    func_0x80038300(); /* 0x80039e30 */
    var_s0 = var_v0; /* 0x80039e38 */
    /* Branch beqz at 0x80039e3c */
    var_v0 = var_s0 & 0x80; /* 0x80039e40 */
    /* Branch beqz at 0x80039e44 */
    var_s3 = var_zero; /* 0x80039e48 */
    func_0x8003618c(); /* 0x80039e4c */
    var_s3 = var_zero; /* 0x80039e54 */
    var_s4 = 0x8184 << 16; /* 0x80039e58 */
    var_s4 = var_s4 | 0x8da9; /* 0x80039e5c */
    var_s5 = 8; /* 0x80039e60 */
    var_s0 = var_sp + 168; /* 0x80039e64 */
    var_s2 = 1536; /* 0x80039e68 */
    func_0x80078ac4(); /* 0x80039e6c */
    var_v1 = var_t1 + var_v0; /* 0x80039e7c */
    var_v1 = var_v1 >> 0xa; /* 0x80039e80 */
    var_v0 = var_v0 >> 0x1f; /* 0x80039e84 */
    func_0x80078ac4(); /* 0x80039e90 */
    var_v1 = var_v0 >> 0xa; /* 0x80039e9c */
    var_v0 = var_v0 + 1023; /* 0x80039ea0 */
    var_v1 = var_v0 >> 0xa; /* 0x80039ea4 */
    var_v0 = -48; /* 0x80039ea8 */
    func_0x80078ac4(); /* 0x80039eb0 */
    var_a0 = *(int16_t*)(stack + 168); /* 0x80039ebc */
    var_v1 = var_t1 + var_v0; /* 0x80039ec4 */
    var_v1 = var_v1 >> 0xa; /* 0x80039ec8 */
    var_v0 = var_v0 >> 0x1f; /* 0x80039ecc */
    *(int16_t*)(stack + 172) = var_v1; /* 0x80039ed8 */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x80039edc */
    *(int32_t*)(stack + 176) = var_v0; /* 0x80039ee8 */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x80039eec */
    var_v1 = var_v1 << 0x10; /* 0x80039ef0 */
    *(int32_t*)(stack + 180) = var_v0; /* 0x80039ef4 */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x80039ef8 */
    var_v1 = var_v1 >> 0x10; /* 0x80039efc */
    *(int32_t*)(stack + 184) = var_v0; /* 0x80039f04 */
    var_v0 = 62; /* 0x80039f08 */
    /* Branch bne at 0x80039f0c */
    var_v0 = 108; /* 0x80039f10 */
    var_a0 = 10; /* 0x80039f14 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039f18 */
    var_a2 = 63; /* 0x80039f20 */
    /* Branch bne at 0x80039f24 */
    var_v0 = 72; /* 0x80039f28 */
    var_a0 = 10; /* 0x80039f2c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039f30 */
    var_a2 = 109; /* 0x80039f38 */
    /* Branch bne at 0x80039f3c */
    var_v0 = 147; /* 0x80039f40 */
    var_a0 = 10; /* 0x80039f44 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039f48 */
    var_a2 = 73; /* 0x80039f50 */
    /* Branch bne at 0x80039f54 */
    var_v0 = 113; /* 0x80039f58 */
    var_a0 = 10; /* 0x80039f5c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039f60 */
    var_a2 = 148; /* 0x80039f68 */
    /* Branch bne at 0x80039f6c */
    var_v0 = 122; /* 0x80039f70 */
    var_a0 = 10; /* 0x80039f74 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039f78 */
    var_a2 = 114; /* 0x80039f80 */
    /* Branch bne at 0x80039f84 */
    var_a0 = 10; /* 0x80039f88 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x80039f8c */
    var_a2 = 123; /* 0x80039f90 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x80039f94 */
    *(int32_t*)(stack + 20) = var_s2; /* 0x80039f98 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x80039f9c */
    var_a3 = var_sp + 176; /* 0x80039fa0 */
    var_v0 = var_v0 + -16; /* 0x80039fa4 */
    func_0x80036484(); /* 0x80039fa8 */
    var_s3 = var_s3 + 1; /* 0x80039fb0 */
    /* Branch bnez at 0x80039fb8 */
    var_v0 = 255; /* 0x80039fbc */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x80039fc0 */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x80039fc4 */
    /* Branch beqz at 0x80039fd0 */
    var_v1 = 13; /* 0x80039fd4 */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x80039fd8 */
    *(int8_t*)(reg_s6 + 7) = var_v1; /* 0x80039fdc */
    var_v0 = var_v0 << 0x7; /* 0x80039fe0 */
    *(int16_t*)(reg_s6 + 18) = var_v0; /* 0x80039fe4 */
    var_v0 = *(uint16_t*)(reg_s6 + 66); /* 0x80039fe8 */
    var_v0 = var_v0 + 4; /* 0x80039ff0 */
    *(int16_t*)(reg_s6 + 66) = var_v0; /* 0x80039ff8 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x80039ffc */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x8003a000 */
    func_0x80038300(); /* 0x8003a004 */
    var_s0 = var_v0; /* 0x8003a00c */
    /* Branch beqz at 0x8003a010 */
    var_v0 = var_s0 & 0x80; /* 0x8003a014 */
    /* Branch beqz at 0x8003a018 */
    func_0x8003618c(); /* 0x8003a020 */
    var_s0 = var_zero; /* 0x8003a028 */
    var_s1 = 0x8184 << 16; /* 0x8003a02c */
    var_s1 = var_s1 | 0x8da9; /* 0x8003a030 */
    var_s2 = 8; /* 0x8003a034 */
    func_0x80078ac4(); /* 0x8003a038 */
    var_v1 = var_t1 + var_v0; /* 0x8003a048 */
    var_v1 = var_v1 >> 0xa; /* 0x8003a04c */
    var_v0 = var_v0 >> 0x1f; /* 0x8003a050 */
    func_0x80078ac4(); /* 0x8003a05c */
    var_v1 = var_v0 >> 0xa; /* 0x8003a068 */
    var_v0 = var_v0 + 1023; /* 0x8003a06c */
    var_v1 = var_v0 >> 0xa; /* 0x8003a070 */
    var_v0 = -48; /* 0x8003a074 */
    func_0x80078ac4(); /* 0x8003a07c */
    var_a0 = 10; /* 0x8003a088 */
    var_a2 = 66; /* 0x8003a08c */
    var_a1 = *(int16_t*)(stack + 192); /* 0x8003a090 */
    var_v1 = var_t1 + var_v0; /* 0x8003a098 */
    var_v1 = var_v1 >> 0xa; /* 0x8003a09c */
    var_v0 = var_v0 >> 0x1f; /* 0x8003a0a0 */
    *(int16_t*)(stack + 196) = var_v1; /* 0x8003a0ac */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x8003a0b0 */
    var_a3 = var_sp + 200; /* 0x8003a0b4 */
    *(int32_t*)(stack + 200) = var_v0; /* 0x8003a0bc */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x8003a0c0 */
    var_v1 = var_v1 << 0x10; /* 0x8003a0c4 */
    *(int32_t*)(stack + 204) = var_v0; /* 0x8003a0c8 */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x8003a0cc */
    var_v1 = var_v1 >> 0x10; /* 0x8003a0d0 */
    *(int32_t*)(stack + 208) = var_v0; /* 0x8003a0d8 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a0dc */
    var_v0 = var_sp + 192; /* 0x8003a0e0 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003a0e4 */
    var_v0 = 1536; /* 0x8003a0e8 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003a0ec */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003a0f0 */
    var_s0 = var_s0 + 1; /* 0x8003a0f4 */
    var_v0 = var_v0 + -16; /* 0x8003a0f8 */
    func_0x80036484(); /* 0x8003a0fc */
    /* Branch bnez at 0x8003a108 */
    var_v0 = 255; /* 0x8003a10c */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x8003a110 */
    var_v1 = 0x6666 << 16; /* 0x8003a114 */
    var_v0 = *(uint16_t*)(reg_s6 + 16); /* 0x8003a118 */
    var_v1 = var_v1 | 0x6667; /* 0x8003a11c */
    var_v0 = var_v0 << 0x10; /* 0x8003a120 */
    var_a0 = var_v0 >> 0x10; /* 0x8003a124 */
    var_v0 = var_v0 >> 0x1f; /* 0x8003a12c */
    var_v1 = var_t1 >> 0x1; /* 0x8003a134 */
    var_v0 = var_v1 << 0x2; /* 0x8003a13c */
    var_v0 = var_v0 + var_v1; /* 0x8003a140 */
    var_a0 = var_a0 << 0x10; /* 0x8003a148 */
    /* Branch bnez at 0x8003a14c */
    var_s0 = var_zero; /* 0x8003a154 */
    var_s1 = 0x8184 << 16; /* 0x8003a158 */
    var_s1 = var_s1 | 0x8da9; /* 0x8003a15c */
    var_s2 = 8; /* 0x8003a160 */
    func_0x80078ac4(); /* 0x8003a164 */
    var_v1 = var_t1 + var_v0; /* 0x8003a174 */
    var_v1 = var_v1 >> 0xa; /* 0x8003a178 */
    var_v0 = var_v0 >> 0x1f; /* 0x8003a17c */
    func_0x80078ac4(); /* 0x8003a188 */
    var_v1 = var_v0 >> 0xa; /* 0x8003a194 */
    var_v0 = var_v0 + 1023; /* 0x8003a198 */
    var_v1 = var_v0 >> 0xa; /* 0x8003a19c */
    var_v0 = -48; /* 0x8003a1a0 */
    func_0x80078ac4(); /* 0x8003a1a8 */
    var_a0 = 10; /* 0x8003a1b4 */
    var_a2 = 66; /* 0x8003a1b8 */
    var_a1 = *(int16_t*)(stack + 216); /* 0x8003a1bc */
    var_v1 = var_t1 + var_v0; /* 0x8003a1c4 */
    var_v1 = var_v1 >> 0xa; /* 0x8003a1c8 */
    var_v0 = var_v0 >> 0x1f; /* 0x8003a1cc */
    *(int16_t*)(stack + 220) = var_v1; /* 0x8003a1d8 */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x8003a1dc */
    var_a3 = var_sp + 232; /* 0x8003a1e0 */
    *(int32_t*)(stack + 232) = var_v0; /* 0x8003a1e8 */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x8003a1ec */
    var_v1 = var_v1 << 0x10; /* 0x8003a1f0 */
    *(int32_t*)(stack + 236) = var_v0; /* 0x8003a1f4 */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x8003a1f8 */
    var_v1 = var_v1 >> 0x10; /* 0x8003a1fc */
    *(int32_t*)(stack + 240) = var_v0; /* 0x8003a204 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a208 */
    var_v0 = var_sp + 216; /* 0x8003a20c */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003a210 */
    var_v0 = 1536; /* 0x8003a214 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003a218 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003a21c */
    var_s0 = var_s0 + 1; /* 0x8003a220 */
    var_v0 = var_v0 + -16; /* 0x8003a224 */
    func_0x80036484(); /* 0x8003a228 */
    /* Branch blez at 0x8003a230 */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x8003a238 */
    /* Branch beqz at 0x8003a244 */
    var_v1 = 13; /* 0x8003a248 */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x8003a24c */
    *(int8_t*)(reg_s6 + 7) = var_v1; /* 0x8003a250 */
    var_v0 = var_v0 << 0x7; /* 0x8003a254 */
    *(int16_t*)(reg_s6 + 18) = var_v0; /* 0x8003a258 */
    var_v0 = *(uint16_t*)(reg_s6 + 66); /* 0x8003a25c */
    var_v0 = var_v0 + 16; /* 0x8003a264 */
    *(int16_t*)(reg_s6 + 66) = var_v0; /* 0x8003a26c */
    var_v0 = *(uint16_t*)(reg_s6 + 52); /* 0x8003a270 */
    var_v1 = -1; /* 0x8003a274 */
    var_v0 = var_v0 + -128; /* 0x8003a278 */
    var_v0 = var_v0 & 0xfff; /* 0x8003a27c */
    *(int16_t*)(reg_s6 + 52) = var_v0; /* 0x8003a280 */
    var_v0 = *(int16_t*)(reg_s6 + 80); /* 0x8003a284 */
    var_s2 = *(int32_t*)(reg_s6 + 76); /* 0x8003a288 */
    /* Branch beq at 0x8003a28c */
    var_v0 = 202; /* 0x8003a290 */
    /* Branch beq at 0x8003a294 */
    var_v0 = 225; /* 0x8003a29c */
    /* Branch beq at 0x8003a2a0 */
    var_v0 = 208; /* 0x8003a2a8 */
    /* Branch beq at 0x8003a2ac */
    var_v0 = 230; /* 0x8003a2b4 */
    /* Branch beq at 0x8003a2b8 */
    var_v0 = 219; /* 0x8003a2c0 */
    /* Branch beq at 0x8003a2c4 */
    var_v0 = 222; /* 0x8003a2cc */
    /* Branch bne at 0x8003a2d0 */
    var_a0 = *(uint8_t*)(reg_s2 + 11); /* 0x8003a2d8 */
    var_a1 = *(uint8_t*)(reg_s2 + 8); /* 0x8003a2dc */
    var_a2 = *(int16_t*)(reg_s2 + 42); /* 0x8003a2e0 */
    var_a3 = *(int16_t*)(reg_s6 + 80); /* 0x8003a2e4 */
    var_v0 = var_sp + 224; /* 0x8003a2e8 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003a2ec */
    func_0x80033e30(); /* 0x8003a2f0 */
    var_a0 = var_sp + 280; /* 0x8003a2fc */
    var_v0 = 205; /* 0x8003a300 */
    /* Branch beq at 0x8003a304 */
    var_v0 = 235; /* 0x8003a30c */
    /* Branch beq at 0x8003a310 */
    var_v0 = 216; /* 0x8003a318 */
    /* Branch bne at 0x8003a31c */
    var_a0 = var_sp + 280; /* 0x8003a320 */
    var_a1 = *(uint8_t*)(reg_s2 + 11); /* 0x8003a324 */
    var_a2 = *(int16_t*)(reg_s6 + 82); /* 0x8003a328 */
    var_a3 = *(int16_t*)(reg_s6 + 80); /* 0x8003a32c */
    var_v0 = var_sp + 288; /* 0x8003a330 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003a334 */
    var_a0 = *(int32_t*)(reg_s2 + 164); /* 0x8003a338 */
    func_0x80035b80(); /* 0x8003a33c */
    var_v0 = *(uint16_t*)(stack + 288); /* 0x8003a344 */
    var_v1 = *(uint16_t*)(stack + 292); /* 0x8003a348 */
    var_a0 = *(uint16_t*)(stack + 296); /* 0x8003a34c */
    *(int16_t*)(stack + 224) = var_v0; /* 0x8003a350 */
    *(int16_t*)(stack + 226) = var_v1; /* 0x8003a354 */
    *(int16_t*)(stack + 228) = var_a0; /* 0x8003a358 */
    var_a0 = var_sp + 280; /* 0x8003a35c */
    var_s0 = var_sp + 248; /* 0x8003a360 */
    *(int16_t*)(stack + 280) = var_zero; /* 0x8003a364 */
    var_v0 = *(uint16_t*)(reg_s2 + 142); /* 0x8003a368 */
    var_a1 = var_s0; /* 0x8003a36c */
    *(int16_t*)(stack + 284) = var_zero; /* 0x8003a370 */
    func_0x80074ec4(); /* 0x8003a378 */
    var_a0 = var_s0; /* 0x8003a380 */
    var_a1 = var_sp + 224; /* 0x8003a384 */
    func_0x80074cf4(); /* 0x8003a388 */
    var_v1 = *(int16_t*)(stack + 224); /* 0x8003a390 */
    var_v0 = *(int32_t*)(reg_s2 + 116); /* 0x8003a394 */
    var_v0 = var_v0 + var_v1; /* 0x8003a39c */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x8003a3a0 */
    var_v1 = *(int16_t*)(stack + 226); /* 0x8003a3a4 */
    var_v0 = *(int32_t*)(reg_s2 + 120); /* 0x8003a3a8 */
    var_v0 = var_v0 + var_v1; /* 0x8003a3b0 */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x8003a3b4 */
    var_v1 = *(int16_t*)(stack + 228); /* 0x8003a3b8 */
    var_v0 = *(int32_t*)(reg_s2 + 124); /* 0x8003a3bc */
    var_v0 = var_v0 + var_v1; /* 0x8003a3c4 */
    var_v0 = *(int32_t*)(reg_s2 + 116); /* 0x8003a3c8 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x8003a3d0 */
    var_v0 = *(int32_t*)(reg_s2 + 120); /* 0x8003a3d4 */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x8003a3dc */
    var_v0 = *(int32_t*)(reg_s2 + 124); /* 0x8003a3e0 */
    *(int32_t*)(reg_s6 + 40) = var_v0; /* 0x8003a3e8 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003a3ec */
    var_v0 = 33; /* 0x8003a3f0 */
    /* Branch bne at 0x8003a3f4 */
    var_v0 = 202; /* 0x8003a3f8 */
    /* Branch bne at 0x8003a3fc */
    var_v0 = 235; /* 0x8003a400 */
    var_a0 = 10; /* 0x8003a404 */
    var_a2 = 203; /* 0x8003a408 */
    var_s2 = var_s6 + 32; /* 0x8003a40c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a410 */
    var_s0 = var_s6 + 64; /* 0x8003a414 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a418 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a41c */
    var_s1 = var_s6 + 48; /* 0x8003a420 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x8003a424 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003a428 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003a42c */
    var_a3 = var_s2; /* 0x8003a430 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x8003a434 */
    var_v0 = var_v0 + -16; /* 0x8003a438 */
    func_0x80036484(); /* 0x8003a43c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a444 */
    var_a0 = 10; /* 0x8003a448 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a44c */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a450 */
    var_a2 = 61; /* 0x8003a458 */
    /* Branch bne at 0x8003a45c */
    var_v0 = 205; /* 0x8003a460 */
    var_a0 = 10; /* 0x8003a464 */
    var_a2 = 236; /* 0x8003a468 */
    var_s2 = var_s6 + 32; /* 0x8003a46c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a470 */
    var_s0 = var_s6 + 64; /* 0x8003a474 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a478 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a47c */
    var_s1 = var_s6 + 48; /* 0x8003a480 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x8003a484 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003a488 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003a48c */
    var_a3 = var_s2; /* 0x8003a490 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x8003a494 */
    var_v0 = var_v0 + -16; /* 0x8003a498 */
    func_0x80036484(); /* 0x8003a49c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a4a4 */
    var_a0 = 10; /* 0x8003a4a8 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a4ac */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a4b0 */
    var_a2 = 138; /* 0x8003a4b8 */
    /* Branch bne at 0x8003a4bc */
    var_v0 = 225; /* 0x8003a4c0 */
    var_a0 = 10; /* 0x8003a4c4 */
    var_a2 = 206; /* 0x8003a4c8 */
    var_s2 = var_s6 + 32; /* 0x8003a4cc */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a4d0 */
    var_s0 = var_s6 + 64; /* 0x8003a4d4 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a4d8 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a4dc */
    var_s1 = var_s6 + 48; /* 0x8003a4e0 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x8003a4e4 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003a4e8 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003a4ec */
    var_a3 = var_s2; /* 0x8003a4f0 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x8003a4f4 */
    var_v0 = var_v0 + -16; /* 0x8003a4f8 */
    func_0x80036484(); /* 0x8003a4fc */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a504 */
    var_a0 = 10; /* 0x8003a508 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a50c */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a510 */
    var_a2 = 70; /* 0x8003a518 */
    /* Branch bne at 0x8003a51c */
    var_v0 = 208; /* 0x8003a520 */
    var_a0 = 10; /* 0x8003a524 */
    var_a2 = 226; /* 0x8003a528 */
    var_s2 = var_s6 + 32; /* 0x8003a52c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a530 */
    var_s0 = var_s6 + 64; /* 0x8003a534 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a538 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a53c */
    var_s1 = var_s6 + 48; /* 0x8003a540 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x8003a544 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003a548 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003a54c */
    var_a3 = var_s2; /* 0x8003a550 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x8003a554 */
    var_v0 = var_v0 + -16; /* 0x8003a558 */
    func_0x80036484(); /* 0x8003a55c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a564 */
    var_a0 = 10; /* 0x8003a568 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a56c */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a570 */
    var_a2 = 129; /* 0x8003a578 */
    /* Branch bne at 0x8003a57c */
    var_v0 = 230; /* 0x8003a580 */
    var_a0 = 10; /* 0x8003a584 */
    var_a2 = 209; /* 0x8003a588 */
    var_s2 = var_s6 + 32; /* 0x8003a58c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a590 */
    var_s0 = var_s6 + 64; /* 0x8003a594 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a598 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a59c */
    var_s1 = var_s6 + 48; /* 0x8003a5a0 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x8003a5a4 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003a5a8 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003a5ac */
    var_a3 = var_s2; /* 0x8003a5b0 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x8003a5b4 */
    var_v0 = var_v0 + -16; /* 0x8003a5b8 */
    func_0x80036484(); /* 0x8003a5bc */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a5c4 */
    var_a0 = 10; /* 0x8003a5c8 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a5cc */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a5d0 */
    var_a2 = 82; /* 0x8003a5d8 */
    /* Branch bne at 0x8003a5dc */
    var_v0 = 216; /* 0x8003a5e0 */
    var_a0 = 10; /* 0x8003a5e4 */
    var_a2 = 231; /* 0x8003a5e8 */
    var_s2 = var_s6 + 32; /* 0x8003a5ec */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a5f0 */
    var_s0 = var_s6 + 64; /* 0x8003a5f4 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a5f8 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a5fc */
    var_s1 = var_s6 + 48; /* 0x8003a600 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x8003a604 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003a608 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003a60c */
    var_a3 = var_s2; /* 0x8003a610 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x8003a614 */
    var_v0 = var_v0 + -16; /* 0x8003a618 */
    func_0x80036484(); /* 0x8003a61c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a624 */
    var_a0 = 10; /* 0x8003a628 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a62c */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a630 */
    var_a2 = 134; /* 0x8003a638 */
    /* Branch bne at 0x8003a63c */
    var_v0 = 219; /* 0x8003a640 */
    var_a0 = 10; /* 0x8003a644 */
    var_a2 = 217; /* 0x8003a648 */
    var_s2 = var_s6 + 32; /* 0x8003a64c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a650 */
    var_s0 = var_s6 + 64; /* 0x8003a654 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a658 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a65c */
    var_s1 = var_s6 + 48; /* 0x8003a660 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x8003a664 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003a668 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003a66c */
    var_a3 = var_s2; /* 0x8003a670 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x8003a674 */
    var_v0 = var_v0 + -16; /* 0x8003a678 */
    func_0x80036484(); /* 0x8003a67c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a684 */
    var_a0 = 10; /* 0x8003a688 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a68c */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a690 */
    var_a2 = 90; /* 0x8003a698 */
    /* Branch bne at 0x8003a69c */
    var_v0 = 222; /* 0x8003a6a0 */
    var_a0 = 10; /* 0x8003a6a4 */
    var_a2 = 220; /* 0x8003a6a8 */
    var_s2 = var_s6 + 32; /* 0x8003a6ac */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a6b0 */
    var_s0 = var_s6 + 64; /* 0x8003a6b4 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a6b8 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a6bc */
    var_s1 = var_s6 + 48; /* 0x8003a6c0 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x8003a6c4 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003a6c8 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003a6cc */
    var_a3 = var_s2; /* 0x8003a6d0 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x8003a6d4 */
    var_v0 = var_v0 + -16; /* 0x8003a6d8 */
    func_0x80036484(); /* 0x8003a6dc */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a6e4 */
    var_a0 = 10; /* 0x8003a6e8 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a6ec */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a6f0 */
    var_a2 = 100; /* 0x8003a6f8 */
    /* Branch bne at 0x8003a6fc */
    var_a0 = 10; /* 0x8003a700 */
    var_a2 = 223; /* 0x8003a704 */
    var_s2 = var_s6 + 32; /* 0x8003a708 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a70c */
    var_s0 = var_s6 + 64; /* 0x8003a710 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a714 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a718 */
    var_s1 = var_s6 + 48; /* 0x8003a71c */
    *(int32_t*)(stack + 24) = var_s1; /* 0x8003a720 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003a724 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003a728 */
    var_a3 = var_s2; /* 0x8003a72c */
    *(int32_t*)(stack + 32) = var_s6; /* 0x8003a730 */
    var_v0 = var_v0 + -16; /* 0x8003a734 */
    func_0x80036484(); /* 0x8003a738 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a740 */
    var_a0 = 10; /* 0x8003a744 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003a748 */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003a74c */
    var_a2 = 126; /* 0x8003a750 */
    *(int32_t*)(stack + 24) = var_s1; /* 0x8003a754 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003a758 */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003a75c */
    var_a3 = var_s2; /* 0x8003a760 */
    *(int32_t*)(stack + 32) = var_s6; /* 0x8003a764 */
    var_v0 = var_v0 + -16; /* 0x8003a768 */
    func_0x80036484(); /* 0x8003a76c */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x8003a774 */
    /* Branch beqz at 0x8003a780 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x8003a788 */
    var_v1 = *(uint16_t*)(reg_s6 + 60); /* 0x8003a78c */
    var_v0 = var_v0 + -64; /* 0x8003a790 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x8003a794 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x8003a798 */
    var_v1 = var_v1 + -64; /* 0x8003a79c */
    *(int16_t*)(reg_s6 + 60) = var_v1; /* 0x8003a7a0 */
    var_v0 = var_v0 + -64; /* 0x8003a7a8 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x8003a7ac */
    var_v1 = *(uint16_t*)(reg_s6 + 60); /* 0x8003a7b0 */
    var_v0 = var_v0 + 64; /* 0x8003a7b4 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x8003a7b8 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x8003a7bc */
    var_v1 = var_v1 + 64; /* 0x8003a7c0 */
    *(int16_t*)(reg_s6 + 60) = var_v1; /* 0x8003a7c4 */
    var_v0 = var_v0 + 64; /* 0x8003a7c8 */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x8003a7cc */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003a7d0 */
    var_a0 = *(int16_t*)(reg_s6 + 16); /* 0x8003a7dc */
    func_0x800744c4(); /* 0x8003a7e0 */
    var_v1 = var_v0; /* 0x8003a7e8 */
    var_v1 = var_v1 + 3; /* 0x8003a7f4 */
    var_v0 = *(uint16_t*)(reg_s6 + 80); /* 0x8003a7f8 */
    var_s2 = *(int32_t*)(reg_s6 + 76); /* 0x8003a7fc */
    var_v1 = var_v1 >> 0x2; /* 0x8003a800 */
    *(int16_t*)(reg_s6 + 60) = var_v1; /* 0x8003a804 */
    *(int16_t*)(reg_s6 + 58) = var_v1; /* 0x8003a808 */
    *(int16_t*)(reg_s6 + 56) = var_v1; /* 0x8003a80c */
    var_v0 = var_v0 + 32; /* 0x8003a810 */
    *(int16_t*)(reg_s6 + 80) = var_v0; /* 0x8003a814 */
    var_v0 = var_v0 << 0x10; /* 0x8003a818 */
    var_v0 = var_v0 >> 0x10; /* 0x8003a81c */
    /* Branch bnez at 0x8003a824 */
    var_v0 = -128; /* 0x8003a828 */
    *(int16_t*)(reg_s6 + 80) = var_v0; /* 0x8003a82c */
    var_a0 = *(int16_t*)(reg_s6 + 80); /* 0x8003a830 */
    func_0x800744c4(); /* 0x8003a834 */
    var_a0 = *(int16_t*)(reg_s6 + 80); /* 0x8003a83c */
    func_0x800743f4(); /* 0x8003a840 */
    var_a1 = *(int32_t*)(reg_s6 + 28); /* 0x8003a848 */
    var_v1 = *(int32_t*)(reg_s2 + 120); /* 0x8003a84c */
    var_a0 = *(int32_t*)(reg_a1 + 36); /* 0x8003a850 */
    /* Branch bnez at 0x8003a870 */
    var_at = -1; /* 0x8003a87c */
    /* Branch bne at 0x8003a880 */
    var_at = 0x8000 << 16; /* 0x8003a884 */
    /* Branch bne at 0x8003a888 */
    var_a0 = *(int16_t*)(reg_a1 + 50); /* 0x8003a898 */
    func_0x800744c4(); /* 0x8003a89c */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003a8a8 */
    var_v1 = var_v1 + 4095; /* 0x8003a8b8 */
    var_v1 = var_v1 >> 0xc; /* 0x8003a8bc */
    var_v0 = *(int32_t*)(reg_v0 + 32); /* 0x8003a8c0 */
    var_a0 = *(int32_t*)(reg_s6 + 28); /* 0x8003a8c4 */
    var_v0 = var_v0 + var_v1; /* 0x8003a8c8 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x8003a8cc */
    var_a0 = *(int16_t*)(reg_a0 + 50); /* 0x8003a8d0 */
    func_0x800743f4(); /* 0x8003a8d4 */
    var_v1 = *(int32_t*)(reg_s6 + 28); /* 0x8003a8e0 */
    var_v0 = var_v0 + 4095; /* 0x8003a8f0 */
    var_v0 = var_v0 >> 0xc; /* 0x8003a8f4 */
    var_v1 = *(int32_t*)(reg_v1 + 40); /* 0x8003a8f8 */
    var_a0 = *(int16_t*)(reg_s6 + 16); /* 0x8003a8fc */
    var_v1 = var_v1 + var_v0; /* 0x8003a900 */
    /* Branch beqz at 0x8003a908 */
    *(int32_t*)(reg_s6 + 40) = var_v1; /* 0x8003a90c */
    var_v0 = var_a0 << 0x7; /* 0x8003a910 */
    *(int16_t*)(reg_s6 + 18) = var_v0; /* 0x8003a914 */
    var_a0 = 1024; /* 0x8003a918 */
    var_a1 = 0x8000 << 16; /* 0x8003a91c */
    var_a1 = var_a1 | 0x400; /* 0x8003a920 */
    func_0x80035d04(); /* 0x8003a924 */
    var_s0 = var_v0; /* 0x8003a92c */
    /* Branch beqz at 0x8003a930 */
    var_v0 = var_s0 & 0x80; /* 0x8003a934 */
    /* Branch beqz at 0x8003a938 */
    func_0x8003618c(); /* 0x8003a940 */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x8003a948 */
    var_v1 = *(int16_t*)(reg_s6 + 10); /* 0x8003a94c */
    *(int32_t*)(stack + 248) = var_v0; /* 0x8003a950 */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x8003a954 */
    *(int32_t*)(stack + 252) = var_v0; /* 0x8003a95c */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x8003a960 */
    *(int16_t*)(stack + 224) = var_zero; /* 0x8003a964 */
    *(int16_t*)(stack + 226) = var_zero; /* 0x8003a968 */
    *(int16_t*)(stack + 228) = var_zero; /* 0x8003a96c */
    *(int32_t*)(stack + 256) = var_v0; /* 0x8003a970 */
    var_v0 = 61; /* 0x8003a974 */
    /* Branch bne at 0x8003a978 */
    var_v1 = var_v1 + -16; /* 0x8003a97c */
    var_a0 = 10; /* 0x8003a980 */
    var_a2 = 204; /* 0x8003a984 */
    var_a3 = var_sp + 248; /* 0x8003a988 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a98c */
    var_v0 = var_sp + 224; /* 0x8003a994 */
    var_v0 = 138; /* 0x8003a998 */
    /* Branch bne at 0x8003a99c */
    var_v0 = 70; /* 0x8003a9a0 */
    var_a0 = 10; /* 0x8003a9a4 */
    var_a2 = 237; /* 0x8003a9a8 */
    var_a3 = var_sp + 248; /* 0x8003a9ac */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a9b0 */
    var_v0 = var_sp + 224; /* 0x8003a9b8 */
    /* Branch bne at 0x8003a9bc */
    var_v0 = 129; /* 0x8003a9c0 */
    var_a0 = 10; /* 0x8003a9c4 */
    var_a2 = 207; /* 0x8003a9c8 */
    var_a3 = var_sp + 248; /* 0x8003a9cc */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a9d0 */
    var_v0 = var_sp + 224; /* 0x8003a9d8 */
    /* Branch bne at 0x8003a9dc */
    var_v0 = 82; /* 0x8003a9e0 */
    var_a0 = 10; /* 0x8003a9e4 */
    var_a2 = 227; /* 0x8003a9e8 */
    var_a3 = var_sp + 248; /* 0x8003a9ec */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003a9f0 */
    var_v0 = var_sp + 224; /* 0x8003a9f8 */
    /* Branch bne at 0x8003a9fc */
    var_v0 = 134; /* 0x8003aa00 */
    var_a0 = 10; /* 0x8003aa04 */
    var_a2 = 210; /* 0x8003aa08 */
    var_a3 = var_sp + 248; /* 0x8003aa0c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003aa10 */
    var_v0 = var_sp + 224; /* 0x8003aa18 */
    /* Branch bne at 0x8003aa1c */
    var_v0 = 90; /* 0x8003aa20 */
    var_a0 = 10; /* 0x8003aa24 */
    var_a2 = 232; /* 0x8003aa28 */
    var_a3 = var_sp + 248; /* 0x8003aa2c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003aa30 */
    var_v0 = var_sp + 224; /* 0x8003aa38 */
    /* Branch bne at 0x8003aa3c */
    var_v0 = 100; /* 0x8003aa40 */
    var_a0 = 10; /* 0x8003aa44 */
    var_a2 = 218; /* 0x8003aa48 */
    var_a3 = var_sp + 248; /* 0x8003aa4c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003aa50 */
    var_v0 = var_sp + 224; /* 0x8003aa58 */
    /* Branch bne at 0x8003aa5c */
    var_v0 = 126; /* 0x8003aa60 */
    var_a0 = 10; /* 0x8003aa64 */
    var_a2 = 221; /* 0x8003aa68 */
    var_a3 = var_sp + 248; /* 0x8003aa6c */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003aa70 */
    var_v0 = var_sp + 224; /* 0x8003aa78 */
    /* Branch bne at 0x8003aa7c */
    var_a0 = 10; /* 0x8003aa80 */
    var_a2 = 224; /* 0x8003aa84 */
    var_a3 = var_sp + 248; /* 0x8003aa88 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003aa8c */
    var_v0 = var_sp + 224; /* 0x8003aa94 */
    var_a0 = *(int16_t*)(reg_s6 + 16); /* 0x8003aa98 */
    func_0x800744c4(); /* 0x8003aa9c */
    var_v1 = var_v0; /* 0x8003aaa4 */
    var_v1 = var_v1 + 3; /* 0x8003aab0 */
    var_v0 = *(uint16_t*)(reg_s6 + 80); /* 0x8003aab4 */
    var_v1 = var_v1 >> 0x2; /* 0x8003aab8 */
    *(int16_t*)(reg_s6 + 60) = var_v1; /* 0x8003aabc */
    *(int16_t*)(reg_s6 + 58) = var_v1; /* 0x8003aac0 */
    *(int16_t*)(reg_s6 + 56) = var_v1; /* 0x8003aac4 */
    var_v0 = var_v0 + 32; /* 0x8003aac8 */
    *(int16_t*)(reg_s6 + 80) = var_v0; /* 0x8003aacc */
    var_v0 = var_v0 << 0x10; /* 0x8003aad0 */
    var_v0 = var_v0 >> 0x10; /* 0x8003aad4 */
    /* Branch bnez at 0x8003aadc */
    var_v0 = -128; /* 0x8003aae0 */
    *(int16_t*)(reg_s6 + 80) = var_v0; /* 0x8003aae4 */
    var_a0 = *(int16_t*)(reg_s6 + 80); /* 0x8003aae8 */
    func_0x800744c4(); /* 0x8003aaec */
    var_a0 = *(int16_t*)(reg_s6 + 80); /* 0x8003aaf4 */
    func_0x800743f4(); /* 0x8003aaf8 */
    var_a1 = *(int32_t*)(reg_s6 + 28); /* 0x8003ab00 */
    var_a0 = 0x801a << 16; /* 0x8003ab04 */
    var_v1 = *(int32_t*)(reg_a1 + 36); /* 0x8003ab08 */
    var_a0 = *(int32_t*)(reg_a0 + -28300); /* 0x8003ab0c */
    var_v1 = var_v1 + -1600; /* 0x8003ab10 */
    /* Branch bnez at 0x8003ab2c */
    var_at = -1; /* 0x8003ab38 */
    /* Branch bne at 0x8003ab3c */
    var_at = 0x8000 << 16; /* 0x8003ab40 */
    /* Branch bne at 0x8003ab44 */
    var_a0 = *(int16_t*)(reg_a1 + 50); /* 0x8003ab54 */
    func_0x800744c4(); /* 0x8003ab58 */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003ab64 */
    var_v1 = var_v1 + 4095; /* 0x8003ab74 */
    var_v1 = var_v1 >> 0xc; /* 0x8003ab78 */
    var_v0 = *(int32_t*)(reg_v0 + 32); /* 0x8003ab7c */
    var_a0 = *(int32_t*)(reg_s6 + 28); /* 0x8003ab80 */
    var_v0 = var_v0 + var_v1; /* 0x8003ab84 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x8003ab88 */
    var_a0 = *(int16_t*)(reg_a0 + 50); /* 0x8003ab8c */
    func_0x800743f4(); /* 0x8003ab90 */
    var_v1 = *(int32_t*)(reg_s6 + 28); /* 0x8003ab9c */
    var_v0 = var_v0 + 4095; /* 0x8003abac */
    var_v0 = var_v0 >> 0xc; /* 0x8003abb0 */
    var_v1 = *(int32_t*)(reg_v1 + 40); /* 0x8003abb4 */
    var_a0 = *(int16_t*)(reg_s6 + 16); /* 0x8003abb8 */
    var_v1 = var_v1 + var_v0; /* 0x8003abbc */
    /* Branch beqz at 0x8003abc4 */
    *(int32_t*)(reg_s6 + 40) = var_v1; /* 0x8003abc8 */
    var_v0 = var_a0 << 0x7; /* 0x8003abcc */
    *(int16_t*)(reg_s6 + 18) = var_v0; /* 0x8003abd0 */
    var_a0 = 1024; /* 0x8003abd4 */
    var_a1 = 0x8000 << 16; /* 0x8003abd8 */
    var_a1 = var_a1 | 0x400; /* 0x8003abdc */
    func_0x80035d04(); /* 0x8003abe0 */
    var_s0 = var_v0; /* 0x8003abe8 */
    /* Branch beqz at 0x8003abec */
    var_v0 = var_s0 & 0x80; /* 0x8003abf0 */
    /* Branch beqz at 0x8003abf4 */
    func_0x8003618c(); /* 0x8003abfc */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x8003ac04 */
    var_v1 = *(int16_t*)(reg_s6 + 10); /* 0x8003ac08 */
    *(int32_t*)(stack + 272) = var_v0; /* 0x8003ac0c */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x8003ac10 */
    *(int32_t*)(stack + 276) = var_v0; /* 0x8003ac18 */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x8003ac1c */
    *(int16_t*)(stack + 264) = var_zero; /* 0x8003ac20 */
    *(int16_t*)(stack + 266) = var_zero; /* 0x8003ac24 */
    *(int16_t*)(stack + 268) = var_zero; /* 0x8003ac28 */
    *(int32_t*)(stack + 280) = var_v0; /* 0x8003ac2c */
    var_v0 = 61; /* 0x8003ac30 */
    /* Branch bne at 0x8003ac34 */
    var_v1 = var_v1 + -16; /* 0x8003ac38 */
    var_a0 = 10; /* 0x8003ac3c */
    var_a2 = 204; /* 0x8003ac44 */
    var_v0 = 138; /* 0x8003ac48 */
    /* Branch bne at 0x8003ac4c */
    var_v0 = 70; /* 0x8003ac50 */
    var_a0 = 10; /* 0x8003ac54 */
    var_a2 = 237; /* 0x8003ac5c */
    /* Branch bne at 0x8003ac60 */
    var_v0 = 129; /* 0x8003ac64 */
    var_a0 = 10; /* 0x8003ac68 */
    var_a2 = 207; /* 0x8003ac70 */
    /* Branch bne at 0x8003ac74 */
    var_v0 = 82; /* 0x8003ac78 */
    var_a0 = 10; /* 0x8003ac7c */
    var_a2 = 227; /* 0x8003ac84 */
    /* Branch bne at 0x8003ac88 */
    var_v0 = 134; /* 0x8003ac8c */
    var_a0 = 10; /* 0x8003ac90 */
    var_a2 = 210; /* 0x8003ac98 */
    /* Branch bne at 0x8003ac9c */
    var_v0 = 90; /* 0x8003aca0 */
    var_a0 = 10; /* 0x8003aca4 */
    var_a2 = 232; /* 0x8003acac */
    /* Branch bne at 0x8003acb0 */
    var_v0 = 100; /* 0x8003acb4 */
    var_a0 = 10; /* 0x8003acb8 */
    var_a2 = 218; /* 0x8003acc0 */
    /* Branch bne at 0x8003acc4 */
    var_v0 = 126; /* 0x8003acc8 */
    var_a0 = 10; /* 0x8003accc */
    var_a2 = 221; /* 0x8003acd4 */
    /* Branch bne at 0x8003acd8 */
    var_a0 = 10; /* 0x8003acdc */
    var_a2 = 224; /* 0x8003ace0 */
    var_a3 = var_sp + 272; /* 0x8003ace4 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003ace8 */
    var_v0 = var_sp + 264; /* 0x8003acec */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003acf0 */
    var_v0 = 512; /* 0x8003acf4 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003acf8 */
    var_v0 = 256; /* 0x8003acfc */
    *(int32_t*)(stack + 24) = var_v0; /* 0x8003ad00 */
    var_v0 = 6; /* 0x8003ad04 */
    *(int32_t*)(stack + 28) = var_v0; /* 0x8003ad08 */
    var_v0 = 3; /* 0x8003ad0c */
    *(int32_t*)(stack + 32) = var_v1; /* 0x8003ad10 */
    func_0x80036484(); /* 0x8003ad14 */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003ad24 */
    var_v1 = *(int32_t*)(reg_s6 + 28); /* 0x8003ad28 */
    var_s1 = *(int32_t*)(reg_s6 + 76); /* 0x8003ad2c */
    var_v0 = *(int32_t*)(reg_v0 + 32); /* 0x8003ad30 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x8003ad38 */
    var_v0 = *(int32_t*)(reg_v1 + 36); /* 0x8003ad3c */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x8003ad44 */
    var_v0 = *(uint16_t*)(reg_s6 + 80); /* 0x8003ad48 */
    var_v1 = *(int32_t*)(reg_v1 + 40); /* 0x8003ad4c */
    var_v0 = var_v0 + 32; /* 0x8003ad50 */
    *(int16_t*)(reg_s6 + 80) = var_v0; /* 0x8003ad54 */
    var_v0 = var_v0 << 0x10; /* 0x8003ad58 */
    var_v0 = var_v0 >> 0x10; /* 0x8003ad5c */
    /* Branch bnez at 0x8003ad64 */
    *(int32_t*)(reg_s6 + 40) = var_v1; /* 0x8003ad68 */
    var_v0 = -128; /* 0x8003ad6c */
    *(int16_t*)(reg_s6 + 80) = var_v0; /* 0x8003ad70 */
    var_a0 = *(int16_t*)(reg_s6 + 80); /* 0x8003ad74 */
    func_0x800744c4(); /* 0x8003ad78 */
    var_a0 = *(int16_t*)(reg_s6 + 80); /* 0x8003ad80 */
    func_0x800743f4(); /* 0x8003ad84 */
    var_a0 = *(int32_t*)(reg_s6 + 28); /* 0x8003ad8c */
    var_v1 = *(int32_t*)(reg_s1 + 120); /* 0x8003ad90 */
    var_a0 = *(int32_t*)(reg_a0 + 36); /* 0x8003ad94 */
    /* Branch bnez at 0x8003adb4 */
    var_at = -1; /* 0x8003adc0 */
    /* Branch bne at 0x8003adc4 */
    var_at = 0x8000 << 16; /* 0x8003adc8 */
    /* Branch bne at 0x8003adcc */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003adf8 */
    var_v1 = *(int32_t*)(reg_s6 + 28); /* 0x8003adfc */
    var_v0 = *(int32_t*)(reg_v0 + 32); /* 0x8003ae00 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x8003ae08 */
    var_v0 = *(int32_t*)(reg_v1 + 36); /* 0x8003ae0c */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x8003ae14 */
    var_v0 = *(uint16_t*)(reg_s6 + 80); /* 0x8003ae18 */
    var_v1 = *(int32_t*)(reg_v1 + 40); /* 0x8003ae1c */
    var_v0 = var_v0 + 32; /* 0x8003ae20 */
    *(int16_t*)(reg_s6 + 80) = var_v0; /* 0x8003ae24 */
    var_v0 = var_v0 << 0x10; /* 0x8003ae28 */
    var_v0 = var_v0 >> 0x10; /* 0x8003ae2c */
    /* Branch bnez at 0x8003ae34 */
    *(int32_t*)(reg_s6 + 40) = var_v1; /* 0x8003ae38 */
    var_v0 = -128; /* 0x8003ae3c */
    *(int16_t*)(reg_s6 + 80) = var_v0; /* 0x8003ae40 */
    var_a0 = *(int16_t*)(reg_s6 + 80); /* 0x8003ae44 */
    func_0x800744c4(); /* 0x8003ae48 */
    var_a0 = *(int16_t*)(reg_s6 + 80); /* 0x8003ae50 */
    func_0x800743f4(); /* 0x8003ae54 */
    var_v1 = *(int32_t*)(reg_s6 + 28); /* 0x8003ae5c */
    var_a0 = 0x801a << 16; /* 0x8003ae60 */
    var_v1 = *(int32_t*)(reg_v1 + 36); /* 0x8003ae64 */
    var_a0 = *(int32_t*)(reg_a0 + -28300); /* 0x8003ae68 */
    var_v1 = var_v1 + -1600; /* 0x8003ae6c */
    /* Branch bnez at 0x8003ae88 */
    var_at = -1; /* 0x8003ae94 */
    /* Branch bne at 0x8003ae98 */
    var_at = 0x8000 << 16; /* 0x8003ae9c */
    /* Branch bne at 0x8003aea0 */
    func_0x800746c4(); /* 0x8003aed0 */
    *(int16_t*)(reg_s6 + 60) = var_v0; /* 0x8003aed8 */
    var_v0 = *(uint16_t*)(reg_s6 + 80); /* 0x8003aedc */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003aee0 */
    *(int16_t*)(reg_s6 + 48) = var_v0; /* 0x8003aee8 */
    /* Branch beqz at 0x8003aef0 */
    var_v0 = var_v1 << 0x9; /* 0x8003aef4 */
    *(int16_t*)(reg_s6 + 18) = var_v0; /* 0x8003aefc */
    var_v1 = *(int16_t*)(reg_s6 + 64); /* 0x8003af00 */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x8003af04 */
    var_a0 = *(int16_t*)(reg_s6 + 66); /* 0x8003af08 */
    var_a1 = *(int16_t*)(reg_s6 + 68); /* 0x8003af0c */
    var_v0 = var_v0 + var_v1; /* 0x8003af10 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x8003af14 */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x8003af18 */
    var_v1 = *(int32_t*)(reg_s6 + 40); /* 0x8003af1c */
    var_v0 = var_v0 + var_a0; /* 0x8003af20 */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x8003af24 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x8003af28 */
    var_a0 = *(uint16_t*)(reg_s6 + 80); /* 0x8003af2c */
    var_v1 = var_v1 + var_a1; /* 0x8003af30 */
    *(int32_t*)(reg_s6 + 40) = var_v1; /* 0x8003af34 */
    var_v1 = *(uint8_t*)(reg_s6 + 5); /* 0x8003af38 */
    var_v0 = var_v0 + var_a0; /* 0x8003af3c */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x8003af44 */
    /* Branch beqz at 0x8003af48 */
    *(int16_t*)(reg_s6 + 60) = var_v0; /* 0x8003af4c */
    var_v0 = *(int16_t*)(reg_s6 + 56); /* 0x8003af50 */
    var_v0 = var_v0 << 0x1; /* 0x8003af58 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x8003af5c */
    var_v1 = *(uint16_t*)(reg_s6 + 80); /* 0x8003af60 */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x8003af6c */
    var_v0 = *(uint8_t*)(reg_s6 + 5); /* 0x8003af70 */
    var_v0 = var_v0 + 1; /* 0x8003af78 */
    *(int8_t*)(reg_s6 + 5) = var_v0; /* 0x8003af80 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x8003af84 */
    var_v0 = var_v0 + 128; /* 0x8003af8c */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x8003af90 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x8003af94 */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x8003af98 */
    var_v0 = var_v0 + 128; /* 0x8003af9c */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x8003afa0 */
    var_v0 = var_v1 << 0x3; /* 0x8003afa4 */
    var_v0 = var_v0 << 0x7; /* 0x8003afac */
    var_v0 = var_v0 + 4095; /* 0x8003afb8 */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x8003afbc */
    var_v0 = var_v0 >> 0xc; /* 0x8003afc0 */
    *(int16_t*)(reg_s6 + 12) = var_v0; /* 0x8003afc4 */
    var_v0 = var_v1 << 0x3; /* 0x8003afc8 */
    var_v0 = var_v0 << 0x7; /* 0x8003afd0 */
    var_a1 = var_v0 >> 0xc; /* 0x8003afd8 */
    var_v0 = var_v0 + 4095; /* 0x8003afdc */
    var_a1 = var_v0 >> 0xc; /* 0x8003afe0 */
    var_v0 = 0x8000 << 16; /* 0x8003afe4 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x8003afe8 */
    var_a2 = *(int8_t*)(reg_s6 + 80); /* 0x8003afec */
    var_a1 = var_a1 | var_v0; /* 0x8003aff0 */
    func_0x800381a8(); /* 0x8003aff4 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003affc */
    /* Branch beqz at 0x8003b008 */
    var_v0 = var_v1 << 0x7; /* 0x8003b00c */
    *(int16_t*)(reg_s6 + 18) = var_v0; /* 0x8003b010 */
    var_v0 = *(uint16_t*)(reg_s6 + 66); /* 0x8003b014 */
    var_v1 = *(uint8_t*)(reg_s6 + 8); /* 0x8003b018 */
    var_v0 = var_v0 + 2; /* 0x8003b01c */
    /* Branch bnez at 0x8003b020 */
    *(int16_t*)(reg_s6 + 66) = var_v0; /* 0x8003b024 */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x8003b028 */
    /* Branch bnez at 0x8003b034 */
    func_0x8003618c(); /* 0x8003b03c */
    var_v0 = 4; /* 0x8003b048 */
    var_v0 = *(uint8_t*)(reg_s6 + 8); /* 0x8003b04c */
    var_v0 = var_v0 + -1; /* 0x8003b054 */
    func_0x80078ac4(); /* 0x8003b058 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003b060 */
    var_a1 = 64; /* 0x8003b064 */
    var_a0 = var_v0 + -16384; /* 0x8003b070 */
    var_v1 = var_v1 + 7; /* 0x8003b074 */
    var_v0 = var_v1 >> 0x3; /* 0x8003b078 */
    var_v0 = var_v0 + 9; /* 0x8003b07c */
    var_v0 = var_a0 + 2; /* 0x8003b084 */
    var_v0 = var_v0 & 0xffff; /* 0x8003b088 */
    /* Branch bnez at 0x8003b090 */
    var_v0 = 0x801a << 16; /* 0x8003b094 */
    var_v1 = 0x801a << 16; /* 0x8003b098 */
    var_v1 = var_v1 + -28888; /* 0x8003b09c */
    var_v0 = *(uint16_t*)(reg_v1 + 652); /* 0x8003b0a0 */
    var_v0 = var_v0 + var_a0; /* 0x8003b0a8 */
    *(int16_t*)(reg_v1 + 652) = var_v0; /* 0x8003b0ac */
    var_v0 = 0x801a << 16; /* 0x8003b0b0 */
    var_v1 = var_v0 + -28888; /* 0x8003b0b4 */
    var_v0 = *(uint16_t*)(reg_v1 + 652); /* 0x8003b0b8 */
    var_v0 = var_v0 + -2049; /* 0x8003b0c0 */
    /* Branch beqz at 0x8003b0c8 */
    var_v0 = 4032; /* 0x8003b0cc */
    *(int16_t*)(reg_v1 + 652) = var_v0; /* 0x8003b0d0 */
    var_v0 = *(uint16_t*)(reg_v1 + 652); /* 0x8003b0d4 */
    var_v0 = var_v0 + -65; /* 0x8003b0dc */
    /* Branch beqz at 0x8003b0e4 */
    *(int16_t*)(reg_v1 + 652) = var_a1; /* 0x8003b0f0 */
    var_a1 = 2; /* 0x8003b0f8 */
    var_a1 = 4; /* 0x8003b100 */
    var_a1 = 8; /* 0x8003b104 */
    var_a0 = *(int16_t*)(reg_s6 + 16); /* 0x8003b108 */
    /* Branch beqz at 0x8003b114 */
    var_v0 = *(int32_t*)(reg_s6 + 76); /* 0x8003b11c */
    var_v1 = *(uint8_t*)(reg_v0 + 30); /* 0x8003b124 */
    var_a0 = var_a0 << 0x8; /* 0x8003b128 */
    *(int16_t*)(reg_v0 + 54) = var_a0; /* 0x8003b12c */
    var_v1 = var_v1 | 0xd; /* 0x8003b130 */
    *(int8_t*)(reg_v0 + 30) = var_v1; /* 0x8003b138 */
    /* Branch bgtz at 0x8003b13c */
    var_a0 = *(int32_t*)(reg_s6 + 76); /* 0x8003b144 */
    var_v1 = *(uint8_t*)(reg_a0 + 30); /* 0x8003b14c */
    var_v0 = var_v1 & 0x10; /* 0x8003b154 */
    /* Branch beqz at 0x8003b158 */
    *(int16_t*)(reg_a0 + 54) = var_zero; /* 0x8003b15c */
    var_v0 = var_v1 & 0xf7; /* 0x8003b164 */
    var_v0 = var_v1 & 0xf2; /* 0x8003b168 */
    *(int8_t*)(reg_a0 + 30) = var_v0; /* 0x8003b16c */
    var_v0 = *(uint8_t*)(reg_s6 + 8); /* 0x8003b170 */
    /* Branch bnez at 0x8003b178 */
    var_v0 = var_v0 + -1; /* 0x8003b17c */
    var_v0 = 0x801a << 16; /* 0x8003b180 */
    var_a0 = var_v0 + -28888; /* 0x8003b184 */
    var_v1 = *(uint16_t*)(reg_a0 + 6); /* 0x8003b188 */
    var_v1 = var_v0; /* 0x8003b194 */
    var_v0 = var_v0 << 0x10; /* 0x8003b198 */
    var_v1 = var_zero; /* 0x8003b1a4 */
    *(int16_t*)(reg_a0 + 6) = var_v1; /* 0x8003b1ac */
    var_a1 = 2; /* 0x8003b1b4 */
    var_a1 = 4; /* 0x8003b1bc */
    var_a1 = 8; /* 0x8003b1c0 */
    var_a0 = *(int16_t*)(reg_s6 + 16); /* 0x8003b1c4 */
    /* Branch beqz at 0x8003b1d0 */
    var_a0 = var_a0 << 0x8; /* 0x8003b1d4 */
    var_v0 = *(int32_t*)(reg_s6 + 76); /* 0x8003b1d8 */
    var_v1 = *(uint8_t*)(reg_v0 + 30); /* 0x8003b1e0 */
    *(int16_t*)(reg_v0 + 54) = var_a0; /* 0x8003b1e4 */
    var_v1 = var_v1 | 0xd; /* 0x8003b1e8 */
    *(int8_t*)(reg_v0 + 30) = var_v1; /* 0x8003b1ec */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x8003b1f0 */
    /* Branch bgtz at 0x8003b1f8 */
    var_a0 = *(int32_t*)(reg_s6 + 76); /* 0x8003b200 */
    var_v1 = *(uint8_t*)(reg_a0 + 30); /* 0x8003b208 */
    var_v0 = var_v1 & 0x10; /* 0x8003b210 */
    /* Branch beqz at 0x8003b214 */
    *(int16_t*)(reg_a0 + 54) = var_zero; /* 0x8003b218 */
    var_v0 = var_v1 & 0xf7; /* 0x8003b220 */
    var_v0 = var_v1 & 0xf2; /* 0x8003b224 */
    *(int8_t*)(reg_a0 + 30) = var_v0; /* 0x8003b228 */
    var_v0 = *(uint8_t*)(reg_s6 + 8); /* 0x8003b22c */
    /* Branch bnez at 0x8003b234 */
    var_v0 = var_v0 + -1; /* 0x8003b238 */
    var_v0 = 0x801a << 16; /* 0x8003b23c */
    var_s1 = var_v0 + -28888; /* 0x8003b240 */
    var_s0 = *(uint16_t*)(reg_s1 + 2); /* 0x8003b244 */
    var_s0 = var_v0; /* 0x8003b250 */
    var_v0 = var_v0 << 0x10; /* 0x8003b254 */
    /* Branch bgtz at 0x8003b258 */
    var_s0 = var_zero; /* 0x8003b260 */
    func_0x8003bd14(); /* 0x8003b264 */
    *(int16_t*)(reg_s1 + 2) = var_s0; /* 0x8003b270 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x8003b274 */
    var_v1 = *(uint16_t*)(reg_s6 + 60); /* 0x8003b278 */
    var_v0 = var_v0 + 96; /* 0x8003b27c */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x8003b280 */
    var_a0 = *(int16_t*)(reg_s6 + 56); /* 0x8003b284 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x8003b288 */
    var_v1 = var_v1 + 96; /* 0x8003b28c */
    *(int16_t*)(reg_s6 + 60) = var_v1; /* 0x8003b290 */
    var_v0 = var_v0 + 96; /* 0x8003b294 */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x8003b29c */
    var_a0 = var_a0 + 3; /* 0x8003b2a0 */
    var_a1 = *(int16_t*)(reg_s6 + 56); /* 0x8003b2a4 */
    var_v0 = var_a0 >> 0x2; /* 0x8003b2a8 */
    *(int16_t*)(reg_s6 + 12) = var_v0; /* 0x8003b2b0 */
    var_a1 = var_a1 + 3; /* 0x8003b2b4 */
    var_a1 = var_a1 >> 0x2; /* 0x8003b2b8 */
    var_v0 = 0x8000 << 16; /* 0x8003b2bc */
    var_a1 = var_a1 | var_v0; /* 0x8003b2c0 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x8003b2c4 */
    var_a2 = 256; /* 0x8003b2c8 */
    func_0x80038300(); /* 0x8003b2cc */
    var_s0 = var_v0; /* 0x8003b2d4 */
    /* Branch beqz at 0x8003b2d8 */
    var_v0 = var_s0 & 0x80; /* 0x8003b2dc */
    /* Branch beqz at 0x8003b2e0 */
    var_v0 = 255; /* 0x8003b2e4 */
    func_0x8003618c(); /* 0x8003b2e8 */
    var_v0 = 255; /* 0x8003b2f0 */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x8003b2f4 */
    var_v1 = 0x6666 << 16; /* 0x8003b2f8 */
    var_v0 = *(uint16_t*)(reg_s6 + 16); /* 0x8003b2fc */
    var_v1 = var_v1 | 0x6667; /* 0x8003b300 */
    var_v0 = var_v0 << 0x10; /* 0x8003b304 */
    var_a0 = var_v0 >> 0x10; /* 0x8003b308 */
    var_v0 = var_v0 >> 0x1f; /* 0x8003b310 */
    var_v1 = var_t1 >> 0x1; /* 0x8003b318 */
    var_v0 = var_v1 << 0x2; /* 0x8003b320 */
    var_v0 = var_v0 + var_v1; /* 0x8003b324 */
    var_a0 = var_a0 << 0x10; /* 0x8003b32c */
    /* Branch bnez at 0x8003b330 */
    var_s0 = var_zero; /* 0x8003b334 */
    func_0x80078ac4(); /* 0x8003b338 */
    var_v1 = *(int16_t*)(reg_s6 + 64); /* 0x8003b340 */
    var_v1 = var_v1 + 3; /* 0x8003b350 */
    var_v1 = var_v1 >> 0x2; /* 0x8003b358 */
    var_v0 = var_v0 + 1023; /* 0x8003b35c */
    var_v0 = var_v0 >> 0xa; /* 0x8003b360 */
    var_v0 = var_v0 + -16; /* 0x8003b364 */
    func_0x80078ac4(); /* 0x8003b36c */
    var_v1 = *(int16_t*)(reg_s6 + 66); /* 0x8003b374 */
    var_v1 = var_v1 + 3; /* 0x8003b384 */
    var_v1 = var_v1 >> 0x2; /* 0x8003b38c */
    var_v0 = var_v0 + 1023; /* 0x8003b390 */
    var_v0 = var_v0 >> 0xa; /* 0x8003b394 */
    func_0x80078ac4(); /* 0x8003b39c */
    var_v1 = *(int16_t*)(reg_s6 + 68); /* 0x8003b3a4 */
    var_v1 = var_v1 + 3; /* 0x8003b3b4 */
    var_a1 = var_v1 >> 0x2; /* 0x8003b3bc */
    var_v0 = var_v0 + 1023; /* 0x8003b3c0 */
    var_a0 = 10; /* 0x8003b3c4 */
    var_v1 = var_v0 >> 0xa; /* 0x8003b3c8 */
    var_v1 = var_v1 + -16; /* 0x8003b3cc */
    var_a1 = *(int16_t*)(stack + 288); /* 0x8003b3d4 */
    var_a2 = 215; /* 0x8003b3d8 */
    *(int16_t*)(stack + 292) = var_v1; /* 0x8003b3dc */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x8003b3e0 */
    var_a3 = var_sp + 296; /* 0x8003b3e4 */
    *(int32_t*)(stack + 296) = var_v0; /* 0x8003b3ec */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x8003b3f0 */
    var_v1 = var_v1 << 0x10; /* 0x8003b3f4 */
    *(int32_t*)(stack + 300) = var_v0; /* 0x8003b3f8 */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x8003b3fc */
    var_v1 = var_v1 >> 0x10; /* 0x8003b400 */
    *(int32_t*)(stack + 304) = var_v0; /* 0x8003b408 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003b40c */
    var_v0 = var_sp + 288; /* 0x8003b410 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003b414 */
    var_v0 = 512; /* 0x8003b418 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003b41c */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003b420 */
    var_s0 = var_s0 + 1; /* 0x8003b424 */
    var_v0 = var_v0 + -16; /* 0x8003b428 */
    func_0x80036484(); /* 0x8003b42c */
    /* Branch blez at 0x8003b434 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003b43c */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003b448 */
    var_v1 = *(int32_t*)(reg_s6 + 28); /* 0x8003b44c */
    var_v0 = *(int32_t*)(reg_v0 + 32); /* 0x8003b450 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x8003b458 */
    var_v0 = *(int32_t*)(reg_v1 + 36); /* 0x8003b45c */
    var_a0 = 0x5555 << 16; /* 0x8003b460 */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x8003b464 */
    var_v0 = *(int32_t*)(reg_v1 + 40); /* 0x8003b468 */
    var_v1 = *(uint16_t*)(reg_s6 + 16); /* 0x8003b46c */
    var_a0 = var_a0 | 0x5556; /* 0x8003b470 */
    var_v1 = var_v1 << 0x10; /* 0x8003b474 */
    var_a1 = var_v1 >> 0x10; /* 0x8003b478 */
    *(int32_t*)(reg_s6 + 40) = var_v0; /* 0x8003b480 */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003b484 */
    var_a0 = *(int32_t*)(reg_s6 + 28); /* 0x8003b488 */
    var_v0 = *(uint16_t*)(reg_v0 + 56); /* 0x8003b48c */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x8003b494 */
    var_v0 = *(uint16_t*)(reg_a0 + 58); /* 0x8003b498 */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x8003b4a0 */
    var_v0 = *(uint16_t*)(reg_a0 + 60); /* 0x8003b4a4 */
    var_v1 = var_v1 >> 0x1f; /* 0x8003b4a8 */
    *(int16_t*)(reg_s6 + 60) = var_v0; /* 0x8003b4ac */
    var_v0 = var_v1 << 0x1; /* 0x8003b4b8 */
    var_v0 = var_v0 + var_v1; /* 0x8003b4bc */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003b4c4 */
    var_a1 = var_a1 | 0x80; /* 0x8003b4c8 */
    /* Branch beqz at 0x8003b4d0 */
    *(int8_t*)(reg_s6 + 2) = var_a1; /* 0x8003b4d4 */
    var_v0 = var_v1 << 0x7; /* 0x8003b4d8 */
    *(int16_t*)(reg_s6 + 18) = var_v0; /* 0x8003b4dc */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003b4e0 */
    var_v1 = *(uint8_t*)(reg_v0 + 0); /* 0x8003b4e8 */
    var_v0 = 255; /* 0x8003b4ec */
    /* Branch bne at 0x8003b4f0 */
    *(int8_t*)(reg_s6 + 0) = var_v1; /* 0x8003b4fc */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x8003b500 */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x8003b504 */
    var_a2 = *(int8_t*)(reg_s6 + 80); /* 0x8003b508 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x8003b50c */
    var_v1 = *(uint16_t*)(reg_s6 + 58); /* 0x8003b510 */
    var_v0 = var_v0 + 96; /* 0x8003b514 */
    var_v1 = var_v1 + 96; /* 0x8003b518 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x8003b51c */
    func_0x800381a8(); /* 0x8003b520 */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x8003b528 */
    var_v1 = *(uint16_t*)(reg_s6 + 66); /* 0x8003b52c */
    var_v0 = var_v0 << 0x8; /* 0x8003b530 */
    var_v1 = var_v1 + 2; /* 0x8003b538 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x8003b53c */
    var_v0 = var_v0 + 96; /* 0x8003b544 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x8003b548 */
    var_v0 = *(uint16_t*)(reg_s6 + 58); /* 0x8003b54c */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x8003b550 */
    var_v0 = var_v0 + 96; /* 0x8003b554 */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x8003b558 */
    var_v0 = var_v1 << 0x3; /* 0x8003b55c */
    var_v0 = var_v0 << 0x7; /* 0x8003b564 */
    var_v0 = var_v0 + 4095; /* 0x8003b570 */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x8003b574 */
    var_v0 = var_v0 >> 0xc; /* 0x8003b578 */
    *(int16_t*)(reg_s6 + 12) = var_v0; /* 0x8003b57c */
    var_v0 = var_v1 << 0x3; /* 0x8003b580 */
    var_v0 = var_v0 << 0x7; /* 0x8003b588 */
    var_a1 = var_v0 >> 0xc; /* 0x8003b590 */
    var_v0 = var_v0 + 4095; /* 0x8003b594 */
    var_a1 = var_v0 >> 0xc; /* 0x8003b598 */
    var_v0 = 0x8000 << 16; /* 0x8003b59c */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x8003b5a0 */
    var_a2 = *(int8_t*)(reg_s6 + 80); /* 0x8003b5a4 */
    var_a1 = var_a1 | var_v0; /* 0x8003b5a8 */
    func_0x80038300(); /* 0x8003b5ac */
    var_s0 = var_v0; /* 0x8003b5b4 */
    /* Branch beqz at 0x8003b5b8 */
    var_v0 = var_s0 & 0x80; /* 0x8003b5bc */
    /* Branch beqz at 0x8003b5c0 */
    var_v0 = 255; /* 0x8003b5c4 */
    func_0x8003618c(); /* 0x8003b5c8 */
    var_v0 = 3; /* 0x8003b5d0 */
    *(int8_t*)(reg_s6 + 8) = var_v0; /* 0x8003b5d4 */
    var_v0 = 255; /* 0x8003b5d8 */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x8003b5dc */
    var_v1 = 0x6666 << 16; /* 0x8003b5e0 */
    var_v0 = *(uint16_t*)(reg_s6 + 16); /* 0x8003b5e4 */
    var_v1 = var_v1 | 0x6667; /* 0x8003b5e8 */
    var_v0 = var_v0 << 0x10; /* 0x8003b5ec */
    var_a0 = var_v0 >> 0x10; /* 0x8003b5f0 */
    var_v0 = var_v0 >> 0x1f; /* 0x8003b5f8 */
    var_v1 = var_t1 >> 0x1; /* 0x8003b600 */
    var_v0 = var_v1 << 0x2; /* 0x8003b608 */
    var_v0 = var_v0 + var_v1; /* 0x8003b60c */
    var_a0 = var_a0 << 0x10; /* 0x8003b614 */
    /* Branch bnez at 0x8003b618 */
    var_s0 = var_zero; /* 0x8003b620 */
    func_0x80078ac4(); /* 0x8003b624 */
    var_v1 = *(int16_t*)(reg_s6 + 64); /* 0x8003b62c */
    var_v1 = var_v1 + 3; /* 0x8003b63c */
    var_v1 = var_v1 >> 0x2; /* 0x8003b644 */
    var_v0 = var_v0 + 1023; /* 0x8003b648 */
    var_v0 = var_v0 >> 0xa; /* 0x8003b64c */
    var_v0 = var_v0 + -16; /* 0x8003b650 */
    func_0x80078ac4(); /* 0x8003b658 */
    var_v1 = *(int16_t*)(reg_s6 + 66); /* 0x8003b660 */
    var_v1 = var_v1 + 3; /* 0x8003b670 */
    var_v1 = var_v1 >> 0x2; /* 0x8003b678 */
    var_v0 = var_v0 + 1023; /* 0x8003b67c */
    var_v0 = var_v0 >> 0xa; /* 0x8003b680 */
    var_v0 = var_v0 + 48; /* 0x8003b684 */
    func_0x80078ac4(); /* 0x8003b68c */
    var_v1 = *(int16_t*)(reg_s6 + 68); /* 0x8003b694 */
    var_v1 = var_v1 + 3; /* 0x8003b6a4 */
    var_a1 = var_v1 >> 0x2; /* 0x8003b6ac */
    var_v0 = var_v0 + 1023; /* 0x8003b6b0 */
    var_a0 = 10; /* 0x8003b6b4 */
    var_v1 = var_v0 >> 0xa; /* 0x8003b6b8 */
    var_v1 = var_v1 + -16; /* 0x8003b6bc */
    var_a1 = *(int16_t*)(stack + 312); /* 0x8003b6c4 */
    var_a2 = 213; /* 0x8003b6c8 */
    *(int16_t*)(stack + 316) = var_v1; /* 0x8003b6cc */
    var_v0 = *(int32_t*)(reg_s6 + 32); /* 0x8003b6d0 */
    var_a3 = var_sp + 320; /* 0x8003b6d4 */
    *(int32_t*)(stack + 320) = var_v0; /* 0x8003b6dc */
    var_v0 = *(int32_t*)(reg_s6 + 36); /* 0x8003b6e0 */
    var_v1 = var_v1 << 0x10; /* 0x8003b6e4 */
    *(int32_t*)(stack + 324) = var_v0; /* 0x8003b6e8 */
    var_v0 = *(int32_t*)(reg_s6 + 40); /* 0x8003b6ec */
    var_v1 = var_v1 >> 0x10; /* 0x8003b6f0 */
    *(int32_t*)(stack + 328) = var_v0; /* 0x8003b6f8 */
    var_a1 = *(uint8_t*)(reg_s6 + 0); /* 0x8003b6fc */
    var_v0 = var_sp + 312; /* 0x8003b700 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003b704 */
    var_v0 = 4096; /* 0x8003b708 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003b70c */
    var_v0 = *(int16_t*)(reg_s6 + 10); /* 0x8003b710 */
    var_s0 = var_s0 + 1; /* 0x8003b714 */
    var_v0 = var_v0 + -16; /* 0x8003b718 */
    func_0x80036484(); /* 0x8003b71c */
    /* Branch blez at 0x8003b724 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003b72c */
    /* Branch beqz at 0x8003b738 */
    var_v0 = var_v1 << 0x7; /* 0x8003b73c */
    *(int16_t*)(reg_s6 + 18) = var_v0; /* 0x8003b740 */
    var_v0 = *(uint16_t*)(reg_s6 + 66); /* 0x8003b744 */
    var_v0 = var_v0 + 2; /* 0x8003b74c */
    *(int16_t*)(reg_s6 + 66) = var_v0; /* 0x8003b754 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x8003b758 */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x8003b75c */
    var_a2 = *(int8_t*)(reg_s6 + 80); /* 0x8003b760 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x8003b764 */
    var_v1 = *(uint16_t*)(reg_s6 + 58); /* 0x8003b768 */
    var_v0 = var_v0 + 96; /* 0x8003b76c */
    var_v1 = var_v1 + 96; /* 0x8003b770 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x8003b774 */
    func_0x800381a8(); /* 0x8003b778 */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x8003b780 */
    var_v1 = *(uint16_t*)(reg_s6 + 66); /* 0x8003b784 */
    var_v0 = var_v0 << 0x8; /* 0x8003b788 */
    var_v1 = var_v1 + -16; /* 0x8003b78c */
    *(int16_t*)(reg_s6 + 18) = var_v0; /* 0x8003b790 */
    *(int16_t*)(reg_s6 + 66) = var_v1; /* 0x8003b798 */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x8003b79c */
    var_a0 = 32; /* 0x8003b7a0 */
    func_0x800744c4(); /* 0x8003b7a8 */
    var_v1 = *(uint16_t*)(reg_s6 + 56); /* 0x8003b7b0 */
    *(int16_t*)(reg_s6 + 58) = var_v0; /* 0x8003b7b4 */
    var_v0 = *(uint16_t*)(reg_s6 + 60); /* 0x8003b7b8 */
    var_v1 = var_v1 + 192; /* 0x8003b7bc */
    *(int16_t*)(reg_s6 + 56) = var_v1; /* 0x8003b7c0 */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x8003b7c4 */
    var_v0 = var_v0 + 192; /* 0x8003b7c8 */
    *(int16_t*)(reg_s6 + 60) = var_v0; /* 0x8003b7cc */
    var_v0 = var_v1 << 0x1; /* 0x8003b7d0 */
    var_v0 = var_v0 + var_v1; /* 0x8003b7d4 */
    var_v0 = var_v0 << 0x9; /* 0x8003b7d8 */
    var_v0 = var_v0 + 4095; /* 0x8003b7e4 */
    var_v1 = *(int16_t*)(reg_s6 + 56); /* 0x8003b7e8 */
    var_v0 = var_v0 >> 0xc; /* 0x8003b7ec */
    *(int16_t*)(reg_s6 + 12) = var_v0; /* 0x8003b7f0 */
    var_v0 = var_v1 << 0x1; /* 0x8003b7f4 */
    var_v0 = var_v0 + var_v1; /* 0x8003b7f8 */
    var_v0 = var_v0 << 0x9; /* 0x8003b7fc */
    var_a2 = var_zero; /* 0x8003b804 */
    var_v0 = var_v0 + 4095; /* 0x8003b808 */
    var_v0 = var_v0 >> 0xc; /* 0x8003b80c */
    var_v1 = 0x8000 << 16; /* 0x8003b810 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x8003b814 */
    var_v0 = var_v0 | var_v1; /* 0x8003b818 */
    *(int32_t*)(reg_s6 + 24) = var_v0; /* 0x8003b81c */
    var_v0 = *(uint16_t*)(reg_s6 + 50); /* 0x8003b820 */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x8003b824 */
    var_v0 = var_v0 + 128; /* 0x8003b828 */
    func_0x800381a8(); /* 0x8003b82c */
    var_s0 = var_v0; /* 0x8003b834 */
    /* Branch beqz at 0x8003b838 */
    var_v0 = var_s0 & 0x80; /* 0x8003b83c */
    /* Branch beqz at 0x8003b840 */
    var_v0 = 255; /* 0x8003b844 */
    func_0x8003618c(); /* 0x8003b848 */
    var_v0 = 3; /* 0x8003b850 */
    *(int8_t*)(reg_s6 + 8) = var_v0; /* 0x8003b854 */
    var_v0 = 255; /* 0x8003b858 */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x8003b85c */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003b860 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x8003b86c */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x8003b870 */
    func_0x80038300(); /* 0x8003b874 */
    var_s0 = var_v0; /* 0x8003b87c */
    /* Branch beqz at 0x8003b880 */
    var_v0 = var_s0 & 0x80; /* 0x8003b884 */
    /* Branch beqz at 0x8003b888 */
    var_v0 = 255; /* 0x8003b88c */
    func_0x8003618c(); /* 0x8003b890 */
    var_v0 = 255; /* 0x8003b898 */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x8003b89c */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003b8a0 */
    var_v0 = 0x5555 << 16; /* 0x8003b8ac */
    var_v1 = *(uint16_t*)(reg_s6 + 16); /* 0x8003b8b0 */
    var_v0 = var_v0 | 0x5556; /* 0x8003b8b4 */
    var_v1 = var_v1 << 0x10; /* 0x8003b8b8 */
    var_a3 = var_v1 >> 0x10; /* 0x8003b8bc */
    var_a2 = -256; /* 0x8003b8c4 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x8003b8c8 */
    var_a1 = *(int32_t*)(reg_s6 + 24); /* 0x8003b8cc */
    var_v1 = var_v1 >> 0x1f; /* 0x8003b8d0 */
    var_v0 = var_v1 << 0x1; /* 0x8003b8dc */
    var_v0 = var_v0 + var_v1; /* 0x8003b8e0 */
    var_a3 = var_a3 | 0x80; /* 0x8003b8e8 */
    func_0x80038300(); /* 0x8003b8ec */
    var_s0 = var_v0; /* 0x8003b8f4 */
    /* Branch beqz at 0x8003b8f8 */
    var_v0 = var_s0 & 0x80; /* 0x8003b8fc */
    /* Branch beqz at 0x8003b900 */
    var_v0 = 255; /* 0x8003b904 */
    func_0x8003618c(); /* 0x8003b908 */
    var_v0 = 255; /* 0x8003b910 */
    *(int8_t*)(reg_s6 + 0) = var_v0; /* 0x8003b914 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003b918 */
    var_a0 = *(int32_t*)(reg_s6 + 28); /* 0x8003b924 */
    var_v1 = *(uint8_t*)(reg_a0 + 0); /* 0x8003b92c */
    var_v0 = 255; /* 0x8003b930 */
    /* Branch beq at 0x8003b934 */
    var_a0 = *(int16_t*)(reg_a0 + 52); /* 0x8003b93c */
    func_0x800744c4(); /* 0x8003b940 */
    var_a0 = *(int32_t*)(reg_s6 + 28); /* 0x8003b948 */
    var_v1 = *(int16_t*)(reg_a0 + 56); /* 0x8003b950 */
    var_v1 = var_v1 + 4095; /* 0x8003b968 */
    var_a0 = *(int16_t*)(reg_a0 + 50); /* 0x8003b96c */
    func_0x800744c4(); /* 0x8003b970 */
    var_v1 = var_v1 + 4095; /* 0x8003b988 */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003b98c */
    var_a0 = *(int16_t*)(reg_v0 + 50); /* 0x8003b994 */
    func_0x800743f4(); /* 0x8003b998 */
    var_v1 = var_v1 + 4095; /* 0x8003b9b0 */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003b9b4 */
    var_a0 = *(int16_t*)(reg_v0 + 52); /* 0x8003b9bc */
    func_0x800743f4(); /* 0x8003b9c0 */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003b9c8 */
    var_v0 = *(int32_t*)(reg_v0 + 32); /* 0x8003b9d0 */
    var_v1 = *(int32_t*)(reg_s6 + 28); /* 0x8003b9d4 */
    var_v0 = var_v0 + var_s1; /* 0x8003b9d8 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x8003b9dc */
    var_a0 = *(int16_t*)(reg_v1 + 52); /* 0x8003b9e0 */
    var_a0 = *(int32_t*)(reg_s6 + 28); /* 0x8003b9ec */
    var_v1 = *(uint8_t*)(reg_a0 + 0); /* 0x8003b9f4 */
    var_v0 = 255; /* 0x8003b9f8 */
    /* Branch beq at 0x8003b9fc */
    var_a0 = *(int16_t*)(reg_a0 + 52); /* 0x8003ba04 */
    func_0x800744c4(); /* 0x8003ba08 */
    var_a0 = *(int32_t*)(reg_s6 + 28); /* 0x8003ba10 */
    var_v1 = *(int16_t*)(reg_a0 + 56); /* 0x8003ba18 */
    var_v1 = var_v1 + 4095; /* 0x8003ba30 */
    var_a0 = *(int16_t*)(reg_a0 + 50); /* 0x8003ba34 */
    func_0x800744c4(); /* 0x8003ba38 */
    var_v1 = var_v1 + 4095; /* 0x8003ba50 */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003ba54 */
    var_a0 = *(int16_t*)(reg_v0 + 50); /* 0x8003ba5c */
    func_0x800743f4(); /* 0x8003ba60 */
    var_v1 = var_v1 + 4095; /* 0x8003ba78 */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003ba7c */
    var_a0 = *(int16_t*)(reg_v0 + 52); /* 0x8003ba84 */
    var_s0 = var_v1 >> 0xc; /* 0x8003ba88 */
    func_0x800743f4(); /* 0x8003ba8c */
    var_v0 = *(int32_t*)(reg_s6 + 28); /* 0x8003ba94 */
    var_v0 = *(int32_t*)(reg_v0 + 32); /* 0x8003ba9c */
    var_v1 = *(int32_t*)(reg_s6 + 28); /* 0x8003baa0 */
    var_v0 = var_v0 + var_s1; /* 0x8003baa4 */
    *(int32_t*)(reg_s6 + 32) = var_v0; /* 0x8003baa8 */
    var_a0 = *(int16_t*)(reg_v1 + 52); /* 0x8003baac */
    var_a0 = var_a0 + 2048; /* 0x8003bab4 */
    func_0x800743f4(); /* 0x8003bab8 */
    var_a0 = *(int32_t*)(reg_s6 + 28); /* 0x8003bac0 */
    var_v1 = *(int16_t*)(reg_a0 + 56); /* 0x8003bac8 */
    var_v1 = var_v1 + 4095; /* 0x8003bae0 */
    var_v1 = var_v1 >> 0xc; /* 0x8003bae4 */
    var_v0 = *(int32_t*)(reg_a0 + 36); /* 0x8003bae8 */
    var_a0 = *(int32_t*)(reg_s6 + 28); /* 0x8003baec */
    var_v0 = var_v0 + var_v1; /* 0x8003baf0 */
    *(int32_t*)(reg_s6 + 36) = var_v0; /* 0x8003baf4 */
    var_v0 = *(int32_t*)(reg_a0 + 40); /* 0x8003baf8 */
    var_v1 = *(int16_t*)(reg_s6 + 16); /* 0x8003bafc */
    var_v0 = var_v0 + var_s0; /* 0x8003bb00 */
    *(int32_t*)(reg_s6 + 40) = var_v0; /* 0x8003bb04 */
    /* Branch beqz at 0x8003bb0c */
    var_v0 = var_v1 << 0x7; /* 0x8003bb10 */
    *(int16_t*)(reg_s6 + 18) = var_v0; /* 0x8003bb18 */
    var_v0 = 94; /* 0x8003bb1c */
    /* Branch beq at 0x8003bb20 */
    var_a0 = 64; /* 0x8003bb24 */
    var_v0 = *(int16_t*)(reg_s6 + 16); /* 0x8003bb28 */
    func_0x800743f4(); /* 0x8003bb2c */
    var_v1 = *(uint16_t*)(reg_s6 + 50); /* 0x8003bb34 */
    var_v1 = var_v1 + var_v0; /* 0x8003bb3c */
    *(int16_t*)(reg_s6 + 50) = var_v1; /* 0x8003bb40 */
    var_a1 = 0x8000 << 16; /* 0x8003bb44 */
    var_v0 = *(uint16_t*)(reg_s6 + 56); /* 0x8003bb48 */
    var_v1 = *(uint16_t*)(reg_s6 + 58); /* 0x8003bb4c */
    var_v0 = var_v0 + 128; /* 0x8003bb50 */
    var_v1 = var_v1 + 128; /* 0x8003bb54 */
    *(int16_t*)(reg_s6 + 58) = var_v1; /* 0x8003bb58 */
    var_v1 = var_v1 << 0x10; /* 0x8003bb5c */
    var_a2 = var_v1 >> 0x10; /* 0x8003bb60 */
    var_v1 = (uint32_t)var_v1 >> 0x1f; /* 0x8003bb64 */
    var_a2 = var_a2 + var_v1; /* 0x8003bb68 */
    var_a3 = var_a2 >> 0x1; /* 0x8003bb6c */
    var_a1 = var_a3 | var_a1; /* 0x8003bb70 */
    var_a2 = (uint32_t)var_a2 >> 0x1f; /* 0x8003bb74 */
    var_a2 = var_a3 + var_a2; /* 0x8003bb78 */
    *(int16_t*)(reg_s6 + 56) = var_v0; /* 0x8003bb7c */
    var_v0 = *(uint16_t*)(reg_s6 + 60); /* 0x8003bb80 */
    var_v1 = *(uint16_t*)(reg_s6 + 56); /* 0x8003bb84 */
    var_v0 = var_v0 + 128; /* 0x8003bb88 */
    var_v1 = var_v1 << 0x10; /* 0x8003bb8c */
    *(int16_t*)(reg_s6 + 60) = var_v0; /* 0x8003bb90 */
    var_v0 = var_v1 >> 0x10; /* 0x8003bb94 */
    var_v1 = (uint32_t)var_v1 >> 0x1f; /* 0x8003bb98 */
    var_v0 = var_v0 + var_v1; /* 0x8003bb9c */
    var_v0 = var_v0 >> 0x1; /* 0x8003bba0 */
    *(int16_t*)(reg_s6 + 12) = var_v0; /* 0x8003bba4 */
    var_a0 = *(uint16_t*)(reg_s6 + 12); /* 0x8003bba8 */
    var_a2 = var_a2 >> 0x1; /* 0x8003bbac */
    func_0x80035d04(); /* 0x8003bbb0 */
    var_s0 = var_v0; /* 0x8003bbb8 */
    /* Branch beqz at 0x8003bbbc */
    var_v0 = var_s0 & 0x80; /* 0x8003bbc0 */
    /* Branch beqz at 0x8003bbc4 */
    func_0x8003618c(); /* 0x8003bbcc */
    var_v0 = 3; /* 0x8003bbd4 */
    *(int8_t*)(reg_s6 + 8) = var_v0; /* 0x8003bbd8 */
    var_ra = *(int32_t*)(stack + 396); /* 0x8003bbdc */
    var_s8 = *(int32_t*)(stack + 392); /* 0x8003bbe0 */
    var_s7 = *(int32_t*)(stack + 388); /* 0x8003bbe4 */
    var_s6 = *(int32_t*)(stack + 384); /* 0x8003bbe8 */
    var_s5 = *(int32_t*)(stack + 380); /* 0x8003bbec */
    var_s4 = *(int32_t*)(stack + 376); /* 0x8003bbf0 */
    var_s3 = *(int32_t*)(stack + 372); /* 0x8003bbf4 */
    var_s2 = *(int32_t*)(stack + 368); /* 0x8003bbf8 */
    var_s1 = *(int32_t*)(stack + 364); /* 0x8003bbfc */
    var_s0 = *(int32_t*)(stack + 360); /* 0x8003bc00 */
    var_sp = var_sp + 400; /* 0x8003bc04 */
    return; /* 0x8003bc08 */
}

/* Function at 0x8003bc0c */
void func_0x8003bc0c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x8019 << 16; /* 0x8003bc10 */
    var_a0 = var_v0 + -7400; /* 0x8003bc14 */
    var_v1 = var_zero; /* 0x8003bc18 */
    var_a1 = 255; /* 0x8003bc1c */
    *(int8_t*)(reg_a0 + 0) = var_a1; /* 0x8003bc20 */
    var_v1 = var_v1 + 1; /* 0x8003bc24 */
    var_v0 = var_v1 & 0xffff; /* 0x8003bc28 */
    /* Branch bnez at 0x8003bc30 */
    var_a0 = var_a0 + 88; /* 0x8003bc34 */
    return; /* 0x8003bc38 */
}

/* Function at 0x8003bc3c */
void func_0x8003bc3c() {
    /* Local variables */
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -40; /* 0x8003bc40 */
    var_v0 = 0x8019 << 16; /* 0x8003bc44 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x8003bc48 */
    var_s1 = var_v0 + -7400; /* 0x8003bc4c */
    var_v0 = var_s1 + -4224; /* 0x8003bc50 */
    *(int32_t*)(stack + 28) = var_s3; /* 0x8003bc54 */
    var_s3 = 255; /* 0x8003bc58 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x8003bc5c */
    var_s2 = var_v0; /* 0x8003bc60 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003bc64 */
    var_s0 = var_s1 + 16; /* 0x8003bc68 */
    *(int32_t*)(stack + 32) = var_ra; /* 0x8003bc6c */
    *(int32_t*)(reg_v0 + 15496) = var_zero; /* 0x8003bc70 */
    var_v0 = *(uint8_t*)(reg_s1 + 0); /* 0x8003bc74 */
    /* Branch beq at 0x8003bc7c */
    *(int32_t*)(reg_s2 + 15492) = var_s1; /* 0x8003bc84 */
    var_v1 = *(uint8_t*)(reg_s0 + -15); /* 0x8003bc88 */
    var_v0 = var_v1 << 0x1; /* 0x8003bc90 */
    var_v0 = var_v0 + var_v1; /* 0x8003bc94 */
    var_v0 = var_v0 << 0x3; /* 0x8003bc98 */
    var_v0 = var_v0 + var_s2; /* 0x8003bc9c */
    *(int32_t*)(reg_s2 + 15488) = var_v0; /* 0x8003bca0 */
    var_v0 = *(uint16_t*)(reg_s0 + 0); /* 0x8003bca4 */
    var_v1 = -1; /* 0x8003bca8 */
    var_v0 = var_v0 + -1; /* 0x8003bcac */
    *(int16_t*)(reg_s0 + 0) = var_v0; /* 0x8003bcb0 */
    var_v0 = var_v0 << 0x10; /* 0x8003bcb4 */
    var_v0 = var_v0 >> 0x10; /* 0x8003bcb8 */
    /* Branch bne at 0x8003bcbc */
    *(int8_t*)(reg_s1 + 0) = var_s3; /* 0x8003bcc8 */
    func_0x800385b0(); /* 0x8003bccc */
    var_s0 = var_s0 + 88; /* 0x8003bcd4 */
    var_v0 = *(int32_t*)(reg_s2 + 15496); /* 0x8003bcd8 */
    var_v0 = var_v0 + 1; /* 0x8003bce0 */
    *(int32_t*)(reg_s2 + 15496) = var_v0; /* 0x8003bce4 */
    /* Branch bnez at 0x8003bcec */
    var_s1 = var_s1 + 88; /* 0x8003bcf0 */
    var_ra = *(int32_t*)(stack + 32); /* 0x8003bcf4 */
    var_s3 = *(int32_t*)(stack + 28); /* 0x8003bcf8 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x8003bcfc */
    var_s1 = *(int32_t*)(stack + 20); /* 0x8003bd00 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003bd04 */
    var_sp = var_sp + 40; /* 0x8003bd08 */
    return; /* 0x8003bd0c */
}

/* Function at 0x8003bd10 */
void func_0x8003bd10() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -24; /* 0x8003bd14 */
    var_v0 = 0x801a << 16; /* 0x8003bd18 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003bd1c */
    var_s0 = var_v0 + -28888; /* 0x8003bd20 */
    *(int32_t*)(stack + 20) = var_ra; /* 0x8003bd24 */
    var_v0 = *(uint8_t*)(reg_s0 + 536); /* 0x8003bd28 */
    var_v1 = 4; /* 0x8003bd2c */
    /* Branch beq at 0x8003bd30 */
    *(int8_t*)(reg_s0 + 536) = var_v1; /* 0x8003bd38 */
    func_0x80057c0c(); /* 0x8003bd3c */
    var_v1 = 0x2aaa << 16; /* 0x8003bd44 */
    var_v1 = var_v1 | 0xaaab; /* 0x8003bd48 */
    var_v0 = *(uint16_t*)(reg_s0 + 616); /* 0x8003bd4c */
    var_a0 = -1024; /* 0x8003bd50 */
    var_v0 = var_v0 & 0x7ff; /* 0x8003bd54 */
    var_v1 = 0x1 << 16; /* 0x8003bd60 */
    var_v1 = var_v1 | 0x8000; /* 0x8003bd64 */
    var_v0 = 0x8016 << 16; /* 0x8003bd68 */
    var_v0 = var_v0 + -12144; /* 0x8003bd6c */
    var_v0 = var_v0 + var_v1; /* 0x8003bd70 */
    var_v1 = 1; /* 0x8003bd74 */
    *(int8_t*)(reg_v0 + 28181) = var_v1; /* 0x8003bd78 */
    var_v0 = 170; /* 0x8003bd7c */
    var_a0 = var_a0 >> 0x1f; /* 0x8003bd80 */
    *(int16_t*)(reg_s0 + 646) = var_zero; /* 0x8003bd84 */
    *(int16_t*)(reg_s0 + 380) = var_v0; /* 0x8003bd88 */
    var_v0 = var_a1 >> 0x2; /* 0x8003bd90 */
    *(int16_t*)(reg_s0 + 378) = var_v0; /* 0x8003bd98 */
    var_ra = *(int32_t*)(stack + 20); /* 0x8003bd9c */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003bda0 */
    var_sp = var_sp + 24; /* 0x8003bda4 */
    return; /* 0x8003bda8 */
}

/* Function at 0x8003bdac */
void func_0x8003bdac() {
    /* Local variables */
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;

    var_sp = var_sp + -24; /* 0x8003bdb0 */
    var_v0 = 0x801a << 16; /* 0x8003bdb4 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003bdb8 */
    var_s0 = var_v0 + -28888; /* 0x8003bdbc */
    *(int32_t*)(stack + 20) = var_ra; /* 0x8003bdc0 */
    var_v0 = *(int16_t*)(reg_s0 + 724); /* 0x8003bdc4 */
    /* Branch bnez at 0x8003bdd0 */
    var_v0 = 0x801b << 16; /* 0x8003bdd4 */
    var_v0 = *(int32_t*)(reg_v0 + 22904); /* 0x8003bdd8 */
    /* Branch bnez at 0x8003bde4 */
    func_0x8003bd14(); /* 0x8003bdec */
    var_v0 = 1; /* 0x8003bdf4 */
    *(int8_t*)(reg_s0 + 568) = var_v0; /* 0x8003bdf8 */
    var_ra = *(int32_t*)(stack + 20); /* 0x8003bdfc */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003be00 */
    var_sp = var_sp + 24; /* 0x8003be04 */
    return; /* 0x8003be08 */
}

/* Function at 0x8003be0c */
void func_0x8003be0c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x801b << 16; /* 0x8003be10 */
    var_a0 = *(int32_t*)(reg_v0 + 22932); /* 0x8003be14 */
    var_v0 = 0x8 << 16; /* 0x8003be18 */
    /* Branch beq at 0x8003be1c */
    var_v0 = 0x801a << 16; /* 0x8003be20 */
    var_v1 = var_v0 + -28888; /* 0x8003be24 */
    var_v0 = *(int32_t*)(reg_v1 + 588); /* 0x8003be28 */
    /* Branch beqz at 0x8003be34 */
    var_v0 = 1; /* 0x8003be38 */
    *(int32_t*)(reg_v1 + 748) = var_v0; /* 0x8003be40 */
    *(int32_t*)(reg_v1 + 748) = var_zero; /* 0x8003be44 */
    var_v0 = 0x801b << 16; /* 0x8003be48 */
    var_a0 = *(int32_t*)(reg_v0 + 22944); /* 0x8003be4c */
    var_v0 = 0x8 << 16; /* 0x8003be50 */
    /* Branch beq at 0x8003be54 */
    var_v0 = 0x801a << 16; /* 0x8003be58 */
    var_v1 = var_v0 + -28888; /* 0x8003be5c */
    var_v0 = *(int32_t*)(reg_v1 + 588); /* 0x8003be60 */
    /* Branch beqz at 0x8003be6c */
    var_v0 = 1; /* 0x8003be70 */
    *(int32_t*)(reg_v1 + 752) = var_v0; /* 0x8003be78 */
    *(int32_t*)(reg_v1 + 752) = var_zero; /* 0x8003be7c */
    var_v0 = 0x801b << 16; /* 0x8003be80 */
    var_v1 = *(uint8_t*)(reg_v0 + 22820); /* 0x8003be84 */
    var_v0 = 10; /* 0x8003be88 */
    /* Branch bne at 0x8003be8c */
    var_v0 = 0x801a << 16; /* 0x8003be90 */
    var_a0 = var_v0 + -28888; /* 0x8003be94 */
    var_v1 = *(int16_t*)(reg_a0 + 376); /* 0x8003be98 */
    var_v0 = 327; /* 0x8003be9c */
    /* Branch bne at 0x8003bea0 */
    *(int32_t*)(reg_a0 + 752) = var_zero; /* 0x8003bea8 */
    return; /* 0x8003beac */
}

/* Function at 0x8003beb0 */
void func_0x8003beb0() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -40; /* 0x8003beb4 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x8003beb8 */
    var_s2 = var_a0; /* 0x8003bebc */
    var_v0 = 0x801a << 16; /* 0x8003bec0 */
    *(int32_t*)(stack + 28) = var_s3; /* 0x8003bec4 */
    var_s3 = var_v0 + -28888; /* 0x8003bec8 */
    *(int32_t*)(stack + 32) = var_ra; /* 0x8003becc */
    *(int32_t*)(stack + 20) = var_s1; /* 0x8003bed0 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003bed4 */
    var_v1 = *(int32_t*)(reg_s3 + 584); /* 0x8003bed8 */
    var_v0 = *(int32_t*)(reg_s2 + 4); /* 0x8003bedc */
    var_v0 = var_s1 + 10240; /* 0x8003bee8 */
    /* Branch beqz at 0x8003bef0 */
    var_v0 = -1; /* 0x8003bef4 */
    var_v1 = *(int32_t*)(reg_s3 + 592); /* 0x8003bef8 */
    var_v0 = *(int32_t*)(reg_s2 + 12); /* 0x8003befc */
    var_v0 = var_s0 + 10240; /* 0x8003bf08 */
    /* Branch beqz at 0x8003bf10 */
    func_0x800746c4(); /* 0x8003bf2c */
    var_a0 = var_s0; /* 0x8003bf34 */
    var_s0 = var_v0; /* 0x8003bf38 */
    func_0x80076ea4(); /* 0x8003bf3c */
    var_v0 = var_v0 << 0x10; /* 0x8003bf44 */
    var_a0 = *(int16_t*)(reg_s2 + 32); /* 0x8003bf48 */
    var_v0 = var_v0 >> 0x10; /* 0x8003bf4c */
    func_0x800744c4(); /* 0x8003bf50 */
    var_v1 = *(int16_t*)(reg_s2 + 34); /* 0x8003bf58 */
    var_v1 = var_v1 + 4095; /* 0x8003bf70 */
    var_v1 = var_v1 >> 0xc; /* 0x8003bf74 */
    var_v0 = *(uint16_t*)(reg_s2 + 28); /* 0x8003bf78 */
    var_v0 = var_v0 + 256; /* 0x8003bf80 */
    /* Branch beqz at 0x8003bf88 */
    var_v0 = -1; /* 0x8003bf8c */
    var_a1 = *(int32_t*)(reg_s3 + 588); /* 0x8003bf90 */
    var_v1 = *(int32_t*)(reg_s2 + 8); /* 0x8003bf94 */
    var_a0 = var_a1 + 1600; /* 0x8003bf98 */
    /* Branch beqz at 0x8003bfa0 */
    var_v0 = *(uint16_t*)(reg_s2 + 30); /* 0x8003bfa8 */
    /* Branch beqz at 0x8003bfb8 */
    var_v0 = -1; /* 0x8003bfbc */
    /* Branch bnez at 0x8003bfcc */
    var_v0 = -1; /* 0x8003bfd0 */
    var_v0 = var_s0; /* 0x8003bfd8 */
    var_v0 = -1; /* 0x8003bfdc */
    var_ra = *(int32_t*)(stack + 32); /* 0x8003bfe0 */
    var_s3 = *(int32_t*)(stack + 28); /* 0x8003bfe4 */
    var_s2 = *(int32_t*)(stack + 24); /* 0x8003bfe8 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x8003bfec */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003bff0 */
    var_sp = var_sp + 40; /* 0x8003bff4 */
    return; /* 0x8003bff8 */
}

/* Function at 0x8003bffc */
void func_0x8003bffc() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -40; /* 0x8003c000 */
    var_t0 = var_a0; /* 0x8003c004 */
    var_t1 = var_a1; /* 0x8003c008 */
    var_t2 = var_a2; /* 0x8003c00c */
    var_a3 = var_a3 + 256; /* 0x8003c010 */
    var_v0 = 1000; /* 0x8003c014 */
    var_a0 = 0x801a << 16; /* 0x8003c018 */
    var_a0 = var_a0 + -28304; /* 0x8003c01c */
    var_a1 = var_t0; /* 0x8003c020 */
    var_v1 = *(int32_t*)(stack + 56); /* 0x8003c024 */
    var_a2 = var_t1; /* 0x8003c028 */
    *(int32_t*)(stack + 16) = var_a3; /* 0x8003c02c */
    var_a3 = var_t2; /* 0x8003c030 */
    *(int32_t*)(stack + 32) = var_ra; /* 0x8003c034 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003c038 */
    func_0x8004a580(); /* 0x8003c03c */
    var_ra = *(int32_t*)(stack + 32); /* 0x8003c044 */
    var_sp = var_sp + 40; /* 0x8003c048 */
    return; /* 0x8003c04c */
}

/* Function at 0x8003c050 */
void func_0x8003c050() {
    /* Local variables */
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x801a << 16; /* 0x8003c054 */
    var_v0 = var_v0 + -28888; /* 0x8003c058 */
    *(int16_t*)(reg_v0 + 718) = var_zero; /* 0x8003c05c */
    *(int16_t*)(reg_v0 + 720) = var_zero; /* 0x8003c060 */
    *(int16_t*)(reg_v0 + 722) = var_zero; /* 0x8003c064 */
    *(int8_t*)(reg_v0 + 569) = var_zero; /* 0x8003c068 */
    *(int16_t*)(reg_v0 + 724) = var_zero; /* 0x8003c06c */
    *(int8_t*)(reg_v0 + 536) = var_zero; /* 0x8003c070 */
    *(int16_t*)(reg_v0 + 660) = var_zero; /* 0x8003c074 */
    *(int16_t*)(reg_v0 + 658) = var_zero; /* 0x8003c078 */
    *(int16_t*)(reg_v0 + 656) = var_zero; /* 0x8003c07c */
    *(int16_t*)(reg_v0 + 652) = var_zero; /* 0x8003c080 */
    *(int16_t*)(reg_v0 + 650) = var_zero; /* 0x8003c084 */
    *(int16_t*)(reg_v0 + 648) = var_zero; /* 0x8003c088 */
    *(int16_t*)(reg_v0 + 644) = var_zero; /* 0x8003c08c */
    *(int16_t*)(reg_v0 + 642) = var_zero; /* 0x8003c090 */
    *(int16_t*)(reg_v0 + 640) = var_zero; /* 0x8003c094 */
    var_v1 = 255; /* 0x8003c0b8 */
    *(int8_t*)(reg_v0 + 341) = var_v1; /* 0x8003c0bc */
    *(int8_t*)(reg_v0 + 342) = var_v1; /* 0x8003c0c0 */
    var_v1 = 0x801c << 16; /* 0x8003c0c4 */
    *(int32_t*)(reg_v0 + 752) = var_zero; /* 0x8003c0c8 */
    *(int32_t*)(reg_v0 + 748) = var_zero; /* 0x8003c0cc */
    *(int32_t*)(reg_v1 + -24284) = var_zero; /* 0x8003c0d0 */
    var_v1 = -1; /* 0x8003c0d4 */
    return; /* 0x8003c0d8 */
}

/* Function at 0x8003c0dc */
void func_0x8003c0dc() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    *(int32_t*)(reg_v0 + 756) = var_v1; /* 0x8003c0dc */
    var_sp = var_sp + -24; /* 0x8003c0e0 */
    var_a1 = var_zero; /* 0x8003c0e4 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003c0e8 */
    var_s0 = 0x801a << 16; /* 0x8003c0ec */
    var_s0 = var_s0 + -28888; /* 0x8003c0f0 */
    *(int32_t*)(stack + 20) = var_ra; /* 0x8003c0f4 */
    var_a0 = *(uint16_t*)(reg_s0 + 62); /* 0x8003c0f8 */
    func_0x8003f12c(); /* 0x8003c0fc */
    var_a1 = 1; /* 0x8003c104 */
    var_a0 = *(uint16_t*)(reg_s0 + 88); /* 0x8003c108 */
    func_0x8003f12c(); /* 0x8003c10c */
    var_a1 = 2; /* 0x8003c114 */
    var_a0 = *(uint16_t*)(reg_s0 + 64); /* 0x8003c118 */
    func_0x8003f12c(); /* 0x8003c11c */
    var_a1 = 3; /* 0x8003c124 */
    var_a0 = *(uint16_t*)(reg_s0 + 90); /* 0x8003c128 */
    func_0x8003f12c(); /* 0x8003c12c */
    var_a0 = *(uint16_t*)(reg_s0 + 68); /* 0x8003c134 */
    func_0x8003ee38(); /* 0x8003c138 */
    var_a0 = *(uint16_t*)(reg_s0 + 80); /* 0x8003c140 */
    func_0x8003ee38(); /* 0x8003c144 */
    func_0x8003c054(); /* 0x8003c14c */
    func_0x8003cedc(); /* 0x8003c154 */
    var_v1 = 0x8019 << 16; /* 0x8003c15c */
    var_v0 = 255; /* 0x8003c160 */
    *(int8_t*)(reg_v1 + -18729) = var_v0; /* 0x8003c164 */
    var_ra = *(int32_t*)(stack + 20); /* 0x8003c168 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003c16c */
    var_sp = var_sp + 24; /* 0x8003c170 */
    return; /* 0x8003c174 */
}

/* Function at 0x8003c178 */
void func_0x8003c178() {
    /* Local variables */
    int32_t var_at;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_t3;
    int32_t var_v0;
    int32_t var_v1;

    var_t0 = *(uint16_t*)(reg_a0 + 0); /* 0x8003c17c */
    var_t3 = *(int32_t*)(stack + 16); /* 0x8003c180 */
    /* Branch beqz at 0x8003c184 */
    var_t2 = var_zero; /* 0x8003c188 */
    var_t2 = *(uint16_t*)(reg_a1 + 0); /* 0x8003c18c */
    var_v0 = var_t0 << 0x10; /* 0x8003c190 */
    var_t1 = var_v0 >> 0x10; /* 0x8003c194 */
    /* Branch bnez at 0x8003c198 */
    var_v0 = var_t2 << 0x10; /* 0x8003c19c */
    /* Branch beqz at 0x8003c1a0 */
    var_v0 = var_v0 >> 0x10; /* 0x8003c1a8 */
    /* Branch beqz at 0x8003c1b0 */
    var_t0 = var_t0 + 1; /* 0x8003c1bc */
    var_t2 = var_zero; /* 0x8003c1c0 */
    var_t0 = var_t0 + -1; /* 0x8003c1c4 */
    var_v0 = var_t0 << 0x10; /* 0x8003c1c8 */
    var_v1 = var_v0 >> 0x10; /* 0x8003c1cc */
    /* Branch beqz at 0x8003c1d4 */
    /* Branch bnez at 0x8003c1ec */
    var_at = -1; /* 0x8003c1f8 */
    /* Branch bne at 0x8003c1fc */
    var_at = 0x8000 << 16; /* 0x8003c200 */
    /* Branch bne at 0x8003c204 */
    var_v0 = var_a3; /* 0x8003c21c */
    /* Branch beqz at 0x8003c220 */
    /* Branch beqz at 0x8003c228 */
    *(int16_t*)(reg_a0 + 0) = var_t0; /* 0x8003c22c */
    *(int16_t*)(reg_a1 + 0) = var_t2; /* 0x8003c230 */
    var_v0 = var_v0 << 0x10; /* 0x8003c234 */
    var_v0 = var_v0 >> 0x10; /* 0x8003c23c */
    var_v0 = -1; /* 0x8003c240 */
    return; /* 0x8003c244 */
}

/* Function at 0x8003c248 */
void func_0x8003c248() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -40; /* 0x8003c24c */
    *(int32_t*)(stack + 32) = var_s2; /* 0x8003c250 */
    var_v0 = 0x801a << 16; /* 0x8003c254 */
    var_a3 = var_v0 + -28888; /* 0x8003c258 */
    *(int32_t*)(stack + 36) = var_ra; /* 0x8003c25c */
    *(int32_t*)(stack + 28) = var_s1; /* 0x8003c260 */
    *(int32_t*)(stack + 24) = var_s0; /* 0x8003c264 */
    var_v0 = *(int16_t*)(reg_a3 + 726); /* 0x8003c268 */
    var_v1 = *(uint16_t*)(reg_a3 + 726); /* 0x8003c26c */
    /* Branch beqz at 0x8003c270 */
    var_s2 = var_a0; /* 0x8003c274 */
    var_v0 = *(uint16_t*)(reg_a3 + 728); /* 0x8003c278 */
    *(int16_t*)(reg_a3 + 726) = var_v0; /* 0x8003c284 */
    var_v0 = var_v0 << 0x10; /* 0x8003c288 */
    *(int16_t*)(reg_a3 + 726) = var_zero; /* 0x8003c294 */
    var_v0 = *(int16_t*)(reg_a3 + 726); /* 0x8003c298 */
    var_a3 = *(uint16_t*)(reg_a3 + 726); /* 0x8003c29c */
    /* Branch bnez at 0x8003c2a4 */
    var_v0 = 1; /* 0x8003c2a8 */
    var_a3 = 4096; /* 0x8003c2ac */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003c2b0 */
    var_a0 = 60; /* 0x8003c2b4 */
    var_a1 = var_zero; /* 0x8003c2b8 */
    var_a2 = var_a1; /* 0x8003c2bc */
    var_a3 = var_a3 << 0x10; /* 0x8003c2c0 */
    func_0x80021994(); /* 0x8003c2c4 */
    var_v0 = 0x801a << 16; /* 0x8003c2cc */
    var_a3 = var_v0 + -28888; /* 0x8003c2d0 */
    var_v0 = *(int16_t*)(reg_a3 + 730); /* 0x8003c2d4 */
    var_v1 = *(uint16_t*)(reg_a3 + 730); /* 0x8003c2d8 */
    /* Branch beqz at 0x8003c2dc */
    var_v0 = *(uint16_t*)(reg_a3 + 732); /* 0x8003c2e4 */
    *(int16_t*)(reg_a3 + 730) = var_v0; /* 0x8003c2f0 */
    var_v0 = var_v0 << 0x10; /* 0x8003c2f4 */
    *(int16_t*)(reg_a3 + 730) = var_zero; /* 0x8003c300 */
    var_v0 = *(int16_t*)(reg_a3 + 730); /* 0x8003c304 */
    var_a3 = *(uint16_t*)(reg_a3 + 730); /* 0x8003c308 */
    /* Branch bnez at 0x8003c310 */
    var_v0 = 1; /* 0x8003c314 */
    var_a3 = 4096; /* 0x8003c318 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003c31c */
    var_a0 = 60; /* 0x8003c320 */
    var_a1 = var_a0; /* 0x8003c324 */
    var_a2 = var_zero; /* 0x8003c328 */
    var_a3 = var_a3 << 0x10; /* 0x8003c32c */
    func_0x80021994(); /* 0x8003c330 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c338 */
    var_v0 = 0x801a << 16; /* 0x8003c33c */
    var_s0 = var_v0 + -28488; /* 0x8003c340 */
    var_a0 = var_s0; /* 0x8003c344 */
    var_a1 = var_s0 + 2; /* 0x8003c348 */
    var_a2 = 20; /* 0x8003c34c */
    func_0x8003c17c(); /* 0x8003c350 */
    var_v0 = var_v0 << 0x10; /* 0x8003c358 */
    var_a3 = var_v0 >> 0x10; /* 0x8003c35c */
    var_v0 = -1; /* 0x8003c360 */
    /* Branch beq at 0x8003c364 */
    var_a0 = var_zero; /* 0x8003c368 */
    var_a1 = 40; /* 0x8003c36c */
    var_a2 = var_a0; /* 0x8003c370 */
    var_v0 = 1; /* 0x8003c374 */
    func_0x80021994(); /* 0x8003c378 */
    var_a0 = var_s0 + -400; /* 0x8003c380 */
    var_v0 = *(int32_t*)(reg_a0 + 400); /* 0x8003c384 */
    /* Branch bnez at 0x8003c38c */
    var_v1 = -8; /* 0x8003c390 */
    var_v0 = *(int32_t*)(reg_a0 + 44); /* 0x8003c394 */
    var_v0 = var_v0 & var_v1; /* 0x8003c39c */
    *(int32_t*)(reg_a0 + 44) = var_v0; /* 0x8003c3a0 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c3a4 */
    var_v0 = 0x801a << 16; /* 0x8003c3a8 */
    var_s0 = var_v0 + -28484; /* 0x8003c3ac */
    var_a0 = var_s0; /* 0x8003c3b0 */
    var_a1 = var_s0 + 2; /* 0x8003c3b4 */
    var_a2 = 20; /* 0x8003c3b8 */
    func_0x8003c17c(); /* 0x8003c3bc */
    var_a3 = var_v0; /* 0x8003c3c4 */
    var_v0 = var_a3 << 0x10; /* 0x8003c3c8 */
    var_v0 = var_v0 >> 0x10; /* 0x8003c3cc */
    var_v1 = -1; /* 0x8003c3d0 */
    /* Branch beq at 0x8003c3d4 */
    var_v1 = 3; /* 0x8003c3d8 */
    var_v0 = *(uint16_t*)(reg_s0 + 0); /* 0x8003c3dc */
    var_v0 = var_v0 & 0x3; /* 0x8003c3e4 */
    /* Branch bne at 0x8003c3e8 */
    var_a3 = var_a3 + -512; /* 0x8003c3ec */
    var_a3 = 4096; /* 0x8003c3f0 */
    var_a0 = 40; /* 0x8003c3f4 */
    var_a1 = var_a0; /* 0x8003c3f8 */
    var_a2 = var_zero; /* 0x8003c3fc */
    var_a3 = var_a3 << 0x10; /* 0x8003c400 */
    var_a3 = var_a3 >> 0x10; /* 0x8003c404 */
    var_v0 = 1; /* 0x8003c408 */
    func_0x80021994(); /* 0x8003c40c */
    func_0x8003ead0(); /* 0x8003c414 */
    var_v0 = 0x801c << 16; /* 0x8003c41c */
    var_v0 = var_v0 + 784; /* 0x8003c420 */
    *(int16_t*)(reg_v0 + 29096) = var_zero; /* 0x8003c424 */
    *(int16_t*)(reg_v0 + 29094) = var_zero; /* 0x8003c428 */
    *(int16_t*)(reg_v0 + 29092) = var_zero; /* 0x8003c42c */
    var_v0 = 0x801b << 16; /* 0x8003c430 */
    var_v0 = var_v0 + 22856; /* 0x8003c434 */
    *(int16_t*)(reg_v0 + 18386) = var_zero; /* 0x8003c438 */
    *(int16_t*)(reg_v0 + 18384) = var_zero; /* 0x8003c43c */
    *(int16_t*)(reg_v0 + 18382) = var_zero; /* 0x8003c440 */
    var_v0 = 0x801a << 16; /* 0x8003c444 */
    var_a0 = var_v0 + -28888; /* 0x8003c448 */
    var_v0 = 0x801c << 16; /* 0x8003c44c */
    var_v1 = *(int32_t*)(reg_a0 + 404); /* 0x8003c450 */
    var_v0 = var_v0 + -24264; /* 0x8003c454 */
    *(int16_t*)(reg_v0 + 24932) = var_zero; /* 0x8003c458 */
    *(int16_t*)(reg_v0 + 24930) = var_zero; /* 0x8003c45c */
    *(int16_t*)(reg_v0 + 24928) = var_zero; /* 0x8003c460 */
    *(int16_t*)(reg_a0 + 464) = var_zero; /* 0x8003c464 */
    *(int16_t*)(reg_a0 + 462) = var_zero; /* 0x8003c468 */
    /* Branch bnez at 0x8003c46c */
    *(int16_t*)(reg_a0 + 460) = var_zero; /* 0x8003c470 */
    var_v0 = *(int32_t*)(reg_a0 + 44); /* 0x8003c474 */
    var_v1 = -25; /* 0x8003c478 */
    var_v0 = var_v0 & var_v1; /* 0x8003c47c */
    *(int32_t*)(reg_a0 + 44) = var_v0; /* 0x8003c480 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c484 */
    var_v0 = 0x801a << 16; /* 0x8003c488 */
    var_s0 = var_v0 + -28480; /* 0x8003c48c */
    var_a0 = var_s0; /* 0x8003c490 */
    var_a1 = var_s0 + 2; /* 0x8003c494 */
    var_a2 = var_zero; /* 0x8003c498 */
    func_0x8003c17c(); /* 0x8003c49c */
    var_v0 = var_v0 << 0x10; /* 0x8003c4a4 */
    var_a3 = var_v0 >> 0x10; /* 0x8003c4a8 */
    var_v0 = -1; /* 0x8003c4ac */
    /* Branch beq at 0x8003c4b0 */
    var_a0 = 20; /* 0x8003c4b4 */
    var_a1 = var_a0; /* 0x8003c4b8 */
    var_a2 = var_a0; /* 0x8003c4bc */
    var_v0 = 2; /* 0x8003c4c0 */
    func_0x80021994(); /* 0x8003c4c4 */
    var_a2 = var_s0 + -408; /* 0x8003c4cc */
    var_v0 = *(int32_t*)(reg_a2 + 408); /* 0x8003c4d0 */
    /* Branch bnez at 0x8003c4d8 */
    var_a1 = -97; /* 0x8003c4dc */
    var_a0 = 0x8019 << 16; /* 0x8003c4e0 */
    var_a0 = var_a0 + -18736; /* 0x8003c4e4 */
    var_v0 = *(int32_t*)(reg_a2 + 44); /* 0x8003c4e8 */
    var_v1 = *(uint8_t*)(reg_a0 + 4); /* 0x8003c4ec */
    var_v0 = var_v0 & var_a1; /* 0x8003c4f0 */
    var_v1 = var_v1 | 0x4; /* 0x8003c4f4 */
    *(int32_t*)(reg_a2 + 44) = var_v0; /* 0x8003c4f8 */
    *(int8_t*)(reg_a0 + 4) = var_v1; /* 0x8003c4fc */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c500 */
    var_v0 = 0x801a << 16; /* 0x8003c504 */
    var_s1 = var_v0 + -28476; /* 0x8003c508 */
    var_a0 = var_s1; /* 0x8003c50c */
    var_a1 = var_s1 + 2; /* 0x8003c510 */
    var_a2 = 20; /* 0x8003c514 */
    func_0x8003c17c(); /* 0x8003c518 */
    var_v0 = var_v0 << 0x10; /* 0x8003c520 */
    var_v0 = var_v0 >> 0x10; /* 0x8003c524 */
    var_v1 = -1; /* 0x8003c528 */
    /* Branch beq at 0x8003c52c */
    var_s0 = var_s1 + -412; /* 0x8003c530 */
    var_v0 = *(int32_t*)(reg_s0 + 412); /* 0x8003c534 */
    /* Branch bnez at 0x8003c53c */
    var_a0 = var_zero; /* 0x8003c540 */
    var_v0 = *(int32_t*)(reg_s0 + 44); /* 0x8003c544 */
    var_v1 = -129; /* 0x8003c548 */
    var_v0 = var_v0 & var_v1; /* 0x8003c54c */
    func_0x8005a3a8(); /* 0x8003c550 */
    var_a0 = *(uint16_t*)(reg_s1 + -412); /* 0x8003c558 */
    var_v0 = *(uint16_t*)(reg_s0 + 2); /* 0x8003c55c */
    /* Branch beqz at 0x8003c568 */
    *(int16_t*)(reg_s0 + 2) = var_a0; /* 0x8003c570 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c574 */
    var_v0 = 0x801a << 16; /* 0x8003c578 */
    var_s1 = var_v0 + -28472; /* 0x8003c57c */
    var_a0 = var_s1; /* 0x8003c580 */
    var_a1 = var_s1 + 2; /* 0x8003c584 */
    var_a2 = 20; /* 0x8003c588 */
    func_0x8003c17c(); /* 0x8003c58c */
    var_v0 = var_v0 << 0x10; /* 0x8003c594 */
    var_a3 = var_v0 >> 0x10; /* 0x8003c598 */
    var_v0 = -1; /* 0x8003c59c */
    /* Branch beq at 0x8003c5a0 */
    var_a0 = 40; /* 0x8003c5a4 */
    var_a1 = var_zero; /* 0x8003c5a8 */
    var_a2 = 20; /* 0x8003c5ac */
    var_v0 = 1; /* 0x8003c5b0 */
    func_0x80021994(); /* 0x8003c5b4 */
    var_s0 = var_s1 + -416; /* 0x8003c5bc */
    var_v0 = *(int32_t*)(reg_s0 + 416); /* 0x8003c5c0 */
    /* Branch bnez at 0x8003c5c8 */
    var_v0 = 0x801a << 16; /* 0x8003c5cc */
    var_a0 = var_zero; /* 0x8003c5d0 */
    var_v0 = *(int32_t*)(reg_s0 + 44); /* 0x8003c5d4 */
    var_v1 = -257; /* 0x8003c5d8 */
    var_v0 = var_v0 & var_v1; /* 0x8003c5dc */
    func_0x8005a3a8(); /* 0x8003c5e0 */
    var_a0 = *(uint16_t*)(reg_s1 + -416); /* 0x8003c5e8 */
    var_v0 = *(uint16_t*)(reg_s0 + 2); /* 0x8003c5ec */
    /* Branch beqz at 0x8003c5f8 */
    var_v0 = 0x801a << 16; /* 0x8003c5fc */
    *(int16_t*)(reg_s0 + 2) = var_a0; /* 0x8003c600 */
    var_v0 = 0x801a << 16; /* 0x8003c604 */
    var_s0 = var_v0 + -28888; /* 0x8003c608 */
    var_v0 = *(int32_t*)(reg_s0 + 748); /* 0x8003c60c */
    /* Branch beqz at 0x8003c614 */
    var_v0 = 1; /* 0x8003c618 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003c61c */
    var_a0 = var_zero; /* 0x8003c620 */
    var_a1 = var_a0; /* 0x8003c624 */
    var_a2 = 40; /* 0x8003c628 */
    func_0x80021994(); /* 0x8003c62c */
    var_v0 = *(int32_t*)(reg_s0 + 752); /* 0x8003c634 */
    /* Branch beqz at 0x8003c63c */
    var_v0 = 1; /* 0x8003c640 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003c644 */
    var_a0 = 40; /* 0x8003c648 */
    var_a1 = var_a0; /* 0x8003c64c */
    var_a2 = var_zero; /* 0x8003c650 */
    func_0x80021994(); /* 0x8003c654 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c65c */
    var_a0 = var_s0 + 420; /* 0x8003c660 */
    var_a1 = var_s0 + 422; /* 0x8003c664 */
    var_a2 = var_zero; /* 0x8003c668 */
    func_0x8003c17c(); /* 0x8003c66c */
    var_v0 = var_v0 << 0x10; /* 0x8003c674 */
    var_v0 = var_v0 >> 0x10; /* 0x8003c678 */
    var_v1 = -1; /* 0x8003c67c */
    /* Branch beq at 0x8003c680 */
    var_v1 = 0x8019 << 16; /* 0x8003c684 */
    var_v1 = var_v1 + -18736; /* 0x8003c688 */
    var_v0 = *(uint8_t*)(reg_v1 + 4); /* 0x8003c68c */
    var_v0 = var_v0 | 0x10; /* 0x8003c694 */
    *(int8_t*)(reg_v1 + 4) = var_v0; /* 0x8003c698 */
    var_v0 = *(uint8_t*)(reg_v1 + 3); /* 0x8003c69c */
    var_a0 = *(int32_t*)(reg_s0 + 420); /* 0x8003c6a0 */
    var_v0 = var_v0 | 0x2; /* 0x8003c6a4 */
    /* Branch bnez at 0x8003c6a8 */
    *(int8_t*)(reg_v1 + 3) = var_v0; /* 0x8003c6ac */
    var_a0 = 0xfffd << 16; /* 0x8003c6b0 */
    var_a0 = var_a0 | 0xffff; /* 0x8003c6b4 */
    var_v1 = 0xfffe << 16; /* 0x8003c6b8 */
    var_v0 = *(int32_t*)(reg_s0 + 44); /* 0x8003c6bc */
    var_v1 = var_v1 | 0xffff; /* 0x8003c6c0 */
    var_v0 = var_v0 & var_a0; /* 0x8003c6c4 */
    var_v0 = var_v0 & var_v1; /* 0x8003c6c8 */
    *(int32_t*)(reg_s0 + 44) = var_v0; /* 0x8003c6cc */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c6d0 */
    var_v0 = 0x801a << 16; /* 0x8003c6d4 */
    var_s0 = var_v0 + -28464; /* 0x8003c6d8 */
    var_a0 = var_s0; /* 0x8003c6dc */
    var_a1 = var_s0 + 2; /* 0x8003c6e0 */
    var_a2 = var_zero; /* 0x8003c6e4 */
    func_0x8003c17c(); /* 0x8003c6e8 */
    var_v0 = var_v0 << 0x10; /* 0x8003c6f0 */
    var_v0 = var_v0 >> 0x10; /* 0x8003c6f4 */
    var_v1 = -1; /* 0x8003c6f8 */
    /* Branch beq at 0x8003c6fc */
    var_a0 = var_s0 + -424; /* 0x8003c700 */
    var_v0 = *(int32_t*)(reg_a0 + 424); /* 0x8003c704 */
    /* Branch bnez at 0x8003c70c */
    var_v1 = 0xfffb << 16; /* 0x8003c710 */
    var_v0 = *(int32_t*)(reg_a0 + 44); /* 0x8003c714 */
    var_v1 = var_v1 | 0xffff; /* 0x8003c718 */
    var_v0 = var_v0 & var_v1; /* 0x8003c71c */
    *(int32_t*)(reg_a0 + 44) = var_v0; /* 0x8003c720 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c724 */
    var_v0 = 0x801a << 16; /* 0x8003c728 */
    var_s0 = var_v0 + -28460; /* 0x8003c72c */
    var_a0 = var_s0; /* 0x8003c730 */
    var_a1 = var_s0 + 2; /* 0x8003c734 */
    var_a2 = var_zero; /* 0x8003c738 */
    func_0x8003c17c(); /* 0x8003c73c */
    var_v0 = var_v0 << 0x10; /* 0x8003c744 */
    var_v0 = var_v0 >> 0x10; /* 0x8003c748 */
    var_v1 = -1; /* 0x8003c74c */
    /* Branch beq at 0x8003c750 */
    var_a0 = var_s0 + -428; /* 0x8003c754 */
    var_v0 = *(int32_t*)(reg_a0 + 428); /* 0x8003c758 */
    /* Branch bnez at 0x8003c760 */
    var_v1 = 0xfff7 << 16; /* 0x8003c764 */
    var_v0 = *(int32_t*)(reg_a0 + 44); /* 0x8003c768 */
    var_v1 = var_v1 | 0xffff; /* 0x8003c76c */
    var_v0 = var_v0 & var_v1; /* 0x8003c770 */
    *(int32_t*)(reg_a0 + 44) = var_v0; /* 0x8003c774 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c778 */
    var_v0 = 0x801a << 16; /* 0x8003c77c */
    var_s0 = var_v0 + -28456; /* 0x8003c780 */
    var_a0 = var_s0; /* 0x8003c784 */
    var_a1 = var_s0 + 2; /* 0x8003c788 */
    var_a2 = var_zero; /* 0x8003c78c */
    func_0x8003c17c(); /* 0x8003c790 */
    var_v0 = var_v0 << 0x10; /* 0x8003c798 */
    var_v0 = var_v0 >> 0x10; /* 0x8003c79c */
    var_v1 = -1; /* 0x8003c7a0 */
    /* Branch beq at 0x8003c7a4 */
    var_a0 = var_s0 + -432; /* 0x8003c7a8 */
    var_v0 = *(int32_t*)(reg_a0 + 432); /* 0x8003c7ac */
    /* Branch bnez at 0x8003c7b4 */
    var_v1 = 0xffef << 16; /* 0x8003c7b8 */
    var_v0 = *(int32_t*)(reg_a0 + 44); /* 0x8003c7bc */
    var_v1 = var_v1 | 0xffff; /* 0x8003c7c0 */
    var_v0 = var_v0 & var_v1; /* 0x8003c7c4 */
    *(int32_t*)(reg_a0 + 44) = var_v0; /* 0x8003c7c8 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c7cc */
    var_v0 = 0x801a << 16; /* 0x8003c7d0 */
    var_s0 = var_v0 + -28452; /* 0x8003c7d4 */
    var_a0 = var_s0; /* 0x8003c7d8 */
    var_a1 = var_s0 + 2; /* 0x8003c7dc */
    var_a2 = var_zero; /* 0x8003c7e0 */
    func_0x8003c17c(); /* 0x8003c7e4 */
    var_v0 = var_v0 << 0x10; /* 0x8003c7ec */
    var_v0 = var_v0 >> 0x10; /* 0x8003c7f0 */
    var_v1 = -1; /* 0x8003c7f4 */
    /* Branch beq at 0x8003c7f8 */
    var_a0 = var_s0 + -436; /* 0x8003c7fc */
    var_v0 = *(int32_t*)(reg_a0 + 436); /* 0x8003c800 */
    /* Branch bnez at 0x8003c808 */
    var_v1 = 0xffdf << 16; /* 0x8003c80c */
    var_v0 = *(int32_t*)(reg_a0 + 44); /* 0x8003c810 */
    var_v1 = var_v1 | 0xffff; /* 0x8003c814 */
    var_v0 = var_v0 & var_v1; /* 0x8003c818 */
    *(int32_t*)(reg_a0 + 44) = var_v0; /* 0x8003c81c */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c820 */
    var_v0 = 0x801a << 16; /* 0x8003c824 */
    var_s0 = var_v0 + -28448; /* 0x8003c828 */
    var_a0 = var_s0; /* 0x8003c82c */
    var_a1 = var_s0 + 2; /* 0x8003c830 */
    var_a2 = var_zero; /* 0x8003c834 */
    func_0x8003c17c(); /* 0x8003c838 */
    var_v0 = var_v0 << 0x10; /* 0x8003c840 */
    var_v0 = var_v0 >> 0x10; /* 0x8003c844 */
    var_v1 = -1; /* 0x8003c848 */
    /* Branch beq at 0x8003c84c */
    var_v1 = 0x8019 << 16; /* 0x8003c850 */
    var_v1 = var_v1 + -18736; /* 0x8003c854 */
    var_a0 = 1; /* 0x8003c858 */
    var_v0 = *(uint8_t*)(reg_v1 + 4); /* 0x8003c85c */
    var_a1 = var_s0 + -440; /* 0x8003c860 */
    *(int8_t*)(reg_v1 + 9) = var_a0; /* 0x8003c864 */
    var_v0 = var_v0 | 0x20; /* 0x8003c868 */
    *(int8_t*)(reg_v1 + 4) = var_v0; /* 0x8003c86c */
    var_v0 = *(uint8_t*)(reg_v1 + 3); /* 0x8003c870 */
    var_a0 = *(int32_t*)(reg_a1 + 440); /* 0x8003c874 */
    var_v0 = var_v0 | 0x1; /* 0x8003c878 */
    /* Branch bnez at 0x8003c87c */
    *(int8_t*)(reg_v1 + 3) = var_v0; /* 0x8003c880 */
    var_v1 = 0xffbf << 16; /* 0x8003c884 */
    var_v0 = *(int32_t*)(reg_a1 + 44); /* 0x8003c888 */
    var_v1 = var_v1 | 0xffff; /* 0x8003c88c */
    var_v0 = var_v0 & var_v1; /* 0x8003c890 */
    *(int32_t*)(reg_a1 + 44) = var_v0; /* 0x8003c894 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c898 */
    var_v0 = 0x801a << 16; /* 0x8003c89c */
    var_s0 = var_v0 + -28444; /* 0x8003c8a0 */
    var_a0 = var_s0; /* 0x8003c8a4 */
    var_a1 = var_s0 + 2; /* 0x8003c8a8 */
    var_a2 = var_zero; /* 0x8003c8ac */
    func_0x8003c17c(); /* 0x8003c8b0 */
    var_v0 = var_v0 << 0x10; /* 0x8003c8b8 */
    var_v0 = var_v0 >> 0x10; /* 0x8003c8bc */
    var_v1 = -1; /* 0x8003c8c0 */
    /* Branch beq at 0x8003c8c4 */
    var_a0 = var_s0 + -444; /* 0x8003c8c8 */
    var_v0 = *(int32_t*)(reg_a0 + 444); /* 0x8003c8cc */
    /* Branch bnez at 0x8003c8d4 */
    var_v1 = 0xff7f << 16; /* 0x8003c8d8 */
    var_v0 = *(int32_t*)(reg_a0 + 44); /* 0x8003c8dc */
    var_v1 = var_v1 | 0xffff; /* 0x8003c8e0 */
    var_v0 = var_v0 & var_v1; /* 0x8003c8e4 */
    *(int32_t*)(reg_a0 + 44) = var_v0; /* 0x8003c8e8 */
    *(int32_t*)(stack + 16) = var_s2; /* 0x8003c8ec */
    var_v0 = 0x801a << 16; /* 0x8003c8f0 */
    var_s0 = var_v0 + -28440; /* 0x8003c8f4 */
    var_a0 = var_s0; /* 0x8003c8f8 */
    var_a1 = var_s0 + 2; /* 0x8003c8fc */
    var_a2 = var_zero; /* 0x8003c900 */
    func_0x8003c17c(); /* 0x8003c904 */
    var_v0 = var_v0 << 0x10; /* 0x8003c90c */
    var_v0 = var_v0 >> 0x10; /* 0x8003c910 */
    var_v1 = -1; /* 0x8003c914 */
    /* Branch beq at 0x8003c918 */
    var_a0 = var_s0 + -448; /* 0x8003c91c */
    var_v0 = *(int32_t*)(reg_a0 + 448); /* 0x8003c920 */
    /* Branch bnez at 0x8003c928 */
    var_v1 = -2049; /* 0x8003c92c */
    var_v0 = *(int32_t*)(reg_a0 + 44); /* 0x8003c930 */
    var_v0 = var_v0 & var_v1; /* 0x8003c938 */
    *(int32_t*)(reg_a0 + 44) = var_v0; /* 0x8003c93c */
    var_ra = *(int32_t*)(stack + 36); /* 0x8003c940 */
    var_s2 = *(int32_t*)(stack + 32); /* 0x8003c944 */
    var_s1 = *(int32_t*)(stack + 28); /* 0x8003c948 */
    var_s0 = *(int32_t*)(stack + 24); /* 0x8003c94c */
    var_sp = var_sp + 40; /* 0x8003c950 */
    return; /* 0x8003c954 */
}

/* Function at 0x8003c958 */
void func_0x8003c958() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -72; /* 0x8003c95c */
    *(int32_t*)(stack + 52) = var_s1; /* 0x8003c960 */
    var_s1 = var_a0; /* 0x8003c964 */
    *(int32_t*)(stack + 56) = var_s2; /* 0x8003c968 */
    var_s2 = var_a1; /* 0x8003c96c */
    *(int32_t*)(stack + 60) = var_s3; /* 0x8003c970 */
    var_s3 = var_a2; /* 0x8003c974 */
    *(int32_t*)(stack + 64) = var_s4; /* 0x8003c978 */
    var_s4 = var_a3; /* 0x8003c97c */
    *(int32_t*)(stack + 68) = var_ra; /* 0x8003c980 */
    func_0x80015ad4(); /* 0x8003c984 */
    var_s0 = 0x801b << 16; /* 0x8003c98c */
    func_0x8001531c(); /* 0x8003c990 */
    func_0x800456f8(); /* 0x8003c998 */
    var_v0 = *(int16_t*)(reg_s0 + 22816); /* 0x8003c9a0 */
    /* Branch bnez at 0x8003c9a8 */
    var_a0 = var_s1 & 0xff; /* 0x8003c9ac */
    var_a1 = var_s2 & 0xff; /* 0x8003c9b0 */
    var_a2 = var_s3 & 0xff; /* 0x8003c9b4 */
    var_a3 = 255; /* 0x8003c9b8 */
    var_s0 = 0x801b << 16; /* 0x8003c9bc */
    var_v1 = var_s0 + 22816; /* 0x8003c9c0 */
    var_v0 = 99; /* 0x8003c9c4 */
    *(int8_t*)(reg_v1 + 4) = var_v0; /* 0x8003c9c8 */
    *(int8_t*)(reg_v1 + 5) = var_v0; /* 0x8003c9cc */
    *(int8_t*)(reg_v1 + 6) = var_v0; /* 0x8003c9d0 */
    *(int8_t*)(reg_v1 + 7) = var_v0; /* 0x8003c9d4 */
    *(int8_t*)(reg_v1 + 8) = var_v0; /* 0x8003c9d8 */
    var_v0 = var_a3; /* 0x8003c9dc */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003c9e0 */
    var_v0 = 127; /* 0x8003c9e4 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003c9e8 */
    *(int32_t*)(stack + 24) = var_v0; /* 0x8003c9ec */
    *(int32_t*)(stack + 28) = var_v0; /* 0x8003c9f0 */
    *(int32_t*)(stack + 32) = var_zero; /* 0x8003c9f4 */
    *(int32_t*)(stack + 36) = var_zero; /* 0x8003c9f8 */
    func_0x80045044(); /* 0x8003c9fc */
    func_0x8001531c(); /* 0x8003ca04 */
    func_0x800456f8(); /* 0x8003ca0c */
    var_v0 = *(int16_t*)(reg_s0 + 22816); /* 0x8003ca14 */
    /* Branch bnez at 0x8003ca1c */
    func_0x80015ad4(); /* 0x8003ca24 */
    func_0x80077104(); /* 0x8003ca2c */
    func_0x8003eaf8(); /* 0x8003ca34 */
    func_0x80032058(); /* 0x8003ca3c */
    func_0x80016508(); /* 0x8003ca44 */
    func_0x8003216c(); /* 0x8003ca4c */
    var_a0 = 130; /* 0x8003ca54 */
    var_a1 = 4096; /* 0x8003ca58 */
    var_a2 = var_a1; /* 0x8003ca5c */
    func_0x800500ac(); /* 0x8003ca60 */
    func_0x80015ad4(); /* 0x8003ca68 */
    var_a0 = 255; /* 0x8003ca70 */
    var_a1 = var_a0; /* 0x8003ca74 */
    var_a2 = var_a0; /* 0x8003ca78 */
    var_v0 = *(uint8_t*)(stack + 88); /* 0x8003ca7c */
    var_a3 = var_s4 & 0xff; /* 0x8003ca80 */
    *(int32_t*)(stack + 32) = var_zero; /* 0x8003ca84 */
    *(int32_t*)(stack + 36) = var_zero; /* 0x8003ca88 */
    *(int32_t*)(stack + 40) = var_zero; /* 0x8003ca8c */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003ca90 */
    var_v0 = 127; /* 0x8003ca94 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003ca98 */
    *(int32_t*)(stack + 24) = var_v0; /* 0x8003ca9c */
    *(int32_t*)(stack + 28) = var_v0; /* 0x8003caa0 */
    var_v0 = 0x8009 << 16; /* 0x8003caa4 */
    var_v1 = *(int32_t*)(reg_v0 + -32252); /* 0x8003caa8 */
    var_v0 = 0x801b << 16; /* 0x8003caac */
    func_0x80045044(); /* 0x8003cab0 */
    func_0x800330f0(); /* 0x8003cab8 */
    var_ra = *(int32_t*)(stack + 68); /* 0x8003cac0 */
    var_s4 = *(int32_t*)(stack + 64); /* 0x8003cac4 */
    var_s3 = *(int32_t*)(stack + 60); /* 0x8003cac8 */
    var_s2 = *(int32_t*)(stack + 56); /* 0x8003cacc */
    var_s1 = *(int32_t*)(stack + 52); /* 0x8003cad0 */
    var_s0 = *(int32_t*)(stack + 48); /* 0x8003cad4 */
    var_sp = var_sp + 72; /* 0x8003cad8 */
    return; /* 0x8003cadc */
}

/* Function at 0x8003cae0 */
void func_0x8003cae0() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x801a << 16; /* 0x8003cae4 */
    var_v0 = var_v0 + -28888; /* 0x8003cae8 */
    *(int16_t*)(reg_v0 + 8) = var_zero; /* 0x8003caec */
    var_v1 = 13; /* 0x8003caf0 */
    var_a0 = 50; /* 0x8003caf4 */
    var_a1 = -1; /* 0x8003caf8 */
    var_v0 = var_v0 + 26; /* 0x8003cafc */
    *(int16_t*)(reg_v0 + 154) = var_a0; /* 0x8003cb00 */
    *(int16_t*)(reg_v0 + 98) = var_a0; /* 0x8003cb04 */
    *(int16_t*)(reg_v0 + 126) = var_zero; /* 0x8003cb08 */
    var_v1 = var_v1 + -1; /* 0x8003cb0c */
    /* Branch bne at 0x8003cb10 */
    var_v0 = var_v0 + -2; /* 0x8003cb14 */
    var_v0 = 0x801a << 16; /* 0x8003cb18 */
    var_v1 = var_v0 + -28888; /* 0x8003cb1c */
    *(int8_t*)(reg_v1 + 38) = var_zero; /* 0x8003cb20 */
    *(int16_t*)(reg_v1 + 4) = var_zero; /* 0x8003cb24 */
    *(int16_t*)(reg_v0 + -28888) = var_zero; /* 0x8003cb28 */
    var_v0 = 0xffff; /* 0x8003cb2c */
    *(int16_t*)(reg_v1 + 96) = var_v0; /* 0x8003cb30 */
    *(int16_t*)(reg_v1 + 94) = var_v0; /* 0x8003cb34 */
    *(int16_t*)(reg_v1 + 92) = var_v0; /* 0x8003cb38 */
    *(int16_t*)(reg_v1 + 64) = var_v0; /* 0x8003cb3c */
    *(int16_t*)(reg_v1 + 62) = var_v0; /* 0x8003cb40 */
    *(int16_t*)(reg_v1 + 60) = var_v0; /* 0x8003cb44 */
    *(int16_t*)(reg_v1 + 58) = var_v0; /* 0x8003cb48 */
    *(int16_t*)(reg_v1 + 56) = var_v0; /* 0x8003cb4c */
    *(int16_t*)(reg_v1 + 68) = var_v0; /* 0x8003cb50 */
    *(int16_t*)(reg_v1 + 78) = var_v0; /* 0x8003cb54 */
    *(int16_t*)(reg_v1 + 76) = var_v0; /* 0x8003cb58 */
    *(int16_t*)(reg_v1 + 74) = var_v0; /* 0x8003cb5c */
    *(int16_t*)(reg_v1 + 72) = var_v0; /* 0x8003cb60 */
    *(int16_t*)(reg_v1 + 70) = var_v0; /* 0x8003cb64 */
    *(int16_t*)(reg_v1 + 80) = var_v0; /* 0x8003cb68 */
    *(int16_t*)(reg_v1 + 66) = var_v0; /* 0x8003cb6c */
    *(int16_t*)(reg_v1 + 90) = var_v0; /* 0x8003cb70 */
    *(int16_t*)(reg_v1 + 88) = var_v0; /* 0x8003cb74 */
    *(int16_t*)(reg_v1 + 86) = var_v0; /* 0x8003cb78 */
    *(int16_t*)(reg_v1 + 84) = var_v0; /* 0x8003cb7c */
    return; /* 0x8003cb80 */
}

/* Function at 0x8003cb84 */
void func_0x8003cb84() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_at;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_t3;
    int32_t var_t4;
    int32_t var_t5;
    int32_t var_t6;
    int32_t var_t7;
    int32_t var_t8;
    int32_t var_v0;
    int32_t var_v1;

    *(int16_t*)(reg_v1 + 82) = var_v0; /* 0x8003cb84 */
    var_sp = var_sp + -32; /* 0x8003cb88 */
    var_v0 = 0x801a << 16; /* 0x8003cb8c */
    var_t5 = var_v0 + -28832; /* 0x8003cb90 */
    var_a1 = var_zero; /* 0x8003cb94 */
    var_a2 = var_a1; /* 0x8003cb98 */
    var_t0 = var_a1; /* 0x8003cb9c */
    var_t4 = var_a1; /* 0x8003cba0 */
    var_t1 = var_a1; /* 0x8003cba4 */
    var_t2 = var_a1; /* 0x8003cba8 */
    var_t3 = var_a1; /* 0x8003cbac */
    var_t6 = var_a1; /* 0x8003cbb0 */
    var_a3 = var_a1; /* 0x8003cbb4 */
    var_v0 = 0x801c << 16; /* 0x8003cbb8 */
    var_t8 = var_v0 + 30736; /* 0x8003cbbc */
    var_v0 = 0x8001 << 16; /* 0x8003cbc0 */
    var_t7 = var_v0 + 7420; /* 0x8003cbc4 */
    var_v0 = var_a3 + -4; /* 0x8003cbc8 */
    /* Branch bnez at 0x8003cbd0 */
    var_v0 = 11; /* 0x8003cbd4 */
    /* Branch beq at 0x8003cbd8 */
    var_v0 = 12; /* 0x8003cbdc */
    /* Branch beq at 0x8003cbe0 */
    var_v0 = 15; /* 0x8003cbe4 */
    /* Branch beq at 0x8003cbe8 */
    var_v0 = 0xffff; /* 0x8003cbec */
    var_v1 = *(uint16_t*)(reg_t5 + 0); /* 0x8003cbf0 */
    /* Branch beq at 0x8003cbf8 */
    var_v0 = var_v1; /* 0x8003cbfc */
    var_v1 = var_v0 << 0x1; /* 0x8003cc00 */
    var_v1 = var_v1 + var_v0; /* 0x8003cc04 */
    var_v1 = var_v1 << 0x2; /* 0x8003cc08 */
    var_v1 = var_v1 << 0x2; /* 0x8003cc10 */
    var_v1 = var_v1 + var_t8; /* 0x8003cc14 */
    var_v0 = *(int32_t*)(reg_v1 + 32); /* 0x8003cc18 */
    var_v0 = var_v0 & 0xf; /* 0x8003cc20 */
    *(int32_t*)(stack + 0) = var_v0; /* 0x8003cc24 */
    var_v0 = *(int32_t*)(reg_v1 + 32); /* 0x8003cc28 */
    var_v0 = (uint32_t)var_v0 >> 0x8; /* 0x8003cc30 */
    var_v0 = var_v0 & 0xf; /* 0x8003cc34 */
    *(int32_t*)(stack + 4) = var_v0; /* 0x8003cc38 */
    var_v0 = *(uint8_t*)(reg_v1 + 34); /* 0x8003cc3c */
    *(int32_t*)(stack + 8) = var_v0; /* 0x8003cc44 */
    var_v0 = *(uint8_t*)(reg_v1 + 32); /* 0x8003cc48 */
    var_v0 = (uint32_t)var_v0 >> 0x4; /* 0x8003cc50 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003cc54 */
    var_v0 = *(int32_t*)(reg_v1 + 32); /* 0x8003cc58 */
    var_v0 = (uint32_t)var_v0 >> 0xc; /* 0x8003cc60 */
    var_v0 = var_v0 & 0xf; /* 0x8003cc64 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003cc68 */
    var_v0 = *(uint8_t*)(reg_v1 + 35); /* 0x8003cc6c */
    var_a0 = var_sp; /* 0x8003cc70 */
    *(int32_t*)(stack + 24) = var_v0; /* 0x8003cc74 */
    var_v0 = *(int32_t*)(reg_a0 + 0); /* 0x8003cc78 */
    var_v1 = var_v0 + -1; /* 0x8003cc80 */
    /* Branch beqz at 0x8003cc88 */
    var_v0 = var_v1 << 0x2; /* 0x8003cc8c */
    var_v0 = var_v0 + var_t7; /* 0x8003cc90 */
    var_v0 = *(int32_t*)(reg_v0 + 0); /* 0x8003cc94 */
    var_v0 = *(int32_t*)(reg_a0 + 16); /* 0x8003cca4 */
    var_a1 = var_a1 + var_v0; /* 0x8003ccac */
    /* Branch bnez at 0x8003ccb4 */
    var_a1 = 100; /* 0x8003ccc0 */
    var_v0 = *(int32_t*)(reg_a0 + 16); /* 0x8003ccc4 */
    var_a2 = var_a2 + var_v0; /* 0x8003cccc */
    /* Branch bnez at 0x8003ccd4 */
    var_a2 = 100; /* 0x8003cce0 */
    var_v0 = *(int32_t*)(reg_a0 + 16); /* 0x8003cce4 */
    var_t0 = var_t0 + var_v0; /* 0x8003ccec */
    /* Branch bnez at 0x8003ccf4 */
    var_t0 = 20; /* 0x8003cd00 */
    var_v0 = 1; /* 0x8003cd08 */
    var_v1 = *(int32_t*)(reg_a0 + 16); /* 0x8003cd0c */
    /* Branch bne at 0x8003cd14 */
    var_t4 = var_v0; /* 0x8003cd20 */
    var_v0 = 2; /* 0x8003cd24 */
    /* Branch bne at 0x8003cd28 */
    var_t4 = -1; /* 0x8003cd34 */
    var_v0 = *(int32_t*)(reg_a0 + 16); /* 0x8003cd38 */
    var_t1 = var_t1 + var_v0; /* 0x8003cd40 */
    /* Branch bnez at 0x8003cd48 */
    var_t1 = 100; /* 0x8003cd54 */
    var_v0 = *(int32_t*)(reg_a0 + 16); /* 0x8003cd58 */
    var_t2 = var_t2 + var_v0; /* 0x8003cd60 */
    /* Branch bnez at 0x8003cd68 */
    var_t2 = 100; /* 0x8003cd74 */
    var_v0 = *(int32_t*)(reg_a0 + 16); /* 0x8003cd78 */
    var_t3 = var_t3 + var_v0; /* 0x8003cd80 */
    /* Branch bnez at 0x8003cd88 */
    var_t3 = 100; /* 0x8003cd94 */
    var_t6 = 1; /* 0x8003cd98 */
    var_a0 = var_a0 + 4; /* 0x8003cd9c */
    var_v0 = var_sp + 12; /* 0x8003cda0 */
    /* Branch bnez at 0x8003cda8 */
    var_a3 = var_a3 + 1; /* 0x8003cdb0 */
    /* Branch bnez at 0x8003cdb8 */
    var_t5 = var_t5 + 2; /* 0x8003cdbc */
    /* Branch beqz at 0x8003cdc0 */
    var_v0 = 100; /* 0x8003cdc4 */
    /* Branch bnez at 0x8003cdcc */
    var_at = -1; /* 0x8003cdd8 */
    /* Branch bne at 0x8003cddc */
    var_at = 0x8000 << 16; /* 0x8003cde0 */
    /* Branch bne at 0x8003cde4 */
    var_v1 = 0x801a << 16; /* 0x8003cdf4 */
    *(int8_t*)(reg_v1 + -28436) = var_v0; /* 0x8003cdfc */
    var_v0 = 0x801a << 16; /* 0x8003ce00 */
    *(int8_t*)(reg_v0 + -28436) = var_zero; /* 0x8003ce04 */
    /* Branch beqz at 0x8003ce08 */
    var_v0 = 100; /* 0x8003ce0c */
    /* Branch bnez at 0x8003ce14 */
    var_at = -1; /* 0x8003ce20 */
    /* Branch bne at 0x8003ce24 */
    var_at = 0x8000 << 16; /* 0x8003ce28 */
    /* Branch bne at 0x8003ce2c */
    var_v1 = 0x801a << 16; /* 0x8003ce3c */
    *(int8_t*)(reg_v1 + -28435) = var_v0; /* 0x8003ce44 */
    var_v0 = 0x801a << 16; /* 0x8003ce48 */
    *(int8_t*)(reg_v0 + -28435) = var_zero; /* 0x8003ce4c */
    var_v0 = 0x801a << 16; /* 0x8003ce50 */
    var_v1 = var_v0 + -28888; /* 0x8003ce54 */
    var_v0 = var_t0 << 0x2; /* 0x8003ce58 */
    var_v0 = var_v0 + var_t0; /* 0x8003ce5c */
    *(int8_t*)(reg_v1 + 454) = var_v0; /* 0x8003ce64 */
    var_v0 = -1; /* 0x8003ce68 */
    *(int8_t*)(reg_v1 + 455) = var_v0; /* 0x8003ce70 */
    /* Branch blez at 0x8003ce74 */
    var_v0 = 1; /* 0x8003ce78 */
    *(int8_t*)(reg_v1 + 455) = var_v0; /* 0x8003ce80 */
    *(int8_t*)(reg_v1 + 455) = var_zero; /* 0x8003ce84 */
    var_v1 = 0x51eb << 16; /* 0x8003ce88 */
    var_v1 = var_v1 | 0x851f; /* 0x8003ce8c */
    var_v0 = var_t1 << 0x2; /* 0x8003ce90 */
    var_v0 = var_v0 + var_t1; /* 0x8003ce94 */
    var_v0 = var_v0 << 0x4; /* 0x8003ce98 */
    var_a0 = 0x801a << 16; /* 0x8003cea0 */
    var_a0 = var_a0 + -28888; /* 0x8003cea4 */
    var_v0 = var_v0 >> 0x1f; /* 0x8003cea8 */
    *(int8_t*)(reg_a0 + 457) = var_t2; /* 0x8003ceac */
    *(int8_t*)(reg_a0 + 458) = var_t3; /* 0x8003ceb0 */
    *(int8_t*)(reg_a0 + 459) = var_t6; /* 0x8003ceb4 */
    var_v1 = var_t9 >> 0x5; /* 0x8003cebc */
    var_v0 = 100; /* 0x8003cec4 */
    *(int8_t*)(reg_a0 + 456) = var_v0; /* 0x8003cecc */
    var_sp = var_sp + 32; /* 0x8003ced0 */
    return; /* 0x8003ced4 */
}

/* Function at 0x8003ced8 */
void func_0x8003ced8() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -24; /* 0x8003cedc */
    *(int32_t*)(stack + 16) = var_ra; /* 0x8003cee0 */
    func_0x8003cb88(); /* 0x8003cee4 */
    func_0x8005a3a8(); /* 0x8003ceec */
    var_v0 = 0x801a << 16; /* 0x8003cef4 */
    var_a0 = var_v0 + -28888; /* 0x8003cef8 */
    var_v1 = *(uint16_t*)(reg_v0 + -28888); /* 0x8003cefc */
    var_v0 = *(uint16_t*)(reg_a0 + 2); /* 0x8003cf00 */
    /* Branch beqz at 0x8003cf0c */
    *(int16_t*)(reg_a0 + 2) = var_v1; /* 0x8003cf14 */
    var_ra = *(int32_t*)(stack + 16); /* 0x8003cf18 */
    var_sp = var_sp + 24; /* 0x8003cf1c */
    return; /* 0x8003cf20 */
}

/* Function at 0x8003cf24 */
void func_0x8003cf24() {
    /* Local variables */
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -24; /* 0x8003cf28 */
    var_v1 = 0x801a << 16; /* 0x8003cf2c */
    var_v0 = var_v1 + -28888; /* 0x8003cf30 */
    *(int32_t*)(stack + 20) = var_ra; /* 0x8003cf34 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003cf38 */
    var_v0 = *(uint16_t*)(reg_v0 + 2); /* 0x8003cf3c */
    var_s0 = var_v0 + var_a0; /* 0x8003cf44 */
    /* Branch bgtz at 0x8003cf48 */
    var_s0 = var_zero; /* 0x8003cf50 */
    func_0x8003bd14(); /* 0x8003cf54 */
    var_v0 = 0x801a << 16; /* 0x8003cf60 */
    var_v1 = *(uint16_t*)(reg_v1 + -28888); /* 0x8003cf64 */
    /* Branch beqz at 0x8003cf70 */
    var_v0 = 0x801a << 16; /* 0x8003cf74 */
    var_s0 = var_v1; /* 0x8003cf78 */
    *(int16_t*)(reg_v0 + -28886) = var_s0; /* 0x8003cf7c */
    var_ra = *(int32_t*)(stack + 20); /* 0x8003cf80 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003cf84 */
    var_sp = var_sp + 24; /* 0x8003cf88 */
    return; /* 0x8003cf8c */
}

/* Function at 0x8003cf90 */
void func_0x8003cf90() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x801a << 16; /* 0x8003cf94 */
    var_a1 = var_v0 + -28888; /* 0x8003cf98 */
    var_v0 = *(uint16_t*)(reg_a1 + 6); /* 0x8003cf9c */
    var_v1 = var_v0 + var_a0; /* 0x8003cfa4 */
    /* Branch bgtz at 0x8003cfa8 */
    var_v1 = var_zero; /* 0x8003cfb4 */
    var_a0 = *(uint16_t*)(reg_a1 + 4); /* 0x8003cfb8 */
    /* Branch beqz at 0x8003cfc4 */
    var_v0 = 0x801a << 16; /* 0x8003cfc8 */
    var_v1 = var_a0; /* 0x8003cfcc */
    var_v0 = 0x801a << 16; /* 0x8003cfd0 */
    return; /* 0x8003cfd4 */
}

/* Function at 0x8003cfd8 */
void func_0x8003cfd8() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_v0;
    int32_t var_v1;

    *(int16_t*)(reg_v0 + -28882) = var_v1; /* 0x8003cfd8 */
    var_v1 = 0x801c << 16; /* 0x8003cfdc */
    var_v1 = var_v1 + 30456; /* 0x8003cfe0 */
    var_v0 = var_a0 << 0x1; /* 0x8003cfe4 */
    var_v0 = var_v0 + var_a0; /* 0x8003cfe8 */
    var_v0 = var_v0 << 0x2; /* 0x8003cfec */
    var_v0 = var_v0 << 0x2; /* 0x8003cff4 */
    var_v0 = var_v0 + var_v1; /* 0x8003cff8 */
    var_v0 = *(uint8_t*)(reg_v0 + 320); /* 0x8003cffc */
    /* Branch beqz at 0x8003d004 */
    /* Branch beqz at 0x8003d00c */
    var_v0 = 0x801a << 16; /* 0x8003d010 */
    var_v0 = var_v0 + -28888; /* 0x8003d014 */
    var_v1 = *(int32_t*)(reg_v0 + 44); /* 0x8003d018 */
    var_a0 = 0x100 << 16; /* 0x8003d01c */
    var_v1 = var_v1 | var_a0; /* 0x8003d020 */
    *(int32_t*)(reg_v0 + 44) = var_v1; /* 0x8003d024 */
    return; /* 0x8003d028 */
}

/* Function at 0x8003d02c */
void func_0x8003d02c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -72; /* 0x8003d030 */
    var_a3 = var_sp + 16; /* 0x8003d034 */
    var_v0 = 0x8001 << 16; /* 0x8003d038 */
    var_a2 = var_v0 + 7292; /* 0x8003d03c */
    var_t0 = var_a2 + 32; /* 0x8003d040 */
    *(int32_t*)(stack + 64) = var_ra; /* 0x8003d044 */
    *(int32_t*)(stack + 60) = var_s1; /* 0x8003d048 */
    *(int32_t*)(stack + 56) = var_s0; /* 0x8003d04c */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x8003d050 */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x8003d054 */
    var_a0 = *(int32_t*)(reg_a2 + 8); /* 0x8003d058 */
    var_a1 = *(int32_t*)(reg_a2 + 12); /* 0x8003d05c */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x8003d060 */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x8003d064 */
    *(int32_t*)(reg_a3 + 8) = var_a0; /* 0x8003d068 */
    *(int32_t*)(reg_a3 + 12) = var_a1; /* 0x8003d06c */
    var_a2 = var_a2 + 16; /* 0x8003d070 */
    /* Branch bne at 0x8003d074 */
    var_a3 = var_a3 + 16; /* 0x8003d078 */
    var_v0 = *(int32_t*)(reg_a2 + 0); /* 0x8003d07c */
    var_v1 = *(int32_t*)(reg_a2 + 4); /* 0x8003d080 */
    *(int32_t*)(reg_a3 + 0) = var_v0; /* 0x8003d084 */
    *(int32_t*)(reg_a3 + 4) = var_v1; /* 0x8003d088 */
    var_s0 = var_sp + 16; /* 0x8003d08c */
    var_a1 = 0xfeff << 16; /* 0x8003d090 */
    var_a1 = var_a1 | 0xffff; /* 0x8003d094 */
    var_v1 = 0x801a << 16; /* 0x8003d098 */
    var_v1 = var_v1 + -28888; /* 0x8003d09c */
    var_v0 = *(int32_t*)(reg_v1 + 44); /* 0x8003d0a0 */
    var_a0 = *(int32_t*)(stack + 16); /* 0x8003d0a4 */
    var_v0 = var_v0 & var_a1; /* 0x8003d0a8 */
    /* Branch beqz at 0x8003d0ac */
    *(int32_t*)(reg_v1 + 44) = var_v0; /* 0x8003d0b0 */
    var_s1 = 0xffff; /* 0x8003d0b4 */
    var_v1 = *(int32_t*)(reg_s0 + 0); /* 0x8003d0b8 */
    var_v0 = *(uint16_t*)(reg_v1 + 0); /* 0x8003d0c0 */
    /* Branch beq at 0x8003d0c8 */
    func_0x8003cfdc(); /* 0x8003d0d0 */
    var_s0 = var_s0 + 4; /* 0x8003d0d8 */
    var_v0 = *(int32_t*)(reg_s0 + 0); /* 0x8003d0dc */
    /* Branch bnez at 0x8003d0e4 */
    var_ra = *(int32_t*)(stack + 64); /* 0x8003d0ec */
    var_s1 = *(int32_t*)(stack + 60); /* 0x8003d0f0 */
    var_s0 = *(int32_t*)(stack + 56); /* 0x8003d0f4 */
    var_sp = var_sp + 72; /* 0x8003d0f8 */
    return; /* 0x8003d0fc */
}

/* Function at 0x8003d100 */
void func_0x8003d100() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -32; /* 0x8003d104 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003d108 */
    var_s0 = var_a1; /* 0x8003d10c */
    *(int32_t*)(stack + 28) = var_ra; /* 0x8003d110 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x8003d114 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x8003d118 */
    var_v0 = *(uint16_t*)(reg_s0 + 0); /* 0x8003d11c */
    var_s2 = 0xffff; /* 0x8003d120 */
    /* Branch beq at 0x8003d124 */
    var_v0 = 0x801c << 16; /* 0x8003d128 */
    var_v1 = *(uint16_t*)(reg_s0 + 0); /* 0x8003d12c */
    var_s1 = var_v0 + 30456; /* 0x8003d130 */
    var_v0 = var_v1 << 0x1; /* 0x8003d134 */
    var_v0 = var_v0 + var_v1; /* 0x8003d138 */
    var_v0 = var_v0 << 0x2; /* 0x8003d13c */
    var_v0 = var_v0 << 0x2; /* 0x8003d144 */
    var_v0 = var_v0 + var_s1; /* 0x8003d148 */
    var_v1 = *(uint8_t*)(reg_v0 + 320); /* 0x8003d14c */
    /* Branch beqz at 0x8003d154 */
    /* Branch bgtz at 0x8003d15c */
    var_a0 = 4; /* 0x8003d160 */
    func_0x800582f0(); /* 0x8003d164 */
    var_v0 = *(uint16_t*)(reg_s0 + 0); /* 0x8003d16c */
    var_v1 = var_v0 << 0x1; /* 0x8003d174 */
    var_v1 = var_v1 + var_v0; /* 0x8003d178 */
    var_v1 = var_v1 << 0x2; /* 0x8003d17c */
    var_v1 = var_v1 << 0x2; /* 0x8003d184 */
    var_v1 = var_v1 + var_s1; /* 0x8003d188 */
    var_v0 = 0x801a << 16; /* 0x8003d18c */
    var_v0 = var_v0 + -28832; /* 0x8003d190 */
    /* Branch beq at 0x8003d194 */
    *(int8_t*)(reg_v1 + 320) = var_zero; /* 0x8003d198 */
    var_v0 = var_v0 + 26; /* 0x8003d19c */
    /* Branch beq at 0x8003d1a0 */
    var_v0 = 0x801a << 16; /* 0x8003d1a4 */
    *(int16_t*)(reg_s0 + 0) = var_s2; /* 0x8003d1a8 */
    var_v0 = 0x801a << 16; /* 0x8003d1ac */
    var_v1 = var_v0 + -28826; /* 0x8003d1b0 */
    /* Branch bne at 0x8003d1b4 */
    var_v0 = var_v1 + 26; /* 0x8003d1b8 */
    var_v0 = *(uint8_t*)(reg_s0 + 266); /* 0x8003d1bc */
    var_v0 = var_v0 + -31; /* 0x8003d1c4 */
    /* Branch beqz at 0x8003d1cc */
    var_a1 = 1; /* 0x8003d1d0 */
    var_a0 = 0xffff; /* 0x8003d1d4 */
    func_0x8003f12c(); /* 0x8003d1d8 */
    var_a0 = 0xffff; /* 0x8003d1e0 */
    var_a1 = var_zero; /* 0x8003d1e8 */
    /* Branch bne at 0x8003d1ec */
    var_v0 = var_v1 + 2; /* 0x8003d1f0 */
    var_a0 = 0xffff; /* 0x8003d1f4 */
    var_a1 = 1; /* 0x8003d1fc */
    /* Branch bne at 0x8003d200 */
    var_v0 = var_v1 + 28; /* 0x8003d204 */
    var_a0 = 0xffff; /* 0x8003d208 */
    var_a1 = 2; /* 0x8003d210 */
    /* Branch bne at 0x8003d214 */
    var_a0 = 0xffff; /* 0x8003d218 */
    var_a1 = 3; /* 0x8003d21c */
    func_0x8003f12c(); /* 0x8003d220 */
    func_0x8003cb88(); /* 0x8003d228 */
    func_0x8005a3a8(); /* 0x8003d230 */
    var_v0 = 0x801a << 16; /* 0x8003d238 */
    var_a0 = var_v0 + -28888; /* 0x8003d23c */
    var_v1 = *(uint16_t*)(reg_v0 + -28888); /* 0x8003d240 */
    var_v0 = *(uint16_t*)(reg_a0 + 2); /* 0x8003d244 */
    /* Branch beqz at 0x8003d250 */
    *(int16_t*)(reg_a0 + 2) = var_v1; /* 0x8003d25c */
    *(int8_t*)(reg_v0 + 320) = var_v1; /* 0x8003d260 */
    func_0x8003d030(); /* 0x8003d264 */
    var_ra = *(int32_t*)(stack + 28); /* 0x8003d26c */
    var_s2 = *(int32_t*)(stack + 24); /* 0x8003d270 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x8003d274 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003d278 */
    var_sp = var_sp + 32; /* 0x8003d27c */
    return; /* 0x8003d280 */
}

/* Function at 0x8003d284 */
void func_0x8003d284() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_at;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -64; /* 0x8003d288 */
    var_t0 = var_a0; /* 0x8003d28c */
    var_v0 = 0x8001 << 16; /* 0x8003d290 */
    *(int32_t*)(stack + 56) = var_ra; /* 0x8003d294 */
    *(int32_t*)(stack + 52) = var_s5; /* 0x8003d298 */
    *(int32_t*)(stack + 48) = var_s4; /* 0x8003d29c */
    *(int32_t*)(stack + 44) = var_s3; /* 0x8003d2a0 */
    *(int32_t*)(stack + 40) = var_s2; /* 0x8003d2a4 */
    *(int32_t*)(stack + 36) = var_s1; /* 0x8003d2a8 */
    *(int32_t*)(stack + 32) = var_s0; /* 0x8003d2ac */
    var_a3 = var_v0 + 7332; /* 0x8003d2b0 */
    var_v1 = *(int32_t*)(reg_a3 + 0); /* 0x8003d2b4 */
    var_a0 = *(int32_t*)(reg_a3 + 4); /* 0x8003d2b8 */
    var_a2 = *(int32_t*)(reg_a3 + 8); /* 0x8003d2bc */
    *(int32_t*)(stack + 16) = var_v1; /* 0x8003d2c0 */
    *(int32_t*)(stack + 20) = var_a0; /* 0x8003d2c4 */
    *(int32_t*)(stack + 24) = var_a2; /* 0x8003d2c8 */
    var_v1 = *(int32_t*)(reg_a3 + 12); /* 0x8003d2cc */
    *(int32_t*)(stack + 28) = var_v1; /* 0x8003d2d4 */
    var_a2 = 0x801a << 16; /* 0x8003d2d8 */
    var_a3 = var_a2 + -28888; /* 0x8003d2dc */
    var_v0 = *(uint8_t*)(reg_a3 + 393); /* 0x8003d2e0 */
    /* Branch beqz at 0x8003d2e8 */
    var_v0 = 0xffff; /* 0x8003d2ec */
    var_v1 = *(uint16_t*)(reg_a3 + 88); /* 0x8003d2f0 */
    /* Branch beq at 0x8003d2f8 */
    var_v0 = var_t0 << 0x2; /* 0x8003d2fc */
    var_a0 = var_v0 + var_t0; /* 0x8003d300 */
    var_v1 = *(uint16_t*)(reg_a2 + -28888); /* 0x8003d304 */
    var_v0 = var_a0 << 0x2; /* 0x8003d308 */
    /* Branch beqz at 0x8003d310 */
    var_v0 = var_a0 << 0x1; /* 0x8003d314 */
    var_v0 = *(uint8_t*)(reg_a3 + 537); /* 0x8003d318 */
    var_v0 = var_v0 + 1; /* 0x8003d320 */
    *(int8_t*)(reg_a3 + 537) = var_v0; /* 0x8003d328 */
    /* Branch bnez at 0x8003d330 */
    var_at = -1; /* 0x8003d33c */
    /* Branch bne at 0x8003d340 */
    var_at = 0x8000 << 16; /* 0x8003d344 */
    /* Branch bne at 0x8003d348 */
    var_a2 = var_v0 + 1; /* 0x8003d35c */
    /* Branch blez at 0x8003d360 */
    var_v0 = var_a2 << 0x1; /* 0x8003d364 */
    var_v1 = *(uint8_t*)(reg_a3 + 537); /* 0x8003d368 */
    var_a0 = *(uint8_t*)(reg_a3 + 538); /* 0x8003d36c */
    var_v1 = var_v1 + var_v0; /* 0x8003d370 */
    var_a0 = var_a0 + var_a2; /* 0x8003d374 */
    *(int8_t*)(reg_a3 + 537) = var_v1; /* 0x8003d378 */
    *(int8_t*)(reg_a3 + 538) = var_a0; /* 0x8003d37c */
    var_v0 = 0x801a << 16; /* 0x8003d380 */
    var_t0 = var_v0 + -28888; /* 0x8003d384 */
    var_v1 = *(uint8_t*)(reg_t0 + 537); /* 0x8003d388 */
    var_v0 = 0xcccc << 16; /* 0x8003d38c */
    var_v0 = var_v0 | 0xcccd; /* 0x8003d390 */
    var_a0 = *(uint8_t*)(reg_t0 + 538); /* 0x8003d39c */
    var_v0 = (uint32_t)var_a2 >> 0x2; /* 0x8003d3a8 */
    var_a2 = var_v0 & 0xff; /* 0x8003d3ac */
    var_v0 = (uint32_t)var_a3 >> 0x2; /* 0x8003d3b4 */
    var_s1 = var_v0 & 0xff; /* 0x8003d3b8 */
    var_v0 = var_a2 << 0x2; /* 0x8003d3bc */
    var_v0 = var_v0 + var_a2; /* 0x8003d3c0 */
    var_v0 = var_s1 << 0x2; /* 0x8003d3c8 */
    var_v0 = var_v0 + var_s1; /* 0x8003d3cc */
    var_v0 = var_a1 & 0x400; /* 0x8003d3d4 */
    *(int8_t*)(reg_t0 + 537) = var_v1; /* 0x8003d3d8 */
    /* Branch beqz at 0x8003d3dc */
    *(int8_t*)(reg_t0 + 538) = var_a0; /* 0x8003d3e0 */
    var_v0 = *(int32_t*)(reg_t0 + 44); /* 0x8003d3e4 */
    var_v1 = 0x80 << 16; /* 0x8003d3e8 */
    var_v0 = var_v0 & var_v1; /* 0x8003d3ec */
    /* Branch bnez at 0x8003d3f0 */
    var_v0 = var_a1 & 0x1000; /* 0x8003d3f4 */
    var_a2 = var_a2 << 0x1; /* 0x8003d3f8 */
    var_s1 = var_s1 << 0x1; /* 0x8003d3fc */
    var_v0 = var_a1 & 0x1000; /* 0x8003d400 */
    /* Branch beqz at 0x8003d404 */
    var_v0 = var_a2 << 0x2; /* 0x8003d408 */
    var_a2 = var_a2 + var_v0; /* 0x8003d40c */
    var_v0 = var_s1 << 0x2; /* 0x8003d410 */
    var_s1 = var_s1 + var_v0; /* 0x8003d414 */
    var_a0 = var_a2; /* 0x8003d418 */
    var_a1 = 0x801a << 16; /* 0x8003d41c */
    func_0x8003d104(); /* 0x8003d420 */
    var_s3 = -1; /* 0x8003d42c */
    var_v0 = var_t0 << 0x2; /* 0x8003d430 */
    var_a0 = var_v0 + var_t0; /* 0x8003d434 */
    var_v0 = var_a0 << 0x2; /* 0x8003d438 */
    var_v1 = 0x801a << 16; /* 0x8003d43c */
    var_a2 = *(uint16_t*)(reg_v1 + -28888); /* 0x8003d440 */
    /* Branch bnez at 0x8003d44c */
    var_a3 = var_v1 + -28888; /* 0x8003d450 */
    var_v0 = var_a0 << 0x1; /* 0x8003d454 */
    /* Branch bnez at 0x8003d45c */
    var_at = -1; /* 0x8003d468 */
    /* Branch bne at 0x8003d46c */
    var_at = 0x8000 << 16; /* 0x8003d470 */
    /* Branch bne at 0x8003d474 */
    var_a2 = var_v0 + 1; /* 0x8003d488 */
    /* Branch blez at 0x8003d48c */
    var_v1 = var_a2 << 0x1; /* 0x8003d490 */
    var_v0 = *(uint8_t*)(reg_a3 + 538); /* 0x8003d494 */
    var_v0 = var_v0 + var_v1; /* 0x8003d49c */
    *(int8_t*)(reg_a3 + 538) = var_v0; /* 0x8003d4a0 */
    var_v1 = *(uint8_t*)(reg_a3 + 538); /* 0x8003d4a4 */
    var_v0 = 0xcccc << 16; /* 0x8003d4a8 */
    var_v0 = var_v0 | 0xcccd; /* 0x8003d4ac */
    var_v0 = (uint32_t)var_t1 >> 0x2; /* 0x8003d4b8 */
    var_s1 = var_v0 & 0xff; /* 0x8003d4bc */
    var_v0 = var_s1 << 0x2; /* 0x8003d4c0 */
    var_v0 = var_v0 + var_s1; /* 0x8003d4c4 */
    var_v0 = var_a1 & 0x400; /* 0x8003d4cc */
    /* Branch beqz at 0x8003d4d0 */
    *(int8_t*)(reg_a3 + 538) = var_v1; /* 0x8003d4d4 */
    var_v0 = *(int32_t*)(reg_a3 + 44); /* 0x8003d4d8 */
    var_v1 = 0x80 << 16; /* 0x8003d4dc */
    var_v0 = var_v0 & var_v1; /* 0x8003d4e0 */
    /* Branch bnez at 0x8003d4e4 */
    var_v0 = var_a1 & 0x1000; /* 0x8003d4e8 */
    var_s1 = var_s1 << 0x1; /* 0x8003d4ec */
    var_v0 = var_a1 & 0x1000; /* 0x8003d4f0 */
    /* Branch beqz at 0x8003d4f4 */
    var_v0 = var_s1 << 0x2; /* 0x8003d4f8 */
    var_s1 = var_s1 + var_v0; /* 0x8003d4fc */
    func_0x80078ac4(); /* 0x8003d500 */
    var_v1 = var_v0 << 0x2; /* 0x8003d508 */
    var_v1 = var_v1 + var_v0; /* 0x8003d50c */
    var_s3 = var_v1 >> 0xf; /* 0x8003d510 */
    /* Branch bnez at 0x8003d518 */
    var_s0 = 3; /* 0x8003d51c */
    var_s3 = 4; /* 0x8003d520 */
    var_s0 = 3; /* 0x8003d524 */
    var_s5 = 0xffff; /* 0x8003d528 */
    var_s4 = -1; /* 0x8003d52c */
    var_s2 = var_sp + 28; /* 0x8003d530 */
    var_a1 = *(int32_t*)(reg_s2 + 0); /* 0x8003d534 */
    var_v0 = *(uint16_t*)(reg_a1 + 0); /* 0x8003d53c */
    /* Branch beq at 0x8003d544 */
    /* Branch bne at 0x8003d54c */
    var_a0 = var_s1; /* 0x8003d550 */
    var_a0 = var_s1 << 0x1; /* 0x8003d554 */
    func_0x8003d104(); /* 0x8003d558 */
    var_s0 = var_s0 + -1; /* 0x8003d560 */
    /* Branch bne at 0x8003d564 */
    var_s2 = var_s2 + -4; /* 0x8003d568 */
    var_ra = *(int32_t*)(stack + 56); /* 0x8003d56c */
    var_s5 = *(int32_t*)(stack + 52); /* 0x8003d570 */
    var_s4 = *(int32_t*)(stack + 48); /* 0x8003d574 */
    var_s3 = *(int32_t*)(stack + 44); /* 0x8003d578 */
    var_s2 = *(int32_t*)(stack + 40); /* 0x8003d57c */
    var_s1 = *(int32_t*)(stack + 36); /* 0x8003d580 */
    var_s0 = *(int32_t*)(stack + 32); /* 0x8003d584 */
    var_sp = var_sp + 64; /* 0x8003d588 */
    return; /* 0x8003d58c */
}

/* Function at 0x8003d590 */
void func_0x8003d590() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -32; /* 0x8003d594 */
    var_v0 = 0x801a << 16; /* 0x8003d598 */
    *(int32_t*)(stack + 24) = var_s2; /* 0x8003d59c */
    var_s2 = var_v0 + -28888; /* 0x8003d5a0 */
    *(int32_t*)(stack + 28) = var_ra; /* 0x8003d5a4 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x8003d5a8 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003d5ac */
    var_a0 = *(int32_t*)(reg_s2 + 756); /* 0x8003d5b0 */
    var_v0 = 0x5555 << 16; /* 0x8003d5bc */
    var_v0 = var_v0 | 0x5556; /* 0x8003d5c0 */
    var_v1 = var_a0 >> 0x1f; /* 0x8003d5c8 */
    var_v0 = var_v1 << 0x1; /* 0x8003d5d4 */
    var_v0 = var_v0 + var_v1; /* 0x8003d5d8 */
    /* Branch bne at 0x8003d5dc */
    func_0x80078ac4(); /* 0x8003d5e4 */
    var_s1 = var_s1 | 0x6667; /* 0x8003d5ec */
    var_a0 = *(int32_t*)(reg_s2 + 756); /* 0x8003d5f0 */
    var_s0 = 30; /* 0x8003d5f4 */
    var_v0 = var_v0 + -16384; /* 0x8003d600 */
    var_a0 = var_a0 >> 0x1f; /* 0x8003d604 */
    var_v1 = var_a1 >> 0x1; /* 0x8003d60c */
    var_v1 = var_v1 + 5; /* 0x8003d614 */
    *(int16_t*)(reg_gp + 784) = var_v0; /* 0x8003d61c */
    func_0x80078ac4(); /* 0x8003d620 */
    var_v1 = *(int32_t*)(reg_s2 + 756); /* 0x8003d628 */
    var_v0 = var_v0 + -16384; /* 0x8003d638 */
    var_s0 = var_s0 >> 0x1f; /* 0x8003d63c */
    var_v1 = var_a1 >> 0x1; /* 0x8003d644 */
    var_v1 = var_v1 + 5; /* 0x8003d64c */
    *(int16_t*)(reg_gp + 786) = var_v0; /* 0x8003d654 */
    var_v0 = *(uint16_t*)(reg_gp + 784); /* 0x8003d660 */
    var_v1 = *(uint16_t*)(reg_gp + 786); /* 0x8003d664 */
    var_v0 = var_v0 << 0x10; /* 0x8003d668 */
    var_v0 = var_v0 >> 0x11; /* 0x8003d66c */
    var_v1 = var_v1 << 0x10; /* 0x8003d670 */
    var_v1 = var_v1 >> 0x11; /* 0x8003d674 */
    *(int16_t*)(reg_gp + 784) = var_v0; /* 0x8003d678 */
    *(int16_t*)(reg_gp + 786) = var_v1; /* 0x8003d67c */
    var_a0 = *(uint16_t*)(reg_gp + 784); /* 0x8003d680 */
    var_v0 = var_a0 + 2; /* 0x8003d688 */
    var_v0 = var_v0 & 0xffff; /* 0x8003d68c */
    /* Branch bnez at 0x8003d694 */
    var_v1 = 0x801a << 16; /* 0x8003d698 */
    var_v1 = var_v1 + -28888; /* 0x8003d69c */
    var_v0 = *(uint16_t*)(reg_v1 + 648); /* 0x8003d6a0 */
    var_v0 = var_v0 + var_a0; /* 0x8003d6a8 */
    *(int16_t*)(reg_v1 + 648) = var_v0; /* 0x8003d6ac */
    var_a0 = *(uint16_t*)(reg_gp + 786); /* 0x8003d6b0 */
    var_v0 = var_a0 + 2; /* 0x8003d6b8 */
    var_v0 = var_v0 & 0xffff; /* 0x8003d6bc */
    /* Branch bnez at 0x8003d6c4 */
    var_v0 = 0x801a << 16; /* 0x8003d6c8 */
    var_v1 = 0x801a << 16; /* 0x8003d6cc */
    var_v1 = var_v1 + -28888; /* 0x8003d6d0 */
    var_v0 = *(uint16_t*)(reg_v1 + 652); /* 0x8003d6d4 */
    var_v0 = var_v0 + var_a0; /* 0x8003d6dc */
    *(int16_t*)(reg_v1 + 652) = var_v0; /* 0x8003d6e0 */
    var_v0 = 0x801a << 16; /* 0x8003d6e4 */
    var_v1 = var_v0 + -28888; /* 0x8003d6e8 */
    var_v0 = *(uint16_t*)(reg_v1 + 648); /* 0x8003d6ec */
    var_v0 = var_v0 + -2049; /* 0x8003d6f4 */
    /* Branch beqz at 0x8003d6fc */
    var_v0 = 4032; /* 0x8003d700 */
    *(int16_t*)(reg_v1 + 648) = var_v0; /* 0x8003d704 */
    var_v0 = *(uint16_t*)(reg_v1 + 648); /* 0x8003d708 */
    var_v0 = var_v0 + -65; /* 0x8003d710 */
    /* Branch beqz at 0x8003d718 */
    var_v0 = 64; /* 0x8003d71c */
    *(int16_t*)(reg_v1 + 648) = var_v0; /* 0x8003d720 */
    var_v0 = *(uint16_t*)(reg_v1 + 652); /* 0x8003d724 */
    var_v0 = var_v0 + -2049; /* 0x8003d72c */
    /* Branch beqz at 0x8003d734 */
    var_v0 = 4032; /* 0x8003d738 */
    *(int16_t*)(reg_v1 + 652) = var_v0; /* 0x8003d73c */
    var_v0 = *(uint16_t*)(reg_v1 + 652); /* 0x8003d740 */
    var_v0 = var_v0 + -65; /* 0x8003d748 */
    /* Branch beqz at 0x8003d750 */
    var_v0 = 64; /* 0x8003d754 */
    *(int16_t*)(reg_v1 + 652) = var_v0; /* 0x8003d758 */
    var_v0 = *(int32_t*)(reg_v1 + 756); /* 0x8003d75c */
    var_v0 = var_v0 + -1; /* 0x8003d764 */
    *(int32_t*)(reg_v1 + 756) = var_v0; /* 0x8003d768 */
    var_ra = *(int32_t*)(stack + 28); /* 0x8003d76c */
    var_s2 = *(int32_t*)(stack + 24); /* 0x8003d770 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x8003d774 */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003d778 */
    var_sp = var_sp + 32; /* 0x8003d77c */
    return; /* 0x8003d780 */
}

/* Function at 0x8003d784 */
void func_0x8003d784() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_at;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_s7;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -72; /* 0x8003d788 */
    *(int32_t*)(stack + 52) = var_s5; /* 0x8003d78c */
    var_s5 = var_a0; /* 0x8003d790 */
    *(int32_t*)(stack + 60) = var_s7; /* 0x8003d794 */
    *(int32_t*)(stack + 36) = var_s1; /* 0x8003d798 */
    var_s1 = 0x801a << 16; /* 0x8003d79c */
    *(int32_t*)(stack + 32) = var_s0; /* 0x8003d7a0 */
    var_s0 = var_s1 + -28888; /* 0x8003d7a4 */
    *(int32_t*)(stack + 64) = var_ra; /* 0x8003d7a8 */
    *(int32_t*)(stack + 56) = var_s6; /* 0x8003d7ac */
    *(int32_t*)(stack + 48) = var_s4; /* 0x8003d7b0 */
    *(int32_t*)(stack + 44) = var_s3; /* 0x8003d7b4 */
    *(int32_t*)(stack + 40) = var_s2; /* 0x8003d7b8 */
    var_v1 = *(uint8_t*)(reg_s0 + 536); /* 0x8003d7bc */
    var_v0 = 4; /* 0x8003d7c0 */
    /* Branch beq at 0x8003d7c4 */
    var_s7 = var_a2; /* 0x8003d7c8 */
    /* Branch beqz at 0x8003d7cc */
    func_0x8003d288(); /* 0x8003d7d4 */
    var_v0 = *(uint16_t*)(reg_s0 + 2); /* 0x8003d7dc */
    /* Branch bgtz at 0x8003d7e8 */
    var_s4 = var_zero; /* 0x8003d7f0 */
    *(int16_t*)(reg_s0 + 2) = var_s4; /* 0x8003d7f4 */
    var_v1 = *(uint16_t*)(reg_s1 + -28888); /* 0x8003d7f8 */
    var_v0 = var_s4 & 0xffff; /* 0x8003d7fc */
    /* Branch beqz at 0x8003d804 */
    *(int16_t*)(reg_s0 + 2) = var_v1; /* 0x8003d80c */
    var_v1 = *(uint16_t*)(reg_s1 + -28888); /* 0x8003d810 */
    var_v0 = var_s5 << 0xc; /* 0x8003d814 */
    /* Branch bnez at 0x8003d81c */
    var_at = -1; /* 0x8003d828 */
    /* Branch bne at 0x8003d82c */
    var_at = 0x8000 << 16; /* 0x8003d830 */
    /* Branch bne at 0x8003d834 */
    /* Branch bnez at 0x8003d84c */
    var_s2 = 950; /* 0x8003d854 */
    /* Branch beqz at 0x8003d858 */
    var_s1 = var_s2 >> 0x2; /* 0x8003d85c */
    var_a3 = var_sp + 16; /* 0x8003d860 */
    var_v0 = *(int32_t*)(reg_s0 + 584); /* 0x8003d864 */
    var_a0 = *(int32_t*)(reg_s7 + 0); /* 0x8003d868 */
    var_v1 = *(int32_t*)(reg_s0 + 588); /* 0x8003d86c */
    var_a1 = *(int32_t*)(reg_s7 + 4); /* 0x8003d870 */
    var_a2 = *(int32_t*)(reg_s7 + 8); /* 0x8003d874 */
    var_v0 = *(int32_t*)(reg_s0 + 592); /* 0x8003d87c */
    func_0x8004a390(); /* 0x8003d884 */
    /* Branch beqz at 0x8003d890 */
    var_s1 = 80; /* 0x8003d898 */
    /* Branch bnez at 0x8003d8a0 */
    var_a0 = var_sp + 16; /* 0x8003d8a4 */
    var_s1 = 450; /* 0x8003d8a8 */
    var_s0 = var_sp + 24; /* 0x8003d8ac */
    func_0x80049f08(); /* 0x8003d8b0 */
    var_a0 = var_s1; /* 0x8003d8b8 */
    func_0x8004a0f8(); /* 0x8003d8bc */
    var_v1 = *(int16_t*)(stack + 26); /* 0x8003d8c4 */
    /* Branch bnez at 0x8003d8d0 */
    var_v0 = 200; /* 0x8003d8d8 */
    *(int16_t*)(stack + 26) = var_v0; /* 0x8003d8e0 */
    /* Branch beqz at 0x8003d8e4 */
    var_v0 = -200; /* 0x8003d8e8 */
    *(int16_t*)(stack + 26) = var_v0; /* 0x8003d8f0 */
    *(int16_t*)(stack + 28) = var_zero; /* 0x8003d8f4 */
    *(int16_t*)(stack + 26) = var_zero; /* 0x8003d8f8 */
    *(int16_t*)(stack + 24) = var_zero; /* 0x8003d8fc */
    var_v1 = var_s2 >> 0x1; /* 0x8003d900 */
    var_v0 = 1300; /* 0x8003d904 */
    var_v0 = var_v0 >> 0x2; /* 0x8003d90c */
    var_s6 = var_v0; /* 0x8003d910 */
    var_v0 = var_v0 << 0x10; /* 0x8003d914 */
    var_v0 = var_v0 >> 0x10; /* 0x8003d918 */
    /* Branch beqz at 0x8003d920 */
    var_v1 = 0x801a << 16; /* 0x8003d924 */
    var_s6 = 70; /* 0x8003d928 */
    var_a0 = var_v1 + -28888; /* 0x8003d92c */
    var_v0 = *(uint16_t*)(reg_a0 + 30); /* 0x8003d930 */
    /* Branch beqz at 0x8003d938 */
    var_v0 = var_s5 << 0x2; /* 0x8003d93c */
    var_v0 = var_v0 + var_s5; /* 0x8003d940 */
    var_v0 = var_v0 << 0x3; /* 0x8003d944 */
    var_v0 = var_v0 << 0x4; /* 0x8003d94c */
    var_v0 = var_v0 + var_s5; /* 0x8003d950 */
    var_v1 = *(uint16_t*)(reg_v1 + -28888); /* 0x8003d954 */
    var_v0 = var_v0 << 0x3; /* 0x8003d958 */
    /* Branch bnez at 0x8003d960 */
    var_at = -1; /* 0x8003d96c */
    /* Branch bne at 0x8003d970 */
    var_at = 0x8000 << 16; /* 0x8003d974 */
    /* Branch bne at 0x8003d978 */
    var_v1 = *(uint16_t*)(reg_a0 + 30); /* 0x8003d988 */
    var_v0 = var_v0 + 500; /* 0x8003d98c */
    /* Branch bnez at 0x8003d994 */
    var_at = -1; /* 0x8003d9a0 */
    /* Branch bne at 0x8003d9a4 */
    var_at = 0x8000 << 16; /* 0x8003d9a8 */
    /* Branch bne at 0x8003d9ac */
    *(int32_t*)(reg_a0 + 756) = var_v0; /* 0x8003d9c0 */
    var_v0 = 30; /* 0x8003d9c4 */
    *(int32_t*)(reg_a0 + 756) = var_v0; /* 0x8003d9c8 */
    var_s3 = 0x801a << 16; /* 0x8003d9cc */
    var_s1 = var_s3 + -28888; /* 0x8003d9d0 */
    var_v0 = *(int32_t*)(reg_s1 + 756); /* 0x8003d9d4 */
    var_v0 = -1; /* 0x8003d9e4 */
    *(int32_t*)(reg_s1 + 756) = var_v0; /* 0x8003d9e8 */
    var_v0 = *(int32_t*)(reg_s1 + 756); /* 0x8003d9ec */
    /* Branch bnez at 0x8003d9f8 */
    var_s0 = var_s5 << 0x8; /* 0x8003d9fc */
    var_v0 = 30; /* 0x8003da00 */
    *(int32_t*)(reg_s1 + 756) = var_v0; /* 0x8003da04 */
    var_a0 = *(uint16_t*)(reg_s3 + -28888); /* 0x8003da08 */
    /* Branch bnez at 0x8003da14 */
    var_at = -1; /* 0x8003da20 */
    /* Branch bne at 0x8003da24 */
    var_at = 0x8000 << 16; /* 0x8003da28 */
    /* Branch bne at 0x8003da2c */
    func_0x80057a68(); /* 0x8003da3c */
    var_v0 = *(uint16_t*)(reg_s3 + -28888); /* 0x8003da44 */
    /* Branch bnez at 0x8003da50 */
    var_at = -1; /* 0x8003da5c */
    /* Branch bne at 0x8003da60 */
    var_at = 0x8000 << 16; /* 0x8003da64 */
    /* Branch bne at 0x8003da68 */
    var_s0 = var_s0 + 32; /* 0x8003da7c */
    /* Branch bnez at 0x8003da84 */
    var_s0 = 128; /* 0x8003da8c */
    func_0x80078ac4(); /* 0x8003da90 */
    var_v1 = var_s0 + -16384; /* 0x8003da98 */
    var_v1 = var_v1 + var_v0; /* 0x8003da9c */
    var_v1 = var_v1 >> 0x9; /* 0x8003daa0 */
    func_0x80078ac4(); /* 0x8003daa4 */
    var_v0 = var_v0 >> 0x9; /* 0x8003daac */
    var_v1 = *(uint16_t*)(reg_s1 + 734); /* 0x8003dab0 */
    var_v0 = var_s0 + var_v0; /* 0x8003dab4 */
    var_v1 = var_v1 + var_v0; /* 0x8003dab8 */
    /* Branch bnez at 0x8003dabc */
    *(int16_t*)(reg_s1 + 734) = var_v1; /* 0x8003dac0 */
    func_0x8003bd14(); /* 0x8003dac4 */
    var_v0 = 3500; /* 0x8003dad0 */
    /* Branch bnez at 0x8003dad4 */
    var_v0 = 3500; /* 0x8003dad8 */
    *(int16_t*)(reg_s1 + 726) = var_v0; /* 0x8003dadc */
    *(int16_t*)(reg_s1 + 728) = var_s6; /* 0x8003dae4 */
    var_v0 = *(int16_t*)(stack + 18); /* 0x8003dae8 */
    var_v1 = *(int16_t*)(reg_s1 + 618); /* 0x8003daec */
    var_v0 = var_v0 + 256; /* 0x8003daf8 */
    var_v0 = var_v0 >> 0x9; /* 0x8003dafc */
    var_v1 = var_v0 & 0x7; /* 0x8003db00 */
    /* Branch beqz at 0x8003db08 */
    var_v0 = 0x8001 << 16; /* 0x8003db0c */
    var_v0 = var_v0 + 7452; /* 0x8003db10 */
    var_v1 = var_v1 << 0x2; /* 0x8003db14 */
    var_v1 = var_v1 + var_v0; /* 0x8003db18 */
    var_v0 = *(int32_t*)(reg_v1 + 0); /* 0x8003db1c */
    *(int16_t*)(stack + 16) = var_v0; /* 0x8003db30 */
    *(int16_t*)(stack + 20) = var_zero; /* 0x8003db38 */
    *(int16_t*)(stack + 16) = var_v0; /* 0x8003db40 */
    *(int16_t*)(stack + 20) = var_s2; /* 0x8003db48 */
    *(int16_t*)(stack + 16) = var_zero; /* 0x8003db4c */
    *(int16_t*)(stack + 20) = var_s2; /* 0x8003db54 */
    *(int16_t*)(stack + 16) = var_s2; /* 0x8003db58 */
    *(int16_t*)(stack + 20) = var_s2; /* 0x8003db60 */
    *(int16_t*)(stack + 16) = var_s2; /* 0x8003db64 */
    *(int16_t*)(stack + 20) = var_zero; /* 0x8003db6c */
    *(int16_t*)(stack + 16) = var_s2; /* 0x8003db78 */
    *(int16_t*)(stack + 16) = var_zero; /* 0x8003db84 */
    *(int16_t*)(stack + 16) = var_v0; /* 0x8003db8c */
    *(int16_t*)(stack + 20) = var_v0; /* 0x8003db90 */
    *(int16_t*)(stack + 18) = var_zero; /* 0x8003db94 */
    var_a0 = var_sp + 24; /* 0x8003db98 */
    var_a1 = var_sp + 16; /* 0x8003db9c */
    var_a2 = var_s6 << 0x10; /* 0x8003dba0 */
    var_a2 = var_a2 >> 0x10; /* 0x8003dba4 */
    func_0x80042c44(); /* 0x8003dba8 */
    var_ra = *(int32_t*)(stack + 64); /* 0x8003dbb0 */
    var_s7 = *(int32_t*)(stack + 60); /* 0x8003dbb4 */
    var_s6 = *(int32_t*)(stack + 56); /* 0x8003dbb8 */
    var_s5 = *(int32_t*)(stack + 52); /* 0x8003dbbc */
    var_s4 = *(int32_t*)(stack + 48); /* 0x8003dbc0 */
    var_s3 = *(int32_t*)(stack + 44); /* 0x8003dbc4 */
    var_s2 = *(int32_t*)(stack + 40); /* 0x8003dbc8 */
    var_s1 = *(int32_t*)(stack + 36); /* 0x8003dbcc */
    var_s0 = *(int32_t*)(stack + 32); /* 0x8003dbd0 */
    var_sp = var_sp + 72; /* 0x8003dbd4 */
    return; /* 0x8003dbd8 */
}

/* Function at 0x8003dbdc */
void func_0x8003dbdc() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_at;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_s7;
    int32_t var_s8;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -72; /* 0x8003dbe0 */
    *(int32_t*)(stack + 36) = var_s1; /* 0x8003dbe4 */
    var_s1 = var_a0; /* 0x8003dbe8 */
    *(int32_t*)(stack + 56) = var_s6; /* 0x8003dbec */
    var_s6 = var_zero; /* 0x8003dbf0 */
    *(int32_t*)(stack + 52) = var_s5; /* 0x8003dbf4 */
    var_s5 = var_s6; /* 0x8003dbf8 */
    var_v0 = 0x801a << 16; /* 0x8003dbfc */
    *(int32_t*)(stack + 44) = var_s3; /* 0x8003dc00 */
    var_s3 = var_v0 + -28672; /* 0x8003dc04 */
    var_a0 = var_sp + 16; /* 0x8003dc08 */
    *(int32_t*)(stack + 64) = var_s8; /* 0x8003dc0c */
    var_s8 = var_a1; /* 0x8003dc10 */
    var_a1 = var_s5; /* 0x8003dc14 */
    *(int32_t*)(stack + 60) = var_s7; /* 0x8003dc18 */
    var_s7 = var_a2; /* 0x8003dc1c */
    var_a2 = 12; /* 0x8003dc20 */
    *(int32_t*)(stack + 68) = var_ra; /* 0x8003dc24 */
    *(int32_t*)(stack + 48) = var_s4; /* 0x8003dc28 */
    *(int32_t*)(stack + 40) = var_s2; /* 0x8003dc2c */
    *(int32_t*)(stack + 32) = var_s0; /* 0x8003dc30 */
    func_0x80078ab4(); /* 0x8003dc34 */
    var_v1 = var_s7 & 0xffff; /* 0x8003dc3c */
    /* Branch beqz at 0x8003dc40 */
    var_s4 = var_sp + 16; /* 0x8003dc44 */
    var_v0 = 32; /* 0x8003dc48 */
    /* Branch beq at 0x8003dc4c */
    /* Branch beqz at 0x8003dc58 */
    var_v0 = 8; /* 0x8003dc5c */
    /* Branch beq at 0x8003dc60 */
    /* Branch beqz at 0x8003dc6c */
    var_v0 = 7; /* 0x8003dc70 */
    /* Branch beq at 0x8003dc74 */
    var_v0 = 32; /* 0x8003dc78 */
    var_v0 = 16; /* 0x8003dc84 */
    /* Branch beq at 0x8003dc88 */
    var_v0 = 24; /* 0x8003dc90 */
    /* Branch beq at 0x8003dc94 */
    var_v1 = var_s7 & 0xffff; /* 0x8003dc98 */
    var_v0 = 32; /* 0x8003dca0 */
    var_v0 = 96; /* 0x8003dca4 */
    /* Branch beq at 0x8003dca8 */
    /* Branch beqz at 0x8003dcb4 */
    var_v0 = 64; /* 0x8003dcb8 */
    /* Branch beq at 0x8003dcbc */
    var_v1 = var_s7 & 0xffff; /* 0x8003dcc0 */
    var_v0 = 32; /* 0x8003dcc8 */
    var_v0 = 128; /* 0x8003dccc */
    /* Branch beq at 0x8003dcd0 */
    var_v0 = 256; /* 0x8003dcd8 */
    /* Branch bne at 0x8003dcdc */
    var_v1 = var_s7 & 0xffff; /* 0x8003dce0 */
    var_v1 = 0x801a << 16; /* 0x8003dce4 */
    var_v1 = var_v1 + -28888; /* 0x8003dce8 */
    var_a0 = *(uint16_t*)(reg_v1 + 182); /* 0x8003dcec */
    var_v0 = 0xcccc << 16; /* 0x8003dcf0 */
    var_v0 = var_v0 | 0xcccd; /* 0x8003dcf4 */
    var_a0 = 0x6666 << 16; /* 0x8003dcfc */
    var_a0 = var_a0 | 0x6667; /* 0x8003dd00 */
    var_v0 = *(int16_t*)(reg_v1 + 124); /* 0x8003dd04 */
    var_a1 = var_v0 << 0x1; /* 0x8003dd0c */
    var_a1 = var_a1 + var_v0; /* 0x8003dd10 */
    var_v0 = *(uint16_t*)(reg_v1 + 226); /* 0x8003dd18 */
    var_v1 = var_v0 << 0x4; /* 0x8003dd20 */
    var_v1 = var_v1 << 0x2; /* 0x8003dd28 */
    var_a0 = 0x8080 << 16; /* 0x8003dd30 */
    var_a0 = var_a0 | 0x8081; /* 0x8003dd34 */
    var_a1 = var_a1 >> 0x1f; /* 0x8003dd3c */
    var_a0 = (uint32_t)var_a3 >> 0x4; /* 0x8003dd40 */
    var_a0 = var_a0 & 0xffff; /* 0x8003dd44 */
    var_v0 = var_a2 >> 0x5; /* 0x8003dd48 */
    var_a0 = var_a0 + var_v0; /* 0x8003dd50 */
    var_v0 = var_t0 + var_v1; /* 0x8003dd5c */
    var_a0 = var_s3 + -216; /* 0x8003dd60 */
    var_v1 = *(uint16_t*)(reg_a0 + 182); /* 0x8003dd64 */
    var_v0 = 0xcccc << 16; /* 0x8003dd68 */
    var_v0 = var_v0 | 0xcccd; /* 0x8003dd6c */
    var_v1 = 0x6666 << 16; /* 0x8003dd74 */
    var_v1 = var_v1 | 0x6667; /* 0x8003dd78 */
    var_v0 = *(int16_t*)(reg_a0 + 122); /* 0x8003dd7c */
    var_a1 = var_v0 << 0x1; /* 0x8003dd84 */
    var_a1 = var_a1 + var_v0; /* 0x8003dd88 */
    var_a2 = 0x8080 << 16; /* 0x8003dd90 */
    var_v0 = *(uint16_t*)(reg_a0 + 220); /* 0x8003dd94 */
    var_a2 = var_a2 | 0x8081; /* 0x8003dd98 */
    var_v1 = var_v0 << 0x4; /* 0x8003dd9c */
    var_v1 = var_v1 << 0x2; /* 0x8003dda8 */
    var_a0 = (uint32_t)var_t0 >> 0x4; /* 0x8003ddb0 */
    var_a0 = var_a0 & 0xffff; /* 0x8003ddb4 */
    var_a1 = var_a1 >> 0x1f; /* 0x8003ddb8 */
    var_v0 = var_a3 >> 0x5; /* 0x8003ddbc */
    var_a0 = var_a0 + var_v0; /* 0x8003ddc4 */
    var_v0 = var_t1 + var_v1; /* 0x8003ddcc */
    var_v0 = var_v0 >> 0x7; /* 0x8003ddd0 */
    var_v1 = var_v1 >> 0x1f; /* 0x8003ddd4 */
    var_a0 = var_a0 + var_v0; /* 0x8003dddc */
    var_v0 = 101; /* 0x8003dde0 */
    func_0x80078ac4(); /* 0x8003dde4 */
    var_v1 = var_v0 << 0x1; /* 0x8003ddec */
    var_v1 = var_v1 + var_v0; /* 0x8003ddf0 */
    var_v1 = var_v1 << 0x3; /* 0x8003ddf4 */
    var_v1 = var_v1 + var_v0; /* 0x8003ddf8 */
    var_v0 = var_v1 << 0x2; /* 0x8003ddfc */
    var_v0 = var_v0 + 32767; /* 0x8003de08 */
    var_v0 = var_v0 >> 0xf; /* 0x8003de0c */
    /* Branch bnez at 0x8003de14 */
    var_a0 = 0x22b6 << 16; /* 0x8003de18 */
    var_v1 = var_s7 & 0xffff; /* 0x8003de1c */
    var_v0 = 32; /* 0x8003de20 */
    /* Branch beq at 0x8003de24 */
    /* Branch beqz at 0x8003de2c */
    var_v0 = 7; /* 0x8003de30 */
    /* Branch beq at 0x8003de34 */
    /* Branch beqz at 0x8003de3c */
    var_v0 = 16; /* 0x8003de40 */
    /* Branch beqz at 0x8003de44 */
    /* Branch bnez at 0x8003de4c */
    var_v0 = 0x801a << 16; /* 0x8003de50 */
    var_v0 = 4; /* 0x8003de54 */
    /* Branch beq at 0x8003de58 */
    var_a0 = 0x22b6 << 16; /* 0x8003de5c */
    var_a0 = var_a0 | 0x3cbf; /* 0x8003de64 */
    /* Branch beq at 0x8003de68 */
    /* Branch beqz at 0x8003de70 */
    var_v0 = 8; /* 0x8003de74 */
    /* Branch beq at 0x8003de78 */
    var_a0 = 0x22b6 << 16; /* 0x8003de7c */
    var_a0 = var_a0 | 0x3cbf; /* 0x8003de84 */
    var_v0 = 24; /* 0x8003de88 */
    /* Branch beq at 0x8003de8c */
    var_a0 = 0x22b6 << 16; /* 0x8003de90 */
    var_a0 = var_a0 | 0x3cbf; /* 0x8003de98 */
    var_v0 = 256; /* 0x8003de9c */
    /* Branch beq at 0x8003dea0 */
    /* Branch beqz at 0x8003dea8 */
    var_v0 = 96; /* 0x8003deac */
    /* Branch beq at 0x8003deb0 */
    /* Branch beqz at 0x8003deb8 */
    var_v0 = 64; /* 0x8003debc */
    /* Branch beq at 0x8003dec0 */
    var_a0 = 0x22b6 << 16; /* 0x8003dec4 */
    var_a0 = var_a0 | 0x3cbf; /* 0x8003decc */
    var_v0 = 128; /* 0x8003ded0 */
    /* Branch beq at 0x8003ded4 */
    var_a0 = 0x22b6 << 16; /* 0x8003ded8 */
    var_a0 = var_a0 | 0x3cbf; /* 0x8003dee0 */
    var_v0 = 1024; /* 0x8003dee4 */
    /* Branch beq at 0x8003dee8 */
    /* Branch beqz at 0x8003def0 */
    var_v0 = 512; /* 0x8003def4 */
    /* Branch beq at 0x8003def8 */
    var_a0 = 0x22b6 << 16; /* 0x8003defc */
    var_a0 = var_a0 | 0x3cbf; /* 0x8003df04 */
    var_v0 = 16384; /* 0x8003df08 */
    /* Branch beq at 0x8003df0c */
    var_a0 = 0x22b6 << 16; /* 0x8003df10 */
    var_a0 = var_a0 | 0x3cbf; /* 0x8003df18 */
    var_s2 = 0x801a << 16; /* 0x8003df1c */
    var_s0 = var_s2 + -28888; /* 0x8003df20 */
    var_v1 = *(int32_t*)(reg_s0 + 44); /* 0x8003df24 */
    var_v0 = var_v1 & 0x80; /* 0x8003df2c */
    /* Branch bnez at 0x8003df30 */
    var_v0 = 20; /* 0x8003df34 */
    var_a0 = var_zero; /* 0x8003df38 */
    var_v0 = 300; /* 0x8003df3c */
    *(int16_t*)(reg_s0 + 414) = var_v0; /* 0x8003df40 */
    var_v0 = var_v1 | 0x80; /* 0x8003df44 */
    *(int16_t*)(reg_s0 + 412) = var_zero; /* 0x8003df4c */
    *(int16_t*)(reg_s0 + 412) = var_v0; /* 0x8003df50 */
    var_v0 = 300; /* 0x8003df54 */
    *(int16_t*)(reg_s0 + 414) = var_v0; /* 0x8003df5c */
    var_v0 = 0x801a << 16; /* 0x8003df60 */
    var_a0 = var_v0 + -28888; /* 0x8003df64 */
    var_v1 = *(int32_t*)(reg_a0 + 44); /* 0x8003df68 */
    var_v0 = var_v1 & 0x18; /* 0x8003df70 */
    /* Branch bnez at 0x8003df74 */
    var_v0 = 75; /* 0x8003df78 */
    *(int16_t*)(reg_a0 + 406) = var_v0; /* 0x8003df7c */
    var_v0 = var_v1 | 0x8; /* 0x8003df84 */
    var_v0 = var_v1 & 0x8; /* 0x8003df88 */
    /* Branch beqz at 0x8003df8c */
    var_v0 = 75; /* 0x8003df90 */
    *(int16_t*)(reg_a0 + 406) = var_v0; /* 0x8003df94 */
    var_v0 = var_v1 | 0x10; /* 0x8003df98 */
    *(int16_t*)(reg_a0 + 404) = var_zero; /* 0x8003df9c */
    *(int32_t*)(reg_a0 + 44) = var_v0; /* 0x8003dfa4 */
    var_v0 = 20; /* 0x8003dfa8 */
    *(int16_t*)(reg_a0 + 404) = var_v0; /* 0x8003dfac */
    var_v0 = 75; /* 0x8003dfb0 */
    *(int16_t*)(reg_a0 + 406) = var_v0; /* 0x8003dfb8 */
    var_v0 = 0x801a << 16; /* 0x8003dfbc */
    var_v1 = var_v0 + -28888; /* 0x8003dfc0 */
    var_a0 = *(int32_t*)(reg_v1 + 44); /* 0x8003dfc4 */
    var_v0 = var_a0 & 0x60; /* 0x8003dfcc */
    /* Branch bnez at 0x8003dfd0 */
    var_v0 = 20; /* 0x8003dfd4 */
    var_v0 = 600; /* 0x8003dfd8 */
    *(int16_t*)(reg_v1 + 410) = var_v0; /* 0x8003dfdc */
    var_v0 = var_a0 | 0x60; /* 0x8003dfe0 */
    *(int16_t*)(reg_v1 + 408) = var_zero; /* 0x8003dfe4 */
    *(int32_t*)(reg_v1 + 44) = var_v0; /* 0x8003dfec */
    *(int16_t*)(reg_v1 + 408) = var_v0; /* 0x8003dff0 */
    var_v0 = 600; /* 0x8003dff4 */
    *(int16_t*)(reg_v1 + 410) = var_v0; /* 0x8003dffc */
    func_0x80078ac4(); /* 0x8003e000 */
    var_v0 = var_v0 + 255; /* 0x8003e010 */
    var_a0 = var_v0 >> 0x8; /* 0x8003e014 */
    func_0x8003cf28(); /* 0x8003e018 */
    var_a0 = 9; /* 0x8003e020 */
    func_0x800582f0(); /* 0x8003e024 */
    var_a0 = 0x22b6 << 16; /* 0x8003e030 */
    var_s2 = 0x801a << 16; /* 0x8003e034 */
    var_s0 = var_s2 + -28888; /* 0x8003e038 */
    var_v1 = *(int32_t*)(reg_s0 + 44); /* 0x8003e03c */
    var_v0 = var_v1 & 0x100; /* 0x8003e044 */
    /* Branch bnez at 0x8003e048 */
    var_v0 = 20; /* 0x8003e04c */
    var_a0 = var_zero; /* 0x8003e050 */
    var_v0 = 6000; /* 0x8003e054 */
    *(int16_t*)(reg_s0 + 418) = var_v0; /* 0x8003e058 */
    var_v0 = var_v1 | 0x100; /* 0x8003e05c */
    *(int16_t*)(reg_s0 + 416) = var_zero; /* 0x8003e060 */
    func_0x8005a3a8(); /* 0x8003e064 */
    var_v1 = *(uint16_t*)(reg_s2 + -28888); /* 0x8003e06c */
    var_v0 = *(uint16_t*)(reg_s0 + 2); /* 0x8003e070 */
    /* Branch beqz at 0x8003e07c */
    var_a0 = 0x22b6 << 16; /* 0x8003e080 */
    *(int16_t*)(reg_s0 + 2) = var_v1; /* 0x8003e088 */
    *(int16_t*)(reg_s0 + 416) = var_v0; /* 0x8003e08c */
    var_v0 = 6000; /* 0x8003e090 */
    *(int16_t*)(reg_s0 + 418) = var_v0; /* 0x8003e098 */
    var_v0 = 0x801a << 16; /* 0x8003e09c */
    var_a0 = var_v0 + -28888; /* 0x8003e0a0 */
    var_v1 = *(int32_t*)(reg_a0 + 44); /* 0x8003e0a4 */
    var_v0 = 0x10 << 16; /* 0x8003e0a8 */
    var_v0 = var_v1 & var_v0; /* 0x8003e0ac */
    /* Branch bnez at 0x8003e0b0 */
    var_v0 = var_v1 & 0x7; /* 0x8003e0b4 */
    /* Branch beqz at 0x8003e0b8 */
    var_v0 = 600; /* 0x8003e0bc */
    var_v0 = *(int16_t*)(reg_a0 + 400); /* 0x8003e0c0 */
    /* Branch bnez at 0x8003e0cc */
    var_v0 = *(int16_t*)(reg_a0 + 402); /* 0x8003e0d4 */
    /* Branch beqz at 0x8003e0dc */
    var_v0 = 20; /* 0x8003e0e0 */
    *(int16_t*)(reg_a0 + 400) = var_v0; /* 0x8003e0e4 */
    var_v0 = 600; /* 0x8003e0e8 */
    *(int16_t*)(reg_a0 + 402) = var_v0; /* 0x8003e0ec */
    var_v0 = var_v1 & 0x2; /* 0x8003e0f0 */
    /* Branch beqz at 0x8003e0f4 */
    var_v0 = var_v1 | 0x4; /* 0x8003e0f8 */
    *(int32_t*)(reg_a0 + 44) = var_v0; /* 0x8003e0fc */
    var_v1 = *(int32_t*)(reg_a0 + 44); /* 0x8003e100 */
    var_v0 = var_v1 & 0x1; /* 0x8003e108 */
    /* Branch beqz at 0x8003e10c */
    var_v0 = var_v1 | 0x2; /* 0x8003e110 */
    *(int32_t*)(reg_a0 + 44) = var_v0; /* 0x8003e118 */
    *(int16_t*)(reg_a0 + 402) = var_v0; /* 0x8003e11c */
    var_v0 = var_v1 | 0x1; /* 0x8003e120 */
    *(int16_t*)(reg_a0 + 400) = var_zero; /* 0x8003e124 */
    *(int32_t*)(reg_a0 + 44) = var_v0; /* 0x8003e12c */
    var_v0 = 0x801a << 16; /* 0x8003e130 */
    var_s0 = var_v0 + -28888; /* 0x8003e134 */
    var_a0 = *(int32_t*)(reg_s0 + 572); /* 0x8003e138 */
    var_v0 = 0xcccc << 16; /* 0x8003e13c */
    var_v0 = var_v0 | 0xcccd; /* 0x8003e140 */
    var_v0 = *(int32_t*)(reg_s0 + 44); /* 0x8003e148 */
    var_v0 = var_v0 | 0x400; /* 0x8003e150 */
    *(int32_t*)(reg_s0 + 44) = var_v0; /* 0x8003e154 */
    var_v1 = (uint32_t)var_t5 >> 0x5; /* 0x8003e15c */
    var_v0 = var_v1 << 0x2; /* 0x8003e160 */
    var_v0 = var_v0 + var_v1; /* 0x8003e164 */
    var_v0 = var_v0 << 0x3; /* 0x8003e168 */
    /* Branch bne at 0x8003e16c */
    var_v0 = 3500; /* 0x8003e170 */
    var_a0 = 7; /* 0x8003e174 */
    func_0x800582f0(); /* 0x8003e178 */
    var_v0 = 3500; /* 0x8003e180 */
    *(int16_t*)(reg_s0 + 730) = var_v0; /* 0x8003e184 */
    var_v0 = 128; /* 0x8003e188 */
    *(int16_t*)(reg_s0 + 732) = var_v0; /* 0x8003e190 */
    var_v0 = 0x801a << 16; /* 0x8003e194 */
    var_v0 = var_v0 + -28888; /* 0x8003e198 */
    var_v1 = 1; /* 0x8003e19c */
    *(int8_t*)(reg_v0 + 393) = var_zero; /* 0x8003e1a0 */
    *(int8_t*)(reg_v0 + 335) = var_v1; /* 0x8003e1a4 */
    var_a0 = 0x22b6 << 16; /* 0x8003e1a8 */
    var_a0 = var_a0 | 0x3cbf; /* 0x8003e1ac */
    var_v0 = 0x801a << 16; /* 0x8003e1b0 */
    var_t2 = var_v0 + -28888; /* 0x8003e1b4 */
    var_v0 = *(uint16_t*)(reg_t2 + 32); /* 0x8003e1b8 */
    var_v1 = 112; /* 0x8003e1bc */
    var_v0 = var_v1 << 0x1; /* 0x8003e1c4 */
    var_v0 = var_v0 + var_v1; /* 0x8003e1c8 */
    var_v0 = var_v0 << 0x3; /* 0x8003e1cc */
    var_v0 = var_v0 + var_v1; /* 0x8003e1d0 */
    var_v0 = var_v0 << 0x1; /* 0x8003e1d4 */
    var_a2 = 300; /* 0x8003e1dc */
    var_v0 = var_v0 >> 0x1f; /* 0x8003e1e0 */
    var_v1 = var_v1 >> 0x3; /* 0x8003e1e8 */
    var_v1 = var_v1 + 50; /* 0x8003e1f0 */
    var_a1 = 75; /* 0x8003e1fc */
    var_a3 = 0x51eb << 16; /* 0x8003e20c */
    var_a3 = var_a3 | 0x851f; /* 0x8003e210 */
    var_t1 = 600; /* 0x8003e22c */
    var_a0 = var_a0 >> 0x1f; /* 0x8003e238 */
    var_a1 = var_v0 >> 0x5; /* 0x8003e23c */
    var_v0 = *(uint8_t*)(reg_t2 + 456); /* 0x8003e244 */
    var_t0 = var_t0 >> 0x1f; /* 0x8003e270 */
    var_a0 = var_t3 >> 0x5; /* 0x8003e278 */
    var_v1 = var_v1 >> 0x1f; /* 0x8003e284 */
    var_a0 = var_t1 >> 0x5; /* 0x8003e28c */
    var_a2 = var_a2 >> 0x1f; /* 0x8003e2b8 */
    var_v1 = var_t4 >> 0x5; /* 0x8003e2bc */
    var_a1 = var_a1 >> 0x1f; /* 0x8003e2c4 */
    var_v1 = var_t0 >> 0x5; /* 0x8003e2c8 */
    var_v0 = var_v0 >> 0x1f; /* 0x8003e2d0 */
    var_v1 = var_a0 >> 0x5; /* 0x8003e2d8 */
    var_v0 = *(int16_t*)(reg_t2 + 414); /* 0x8003e2e0 */
    /* Branch beqz at 0x8003e2ec */
    var_v1 = var_t1; /* 0x8003e2f0 */
    *(int16_t*)(reg_t2 + 414) = var_a2; /* 0x8003e2f4 */
    var_v0 = *(int16_t*)(reg_t2 + 406); /* 0x8003e2f8 */
    /* Branch beqz at 0x8003e304 */
    *(int16_t*)(reg_t2 + 406) = var_a1; /* 0x8003e30c */
    var_v0 = *(int16_t*)(reg_t2 + 410); /* 0x8003e310 */
    /* Branch beqz at 0x8003e31c */
    *(int16_t*)(reg_t2 + 410) = var_t1; /* 0x8003e324 */
    var_v0 = *(int16_t*)(reg_t2 + 402); /* 0x8003e328 */
    /* Branch beqz at 0x8003e334 */
    var_v0 = 0x801a << 16; /* 0x8003e338 */
    *(int16_t*)(reg_t2 + 402) = var_v1; /* 0x8003e33c */
    var_v0 = 0x801a << 16; /* 0x8003e340 */
    var_a2 = var_v0 + -28888; /* 0x8003e344 */
    var_v0 = *(uint8_t*)(reg_a2 + 393); /* 0x8003e348 */
    /* Branch beqz at 0x8003e350 */
    var_v0 = 0xffff; /* 0x8003e354 */
    var_v1 = *(uint16_t*)(reg_a2 + 88); /* 0x8003e358 */
    /* Branch beq at 0x8003e360 */
    var_v0 = 0x801a << 16; /* 0x8003e364 */
    var_a0 = *(uint16_t*)(reg_a2 + 18); /* 0x8003e368 */
    var_v0 = *(uint16_t*)(reg_a2 + 22); /* 0x8003e36c */
    var_t0 = var_a0 + var_v0; /* 0x8003e374 */
    var_v0 = var_v1 << 0x1; /* 0x8003e378 */
    var_v0 = var_v0 + var_v1; /* 0x8003e37c */
    var_v0 = var_v0 << 0x2; /* 0x8003e380 */
    var_v0 = var_v0 << 0x2; /* 0x8003e388 */
    var_v1 = 0x801c << 16; /* 0x8003e38c */
    var_v1 = var_v1 + 30736; /* 0x8003e390 */
    var_a1 = var_v0 + var_v1; /* 0x8003e394 */
    var_a0 = *(uint16_t*)(reg_a2 + 20); /* 0x8003e398 */
    var_v1 = *(uint16_t*)(reg_a2 + 24); /* 0x8003e39c */
    var_v0 = *(uint8_t*)(reg_a1 + 34); /* 0x8003e3a0 */
    /* Branch bnez at 0x8003e3ac */
    var_t2 = var_a0 + var_v1; /* 0x8003e3b0 */
    var_v0 = *(uint8_t*)(reg_a1 + 35); /* 0x8003e3b4 */
    var_v1 = *(uint8_t*)(reg_a1 + 34); /* 0x8003e3b8 */
    var_v0 = (uint32_t)var_v0 >> 0x1; /* 0x8003e3bc */
    var_v1 = var_v1 << 0x1; /* 0x8003e3c0 */
    var_v1 = var_sp + var_v1; /* 0x8003e3c4 */
    *(int16_t*)(reg_v1 + -2) = var_v0; /* 0x8003e3cc */
    var_v0 = 0x801a << 16; /* 0x8003e3d0 */
    var_v0 = var_v0 + -28888; /* 0x8003e3d4 */
    var_t0 = *(uint16_t*)(reg_v0 + 18); /* 0x8003e3d8 */
    var_t2 = *(uint16_t*)(reg_v0 + 20); /* 0x8003e3dc */
    var_a0 = var_t0 & 0xffff; /* 0x8003e3e0 */
    /* Branch beqz at 0x8003e3e4 */
    var_a3 = 1; /* 0x8003e3e8 */
    var_a3 = var_a0; /* 0x8003e3ec */
    var_a2 = var_zero; /* 0x8003e3f0 */
    var_t0 = 650; /* 0x8003e3f4 */
    var_v0 = *(uint16_t*)(reg_s1 + 0); /* 0x8003e3f8 */
    /* Branch beqz at 0x8003e400 */
    var_a1 = var_v0; /* 0x8003e404 */
    var_v0 = var_a1 << 0x7; /* 0x8003e410 */
    var_v0 = var_v0 << 0x4; /* 0x8003e418 */
    var_v0 = var_v0 << 0x2; /* 0x8003e420 */
    var_v0 = var_v0 + var_a1; /* 0x8003e428 */
    var_v0 = var_v0 << 0x2; /* 0x8003e42c */
    /* Branch bnez at 0x8003e434 */
    var_at = -1; /* 0x8003e440 */
    /* Branch bne at 0x8003e444 */
    var_at = 0x8000 << 16; /* 0x8003e448 */
    /* Branch bne at 0x8003e44c */
    var_s6 = var_s6 + var_v0; /* 0x8003e460 */
    var_a2 = var_a2 + 1; /* 0x8003e464 */
    /* Branch bnez at 0x8003e46c */
    var_s1 = var_s1 + 2; /* 0x8003e470 */
    var_a2 = var_zero; /* 0x8003e474 */
    var_v0 = 0x801a << 16; /* 0x8003e478 */
    var_t0 = var_v0 + -28888; /* 0x8003e47c */
    var_t1 = 2; /* 0x8003e480 */
    var_a0 = var_t2 & 0xffff; /* 0x8003e484 */
    var_v0 = *(uint16_t*)(reg_s1 + 0); /* 0x8003e488 */
    /* Branch beqz at 0x8003e490 */
    var_a1 = var_v0; /* 0x8003e494 */
    var_v0 = *(int32_t*)(reg_t0 + 44); /* 0x8003e498 */
    var_v1 = 0x8 << 16; /* 0x8003e49c */
    var_v0 = var_v0 & var_v1; /* 0x8003e4a0 */
    /* Branch beqz at 0x8003e4a4 */
    /* Branch bnez at 0x8003e4ac */
    var_a1 = var_a1 >> 0x2; /* 0x8003e4b4 */
    var_v0 = *(int32_t*)(reg_t0 + 44); /* 0x8003e4b8 */
    var_v1 = 0x80 << 16; /* 0x8003e4bc */
    var_v0 = var_v0 & var_v1; /* 0x8003e4c0 */
    /* Branch beqz at 0x8003e4c4 */
    var_v0 = 3; /* 0x8003e4c8 */
    /* Branch bne at 0x8003e4cc */
    var_a1 = var_a1 >> 0x2; /* 0x8003e4d4 */
    var_v0 = *(int32_t*)(reg_t0 + 44); /* 0x8003e4d8 */
    var_v1 = 0x10 << 16; /* 0x8003e4dc */
    var_v0 = var_v0 & var_v1; /* 0x8003e4e0 */
    /* Branch beqz at 0x8003e4e4 */
    /* Branch beq at 0x8003e4ec */
    var_v0 = *(uint16_t*)(reg_s3 + 0); /* 0x8003e4f4 */
    var_v1 = *(uint16_t*)(reg_s4 + 0); /* 0x8003e4f8 */
    var_v0 = var_a0 + var_v0; /* 0x8003e4fc */
    var_a3 = var_v0 + var_v1; /* 0x8003e500 */
    /* Branch bnez at 0x8003e504 */
    var_v0 = 650; /* 0x8003e508 */
    var_a3 = 1; /* 0x8003e50c */
    var_v0 = var_a1 << 0x7; /* 0x8003e518 */
    var_v0 = var_v0 << 0x4; /* 0x8003e520 */
    var_v0 = var_v0 << 0x2; /* 0x8003e528 */
    var_v0 = var_v0 + var_a1; /* 0x8003e530 */
    var_v0 = var_v0 << 0x2; /* 0x8003e534 */
    /* Branch bnez at 0x8003e53c */
    var_at = -1; /* 0x8003e548 */
    /* Branch bne at 0x8003e54c */
    var_at = 0x8000 << 16; /* 0x8003e550 */
    /* Branch bne at 0x8003e554 */
    /* Branch beq at 0x8003e564 */
    /* Branch bnez at 0x8003e56c */
    var_v1 = 1; /* 0x8003e574 */
    var_s5 = var_s5 + var_v1; /* 0x8003e578 */
    var_a2 = var_a2 + 1; /* 0x8003e57c */
    var_s1 = var_s1 + 2; /* 0x8003e580 */
    var_s3 = var_s3 + 2; /* 0x8003e584 */
    /* Branch bnez at 0x8003e58c */
    var_s4 = var_s4 + 2; /* 0x8003e590 */
    var_v1 = var_s6 + var_s5; /* 0x8003e594 */
    var_v0 = var_s8 & 0xffff; /* 0x8003e598 */
    var_a1 = var_s7 & 0xffff; /* 0x8003e5a0 */
    var_a2 = *(int32_t*)(stack + 84); /* 0x8003e5a4 */
    func_0x8003d788(); /* 0x8003e5ac */
    var_ra = *(int32_t*)(stack + 68); /* 0x8003e5b4 */
    var_s8 = *(int32_t*)(stack + 64); /* 0x8003e5b8 */
    var_s7 = *(int32_t*)(stack + 60); /* 0x8003e5bc */
    var_s6 = *(int32_t*)(stack + 56); /* 0x8003e5c0 */
    var_s5 = *(int32_t*)(stack + 52); /* 0x8003e5c4 */
    var_s4 = *(int32_t*)(stack + 48); /* 0x8003e5c8 */
    var_s3 = *(int32_t*)(stack + 44); /* 0x8003e5cc */
    var_s2 = *(int32_t*)(stack + 40); /* 0x8003e5d0 */
    var_s1 = *(int32_t*)(stack + 36); /* 0x8003e5d4 */
    var_s0 = *(int32_t*)(stack + 32); /* 0x8003e5d8 */
    var_sp = var_sp + 72; /* 0x8003e5dc */
    return; /* 0x8003e5e0 */
}

/* Function at 0x8003e5e4 */
void func_0x8003e5e4() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_at;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -48; /* 0x8003e5e8 */
    var_v1 = *(int32_t*)(stack + 68); /* 0x8003e5ec */
    *(int32_t*)(stack + 40) = var_s4; /* 0x8003e5f0 */
    var_s4 = var_a0; /* 0x8003e5f4 */
    *(int32_t*)(stack + 24) = var_s0; /* 0x8003e5f8 */
    var_s0 = var_a2; /* 0x8003e5fc */
    *(int32_t*)(stack + 36) = var_s3; /* 0x8003e600 */
    var_s3 = var_a3; /* 0x8003e604 */
    *(int32_t*)(stack + 32) = var_s2; /* 0x8003e608 */
    var_s2 = var_a1; /* 0x8003e60c */
    *(int32_t*)(stack + 28) = var_s1; /* 0x8003e610 */
    var_s1 = *(int32_t*)(stack + 64); /* 0x8003e614 */
    var_v0 = 0x8000; /* 0x8003e618 */
    /* Branch bne at 0x8003e61c */
    *(int32_t*)(stack + 44) = var_ra; /* 0x8003e620 */
    var_v0 = 1000; /* 0x8003e624 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003e628 */
    var_a0 = var_s0; /* 0x8003e62c */
    var_a1 = var_s1; /* 0x8003e630 */
    var_a2 = 0x801a << 16; /* 0x8003e634 */
    var_a2 = var_a2 + -28304; /* 0x8003e63c */
    var_v0 = 0x8001; /* 0x8003e640 */
    /* Branch bne at 0x8003e644 */
    var_v0 = 0x801a << 16; /* 0x8003e648 */
    var_a2 = var_v0 + -28888; /* 0x8003e64c */
    var_v1 = *(int32_t*)(reg_a2 + 588); /* 0x8003e650 */
    var_v0 = *(int32_t*)(reg_s0 + 4); /* 0x8003e654 */
    /* Branch bnez at 0x8003e660 */
    var_v1 = 0xff67 << 16; /* 0x8003e664 */
    var_v0 = 1000; /* 0x8003e668 */
    *(int32_t*)(stack + 16) = var_v0; /* 0x8003e66c */
    var_a0 = var_s0; /* 0x8003e670 */
    var_a1 = var_s1; /* 0x8003e674 */
    var_a2 = var_a2 + 584; /* 0x8003e678 */
    func_0x8004a67c(); /* 0x8003e67c */
    var_v1 = var_v0; /* 0x8003e688 */
    *(int32_t*)(stack + 16) = var_v1; /* 0x8003e68c */
    var_a0 = *(int32_t*)(reg_s0 + 0); /* 0x8003e690 */
    var_a1 = *(int32_t*)(reg_s0 + 4); /* 0x8003e694 */
    var_a2 = *(int32_t*)(reg_s0 + 8); /* 0x8003e698 */
    func_0x8003ebfc(); /* 0x8003e69c */
    var_v1 = var_v0; /* 0x8003e6a4 */
    var_v0 = -1; /* 0x8003e6a8 */
    /* Branch bne at 0x8003e6ac */
    var_v1 = 0xff67 << 16; /* 0x8003e6b4 */
    var_v1 = var_v1 | 0x6981; /* 0x8003e6b8 */
    /* Branch bnez at 0x8003e6c0 */
    var_v0 = var_v1 << 0xc; /* 0x8003e6c4 */
    /* Branch bnez at 0x8003e6cc */
    var_at = -1; /* 0x8003e6d8 */
    /* Branch bne at 0x8003e6dc */
    var_at = 0x8000 << 16; /* 0x8003e6e0 */
    /* Branch bne at 0x8003e6e4 */
    var_a0 = var_s4; /* 0x8003e6f4 */
    var_a2 = var_s2 & 0xffff; /* 0x8003e6f8 */
    var_a3 = var_s0; /* 0x8003e6fc */
    var_a1 = 4096; /* 0x8003e700 */
    func_0x8003dbe0(); /* 0x8003e708 */
    var_ra = *(int32_t*)(stack + 44); /* 0x8003e710 */
    var_s4 = *(int32_t*)(stack + 40); /* 0x8003e714 */
    var_s3 = *(int32_t*)(stack + 36); /* 0x8003e718 */
    var_s2 = *(int32_t*)(stack + 32); /* 0x8003e71c */
    var_s1 = *(int32_t*)(stack + 28); /* 0x8003e720 */
    var_s0 = *(int32_t*)(stack + 24); /* 0x8003e724 */
    var_sp = var_sp + 48; /* 0x8003e728 */
    return; /* 0x8003e72c */
}

/* Function at 0x8003e730 */
void func_0x8003e730() {
    /* Local variables */
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_v0;
    int32_t var_v1;

    var_v1 = 0x801a << 16; /* 0x8003e734 */
    var_v1 = var_v1 + -28888; /* 0x8003e738 */
    var_v0 = *(int32_t*)(reg_v1 + 584); /* 0x8003e73c */
    *(int32_t*)(reg_a0 + 0) = var_v0; /* 0x8003e744 */
    var_v0 = *(int32_t*)(reg_v1 + 592); /* 0x8003e748 */
    *(int32_t*)(reg_a0 + 8) = var_v0; /* 0x8003e750 */
    var_a3 = *(int16_t*)(reg_v1 + 718); /* 0x8003e754 */
    var_v0 = *(int32_t*)(reg_v1 + 588); /* 0x8003e758 */
    var_a2 = *(int16_t*)(reg_v1 + 722); /* 0x8003e75c */
    var_v0 = var_v0 + var_a3; /* 0x8003e760 */
    var_v0 = var_v0 + var_a2; /* 0x8003e764 */
    var_v0 = var_v0 + -1600; /* 0x8003e768 */
    *(int32_t*)(reg_a0 + 4) = var_v0; /* 0x8003e76c */
    var_v0 = *(uint16_t*)(reg_v1 + 616); /* 0x8003e770 */
    *(int16_t*)(reg_a1 + 0) = var_v0; /* 0x8003e778 */
    var_v0 = *(uint16_t*)(reg_v1 + 618); /* 0x8003e77c */
    *(int16_t*)(reg_a1 + 2) = var_v0; /* 0x8003e784 */
    var_v0 = *(uint16_t*)(reg_v1 + 620); /* 0x8003e788 */
    return; /* 0x8003e78c */
}

/* Function at 0x8003e790 */
void func_0x8003e790() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    *(int16_t*)(reg_a1 + 4) = var_v0; /* 0x8003e790 */
    var_v1 = 0x801a << 16; /* 0x8003e794 */
    var_v0 = var_v1 + -28888; /* 0x8003e798 */
    var_v1 = *(uint16_t*)(reg_v1 + -28888); /* 0x8003e79c */
    var_sp = var_sp + -24; /* 0x8003e7a0 */
    *(int32_t*)(stack + 16) = var_ra; /* 0x8003e7a4 */
    var_a0 = *(uint16_t*)(reg_v0 + 4); /* 0x8003e7a8 */
    *(int16_t*)(reg_v0 + 450) = var_zero; /* 0x8003e7ac */
    *(int16_t*)(reg_v0 + 448) = var_zero; /* 0x8003e7b0 */
    *(int16_t*)(reg_v0 + 446) = var_zero; /* 0x8003e7b4 */
    *(int16_t*)(reg_v0 + 444) = var_zero; /* 0x8003e7b8 */
    *(int16_t*)(reg_v0 + 442) = var_zero; /* 0x8003e7bc */
    *(int16_t*)(reg_v0 + 440) = var_zero; /* 0x8003e7c0 */
    *(int16_t*)(reg_v0 + 438) = var_zero; /* 0x8003e7c4 */
    *(int16_t*)(reg_v0 + 436) = var_zero; /* 0x8003e7c8 */
    *(int16_t*)(reg_v0 + 434) = var_zero; /* 0x8003e7cc */
    *(int16_t*)(reg_v0 + 432) = var_zero; /* 0x8003e7d0 */
    *(int16_t*)(reg_v0 + 430) = var_zero; /* 0x8003e7d4 */
    *(int16_t*)(reg_v0 + 428) = var_zero; /* 0x8003e7d8 */
    *(int16_t*)(reg_v0 + 426) = var_zero; /* 0x8003e7dc */
    *(int16_t*)(reg_v0 + 424) = var_zero; /* 0x8003e7e0 */
    *(int16_t*)(reg_v0 + 422) = var_zero; /* 0x8003e7e4 */
    *(int16_t*)(reg_v0 + 420) = var_zero; /* 0x8003e7e8 */
    *(int16_t*)(reg_v0 + 418) = var_zero; /* 0x8003e7ec */
    *(int16_t*)(reg_v0 + 416) = var_zero; /* 0x8003e7f0 */
    *(int16_t*)(reg_v0 + 414) = var_zero; /* 0x8003e7f4 */
    *(int16_t*)(reg_v0 + 412) = var_zero; /* 0x8003e7f8 */
    *(int16_t*)(reg_v0 + 410) = var_zero; /* 0x8003e7fc */
    *(int16_t*)(reg_v0 + 408) = var_zero; /* 0x8003e800 */
    *(int16_t*)(reg_v0 + 406) = var_zero; /* 0x8003e804 */
    *(int16_t*)(reg_v0 + 404) = var_zero; /* 0x8003e808 */
    *(int16_t*)(reg_v0 + 402) = var_zero; /* 0x8003e80c */
    *(int16_t*)(reg_v0 + 400) = var_zero; /* 0x8003e810 */
    *(int8_t*)(reg_v0 + 568) = var_zero; /* 0x8003e814 */
    *(int16_t*)(reg_v0 + 394) = var_v1; /* 0x8003e818 */
    *(int16_t*)(reg_v0 + 2) = var_v1; /* 0x8003e81c */
    *(int16_t*)(reg_v0 + 396) = var_a0; /* 0x8003e820 */
    *(int16_t*)(reg_v0 + 6) = var_a0; /* 0x8003e824 */
    func_0x8003c054(); /* 0x8003e828 */
    var_ra = *(int32_t*)(stack + 16); /* 0x8003e830 */
    var_sp = var_sp + 24; /* 0x8003e834 */
    return; /* 0x8003e838 */
}

/* Function at 0x8003e83c */
void func_0x8003e83c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_v0;
    int32_t var_v1;

    var_a1 = var_zero; /* 0x8003e840 */
    var_v0 = 0x801a << 16; /* 0x8003e844 */
    var_v1 = var_v0 + -28888; /* 0x8003e848 */
    var_a0 = var_v1; /* 0x8003e84c */
    *(int32_t*)(reg_a0 + 492) = var_zero; /* 0x8003e850 */
    *(int16_t*)(reg_v1 + 524) = var_zero; /* 0x8003e854 */
    var_v1 = var_v1 + 2; /* 0x8003e858 */
    var_a1 = var_a1 + 1; /* 0x8003e85c */
    /* Branch bnez at 0x8003e864 */
    var_a0 = var_a0 + 4; /* 0x8003e868 */
    return; /* 0x8003e86c */
}

/* Function at 0x8003e870 */
void func_0x8003e870() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -32; /* 0x8003e874 */
    *(int32_t*)(stack + 24) = var_ra; /* 0x8003e878 */
    *(int32_t*)(stack + 20) = var_s1; /* 0x8003e87c */
    func_0x8003cae4(); /* 0x8003e880 */
    var_a0 = 0xffff; /* 0x8003e888 */
    var_a1 = var_zero; /* 0x8003e88c */
    var_s0 = 0x801a << 16; /* 0x8003e890 */
    var_s0 = var_s0 + -28888; /* 0x8003e894 */
    var_v0 = 2048; /* 0x8003e898 */
    *(int32_t*)(reg_s0 + 580) = var_v0; /* 0x8003e89c */
    var_v0 = 2; /* 0x8003e8a0 */
    *(int32_t*)(reg_s0 + 52) = var_zero; /* 0x8003e8a4 */
    *(int16_t*)(reg_s0 + 732) = var_zero; /* 0x8003e8a8 */
    *(int16_t*)(reg_s0 + 730) = var_zero; /* 0x8003e8ac */
    *(int16_t*)(reg_s0 + 728) = var_zero; /* 0x8003e8b0 */
    *(int16_t*)(reg_s0 + 726) = var_zero; /* 0x8003e8b4 */
    *(int8_t*)(reg_s0 + 390) = var_v0; /* 0x8003e8b8 */
    *(int8_t*)(reg_s0 + 350) = var_zero; /* 0x8003e8bc */
    *(int8_t*)(reg_s0 + 484) = var_zero; /* 0x8003e8c0 */
    *(int8_t*)(reg_s0 + 542) = var_zero; /* 0x8003e8c4 */
    *(int8_t*)(reg_s0 + 539) = var_zero; /* 0x8003e8c8 */
    *(int8_t*)(reg_s0 + 538) = var_zero; /* 0x8003e8cc */
    *(int8_t*)(reg_s0 + 537) = var_zero; /* 0x8003e8d0 */
    *(int32_t*)(reg_s0 + 284) = var_zero; /* 0x8003e8d4 */
    func_0x8003ee38(); /* 0x8003e8d8 */
    var_a0 = 0xffff; /* 0x8003e8e0 */
    func_0x8003ee38(); /* 0x8003e8e4 */
    var_a0 = 0xffff; /* 0x8003e8ec */
    var_a1 = var_zero; /* 0x8003e8f0 */
    var_a2 = var_a1; /* 0x8003e8f4 */
    *(int32_t*)(reg_s0 + 244) = var_zero; /* 0x8003e8f8 */
    *(int32_t*)(reg_s0 + 240) = var_zero; /* 0x8003e8fc */
    *(int32_t*)(reg_s0 + 236) = var_zero; /* 0x8003e900 */
    func_0x8003f12c(); /* 0x8003e904 */
    var_a0 = 0xffff; /* 0x8003e90c */
    var_a1 = 1; /* 0x8003e910 */
    func_0x8003f12c(); /* 0x8003e914 */
    var_a0 = 0xffff; /* 0x8003e91c */
    var_a1 = 2; /* 0x8003e920 */
    func_0x8003f12c(); /* 0x8003e924 */
    var_a0 = 0xffff; /* 0x8003e92c */
    var_a1 = 3; /* 0x8003e930 */
    func_0x8003f12c(); /* 0x8003e934 */
    var_a0 = var_zero; /* 0x8003e93c */
    var_a1 = var_a0; /* 0x8003e940 */
    var_a2 = var_a0; /* 0x8003e944 */
    var_v0 = 24; /* 0x8003e948 */
    *(int8_t*)(reg_s0 + 468) = var_v0; /* 0x8003e94c */
    var_v0 = 25; /* 0x8003e950 */
    *(int8_t*)(reg_s0 + 469) = var_v0; /* 0x8003e954 */
    var_v0 = 26; /* 0x8003e958 */
    *(int8_t*)(reg_s0 + 470) = var_v0; /* 0x8003e95c */
    var_v0 = 27; /* 0x8003e960 */
    *(int8_t*)(reg_s0 + 471) = var_v0; /* 0x8003e964 */
    func_0x8003f12c(); /* 0x8003e968 */
    func_0x80055990(); /* 0x8003e970 */
    *(int16_t*)(reg_s0 + 40) = var_zero; /* 0x8003e978 */
    *(int8_t*)(reg_s0 + 51) = var_zero; /* 0x8003e97c */
    *(int32_t*)(reg_s0 + 52) = var_zero; /* 0x8003e980 */
    func_0x8003cedc(); /* 0x8003e984 */
    var_a0 = 0x3 << 16; /* 0x8003e98c */
    var_a0 = var_a0 | 0xd000; /* 0x8003e990 */
    var_v1 = 0x4 << 16; /* 0x8003e994 */
    var_v1 = var_v1 | 0x5c0; /* 0x8003e998 */
    var_v0 = 0x3 << 16; /* 0x8003e99c */
    var_v0 = var_v0 | 0xf000; /* 0x8003e9a0 */
    *(int16_t*)(reg_s0 + 632) = var_zero; /* 0x8003e9a4 */
    *(int16_t*)(reg_s0 + 634) = var_s1; /* 0x8003e9a8 */
    *(int16_t*)(reg_s0 + 636) = var_zero; /* 0x8003e9ac */
    *(int32_t*)(reg_s0 + 584) = var_a0; /* 0x8003e9b0 */
    *(int32_t*)(reg_s0 + 588) = var_v1; /* 0x8003e9b4 */
    *(int32_t*)(reg_s0 + 592) = var_v0; /* 0x8003e9b8 */
    *(int16_t*)(reg_s0 + 464) = var_zero; /* 0x8003e9bc */
    *(int16_t*)(reg_s0 + 462) = var_zero; /* 0x8003e9c0 */
    func_0x8003e794(); /* 0x8003e9c4 */
    func_0x800595d4(); /* 0x8003e9cc */
    var_v0 = 61; /* 0x8003e9d4 */
    *(int8_t*)(reg_s0 + 557) = var_v0; /* 0x8003e9d8 */
    var_v0 = 64; /* 0x8003e9dc */
    *(int8_t*)(reg_s0 + 558) = var_v0; /* 0x8003e9e0 */
    var_v0 = 63; /* 0x8003e9e4 */
    *(int8_t*)(reg_s0 + 559) = var_v0; /* 0x8003e9e8 */
    var_v0 = 1472; /* 0x8003e9ec */
    *(int8_t*)(reg_s0 + 556) = var_zero; /* 0x8003e9f0 */
    *(int16_t*)(reg_s0 + 560) = var_zero; /* 0x8003e9f4 */
    *(int16_t*)(reg_s0 + 562) = var_v0; /* 0x8003e9f8 */
    *(int16_t*)(reg_s0 + 564) = var_zero; /* 0x8003e9fc */
    func_0x8003e840(); /* 0x8003ea00 */
    var_ra = *(int32_t*)(stack + 24); /* 0x8003ea08 */
    var_s1 = *(int32_t*)(stack + 20); /* 0x8003ea0c */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003ea10 */
    var_sp = var_sp + 32; /* 0x8003ea14 */
    return; /* 0x8003ea18 */
}

/* Function at 0x8003ea1c */
void func_0x8003ea1c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -24; /* 0x8003ea20 */
    *(int32_t*)(stack + 16) = var_s0; /* 0x8003ea24 */
    var_s0 = 0x801a << 16; /* 0x8003ea28 */
    var_s0 = var_s0 + -28888; /* 0x8003ea2c */
    var_v0 = 0x8019 << 16; /* 0x8003ea30 */
    var_v0 = var_v0 + 3880; /* 0x8003ea34 */
    *(int32_t*)(stack + 20) = var_ra; /* 0x8003ea38 */
    *(int32_t*)(reg_s0 + 288) = var_v0; /* 0x8003ea3c */
    var_v0 = var_v0 + 16384; /* 0x8003ea40 */
    *(int32_t*)(reg_s0 + 292) = var_v0; /* 0x8003ea44 */
    var_v0 = 0x801a << 16; /* 0x8003ea48 */
    var_v0 = var_v0 + -28128; /* 0x8003ea4c */
    *(int32_t*)(reg_s0 + 248) = var_v0; /* 0x8003ea50 */
    var_v0 = var_v0 + 28672; /* 0x8003ea54 */
    *(int32_t*)(reg_s0 + 252) = var_v0; /* 0x8003ea58 */
    var_v0 = 0x801a << 16; /* 0x8003ea5c */
    var_v0 = var_v0 + 29216; /* 0x8003ea60 */
    *(int32_t*)(reg_s0 + 256) = var_v0; /* 0x8003ea64 */
    var_v0 = 0x801b << 16; /* 0x8003ea68 */
    var_v0 = var_v0 + -7648; /* 0x8003ea6c */
    func_0x8003e874(); /* 0x8003ea70 */
    var_a0 = 0x801d << 16; /* 0x8003ea78 */
    var_v1 = var_a0 + -12000; /* 0x8003ea7c */
    var_v0 = 63; /* 0x8003ea80 */
    *(int8_t*)(reg_v1 + 1) = var_v0; /* 0x8003ea84 */
    *(int8_t*)(reg_a0 + -12000) = var_v0; /* 0x8003ea88 */
    var_v0 = 1; /* 0x8003ea8c */
    *(int8_t*)(reg_v1 + 3) = var_v0; /* 0x8003ea90 */
    *(int8_t*)(reg_v1 + 2) = var_v0; /* 0x8003ea94 */
    *(int8_t*)(reg_v1 + 4) = var_v0; /* 0x8003ea98 */
    *(int8_t*)(reg_v1 + 5) = var_v0; /* 0x8003ea9c */
    var_v0 = 5; /* 0x8003eaa0 */
    *(int8_t*)(reg_v1 + 6) = var_v0; /* 0x8003eaa4 */
    var_v0 = 30; /* 0x8003eaa8 */
    *(int8_t*)(reg_v1 + 7) = var_v0; /* 0x8003eaac */
    var_v0 = 20; /* 0x8003eab0 */
    *(int8_t*)(reg_v1 + 8) = var_v0; /* 0x8003eab4 */
    *(int8_t*)(reg_s0 + 540) = var_zero; /* 0x8003eab8 */
    var_ra = *(int32_t*)(stack + 20); /* 0x8003eabc */
    var_s0 = *(int32_t*)(stack + 16); /* 0x8003eac0 */
    var_sp = var_sp + 24; /* 0x8003eac4 */
    return; /* 0x8003eac8 */
}

/* Function at 0x8003eacc */
void func_0x8003eacc() {
    /* Local variables */
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x801a << 16; /* 0x8003ead0 */
    var_v0 = var_v0 + -28888; /* 0x8003ead4 */
    var_v1 = 1; /* 0x8003ead8 */
    *(int32_t*)(reg_v0 + 740) = var_zero; /* 0x8003eadc */
    *(int32_t*)(reg_v0 + 744) = var_zero; /* 0x8003eae0 */
    *(int16_t*)(reg_v0 + 714) = var_zero; /* 0x8003eae4 */
    *(int16_t*)(reg_v0 + 716) = var_zero; /* 0x8003eae8 */
    *(int16_t*)(reg_v0 + 712) = var_zero; /* 0x8003eaec */
    return; /* 0x8003eaf0 */
}

/* Function at 0x8003eaf4 */
void func_0x8003eaf4() {
    /* Local variables */
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    *(int8_t*)(reg_v0 + 542) = var_v1; /* 0x8003eaf4 */
    var_sp = var_sp + -24; /* 0x8003eaf8 */
    var_v0 = 0x801a << 16; /* 0x8003eafc */
    var_v0 = var_v0 + -28888; /* 0x8003eb00 */
    var_v1 = 1; /* 0x8003eb04 */
    *(int32_t*)(stack + 16) = var_ra; /* 0x8003eb08 */
    *(int32_t*)(reg_v0 + 572) = var_zero; /* 0x8003eb0c */
    *(int8_t*)(reg_v0 + 540) = var_v1; /* 0x8003eb10 */
    *(int8_t*)(reg_v0 + 569) = var_zero; /* 0x8003eb14 */
    *(int16_t*)(reg_v0 + 724) = var_zero; /* 0x8003eb18 */
    func_0x8003ead0(); /* 0x8003eb1c */
    var_ra = *(int32_t*)(stack + 16); /* 0x8003eb24 */
    var_sp = var_sp + 24; /* 0x8003eb28 */
    return; /* 0x8003eb2c */
}

/* Function at 0x8003eb30 */
void func_0x8003eb30() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -48; /* 0x8003eb34 */
    *(int32_t*)(stack + 24) = var_s0; /* 0x8003eb38 */
    var_s0 = var_a0; /* 0x8003eb3c */
    *(int32_t*)(stack + 32) = var_s2; /* 0x8003eb40 */
    var_s2 = var_a1; /* 0x8003eb44 */
    var_v0 = var_a2; /* 0x8003eb48 */
    *(int32_t*)(stack + 36) = var_s3; /* 0x8003eb4c */
    var_s3 = var_a3; /* 0x8003eb50 */
    var_a1 = 0xffff; /* 0x8003eb54 */
    *(int32_t*)(stack + 40) = var_ra; /* 0x8003eb58 */
    *(int32_t*)(stack + 28) = var_s1; /* 0x8003eb5c */
    *(int32_t*)(stack + 16) = var_zero; /* 0x8003eb60 */
    var_a0 = *(int32_t*)(reg_s0 + 0); /* 0x8003eb64 */
    var_a2 = *(int32_t*)(reg_s0 + 8); /* 0x8003eb68 */
    func_0x8003ebfc(); /* 0x8003eb6c */
    var_s1 = var_v0; /* 0x8003eb74 */
    var_v0 = -1; /* 0x8003eb78 */
    /* Branch beq at 0x8003eb7c */
    var_v0 = 0x801a << 16; /* 0x8003eb80 */
    var_v0 = var_v0 + -28888; /* 0x8003eb84 */
    var_v1 = *(int32_t*)(reg_v0 + 584); /* 0x8003eb88 */
    var_a0 = *(int32_t*)(reg_s0 + 0); /* 0x8003eb8c */
    var_v0 = *(int32_t*)(reg_v0 + 592); /* 0x8003eb90 */
    var_a1 = *(int32_t*)(reg_s0 + 8); /* 0x8003eb94 */
    func_0x8004a1b4(); /* 0x8003eb9c */
    var_v1 = var_v0 & 0xfff; /* 0x8003eba8 */
    /* Branch bnez at 0x8003ebb0 */
    var_a0 = var_v1; /* 0x8003ebb4 */
    var_v0 = 4096; /* 0x8003ebb8 */
    var_v0 = var_a0 << 0x10; /* 0x8003ebc0 */
    var_v0 = var_v0 >> 0x10; /* 0x8003ebc4 */
    /* Branch beqz at 0x8003ebcc */
    var_v0 = var_s1; /* 0x8003ebd0 */
    var_s1 = -1; /* 0x8003ebd4 */
    var_v0 = var_s1; /* 0x8003ebd8 */
    var_ra = *(int32_t*)(stack + 40); /* 0x8003ebdc */
    var_s3 = *(int32_t*)(stack + 36); /* 0x8003ebe0 */
    var_s2 = *(int32_t*)(stack + 32); /* 0x8003ebe4 */
    var_s1 = *(int32_t*)(stack + 28); /* 0x8003ebe8 */
    var_s0 = *(int32_t*)(stack + 24); /* 0x8003ebec */
    var_sp = var_sp + 48; /* 0x8003ebf0 */
    return; /* 0x8003ebf4 */
}

/* Function at 0x8003ebf8 */
void func_0x8003ebf8() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_t2;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -40; /* 0x8003ebfc */
    var_t0 = var_a0; /* 0x8003ec00 */
    var_t1 = var_a1; /* 0x8003ec04 */
    var_t2 = var_a2; /* 0x8003ec08 */
    var_v0 = 1000; /* 0x8003ec0c */
    var_a0 = 0x801a << 16; /* 0x8003ec10 */
    var_a0 = var_a0 + -28304; /* 0x8003ec14 */
    var_a1 = var_t0; /* 0x8003ec18 */
    var_v1 = *(int32_t*)(stack + 56); /* 0x8003ec1c */
    var_a2 = var_t1; /* 0x8003ec20 */
    *(int32_t*)(stack + 16) = var_a3; /* 0x8003ec24 */
    var_a3 = var_t2; /* 0x8003ec28 */
    *(int32_t*)(stack + 32) = var_ra; /* 0x8003ec2c */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003ec30 */
    func_0x8004a580(); /* 0x8003ec34 */
    var_ra = *(int32_t*)(stack + 32); /* 0x8003ec3c */
    var_sp = var_sp + 40; /* 0x8003ec40 */
    return; /* 0x8003ec44 */
}

/* Function at 0x8003ec48 */
void func_0x8003ec48() {
    /* Local variables */
    int32_t var_v0;

    var_v0 = 1; /* 0x8003ec4c */
    *(int8_t*)(reg_a0 + 16) = var_v0; /* 0x8003ec50 */
    return; /* 0x8003ec54 */
}

/* Function at 0x8003ec58 */
void func_0x8003ec58() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_sp;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -88; /* 0x8003ec5c */
    *(int32_t*)(stack + 76) = var_s5; /* 0x8003ec60 */
    var_s5 = var_a0; /* 0x8003ec64 */
    *(int32_t*)(stack + 72) = var_s4; /* 0x8003ec68 */
    var_s4 = var_a1; /* 0x8003ec6c */
    *(int32_t*)(stack + 68) = var_s3; /* 0x8003ec70 */
    var_s3 = var_a2; /* 0x8003ec74 */
    *(int32_t*)(stack + 80) = var_s6; /* 0x8003ec78 */
    var_s6 = var_a3; /* 0x8003ec7c */
    *(int32_t*)(stack + 60) = var_s1; /* 0x8003ec80 */
    var_s1 = var_sp + 40; /* 0x8003ec84 */
    var_a0 = var_s1; /* 0x8003ec88 */
    var_a1 = var_zero; /* 0x8003ec8c */
    var_a2 = 4; /* 0x8003ec90 */
    *(int32_t*)(stack + 84) = var_ra; /* 0x8003ec94 */
    *(int32_t*)(stack + 64) = var_s2; /* 0x8003ec98 */
    func_0x80078ab4(); /* 0x8003ec9c */
    var_s0 = var_sp + 48; /* 0x8003eca4 */
    var_a0 = var_s0; /* 0x8003eca8 */
    var_a1 = var_zero; /* 0x8003ecac */
    func_0x80078ab4(); /* 0x8003ecb0 */
    var_s2 = var_s1; /* 0x8003ecb8 */
    /* Branch beqz at 0x8003ecbc */
    var_s1 = var_s0; /* 0x8003ecc0 */
    var_s2 = var_s3; /* 0x8003ecc4 */
    /* Branch beqz at 0x8003ecc8 */
    var_s0 = var_s5; /* 0x8003eccc */
    var_s1 = var_s4; /* 0x8003ecd0 */
    var_v1 = *(int32_t*)(reg_s0 + 0); /* 0x8003ecd4 */
    var_v0 = 16; /* 0x8003ecd8 */
    /* Branch bne at 0x8003ecdc */
    var_s0 = var_s0 + 4; /* 0x8003ece0 */
    var_v0 = *(int32_t*)(reg_s0 + 0); /* 0x8003ece4 */
    var_v0 = var_v0 & 0x8; /* 0x8003ecec */
    /* Branch beqz at 0x8003ecf0 */
    var_s0 = var_s0 + 4; /* 0x8003ecf4 */
    var_v0 = *(int32_t*)(reg_s0 + 4); /* 0x8003ecf8 */
    var_v1 = *(int32_t*)(reg_s0 + 0); /* 0x8003ecfc */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003ed00 */
    var_v0 = *(int32_t*)(reg_s0 + 8); /* 0x8003ed04 */
    var_s0 = var_s0 + 12; /* 0x8003ed08 */
    *(int32_t*)(stack + 16) = var_v1; /* 0x8003ed0c */
    /* Branch bnez at 0x8003ed10 */
    *(int32_t*)(stack + 24) = var_v0; /* 0x8003ed14 */
    var_v0 = *(uint16_t*)(stack + 20); /* 0x8003ed18 */
    var_v1 = *(uint16_t*)(reg_s2 + 0); /* 0x8003ed1c */
    var_v0 = var_v0 + var_v1; /* 0x8003ed24 */
    *(int16_t*)(stack + 32) = var_v0; /* 0x8003ed28 */
    var_v0 = *(uint16_t*)(stack + 22); /* 0x8003ed2c */
    var_v1 = *(uint16_t*)(reg_s2 + 2); /* 0x8003ed30 */
    var_v0 = var_v0 + var_v1; /* 0x8003ed38 */
    var_v0 = *(uint16_t*)(reg_s2 + 0); /* 0x8003ed3c */
    *(int16_t*)(stack + 32) = var_v0; /* 0x8003ed44 */
    var_v0 = *(uint16_t*)(reg_s2 + 2); /* 0x8003ed48 */
    *(int16_t*)(stack + 34) = var_v0; /* 0x8003ed50 */
    var_a0 = var_sp + 32; /* 0x8003ed54 */
    var_v0 = *(uint16_t*)(stack + 24); /* 0x8003ed58 */
    var_v1 = *(uint16_t*)(stack + 26); /* 0x8003ed5c */
    var_a1 = var_s0; /* 0x8003ed60 */
    *(int16_t*)(stack + 36) = var_v0; /* 0x8003ed64 */
    func_0x80079d0c(); /* 0x8003ed68 */
    var_v0 = *(int32_t*)(stack + 16); /* 0x8003ed70 */
    var_v0 = var_v0 + -12; /* 0x8003ed78 */
    var_s0 = var_s0 + var_v0; /* 0x8003ed7c */
    var_v0 = *(int32_t*)(reg_s0 + 4); /* 0x8003ed80 */
    var_v1 = *(int32_t*)(reg_s0 + 0); /* 0x8003ed84 */
    *(int32_t*)(stack + 20) = var_v0; /* 0x8003ed88 */
    var_v0 = *(int32_t*)(reg_s0 + 8); /* 0x8003ed8c */
    var_s0 = var_s0 + 12; /* 0x8003ed90 */
    *(int32_t*)(stack + 16) = var_v1; /* 0x8003ed94 */
    /* Branch bnez at 0x8003ed98 */
    *(int32_t*)(stack + 24) = var_v0; /* 0x8003ed9c */
    var_v0 = *(uint16_t*)(stack + 20); /* 0x8003eda0 */
    var_v1 = *(uint16_t*)(reg_s1 + 0); /* 0x8003eda4 */
    var_v0 = var_v0 + var_v1; /* 0x8003edac */
    *(int16_t*)(stack + 32) = var_v0; /* 0x8003edb0 */
    var_v0 = *(uint16_t*)(stack + 22); /* 0x8003edb4 */
    var_v1 = *(uint16_t*)(reg_s1 + 2); /* 0x8003edb8 */
    var_v0 = var_v0 + var_v1; /* 0x8003edc0 */
    var_v0 = *(uint16_t*)(reg_s1 + 0); /* 0x8003edc4 */
    *(int16_t*)(stack + 32) = var_v0; /* 0x8003edcc */
    var_v0 = *(uint16_t*)(reg_s1 + 2); /* 0x8003edd0 */
    *(int16_t*)(stack + 34) = var_v0; /* 0x8003edd8 */
    var_a0 = var_sp + 32; /* 0x8003eddc */
    var_v0 = *(uint16_t*)(stack + 24); /* 0x8003ede0 */
    var_v1 = *(uint16_t*)(stack + 26); /* 0x8003ede4 */
    var_a1 = var_s0; /* 0x8003ede8 */
    *(int16_t*)(stack + 36) = var_v0; /* 0x8003edec */
    func_0x80079d0c(); /* 0x8003edf0 */
    var_v0 = *(int32_t*)(stack + 16); /* 0x8003edf8 */
    var_v0 = var_v0 + -12; /* 0x8003ee00 */
    var_s0 = var_s0 + var_v0; /* 0x8003ee08 */
    var_ra = *(int32_t*)(stack + 84); /* 0x8003ee0c */
    var_s6 = *(int32_t*)(stack + 80); /* 0x8003ee10 */
    var_s5 = *(int32_t*)(stack + 76); /* 0x8003ee14 */
    var_s4 = *(int32_t*)(stack + 72); /* 0x8003ee18 */
    var_s3 = *(int32_t*)(stack + 68); /* 0x8003ee1c */
    var_s2 = *(int32_t*)(stack + 64); /* 0x8003ee20 */
    var_s1 = *(int32_t*)(stack + 60); /* 0x8003ee24 */
    var_s0 = *(int32_t*)(stack + 56); /* 0x8003ee28 */
    var_sp = var_sp + 88; /* 0x8003ee2c */
    return; /* 0x8003ee30 */
}

/* Function at 0x8003ee34 */
void func_0x8003ee34() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_s7;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -72; /* 0x8003ee38 */
    var_a3 = var_a0; /* 0x8003ee3c */
    *(int32_t*)(stack + 56) = var_s6; /* 0x8003ee40 */
    var_s6 = var_a1; /* 0x8003ee44 */
    *(int32_t*)(stack + 52) = var_s5; /* 0x8003ee48 */
    var_v0 = 0x8009 << 16; /* 0x8003ee4c */
    *(int32_t*)(stack + 64) = var_ra; /* 0x8003ee50 */
    *(int32_t*)(stack + 60) = var_s7; /* 0x8003ee54 */
    *(int32_t*)(stack + 48) = var_s4; /* 0x8003ee58 */
    *(int32_t*)(stack + 44) = var_s3; /* 0x8003ee5c */
    *(int32_t*)(stack + 40) = var_s2; /* 0x8003ee60 */
    *(int32_t*)(stack + 36) = var_s1; /* 0x8003ee64 */
    *(int32_t*)(stack + 32) = var_s0; /* 0x8003ee68 */
    var_a2 = var_v0 + -32724; /* 0x8003ee6c */
    var_v0 = 0x8009 << 16; /* 0x8003ee90 */
    var_a2 = var_v0 + -32716; /* 0x8003ee94 */
    var_v1 = var_a3 & 0xffff; /* 0x8003eeb8 */
    var_v0 = 0xffff; /* 0x8003eebc */
    /* Branch beq at 0x8003eec0 */
    var_s5 = 255; /* 0x8003eec4 */
    var_s5 = var_a3; /* 0x8003eec8 */
    var_v0 = 0x801a << 16; /* 0x8003eecc */
    var_v0 = var_v0 + -28888; /* 0x8003eed0 */
    var_a0 = var_s6 & 0xff; /* 0x8003eed4 */
    var_v0 = var_a0 + var_v0; /* 0x8003eed8 */
    var_v1 = *(uint8_t*)(reg_v0 + 332); /* 0x8003eedc */
    var_v0 = 255; /* 0x8003eee0 */
    /* Branch beq at 0x8003eee4 */
    var_v0 = 0x8019 << 16; /* 0x8003eee8 */
    var_v1 = var_v0 + -7400; /* 0x8003eeec */
    var_a1 = 127; /* 0x8003eef0 */
    var_a2 = 255; /* 0x8003eef4 */
    var_a3 = var_a0; /* 0x8003eef8 */
    var_t0 = -1; /* 0x8003eefc */
    var_a0 = var_v1 + 1; /* 0x8003ef00 */
    var_v0 = *(uint8_t*)(reg_v1 + 0); /* 0x8003ef04 */
    /* Branch beq at 0x8003ef0c */
    var_v0 = var_v0 & 0x20; /* 0x8003ef10 */
    /* Branch bne at 0x8003ef18 */
    var_v0 = *(uint8_t*)(reg_a0 + 0); /* 0x8003ef20 */
    /* Branch beqz at 0x8003ef2c */
    *(int8_t*)(reg_v1 + 0) = var_a2; /* 0x8003ef34 */
    var_v0 = *(uint8_t*)(reg_a0 + 0); /* 0x8003ef38 */
    var_v0 = var_v0 + 86; /* 0x8003ef40 */
    var_v0 = var_v0 & 0xff; /* 0x8003ef44 */
    /* Branch beqz at 0x8003ef4c */
    *(int8_t*)(reg_v1 + 0) = var_a2; /* 0x8003ef54 */
    var_a0 = var_a0 + 88; /* 0x8003ef58 */
    var_a1 = var_a1 + -1; /* 0x8003ef5c */
    /* Branch bne at 0x8003ef60 */
    var_v1 = var_v1 + 88; /* 0x8003ef64 */
    var_v0 = 0x801a << 16; /* 0x8003ef68 */
    var_a2 = var_v0 + -28888; /* 0x8003ef6c */
    var_s2 = var_s6 & 0xff; /* 0x8003ef70 */
    var_v0 = var_s2 + var_a2; /* 0x8003ef74 */
    *(int8_t*)(reg_v0 + 332) = var_s5; /* 0x8003ef78 */
    var_v1 = var_s5 & 0xff; /* 0x8003ef7c */
    var_v0 = 255; /* 0x8003ef80 */
    /* Branch beq at 0x8003ef84 */
    var_a0 = 1; /* 0x8003ef88 */
    var_a1 = var_v1 << 0x2; /* 0x8003ef8c */
    var_a1 = var_a1 + 740; /* 0x8003ef90 */
    var_s4 = var_s2 << 0x2; /* 0x8003ef94 */
    var_s0 = var_s4 + var_a2; /* 0x8003ef98 */
    var_v0 = var_v1 << 0x1; /* 0x8003ef9c */
    var_v0 = var_v0 + var_v1; /* 0x8003efa0 */
    var_v0 = var_v0 << 0x3; /* 0x8003efa4 */
    var_v1 = 0x8019 << 16; /* 0x8003efa8 */
    var_v1 = var_v1 + -11624; /* 0x8003efac */
    var_a2 = *(int32_t*)(reg_s0 + 288); /* 0x8003efb0 */
    var_v0 = var_v0 + var_v1; /* 0x8003efb4 */
    func_0x80016030(); /* 0x8003efb8 */
    var_v0 = var_s2 << 0x3; /* 0x8003efc0 */
    var_s3 = var_v0 + 96; /* 0x8003efc4 */
    var_s0 = *(int32_t*)(reg_s0 + 288); /* 0x8003efc8 */
    var_v1 = 0xffff; /* 0x8003efcc */
    var_s2 = *(uint16_t*)(reg_s0 + 0); /* 0x8003efd0 */
    var_v0 = var_s2 + -1; /* 0x8003efd8 */
    var_s2 = var_v0; /* 0x8003efdc */
    var_v0 = var_v0 & 0xffff; /* 0x8003efe0 */
    /* Branch beq at 0x8003efe4 */
    var_s0 = var_s0 + 4; /* 0x8003efe8 */
    var_v0 = 0x8016 << 16; /* 0x8003efec */
    var_s7 = var_v0 + -12144; /* 0x8003eff0 */
    var_s1 = *(int32_t*)(reg_s0 + 0); /* 0x8003eff4 */
    /* Branch bnez at 0x8003f000 */
    var_a1 = var_sp + 16; /* 0x8003f004 */
    var_a1 = var_a1 + var_s4; /* 0x8003f008 */
    var_a2 = var_sp + 24; /* 0x8003f00c */
    var_a2 = var_a2 + var_s4; /* 0x8003f010 */
    var_v0 = var_s3 & 0xffff; /* 0x8003f014 */
    var_v0 = var_v0 << 0x2; /* 0x8003f018 */
    var_v0 = var_v0 + var_s7; /* 0x8003f01c */
    var_v1 = 0x834c; /* 0x8003f020 */
    var_v0 = var_v0 + var_v1; /* 0x8003f024 */
    *(int32_t*)(reg_v0 + 0) = var_s0; /* 0x8003f028 */
    var_a0 = *(int32_t*)(reg_s0 + 8); /* 0x8003f02c */
    var_a3 = var_zero; /* 0x8003f030 */
    func_0x800177a0(); /* 0x8003f034 */
    var_s0 = var_s0 + var_s1; /* 0x8003f03c */
    var_v1 = var_s2 + -1; /* 0x8003f040 */
    var_s2 = var_v1; /* 0x8003f044 */
    var_v1 = var_v1 & 0xffff; /* 0x8003f048 */
    var_v0 = 0xffff; /* 0x8003f04c */
    /* Branch bne at 0x8003f050 */
    var_s3 = var_s3 + 1; /* 0x8003f054 */
    var_a0 = 1; /* 0x8003f058 */
    var_s1 = var_s5 & 0xff; /* 0x8003f05c */
    var_s1 = var_s1 << 0x2; /* 0x8003f060 */
    var_a1 = var_s1 + 741; /* 0x8003f064 */
    var_s0 = 0x8009 << 16; /* 0x8003f068 */
    var_s0 = var_s0 + -29560; /* 0x8003f06c */
    func_0x80016030(); /* 0x8003f070 */
    var_a0 = var_s0; /* 0x8003f078 */
    var_s0 = var_s6 & 0xff; /* 0x8003f07c */
    var_v0 = var_s0 << 0x2; /* 0x8003f080 */
    var_a1 = var_sp + 16; /* 0x8003f084 */
    var_a1 = var_a1 + var_v0; /* 0x8003f088 */
    var_a2 = var_sp + 24; /* 0x8003f08c */
    var_a2 = var_a2 + var_v0; /* 0x8003f090 */
    func_0x8003ec5c(); /* 0x8003f094 */
    func_0x80079a60(); /* 0x8003f09c */
    var_a0 = 1; /* 0x8003f0a4 */
    var_a1 = var_s1 + 742; /* 0x8003f0a8 */
    func_0x80058a0c(); /* 0x8003f0ac */
    var_a0 = 0x801a << 16; /* 0x8003f0b4 */
    var_a0 = var_a0 + -28888; /* 0x8003f0b8 */
    var_v0 = 30; /* 0x8003f0bc */
    var_a1 = var_s6 & 0xff; /* 0x8003f0c0 */
    *(int8_t*)(reg_a0 + 392) = var_v0; /* 0x8003f0c4 */
    var_v0 = var_a1 << 0x1; /* 0x8003f0c8 */
    var_v0 = var_v0 + var_a0; /* 0x8003f0cc */
    var_v1 = -1; /* 0x8003f0d0 */
    *(int16_t*)(reg_a0 + 386) = var_zero; /* 0x8003f0d4 */
    *(int16_t*)(reg_a0 + 388) = var_zero; /* 0x8003f0d8 */
    *(int16_t*)(reg_v0 + 316) = var_v1; /* 0x8003f0dc */
    var_v0 = var_a1 << 0x2; /* 0x8003f0e0 */
    var_v0 = var_v0 + var_a0; /* 0x8003f0e4 */
    var_a1 = var_a1 + var_a0; /* 0x8003f0e8 */
    *(int32_t*)(reg_v0 + 296) = var_zero; /* 0x8003f0ec */
    var_v0 = 255; /* 0x8003f0f0 */
    func_0x80015ad4(); /* 0x8003f0f4 */
    var_ra = *(int32_t*)(stack + 64); /* 0x8003f0fc */
    var_s7 = *(int32_t*)(stack + 60); /* 0x8003f100 */
    var_s6 = *(int32_t*)(stack + 56); /* 0x8003f104 */
    var_s5 = *(int32_t*)(stack + 52); /* 0x8003f108 */
    var_s4 = *(int32_t*)(stack + 48); /* 0x8003f10c */
    var_s3 = *(int32_t*)(stack + 44); /* 0x8003f110 */
    var_s2 = *(int32_t*)(stack + 40); /* 0x8003f114 */
    var_s1 = *(int32_t*)(stack + 36); /* 0x8003f118 */
    var_s0 = *(int32_t*)(stack + 32); /* 0x8003f11c */
    var_sp = var_sp + 72; /* 0x8003f120 */
    return; /* 0x8003f124 */
}

/* Function at 0x8003f128 */
void func_0x8003f128() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_s4;
    int32_t var_s5;
    int32_t var_s6;
    int32_t var_s7;
    int32_t var_s8;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -88; /* 0x8003f12c */
    *(int32_t*)(stack + 72) = var_s6; /* 0x8003f130 */
    var_s6 = var_a1; /* 0x8003f134 */
    var_t0 = var_a2; /* 0x8003f138 */
    var_v0 = 0x8001 << 16; /* 0x8003f13c */
    *(int32_t*)(stack + 84) = var_ra; /* 0x8003f140 */
    *(int32_t*)(stack + 80) = var_s8; /* 0x8003f144 */
    *(int32_t*)(stack + 76) = var_s7; /* 0x8003f148 */
    *(int32_t*)(stack + 68) = var_s5; /* 0x8003f14c */
    *(int32_t*)(stack + 64) = var_s4; /* 0x8003f150 */
    *(int32_t*)(stack + 60) = var_s3; /* 0x8003f154 */
    *(int32_t*)(stack + 56) = var_s2; /* 0x8003f158 */
    *(int32_t*)(stack + 52) = var_s1; /* 0x8003f15c */
    *(int32_t*)(stack + 48) = var_s0; /* 0x8003f160 */
    var_a3 = var_v0 + 7348; /* 0x8003f164 */
    var_v0 = 0x8001 << 16; /* 0x8003f1ac */
    var_a3 = var_v0 + 7364; /* 0x8003f1b0 */
    var_s2 = var_zero; /* 0x8003f1f8 */
    var_s7 = var_s2; /* 0x8003f1fc */
    var_a0 = var_a0 & 0xffff; /* 0x8003f200 */
    var_v0 = 0xffff; /* 0x8003f204 */
    /* Branch beq at 0x8003f208 */
    var_s8 = 0x1f80 << 16; /* 0x8003f20c */
    var_v0 = var_a0 << 0x1; /* 0x8003f210 */
    var_v0 = var_v0 + var_a0; /* 0x8003f214 */
    var_v0 = var_v0 << 0x2; /* 0x8003f218 */
    var_v0 = var_v0 << 0x2; /* 0x8003f220 */
    var_v1 = 0x801c << 16; /* 0x8003f224 */
    var_v1 = var_v1 + 30736; /* 0x8003f228 */
    var_v0 = var_v0 + var_v1; /* 0x8003f22c */
    var_s5 = *(uint8_t*)(reg_v0 + 4); /* 0x8003f230 */
    var_v0 = 0x801a << 16; /* 0x8003f238 */
    var_s5 = 255; /* 0x8003f23c */
    var_v0 = 0x801a << 16; /* 0x8003f240 */
    var_v1 = var_v0 + -28888; /* 0x8003f244 */
    var_v0 = 15; /* 0x8003f248 */
    var_a0 = var_s5 & 0xff; /* 0x8003f24c */
    *(int8_t*)(reg_v1 + 391) = var_v0; /* 0x8003f250 */
    var_v0 = 255; /* 0x8003f254 */
    *(int16_t*)(reg_v1 + 382) = var_zero; /* 0x8003f258 */
    /* Branch beq at 0x8003f25c */
    *(int16_t*)(reg_v1 + 384) = var_zero; /* 0x8003f260 */
    var_s1 = var_s6 & 0xff; /* 0x8003f264 */
    var_v0 = var_s1 + var_v1; /* 0x8003f268 */
    var_a1 = *(uint8_t*)(reg_v0 + 328); /* 0x8003f26c */
    /* Branch bne at 0x8003f274 */
    var_v0 = 0x801a << 16; /* 0x8003f278 */
    var_v0 = var_t0 & 0xff; /* 0x8003f27c */
    /* Branch beqz at 0x8003f280 */
    var_a1 = var_a1 << 0x2; /* 0x8003f284 */
    var_a0 = 1; /* 0x8003f288 */
    var_a1 = var_a1 + 485; /* 0x8003f28c */
    var_s0 = 0x8009 << 16; /* 0x8003f290 */
    var_s0 = var_s0 + -29560; /* 0x8003f294 */
    func_0x80016030(); /* 0x8003f298 */
    var_a0 = var_s0; /* 0x8003f2a0 */
    var_v0 = var_s1 << 0x2; /* 0x8003f2a4 */
    var_a1 = var_sp + 16; /* 0x8003f2a8 */
    var_a1 = var_a1 + var_v0; /* 0x8003f2ac */
    var_a2 = var_sp + 32; /* 0x8003f2b0 */
    var_a2 = var_a2 + var_v0; /* 0x8003f2b4 */
    func_0x8003ec5c(); /* 0x8003f2b8 */
    func_0x80079a60(); /* 0x8003f2c0 */
    var_v0 = 0x801a << 16; /* 0x8003f2c8 */
    var_a2 = var_v0 + -28888; /* 0x8003f2cc */
    var_v1 = var_s6 & 0xff; /* 0x8003f2d0 */
    var_v0 = var_v1 + var_a2; /* 0x8003f2d4 */
    *(int8_t*)(reg_v0 + 328) = var_s5; /* 0x8003f2d8 */
    var_v0 = var_s5 + -31; /* 0x8003f2dc */
    /* Branch beqz at 0x8003f2e4 */
    var_a1 = var_s5 & 0xff; /* 0x8003f2e8 */
    var_s2 = 1; /* 0x8003f2ec */
    var_s7 = var_s5 + 29; /* 0x8003f2f0 */
    var_v0 = 255; /* 0x8003f2f4 */
    /* Branch beq at 0x8003f2f8 */
    var_s4 = var_v1 << 0x2; /* 0x8003f2fc */
    var_s3 = var_s4 + var_a2; /* 0x8003f300 */
    var_v0 = var_a1 << 0x3; /* 0x8003f304 */
    var_v0 = var_v0 << 0x2; /* 0x8003f30c */
    var_v1 = 0x801b << 16; /* 0x8003f310 */
    var_v1 = var_v1 + 21024; /* 0x8003f314 */
    var_v0 = var_v0 + var_v1; /* 0x8003f318 */
    *(int32_t*)(reg_s3 + 232) = var_v0; /* 0x8003f31c */
    var_v0 = var_s2 & 0xff; /* 0x8003f320 */
    /* Branch beqz at 0x8003f324 */
    var_a0 = 1; /* 0x8003f32c */
    var_s1 = var_s2 & 0xff; /* 0x8003f330 */
    var_s1 = var_s1 << 0x2; /* 0x8003f334 */
    var_s1 = var_s1 + var_a2; /* 0x8003f338 */
    var_s0 = var_s7 & 0xff; /* 0x8003f33c */
    var_v0 = var_s0 << 0x3; /* 0x8003f340 */
    var_v0 = var_v0 << 0x2; /* 0x8003f348 */
    var_v0 = var_v0 + var_v1; /* 0x8003f34c */
    var_a1 = var_a1 << 0x2; /* 0x8003f350 */
    *(int32_t*)(reg_s1 + 232) = var_v0; /* 0x8003f354 */
    var_a2 = *(int32_t*)(reg_s3 + 248); /* 0x8003f358 */
    func_0x80016030(); /* 0x8003f35c */
    var_a0 = 1; /* 0x8003f364 */
    var_s0 = var_s0 << 0x2; /* 0x8003f368 */
    var_a2 = *(int32_t*)(reg_s1 + 248); /* 0x8003f36c */
    func_0x80016030(); /* 0x8003f370 */
    var_a0 = var_s6 & 0xff; /* 0x8003f378 */
    var_a1 = *(int32_t*)(reg_s3 + 248); /* 0x8003f37c */
    func_0x80033a48(); /* 0x8003f380 */
    var_a1 = var_sp + 16; /* 0x8003f388 */
    var_a1 = var_a1 + var_s4; /* 0x8003f38c */
    var_a2 = var_sp + 32; /* 0x8003f390 */
    var_a2 = var_a2 + var_s4; /* 0x8003f394 */
    var_a0 = *(int32_t*)(reg_s8 + 12); /* 0x8003f398 */
    func_0x800177a0(); /* 0x8003f39c */
    var_s2 = var_s2 & 0xff; /* 0x8003f3a4 */
    var_a1 = *(int32_t*)(reg_s1 + 248); /* 0x8003f3a8 */
    func_0x80033a48(); /* 0x8003f3ac */
    var_a0 = 1; /* 0x8003f3b8 */
    var_a0 = 1; /* 0x8003f3bc */
    var_a1 = var_a1 << 0x2; /* 0x8003f3c0 */
    var_a2 = *(int32_t*)(reg_s3 + 248); /* 0x8003f3c4 */
    func_0x80016030(); /* 0x8003f3c8 */
    var_a0 = var_s6 & 0xff; /* 0x8003f3d0 */
    var_a1 = *(int32_t*)(reg_s3 + 248); /* 0x8003f3d4 */
    func_0x80033a48(); /* 0x8003f3d8 */
    var_a1 = var_sp + 16; /* 0x8003f3e0 */
    var_a1 = var_a1 + var_s4; /* 0x8003f3e4 */
    var_a2 = var_sp + 32; /* 0x8003f3e8 */
    var_a2 = var_a2 + var_s4; /* 0x8003f3ec */
    var_a0 = *(int32_t*)(reg_s8 + 12); /* 0x8003f3f0 */
    func_0x800177a0(); /* 0x8003f3f4 */
    var_a0 = 1; /* 0x8003f3fc */
    var_s1 = var_s5 << 0x2; /* 0x8003f400 */
    var_a1 = var_s1 + 485; /* 0x8003f404 */
    var_s0 = 0x8009 << 16; /* 0x8003f408 */
    var_s0 = var_s0 + -29560; /* 0x8003f40c */
    func_0x80016030(); /* 0x8003f410 */
    var_a0 = var_s0; /* 0x8003f418 */
    var_s0 = var_s6 & 0xff; /* 0x8003f41c */
    var_v0 = var_s0 << 0x2; /* 0x8003f420 */
    var_a1 = var_sp + 16; /* 0x8003f424 */
    var_a1 = var_a1 + var_v0; /* 0x8003f428 */
    var_a2 = var_sp + 32; /* 0x8003f42c */
    var_a2 = var_a2 + var_v0; /* 0x8003f430 */
    func_0x8003ec5c(); /* 0x8003f434 */
    func_0x80079a60(); /* 0x8003f43c */
    var_a0 = 1; /* 0x8003f444 */
    var_v0 = 0x801a << 16; /* 0x8003f448 */
    var_v0 = var_v0 + -28888; /* 0x8003f44c */
    var_s0 = var_s0 + var_v0; /* 0x8003f450 */
    var_a2 = *(uint8_t*)(reg_s0 + 468); /* 0x8003f454 */
    var_a1 = var_s1 + 486; /* 0x8003f458 */
    func_0x80058a0c(); /* 0x8003f45c */
    var_a0 = var_s6 & 0xff; /* 0x8003f464 */
    /* Branch beqz at 0x8003f46c */
    var_v0 = 0x801a << 16; /* 0x8003f470 */
    var_v0 = var_v0 + -28888; /* 0x8003f474 */
    var_v1 = var_a0 << 0x1; /* 0x8003f478 */
    var_v1 = var_v1 + var_v0; /* 0x8003f47c */
    var_v0 = -1; /* 0x8003f480 */
    *(int16_t*)(reg_v1 + 304) = var_v0; /* 0x8003f484 */
    var_v1 = 0x801a << 16; /* 0x8003f488 */
    var_v1 = var_v1 + -28888; /* 0x8003f48c */
    var_v0 = var_a0 << 0x2; /* 0x8003f490 */
    var_v0 = var_v0 + var_v1; /* 0x8003f494 */
    *(int32_t*)(reg_v0 + 264) = var_zero; /* 0x8003f498 */
    *(int8_t*)(reg_v1 + 334) = var_zero; /* 0x8003f49c */
    *(int8_t*)(reg_v1 + 335) = var_zero; /* 0x8003f4a0 */
    *(int16_t*)(reg_v1 + 734) = var_zero; /* 0x8003f4a4 */
    *(int16_t*)(reg_v1 + 736) = var_zero; /* 0x8003f4a8 */
    *(int16_t*)(reg_v1 + 738) = var_zero; /* 0x8003f4ac */
    func_0x80015ad4(); /* 0x8003f4b0 */
    var_ra = *(int32_t*)(stack + 84); /* 0x8003f4b8 */
    var_s8 = *(int32_t*)(stack + 80); /* 0x8003f4bc */
    var_s7 = *(int32_t*)(stack + 76); /* 0x8003f4c0 */
    var_s6 = *(int32_t*)(stack + 72); /* 0x8003f4c4 */
    var_s5 = *(int32_t*)(stack + 68); /* 0x8003f4c8 */
    var_s4 = *(int32_t*)(stack + 64); /* 0x8003f4cc */
    var_s3 = *(int32_t*)(stack + 60); /* 0x8003f4d0 */
    var_s2 = *(int32_t*)(stack + 56); /* 0x8003f4d4 */
    var_s1 = *(int32_t*)(stack + 52); /* 0x8003f4d8 */
    var_s0 = *(int32_t*)(stack + 48); /* 0x8003f4dc */
    var_sp = var_sp + 88; /* 0x8003f4e0 */
    return; /* 0x8003f4e4 */
}

/* Function at 0x8003f4e8 */
void func_0x8003f4e8() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_a2;
    int32_t var_a3;
    int32_t var_t0;
    int32_t var_t1;
    int32_t var_v0;
    int32_t var_v1;

    var_a1 = var_a1 & 0xff; /* 0x8003f4ec */
    /* Branch bnez at 0x8003f4f0 */
    var_t1 = var_a0; /* 0x8003f4f4 */
    var_v0 = 0x801a << 16; /* 0x8003f4f8 */
    var_a2 = var_v0 + -28888; /* 0x8003f4fc */
    var_v1 = *(int16_t*)(reg_a2 + 304); /* 0x8003f500 */
    var_v0 = -1; /* 0x8003f504 */
    /* Branch bne at 0x8003f508 */
    var_v0 = *(int16_t*)(reg_a2 + 306); /* 0x8003f510 */
    /* Branch bnez at 0x8003f51c */
    var_v0 = *(uint8_t*)(reg_a2 + 335); /* 0x8003f524 */
    /* Branch beqz at 0x8003f52c */
    var_v1 = *(uint8_t*)(reg_a2 + 328); /* 0x8003f534 */
    var_v0 = 255; /* 0x8003f538 */
    /* Branch beq at 0x8003f53c */
    var_v0 = *(int16_t*)(reg_a2 + 404); /* 0x8003f544 */
    /* Branch bnez at 0x8003f54c */
    var_v1 = 0x801d << 16; /* 0x8003f550 */
    var_v1 = var_v1 + -11904; /* 0x8003f554 */
    *(int8_t*)(reg_a2 + 336) = var_t1; /* 0x8003f558 */
    *(int16_t*)(reg_a2 + 304) = var_zero; /* 0x8003f55c */
    var_a0 = *(uint16_t*)(reg_v1 + 50); /* 0x8003f560 */
    var_v0 = 1; /* 0x8003f564 */
    *(int8_t*)(reg_a2 + 340) = var_v0; /* 0x8003f568 */
    var_v0 = *(uint16_t*)(reg_v1 + 4); /* 0x8003f56c */
    var_a1 = *(int32_t*)(reg_a2 + 232); /* 0x8003f570 */
    var_v0 = var_v0 & var_a0; /* 0x8003f578 */
    *(int16_t*)(reg_v1 + 4) = var_v0; /* 0x8003f57c */
    var_v0 = *(uint16_t*)(reg_a1 + 6); /* 0x8003f580 */
    *(int16_t*)(reg_a2 + 308) = var_v0; /* 0x8003f588 */
    var_v1 = *(uint16_t*)(reg_a1 + 8); /* 0x8003f58c */
    var_v0 = 15; /* 0x8003f590 */
    *(int8_t*)(reg_a2 + 391) = var_v0; /* 0x8003f594 */
    *(int16_t*)(reg_a2 + 312) = var_v1; /* 0x8003f59c */
    var_v0 = 0x801a << 16; /* 0x8003f5a0 */
    var_a2 = var_v0 + -28888; /* 0x8003f5a4 */
    var_v0 = var_a1 << 0x1; /* 0x8003f5a8 */
    var_a3 = var_v0 + var_a2; /* 0x8003f5ac */
    var_v1 = *(int16_t*)(reg_a3 + 304); /* 0x8003f5b0 */
    var_v0 = -1; /* 0x8003f5b4 */
    /* Branch bne at 0x8003f5b8 */
    var_v0 = *(int16_t*)(reg_a2 + 304); /* 0x8003f5c0 */
    /* Branch bne at 0x8003f5c8 */
    var_v1 = *(int16_t*)(reg_a3 + 316); /* 0x8003f5d0 */
    /* Branch bne at 0x8003f5d8 */
    var_v0 = *(int16_t*)(reg_a2 + 316); /* 0x8003f5e0 */
    /* Branch bne at 0x8003f5e8 */
    var_t0 = var_a1 + var_a2; /* 0x8003f5ec */
    var_v1 = *(uint8_t*)(reg_t0 + 328); /* 0x8003f5f0 */
    var_v0 = 255; /* 0x8003f5f4 */
    /* Branch beq at 0x8003f5f8 */
    var_v0 = *(int16_t*)(reg_a2 + 404); /* 0x8003f600 */
    /* Branch bnez at 0x8003f608 */
    var_a0 = 0x801d << 16; /* 0x8003f60c */
    var_a0 = var_a0 + -11904; /* 0x8003f610 */
    var_v0 = *(uint16_t*)(reg_a0 + 52); /* 0x8003f614 */
    var_v1 = *(uint16_t*)(reg_a0 + 4); /* 0x8003f618 */
    var_v1 = var_v1 & var_v0; /* 0x8003f620 */
    var_v0 = 1; /* 0x8003f624 */
    *(int16_t*)(reg_a0 + 4) = var_v1; /* 0x8003f628 */
    *(int8_t*)(reg_t0 + 336) = var_t1; /* 0x8003f62c */
    *(int16_t*)(reg_a3 + 304) = var_zero; /* 0x8003f630 */
    *(int8_t*)(reg_a2 + 340) = var_v0; /* 0x8003f634 */
    var_v0 = var_a1 << 0x2; /* 0x8003f638 */
    var_v0 = var_v0 + var_a2; /* 0x8003f63c */
    var_v1 = *(int32_t*)(reg_v0 + 232); /* 0x8003f640 */
    var_v1 = *(uint16_t*)(reg_v1 + 6); /* 0x8003f648 */
    *(int16_t*)(reg_a3 + 308) = var_v1; /* 0x8003f650 */
    var_v0 = *(int32_t*)(reg_v0 + 232); /* 0x8003f654 */
    var_v0 = *(uint16_t*)(reg_v0 + 8); /* 0x8003f65c */
    *(int16_t*)(reg_a3 + 312) = var_v0; /* 0x8003f664 */
    return; /* 0x8003f668 */
}

/* Function at 0x8003f66c */
void func_0x8003f66c() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_v0;
    int32_t var_v1;

    var_v0 = 0x801a << 16; /* 0x8003f670 */
    var_a0 = var_v0 + -28888; /* 0x8003f674 */
    var_v1 = *(int32_t*)(reg_a0 + 316); /* 0x8003f678 */
    var_v0 = -1; /* 0x8003f67c */
    /* Branch bne at 0x8003f680 */
    var_v0 = *(int32_t*)(reg_a0 + 304); /* 0x8003f688 */
    /* Branch bne at 0x8003f690 */
    var_a1 = var_a1 & 0xff; /* 0x8003f694 */
    var_v0 = var_a1 + var_a0; /* 0x8003f698 */
    var_v1 = *(uint8_t*)(reg_v0 + 332); /* 0x8003f69c */
    var_v0 = 255; /* 0x8003f6a0 */
    /* Branch beq at 0x8003f6a4 */
    var_v0 = *(int32_t*)(reg_a0 + 44); /* 0x8003f6ac */
    var_v0 = var_v0 & 0x10; /* 0x8003f6b4 */
    /* Branch bnez at 0x8003f6b8 */
    var_v0 = *(uint8_t*)(reg_a0 + 459); /* 0x8003f6c0 */
    /* Branch beqz at 0x8003f6c8 */
    var_v0 = var_a1 << 0x1; /* 0x8003f6cc */
    var_v0 = *(int16_t*)(reg_a0 + 448); /* 0x8003f6d0 */
    /* Branch beqz at 0x8003f6d8 */
    var_v0 = var_a1 << 0x1; /* 0x8003f6dc */
    var_v0 = var_v0 + var_a0; /* 0x8003f6e0 */
    *(int16_t*)(reg_v0 + 316) = var_zero; /* 0x8003f6e4 */
    var_v1 = *(uint16_t*)(reg_a0 + 386); /* 0x8003f6e8 */
    var_v0 = 30; /* 0x8003f6ec */
    *(int16_t*)(reg_a0 + 386) = var_zero; /* 0x8003f6f0 */
    *(int8_t*)(reg_a0 + 392) = var_v0; /* 0x8003f6f4 */
    *(int16_t*)(reg_a0 + 388) = var_v1; /* 0x8003f6f8 */
    return; /* 0x8003f6fc */
}

/* Function at 0x8003f700 */
void func_0x8003f700() {
    /* Local variables */
    int32_t var_a0;
    int32_t var_a1;
    int32_t var_ra;
    int32_t var_s0;
    int32_t var_s1;
    int32_t var_s2;
    int32_t var_s3;
    int32_t var_sp;
    int32_t var_t0;
    int32_t var_t4;
    int32_t var_t5;
    int32_t var_t6;
    int32_t var_v0;
    int32_t var_v1;

    var_sp = var_sp + -80; /* 0x8003f704 */
    *(int32_t*)(stack + 68) = var_s3; /* 0x8003f708 */
    var_s3 = var_a0; /* 0x8003f70c */
    *(int32_t*)(stack + 60) = var_s1; /* 0x8003f710 */
    var_s1 = var_a2; /* 0x8003f714 */
    *(int32_t*)(stack + 64) = var_s2; /* 0x8003f718 */
    var_s2 = var_a3; /* 0x8003f71c */
    *(int32_t*)(stack + 72) = var_ra; /* 0x8003f720 */
    /* Branch beqz at 0x8003f724 */
    *(int32_t*)(stack + 56) = var_s0; /* 0x8003f728 */
    var_t0 = 0x801a << 16; /* 0x8003f72c */
    var_t0 = var_t0 + -28224; /* 0x8003f730 */
    var_t4 = *(int32_t*)(reg_t0 + 0); /* 0x8003f734 */
    var_t5 = *(int32_t*)(reg_t0 + 4); /* 0x8003f738 */
    var_t4 = *(int32_t*)(reg_t0 + 8); /* 0x8003f744 */
    var_t5 = *(int32_t*)(reg_t0 + 12); /* 0x8003f748 */
    var_t6 = *(int32_t*)(reg_t0 + 16); /* 0x8003f74c */
    var_a0 = 0x801a << 16; /* 0x8003f75c */
    var_v0 = *(int32_t*)(stack + 96); /* 0x8003f760 */
    var_a0 = var_a0 + -28536; /* 0x8003f764 */
    var_v0 = var_v0 << 0x3; /* 0x8003f768 */
    var_v0 = var_v0 + var_a0; /* 0x8003f76c */
    var_a0 = var_a0 + -352; /* 0x8003f790 */
    var_v0 = *(int32_t*)(reg_a1 + 0); /* 0x8003f794 */
    var_v1 = *(int32_t*)(reg_a0 + 584); /* 0x8003f798 */
    var_v0 = var_v0 + var_v1; /* 0x8003f7a0 */
    *(int32_t*)(reg_a1 + 0) = var_v0; /* 0x8003f7a4 */
    var_v0 = *(int32_t*)(reg_a1 + 4); /* 0x8003f7a8 */
    var_v1 = *(int32_t*)(reg_a0 + 588); /* 0x8003f7ac */
    var_v0 = var_v0 + var_v1; /* 0x8003f7b4 */
    *(int32_t*)(reg_a1 + 4) = var_v0; /* 0x8003f7b8 */
    var_v0 = *(int32_t*)(reg_a1 + 8); /* 0x8003f7bc */
    var_v1 = *(int32_t*)(reg_a0 + 592); /* 0x8003f7c0 */
    var_v0 = var_v0 + var_v1; /* 0x8003f7c8 */
    *(int32_t*)(reg_a1 + 8) = var_v0; /* 0x8003f7cc */
    /* Branch beqz at 0x8003f7d0 */
    /* Branch beqz at 0x8003f7d8 */
    var_s0 = var_sp + 48; /* 0x8003f7dc */
    var_a0 = var_s0; /* 0x8003f7e0 */
    var_a1 = var_zero; /* 0x8003f7e4 */
    func_0x80078ab4(); /* 0x8003f7e8 */
    var_v0 = 4096; /* 0x8003f7f0 */
    *(int16_t*)(stack + 52) = var_v0; /* 0x8003f7f4 */
    var_a0 = var_s2; /* 0x8003f7f8 */
    func_0x80075154(); /* 0x8003f7fc */
    var_v0 = var_sp + 16; /* 0x8003f804 */
    var_t4 = *(int32_t*)(reg_v0 + 0); /* 0x8003f808 */
    var_t5 = *(int32_t*)(reg_v0 + 4); /* 0x8003f80c */
    var_t4 = *(int32_t*)(reg_v0 + 8); /* 0x8003f818 */
    var_t5 = *(int32_t*)(reg_v0 + 12); /* 0x8003f81c */
    var_t6 = *(int32_t*)(reg_v0 + 16); /* 0x8003f820 */
    *(int16_t*)(reg_s1 + 0) = var_t4; /* 0x8003f850 */
    *(int16_t*)(reg_s1 + 2) = var_t5; /* 0x8003f854 */
    *(int16_t*)(reg_s1 + 4) = var_t6; /* 0x8003f858 */
    var_a0 = var_s3; /* 0x8003f860 */
    /* Branch beqz at 0x8003f864 */
    var_a0 = var_sp + 16; /* 0x8003f868 */
    var_a1 = var_zero; /* 0x8003f86c */
    func_0x80078ab4(); /* 0x8003f870 */
    var_v0 = 4096; /* 0x8003f878 */
    *(int16_t*)(stack + 20) = var_v0; /* 0x8003f87c */
    var_t0 = 0x801a << 16; /* 0x8003f880 */
    var_t0 = var_t0 + -28224; /* 0x8003f884 */
    var_t4 = *(int32_t*)(reg_t0 + 0); /* 0x8003f888 */
    var_t5 = *(int32_t*)(reg_t0 + 4); /* 0x8003f88c */
    var_t4 = *(int32_t*)(reg_t0 + 8); /* 0x8003f898 */
    var_t5 = *(int32_t*)(reg_t0 + 12); /* 0x8003f89c */
    var_t6 = *(int32_t*)(reg_t0 + 16); /* 0x8003f8a0 */
    var_v0 = var_sp + 16; /* 0x8003f8b0 */
    *(int16_t*)(reg_s1 + 0) = var_t4; /* 0x8003f8d4 */
    *(int16_t*)(reg_s1 + 2) = var_t5; /* 0x8003f8d8 */
    *(int16_t*)(reg_s1 + 4) = var_t6; /* 0x8003f8dc */
    var_a0 = var_s3; /* 0x8003f8e0 */
    func_0x8004a0f8(); /* 0x8003f8e4 */
    var_v0 = var_zero; /* 0x8003f8ec */
    var_ra = *(int32_t*)(stack + 72); /* 0x8003f8f0 */
    var_s3 = *(int32_t*)(stack + 68); /* 0x8003f8f4 */
    var_s2 = *(int32_t*)(stack + 64); /* 0x8003f8f8 */
    var_s1 = *(int32_t*)(stack + 60); /* 0x8003f8fc */
    var_s0 = *(int32_t*)(stack + 56); /* 0x8003f900 */
    var_sp = var_sp + 80; /* 0x8003f904 */
    return; /* 0x8003f908 */
}

/* Total functions decompiled: 130 */