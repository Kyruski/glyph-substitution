/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/twitch/bot.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/containsBannedWord.ts":
/*!***********************************!*\
  !*** ./lib/containsBannedWord.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __values = (this && this.__values) || function (o) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\n    if (m) return m.call(o);\n    return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction containsBannedWord(combinationsArray, bannedWordsArray) {\n    var e_1, _a, e_2, _b;\n    try {\n        for (var combinationsArray_1 = __values(combinationsArray), combinationsArray_1_1 = combinationsArray_1.next(); !combinationsArray_1_1.done; combinationsArray_1_1 = combinationsArray_1.next()) {\n            var combo = combinationsArray_1_1.value;\n            try {\n                for (var bannedWordsArray_1 = __values(bannedWordsArray), bannedWordsArray_1_1 = bannedWordsArray_1.next(); !bannedWordsArray_1_1.done; bannedWordsArray_1_1 = bannedWordsArray_1.next()) {\n                    var bannedWord = bannedWordsArray_1_1.value;\n                    var regex = new RegExp(bannedWord.split(\"\").join(\"+\"), \"g\");\n                    var item = combo\n                        .split(\" \")\n                        .join(\"\")\n                        .toLowerCase();\n                    if (item.match(regex)) {\n                        return bannedWord;\n                    }\n                }\n            }\n            catch (e_2_1) { e_2 = { error: e_2_1 }; }\n            finally {\n                try {\n                    if (bannedWordsArray_1_1 && !bannedWordsArray_1_1.done && (_b = bannedWordsArray_1.return)) _b.call(bannedWordsArray_1);\n                }\n                finally { if (e_2) throw e_2.error; }\n            }\n        }\n    }\n    catch (e_1_1) { e_1 = { error: e_1_1 }; }\n    finally {\n        try {\n            if (combinationsArray_1_1 && !combinationsArray_1_1.done && (_a = combinationsArray_1.return)) _a.call(combinationsArray_1);\n        }\n        finally { if (e_1) throw e_1.error; }\n    }\n    return \"\";\n}\nexports.default = containsBannedWord;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29udGFpbnNCYW5uZWRXb3JkLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2NvbnRhaW5zQmFubmVkV29yZC50cz81OWM4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGNvbnRhaW5zQmFubmVkV29yZChjb21iaW5hdGlvbnNBcnJheSwgYmFubmVkV29yZHNBcnJheSkge1xuICAgIHZhciBlXzEsIF9hLCBlXzIsIF9iO1xuICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGNvbWJpbmF0aW9uc0FycmF5XzEgPSBfX3ZhbHVlcyhjb21iaW5hdGlvbnNBcnJheSksIGNvbWJpbmF0aW9uc0FycmF5XzFfMSA9IGNvbWJpbmF0aW9uc0FycmF5XzEubmV4dCgpOyAhY29tYmluYXRpb25zQXJyYXlfMV8xLmRvbmU7IGNvbWJpbmF0aW9uc0FycmF5XzFfMSA9IGNvbWJpbmF0aW9uc0FycmF5XzEubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgY29tYm8gPSBjb21iaW5hdGlvbnNBcnJheV8xXzEudmFsdWU7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGJhbm5lZFdvcmRzQXJyYXlfMSA9IF9fdmFsdWVzKGJhbm5lZFdvcmRzQXJyYXkpLCBiYW5uZWRXb3Jkc0FycmF5XzFfMSA9IGJhbm5lZFdvcmRzQXJyYXlfMS5uZXh0KCk7ICFiYW5uZWRXb3Jkc0FycmF5XzFfMS5kb25lOyBiYW5uZWRXb3Jkc0FycmF5XzFfMSA9IGJhbm5lZFdvcmRzQXJyYXlfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhbm5lZFdvcmQgPSBiYW5uZWRXb3Jkc0FycmF5XzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChiYW5uZWRXb3JkLnNwbGl0KFwiXCIpLmpvaW4oXCIrXCIpLCBcImdcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gY29tYm9cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubWF0Y2gocmVnZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFubmVkV29yZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFubmVkV29yZHNBcnJheV8xXzEgJiYgIWJhbm5lZFdvcmRzQXJyYXlfMV8xLmRvbmUgJiYgKF9iID0gYmFubmVkV29yZHNBcnJheV8xLnJldHVybikpIF9iLmNhbGwoYmFubmVkV29yZHNBcnJheV8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoY29tYmluYXRpb25zQXJyYXlfMV8xICYmICFjb21iaW5hdGlvbnNBcnJheV8xXzEuZG9uZSAmJiAoX2EgPSBjb21iaW5hdGlvbnNBcnJheV8xLnJldHVybikpIF9hLmNhbGwoY29tYmluYXRpb25zQXJyYXlfMSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGNvbnRhaW5zQmFubmVkV29yZDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/containsBannedWord.ts\n");

/***/ }),

