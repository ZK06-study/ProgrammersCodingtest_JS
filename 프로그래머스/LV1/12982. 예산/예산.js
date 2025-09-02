function solution(d, budget) {
    let count = 0
    let total = 0
    
    const order = d.sort((a,b)=>a-b)
        
    for(let i of order){
        if(i <= budget){
            budget -= i
            count+=1
        }
    }
    
    
  
  
    return count
}