function solve(arr){
    let n = arr.length;
    let laseElement = arr[n-1];
    for(let i = n-1; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = laseElement;
    return arr;
}
let arr = [1, 2, 3, 4, 5];
// solve(arr);
console.log(solve(arr));