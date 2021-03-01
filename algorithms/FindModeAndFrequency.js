//Given a list of integers find the mode and the frequency of the mode.
//The mode in a list of numbers is the value that occurs the most often.
//If no number in the list is repeated, then there is no mode for the list.

// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

function mode(numbers) {
    //O(n)
    let mode = 0;

    let count = {}; //initialize a hash

    for (let i = 0; i < numbers.length; i++) {
        //O(n)
        let number = numbers[i];
        if (!count[number]) {
            count[number] = 1;
        } else {
            count[number]++;
        }
    }

    console.log(count);

    mode = Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b)); //O(n)

    let freq = count[mode]; //O(1)

    return `Mode = ${mode}, Frequency of mode = ${freq}`;
}

console.log(mode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]));
