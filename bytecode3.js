bytecode=[2,0,1,1,4,256-4]
ip=0 // instruction pointer
mem=Array(0xff).fill(0)
mp=0 // memory pointer
text='' // text to print
o=0 // overflow flag
z=0 // zero flag
while(ip<bytecode.length){
    ins=bytecode[ip]; // instruction
    op=bytecode[ip+1]; // opcode
    switch(ins){
        case 0: // set mp, op
            mp=op;
            break;
        case 1: // add mem[mp], op
            mem[mp]+=op;
            o=mem[mp]>255;
            mem[mp]%=256;
            z=mem[mp]==0;
            break;
        case 2: // printchar mem[(mp+op)%256]
            text+=String.fromCodePoint(mem[(mp+op)%256]);
            break;
        case 3: // jmp [op]
            ip+=op-2;
            break;
        case 4: // jmpnz [op]
            if (!z) ip+=op-2;
    }
    ip+=2;
    ip%=256;
}
console.log(text);