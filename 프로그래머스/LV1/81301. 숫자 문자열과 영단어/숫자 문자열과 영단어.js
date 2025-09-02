
function solution(s) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    let answer = s;
    for(let i = 0; i<arr.length; i++){
        let sam = answer.split(arr[i]); // answer 의 값을 사용해야함 -> 원본 값을 사용하고 있었음 
        answer = sam.join(i)
    }
    return Number(answer)
}