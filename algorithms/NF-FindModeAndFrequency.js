//Given a list of integers find the mode and the frequency of the mode.
//The mode in a list of numbers is the value that occurs the most often.
//If no number in the list is repeated, then there is no mode for the list.

// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

function mode(numbers) {
    let mode = 0;
    let frequencyOfMode = 0;
    let count = {}; //initialize a hash
    numbers.forEach((e) => {
        //loop through each number
        if (!count[e]) {
            //if the number is not in the hash
            count[e] = 0; //store the number in the hash and give it a value of 0 since it has yet to be seen again
        } else {
            count[e]++; //if the number is already in the has, increment its value
        }
    });
    console.log(count);
}

mode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]);
