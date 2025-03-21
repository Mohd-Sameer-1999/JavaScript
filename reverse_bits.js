function solve(n){
    let binary = n.toString(2);
    let len = binary.length;

    let temp = binary;
    for(let i = 0; i < 30 - len; i++){
        temp += "0";
    }
    let result = parseInt( "0" + temp, 2);
    return result;
}
console.log(solve(12))