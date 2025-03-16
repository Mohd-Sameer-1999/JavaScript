function solve(arr) {
    let n = arr.length;
    let map = new Map();
    let max = 0, sum = 0;
    for(let i = 0; i < n; i++){
        sum += arr[i];
        if(sum === 0){
            max = i + 1;
        }
        else {
            if(map.has(sum)){
                max = Math.max(max, i - map.get(sum));
            } else {
                map.set(sum, i);
            }
        }
    }
    return max;
}

let arr = [15, -2, 2, -8, 1, 7, 10, 23]
console.log(solve(arr));