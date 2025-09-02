function solution(nums) {
    var answer = 0;
    const half = nums.length / 2
    const ele = [...new Set([...nums])]
    // half 가 2일때 ele 는 3이면 
    // half 가 3일때 ele가 2이면
    
    return Math.min(half,ele.length)
       
}