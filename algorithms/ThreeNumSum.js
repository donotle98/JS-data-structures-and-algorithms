function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => a - b);
    console.log(array);
    let sums = [];
    for (let i = 0; i < array.length; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            currentSum = array[i] + array[left] + array[right];
            if (currentSum === targetSum) {
                sums.push([array[i], array[left], array[right]]);
                left += 1;
                right -= 1;
            } else if (currentSum < targetSum) {
                left += 1;
            } else if (currentSum > targetSum) {
                right -= 1;
            }
        }
    }
    return sums;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
