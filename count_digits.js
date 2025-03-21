function solve(n){
    let temp = n, count = 0;
    while(temp > 0){
        let digit = temp % 10;
        if(digit != 0 && n % digit === 0) count++;
        temp = Math.floor(temp / 10);
    }
    return count;
}
// solve(12);
console.log(solve(660));