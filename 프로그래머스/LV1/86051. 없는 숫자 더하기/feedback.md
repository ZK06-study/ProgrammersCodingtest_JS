# 프로그래머스 86051. 없는 숫자 더하기 - 코드 리뷰

## 코드 분석

현재 코드는 0부터 9까지 숫자 중 배열에 없는 숫자들의 합을 구하는 문제를 해결합니다.

```javascript
function solution(numbers) {
    return 45 - numbers.reduce((acc,acr)=>acc+acr);
}
```

0~9의 총합이 45임을 이용해 주어진 배열의 합을 빼는 매우 좋은 접근법입니다.

## 개선할 부분

1. **매개변수명**: `reduce`의 콜백에서 `acr`은 일반적이지 않습니다. `cur` 또는 `current`가 더 일반적입니다.


## 코드 개선 제안

- 매개변수명을 더 일반적인 이름으로 변경해보세요
- 매직 넘버의 의미를 명확하게 해보세요
- 세미콜론을 추가해서 일관성을 유지하세요

<details>
<summary>힌트 보기</summary>

현재 접근법이 매우 훌륭합니다. 몇 가지 스타일 개선만 고려해보세요:

```javascript
// 힌트 1: 기본 개선 (매개변수명 수정)
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur);
}

// 힌트 2: 의미를 더 명확하게
function solution(numbers) {
    const totalSum = 45; // 0~9의 합
    const presentSum = numbers.reduce((acc, cur) => acc + cur, 0);
    return totalSum - presentSum;
}

// 힌트 3: 상수로 의미 명확화
function solution(numbers) {
    const TOTAL_SUM_0_TO_9 = 45;
    return TOTAL_SUM_0_TO_9 - numbers.reduce((sum, num) => sum + num, 0);
}

// 힌트 4: 다른 접근법 (Set 활용)
function solution(numbers) {
    const numberSet = new Set(numbers);
    let sum = 0;
    for (let i = 0; i <= 9; i++) {
        if (!numberSet.has(i)) sum += i;
    }
    return sum;
}
```

첫 번째 접근법(현재 방식)이 가장 효율적입니다.

</details>

## 성능 및 시간복잡도

- **시간복잡도**: O(n) - reduce로 배열을 한 번 순회
- **공간복잡도**: O(1) - 상수 공간만 사용

## 긍정적인 부분

- **수학적 사고**: 0~9의 합이 45라는 것을 활용한 창의적 접근법입니다
- **효율성**: 최적화된 O(n) 시간복잡도로 해결했습니다
- **간결성**: 핵심을 한 줄로 간결하게 표현했습니다
- **reduce 활용**: JavaScript의 배열 메서드를 적절히 활용했습니다

## 수학적 배경

- 0 + 1 + 2 + ... + 9 = 9 × 10 ÷ 2 = 45
- 이는 등차수열의 합 공식을 활용한 것입니다
