a=``;for(i=0;i<30;i++){for(j=0;j<30;j++)a+=">v<^........................................................................"[Math.floor(Math.random()*50)];a+='\n'}a=a.slice(0,a.length-1);console.log(a);
 
a=a.split('\n');
 
w=a[0].length;
h=a.length;
winds=[];for(y=0;y<h;y++)for(x=0;x<w;x++)if(a[y][x]!='.')winds.push([a[y][x],x,y])
 
setInterval(()=>{
new_winds=[];
for([i,wind] of winds.entries()){[dx,dy]=[[1,0],[-1,0],[0,-1],[0,1]]["><^v".indexOf(wind[0])];x=wind[1]+dx;y=wind[2]+dy;if(x<0)x=w-1;if(x>w-1)x=0;if(y<0)y=h-1;if(y>h-1)y=0;new_winds.push([wind[0],x,y])}
winds=new_winds;
p=[];for(y=0;y<h;y++){l='';for(x=0;x<w;x++){ws=winds.filter(w=>w[1]==x&&w[2]==y);if(ws.length>1){l+=ws.length}else if(ws.length){l+=ws[0][0]}else{l+='.'}}p.push(l)}console.log(p.join('\n'))
},100)