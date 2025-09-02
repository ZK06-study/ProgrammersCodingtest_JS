function solution(new_id) {




let answer = new_id.toLowerCase()
.replace(/[^\w-_.]/g,'')
.replace(/\.{2,}/g,'.')
.replace(/^\.|\.$/g,'')
.replace(/^$/,'a')
.slice(0,15)
.replace(/\.$/,'')


    while(answer.length<3){
        answer += answer[answer.length-1]
    }
    return answer

}