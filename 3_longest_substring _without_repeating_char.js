//bruteforce
// function solve(str){
//     let n = s.length;
//     let hash = new Array(255).fill(0);
//     let maxLen = 0;
//     for(let i = 0; i < n; i++){
//         for(let j = i; j < n; j++){
//             if(hash[s[j]] == 1) break;
//             let len = j - i + 1;
//             maxLen = Math.max(len, maxLen);
//             hash[s[j]] = 1;
//         }   
//     }
//     return maxLen;

// }

//optimized approach
function solve(s){
    let n = s.length;
    let l = 0, r = 0, maxLen = 0;
    let hash = new Array(255).fill(-1);
    while(r < n){
        if(hash[s[r]] != -1){
            if(hash[s[r]] >= l){
                l = hash[s[r]] + 1; 
            }
        }
        let len = r - l + 1;
        maxLen = Math.max(len, maxLen);
        hash[s[r]] = r;
        r++;
    }

    return maxLen;
}

let str = "cadbzabcd";
console.log(solve(str));