function reverseNumber(n, ans){
    if(n === 0){
        return ans;
    }
    let rem = n % 10;
    ans = ans * 10 + rem;
    return reverseNumber(Math.floor(n/10), ans);
}

let revNum = reverseNumber(1100, 0);
console.log(revNum);
