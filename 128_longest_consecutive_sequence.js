// better approach
// function solution(nums) {
//     let n = nums.length;
//     if(n === 0) return 0;
//     nums.sort((a, b) => a - b);
//     let lastSmaller = -Infinity
//     let count = 0;
//     let longest = 1;
//     for(let i = 0; i < n; i++){
//         if(nums[i] - 1 == lastSmaller){
//             count++;
//             lastSmaller = nums[i];
//         }
//         else if(nums[i] !== lastSmaller){
//             count = 1;
//             lastSmaller = nums[i];
//         }
//         longest = Math.max(longest, count);
//     }
//     return longest;
// }

//optimal approach
function solution(nums){
    let n = nums.length;
    if(n === 0) return 0;
    let set = new Set();
    let longest = 1;
    for(let i = 0; i < n; i++){
        set.add(nums[i]);
    }
    for(let it of set){
        if(!set.has(it - 1)){
            let count = 1;
            let x = it;
            while(set.has(x+1)){
                x++;
                count++;
            }
            longest = Math.max(longest, count);
        }
    }

    return longest;
}


console.log(solution([100, 200, 1, 1, 3, 3, 2, 3, 4, 4]));

// console.log(solution([100, 200, 1, 3, 2, 4]));
// console.log(solution([9,1,4,7,3,-1,0,5,8,-1,6]));
// console.log(solution([1,0,1,2]));