const fs = require('fs');

let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const obj = {}
for (let letter of letters) {
  let document = fs.readFileSync(__dirname + `/dependencies/letters/${letter}.txt`, 'utf-8').split('\r\n');
  for (let item of document) {
    if (item === "") continue;
    if (obj[item]){
      if (!obj[item].includes(letter)) {
        obj[item] = [...obj[item], letter];
      }
    } else {
      obj[item] = [letter];
    }
  }
}

module.exports = obj;