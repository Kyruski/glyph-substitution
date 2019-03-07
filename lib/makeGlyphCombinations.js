function increaseArraySizeByX(length, arr) {
  let returnArr = [];
  for (let i = 0; i < length; i++) { //adds length-number of arrays together
    returnArr = [...returnArr, ...arr]; //increases the combinationsArray to the number of new combinations (i.e. if there are 3 glyph substitutions, it triples the combinations)
  }
  return returnArr;
}

function addToAllCombos(itemToAdd, arr) {
  for (let [index, string] of arr.entries()) { //add the corresponding letter to all combinations
    arr[index] = string + itemToAdd;
  }
}

function makeGlyphCombinations(inputString, obj) {
  let combinationsArray = [''];
  for (let glyph of inputString) {
    if (!obj[glyph]) { //no combinations
      addToAllCombos(glyph, combinationsArray)
    } else if (obj[glyph].length === 1) { //only one letter to the glyph
      addToAllCombos(obj[glyph][0], combinationsArray);
    } else { //multiple letters to the glyph
      let counter = -1;
      const glyphLength = obj[glyph].length; //the number of different letters a glyph can be
      combinationsArray = increaseArraySizeByX(glyphLength, combinationsArray);
      const length = combinationsArray.length;
      for (let [index, string] of combinationsArray.entries()) {
        if (index % (length / glyphLength) === 0) { //how we change which letter of the glyph is being added 
          counter++;
        }
        combinationsArray[index] = string + obj[glyph][counter];
      }
    }
  }
  return combinationsArray;
}