// Remove Blanks
function removeBlanks(str) {
    var result = str.split(" ");
    var string2 = result.join('');
    return string2;
}

// WITHOUT JOIN:
function removeBlanks(str) {
    var newString = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            newString += str[i];
        }
    }
    return newString;
}

// Strings: Get Digits
function getDigits(str) {
    var result = str.split('');
    var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var allDigits = '';
    for (i = 0; i < result.length; i++) {
        for (j = 0; j < numArray.length; j++) {
            if (result[i] == numArray[j]) {
                allDigits += result[i];
            }
        }
    }
    return allDigits;
}
// Acronyms
function acronym(str) {
    var strAcronym = "";
    var start = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            strAcronym += str[start];
            start = i + 1;
        }
        if (i === str.length - 1) {
            strAcronym += str[start];
        }
    }
    return strAcronym.toUpperCase();
}

// Count Non-Spaces
function countNonSpaces(str) {
    var result = str.split("");
    var nonCount = 0;
    for (i = 0; i < result.length; i++) {
        if (result[i] !== " ") {
            nonCount++;
        }
    }
    return nonCount;
}

// WITHOUT JOIN:
function countNonSpaces(str) {
    // var result = str.split("");
    var nonCount = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            nonCount++;
        }
    }
    return nonCount;
}

// Remove Shorter Strings: given an array of strings and a value, remove any string whose length is less than the value
function shorterThanVal(arr, val) {
    var shortIndex = 0;
    console.log()
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length < val) {
            shortIndex = i;
            for (j = shortIndex; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.pop();
            i--;
        }
    }
    return arr;
}

// String: Reverse
function reverseString(str) {
    var newString = "";
    for (i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// Remove Even-Length Strings
function removeEvenLength(arr) {
    var evenIndex = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 === 0) {
            evenIndex = i;
            for (j = evenIndex; j < arr.length; j++) {
                arr[j] = arr[j + 1];
            }
            arr.pop();
            i--;
        }
    }
    return arr;
}

// Integer to Roman Numeral: Given a positive integer less than 4000, turn that integer into a string that represents its roman numeral equivalent
function intToRomanNum(num) {
    var numRef = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    var roman = '';
    var i;
    for (i in numRef) {
        while (num >= numRef[i]) {
            roman += i;
            num -= numRef[i];
        }
    }
    return roman;
}

// Roman Numeral to Integer: turn a roman numeral string into its numeric equivalent 
function romanToInt(str) {
    var number = 0;
    var numRef = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    for (i = 0; i < str.length; i++) {
        if (str[i].toUpperCase in numRef) {
            number += numRef[str[i]];
        }
    }
    return number;
}

// Parens Valid: given a string, evaluate whether the parentheses inside the string are valid, ie. does every open parenthesis also close
function parensValid(str) {
    var openCount = 0;
    var closeCount = 0;
    var valid = true;
    for (i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            openCount++;
        }
        if (str[i] === ")") {
            closeCount++;
        }
    }
    if (openCount !== closeCount) {
        valid = false;
    }
    return valid;
}
// Braces Valid
function bracesValid(str) {
    var openParen = 0;
    var closeParen = 0;
    var openBrace = 0;
    var closeBrace = 0;
    var openSquare = 0;
    var closeSquare = 0;
    var valid = true;
    for (i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "(":
                openParen++;
                break;
            case ")":
                closeParen++;
                break;
            case "[":
                openSquare++;
                break;
            case "]":
                closeSquare++;
                break;
            case "{":
                openBrace++;
                break;
            case "}":
                closeBrace++;
                break;
        }
    }
    if (openParen !== closeParen || openBrace !== closeBrace || openSquare !== closeSquare) {
        valid = false;
    }
    return valid;
}

// Strings: Is Palindrome
function isPalindrome(str) {
    var valid = true;
    for (i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            valid = false;
        }
    }
    return valid;
}

