// My 1st solution

function telephoneCheck(str) {
    let array = str.split("");
    // console.log(array);
    // console.log(array.length);
    let count = [];
    for (let i = 0; i < array.length; i++) {
        let regex = /\d/;
        if (regex.test(array[i])) {
            count.push(array[i]);
        }    
    }
    // console.log(count.length);
    
    let regex2 = /^1\s{0,1}\(\d{3}\)\s{0,1}\d{3}[-|\s]{0,1}\d{4}/;
    let regex3 = /^1\s{0,1}\d{3}[-|\s]{0,1}\d{3}[-|\s]{0,1}\d{4}/;
    let regex4 = /^\(\d{3}\)\s{0,1}\d{3}[-|\s]{0,1}\d{4}/;
    let regex5 = /^\d{3}[-|\s]{0,1}\d{3}[-|\s]{0,1}\d{4}/;
    
    if ( (count.length === 11 && regex2.test(str) ) || (count.length === 11 && regex3.test(str) ) || (count.length === 10 && regex4.test(str) ) || ( count.length === 10 && regex5.test(str) ) ) {
        return true;
    } else {
        return false;
    }
}

// telephoneCheck("555-555-5555");
// telephoneCheck("2(757)6227382");
// telephoneCheck("1(555)555-5555");
// telephoneCheck("123**&!!asdf#");
telephoneCheck("1 (555) 555-5555");

// The regex could be improved and probably a Switch would work
