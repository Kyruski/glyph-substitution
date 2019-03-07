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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var e_1, _a, e_2, _b;
var fs_1 = __importDefault(require("fs"));
var letters = [
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
var obj = {};
try {
    for (var letters_1 = __values(letters), letters_1_1 = letters_1.next(); !letters_1_1.done; letters_1_1 = letters_1.next()) {
        var letter = letters_1_1.value;
        var document_2 = fs_1.default
            .readFileSync(__dirname + ("/dependencies/letters/" + letter + ".txt"), "utf-8")
            .split("\r\n");
        try {
            for (var document_1 = __values(document_2), document_1_1 = document_1.next(); !document_1_1.done; document_1_1 = document_1.next()) {
                var item = document_1_1.value;
                if (item === "")
                    continue;
                if (obj[item]) {
                    if (!obj[item].includes(letter)) {
                        obj[item] = __spread(obj[item], [letter]);
                    }
                }
                else {
                    obj[item] = [letter];
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (document_1_1 && !document_1_1.done && (_b = document_1.return)) _b.call(document_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (letters_1_1 && !letters_1_1.done && (_a = letters_1.return)) _a.call(letters_1);
    }
    finally { if (e_1) throw e_1.error; }
}
module.exports = obj;
