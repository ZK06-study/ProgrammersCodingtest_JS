# 프로그래머스 12948. 핸드폰 번호 가리기 - 코드 리뷰

## 코드 분석

현재 코드는 전화번호의 마지막 4자리를 제외한 나머지 부분을 `*`로 가리는 문제를 해결합니다.

```javascript
function solution(phone_number) {
    var answer = phone_number.length - 4;
    return "*".repeat(answer) + phone_number.slice(-4)
}
```

전체 길이에서 4를 뺀 개수만큼 `*`를 반복하고, 마지막 4자리를 붙이는 방식으로 간결하게 해결했습니다.

## 개선할 부분

1. **변수 사용의 필요성**: `phone_number.length - 4`를 굳이 변수로 저장할 필요가 있는지 고려해보세요.


## 코드 개선 제안

- 변수명을 더 의미있게 변경해보세요
- 필요 없는 중간 변수를 제거해보세요
- 코드 스타일을 일관되게 유지해보세요

<details>
<summary>힌트 보기</summary>

더 간결하고 의미가 명확한 코드로 작성할 수 있습니다:

```javascript
// 힌트 1: 중간 변수 없이 한 번에
return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);

// 힌트 2: 의미를 더 명확하게 하려면
const visibleLength = 4;
const hiddenLength = phone_number.length - visibleLength;
return "*".repeat(hiddenLength) + phone_number.slice(-visibleLength);
```

첫 번째 방식은 더 간결하고, 두 번째 방식은 의도가 더 명확합니다. 상황에 따라 선택하면 됩니다.

</details>

## 성능 및 시간복잡도

- **시간복잡도**: O(n) - n은 전화번호 길이
- **공간복잡도**: O(n) - 결과 문자열 생성

## 긍정적인 부분

- **메서드 활용**: `String.repeat()`과 `slice(-4)` 메서드를 적절히 활용했습니다
- **간결성**: 핵심 로직을 간단하게 구현했습니다
- **정확성**: 문제 요구사항을 정확히 만족합니다
- **음수 인덱스 활용**: `slice(-4)`를 사용해 마지막 4자리를 깔끔하게 추출했습니다

전반적으로 핵심을 잘 파악하고 간결하게 구현한 좋은 코드입니다. 변수명과 스타일 정도만 개선하면 더욱 완성도 높은 코드가 될 것입니다.
