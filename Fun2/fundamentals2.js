// Sigma
function sigma(num){
    for(i=0;i<=num; i++){
        sum += i;
    }
    return sum;
}

// Factorial
function factorial(num){
    for (i=1; i<=num; i++){
        num *= i;
    }
    return num;
}

// Threes and Fives
function threesAndFives(num){
    var sum = 0;
    for(i=0; i<num; i++){
        if (i % 5 == 0 && i % 15 !== 0){
            sum += i;
        } else if (i % 3 == 0 && i % 15 !== 0){
            sum += i;
        }
    }
    return sum;
}

// Generate Coin Change
function getChange (cents) {
    var quarters = (cents - (cents % 25))/25;
    cents %= 25;
    var dimes = (cents - (cents % 10))/10;
    cents %= 10;
    var nickels = (cents - (cents % 5))/5;
    cents %= 5;
    return quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, " + cents + " pennies."
  }

// Messy Math Mashup: count + add all integers from 0 to current num UNLESS: count is evenly divisible by 3 (skip); count is evenly divisible by 7 (add twice); if count is exactly equal to 1/3 of num, return -1 immediately
function messyMath(num){
    var count = 0;
    for(i=0;i<num;i++){
        count++;
        if(count % 3 === )
    }
}

// Twelve Bar Blues

// Fibonacci

// Sum to One Digit

// Is Prime

// Rockin' the Dojo Sweatshirt

// Extract-o-matic

// Most Significant Digit