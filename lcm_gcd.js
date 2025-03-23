function solve(a, b){
    let gcd = calculateGCD(a, b);
    let lcm = calculateLCM(a, b);
    return [lcm, gcd];
}

function calculateGCD(a, b){
    let temp;
    if (a < b){
        temp = b;
        b = a;
        a = temp;
    } 
    let d = a % b;
    while(d > 0){
        a = b;
        b = d;
        d = a % b;
    }
    return b;
}

function calculateLCM(a, b){
    let lcm = (a * b) / calculateGCD(a, b);
    return lcm;
}

console.log(solve(5, 10));