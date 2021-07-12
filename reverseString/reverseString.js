const reverseString = function(str) {
    let result ="";
    result = str.split('').reverse().join('');
    return result
};

reverseString("Boop");

module.exports = reverseString;
