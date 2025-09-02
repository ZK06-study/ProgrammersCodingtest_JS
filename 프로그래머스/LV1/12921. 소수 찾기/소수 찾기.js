function solution(n) {
    // 모두 소수
    const isPrime = new Array(n+1).fill(true); 
    // 0,1은 소수 x 
    isPrime[0] = false;
    isPrime[1] = false;
    
    // 2~ sqrt(n) 배수 제거 
    for(let i = 2; i * i <=n; i++){
        // 소수인 경우
        if(isPrime[i]){
            for(let j= i*i;j<=n; j+=i){
                isPrime[j] = false
            }
        }
    }
    
    
    return isPrime.filter((prime)=>prime).length
}