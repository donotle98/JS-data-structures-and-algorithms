// Verify if a number is a prime number
// - Input: 120
// - Output: false
// - Input: 7
// - Output: true

function primeNumber(number) {
    let divisor = 2; //start the divisor at 2

    while (number > divisor) {
        //while the number is greater than the divisor
        if (number % divisor === 0) {
            //if the number is able to be divided by the divisor return false
            return false;
        } else {
            divisor++; //if the number is not, increase the divisor and keep looping
        }
    }
    return true; //return true if the number is not able to be divided by any divisor
}

console.log('should return true for number 137: ', primeNumber(137));
console.log('should return false for number 200: ', primeNumber(200));
