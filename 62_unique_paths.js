// bruteforce recursive solution
// function countUniquePaths(i, j, n, m) {
//     if(i >= n || j >= m) return 0;
//     if(i === n-1 && j === m-1) return 1;
//     else return countUniquePaths(i+1, j, n, m) + countUniquePaths(i, j+1, n, m);
// }
// let ans = countUniquePaths(0, 0, 2, 3);
// console.log(ans);


// dp recursive solution
function countUniquePaths(i, j, n, m, dp) {
    if (i >= n || j >= m) return 0;
    if (i === n-1 && j === m-1) return 1;

    if (dp[i][j] !== -1) return dp[i][j];
    else return dp[i][j] = countUniquePaths(i+1, j, n, m, dp) + countUniquePaths(i, j+1, n, m, dp);
}
let n = 2; 
let m = 3;
let dp = Array.from({length: n}, () => Array(m).fill(-1));
let ans = countUniquePaths(0, 0, n, m, dp);
console.log(ans);