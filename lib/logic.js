
function containsBadWord(badWordsArray, combinationsArray) {
  for (let badWord of badWordsArray) {
    for (let combo of combinationsArray) {
      if (combo.includes(badWord)) {
        return [true, badWord];
      }
    }
  }
  return [false, null];
}



let phrase = 'bæd word';
let combos = makeGlyphCombinations(phrase);
console.log('combos', combos);
console.log(containsBadWord(['bad'], combos));
