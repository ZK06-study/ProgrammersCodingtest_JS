function solution(s, n) {
    
    const char = s.split("").map((i)=>{
        if(i === " ") {
            return " "
        }
        const code = i.charCodeAt(0)
        const realCode = code + n
        
        if(code >=65 && code <= 90) {
            if(realCode > 90){
                return String.fromCharCode(realCode - 26)
            }
            return String.fromCharCode(realCode)
        }
        
        if(code >=97 && code <= 122){
            if(realCode > 122){
                return String.fromCharCode(realCode - 26)
            }
            return String.fromCharCode(realCode)
        }
    })
    // A 65 90 89 93
    // a 97 122
    
    
    return char.join("")  
    
}