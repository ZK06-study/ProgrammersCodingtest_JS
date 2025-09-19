function solution(s) {
    const answer = []
    const array = s.split("")
    
    array.forEach((item)=>{
        if(s.indexOf(item) === s.lastIndexOf(item)){
            answer.push((item))
        }
        
    })
    
    
    return answer.sort().join("")
    
    

    
}