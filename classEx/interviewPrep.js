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

////////////  3a.  Fibonacci  (POPULAR QUESTION) ///////////////
/////////// How do you get nth Fibonacci numbers? ///////
////////// I create an array and start from iterate through. //////////
////////// The fibonacci sequence is the sum of the previous two numbers in a sequence is equal to the next number in the sequence starting with 0, 1 the next number is 1; the next sequence is 1, 1 and the next number is 2; the next sequence is 1, 2 and the next number is 3.... etc.; Total Fibonacci so far is: [0, 1, 1, 2, 3, 5, 8, 13...]
/////////      Runtime Complexity: 0(n)    //////////
function Fibonacci(n){
    var fibo = [0, 1];

    if (n <= 2) return 1;

    for (var i = 2; i <= n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo[n];
}

console.log(`Fibonacci: ${Fibonacci(10)}`)

/////////   3b.  Recursive Fibonacci    //////////////////
//////// for definition on recursive please see this link: https://whatis.techtarget.com/definition/recursion //////
/////////      Runtime Complexity: 0(2n)    //////////
function FibonacciRecursive(n){
    if (n <= 1)
    return n;
    else
    return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2);
}

console.log(`Fibonacci Recursive: ${FibonacciRecursive(12)}`)


///////////  4a.  Greatest Common Divisor     ///////////
function GreatestCOmmonDivisor(a, b){
    var divisor = 2;
    greatestDivisor = 1;

    if (a < 2 || b < 2){
        return 1;
    }

    while(a >= divisor && b >= divisor){
        if (a % divisor == 0 && b% divisor == 0) {
            greatestDivisor = divisor;
        }
        divisor ++;
    }
    return greatestDivisor;
}

console.log(`Greatest Divisor: ${GreatestCOmmonDivisor(14, 21)}`);


//////////// 4b.  simpler to write: solution and better to answer interview questions with //////
///////// Recursion is not always best because you risk crashing your memory without an exit because the function calls itself. Some languages are not optimized to handle recursion in comparison to others.
function GCDivisor(a ,b){
    if (b == 0){
        return a;
    } else {
        return GCDivisor(b, a % b)
    }
}

console.log(`Greatest Divisor with Recursion: ${GCDivisor(66, 55)}`);

/////////// 5. Remove Duplicates ////////////
//////// Start Looping and through an object / associated array. If i find an element for the fist time I will its value as true (that will tell me element was added once). If i find an element in the existing object, I will not insert it into the return array.
function removeDuplicate(arr){
var exists = {};
var outArr = [];
var elm;

for (var i = 0; i < arr.length; i++){
    elm = arr[i];
    if (!exists[elm]){
        outArr.push(elm);
        exists[elm] = true;
    }
}
return outArr;
}

arrayOfDuplicates = [1,3,3,3,1,5,6,7,8,1];

console.log(`Array without Duplicates: ${removeDuplicate(arrayOfDuplicates)}`);

////////////// 6. Merg Two Sorted Arrays ///////////////
///////  Keep a pointer for each array 
function mergeSortedArray(a, b){
    /////// empty array to push the sorted arrays into
    var merged = [];
    /////// starting at the [0] index of the existing first array
    var aElement = a[0];
    /////// starting at the [0] index of the existing second array
    var bElement = b[0];
    /////// for iterating to the next index of the existing arrays
    var i = 1;
    var j = 1;
    /////// While it is either a or b
    while(aElement || bElement) {
    /////// (if this a number and not b number) or (a number is less than b number)
        if((aElement && !bElement) || aElement < bElement) {
            //////// push a number into the merged array
            merged.push(aElement);
            //////// then iterate to the next number in a
            aElement = a[i++];
        } else {
            ////// else push the b number
            merged.push(bElement);
            //// then iterate to the next number in b
            bElement = b[j++];
        }
    }
    return merged; //// returns the new merged number
}

console.log(`Merge two sorted arrays: ${mergeSortedArray([2, 5, 6, 9], [1, 2, 3])}`)

/////////////   7. Swap Numbers without using a temporary variable  //////////
function swapNum(a , b){
    console.log(`Initial Values: a: ${a} b: ${b}`);
    b = b - a;
    a = a + b;
    b = a - b;
    console.log(`Reassigned Values: a: ${a} b: ${b}`);
}

swapNum(200, 3)

////////// 8.a  String Reverse with a for loop //////////

function reverse(str){
    var rtnStr = '';
    for (var i = str.length - 1; i >= 0; i--){
        rtnStr += str[i];
    }
    return rtnStr;
}
console.log(reverse("Hello World"));

///// 8.b String Reverse with built in features ////////////

function reverseB(str){
    if (!str || str.length < 2){
        return str;
    }
    return str.split('').reverse().join('');
}

console.log(reverseB("Hello World"))


////// 9. Reverse Words in a sentence////////////

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWords("Hello World"))

//////// 10. Reverse in Place /////////////

function reverseInPlace(str){
    ///split by space, reverse words, join back together with a space, split reversed words again, reverse words back to their original position, rejoin to make strings
    return str.split(' ').reverse().join(' ').split('').reverse().join('')
}

console.log(reverseInPlace("I am a good boy"))

/////////  11. First non-repeating character in a string /////////
//////// Follow up question: is it case sensitive?

function firstNonRepeatingChar(str){
    var char;
    var charCount = {};

    for (var i = 0; i < str.length; i++){
        char = str[i]
        if(charCount[char]){
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
            }
            for (var j in charCount) {
            if (charCount[j] == 1){
                return j;
        }
    }
}

console.log(firstNonRepeatingChar("did not find any non repeated Character"))

///////   12. Remove Duplicate Characters in a string ////

function removeDuplicateString(str){
    var chara;
    var charaCount = {};
    var newstr = [];

    for (var i = 0; i < str.length; i++){
        chara = str[i]
        if(charaCount[chara]){
            charaCount[chara]++
        } else {
            charaCount[chara] = 1;
        }
    }
    for (var j in charaCount) {
        if (charaCount[j] == 1){
            newstr.push(j)
        }
        return newstr.join('')
    }
}
console.log(removeDuplicateString('did not find any non repeated Character'))