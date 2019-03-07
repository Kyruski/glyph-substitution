function containsBadWord(badWordsArray, combinationsArray) {
  for (let badWord of badWordsArray) {
    for (let combo of combinationsArray) {
      let item = combo.split(' ').join('');
      if (item.includes(badWord)) {
        return [true, badWord];
      }
    }
  }
  return [false, null];
}

module.exports = containsBadWord;