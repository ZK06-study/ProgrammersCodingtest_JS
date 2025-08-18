# 프로그래머스 42840. 모의고사 - 코드 리뷰

## 코드 분석

현재 코드는 세 명의 수포자가 각각의 패턴으로 찍는 답안과 실제 정답을 비교해 가장 많이 맞힌 사람을 찾는 문제입니다.

```javascript
function solution(answers) {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const answer = [0, 0, 0];
    
    // 문제의 정답을 비교하고 맞으면 카운트를 증가시킨다.
    for(let i = 0; i < answers.length; ++i){
        if(answers[i] === arr1[i%arr1.length]){
            answer[0]++;
        }
        if(answers[i] === arr2[i%arr2.length]){
            answer[1]++;
        }
        if(answers[i] === arr3[i%arr3.length]){
            answer[2]++;
        }
    }
    
    // 가장 높은 점수를 찾는다. 
    let max = 0;
    for(let i = 0; i < answer.length; ++i){
        max = max < answer[i] ? answer[i] : max;
    }
    // max = Math.max(answer[0], answer[1], answer[2]);
    
    // 가장 높은 점수를 받은 사람을 찾아 결과 배열에 추가한다.
    const result = [];
    for(let i = 0; i < answer.length; ++i){
        if(max === answer[i]){
            result.push(i+1);
        }
    }
    
    return result;
}
```

코드는 세 사람의 찍기 패턴을 배열로 정의하고, 각각의 정답률을 계산한 후 최고점수를 받은 사람들을 찾는 방식으로 구현되었습니다.

## 개선할 부분

1. **변수명 혼동**: `answer` 변수가 실제로는 점수 배열인데, 함수의 매개변수인 `answers`(정답 배열)와 혼동될 수 있습니다. `scores` 또는 `counts`가 더 적절합니다.

2. **주석된 코드**: `Math.max()` 사용 부분이 주석 처리되어 있는데, 실제로는 더 간결하고 명확한 방법입니다.

3. **반복되는 패턴**: 세 명의 정답률 계산이 반복적인 코드로 되어 있어 DRY 원칙에 위배됩니다.


## 코드 개선 제안

- 변수명을 더 명확하게 변경해보세요
- 주석 처리된 `Math.max()` 사용을 고려해보세요
- 반복되는 로직을 배열이나 함수로 추상화해보세요

<details>
<summary>힌트 보기</summary>

더 간결하고 확장 가능한 코드로 개선할 수 있습니다:

```javascript
// 힌트: 패턴을 2차원 배열로 관리하고 함수형 프로그래밍 활용
function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const scores = patterns.map(pattern => 
        answers.filter((answer, i) => 
            answer === pattern[i % pattern.length]
        ).length
    );
    
    const maxScore = Math.max(...scores);
    
    return scores
        .map((score, i) => score === maxScore ? i + 1 : null)
        .filter(person => person !== null);
}
```

이렇게 하면 패턴이 추가되어도 쉽게 확장할 수 있고, 함수형 프로그래밍 스타일로 더 읽기 쉬워집니다.

</details>

## 성능 및 시간복잡도

- **시간복잡도**: O(n) - 정답 배열을 세 번 순회하므로 3n ≈ O(n)
- **공간복잡도**: O(1) - 고정된 크기의 배열들만 사용

## 긍정적인 부분

- **명확한 주석**: 각 단계의 의도가 주석으로 잘 설명되어 있습니다
- **정확한 로직**: 문제의 요구사항을 정확히 구현했습니다  
- **모듈러 연산 활용**: `i % arr.length`를 사용해 패턴 반복을 잘 처리했습니다
- **최고점 동점자 처리**: 여러 명이 최고점인 경우를 올바르게 처리합니다

전반적으로 문제를 정확히 이해하고 구현한 좋은 코드입니다. 코드 구조를 조금 더 간결하게 만들면 완성도가 높아질 것입니다.
