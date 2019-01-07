// My first solution

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function rot13(str) {
  let s = str.split('');
  console.log(s);
  let r = [];
  
  for (let i = 0; i < s.length; i++) {
        let item = "";
        
        if (s[i] === " ") {
            item = " ";
        } else if ( alphabet.indexOf(s[i]) >= 13 ) {
            let id1 = s[i];
            let id2 = alphabet.indexOf(s[i]);
            let id3 = id2 - 13;
            item = alphabet[id3];
        } else {
            let id3 = alphabet.length - (13 - alphabet.indexOf(s[i]));
            item = alphabet[id3];
        } 
        r.push(item);
  }
  return r.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


// My 2nd solution



