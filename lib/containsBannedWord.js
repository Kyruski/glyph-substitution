"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function containsBannedWord(bannedWordsArray, combinationsArray) {
    var e_1, _a, e_2, _b;
    try {
        for (var bannedWordsArray_1 = __values(bannedWordsArray), bannedWordsArray_1_1 = bannedWordsArray_1.next(); !bannedWordsArray_1_1.done; bannedWordsArray_1_1 = bannedWordsArray_1.next()) {
            var bannedWord = bannedWordsArray_1_1.value;
            try {
                for (var combinationsArray_1 = __values(combinationsArray), combinationsArray_1_1 = combinationsArray_1.next(); !combinationsArray_1_1.done; combinationsArray_1_1 = combinationsArray_1.next()) {
                    var combo = combinationsArray_1_1.value;
                    var item = combo
                        .split(" ")
                        .join("")
                        .toLowerCase();
                    if (item.includes(bannedWord)) {
                        return bannedWord;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (combinationsArray_1_1 && !combinationsArray_1_1.done && (_b = combinationsArray_1.return)) _b.call(combinationsArray_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (bannedWordsArray_1_1 && !bannedWordsArray_1_1.done && (_a = bannedWordsArray_1.return)) _a.call(bannedWordsArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return null;
}
module.exports = containsBannedWord;
