// let str1 = "listen";
// let str2 = "silent";

//using objects
/*
function isAnagram(str1, str2) {
    let freq = {};
    for(char of str1){
        freq[char] = (freq[char] || 0) + 1;
    }
    for(char of str2){
        if(!freq[char]){
            return false;
        }
        freq[char]--;
    }
    return true;

}
*/

function isAnagram(str1, str2){
    let freq = new Map();
    for(char of str1){
        if(freq.has(char))
            freq.set(char, freq.set(char) + 1);
        else 
            freq.set(char, 0);
    }
    for(char of str2){
        if(!freq.has(char)){
            return false;
        }
        freq.set(char, freq.get(char) - 1);
    }
    return true;
}


console.log(isAnagram("stop", "post"));
console.log(isAnagram("listen", "silent"));