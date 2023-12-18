// level 1
l=`###.......
#S####....
#########.
.#########
.....##o##
......###.`
// level 3
l=`......#######..
####..###..##..
#########..####
#S##.......##o#
####.......####
............###`
// last level part 1, code: 614955
l=`.....##.###....
.....######....
###...##.#####.
#S#######..##..
.....##.##.###.
....#######.##.
###..######.###
######.#..###.o
###..###...####
###.........###`
// last level part 2
// l=`.....##.###....
// .....#######...
// ###...##.#####.
// #########..##..
// .....##.##.###.
// ....#######.##.
// ###..######.###
// #o####.#..###.S
// ###..###...####
// ###.........###`
 
l=l.split`\n`.map(l=>l.split``)
_p=(g)=>console.log(g.map(l=>l.join``).join`\n`)
_p(l)
y=l.findIndex(s=>s.includes('S'))
x=l[y].findIndex(c=>c=='S')
ps=[[x,y,0,'']]//x,y,dir (dir = 0 - up, 1 - horizontal, 2 - vertical
visited=[[x,y,0]+[]];
function valid(p){
    let[x,y,d]=p;
    if(x<0||x>=l[0].length||y<0||y>=l.length||l[y][x]=='.'||visited.find(p2=>p2==[x,y,d]+[]))return 0;
    visited.push([x,y,d]+[]);
    if(d==1)x++;
    if(d==2)y++;
    if(x<0||x>=l[0].length||y<0||y>=l.length||l[y][x]=='.')return 0;
    return 1;
}
for(_=0;_<999999;_++){
    nps=[];
    for(p of ps){
        [x,y,d]=p;
        if(d==0){ // facing upwards
            for(np of [[x-2,y,1,p[3]+'<'],[x+1,y,1,p[3]+'>'],[x,y-2,2,p[3]+'^'],[x,y+1,2,p[3]+'V']]){
                if(valid(np))nps.push(np);
            }
        }
        if(d==1){ // horizontal
            for(np of [[x-1,y,0,p[3]+'<'],[x+2,y,0,p[3]+'>'],[x,y-1,1,p[3]+'^'],[x,y+1,1,p[3]+'V']]){
                if(valid(np))nps.push(np);
            }
        }
        if(d==2){ // vertical
            for(np of [[x-1,y,2,p[3]+'<'],[x+1,y,2,p[3]+'>'],[x,y-1,0,p[3]+'^'],[x,y+2,0,p[3]+'V']]){
                if(valid(np))nps.push(np);
            }
        }
    }
    ps=nps;
    win=0;
    for(p of ps){
        if(l[p[1]][p[0]]=='o'&&p[2]==0){
            win=1;
            console.log('Win!', p);
            break;
        }
    }
    if(win)break;
    if(ps.length==0){
        console.log("Fail! :(");
        break;
    }
}