/***/ "./lib/makeGlyphCombinations.ts":
/*!**************************************!*\
  !*** ./lib/makeGlyphCombinations.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __read = (this && this.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __spread = (this && this.__spread) || function () {\n    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\n    return ar;\n};\nvar __values = (this && this.__values) || function (o) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\n    if (m) return m.call(o);\n    return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction increaseArraySizeByX(length, arr) {\n    var returnArr = [];\n    for (var i = 0; i < length; i++) {\n        //adds length-number of arrays together\n        returnArr = __spread(returnArr, arr); //increases the combinationsArray to the number of new combinations (i.e. if there are 3 glyph substitutions, it triples the combinations)\n    }\n    return returnArr;\n}\nfunction addToAllCombos(itemToAdd, arr) {\n    var e_1, _a;\n    try {\n        for (var _b = __values(arr.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {\n            var _d = __read(_c.value, 2), index = _d[0], string = _d[1];\n            //add the corresponding letter to all combinations\n            arr[index] = string + itemToAdd;\n        }\n    }\n    catch (e_1_1) { e_1 = { error: e_1_1 }; }\n    finally {\n        try {\n            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);\n        }\n        finally { if (e_1) throw e_1.error; }\n    }\n}\nfunction makeGlyphCombinations(inputString, obj) {\n    var e_2, _a, e_3, _b;\n    var combinationsArray = [\"\"];\n    try {\n        for (var inputString_1 = __values(inputString), inputString_1_1 = inputString_1.next(); !inputString_1_1.done; inputString_1_1 = inputString_1.next()) {\n            var glyph = inputString_1_1.value;\n            if (!obj[glyph]) {\n                //no combinations\n                addToAllCombos(glyph, combinationsArray);\n            }\n            else if (obj[glyph].length === 1) {\n                //only one letter to the glyph\n                addToAllCombos(obj[glyph][0], combinationsArray);\n            }\n            else {\n                //multiple letters to the glyph\n                var counter = -1;\n                var glyphLength = obj[glyph].length; //the number of different letters a glyph can be\n                combinationsArray = increaseArraySizeByX(glyphLength, combinationsArray);\n                var length_1 = combinationsArray.length;\n                try {\n                    for (var _c = __values(combinationsArray.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {\n                        var _e = __read(_d.value, 2), index = _e[0], string = _e[1];\n                        if (index % (length_1 / glyphLength) === 0) {\n                            //how we change which letter of the glyph is being added\n                            counter++;\n                        }\n                        combinationsArray[index] = string + obj[glyph][counter];\n                    }\n                }\n                catch (e_3_1) { e_3 = { error: e_3_1 }; }\n                finally {\n                    try {\n                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);\n                    }\n                    finally { if (e_3) throw e_3.error; }\n                }\n            }\n        }\n    }\n    catch (e_2_1) { e_2 = { error: e_2_1 }; }\n    finally {\n        try {\n            if (inputString_1_1 && !inputString_1_1.done && (_a = inputString_1.return)) _a.call(inputString_1);\n        }\n        finally { if (e_2) throw e_2.error; }\n    }\n    return combinationsArray;\n}\nexports.default = makeGlyphCombinations;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbWFrZUdseXBoQ29tYmluYXRpb25zLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL21ha2VHbHlwaENvbWJpbmF0aW9ucy50cz9jMmZkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9fc3ByZWFkID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZCkgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBpbmNyZWFzZUFycmF5U2l6ZUJ5WChsZW5ndGgsIGFycikge1xuICAgIHZhciByZXR1cm5BcnIgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vYWRkcyBsZW5ndGgtbnVtYmVyIG9mIGFycmF5cyB0b2dldGhlclxuICAgICAgICByZXR1cm5BcnIgPSBfX3NwcmVhZChyZXR1cm5BcnIsIGFycik7IC8vaW5jcmVhc2VzIHRoZSBjb21iaW5hdGlvbnNBcnJheSB0byB0aGUgbnVtYmVyIG9mIG5ldyBjb21iaW5hdGlvbnMgKGkuZS4gaWYgdGhlcmUgYXJlIDMgZ2x5cGggc3Vic3RpdHV0aW9ucywgaXQgdHJpcGxlcyB0aGUgY29tYmluYXRpb25zKVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuQXJyO1xufVxuZnVuY3Rpb24gYWRkVG9BbGxDb21ib3MoaXRlbVRvQWRkLCBhcnIpIHtcbiAgICB2YXIgZV8xLCBfYTtcbiAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKGFyci5lbnRyaWVzKCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgX2QgPSBfX3JlYWQoX2MudmFsdWUsIDIpLCBpbmRleCA9IF9kWzBdLCBzdHJpbmcgPSBfZFsxXTtcbiAgICAgICAgICAgIC8vYWRkIHRoZSBjb3JyZXNwb25kaW5nIGxldHRlciB0byBhbGwgY29tYmluYXRpb25zXG4gICAgICAgICAgICBhcnJbaW5kZXhdID0gc3RyaW5nICsgaXRlbVRvQWRkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VHbHlwaENvbWJpbmF0aW9ucyhpbnB1dFN0cmluZywgb2JqKSB7XG4gICAgdmFyIGVfMiwgX2EsIGVfMywgX2I7XG4gICAgdmFyIGNvbWJpbmF0aW9uc0FycmF5ID0gW1wiXCJdO1xuICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGlucHV0U3RyaW5nXzEgPSBfX3ZhbHVlcyhpbnB1dFN0cmluZyksIGlucHV0U3RyaW5nXzFfMSA9IGlucHV0U3RyaW5nXzEubmV4dCgpOyAhaW5wdXRTdHJpbmdfMV8xLmRvbmU7IGlucHV0U3RyaW5nXzFfMSA9IGlucHV0U3RyaW5nXzEubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgZ2x5cGggPSBpbnB1dFN0cmluZ18xXzEudmFsdWU7XG4gICAgICAgICAgICBpZiAoIW9ialtnbHlwaF0pIHtcbiAgICAgICAgICAgICAgICAvL25vIGNvbWJpbmF0aW9uc1xuICAgICAgICAgICAgICAgIGFkZFRvQWxsQ29tYm9zKGdseXBoLCBjb21iaW5hdGlvbnNBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvYmpbZ2x5cGhdLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIC8vb25seSBvbmUgbGV0dGVyIHRvIHRoZSBnbHlwaFxuICAgICAgICAgICAgICAgIGFkZFRvQWxsQ29tYm9zKG9ialtnbHlwaF1bMF0sIGNvbWJpbmF0aW9uc0FycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vbXVsdGlwbGUgbGV0dGVycyB0byB0aGUgZ2x5cGhcbiAgICAgICAgICAgICAgICB2YXIgY291bnRlciA9IC0xO1xuICAgICAgICAgICAgICAgIHZhciBnbHlwaExlbmd0aCA9IG9ialtnbHlwaF0ubGVuZ3RoOyAvL3RoZSBudW1iZXIgb2YgZGlmZmVyZW50IGxldHRlcnMgYSBnbHlwaCBjYW4gYmVcbiAgICAgICAgICAgICAgICBjb21iaW5hdGlvbnNBcnJheSA9IGluY3JlYXNlQXJyYXlTaXplQnlYKGdseXBoTGVuZ3RoLCBjb21iaW5hdGlvbnNBcnJheSk7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aF8xID0gY29tYmluYXRpb25zQXJyYXkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXMoY29tYmluYXRpb25zQXJyYXkuZW50cmllcygpKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9lID0gX19yZWFkKF9kLnZhbHVlLCAyKSwgaW5kZXggPSBfZVswXSwgc3RyaW5nID0gX2VbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggJSAobGVuZ3RoXzEgLyBnbHlwaExlbmd0aCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hvdyB3ZSBjaGFuZ2Ugd2hpY2ggbGV0dGVyIG9mIHRoZSBnbHlwaCBpcyBiZWluZyBhZGRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmF0aW9uc0FycmF5W2luZGV4XSA9IHN0cmluZyArIG9ialtnbHlwaF1bY291bnRlcl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVfM18xKSB7IGVfMyA9IHsgZXJyb3I6IGVfM18xIH07IH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2IgPSBfYy5yZXR1cm4pKSBfYi5jYWxsKF9jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoaW5wdXRTdHJpbmdfMV8xICYmICFpbnB1dFN0cmluZ18xXzEuZG9uZSAmJiAoX2EgPSBpbnB1dFN0cmluZ18xLnJldHVybikpIF9hLmNhbGwoaW5wdXRTdHJpbmdfMSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gY29tYmluYXRpb25zQXJyYXk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtYWtlR2x5cGhDb21iaW5hdGlvbnM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/makeGlyphCombinations.ts\n");

/***/ }),

