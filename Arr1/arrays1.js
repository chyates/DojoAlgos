// Array: Push Front--insert value at the beginning of an array
function pushFront(arr, num) {
    arr.push(num);
    for (i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = num;
    return arr;
}

// Array: Insert At--insert value at specified index of array
function insertAt(arr, index, num) {
    arr.push(num);
    for (i = arr.length - 1; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = num;
    return arr;
}

// Array: Pop Front--remove and return the value at the beginning of the array
function popFront(arr) {
    var start = arr[0];
    for (i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return start;
}

// Array: Remove At--remove and return value at given index
function removeAt(arr, index) {
    var removeVal = arr[index];
    for (i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return removeVal;
}

// Array: Swap Pairs--swap successive pairs in an array; if array.length is odd, don't change final element
function swapPairs(arr) {
    for (i = 0; i < arr.length - 1; i += 2) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

// Array: Remove Duplicates--keep the first instance of duplicate data but remove all others
function removeNegatives(arr) {
    var dupeIndex = 0;
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            dupeIndex = i;
            for (j = dupeIndex; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
        }
    }
    return arr;
}

// Array: Min to Front
function minToFront(arr) {
    var min = arr[0];
    var minIndex = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
            for (var j = minIndex; j > 0; j--) {
                var temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
        arr[0] = min;
    }
    return (arr);
}

// Array: Reverse--in place
function reverseArray(arr) {
    for (i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

// Array: Rotate--given an array and a value, shift the array a number of spaces equal to that value
function shiftBy(arr, num) {
    while (num > 0) {
        for (i = arr.length - 1; i > 0; i--) {
            var temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
        }
        num--;
    }
    return arr;
}

// Array: Filter Range--given array, min, and max, return an array with only values between min and max
function filterArray(arr, min, max) {
    var removeIndex = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max || arr[i] < min) {
            removeIndex = i;
            for (j = removeIndex; j < arr.length; j++) {
                arr[j] = arr[j + 1];
            }
            arr.pop();
            i--;
        }
    }
    return arr;
}

// Array: Concat--given two arrays, return a new array with values from both arrays: first the first and then the second
function concat(arr1, arr2) {
    var resultArr = [];
    for (i = 0; i < arr1.length; i++) {
        resultArr.push(arr1[i]);
    }
    for (j = 0; j < arr2.length; j++) {
        resultArr.push(arr2[j]);
    }
    return resultArr;
}

// Array: Remove Negatives
function removeNegatives(arr) {
    var negIndex = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negIndex = i;
            for (j = negIndex; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.pop();
            i--;
        }
    }
    return arr;
}

// Array: Second to Last
function secondToLast(arr) {
    if (arr.length > 1) {
        return arr[arr.length - 2];
    } else {
        return false;
    }
}

// Array: Nth to Last
function nthToLast(arr, num) {
    if (arr.length > 1) {
        return arr[arr.length - num];
    } else {
        return false;
    }
}

// Array: Second Largest
function secondLargest(arr) {
    var first = arr[0];
    var second = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (first < arr[i]) {
            second = first;
            first = arr[i];
        } else if (second < arr[i]) {
            second = arr[i];
        }
    }
    return second;
}

// Array: Nth Largest
function nthLargest(arr, num) {
    for (i = 0; i < arr.length - 1; i++) {
        var count = 0;
        for (j = 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                count++;
            }
        }
        if (count == num - 1) {
            return arr[i];
        }
    }
}

// Array: Shuffle
function shuffleArr(arr) {
    var randIndex = Math.floor((Math.random() * (0, arr.length - 1) + 0));
    for (i = 0; i < arr.length; i++) {
        var temp = arr[i];
        arr[i] = arr[randIndex];
        arr[randIndex] = temp;
    }
    return arr;
}

// Array: Remove Range
function removeRange(arr, start, end) {
    while (end >= start) {
        for (i = end; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        end--;
        arr.pop();
    }
    return arr;
}

// Intermediate Sums--insert sum of every 10 values after 10th value
function interSum(arr) {
    var sumIndex = 0;
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (i > 0 && i % 10 == 0) {
            sumIndex = i;
            arr.push(sum);
            for (j = arr.length - 1; j > sumIndex; j--) {
                arr[i] = arr[i - 1];
            }
            arr[sumIndex] = sum;
        }
    }
    return arr;
}

// Double Trouble
function double(arr) {
    var results = [];
    for (i = 0; i < arr.length; i++) {
        results.push(arr[i]);
        results.push(arr[i]);
    }
    return results;
}

// Zip It
function zip(arr1, arr2) {
    var long = arr1;
    var short = arr2;
    var zipped = [];
    if (long.length < short.length) {
        long = arr2;
        short = arr1;
    }
    iLong = 0;
    iShort = 0;
    while (iLong < long.length || iShort < short.length) {
        zipped.push(long[iLong]);
        if (short[iLong]) {
            zipped.push(short[iShort]);
        }
        iLong++;
        iShort++;
    }
    return zipped;
}