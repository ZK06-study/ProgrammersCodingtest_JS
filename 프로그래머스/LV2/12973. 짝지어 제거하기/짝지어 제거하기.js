function solution(s)
{
    var answer = -1;
    const emp = []
    
    for(let i = 0; i < s.length; i++){
            const last = emp[emp.length- 1]
            if(emp.length && last === s[i]){
                emp.pop()
            } else{
                emp.push(s[i])
            }
    }

    
    

    return emp.length > 0 ? 0:1;
}