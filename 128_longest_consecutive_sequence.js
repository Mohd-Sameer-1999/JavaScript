function solution(nums) {
    let n = nums.length;
    if(n === 0) return 0;
    nums.sort((a, b) => a - b);
    let lastSmaller = -Infinity
    let count = 0;
    let longest = 1;
    for(let i = 0; i < n; i++){
        if(nums[i + 1] === nums[i] + 1) count++;
    }
    return count;
}
console.log(solution([100, 200, 1, 3, 2, 4]));