# 프로그래머스 12919. 서울에서 김서방 찾기 - 코드 리뷰

## 코드 분석

현재 코드는 배열에서 "Kim"을 찾아서 그 위치를 포함한 문자열을 반환하는 문제입니다.

```javascript
function solution(seoul) {
    //var answer = '';
    // 입력: 배열
    // 출력 :string(김서방은"x"에 있다)
    // 1. 배열의 0 번째에 kim..? 있다면 
    // 2. 김서방은 0에 있다 
    // 3. 만약에 1번째에 kim이 있다면 
    // 4. 김서방은 1에 있다
    // `김서방은 ${i}에 있다`
    
    for(let i=0; i<seoul.length; i++){
        if(seoul[i] === "Kim"){
            return `김서방은 ${i}에 있다`;
        }
    }
}
```

배열을 순회하면서 "Kim"을 찾으면 바로 결과를 반환하는 간단하고 직관적인 방식입니다.

## 개선할 부분

1. **배열 메서드 활용**: JavaScript의 내장 메서드를 사용하면 더 간결하게 작성할 수 있습니다.

## 코드 개선 제안

- 불필요한 주석을 제거하세요
- 배열 메서드 활용을 고려해보세요
- 코드만으로도 의미가 명확하도록 작성해보세요

<details>
<summary>힌트 보기</summary>

여러 가지 방법으로 개선할 수 있습니다:

```javascript
// 힌트 1: 기본 개선 (주석 정리)
function solution(seoul) {
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === "Kim") {
            return `김서방은 ${i}에 있다`;
        }
    }
}

// 힌트 2: findIndex 활용
function solution(seoul) {
    const index = seoul.findIndex(name => name === "Kim");
    return `김서방은 ${index}에 있다`;
}

// 힌트 3: indexOf 활용
function solution(seoul) {
    const index = seoul.indexOf("Kim");
    return `김서방은 ${index}에 있다`;
}

// 힌트 4: for...of 활용
function solution(seoul) {
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === "Kim") {
            return `김서방은 ${i}에 있다`;
        }
    }
}
```

`indexOf`나 `findIndex`를 사용하면 한 줄로 인덱스를 찾을 수 있습니다!

</details>

## 성능 및 시간복잡도

- **시간복잡도**: O(n) - 최악의 경우 배열을 끝까지 순회
- **공간복잡도**: O(1) - 상수 공간만 사용

## 긍정적인 부분

- **조기 반환**: "Kim"을 찾으면 바로 반환해서 불필요한 반복을 피합니다
- **템플릿 리터럴**: ES6 템플릿 리터럴을 활용해 문자열을 깔끔하게 구성했습니다
- **정확한 로직**: 문제 요구사항을 정확히 구현했습니다
- **사고 과정**: 주석을 통해 문제 해결 과정을 단계별로 정리했습니다 (실제 코드에서는 제거 권장)

## 문제 해결 접근

이 문제는 전형적인 **선형 탐색(Linear Search)** 문제입니다:
- 배열의 처음부터 끝까지 순회
- 조건에 맞는 요소를 찾으면 즉시 반환
- JavaScript의 배열 메서드들이 내부적으로 같은 방식으로 동작

전반적으로 문제를 정확히 해결한 코드입니다.
