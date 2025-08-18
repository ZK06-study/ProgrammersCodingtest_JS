# 프로그래머스 82612. 부족한 금액 계산하기 - 코드 리뷰

## 코드 분석

현재 코드는 놀이기구를 count번 탔을 때 필요한 총 금액과 현재 보유 금액의 차이를 구하는 문제입니다.

```javascript
//내 돈에서 뺐을때 마이너스 값이 나온다. 
// 돈*count 를 모두 더해준다 sum 

function solution(price, money, count) {
    var sum = 0;
    var answer=0;

    for(let i = 1; i<= count; i++){
        sum = sum + price * i
    }
    
    if(money <= sum){
        answer = Math.abs(money - sum)
    }else{
        answer =0;
    }
    
    return answer;
}
```

놀이기구 이용료가 1배, 2배, 3배... 증가하는 것을 반영해 총 비용을 계산하고, 부족한 금액을 구하는 로직입니다.

## 개선할 부분

1. **주석 내용**: 주석이 문제 설명과 직접 연관되지 않고 명확하지 않습니다.

2. **조건문 로직**: `money <= sum`이라는 조건보다는 `sum > money`가 더 직관적입니다.

3. **`Math.abs` 사용**: `money - sum`이 음수일 때만 절댓값을 구하므로, 차라리 `sum - money`가 더 명확합니다.

4. **누적 연산**: `sum = sum + price * i`를 `sum += price * i`로 간소화할 수 있습니다.


## 코드 개선 제안

- 더 명확한 주석을 작성하거나 제거하세요
- 조건문과 계산 로직을 더 직관적으로 만들어보세요
- 변수명을 더 의미있게 변경해보세요

<details>
<summary>힌트 보기</summary>

여러 가지 방법으로 개선할 수 있습니다:

```javascript
// 힌트 1: 기본 개선
function solution(price, money, count) {
    let totalCost = 0;
    
    for (let i = 1; i <= count; i++) {
        totalCost += price * i;
    }
    
    return totalCost > money ? totalCost - money : 0;
}

// 힌트 2: 수학적 접근 (등차수열의 합)
function solution(price, money, count) {
    // 1 + 2 + 3 + ... + count = count * (count + 1) / 2
    const totalCost = price * count * (count + 1) / 2;
    return Math.max(0, totalCost - money);
}

// 힌트 3: Math.max 활용
function solution(price, money, count) {
    let totalCost = 0;
    for (let i = 1; i <= count; i++) {
        totalCost += price * i;
    }
    return Math.max(0, totalCost - money);
}
```

두 번째 방법(수학적 접근)이 가장 효율적입니다!

</details>

## 성능 및 시간복잡도

**현재 방법:**
- **시간복잡도**: O(count) - count번 반복
- **공간복잡도**: O(1) - 상수 공간

**수학적 접근:**
- **시간복잡도**: O(1) - 등차수열 합 공식 사용
- **공간복잡도**: O(1) - 상수 공간

## 긍정적인 부분

- **문제 이해**: 놀이기구 비용이 배수로 증가하는 규칙을 정확히 파악했습니다
- **경계 조건 처리**: 돈이 충분한 경우 0을 반환하는 조건을 올바르게 처리했습니다
- **반복문 활용**: 1부터 count까지 순회하는 로직이 정확합니다
- **결과 정확성**: 모든 테스트 케이스를 통과하는 올바른 로직입니다

## 수학적 배경

이 문제는 등차수열의 합을 구하는 문제입니다:
- 총 비용 = price × (1 + 2 + 3 + ... + count)
- 1부터 n까지의 합 = n × (n + 1) ÷ 2

전반적으로 문제를 정확히 해결했지만, 수학적 최적화와 코드 스타일 개선으로 더욱 효율적인 코드를 만들 수 있습니다.
