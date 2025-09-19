function solution(cipher, code) {
    const arr = cipher.split("").filter((item,index)=> (index + 1) % code === 0)
   
    
    
    return arr.join("");
}