// Is Word Alphabetical
function isAlpha(str) {
    var letterRef = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };
    var inOrder = true;
    for (i = 0; i < str.length - 1; i++) {
        var first = str[i];
        var second = str[i + 1];
        if (letterRef[first] > letterRef[second]) {
            inOrder = false;
        }
    }
    return inOrder;
}

// D Gets Jiggy
function getJiggy(str) {
    var newString = "";
    var start = str[0];
    for (i = 1; i < str.length; i++) {
        newString += str[i];
    }
    newString += " to the ";
    newString += start;
    return newString;
}

// Coin Change with Object
function getChange(cents) {
    var changeDict = {};
    var quarters = (cents - (cents % 25)) / 25;
    changeDict.quarters = quarters;
    cents %= 25;
    var dimes = (cents - (cents % 10)) / 10;
    changeDict.dimes = dimes;
    cents %= 10;
    var nickels = (cents - (cents % 5)) / 5;
    changeDict.nickels = nickels;
    cents %= 5;
    changeDict.pennies = cents;
    return changeDict;
}

// Max, Min, Avg with Object
function maxMinAvgObj(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var numObj = {};
    numObj.max = max;
    numObj.min = min;
    numObj.avg = avg;
    return numObj;
}

// Zip Arrays into Map
function zipArraysToMap(arr1, arr2) {
    var result = {};
    for (i = 0; i < arr1.length; i++) {
        result[arr1[i]] = arr2[i];
    }
    return result;
}

// Invert Hash
function invertHash(obj) {
    var newObj = {};
    for (var key in obj) {
        newObj[obj[key]] = key;
    }
    return newObj;
}

// Number of Values (w/o .Length)
function notDotLength(obj) {
    var count = 0;
    for (var key in obj) {
        count++;
    }
    return count;
}

// String.concat (start replicating built-in functions)
function strConcat(str1, str2) {
    var result = str1 + " " + str2;
    return result;
}

// String.slice
function strSplice(str, start, end) {
    var newString = "";
    for (i = 0; i < str.length; i++) {
        if (i < start || i > end) {
            newString += str[i];
        }
    }
    return newString;
}

// String.trim--leading & trailing whitespaces from a string
function strTrim(str) {
    result = "";
    var x = 0;
    var y = str.length - 1;
    while (str[x] == " " && str[y] == " ") {
        x++;
        y--;
    }
    var start = x;
    var end = y;
    for (i = start; i <= end; i++) {
        result += str[i];
    }
    return result;
}
// String.split--given a string and a character on which to split the string, split it
function strSplit(str, separator) {
    var result = [];
    var start = 0;
    var end = 0;
    for (i = 0; i < str.length; i++) {
        var sub = "";
        if (separator === "") {
            result.push(str[i]);
        } else {
            if (str[i - 1] === separator) {
                end = i - 1;
                for (j = start; j < end; j++) {
                    sub += str[j];
                }
                start = end + 1;
                result.push(sub);
                //console.log("Reassigned start:", start);
            }
        }
        if (i == str.length - 1) {
            for (x = start; x < str.length; x++) {
                sub += str[x];
            }
            result.push(sub);
        }
    }
    return result;
}
// String.search(val)--determine whether a string contains another smaller string
function strSearch(str1, str2) {
    var contains = false;
    var start = 0;
    var end = 0;
    var count = 0;
    for (i = 0; i < str1.length; i++) {
        var sub = "";
        if (str1[i - 1] == " ") {
            end = i - 1;
            for (j = start; j < end; j++) {
                sub += str1[j];
            }
            start = end + 1;
        }
        if (i == str1.length - 1) {
            for (h = start; h < str1.length; h++) {
                sub += str1[h];
            }
        }
        for (x = 0; x < sub.length; x++) {
            if (str2[x] == sub[x]) {
                count++;
            }
        }
        if (count == sub.length && count == str2.length) {
            contains = true;
        }
    }
    return contains;
}