function solution(a, b) {
    const num = [a,b].sort((a,b)=>a-b)
    var answer = 0;
    
    if(a === b){
        return a
    }
    
    for(let i = num[0]; i<=num[1]; i++){
        answer+= i
    }
    return answer;
}