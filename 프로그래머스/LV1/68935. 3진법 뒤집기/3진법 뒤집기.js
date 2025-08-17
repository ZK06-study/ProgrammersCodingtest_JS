// function solution(n) {
//     var answer = n.toString(3).replit('').reverse().join('');
//     return parseInt(answer,3);
// }

function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3)
}