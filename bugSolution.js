function foo(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle cases where conversion fails
  }
  return a + b;
}

function bar(a, b) {
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(2, "3")); // Output: 10
console.log(bar("hello", 3)); //Output: NaN 