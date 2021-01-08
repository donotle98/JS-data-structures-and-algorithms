//Given a string, write an algorithm to count the number of words in the string that are palindromes. The output must include a list of the palindromes and the number of palindromes.
// - Input: `"Dad gave mom a Tesla as a racecar"`
// - Output: `Dad, mom, racecar, 3 Palindromes`

function palindromeInAString(string) {
    string = string.replace(/[|&;$%@"<>()+,?]/g, ''); //remove all illegal characters
    const arr = string.split(/\s+/); //split the string of white-spaces
    let count = 0; //initialize a count
    let paliWords = []; //initialize empty array to hold palindromes
    for (let i = 0; i < arr.length; i++) {
        //loop through array of words
        let lowerCase = arr[i].toLowerCase(); //make each word lower case
        let word = lowerCase.split('').reverse().join(''); //reverse each word
        if (word === lowerCase) {
            //if the word is equal to the reverse
            if (word.length > 1) {
                //if the word is not a single letter
                paliWords.push(arr[i]); //push the word to the array
                count++; //and increment the count
            }
        }
    }

    paliWords.push(`${count} Palindromes`); //push the count to the array
    return paliWords; //return the list of palindromes
}

console.log(palindromeInAString('Dad gave mom a Tesla as a racecar'));
