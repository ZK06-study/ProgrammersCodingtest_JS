function solution(arr) {

    
    if(arr.length === 1) {
        return [-1]
    }else{
        let min = Math.min(...arr)
        let num = arr.indexOf(min)
        arr.splice(num,1)
    }
    
    return arr
    
}