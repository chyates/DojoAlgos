// Sigma
function sigma(num) {
    for (i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// Factorial
function factorial(num) {
    for (i = 1; i <= num; i++) {
        num *= i;
    }
    return num;
}

// Threes and Fives
function threesAndFives(num) {
    var sum = 0;
    for (i = 0; i < num; i++) {
        if (i % 5 == 0 && i % 15 !== 0) {
            sum += i;
        } else if (i % 3 == 0 && i % 15 !== 0) {
            sum += i;
        }
    }
    return sum;
}

// Generate Coin Change
function getChange(cents) {
    var quarters = (cents - (cents % 25)) / 25;
    cents %= 25;
    var dimes = (cents - (cents % 10)) / 10;
    cents %= 10;
    var nickels = (cents - (cents % 5)) / 5;
    cents %= 5;
    return quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, " + cents + " pennies."
}

// Messy Math Mashup: count + add all integers from 0 to current num UNLESS: count is evenly divisible by 3 (skip); count is evenly divisible by 7 (add twice); if count is exactly equal to 1/3 of num, return -1 immediately
function messyMath(num) {
    var count = 0;
    for (i = 0; i < num; i++) {
        count++;
        if (count % 3 === 0) {
            continue;
        } else if (count & 7 === 0) {
            count++;
        } else if (count === (num / 3)) {
            return -1;
        }
    }
    return count;
}

// Twelve Bar Blues: console.logs "1, chick, boom, chick, 2 chick boom, chick, 3 chick boom, chick, etc"
function twelveBar() {
    for (i = 1; i < 13; i++) {
        console.log(i, "chick", "boom", "chick");
    }
}

// Fibonacci: third number is sum of previous two numbers
function fib(num) {
    var first = 1;
    var second = 0;
    while (num > 0) {
        var temp = first;
        first = first + second;
        second = temp;
        num--;
    }
    return second;
}

// Sum to One Digit
function sumToOne(num) {
    var sum = 0;
    while (num > 0 || sum > 9) {
        if (num === 0) {
            num = sum;
            sum = 0;
        }
        sum += num % 10;
        num = Math.floor(num /= 10);
    }
    return sum;
}

// Is Prime
function isPrime(num) {
    var mod = 9;
    var prime = true;
    while (mod > 1) {
        if (num % mod === 0) {
            prime = false;
            break;
        } else {
            mod--;
        }
    }
    return prime;
}

// Rockin' the Dojo Sweatshirt: sweatshirts cost $20. if you buy 2, you get 9% discount; 19% for 3; 35% for 4+. he doesn't have coins, so round up the price. write function that returns price based on how many sweatshirts you buy
function sweatshirt(num) {
    var basePrice = 20;
    if (num == 2) {
        basePrice = Math.ceil((basePrice * num) * 0.91);
    } else if (num == 3) {
        basePrice = Math.ceil((basePrice * num) * 0.81);
    } else if (num >= 4) {
        basePrice = Math.ceil((basePrice * num) * 0.65);
    }
    return basePrice;
}

// Extract-o-matic
function extract(num, place) {
    var val = Math.floor(num / (10 ** place) % 10 ** (place - 1));
    return val;
}

// Most Significant Digit
function mostSignificant(num) {
    while (num > 10) {
        num /= 10;
    }
    return Math.floor(num);
}