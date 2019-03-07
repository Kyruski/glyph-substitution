const fs = require('fs');

let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let a = fs.readFileSync('letters/a.txt', 'utf-8').split('\r\n');

const obj = {}
for (let letter of letters) {
  let document = fs.readFileSync(`letters/${letter}.txt`, 'utf-8').split('\r\n');
  for (let item of document) {
    if (obj[item] && !obj[item].includes(`${letter}`)) {
      obj[item] = [...obj[item], `${letter}`];
    } else {
      obj[item] = [`${letter}`];
    }
  }
}

console.log(obj);

module.exports = obj;