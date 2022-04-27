const sumAll = function(num1, num2) {
    // list to contain numbers between parameters
    const listOfNum = []
    debugger;
    // i will become first number and add to list, add 1, add to list, repeat until num1 = num2
    for (let i = num1; i === num2; i++) {
        listOfNum.push(i);
        console.log(listOfNum)
    }
    // add all elements in list
    const sumOfList = listOfNum.reduce(function(total, currentValue) {
        return total + currentValue;
    }
    )
    return sumOfList;
}

// Do not edit below this line
module.exports = sumAll;
