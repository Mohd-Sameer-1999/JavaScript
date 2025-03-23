function solve(num){
    let i = 0;
    while(i < num.length && num[i] === 0){
        i++;
    }
    num = num.slice(i);

    for(let j = num.length - 1; j >= 0; j--){
        if(num[j] < 9){
            num[j]++;
            return num;
        }
        num[j] = 0;
    }
    let result = [1];
    for(let j = 0; j < num.length; j++){
        result.push(num[j]);
    }
    return result;
}

let num = [0, 9];
console.log(solve(num));