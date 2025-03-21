function solve(s, k){
    const freq = {};
    for(let digit of s){
        freq[digit] = (freq[digit] || 0) + 1;
    }

    let result = [];

    while(Object.values(freq).some(count => count > 0 )){
        let chosen = null;
        for(let digit = 9; digit >= 0; digit--){
            let d = digit.toString();

            // skip if no more of this digit is available
            if(!freq[d] || freq[d] <= 0) continue;

            //check if using this digit will violate the constraint
            if(result.length >= k){
                //check last k positions
                let allSame = true;
                for(let i = 1; i <= k; i++){
                    if(result[result.length - i] !== d){
                        allSame = false;
                        break
                    }   
                }
                // if all the last digits are same then dont use this digit next 
                if(allSame) continue;
            }
            chosen = d;
            break;
        }
        //if no valid input then skip this digit
        if(!chosen) break;

        // else push the digit in the result array and decrease the freq of that digit in object
        result.push(chosen);
        freq[chosen]--;
    }
   
    return result.join('');
}

let str = "3391933";
let k = 2
console.log(solve(str, k));
