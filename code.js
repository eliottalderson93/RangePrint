function printRange(start,end,skip){
    temp = start;
    while(temp < end){
        console.log(temp);
        temp = temp + skip;
    }
}
printRange(2,10,2);