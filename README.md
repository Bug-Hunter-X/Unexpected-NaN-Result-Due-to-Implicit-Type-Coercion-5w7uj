# Unexpected NaN Result Due to Implicit Type Coercion in JavaScript

This repository demonstrates a common JavaScript bug caused by the language's loose typing system.  When performing arithmetic operations, JavaScript implicitly coerces types, which can lead to unexpected results, particularly NaN (Not a Number).

## The Bug

The `bar` function multiplies the result of `foo` by 2.  `foo` adds two inputs.  If both inputs to `foo` are numbers, the result is as expected.  However, if one input is a string, implicit type coercion occurs. The addition of a number and string results in string concatenation, and subsequent multiplication with 2 leads to `NaN` because multiplication of a string with a number is undefined.

## The Solution

The solution involves explicit type checking and coercion to ensure that all operations are performed on numbers.  This prevents implicit type conversion and avoids the `NaN` result.