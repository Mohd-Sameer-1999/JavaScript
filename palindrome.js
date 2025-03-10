let str = "abccba";
function isPalindrome(str, start, end) {
    if(start >= end){
        return true;
    }
    if(str[start] !== str[end]){
        return false;        
    }
    return isPalindrome(str, start + 1, end - 1);
}

let ans = isPalindrome(str, 0, str.length - 1);
console.log(ans);