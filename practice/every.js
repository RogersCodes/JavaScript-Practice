//using loop function to create every function
function every (array, test) {
    for (let element of array) {
        if (!test(element)) {
        return false;
        }
    }
    return true;
}
//using every function to check if all elements in an array are even
function every(array, test) {
    return !array.some(element => !test(element));
}

const isEven = num => num % 2 === 0;
console.log(every([2, 4, 6], isEven));
console.log(every([7, 3, 6], isEven));