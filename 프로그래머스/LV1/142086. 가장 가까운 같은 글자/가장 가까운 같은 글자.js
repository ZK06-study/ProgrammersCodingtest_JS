function solution(s) {
    let stack= [] // s의 값을 넣는 방법
    let answer = [] // 결과값
    let asci = []
    let alpa = new Map([
        [97,-1],
        [98,-1],
        [99,-1],
        [100,-1],
        [101,-1],
        [102,-1],
        [103,-1],
        [104,-1],
        [105,-1],
        [106,-1],
        [107,-1],
        [108,-1],
        [109,-1],
        [110,-1],
        [111,-1],
        [112,-1],
        [113,-1],
        [114,-1],
        [115,-1],
        [116,-1],
        [117,-1],
        [118,-1],
        [119,-1],
        [120,-1],
        [121,-1],
        [122,-1],
    ])
    
    for(let i = 0; i < s.length; i++){
        let count = 0
       if(!stack.includes(s[i])){
           stack.push(s[i])
           alpa.set(s[i],i)
           answer.push(-1)
       }else{  
           i-alpa.get(s[i]) 
           stack.push(s[i])
           answer.push(i-alpa.get(s[i]))
           alpa.set(s[i],i)
       
       }
  
}
    return answer
   
}
  
