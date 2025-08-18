# 프로그래머스 42748. K번째수 - 코드 리뷰

## 코드 분석

현재 코드는 주어진 commands 배열의 각 명령어에 따라 배열을 자르고, 정렬한 후 특정 위치의 값을 찾는 문제를 해결합니다.

```javascript
function solution(array, commands) {
    var answer = [];

    for(let i=0; i<commands.length; i++){
        let a = array.slice(commands[i][0]-1, commands[i][1])
        a.sort((a,b)=>{return a-b})
        answer.push(a[commands[i][2]-1])
    }
    
    return answer;
}
```

slice로 부분 배열을 추출하고, 정렬한 후 k번째 원소를 선택하는 로직을 정확히 구현했습니다.

## 개선할 부분

1. **변수 선언 일관성**: `var`와 `let`이 혼재되어 있습니다. 하나로 통일하는 것이 좋습니다.

2. **불필요한 중괄호**: `sort` 콜백에서 `{return a-b}`는 `a-b`로 간소화할 수 있습니다.

3. **반복되는 인덱싱**: `commands[i]`를 여러 번 사용하므로 구조분해할당을 고려할 수 있습니다.

## 코드 개선 제안

- 변수명을 더 의미있게 변경해보세요
- 변수 선언을 일관되게 하세요
- 구조분해할당으로 가독성을 높여보세요

<details>
<summary>힌트 보기</summary>

여러 가지 방법으로 개선할 수 있습니다:

```javascript
// 힌트 1: 기본 개선
function solution(array, commands) {
    const result = [];

    for (let i = 0; i < commands.length; i++) {
        const [start, end, k] = commands[i];
        const slicedArray = array.slice(start - 1, end);
        slicedArray.sort((a, b) => a - b);
        result.push(slicedArray[k - 1]);
    }
    
    return result;
}

// 힌트 2: map 활용
function solution(array, commands) {
    return commands.map(([start, end, k]) => {
        return array.slice(start - 1, end)
                   .sort((a, b) => a - b)[k - 1];
    });
}

// 힌트 3: 더 간결한 버전
function solution(array, commands) {
    return commands.map(([i, j, k]) => 
        array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
    );
}
```

구조분해할당과 map을 사용하면 더 함수형 프로그래밍 스타일로 작성할 수 있습니다.

</details>

## 성능 및 시간복잡도

- **시간복잡도**: O(m × n log n) - m은 commands 길이, n은 평균 부분배열 크기
- **공간복잡도**: O(n) - 부분 배열 생성을 위한 공간

## 긍정적인 부분

- **정확한 인덱싱**: 1-based 인덱스를 0-based로 올바르게 변환했습니다 (`-1` 처리)
- **slice 활용**: 원본 배열을 건드리지 않고 부분 배열을 생성했습니다
- **정렬 구현**: 숫자 정렬을 위한 비교 함수를 올바르게 사용했습니다
- **반복 처리**: 여러 commands를 순차적으로 처리하는 로직이 정확합니다

## 추가 참고사항

- `slice(start, end)`: start 포함, end 미포함
- 배열 인덱스는 0부터 시작하므로 문제의 1-based 인덱스를 변환해야 함
- `sort()` 메서드는 기본적으로 문자열 정렬이므로 숫자 정렬시 비교 함수 필요

전반적으로 문제의 요구사항을 정확히 파악하고 구현한 좋은 코드입니다. 변수명과 코딩 스타일만 개선하면 더욱 완성도 높은 코드가 될 것입니다!
