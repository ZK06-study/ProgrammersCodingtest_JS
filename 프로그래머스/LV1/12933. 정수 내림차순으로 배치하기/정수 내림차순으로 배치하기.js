function solution(n) {
    return Number(n.toString().split('').reverse().join('')); // join()괄호 안에 ''를 꼭 넣어줘야한다. 그렇지 않으면 값이 null이 되어버린다. 
}