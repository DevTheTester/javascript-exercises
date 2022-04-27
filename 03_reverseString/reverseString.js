const reverseString = function(string) {
    const reversedList = []
      for (char of string) {
          reversedList.unshift(char);
      }
    let reversedString = reversedList.join("");  
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
