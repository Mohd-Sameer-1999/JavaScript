let arr = [1,2,3,4,5,6];

function binarySearch(arr, target, start, end) {
    let mid = start + (end - start)/2;
    if(start >= end){
        return false;
    }
    if(mid === target){
        return true;
    }
    if(target > mid){
        return binarySearch(arr, target, mid + 1, end);
    } else {
        return binarySearch(arr, target, start, mid - 1);
    }

}
let ans = binarySearch (arr, 5, 0, arr.length);
console.log(ans)