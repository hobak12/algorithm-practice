function solution(n){
    let num = 0
    for(i=1; i < n+1; i++ ) {
    if (i%2 === 0){
        num += i
        }
    }       
    return num
}