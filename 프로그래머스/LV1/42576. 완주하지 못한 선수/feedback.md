# 프로그래머스 42576. 완주하지 못한 선수 - 코드 리뷰

## 코드 분석

현재 코드는 참가자 목록과 완주자 목록을 정렬한 후, 같은 인덱스의 이름을 비교해서 다른 첫 번째 이름을 찾는 방식입니다.

```javascript
function solution(participant, completion) {
    participant.sort()
    completion.sort()
    
    for(let i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }
}
```

정렬을 통해 같은 이름끼리 모아두고 순차 비교하는 좋은 접근법입니다.

## 개선할 부분

1. **마지막 원소 처리**: 모든 원소가 같다면 마지막 참가자가 완주하지 못한 사람인데, 현재 코드는 이를 명시적으로 처리하지 않습니다. 하지만 `completion` 배열이 `participant`보다 하나 적으므로 자연스럽게 처리됩니다.


## 코드 개선 제안

- 세미콜론을 일관되게 추가하세요
- 마지막 케이스에 대한 명시적 처리를 고려해보세요
- 다른 해결 방법도 생각해보세요

<details>
<summary>힌트 보기</summary>

현재 정렬 기반 접근법이 매우 우수합니다. 몇 가지 개선과 다른 접근법을 고려해보세요:

```javascript
// 힌트 1: 현재 방법 개선
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    
    // 이론적으로 도달하지 않지만 안전장치
    return participant[participant.length - 1];
}

// 힌트 2: Map을 활용한 접근법
function solution(participant, completion) {
    const map = new Map();
    
    // 참가자 카운트
    participant.forEach(name => {
        map.set(name, (map.get(name) || 0) + 1);
    });
    
    // 완주자 카운트 감소
    completion.forEach(name => {
        map.set(name, map.get(name) - 1);
    });
    
    // 카운트가 0이 아닌 사람 찾기
    for (let [name, count] of map) {
        if (count > 0) return name;
    }
}

// 힌트 3: reduce 활용
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    return participant.find((name, i) => name !== completion[i]);
}
```

정렬 방법이 가장 직관적이고 효율적입니다

</details>

## 성능 및 시간복잡도

- **시간복잡도**: O(n log n) - 정렬 때문에
- **공간복잡도**: O(1) - 추가 공간 사용 없음 (정렬이 in-place라면)

## 긍정적인 부분

- **핵심 아이디어**: 정렬 후 순차 비교하는 접근이 매우 효율적입니다
- **간결성**: 복잡한 자료구조 없이 간단하게 해결했습니다
- **정확성**: 동명이인이 있어도 올바르게 처리됩니다
- **효율성**: 불필요한 연산 없이 첫 번째 다른 이름에서 바로 반환합니다

