function solution(numbers) {
    let total =[];
    
    for(let i = 0; i < numbers.length; i++){
        for(let n = i+1; n < numbers.length; n++ ){
            total.push(numbers[i] + numbers[n])          
            console.log(total.join(''))
        }    
    }
    
    var set = new Set(total)
    
    
    return set;
}
function solution(numbers) {
    let total =[];
    
    for(let i = 0; i < numbers.length; i++){
        for(let n = i+1; n < numbers.length; n++ ){
            total.push(numbers[i] + numbers[n])          
           
        }    
    }
    var get = [...total]
     
    var set = new Set(get)
    console.log(set)
    var end = [...set]
    
    return end.sort(function (a,b) {return a-b;});
}