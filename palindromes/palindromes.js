const palindromes = function (str) {
    let noPunc = str.toUpperCase().replace(/\W/g,"")
    let reverse = noPunc.split('').reverse().join('')
    return noPunc === reverse
};

module.exports = palindromes;
