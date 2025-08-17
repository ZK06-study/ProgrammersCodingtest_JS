function solution(seoul) {
    //var answer = '';
    // 입력: 배열
    // 출력 :string(김서방은"x"에 있다)
    // 1. 배열의 0 번째에 kim..? 있다면 
    // 2. 김서방은 0에 있다 
    // 3. 만약에 1번째에 kim이 있다면 
    // 4. 김서방은 1에 있다
    // `김서방은 ${i}에 있다`
    
    for(let i=0; i<seoul.length; i++){
        if(seoul[i] === "Kim"){
            return `김서방은 ${i}에 있다`
        }
    }
}