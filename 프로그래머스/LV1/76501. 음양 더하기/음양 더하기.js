function solution(absolutes, signs) {
    var answer = 0;
    //absolutes의 길이보다 작은 수 
    //signs 의 길이의 ture이면1 false면 -1 
    for(let i= 0 ; i < absolutes.length; i ++){
        if(signs[i] === false){
            answer += absolutes[i] * -1
        }else{
            answer = answer + absolutes[i]
        }
    }
    
    return answer;
}