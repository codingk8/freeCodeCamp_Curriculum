/* FCC26 Basic Algorithm Scripting - Repeat a String Repeat a String */

// Without the repeat() function

function repeatStringNumTimes(str, num) {
 let s = '';
 if (num <= 0) {
   return '';
 } else {
   for (let i = 0; i < num; i++) {
    s = s + str;
    console.log(i);
    console.log(s);
  }
  return s;
 }
}
repeatStringNumTimes("abc", 3);


// With the repeat() function
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);

// Other solutions

function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}

function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';
  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

// This is it :o)
