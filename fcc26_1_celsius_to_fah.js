/* FCC26 Basic Algorithm Scripting - Convert Celsius to Fahrenheit */

// ES5
function convertToF(celsius) {
  let fahrenheit = (celsius * (9/5)) + 32;
  return fahrenheit;
}

// ES6
const convertToF = (celsius) => (celsius * (9/5)) + 32;
convertToF(30);

// Official solution
function convertToF(celsius) {
      var fahrenheit = (celsius * (9/5)) + 32;
      if ( typeof fahrenheit !== 'undefined' ) {
      return fahrenheit;
      } else {
        return 'fahrenheit not defined';
      }
    }
    convertToF(30);

// Suggest ES6 + ternary for typeOf

// This is it :-)
