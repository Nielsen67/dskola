import calculate from "./kalkulator.js";

let operations = ["+", "-", "*", "/"]
let inputOne, inputTwo;
for (let i = 0; i < operations.length; i++) {
    let inputOne = Math.floor(Math.random() * 10) + 1;
    let inputTwo = Math.floor(Math.random() * 10) + 1;

    console.log(`Output${i + 1}: ${calculate(inputOne, inputTwo, operations[i])}`);
}