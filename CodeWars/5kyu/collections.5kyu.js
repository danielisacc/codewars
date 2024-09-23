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

  // Pete, the Baker
  /* Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/
function cakes(recipe, available) {
  let lowerDelimiter = 100000;
  for (let key in recipe) {
    if (key in available) {
      console.log(lowerDelimiter)
      let recipeAvailQuotient = Math.floor(available[key]/recipe[key]);
      if (lowerDelimiter > recipeAvailQuotient){
        lowerDelimiter = recipeAvailQuotient;
      }
    }
    else {
      lowerDelimiter = 0;
      break;
    }
  }
  return lowerDelimiter;
}