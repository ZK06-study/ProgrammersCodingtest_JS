function solution(N, stages) {
    var answer = [];
    
    for(let i= 1; i<=N; i++){
        let total = stages.filter((x)=>x >=i).length;
        let count = stages.filter((x)=>x ===i).length;
        answer.push([i,count/total])
    }
    
    answer.sort((a,b)=>b[1]-a[1])
    
    return answer.map((x)=>x[0]);
}