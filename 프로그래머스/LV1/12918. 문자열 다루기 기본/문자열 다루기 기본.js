function solution(s) {
    var answer = true;
    const isCheck  = s.split("").every((i)=>!isNaN(i))
    
    
    if(s.length === 4 || s.length === 6){
        if(isCheck){
            answer = true
        }else{
            answer = false
        }
    }else{
        answer = false
    }
    return answer;
}