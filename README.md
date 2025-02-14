# JavaScript Silent Type Coercion Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to type coercion.  The `foo` function intends to add two numbers, but due to JavaScript's loose typing, it performs string concatenation if one of the inputs is a string.

## Bug Description
The `bug.js` file contains a function `foo` that takes two arguments and attempts to add them. However, if one argument is a number and the other is a string, JavaScript automatically converts the number to a string and performs string concatenation instead of numerical addition. This can lead to unexpected behavior and difficult-to-debug errors.

## Solution
The `bugSolution.js` file demonstrates how to explicitly check the types of inputs and perform appropriate handling to avoid this type of error.  This ensures the function always performs numerical addition when expected. 

## How to reproduce
1. Clone this repository.
2. Run the `bug.js` file using Node.js or a similar JavaScript runtime.
3. Observe the unexpected output.
4. Compare the output with the corrected version in `bugSolution.js`.