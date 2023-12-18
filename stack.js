gl=()=>{l='';for(x=0;x<xm;x++)l+=Math.random()<.1?'*':' ';return l}
ym=10;xm=80;s=[];for(y=0;y<ym;y++){s.push(gl())};
function f(){
    console.log(s.join('\n'));
    s=s.map(l=>l.split``)
    l=0;
    for(y=s.length-1;y>0;y--){
        for(x=0;x<s[0].length;x++){
            if(s[y][x]==' '&&s[y-1][x]=='*'){l=1;s[y][x]='*';s[y-1][x]=' '}
        }
    }
    if(!l)clearInterval(i);
    s=s.map(l=>l.join``)
}
 
i=setInterval(f,100);