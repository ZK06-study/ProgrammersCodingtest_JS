function solution(s){
    
    var answer = true;
    var p = 0;
    var y = 0;
    for(let i = 0 ; i<s.length; i++){
        if(s[i] === 'p' || s[i] === 'P'){
            p++;
        }else if(s[i] === 'y' || s[i] === 'Y'){
            y++;
        }
    }
    if(p != y){
        return false;
    }
    
    return answer;
}