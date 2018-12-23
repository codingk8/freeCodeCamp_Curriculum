/* FCC26 Basic Algorithm Scripting - Confirm the Ending */

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("He has to give me a new name", "name");

// Possible solution with Regexp
function confirmEnding(str, target) {
  let newTarget = target.concat("$");
  let myRegEx = new RegExp(newTarget, 'i');
  return myRegEx.test(str);
}

// PR the regexp solution

// The end ;.)
