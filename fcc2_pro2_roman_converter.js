/* Free Code Camp - Part 2: Basic JavaScript - Project 2: Roman Numeral Converter */

// 1st solution

function convertToRoman(num) {
    let numTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let romanNumber = "";
    for ( let i in numTable) {
        while (num >= numTable[i]) {
        romanNumber += i;
        num -= numTable[i];
       }
    }
 return romanNumber;
}
convertToRoman(36);

// 2nd solution

function convertToRoman(num) {
    let numTable = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let romanNumber = "";
    for ( let i in numTable) {
        while (num >= numTable[i]) {
        romanNumber += i;
        num -= numTable[i];
       }
    }
 return romanNumber;
}

convertToRoman(36);
