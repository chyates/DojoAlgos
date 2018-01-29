// Remove Blanks
function removeBlanks(str) {
    var result = str.split(" ");
    var string2 = result.join('');
    return string2;
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
    var acArr = [];
    var strAcronym = "";
    var start = 0;
    var end = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            strAcronym += str[start];
            end = i - 1;
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

// Integer to Roman Numeral: Given a positive integer less than 4000, turn that integer into a string that represents its roman numeral equivalen

// Roman Numeral to Integer: turn a roman numeral string into its numeric equivalent 

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

// Longest Palindrome
// Is Word Alphabetical
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

// Common Suffix
// Book Index
// Drop the Mike
// Coin Change with Object
// Max, Min, Avg with Object
// Zip Arrays into Map
// Invert Hash
// Number of Values (w/o .Length)
// String.concat (start replicating built-in functions)
// String.slice
// String.trim
// String.split
// String.search(val)