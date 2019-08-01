//////////////   1.  Check for Prime Number//////////////
/// A number can never be divided by a number that is larger than half of the original number (24 / 13 is not possible, 24/12 is)
function IsPrime(n){
    var divisor = 2;

    while(n > divisor){
        if (n % divisor == 0){
            return false;
        }
        else divisor++;
    }
    return true;
}

console.log(`Is this prime: ${IsPrime(137)}`);
console.log(IsPrime(237));

//////////////  2.   Prime Factors//////////////
////// What is run time complexity? Can you make it better?////
//////THis is O(n) you can increase divsor by 2 form divisor = 3. Because if a number is divisible by an even number it would be divisible by 2. Hence, you ony need yo divide by even numbers. Besides, you will not have a factor bigger than half of its value.
function PrimeFactors(n){
    var factors = [],
    divisor = 2;

    while(n>2){
        if (n % divisor == 0){
            factors.push(divisor);
            n= n/ divisor;
        }
        else{
            divisor ++;
        } 
    }
    return factors;
}

console.log(`Prime Factors: ${PrimeFactors(69)}`)

////////////  3.  Fibonacci  (POPULAR QUESTION) ///////////////
/////////// How do you get nth Fibonacci numbers? ///////
////////// I create an array and start from iterate through. //////////
////////// The fibonacci sequence is the sum of the previous two numbers in a sequence is equal to the next number in the sequence starting with 0, 1 the next number is 1; the next sequence is 1, 1 and the next number is 2; the next sequence is 1, 2 and the next number is 3.... etc.; Total Fibonacci so far is: [0, 1, 1, 2, 3, 5, 8, 13...]
function Fibonacci(n){
    var fibo = [0, 1];

    if (n <= 2) return 1;

    for (var i = 2; i <= n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo[n];
}

console.log(`Fibonacci: ${Fibonacci(10)}`)

///////// Recursive Fibonacci///
//////// for definition on recursive please see this link: https://whatis.techtarget.com/definition/recursion //////
function FibonacciRecursive(n){
    if (n <= 1)
    return n;
    else
    return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2);
}

console.log(`Fibonacci Recursive: ${FibonacciRecursive(12)}`)