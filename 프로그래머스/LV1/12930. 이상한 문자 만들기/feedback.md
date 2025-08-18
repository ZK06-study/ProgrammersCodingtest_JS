# 프로그래머스 12930. 이상한 문자 만들기 - 코드 리뷰

## 코드 분석

현재 코드는 문자열의 각 단어에서 짝수 인덱스는 대문자, 홀수 인덱스는 소문자로 변환하는 문제를 해결합니다.

```javascript
function solution(s) {
    var answer = s.split(" ");
    
    var word = [];
    for(let i = 0; i< answer.length; i++){
        var sum = [];
        for(let j = 0; j<answer[i].length; j++){
            if(j%2 === 0){
                sum.push(answer[i][j].toUpperCase())
            }else{
                sum.push(answer[i][j].toLowerCase())
            }
        }
        word.push(sum.join(''))
    }
    
    return word.join(' ');
}
```

문자열을 공백으로 분리하고, 각 단어별로 인덱스에 따라 대소문자를 변환한 후 다시 합치는 방식입니다.

## 개선할 부분

1. **변수명의 의미**: `answer`, `word`, `sum` 등이 실제 역할을 명확히 나타내지 못합니다.
   - `answer` → `words` (단어 배열)
   - `word` → `result` (결과 배열)  
   - `sum` → `transformedChars` (변환된 문자 배열)

2. **복잡한 중첩 구조**: 중첩 반복문과 다중 배열로 인해 코드가 복잡해 보입니다.

3. **변수 선언 일관성**: `var`와 `let`이 혼재되어 있습니다.

4. **함수형 프로그래밍**: JavaScript의 배열 메서드를 활용하면 더 간결하게 작성할 수 있습니다.

## 코드 개선 제안

- 변수명을 더 의미있게 변경해보세요
- 중첩 구조를 단순화해보세요
- 배열 메서드를 활용한 함수형 스타일을 고려해보세요

<details>
<summary>힌트 보기</summary>

여러 가지 방법으로 개선할 수 있습니다:

```javascript
// 힌트 1: 기본 개선 (변수명 수정)
function solution(s) {
    const words = s.split(" ");
    const result = [];
    
    for (let i = 0; i < words.length; i++) {
        const transformedChars = [];
        for (let j = 0; j < words[i].length; j++) {
            if (j % 2 === 0) {
                transformedChars.push(words[i][j].toUpperCase());
            } else {
                transformedChars.push(words[i][j].toLowerCase());
            }
        }
        result.push(transformedChars.join(''));
    }
    
    return result.join(' ');
}

// 힌트 2: map 활용
function solution(s) {
    return s.split(" ").map(word => 
        word.split("").map((char, index) => 
            index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join("")
    ).join(" ");
}

// 힌트 3: 단일 반복문으로 처리
function solution(s) {
    return s.split(" ").map(word => {
        let result = "";
        for (let i = 0; i < word.length; i++) {
            result += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
        }
        return result;
    }).join(" ");
}

// 힌트 4: Array.from 활용
function solution(s) {
    return s.split(" ").map(word => 
        Array.from(word, (char, i) => 
            i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join("")
    ).join(" ");
}
```

`map`을 사용하면 더 함수형 스타일로 작성할 수 있습니다!

</details>

## 성능 및 시간복잡도

- **시간복잡도**: O(n) - n은 전체 문자열의 길이
- **공간복잡도**: O(n) - 결과 문자열을 위한 공간

## 긍정적인 부분

- **정확한 로직**: 단어별로 인덱스 기준 대소문자 변환을 올바르게 구현했습니다
- **단계별 처리**: 문제를 단어 분리 → 변환 → 결합 단계로 체계적으로 처리했습니다
- **인덱스 활용**: 짝수/홀수 판별을 위한 나머지 연산을 적절히 사용했습니다
- **문자열 메서드**: `split()`, `join()`, `toUpperCase()`, `toLowerCase()` 등을 잘 활용했습니다

## 문제 해결 접근

이 문제의 핵심은:
1. **공백 기준 분리**: 각 단어별로 독립적으로 처리
2. **인덱스 기반 변환**: 각 단어 내에서 인덱스에 따른 대소문자 변환
3. **결과 재조합**: 변환된 단어들을 다시 공백으로 연결

전반적으로 문제를 정확히 이해하고 단계별로 잘 구현한 코드입니다.
