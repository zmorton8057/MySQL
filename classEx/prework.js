var number = [1, 2, 3, -1, -2, -3]

// console.log(typeof(numArray))
// var doubler = function () {
//     for (var i = 0; i < num.length; i++) {
        
//         numArray = num[i] + num[i]
//         console.log(numArray)
        
//     }
// }
// console.log(doubler());


var numArray = [];
function doubles(arr){
    for(var j = 0; j < arr.length; j++){   
    numArray = [arr[j] + arr[j]]
    console.log(numArray)
    }
    
}
console.log(doubles(number))

function sum(num) {
    return num + num
}