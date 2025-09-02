function solution(n, arr1, arr2) {
    var answer = [];
    
    let decArr1 = arr1.map((arr)=> arr.toString(2).padStart(n,"0"))
    let decArr2 = arr2.map((arr)=>arr.toString(2).padStart(n,"0"))
    
    for(let i = 0; i < n; i++){
        let row = [];
        for(let j = 0; j < n; j++){
            
            if(!!Number(decArr1[i][j]) || !!Number(decArr2[i][j])) {
                row.push("#")
            } else {
                row.push(" ")
            }
        }
        answer.push(row.join('')); 
    }
    
    return answer;
}