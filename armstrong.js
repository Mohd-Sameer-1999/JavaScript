function solve(num) {
    let temp = num.toString();
    let n = temp.length;
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += Math.pow(Number(temp[i]), n);
    }
    if(sum === num){
        return true;
    }
    return false;
}

console.log(solve(103))