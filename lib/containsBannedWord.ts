function containsBannedWord(
  combinationsArray: Array<string>,
  bannedWordsArray: Array<string>
): string {
  for (let combo of combinationsArray) {
    for (let bannedWord of bannedWordsArray) {
      let regex: RegExp = new RegExp(bannedWord.split("").join("+"), "g");
      let item: string = combo
        .split(" ")
        .join("")
        .toLowerCase();
      if (item.match(regex)) {
        return bannedWord;
      }
    }
  }
  return "";
}

export default containsBannedWord;
