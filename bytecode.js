bytecode=[0,0,1,0,3,-2]
ip=0
a=0
text=''
while(ip<bytecode.length){
    ins=bytecode[ip*2]; // instruction
    op=bytecode[(ip*2)+1]; // opcode
    switch(ins){
        case 0: // inc a
            a++;
            a%=256;
            break;
        case 1: // printchar a
            text+=String.fromCodePoint(a);
            break;
        case 2: // jmp [op]
            ip+=op-1;
            break;
        case 3: // jmpnz [op]
            if (a) ip+=op-1;
    }
    ip++;
}
console.log(text);