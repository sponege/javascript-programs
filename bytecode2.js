bytecode=[1,1,2,0,4,-2]
ip=0 // instruction pointer
mem=Array(0xff).fill(0)
mp=0 // memory pointer
text='' // text to print
o=0 // overflow flag
z=0 // zero flag
while(ip<bytecode.length){
    ins=bytecode[ip*2]; // instruction
    op=bytecode[(ip*2)+1]; // opcode
    switch(ins){
        case 0: // set mp, op
            mp=op;
            break;
        case 1: // add mem[mp], op
            mem[mp]+=op;
            o=mem[mp]>255;
            mem[mp]%=255;
            z=mem[mp]==0;
            break;
        case 2: // printchar mem[mp]
            text+=String.fromCodePoint(mem[mp]);
            break;
        case 3: // jmp [op]
            ip+=op-1;
            break;
        case 4: // jmpnz [op]
            if (!z) ip+=op-1;
    }
    ip++;
}
console.log(text);