/***/ "./lib/twitch/bot.ts":
/*!***************************!*\
  !*** ./lib/twitch/bot.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv.config();\nvar tmi_js_1 = __importDefault(__webpack_require__(/*! tmi.js */ \"tmi.js\"));\nvar onMessage_1 = __importDefault(__webpack_require__(/*! ./onMessage */ \"./lib/twitch/onMessage.ts\"));\nvar onConnect_1 = __importDefault(__webpack_require__(/*! ./onConnect */ \"./lib/twitch/onConnect.ts\"));\nvar opts = {\n    identity: {\n        username: process.env.BOT_USERNAME,\n        password: process.env.OAUTH_TOKEN\n    },\n    // @ts-ignore\n    channels: [process.env.CHANNEL_NAME]\n};\n// @ts-ignore\nvar client = new tmi_js_1.default.client(opts);\nclient.on(\"message\", onMessage_1.default);\n// @ts-ignore\nclient.on(\"connected\", onConnect_1.default);\nclient.connect();\nexports.default = client;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdHdpdGNoL2JvdC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi90d2l0Y2gvYm90LnRzP2MzZmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZG90ZW52ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJkb3RlbnZcIikpO1xuZG90ZW52LmNvbmZpZygpO1xudmFyIHRtaV9qc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ0bWkuanNcIikpO1xudmFyIG9uTWVzc2FnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL29uTWVzc2FnZVwiKSk7XG52YXIgb25Db25uZWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vb25Db25uZWN0XCIpKTtcbnZhciBvcHRzID0ge1xuICAgIGlkZW50aXR5OiB7XG4gICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5CT1RfVVNFUk5BTUUsXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5PQVVUSF9UT0tFTlxuICAgIH0sXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNoYW5uZWxzOiBbcHJvY2Vzcy5lbnYuQ0hBTk5FTF9OQU1FXVxufTtcbi8vIEB0cy1pZ25vcmVcbnZhciBjbGllbnQgPSBuZXcgdG1pX2pzXzEuZGVmYXVsdC5jbGllbnQob3B0cyk7XG5jbGllbnQub24oXCJtZXNzYWdlXCIsIG9uTWVzc2FnZV8xLmRlZmF1bHQpO1xuLy8gQHRzLWlnbm9yZVxuY2xpZW50Lm9uKFwiY29ubmVjdGVkXCIsIG9uQ29ubmVjdF8xLmRlZmF1bHQpO1xuY2xpZW50LmNvbm5lY3QoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNsaWVudDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/twitch/bot.ts\n");

