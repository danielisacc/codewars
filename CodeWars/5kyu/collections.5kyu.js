// The Hashtag Generator
/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/
function generateHashtag (str) {
    let words = str.trim().split(" ");
    let hashtag = "#"
    let isValid = true;
    for (let i = 0; i <= words.length-1; i++) {
      if (!words[i] || words[i] === " "){
        isValid = false
      }
      else {
        isValid = true
        hashtag += words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }
    isValid = (isValid) ? hashtag.length < 141 : false;
    return (isValid) ? hashtag : false;
  }