/* Free Code Camp - Part 2: Basic JavaScript - Project 1: Palindrome checker */

// My 1st solution

function palindrome(str) {
    let regex = /[^a-z0-9]/g;
 
    let cleanString = str.toLowerCase().replace(regex, "");
 console.log(cleanString);
 
    let array = cleanString.split("");
 console.log(array);
 
    let array2 = [];
    for (let i = array.length - 1; i >= 0; i--) {
        array2.push(array[i]);
        
    }
console.log(array2);

    let joinString = array2.join("");
console.log(joinString);
    
    return joinString === cleanString;
}

// My favorite solution


// Other solutions



/* That's all folks! */
