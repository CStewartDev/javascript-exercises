const repeatString = function(word,times) {
    let output= "";
    for(let i = 0; i < times;i++) {
        output += word;
    }
    if(times < 0){output = 'ERROR'}
    return output;
};

module.exports = repeatString;
