// Balance Point--determine whether an array has a balance point between indices, ie. [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false
function balancePoint(arr) {
    var balanceExists = false;
    var leftSum = 0;
    for (i = 0; i < arr.length; i++) {
        leftSum += arr[i];
        var rightSum = 0;
        for (j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
            if (rightSum == leftSum) {
                balanceExists = true;
            }
        }
    }
    return balanceExists;
}

// Balance index: same thing, but on an index and not between
function balanceIndex(arr) {
    var balanceExists = false;
    var leftSum = 0;
    for (i = 1; i < arr.length; i++) {
        var rightSum = 0;
        leftSum += arr[i - 1];
        for (j = i + 1; j < arr.length; j++) {
            rightSum += arr[j]
            if (rightSum == leftSum) {
                balanceExists = true;
            }
        }
    }
    return balanceExists;
}

// Binary search: given sorted array and value, return whether that array contains that value. Don't check everything, just between a range
function binarySearchArr(arr, val) {
    var midIndex = Math.floor(arr.length / 2);
    var valExists = false;
    if (val <= arr[midIndex]) {
        for (i = 0; i <= midIndex; i++) {
            if (arr[i] == val) {
                valExists = true;
            }
        }
    } else {
        for (j = midIndex; j < arr.length; j++) {
            if (arr[j] == val) {
                valExists = true;
            }
        }
    }
    return valExists;
}

// Array: flatten--eliminate nested arrays, retaining order, ie. turn [1,[2,3],4] into [1,2,3,4]
function flatten(arr) {
    var arrIndex = 0;
    var i = 0;
    var foundArray = [];
    var resultArr = [];
    while (i < arr.length) {
        if (arr[i] instanceof Array) {
            foundArray = arr[i];
            for (j = 0; j < foundArray.length; j++) {
                resultArr.push(foundArray[j]);
            }
        } else {
            resultArr.push(arr[i]);
        }
        i++;
    }
    return resultArr;
}

// Remove Duplicates:
function removeDupes(arr) {
    var uniqueArr = [];
    var count = 0;
    for (i = 0; i < arr.length; i++) {
        var current = arr[i];
        for (j = 0; j < arr.length; j++) {
            if (current !== arr[j]) {
                count++;
            }
        }
        if (count === arr.length - 1) {
            uniqueArr.push(current);
        }
        count = 0;
    }
    return uniqueArr;
}

// Median of two sorted arrays: given 2 arrays, possibly of different lengths, return the median value (sum of all values divided by the amount of values). If arrays are the same length, return the average of the two middle values (of all arrays)
function medSorted(arr1, arr2) {
    var sumArr1 = 0;
    var sumArr2;
    for (i = 0; i < arr1.length; i++) {
        sumArr2 = 0;
        for (j = 0; j < arr2.length; j++) {
            sumArr2 += arr2[j];
        }
        sumArr1 += arr1[i];
    }
    var med = 0;
    if ((arr1.length + arr2.length) % 2 !== 0) {
        med = (sumArr2 + sumArr1) / (arr1.length + arr2.length);
    } else {
        med = ((sumArr1 / arr1.length) + (sumArr2 / arr2.length)) / 2;
    }
    return med;
}

// OR:

function findMedian(arr1, arr2) {
    var joinArr = [];
    var long = arr1;
    var short = arr2;
    if (arr1.length < arr2.length) {
        long = arr2;
        short = arr1;
    }

    var i = 0;
    var k = 0;
    while (i <= long.length && k < short.length) {
        if (long[i] == short[k]) {
            joinArr.push(long[i]);
            joinArr.push(short[k]);
            i++;
        } else if (long[i] < short[k]) {
            joinArr.push(long[i]);
            i++;
        } else {
            joinArr.push(short[k]);
            k++;
        }
    }
    var med = 0;
    if (joinArr.length % 2 === 0) {
        med += (joinArr[(joinArr.length / 2) - 1] + joinArr[joinArr.length / 2]) / 2;
    } else {
        med += joinArr[Math.floor(joinArr.length / 2)];
    }
    return med;
}

// Last Digit of A to the B: Given two numbers, return the last digit of the result of number 1 raised to the power of number 2
function digitOfAtoB(num1, num2) {
    var cyclePlace = num2 % 4;
    var numMod = num1 % 10;
    var digit = 0;
    if (numMod === 1) {
        digit = 1;
    } else if (numMod === 5) {
        digit = 5;
    } else if (numMod === 6) {
        digit = 6;
    } else if (numMod === 9) {
        if (cyclePlace % 2 === 0) {
            digit = 1;
        } else {
            digit = 9;
        }
    } else if (numMod === 4) {
        if (cyclePlace % 2 === 0) {
            digit = 6;
        } else {
            digit = 4;
        }
    } else if (numMod === 3) {
        if (cyclePlace === 1) {
            digit = 3;
        } else if (cyclePlace === 2) {
            digit = 9;
        } else if (cyclePlace === 3) {
            digit = 7;
        } else if (cyclePlace === 0) {
            digit = 1;
        }
    } else if (numMod === 7) {
        if (cyclePlace === 1) {
            digit = 7;
        } else if (cyclePlace === 2) {
            digit = 9;
        } else if (cyclePlace === 3) {
            digit = 3;
        } else if (cyclePlace === 0) {
            digit = 1;
        }
    } else if (numMod === 2) {
        if (cyclePlace === 1) {
            digit = 2;
        } else if (cyclePlace === 2) {
            digit = 4;
        } else if (cyclePlace === 3) {
            digit = 8;
        } else if (cyclePlace === 0) {
            digit = 6;
        }
    } else if (numMod === 8) {
        if (cyclePlace === 1) {
            digit = 8;
        } else if (cyclePlace === 2) {
            digit = 4;
        } else if (cyclePlace === 3) {
            digit = 2;
        } else if (cyclePlace === 0) {
            digit = 6;
        }
    }
    return digit;
}

// Missing Digit:
function missingInt(arr) {
    var last = arr.length + 1;
    var expected = (last * (last + 1)) / 2;
    var actual = 0;
    for (i = 0; i < arr.length; i++) {
        actual += arr[i];
    }
    return expected - actual;
}