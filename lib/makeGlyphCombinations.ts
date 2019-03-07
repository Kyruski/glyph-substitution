function increaseArraySizeByX(
  length: number,
  arr: Array<string>
): Array<string> {
  let returnArr: Array<string> = [];
  for (let i = 0; i < length; i++) {
    //adds length-number of arrays together
    returnArr = [...returnArr, ...arr]; //increases the combinationsArray to the number of new combinations (i.e. if there are 3 glyph substitutions, it triples the combinations)
  }
  return returnArr;
}

function addToAllCombos(itemToAdd: string, arr: Array<string>): void {
  for (let [index, string] of arr.entries()) {
    //add the corresponding letter to all combinations
    arr[index] = string + itemToAdd;
  }
}

function makeGlyphCombinations(
  inputString: string,
  obj: object | any
): Array<string> {
  let combinationsArray: Array<string> = [""];
  for (let glyph of inputString) {
    if (!obj[glyph]) {
      //no combinations
      addToAllCombos(glyph, combinationsArray);
    } else if (obj[glyph].length === 1) {
      //only one letter to the glyph
      addToAllCombos(obj[glyph][0], combinationsArray);
    } else {
      //multiple letters to the glyph
      let counter: number = -1;
      const glyphLength: number = obj[glyph].length; //the number of different letters a glyph can be
      combinationsArray = increaseArraySizeByX(glyphLength, combinationsArray);
      const length: number = combinationsArray.length;
      for (let [index, string] of combinationsArray.entries()) {
        if (index % (length / glyphLength) === 0) {
          //how we change which letter of the glyph is being added
          counter++;
        }
        combinationsArray[index] = string + obj[glyph][counter];
      }
    }
  }
  return combinationsArray;
}

module.exports = makeGlyphCombinations;
