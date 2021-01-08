//Find all prime factors of a number
// - Input: 69
// - Output: [3, 23]

function primeFactors(number) {
    let divisor = 2; //set the divisor at 2 to start
    let arr = []; //initialize an empty array to store factors
    while (number > 2) {
        //while the number is greater than 2
        if (number % divisor === 0) {
            //if the number can be divisible by the divisor
            arr.push(divisor); //push the divisor to the empty array
            number = number / divisor; //divide the number by the divisor and continue looping with the new number and dividing by the divisor
        } else {
            divisor++; //if the number cannot be divided by the divisor, increment the divisor and continue the loop
        }
    }
    return arr;
}

console.log(primeFactors(20));
