// problem idea for AoC, Eric made a better version lol
// Here's the better version: https://adventofcode.com/2023/day/16

function makeinput(size){
    s=size;
    size=(size*2)+1;
    t='';
    for(y=0;y<size;y++){
        for(x=0;x<size;x++){
            t+=x==s&&y==s?'*':Math.random()<.5?'/':'\\';
        }
        if(y!=size-1)t+='\n';
    }
    return t;
}
i=makeinput(8)
console.log(i);
function run(i) {
    // parse input
    a=[];
    a.push(Array((i.split('\n')[0].length+1)*2-1).fill(' '));
    for(l of i.split('\n')){
        nl=[];
        nl.push(' ');
        for(c of l){nl.push(c);nl.push(' ');}
        a.push(nl);
        a.push(Array((i.split('\n')[0].length+1)*2-1).fill(' '));
    }
    ds='^>v<';
    dsm=[[0,-1],[1,0],[0,1],[-1,0]];
    c='a';
    z=0;
    for(ny=0;ny<a.length;ny++)for(nx=0;nx<a[0].length;nx++){
    [x,y]=[nx,ny];
    next_to_mirror=0;
    for([dx,dy]of[[1,0],[-1,0],[0,1],[0,-1]]){
        try{
            m=a[y+dy][x+dx];
            if("/\\".includes(m))next_to_mirror=1;
        }catch(e){}
    }
    if(!next_to_mirror||!(y==0||y==a.length-1||x==0||x==a[0].length-1)||a[y][x]!=' ')continue;
    d='^';
    if(y==0)d='v';
    if(x==0)d='>';
    if(x==a[0].length-1)d='<';
    a[y][x]=c;
    _=0;
    while(true){
    // for(;_<1;){
        [dx,dy]=dsm[ds.indexOf(d)];
        x+=dx;
        y+=dy;
        if(x<=0||x>=a[0].length-1||y<=0||y>=a.length-1)break;
        if(a[y][x]==' ')a[y][x]=d; // leave trail
        if(a[y][x]=='\\'){ // rotate
            d="<v>^"[ds.indexOf(d)];
        }
        if(a[y][x]=='/'){ // rotate
            d=">^<v"[ds.indexOf(d)];
        }
        _++;
        // if(_>100)break;
    }
    a[y][x]=c;
    z++;
    c='abcdefghijklmnopqrstuvwxyz'[z%26];    
    }
    console.log(a.map(l=>l.join('')).join('\n'));
}
run(i);