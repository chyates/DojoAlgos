// Countdown:
function countdown(num) {
    var newArr = [];
    for (i = 0; i < num; i++) {
        newArr.push(num - i);
    }
    return newArr;
}

// Print and return:
function printAndReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}

// First plus length:
function firstPlusLength(arr) {
    var sum = arr[0] + arr[arr.length - 1];
    return sum;
}

// Vals greater than second:
function valsGreaterSecond(arr) {
    var resultArr = [];
    var greaterCount = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            greaterCount++;
            resultArr.push(arr[i]);
        }
        if (arr.length === 1) {
            return arr;
        }
    }
    return resultArr;
}

// This length, that value:
function thisLenThatVal(num1, num2) {
    var resultArr = [];
    if (num2 == num1) {
        return "Jinx!";
    } else {
        for (i = 0; i < num1; i++) {
            resultArr.push(num2);
        }
        return resultArr;
    }
}

// Fit first value:
function fitFirst(arr) {
    if (arr[0] < arr.length) {
        return "Too small!";
    } else if (arr[0] > arr.length) {
        return "Too big!";
    } else {
        return "Just right!";
    }
}

// Fahrenheit to Celsius:
function fahrToCels(num){
    var celsius = ((num-32)*5)/9;
    return celsius;
}

// Celsius to Fahrenheit:
function celsToFahr(num){
    var fahr = ((num*9)/5)+32;
    return fahr;
}

// Biggie size:
function bigSize(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "Big";
        }
    }
    return arr;
}

// Print low, return high:
function lowHigh(arr){
    var min = arr[0];
    var max = arr[0];
    for (i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(min);
    return max;
}

// Print one, return another:
function oneAnother(arr){
    var firstOdd = arr[0];
    for (i = 0; i < arr.length; i++){
        if(arr[i] %2 !== 0){
            firstOdd = arr[i];
            break;
        }
    }
    console.log(arr[arr.length-2]);
    return firstOdd;
}

// Double vision:
function double(arr){
    var newArr = [];
    for(i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2);
    }
    return newArr;
}

// Count positives:
function countPositives(arr){
    var posCount = 0;
    for (i = 0; i <arr.length; i++){
        if(arr[i] > 0){
            posCount++;
        }
    }
    arr[arr.length-1] = posCount;
    return arr;
}

// Evens and odds:
function evensAndOdds(arr){
    var oddCount = 0;
    var evenCount = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0 && arr[i+2] % 2 !== 0){
            console.log("That's odd!");
        }
        if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0 && arr[i+2] % 2 === 0){
            console.log("Even more so!");
        }
    }
}

// Increment the seconds:
function incrementSeconds(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            console.log(arr[i]);
            arr[i] += 1;
        }
    }
    return arr;
}

// Previous lengths:
function previousLengths(arr){
    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i].length;
    }
    for(i = arr.length-1; i>0; i--){
      var temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
    }
    return arr;
}

// Add seven to most:
function addSeven(arr){
    var newArr = [];
    for(i = 1; i < arr.length; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}

// Reverse array: 
function reverseArray(arr){
    for(i = 0; i <arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

// Outlook: Negative
function negative(arr){
    for(i = 0; i<arr.length; i++){
        if(arr[i] > 0){
            arr[i] = arr[i]*-1;
        } else {
            continue;
        }
    }
    return arr;
}

// Always hungry:
function alwaysHungry(arr){
    var foodCount = 0;
    for(i = 0; i<arr.length; i++){
        if(arr[i] === "food"){
            console.log("Yummy!");
            foodCount++;
        }
    }
    if(foodCount < 1){
        console.log("I'm hungry!");
    }
}

// Swap toward the center:
function swapCenter(arr){
    for(i = 0; i>arr.length; i += 2){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

// Scale the array:
function scaleArray(arr, num){
    for (i = 0; i<arr.length; i++){
        arr[i] = arr[i]*num;
    }
    return arr;
}

// Only keep the last few:
function lastFew(arr, num){
    var start = arr[arr.length-num];
    var newArr = [];
    for(i=start; i>arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

// Soaring IQ:
function soaringIQ(num){
    for(i = .01; i<.99; i+= .01){
        num += i;
    }
    return num;
}

// Letter Grade:
function letterGrade(num){
    if (num >= 90){
        console.log("A!");
    } else if(num >= 80 && num < 90) {
        console.log("B!");
    } else if (num >= 70 && num < 80){
        console.log("C!");
    } else if (num >= 60 && num < 70) {
        console.log("D!");
    } else {
        console.log("F!");
    }
}

// 