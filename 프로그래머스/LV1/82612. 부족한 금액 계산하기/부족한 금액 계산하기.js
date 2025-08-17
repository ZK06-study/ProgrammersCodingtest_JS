//내 돈에서 뺐을때 마이너스 값이 나온다. 
// 돈*count 를 모두 더해준다 sum 

function solution(price, money, count) {
    var sum = 0;
    var answer=0;

    for(let i = 1; i<= count; i++){
        sum = sum + price * i
    }
    
    if(money <= sum){
         answer = Math.abs(money - sum)
    }else{
        answer =0;
    }
    
    return answer;
}