function containsBadWord(badWordsArray, combinationsArray) {
  for (let badWord of badWordsArray) {
    for (let combo of combinationsArray) {
      let item = combo.split(' ').join('').toLowerCase();
      if (item.includes(badWord)) {
        return badWord;
      }
    }
  }
  return null;
}

module.exports = containsBadWord;