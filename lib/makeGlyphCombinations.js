"use strict";
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
function increaseArraySizeByX(length, arr) {
    var returnArr = [];
    for (var i = 0; i < length; i++) {
        //adds length-number of arrays together
        returnArr = __spread(returnArr, arr); //increases the combinationsArray to the number of new combinations (i.e. if there are 3 glyph substitutions, it triples the combinations)
    }
    return returnArr;
}
function addToAllCombos(itemToAdd, arr) {
    var e_1, _a;
    try {
        for (var _b = __values(arr.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), index = _d[0], string = _d[1];
            //add the corresponding letter to all combinations
            arr[index] = string + itemToAdd;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function makeGlyphCombinations(inputString, obj) {
    var e_2, _a, e_3, _b;
    var combinationsArray = [""];
    try {
        for (var inputString_1 = __values(inputString), inputString_1_1 = inputString_1.next(); !inputString_1_1.done; inputString_1_1 = inputString_1.next()) {
            var glyph = inputString_1_1.value;
            if (!obj[glyph]) {
                //no combinations
                addToAllCombos(glyph, combinationsArray);
            }
            else if (obj[glyph].length === 1) {
                //only one letter to the glyph
                addToAllCombos(obj[glyph][0], combinationsArray);
            }
            else {
                //multiple letters to the glyph
                var counter = -1;
                var glyphLength = obj[glyph].length; //the number of different letters a glyph can be
                combinationsArray = increaseArraySizeByX(glyphLength, combinationsArray);
                var length_1 = combinationsArray.length;
                try {
                    for (var _c = __values(combinationsArray.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var _e = __read(_d.value, 2), index = _e[0], string = _e[1];
                        if (index % (length_1 / glyphLength) === 0) {
                            //how we change which letter of the glyph is being added
                            counter++;
                        }
                        combinationsArray[index] = string + obj[glyph][counter];
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (inputString_1_1 && !inputString_1_1.done && (_a = inputString_1.return)) _a.call(inputString_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return combinationsArray;
}
module.exports = makeGlyphCombinations;
