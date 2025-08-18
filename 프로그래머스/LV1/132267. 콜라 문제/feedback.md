# 프로그래머스 132267. 콜라 문제 - 코드 리뷰

## 코드 분석

현재 코드는 빈 병 a개를 가져다주면 콜라 b병을 주는 조건에서, n개의 빈 병으로 최대 몇 병의 콜라를 받을 수 있는지 계산하는 문제입니다.

```javascript
function solution(a, b, n) {
    let answer = 0
    let solution = n
    
    while(true){
        if(a > solution){
            break;
        }
        answer+=parseInt(solution/a)*b
        solution = parseInt(solution/a)*b + solution%a
    }
    return answer
}
```

반복문을 사용해 교환 가능한 콜라 수를 계산하고, 새로 받은 콜라와 남은 빈 병을 더해 다시 계산하는 시뮬레이션 방식입니다.

## 개선할 부분

1. **변수명 충돌**: `solution`이라는 변수명이 함수명과 같아 혼란을 줄 수 있습니다. `currentBottles` 또는 `remainingBottles` 같은 이름이 더 적절합니다.

2. **세미콜론 일관성**: 일부 줄에만 세미콜론이 있어 일관성이 없습니다.

3. **`parseInt` 사용**: 여기서는 `Math.floor()`가 의도를 더 명확하게 표현합니다. (음수가 없으므로)

4. **중복 계산**: `parseInt(solution/a)`를 두 번 계산하고 있어 비효율적입니다.


## 코드 개선 제안

- 변수명을 더 명확하게 변경해보세요
- 중복 계산을 변수로 추출해보세요
- 일관된 코딩 스타일을 유지해보세요

<details>
<summary>힌트 보기</summary>

중복 계산을 제거하고 변수명을 개선해보세요:

```javascript
// 힌트: 이렇게 개선할 수 있습니다
let totalCola = 0;
let currentBottles = n;

while (currentBottles >= a) {
    const newCola = Math.floor(currentBottles / a) * b;
    totalCola += newCola;
    currentBottles = newCola + (currentBottles % a);
}

return totalCola;
```

이렇게 하면 변수명도 명확하고, 중복 계산도 제거됩니다. `Math.floor()`를 사용하면 정수 나눗셈의 의도도 더 명확해집니다.

</details>

## 성능 및 시간복잡도

- **시간복잡도**: O(log n) - 매번 병의 수가 줄어들므로
- **공간복잡도**: O(1) - 상수 공간만 사용

## 긍정적인 부분

- **핵심 로직 파악**: 시뮬레이션 방식으로 문제를 정확히 해결했습니다
- **반복 조건**: 교환 불가능한 상황을 올바르게 판단합니다
- **수학적 계산**: 나눗셈과 나머지 연산을 적절히 활용했습니다
- **무한루프 방지**: 적절한 종료 조건을 설정했습니다
