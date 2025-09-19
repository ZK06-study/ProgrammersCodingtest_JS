function solution(sides) {
    const max = Math.max(...sides);
    const diff = max - Math.min(...sides);
    const sum = sides.reduce((acc, cur) => {
	    return acc + cur;
    });
    
    return (max - diff) + (sum - max - 1);
}