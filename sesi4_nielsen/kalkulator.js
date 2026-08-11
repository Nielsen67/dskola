
export default function calculate(inputOne, inputTwo, operation) {
    let result;
    switch (operation) {
        case "+":
            result = inputOne + inputTwo
            break;
        case "-":
            result = inputOne - inputTwo
            break;
        case "*":
            result = inputOne * inputTwo
            break;
        case "/":
            result = inputOne / inputTwo
            break;
        default:
            break;
    }
    return result
}
