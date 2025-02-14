function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  return a + b; 
}

console.log(foo(1, 1)); // Output: 2
console.log(foo(1, '1')); // throws Error: Both inputs must be numbers