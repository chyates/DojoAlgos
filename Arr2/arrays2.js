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