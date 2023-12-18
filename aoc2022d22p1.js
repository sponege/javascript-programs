a=`        ...#
        .#..
        #...
        ....
...#.......#
........#...
..#....#....
..........#.
        ...#....
        .....#..
        .#......
        ......#.

10R5L5R10L4R5L5`
// a=document.body.innerText
 
let[map,path]=a.split('\n\n')
map=map.split('\n').map(l=>l.split``)
let[x,y]=[map[0].indexOf('.'),0]
ds='>v<^'
dsm=[[1,0],[0,1],[-1,0],[0,-1]]
np=[]
for (a of path.matchAll(/(\d+)(.?)/g)){
    num=Number(a[1])
    dir=a[2]
    np.push(num)
    if(dir)np.push(dir)
}
path=np
 
d='>'
function move(){
    let[dx,dy]=dsm[ds.indexOf(d)]
    let[ox,oy]=[x,y]
    map[y][x]=d
    x+=dx
    y+=dy
    if(y<0||y>map.length-1||x<0||x>map[y].length-1||map[y][x]==' '){
        dx*=-1
        dy*=-1
        x=ox
        y=oy
        while(!(y<0||y>map.length-1||x<0||x>map[y].length-1||map[y][x]==' ')){x+=dx;y+=dy;}
        dx*=-1
        dy*=-1
        x+=dx
        y+=dy
    }
    if(map[y][x]=='#'){x=ox;y=oy;}
}
 
for (m of path){
    if (typeof m == 'number')for(_=0;_<m;_++)move()
    else {
        if (m == 'R')d=ds[(ds.indexOf(d)+1)%4]
        else d=ds[(ds.indexOf(d)+3)%4]
    }
}
console.log(map.map(l=>l.join``).join('\n'));
 
console.log(1000*(y+1)+4*(x+1)+ds.indexOf(d));