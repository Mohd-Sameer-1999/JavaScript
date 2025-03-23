function solve(matrix){
    let n = matrix.length
    for(let i = 0; i < n; i++){
        for(let j = 0; j < Math.floor(n/2); j++){
            const temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-i-1];
            matrix[i][n-i-1] = temp;
        }
    }
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
}
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(solve(matrix));