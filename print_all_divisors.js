function solve(n){
    let divisors = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            divisors.push(i)
        }      
    }
    return divisors;
}
console.log(solve(10));
