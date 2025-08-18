# 프로그래머스 142086. 가장 가까운 같은 글자 - 코드 리뷰

## 코드 분석

현재 코드는 문자열의 각 위치에서 해당 문자가 이전에 나타났던 가장 가까운 위치와의 거리를 구하는 문제입니다.

```javascript
function solution(s) {
    let stack= [] // s의 값을 넣는 방법
    let answer = [] // 결과값
    let asci = []
    let alpa = new Map([
        [97,-1], [98,-1], [99,-1], // ... a~z까지 모든 ASCII 값
    ])
    
    for(let i = 0; i < s.length; i++){
        let count = 0
        if(!stack.includes(s[i])){
            stack.push(s[i])
            alpa.set(s[i],i)
            answer.push(-1)
        }else{ 
            i-alpa.get(s[i]) 
            stack.push(s[i])
            answer.push(i-alpa.get(s[i]))
            alpa.set(s[i],i)
        }
    }
    return answer
}
```

## 개선할 부분

1. **불필요한 자료구조**: `stack` 배열과 `alpa` Map이 중복된 역할을 하고 있습니다. `stack.includes()`는 O(n) 연산이므로 비효율적입니다.

2. **사용하지 않는 변수**: `asci`, `count` 변수가 선언되었지만 사용되지 않습니다.

3. **의미없는 코드**: `i-alpa.get(s[i])` 라인이 있지만 아무 역할을 하지 않습니다.

4. **변수명**: `alpa`는 `alphabet`의 축약인 것 같지만 명확하지 않습니다.

5. **로직 복잡성**: Map을 사용했지만 단순히 문자의 마지막 위치만 저장하면 되는 문제입니다.

## 코드 개선 제안

- 불필요한 자료구조와 변수를 제거해보세요
- 더 간단한 자료구조로 문제를 해결해보세요
- 의미없는 코드 라인을 제거해보세요

<details>
<summary>힌트 보기</summary>

이 문제는 훨씬 간단하게 해결할 수 있습니다:

```javascript
// 힌트: Map을 단순하게 사용
function solution(s) {
    const lastIndex = new Map();
    const result = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (lastIndex.has(char)) {
            result.push(i - lastIndex.get(char));
        } else {
            result.push(-1);
        }
        lastIndex.set(char, i);
    }
    
    return result;
}
```

- 각 문자의 마지막 등장 위치만 기억하면 됩니다
- `stack` 배열이나 하드코딩된 ASCII 값은 필요 없습니다
- 간단한 `Map`을 사용해 O(1) 시간에 검색할 수 있습니다

</details>

## 성능 및 시간복잡도

**현재 코드:**
- **시간복잡도**: O(n²) - `stack.includes()`가 O(n)이므로
- **공간복잡도**: O(1) - 고정된 크기의 Map 사용

**개선 후:**
- **시간복잡도**: O(n) - Map 연산이 O(1)이므로
- **공간복잡도**: O(k) - k는 등장한 문자의 종류 수

## 긍정적인 부분

- **문제 이해**: 문제의 핵심을 파악하고 정확한 결과를 출력합니다
- **Map 활용**: Map 자료구조를 사용해 문자와 위치를 연결했습니다
- **정확성**: 테스트 케이스를 통과하는 올바른 로직입니다

현재 코드는 동작하지만 불필요한 복잡성이 많습니다. 핵심 아이디어는 좋으니 코드를 단순화하면 훨씬 깔끔한 답이 될 것 같아요.
