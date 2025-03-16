//bruteforce approach
// function solution(arr, k){
//     let n = arr.length;
//     let count = 0;
//     for(let i = 0; i < n; i++){
//         for(let j = i; j < n; j++){
//             let xor = 0;
//             for(let l = i; l <= j; l++){
//                 xor = xor ^ arr[l];
//             }
//             if(xor === k)
//                 count++;
//         }
//     }
//     return count;
// }

//better approach
// function solution(){
//     let n = arr.length;
//     let count = 0;
//     for(let i = 0; i < n; i++){
//         let xor = 0;
//         for(let j = i; j < n; j++){
//             xor = xor ^ arr[j];
//             if(xor === k) count++;
//         }
//     }
//     return count;
// }

//optimal approach
function solution(arr, k){
    let n = arr.length;
    let xr = 0, count = 0;
    let map = new Map();
    map.set(xr, 1);
    for(let i = 0; i < n; i++){
        xr = xr ^ arr[i];
        const x = xr ^ k;
        count += map.get(x) || 0;
        map.set(xr, (map.get(xr) || 0) + 1);
    }
    return count;
}


let arr = [1, 2, 3, 3];
let k = 3;
console.log(solution(arr, k));
