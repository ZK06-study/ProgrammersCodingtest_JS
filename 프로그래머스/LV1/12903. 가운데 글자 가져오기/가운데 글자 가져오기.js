function solution(s) {
    var answer = '';
    const len = s.length;
    
    if(len % 2 === 1) {
        
        answer = s[Math.floor(len / 2)]
    } else {
        answer =  s[(len / 2)-1] + s[len/2]
    }
    
    return answer;
}