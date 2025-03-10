//brute force approach 
// function fourSum(nums, target) {
//     let n = nums.length;
//     let ans = [];
//     let seen = new Set()
//     for(let i = 0; i < n; i++){
//         for(let j = i + 1; j < n; j++){
//             for(let k = j + 1; k < n; k++){
//                 for(let l = k + 1; l < n; l++){
//                     const sum = nums[i] + nums[j] + nums[k] + nums[l];
//                     if(sum === target){

//                         const quadraplet = [nums[i], nums[j], nums[k], nums[l]].sort((a,b) => a - b);
                        
//                         const quadrapletString = quadraplet.join(',');

//                         if(!seen.has(quadrapletString)){
//                             ans.push(quadraplet);
//                             seen.add(quadrapletString);
//                         }
                         
//                     }
//                 }
//             }
//         }
//     }
//     return ans;
// }


//better approach
// function fourSum(nums, target){
//     let n = nums.length;
//     let set = new Set();
//     for(let i = 0; i < n; i++){
//         for(j = i + 1; j < n; j++){
//             let hashSet = new Set();
//             for(let k = j + 1; k < n; k++){
//                 let sum = nums[i] + nums[j];
//                 sum += nums[k]
//                 let fourth = target - sum;
//                 if(hashSet.has(fourth)){
//                     let temp = [nums[i], nums[j], nums[k], fourth].sort((a, b) => a - b);
//                     set.add(temp);
//                 } 
//                 hashSet.add(nums[k])
//             }
//         }
//     }
//     let ans = Array.from(set);
//     return ans;
// }


// optimal approach
function fourSum(nums, target){
    let n = nums.length;
    let ans = [];
    nums.sort((a, b) => a - b);
    for(let i = 0; i < n; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;
        for(let j = i + 1; j < n; j++){
            if(j !== i + 1 && nums[j] === nums[j-1]) continue;
            let k = j + 1;
            let l = n - 1;
            while(k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if(sum === target){
                    let temp = [nums[i], nums[j], nums[k], nums[l]];
                    ans.push(temp);
                    k++;
                    l--;
                } else if ( sum < target){
                    k++;
                } else {
                    l--;
                }
            }
        }
    }

    return ans;
}

// console.log(fourSum([1, 0, -1, 0, 2, -2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