/***/ }),

/***/ "./lib/twitch/onConnect.ts":
/*!*********************************!*\
  !*** ./lib/twitch/onConnect.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction onConnectedHandler(addr, port) {\n    console.log(\"* Connected to \" + addr + \":\" + port);\n}\nexports.default = onConnectedHandler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdHdpdGNoL29uQ29ubmVjdC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi90d2l0Y2gvb25Db25uZWN0LnRzPzI4MjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBvbkNvbm5lY3RlZEhhbmRsZXIoYWRkciwgcG9ydCkge1xuICAgIGNvbnNvbGUubG9nKFwiKiBDb25uZWN0ZWQgdG8gXCIgKyBhZGRyICsgXCI6XCIgKyBwb3J0KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG9uQ29ubmVjdGVkSGFuZGxlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/twitch/onConnect.ts\n");

/***/ }),

/***/ "./lib/twitch/onMessage.ts":
/*!*********************************!*\
  !*** ./lib/twitch/onMessage.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar makeGlyphCombinations_1 = __importDefault(__webpack_require__(/*! ../../lib/makeGlyphCombinations */ \"./lib/makeGlyphCombinations.ts\"));\nvar containsBannedWord_1 = __importDefault(__webpack_require__(/*! ../../lib/containsBannedWord */ \"./lib/containsBannedWord.ts\"));\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar bot_1 = __importDefault(__webpack_require__(/*! ./bot */ \"./lib/twitch/bot.ts\"));\nvar glyphList;\nvar bannedWords;\nfunction checkMsg(msg) {\n    var combos = makeGlyphCombinations_1.default(msg, glyphList);\n    var result = containsBannedWord_1.default(combos, bannedWords);\n    return result;\n}\n(function loadItems() {\n    axios_1.default.get(\"http://localhost:6969/load\").then(function (data) {\n        glyphList = data.data.glyphList;\n        bannedWords = data.data.bannedWords;\n    });\n})();\nfunction onMessageHandler(target, context, msg, self) {\n    var user = context.username;\n    if (user === \"glyphsubstitutionbot\") {\n        return;\n    }\n    var banMessage = checkMsg(msg);\n    if (banMessage) {\n        bot_1.default.say(target, \"Get banned \" + user);\n        bot_1.default.say(target, \"/timeout \" + user + \" 10\");\n    }\n}\nexports.default = onMessageHandler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdHdpdGNoL29uTWVzc2FnZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi90d2l0Y2gvb25NZXNzYWdlLnRzP2VkMDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbWFrZUdseXBoQ29tYmluYXRpb25zXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2xpYi9tYWtlR2x5cGhDb21iaW5hdGlvbnNcIikpO1xudmFyIGNvbnRhaW5zQmFubmVkV29yZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9saWIvY29udGFpbnNCYW5uZWRXb3JkXCIpKTtcbnZhciBheGlvc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJheGlvc1wiKSk7XG52YXIgYm90XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYm90XCIpKTtcbnZhciBnbHlwaExpc3Q7XG52YXIgYmFubmVkV29yZHM7XG5mdW5jdGlvbiBjaGVja01zZyhtc2cpIHtcbiAgICB2YXIgY29tYm9zID0gbWFrZUdseXBoQ29tYmluYXRpb25zXzEuZGVmYXVsdChtc2csIGdseXBoTGlzdCk7XG4gICAgdmFyIHJlc3VsdCA9IGNvbnRhaW5zQmFubmVkV29yZF8xLmRlZmF1bHQoY29tYm9zLCBiYW5uZWRXb3Jkcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbihmdW5jdGlvbiBsb2FkSXRlbXMoKSB7XG4gICAgYXhpb3NfMS5kZWZhdWx0LmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6Njk2OS9sb2FkXCIpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgZ2x5cGhMaXN0ID0gZGF0YS5kYXRhLmdseXBoTGlzdDtcbiAgICAgICAgYmFubmVkV29yZHMgPSBkYXRhLmRhdGEuYmFubmVkV29yZHM7XG4gICAgfSk7XG59KSgpO1xuZnVuY3Rpb24gb25NZXNzYWdlSGFuZGxlcih0YXJnZXQsIGNvbnRleHQsIG1zZywgc2VsZikge1xuICAgIHZhciB1c2VyID0gY29udGV4dC51c2VybmFtZTtcbiAgICBpZiAodXNlciA9PT0gXCJnbHlwaHN1YnN0aXR1dGlvbmJvdFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGJhbk1lc3NhZ2UgPSBjaGVja01zZyhtc2cpO1xuICAgIGlmIChiYW5NZXNzYWdlKSB7XG4gICAgICAgIGJvdF8xLmRlZmF1bHQuc2F5KHRhcmdldCwgXCJHZXQgYmFubmVkIFwiICsgdXNlcik7XG4gICAgICAgIGJvdF8xLmRlZmF1bHQuc2F5KHRhcmdldCwgXCIvdGltZW91dCBcIiArIHVzZXIgKyBcIiAxMFwiKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBvbk1lc3NhZ2VIYW5kbGVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/twitch/onMessage.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90ZW52LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCI/ZTcwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "tmi.js":
/*!*************************!*\
  !*** external "tmi.js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tmi.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG1pLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG1pLmpzXCI/NWEzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bWkuanNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///tmi.js\n");

/***/ })

/******/ });