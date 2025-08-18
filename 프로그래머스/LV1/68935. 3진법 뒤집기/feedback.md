# 프로그래머스 68935. 3진법 뒤집기 - 코드 리뷰

## 코드 분석

현재 코드는 10진법 수를 3진법으로 변환한 후 뒤집어서 다시 10진법으로 변환하는 문제입니다.

```javascript
// function solution(n) {
// var answer = n.toString(3).replit('').reverse().join('');
// return parseInt(answer,3);
// }

function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3)
}
```

주석된 코드에는 오타가 있고, 실제 구현된 코드는 문제를 정확히 해결합니다.

## 개선할 부분

1. **세미콜론 누락**: 계속 빠먹으시는데, 함수 끝에 세미콜론을 추가하는 것이 좋습니다.

3. **가독성**: 한 줄에 모든 로직이 체이닝되어 있어 복잡해 보일 수 있습니다.

4. **변수명**: 중간 단계를 변수로 만들면 각 단계의 의미를 더 명확하게 할 수 있습니다.

## 코드 개선 제안

- 주석 처리된 코드를 제거하세요
- 세미콜론을 추가해서 일관성을 유지하세요
- 필요에 따라 중간 단계를 변수로 분리해보세요

<details>
<summary>힌트 보기</summary>

현재 코드가 이미 효율적이고 간결합니다. 필요에 따라 가독성을 위해 단계별로 나눌 수 있습니다:

```javascript
// 힌트 1: 현재 코드가 이미 최적 (세미콜론만 추가)
function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

// 힌트 2: 단계별로 분리해서 가독성 향상
function solution(n) {
    const ternary = n.toString(3);        // 3진법 변환
    const reversed = ternary.split('').reverse().join(''); // 뒤집기
    return parseInt(reversed, 3);         // 10진법 변환
}
```

첫 번째 방식은 간결하고, 두 번째 방식은 각 단계가 명확합니다. 상황에 따라 선택하면 됩니다.

</details>

## 성능 및 시간복잡도

- **시간복잡도**: O(log₃ n) - 3진법 변환 시 자릿수만큼
- **공간복잡도**: O(log₃ n) - 문자열과 배열 생성

## 긍정적인 부분

- **메서드 체이닝**: JavaScript의 문자열/배열 메서드를 효과적으로 연결했습니다
- **간결성**: 핵심 로직을 한 줄로 간결하게 표현했습니다
- **정확성**: 문제 요구사항을 정확히 만족합니다
- **내장 함수 활용**: `toString(3)`, `split('')`, `reverse()`, `join('')`, `parseInt(, 3)` 등을 적절히 활용했습니다

## 추가 참고사항

- `toString(radix)`: 특정 진법으로 변환
- `parseInt(string, radix)`: 특정 진법에서 10진법으로 변환
- 이 두 메서드의 조합은 진법 변환 문제에서 매우 유용합니다

전반적으로 매우 좋은 답입니다. 주석 정리와 세미콜론만 추가하면 완벽한 코드가 될 것입니다!
