// Does My Number Look Big?
/*A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
 */
function narcissistic(startValue) {
    // Current decimals place
    let place = 1;
    // Array to store decmal digits
    let valueArr = [];
    // Summed value of all digits to the power of decimal places
    let finalValue = 0;
    
    // While the current decimal place does not exceed available decimal places
    while(startValue%10**place != startValue) {
      valueArr.push((startValue%10**place-startValue%10**(place-1))/10**(place-1));

      place++;
    }
    valueArr.push((startValue%10**place-startValue%10**(place-1))/10**(place-1))
    valueArr.forEach(el => finalValue = finalValue + el**place)
    return finalValue === startValue;
  }

  // Stop gninnipS My sdroW!
  /*Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"

 */
const spinWords = (string => string.split(" ").map(el => el.length >= 5 ? el = [...el].reverse().join('') : el = el).join(' '));