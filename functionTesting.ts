//Joshua Dalton
//IT 505


import { assertEquals } from "jsr:@std/assert";

function add(a: number, b: number): number {
    return a + b;
}

function multiply(a: number, b: number): number {
    return a*b;
}

function isEven(num: number): boolean {
    return num % 2 == 0;
}

console.log("Testing add function");
assertEquals(add(5, 3), 8);
assertEquals(add(10, 5), 15);

console.log("Testing multiply function");
assertEquals(multiply(4, 3), 12);
assertEquals(multiply(5, 5), 25);

console.log("Testing isEven function");
assertEquals(isEven(4), true);
assertEquals(isEven(7), false);

console.log("All tests passed!");