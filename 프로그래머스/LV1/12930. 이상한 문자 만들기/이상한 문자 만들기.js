function solution(s) {
    var answer = s.split(" ");
    
    var word = [];
    for(let i = 0; i< answer.length; i++){
        var sum = [];
        for(let j = 0; j<answer[i].length; j++){
            if(j % 2 === 0){
                sum.push(answer[i][j].toUpperCase())
            }else{
                sum.push(answer[i][j].toLowerCase())
            }
                
        }
        word.push(sum.join(''))
        
        
    }
    
    return word.join(' ');
}