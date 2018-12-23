/* FCC26 Basic Algorithm Scripting - Factorialize a number */

function factorialize(num) {
  let n = 1;
  for (let i = 1; i <= num; i++) {
    n*= i;
  }
  return n;
}
factorialize(5); // 120

// Recursive solution
function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}
factorialize(5);

// That's it!
