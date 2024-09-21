// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
const greet = name => `Hello, ${name} how are you doing today?`

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Notes

//     The number can be negative already, in which case no change is required.
//     Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

const makeNegative = num => num > 0 ? -num : num; 

// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
const stringToArray = (string) => string.split(" ");

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// Notes

//     You may consider that there will not be any empty arrays/vectors.
var min = function(list){
    let current_min = list[0];
    list.forEach((el) => (current_min > el) ? current_min = el : current_min = current_min)
    return current_min;
}

var max = function(list){
    let current_max = list[0];
    list.forEach((el) => (current_max < el) ? current_max = el : current_max = current_max)
    return current_max;
}

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
function basicOp(operation, value1, value2){
    let operations = {
      '+': value1 + value2,
      '-': value1 - value2,
      '*': value1 * value2,
      '/': value1 / value2
    }
    return operations[operation];
}

