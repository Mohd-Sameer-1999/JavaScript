let arr = [24, 55, 98, 10, 102, 45];
let k = 2
function solve() {
    arr.sort((a,b) => a-b);
    let n = arr.length;
    console.log(arr);
    return arr[n-k];
}
console.log(solve());