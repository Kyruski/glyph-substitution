const makeLettersList = function(glyphs: object | any) {
  const letters: Array<string> = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  const lettersArray: Array<any> = [];

  for (let letter of letters) {
    let lettersItem: Array<string> = [];
    for (let key in glyphs) {
      if (glyphs[key].includes(letter)) {
        lettersItem.push(key);
      }
    }
    lettersArray.push([letter, lettersItem]);
  }
  return lettersArray;
};

export default makeLettersList;
