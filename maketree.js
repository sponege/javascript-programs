function maketree(size){
    let t='';
    for(y=0;y<size+5;y++){
        for(x=0;x<size*2+1;x++){
            if(y<size)t+=Math.abs(x-size)<=y?y==0?'*':Math.random()<.5?'/':'\\':' ';
            else t+=x-size==0?'#':' ';
        }
        t+='\n';
    }
    console.log(t)
}

maketree(8)