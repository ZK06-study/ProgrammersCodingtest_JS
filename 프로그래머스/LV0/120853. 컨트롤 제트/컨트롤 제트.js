function solution(s) {
    const splitArray = s.split(" ");
    let sum = 0; // sum 변수 선언 추가
    
    for(let i = 0; i < splitArray.length; i++){
        if(splitArray[i] === 'Z'){
            sum -= Number(splitArray[i-1]);
        } else {
            sum += Number(splitArray[i]);
        }
    }
    
    return sum;
}