function solution(board, moves) {
    const stack = []
    let answer = 0
    
    for(let i = 0; i<moves.length; i++){
        
        const move = moves[i]-1
        
        for(let j= 0; j<board.length; j++){
            const item = board[j][move]
            if(item === 0) continue;
            
            if(stack.length > 0 && item === stack[stack.length - 1]){
                stack.pop()
                answer +=2;
                
            }else{
                stack.push(item)
            }
        board[j][move] = 0
            break;
            
        }
    }
    
    
    return answer
    
 
}