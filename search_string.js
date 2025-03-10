function SearchingChallenge(str) { 

    let longestPatterFound = ''; 
    let patterArr = []; 
  
    // Iterate through the string to find all possible patterns.
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        // Extract a substring to check for patterns.
        let substring = str.slice(i, j + 1);
        // Check if the substring repeats at least once more in the string.
        if (str.indexOf(substring, j + 1) !== -1) {
          // If it repeats, add it to the varFiltersCg array.
          patterArr.push(substring);
        }
      }
    }
  
    // Find the longest pattern in the varFiltersCg array.
    for (let pattern of patterArr) {
      if (pattern.length > longestPatterFound.length) {
        longestPatterFound = pattern;
      }
    }
  
    // Determine the output based on whether a pattern was found.
    if (longestPatterFound.length >= 2) {
      return `yes ${longestPatterFound}`;
    } else {
      return 'no null';
    }
  
  }
     
  // keep this function call here 
  console.log(SearchingChallenge(readline()));