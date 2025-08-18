# 프로그래머스 12910. 나누어 떨어지는 숫자 배열 - 코드 리뷰

## 코드 분석

현재 코드는 배열의 각 원소를 순회하면서 `divisor`로 나누어 떨어지는 원소를 찾아 새 배열에 추가하고, 정렬한 후 빈 배열인 경우 [-1]을 반환하는 방식입니다.

```javascript
function solution(arr, divisor) {
    var answer = [];
    for(let i =0; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i])
        }
    }
    answer.sort(function(a,b){
        return a-b;
    });
    
    if(answer.length === 0){
        answer.push(-1)
    }
    
    return answer;
}
```

전반적으로 문제의 요구사항을 정확히 구현했고, 로직이 명확합니다.

## 개선할 부분

1. **함수형 프로그래밍 고려**: JavaScript의 배열 메서드(`filter`, `sort`)를 활용하면 더 간결한 코드를 작성할 수 있습니다.


## 코드 개선 제안

- 일관된 코딩 스타일을 유지하세요 (공백, 들여쓰기)
- 더 의미 있는 변수명을 사용해보세요
- 배열 메서드 체이닝을 고려해보세요

<details>
<summary>체이닝으로 줄이기</summary>

JavaScript의 `filter()` 메서드를 사용하면 더 간결하게 작성할 수 있습니다:

```javascript
// 힌트: 이런 식으로 체이닝을 활용할 수 있습니다
const filtered = arr.filter(num => num % divisor === 0);
const sorted = filtered.sort((a, b) => a - b);
return sorted.length === 0 ? [-1] : sorted;
```

함수형 프로그래밍 스타일을 사용하면 코드가 더 읽기 쉬워지고 실수할 가능성도 줄어듭니다.

</details>
