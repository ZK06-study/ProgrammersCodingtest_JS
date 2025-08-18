# 프로그래머스 12916. 문자열 내 p와 y의 개수 - 코드 리뷰

## 코드 분석

현재 코드는 문자열에서 'p'(대소문자 구분 없음)와 'y'(대소문자 구분 없음)의 개수를 세어서 같으면 true, 다르면 false를 반환하는 문제입니다.

```javascript
function solution(s){
    var answer = true;
    var p = 0;
    var y = 0;
    for(let i = 0 ; i<s.length; i++){
        if(s[i] === 'p' || s[i] === 'P'){
            p++;
        }
        if(s[i] === 'y' || s[i] === 'Y'){
            y++;
        }
    }
    
    if(p === y){
        answer = true;
    } else {
        answer = false;
    }
    
    return answer;
}
```

문자를 하나씩 순회하면서 p와 y의 개수를 세고 비교하는 방식으로 정확히 구현했습니다.

## 개선할 부분

1. **불필요한 초기화**: `answer = true`로 초기화했지만 조건문에서 다시 설정하므로 의미가 없습니다.

2. **불필요한 else문**: `if(p === y){ answer = true; } else { answer = false; }`는 `answer = (p === y)`로 간단히 할 수 있습니다.

3. **중복된 조건문**: 대소문자 비교를 위해 OR 연산을 사용했는데, `toLowerCase()`나 `toUpperCase()`를 활용하면 더 간결합니다.

4. **변수 선언 일관성**: `var`와 `let`이 혼재되어 있습니다.


## 코드 개선 제안

- 불필요한 변수와 조건문을 제거해보세요
- 대소문자 처리를 더 간결하게 해보세요
- 함수형 프로그래밍 스타일도 고려해보세요

<details>
<summary>힌트 보기</summary>

여러 가지 방법으로 개선할 수 있습니다:

```javascript
// 힌트 1: 기본 개선
function solution(s) {
    let pCount = 0;
    let yCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i].toLowerCase();
        if (char === 'p') pCount++;
        if (char === 'y') yCount++;
    }
    
    return pCount === yCount;
}

// 힌트 2: 정규표현식 활용
function solution(s) {
    const pCount = (s.match(/[pP]/g) || []).length;
    const yCount = (s.match(/[yY]/g) || []).length;
    return pCount === yCount;
}

// 힌트 3: filter 활용
function solution(s) {
    const lowerS = s.toLowerCase();
    const pCount = [...lowerS].filter(char => char === 'p').length;
    const yCount = [...lowerS].filter(char => char === 'y').length;
    return pCount === yCount;
}

// 힌트 4: 한 번의 순회로 처리
function solution(s) {
    let diff = 0;  // p - y의 차이
    
    for (const char of s.toLowerCase()) {
        if (char === 'p') diff++;
        if (char === 'y') diff--;
    }
    
    return diff === 0;
}
```

마지막 방법처럼 차이를 계산하는 방식도 효율적입니다!

</details>

## 성능 및 시간복잡도

- **시간복잡도**: O(n) - 문자열을 한 번 순회
- **공간복잡도**: O(1) - 상수 공간만 사용

## 긍정적인 부분

- **대소문자 처리**: 'p', 'P', 'y', 'Y'를 모두 올바르게 처리했습니다
- **정확한 로직**: 문제 요구사항을 정확히 구현했습니다
- **카운팅 방식**: 각각의 문자 개수를 세는 방식이 직관적입니다
- **조건 처리**: 같을 때와 다를 때를 올바르게 구분했습니다

## 추가 참고사항

- **문제 조건**: 'p'와 'y' 모두 하나도 없는 경우는 true를 반환해야 함 (0 === 0이므로 현재 코드로 올바르게 처리됨)
- **대소문자 변환**: `toLowerCase()`나 `toUpperCase()` 활용하면 조건문을 간소화 가능

전반적으로 문제를 정확히 이해하고 구현한 좋은 코드입니다.
