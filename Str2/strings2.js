// Reverse Word Order
function reverseSplit(str) {
    var result = "";
    var start = str.length - 1;
    var end = 0;
    for (i = str.length - 1; i >= 0; i--) {
        var sub = "";
        if (str[i - 1] === " ") {
            end = i - 1;
            for (j = end; j <= start; j++) {
                sub += str[j];
            }
            start = end;
            result += sub;
        }
        if (i === 0) {
            for (x = 0; x <= end; x++) {
                sub += str[x];
            }
            result += sub;
        }
    }
    return result;
}

// Longest Word
// Unique Words
// String: Rotate String
function strRotate(str, shift) {
    var result = "";
    var start = 0;
    var sub = "";
    for (i = start; i < shift; i++) {
        sub += str[i];
    }
    for (j = shift; j < str.length; j++) {
        result += str[j];
    }
    result += sub;
    return result;
}

// String: Is Rotation
// Bad Characters
function badChars(str1, str2){
    var result = "";
    var badRef = {};
    for(i=0;i<str2.length;i++){
      badRef[str2[i]] = str2[i];
    }
    for(j=0;j<str1.length;j++){
      if(str1[j] in badRef){
        continue;
      }
      result += str1[j];
    }
    return result;
  }

// String: Dedupe
// Index of First Unique Letter
function uniqueIndex(str){
    var count = 0;
    var uIndex = 0;
    for (i = 0; i < str.length; i++) {
      var current = str[i];
      for (j = 0; j < str.length; j++) {
        if (current !== str[j]) {
            count++;
        }
      }
      if (count === str.length - 1) {
          uIndex = i;
          break;
      }
      count = 0;
    }
    return uIndex;
  }

// Num to String
// Num to Text
// String: Is Permutation
// String: All Permutations
// All Loosely Interleaved Strings
// Make String Palindrome: Remove One
// Make String Palindrome: Add One
// String: Encode
// String: Decode