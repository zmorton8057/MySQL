var num = [1, 2, 3, -1, -2, -3]


var doubler = function () {
    for (var i = 0; i < num.length; i++) {
        var numArray = [];
        numArray = num[i] + num[i]
        console.log(numArray)
    }
}

console.log(doubler())