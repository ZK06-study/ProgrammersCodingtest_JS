function solution(x) {
    
    let count = 0
    x.toString().split("").forEach((num)=>{
        
        count += Number(num)
    })
    return !!(x % count === 0)
}