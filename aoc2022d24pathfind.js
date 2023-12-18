a=``;for(i=0;i<30;i++){for(j=0;j<30;j++)a+=">v<^........................................................................"[Math.floor(Math.random()*5)];a+='\n'}a=a.slice(0,a.length-1);console.log(a);
a=a.split('\n');
 
elfs=[[[0,0]]]
w=a[0].length;
h=a.length;
winds=[];for(y=0;y<h;y++)for(x=0;x<w;x++)if(a[y][x]!='.')winds.push([a[y][x],x,y])
 
winning_elf=null;
for(_=0;_<1000;_++){
new_winds=[];
for([i,wind] of winds.entries()){[dx,dy]=[[1,0],[-1,0],[0,-1],[0,1]]["><^v".indexOf(wind[0])];x=wind[1]+dx;y=wind[2]+dy;if(x<0)x=w-1;if(x>w-1)x=0;if(y<0)y=h-1;if(y>h-1)y=0;new_winds.push([wind[0],x,y])}
winds=new_winds;  
seen=[];
console.log(_,elfs.length)
new_elfs=[];
for(elf of elfs){[x,y]=elf[elf.length-1];for([dx,dy]of[[0,0],[0,1],[0,-1],[1,0],[-1,0]]){nx=x+dx;ny=y+dy;if(nx<0||ny<0||nx>w-1||ny>h-1||seen.find(p=>p[0]==nx&&p[1]==ny&&p[2]==_)||winds.find(w=>w[1]==nx&&w[2]==ny))continue;seen.push([nx,ny,_]);ne=[...elf,[nx,ny]];if(nx==w-1&&ny==h-1){winning_elf=ne;break}new_elfs.push(ne);}}
if(new_elfs.length==0){console.log("FAIL");break;}
elfs=new_elfs;
if(winning_elf){console.log('yay',_);break;}
}
 
 
winds=[];for(y=0;y<h;y++)for(x=0;x<w;x++)if(a[y][x]!='.')winds.push([a[y][x],x,y]);
 
 
(async ()=>{
for(_=0;_<winning_elf.length;_++){
 
p=[];for(y=0;y<h;y++){l='';for(x=0;x<w;x++){ws=winds.filter(w=>w[1]==x&&w[2]==y);if(ws.length>1){l+=ws.length}else if(ws.length){l+=ws[0][0]}else{l+=(winning_elf[_][0]==x&&winning_elf[_][1]==y)?'█':'.'}}p.push(l)}console.log(p.join('\n'));
new_winds=[];
for([i,wind] of winds.entries()){[dx,dy]=[[1,0],[-1,0],[0,-1],[0,1]]["><^v".indexOf(wind[0])];x=wind[1]+dx;y=wind[2]+dy;if(x<0)x=w-1;if(x>w-1)x=0;if(y<0)y=h-1;if(y>h-1)y=0;new_winds.push([wind[0],x,y])}
winds=new_winds;
    await new Promise((res)=>{setTimeout(res, 50)});
}
 
})()