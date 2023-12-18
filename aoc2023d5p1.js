a=`seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`
// a=document.body.innerText
a=a.split`\n\n`
seeds=[]
for (seed of a[0].matchAll(/(\d+)/g))seeds.push(Number(seed[0]))
 
maps=[]
for(i=1;i<a.length;i++){
    map=a[i].split('\n').splice(1)
    map=map.map(l=>l.split` `.map(i=>Number(i)))
    maps.push(map)
}
 
for([i,seed]of seeds.entries()){
    for(map of maps){
        for([ds,ss,rl] of map){
            if(seed>=ss&&seed<ss+rl){seed=seed-ss+ds;break;}
        }
    }
    seeds[i]=seed;
}
 
console.log(Math.min(...seeds))