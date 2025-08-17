function solution(a, b, n) {
   let answer = 0
   let solution = n
   
   while(true){
       if(a > solution){
           break;
       }
       answer+=parseInt(solution/a)*b
       solution = parseInt(solution/a)*b +  solution%a
   }
    return answer
}