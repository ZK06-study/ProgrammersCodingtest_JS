# 프로그래머스 76501. 음양 더하기 - 코드 리뷰

## 코드 분석

현재 코드는 절댓값 배열과 부호 배열을 받아서 실제 수들의 합을 계산하는 문제입니다.

```javascript
function solution(absolutes, signs) {
    var answer = 0;
    //absolutes의 길이보다 작은 수 
    //signs 의 길이의 ture이면1 false면 -1 
    for(let i= 0 ; i < absolutes.length; i++){
        if(signs[i] === false){
            answer += absolutes[i] * -1
        }else{
            answer = answer + absolutes[i]
        }
    }
    
    return answer;
}
```

절댓값에 부호를 적용해서 더하는 로직을 정확히 구현했습니다.

## 개선할 부분

1. **일관성 없는 연산**: `answer += absolutes[i] * -1`과 `answer = answer + absolutes[i]`가 혼재되어 있습니다.

2. **불필요한 곱셈**: `-1`을 곱하는 대신 `-absolutes[i]`가 더 간단합니다.

## 코드 개선 제안

- 의미 없는 주석을 제거하세요
- 일관된 누적 연산 방식을 사용하세요
- 변수명을 더 명확하게 변경해보세요

<details>
<summary>힌트 보기</summary>

여러 가지 방법으로 개선할 수 있습니다:

```javascript
// 힌트 1: 기본 개선
function solution(absolutes, signs) {
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]) {
            sum += absolutes[i];
        } else {
            sum -= absolutes[i];
        }
    }
    return sum;
}

// 힌트 2: 삼항 연산자 활용
function solution(absolutes, signs) {
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        sum += signs[i] ? absolutes[i] : -absolutes[i];
    }
    return sum;
}

// 힌트 3: reduce 활용
function solution(absolutes, signs) {
    return absolutes.reduce((sum, abs, i) => 
        sum + (signs[i] ? abs : -abs), 0
    );
}

// 힌트 4: map과 reduce 조합
function solution(absolutes, signs) {
    return absolutes
        .map((abs, i) => signs[i] ? abs : -abs)
        .reduce((sum, num) => sum + num, 0);
}
```

모두 동일한 결과를 만들지만, 각각 다른 스타일입니다.

</details>

## 성능 및 시간복잡도

- **시간복잡도**: O(n) - 배열을 한 번 순회
- **공간복잡도**: O(1) - 상수 공간만 사용

## 긍정적인 부분

- **정확한 로직**: 문제 요구사항을 정확히 구현했습니다
- **조건문 활용**: boolean 값에 따른 부호 처리를 올바르게 했습니다
- **반복문 활용**: 배열을 순회하는 기본적인 방법을 잘 사용했습니다
- **결과 정확성**: 모든 테스트 케이스를 통과하는 올바른 로직입니다

전반적으로 문제를 정확히 이해하고 해결한 좋은 코드입니다. 코딩 스타일과 일관성만 개선하면 더욱 완성도 높은 코드가 될 것입니다.
