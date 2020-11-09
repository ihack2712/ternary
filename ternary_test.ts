// Imports
import {
	leftShift,
	rightShift,
	count,
	and,
	or
} from "./ternary.ts";
import { assertStrictEquals } from "https://deno.land/std@0.76.0/testing/asserts.ts";

Deno.test("left shift 0", () => assertStrictEquals(leftShift(2, 0),   2));
Deno.test("left shift 1", () => assertStrictEquals(leftShift(2, 1),   6));
Deno.test("left shift 2", () => assertStrictEquals(leftShift(2, 2),  18));
Deno.test("left shift 3", () => assertStrictEquals(leftShift(2, 3),  54));
Deno.test("left shift 4", () => assertStrictEquals(leftShift(2, 4), 162));

Deno.test("left shift 0 bigint", () => assertStrictEquals(leftShift(2n, 0n),   2n));
Deno.test("left shift 1 bigint", () => assertStrictEquals(leftShift(2n, 1n),   6n));
Deno.test("left shift 2 bigint", () => assertStrictEquals(leftShift(2n, 2n),  18n));
Deno.test("left shift 3 bigint", () => assertStrictEquals(leftShift(2n, 3n),  54n));
Deno.test("left shift 4 bigint", () => assertStrictEquals(leftShift(2n, 4n), 162n));

Deno.test("right shift 1", () => assertStrictEquals(rightShift(162, 1), 54));
Deno.test("right shift 2", () => assertStrictEquals(rightShift(162, 2), 18));
Deno.test("right shift 3", () => assertStrictEquals(rightShift(162, 3),  6));
Deno.test("right shift 4", () => assertStrictEquals(rightShift(162, 4),  2));

Deno.test("right shift 1 bigint", () => assertStrictEquals(rightShift(162n, 1n), 54n));
Deno.test("right shift 2 bigint", () => assertStrictEquals(rightShift(162n, 2n), 18n));
Deno.test("right shift 3 bigint", () => assertStrictEquals(rightShift(162n, 3n),  6n));
Deno.test("right shift 4 bigint", () => assertStrictEquals(rightShift(162n, 4n),  2n));

Deno.test("count 0", () => assertStrictEquals(count(  0), 0));
Deno.test("count 1", () => assertStrictEquals(count(  2), 1));
Deno.test("count 2", () => assertStrictEquals(count(  6), 2));
Deno.test("count 3", () => assertStrictEquals(count( 18), 3));
Deno.test("count 4", () => assertStrictEquals(count( 56), 4));
Deno.test("count 5", () => assertStrictEquals(count(162), 5));

Deno.test("count 0 bigint", () => assertStrictEquals(count(  0n), 0n));
Deno.test("count 1 bigint", () => assertStrictEquals(count(  2n), 1n));
Deno.test("count 2 bigint", () => assertStrictEquals(count(  6n), 2n));
Deno.test("count 3 bigint", () => assertStrictEquals(count( 18n), 3n));
Deno.test("count 4 bigint", () => assertStrictEquals(count( 56n), 4n));
Deno.test("count 5 bigint", () => assertStrictEquals(count(162n), 5n));

Deno.test("and 20202 & 22222 = 20202", () => assertStrictEquals(and(182, 242), 182));
Deno.test("and 20102 & 22222 = 20102", () => assertStrictEquals(and(173, 242), 173));
Deno.test("and 22022 & 20202 = 20002", () => assertStrictEquals(and(224, 182), 164));
Deno.test("and 22222 & 22002 = 22002", () => assertStrictEquals(and(242, 218), 218));
Deno.test("and 11111 & 11001 = 11001", () => assertStrictEquals(and(121, 109), 109));
Deno.test("and 11111 & 22002 = 11001", () => assertStrictEquals(and(121, 218), 109));

Deno.test("and 20202 & 22222 = 20202 bigint", () => assertStrictEquals(and(182n, 242n), 182n));
Deno.test("and 20102 & 22222 = 20102 bigint", () => assertStrictEquals(and(173n, 242n), 173n));
Deno.test("and 22022 & 20202 = 20002 bigint", () => assertStrictEquals(and(224n, 182n), 164n));
Deno.test("and 22222 & 22002 = 22002 bigint", () => assertStrictEquals(and(242n, 218n), 218n));
Deno.test("and 11111 & 11001 = 11001 bigint", () => assertStrictEquals(and(121n, 109n), 109n));
Deno.test("and 11111 & 22002 = 11001 bigint", () => assertStrictEquals(and(121n, 218n), 109n));

Deno.test("or  0 |  1 =  1", () => assertStrictEquals(or(0, 1), 1));
Deno.test("or  1 |  1 =  1", () => assertStrictEquals(or(1, 1), 1));
Deno.test("or  1 |  2 =  2", () => assertStrictEquals(or(1, 2), 2));
Deno.test("or  2 |  2 =  2", () => assertStrictEquals(or(2, 2), 2));
Deno.test("or  2 | 10 = 12", () => assertStrictEquals(or(2, 3), 5));
Deno.test("or  2 | 11 = 12", () => assertStrictEquals(or(2, 4), 5));
Deno.test("or 20 | 11 = 21", () => assertStrictEquals(or(6, 4), 7));

Deno.test("or  0 |  1 =  1 bigint", () => assertStrictEquals(or(0n, 1n), 1n));
Deno.test("or  1 |  1 =  1 bigint", () => assertStrictEquals(or(1n, 1n), 1n));
Deno.test("or  1 |  2 =  2 bigint", () => assertStrictEquals(or(1n, 2n), 2n));
Deno.test("or  2 |  2 =  2 bigint", () => assertStrictEquals(or(2n, 2n), 2n));
Deno.test("or  2 | 10 = 12 bigint", () => assertStrictEquals(or(2n, 3n), 5n));
Deno.test("or  2 | 11 = 12 bigint", () => assertStrictEquals(or(2n, 4n), 5n));
Deno.test("or 20 | 11 = 21 bigint", () => assertStrictEquals(or(6n, 4n), 7n));
