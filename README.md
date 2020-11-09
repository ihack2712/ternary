# Ternary Numeral System Logical Operations

Logical operations for the ternary numeral system.

## Usage

Import the module.

```ts
// Imports
import { leftShift, rightShift, and, or, count } from "https://deno.land/x/ternary/mod.ts";
```

## Left Shift Logical Operation

In binary a left shift logical operation means moving bits to left (multiplication). In js/ts there is a logical operator for performing a left shift operation on binary numbers (`<<`), however, that operator doesn't work for ternary, hence binary works with power of two and ternary works on the power of three. The mathematical equation to perform a left shift operation is given number *`x`* and amount of positions *`p`*: `x * 3 ** p`.

```ts
leftShift(
	parseInt("2", 3),
	3
) === parseInt("2000", 3);
// -> true

leftShift(
	parseInt("12", 3),
	3
) === parseInt("12000", 3);
// -> true
```

## Right Shift Logical Operation

The mathematical equation to perform a right shift operation is given number *`x`* and amount of positions *`p`*: `x / 3 ** p`.

```ts
rightShift(
		parseInt("2000", 3),
		3
) ===	parseInt("2", 3);
// -> true

rightShift(
		parseInt("12000", 3),
		3
) ===	parseInt("12", 3);
// -> true
```

## And Logical Operation

An and logical operation is to go through two fields of digits. Imagine field *`a`* and field *`b`*, when going through each digit from the left to the right, one will check if a statement is true, if it is one will place the digit back to it's position in a field *`c`*. When going through the fields of ternary digits consider *`da`* to mean *digit from `a`* and *`db`* to mean *digit from `b`*. *`da`* and *`db`* will be start from left most (last) digit, meaning that they will start from the greatest position, if the other field does not have any digit in that position, the digit will become zero. The next part will be to check if *`da`* is more than zero and also less or equal to *`db`*, if it is, put the digit back in the same position in *field `c`*. Do that for every digit in the fields, and once you've computed the last digit of *`c`*, return *`c`*.

```ts
and(
		parseInt("20202", 3),
		parseInt("22222", 3)
) ===	parseInt("20202", 3);
// -> true

and(
		parseInt("22022", 3),
		parseInt("20202", 3)
) ===	parseInt("20002", 3);
// -> true
```

## Or Logical Operation

An or logical operation is to go through to fields of digits and for each digit choose the greatest digit and put it back in *field `c`*. When you've done that for every digit, return *field `c`*.

```ts
or(
		parseInt("20102", 3),
		parseInt("11012", 3)
) ===	parseInt("21112", 3);
// -> true

or(
		parseInt("22022", 3),
		parseInt("20202", 3)
) ===	parseInt("22222", 3);
// -> true
```
