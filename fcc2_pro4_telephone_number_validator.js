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

// The regex could be improved

// Clean solution

function telephoneCheck(str) {
    let array = str.split("");
    let count = [];
    for (let i = 0; i < array.length; i++) {
        let regex = /\d/;
        if (regex.test(array[i])) {
            count.push(array[i]);
        }    
    }
    
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

// Official solution 1
function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}
telephoneCheck("555-555-5555");

// Official solution 2
function telephoneCheck(str) {
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
  return re.test(str);
}
telephoneCheck("555-555-5555");

// => This is an example of a very comprehensive and robust solution to validating US phone numbers client side.
// In such cases it might be much better and easier to implement this library libphonenumber.
