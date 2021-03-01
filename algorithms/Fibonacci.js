//get the nth fibonacci number
//In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1
// - Input: 12
// - Output: 144
function fibonacci(number) {
    if (number <= 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(12));
