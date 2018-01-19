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
function reverseArray(arr){
    for(i=0;i<arr.length/2;i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

// Array: Rotate--given an array and a value, shift the array a number of spaces equal to that value
function shiftBy(arr, num){
    while(num > 0){
      for(i=arr.length-1;i>0;i--){
        var temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
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
function concat(arr1, arr2){
    var resultArr = [];
    for(i = 0; i < arr1.length; i++){
        resultArr.push(arr1[i]);
    }
    for(j = 0; j<arr2.length; j++){
        resultArr.push(arr2[j]);
    }
    return resultArr;
}

// Array: Remove Negatives

// Array: Second to Last

// Array: Nth to Last

// Array: Second Largest

// Array: Nth Largest

// Array: Shuffle

// Array: Remove Range

// Intermediate Sums

// Double Trouble

// Zip It