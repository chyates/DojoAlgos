// Bubble sort: compare the item to the one next to it
// With nested for loops:
function bubbleSort(array) {
    for (i = 0; i <= array.length; i++) {
        for (k = 0; k < array.length; k++) {
            if (array[k] > array[k + 1]) {
                var temp = array[k];
                array[k] = array[k + 1];
                array[k + 1] = temp;
            }
        }
    }
    return array;
}

// OR: sorting by limiting the length of values you're sorting, no nested for loops

function bubble(arr) {
    var sorted = false;
    var lastVal = arr.length - 1;
    while (!sorted) {
        sorted = true;
        for (i = 0; i < lastVal; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = false;
            }
        }
        lastVal--;
    }
    return arr;
}

// Selection sort: keep finding the minimum value and push that to the left (most min, second most min, third most min, etc)
function selectionSort(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

// Insertion sort: compare every element to the elements before it, constantly swapping if the elements before it are less than it, stop when it gets to something greater
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var temp = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}