// mimics what jwz.org looks like on the right hand sode of the hexdump

d=[];
document.head.innerHTML=`<style>body{background:black;color:lime;}</style>`
code=document.createElement('code')
document.body.append(code)
for(y=0;y<100;y++){
    l=[];
    for(x=0;x<250;x++)l.push(Math.floor(Math.random()*256));
    d.push(l)
}
function render(i,h){
    p=''
    s='+'
    for(c of d[0])s+='-'
    s+='+\n'
    p+=s
    for(l of d.slice(i,i+h)){
        p+='|'
        for(c of l)p+=c<32||c>127?'.':String.fromCodePoint(c);
        p+='|\n'
    }
    p+=s
    return p
}
h=60;
(async () => {
while(true){
for(i=0;i<d.length-h;i++){
code.innerText=render(i,h)
await new Promise(res=>setTimeout(res,100));
}
for(i=d.length-h-1;i>=0;i--){
code.innerText=render(i,h)
await new Promise(res=>setTimeout(res,100));
}
}
})()