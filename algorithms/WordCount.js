//Given a document, implement an algorithm to count the number of word occurrences
// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

function wordCount(string) {
    string = string.replace(/[|&;$%@"<>()+,?]/g, ''); //First split the string of illegal characters
    const arr = string.split(/\s+/); //Then split the string by new lines, tabs, and spaces
    let wordCounts = {}; //Create an object to hold each work as a key with the count as values
    for (let i = 0; i < arr.length; i++) {
        //loop through the arr
        let word = arr[i]; //assign the first word in the array to a temp variable
        if (!wordCounts[word]) {
            //if the word is not yet in the Object
            wordCounts[word] = 1; //put that word in the object and assign a value of 1
        } else {
            //if the word is already in the object
            wordCounts[word]++; //increment its value
        }
    }
    return wordCounts;
}

console.log(
    wordCount(
        'Hello there, how are you? Can you tell me how to get to the nearest Starbucks?'
    )
);
