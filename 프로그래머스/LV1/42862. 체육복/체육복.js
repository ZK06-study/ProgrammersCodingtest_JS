function solution(n, lost, reserve) {
    // 잃어버렸는데 여분이 없음
    
    let filterLost = lost.filter((x)=>!reserve.includes(x));
    let lostLength = filterLost.length;
    let filterReserve = reserve.filter((x)=>!lost.includes(x));
    
    filterLost.sort((a,b)=>a-b)
    let answer = n - lostLength;
    
    for(let i = 0; i<lostLength; i++){
        if(filterReserve.includes(filterLost[i]-1)){
          answer +=1
          filterReserve = filterReserve.filter((item)=>item !== filterLost[i]-1)
        } 
        else if(filterReserve.includes(filterLost[i]+1)){
            answer +=1
            filterReserve = filterReserve.filter((item)=>item !== filterLost[i]+1)
        }
    }
    
    
    
    
    return answer;
}