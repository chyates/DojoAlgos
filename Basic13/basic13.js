// Print 1 to 255
function print1To255(){
    for(i=1;i<256; i++){
        console.log(i);
    }
}

// Print ints and sums 1-255
function printIntsAndSums(){
    var sum = 0;
    for(i=1; i<256; i++){
        sum += i;
        console.log(i);
        console.log(sum);
    }
}

// Print max of array
function printMax(arr){
    var max = arr[0];
    for (i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}

// Array with odds
function arrayWithOdds(){
    var results = [];
    for (i=1; i<256;i+=2){
        results.push(i);
    }
    return results;
}

// Greater than Y
function greaterThanY(arr, num){
    var count = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i] > num){
            count++;
        }
    }
    console.log(count);
}

// Max, min, avg
function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(i=0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(max, min, avg);
}

// Swap string for negatives
function swapNegsDojo(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}

// Print odds 1-255
function printOdds1To255(){
    for(i=1;i<256;i += 2){
        console.log(i);
    }
}

// Iterate and print array
function printArray(arr){
    for (i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

// Get and print avg
function printAvg(arr){
    var sum = 0;
    for(i=0;i<arr.length;i++){
        sum += arr[i];
    }
    var avg = sum / arr.length;
    console.log(avg);
}

// Square the values
function squareVals(arr){
    for (i=0;i<arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}

// Zero out negative numbers
function zeroOutNegs(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i] < 0){
            arr[i]=0;
        }
    }
    return arr;
}

// Shift array left
function shiftLeft(arr){
    for(i=1; i<arr.length; i++){
        arr[i-1] = arr[i]
    }
    arr[arr.length-1] = 0;
    return arr;
}