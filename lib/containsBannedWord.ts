function containsBannedWord(
  bannedWordsArray: Array<string>,
  combinationsArray: Array<string>
): string | null {
  for (let bannedWord of bannedWordsArray) {
    for (let combo of combinationsArray) {
      let item: string = combo
        .split(" ")
        .join("")
        .toLowerCase();
      if (item.includes(bannedWord)) {
        return bannedWord;
      }
    }
  }
  return null;
}

module.exports = containsBannedWord;
