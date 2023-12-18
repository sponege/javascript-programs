gl=()=>{l='';for(x=0;x<xm;x++)l+=Math.random()<.1?'*':' ';return l}
ym=10;xm=80;s=[];for(y=0;y<ym;y++){s.push(gl())};
setInterval(()=>{console.log(s.join('\n'));s.pop();s.splice(0,0,gl());},100)