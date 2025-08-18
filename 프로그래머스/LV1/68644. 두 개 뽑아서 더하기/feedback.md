# 프로그래머스 68644. 두 개 뽑아서 더하기 - 코드 리뷰

## 코드 분석

현재 코드는 배열에서 서로 다른 두 개의 수를 뽑아서 더한 결과를 중복 제거하고 정렬해서 반환하는 문제입니다. 하지만 코드에 두 개의 `solution` 함수가 정의되어 있습니다.

```javascript
// 첫 번째 함수 (미완성)
function solution(numbers) {
    let total =[];
    
    for(let i = 0; i < numbers.length; i++){
        for(let n = i+1; n < numbers.length; n++ ){
            total.push(numbers[i] + numbers[n]) 
            console.log(total.join(''))
        } 
    }
    
    var set = new Set(total)
    return set; // Set을 바로 반환 (문제!)
}

// 두 번째 함수 (완성)
function solution(numbers) {
    let total =[];
    
    for(let i = 0; i < numbers.length; i++){
        for(let n = i+1; n < numbers.length; n++ ){
            total.push(numbers[i] + numbers[n]) 
        } 
    }
    var get = [...total]
    var set = new Set(get)
    console.log(set)
    var end = [...set]
    
    return end.sort(function (a,b) {return a-b;});
}
```

## 개선할 부분

1. **불필요한 변수들**: 두 번째 함수에서 `get`, `end` 변수가 불필요합니다. Set을 배열로 바로 변환할 수 있습니다.

2. **첫 번째 함수의 오류**: Set 객체를 바로 반환하면 배열이 아니므로 문제 요구사항에 맞지 않습니다.

3. **변수명**: `total`, `get`, `end` 등의 변수명이 명확하지 않습니다.

4. **스프레드 연산자 오용**: `var get = [...total]`는 의미 없는 복사입니다.

## 코드 개선 제안

- 중복된 함수 정의를 제거하세요
- 불필요한 중간 변수들을 제거하세요
- 더 의미있는 변수명을 사용해보세요

<details>
<summary>힌트 보기</summary>

Set과 스프레드 연산자를 효율적으로 사용해서 간결하게 작성할 수 있습니다:

```javascript
// 힌트: 간결한 버전
function solution(numbers) {
    const sums = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sums.push(numbers[i] + numbers[j]);
        }
    }
    
    return [...new Set(sums)].sort((a, b) => a - b);
}

// 힌트: 더 함수형 스타일
function solution(numbers) {
    const sums = numbers.flatMap((num, i) => 
        numbers.slice(i + 1).map(otherNum => num + otherNum)
    );
    
    return [...new Set(sums)].sort((a, b) => a - b);
}
```

핵심은 Set으로 중복을 제거하고, 스프레드 연산자로 배열로 변환한 후 정렬하는 것입니다.

</details>

## 성능 및 시간복잡도

- **시간복잡도**: O(n² log n) - 중첩 반복문 O(n²) + 정렬 O(k log k)
- **공간복잡도**: O(n²) - 최대 n(n-1)/2개의 합을 저장

## 긍정적인 부분

- **중첩 반복문 활용**: 서로 다른 두 원소 선택을 올바르게 구현했습니다
- **Set 활용**: 중복 제거를 위해 Set을 적절히 사용했습니다
- **정렬**: 결과를 오름차순으로 정렬하는 요구사항을 만족합니다
- **스프레드 연산자**: ES6 문법을 활용해 Set을 배열로 변환했습니다

전반적으로 문제의 핵심은 잘 파악했지만, 코드 정리와 변수명 개선이 필요합니다. 특히 중복된 함수 정의는 반드시 수정해야 합니다.
