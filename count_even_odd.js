function solve(arr){
    let n = arr.length
    let freq = {};
    let even = 0, odd = 0;
    for(let i = 0; i < n; i++){
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }
    
    Object.keys(freq).map((key) => {
        if(key % 2 === 0) even += freq[key];
        else odd += freq[key];
    }) 

    return [odd, even];
}
let arr = [2, 1, 2, 1, 5, 5, 2];
console.log(solve(arr));