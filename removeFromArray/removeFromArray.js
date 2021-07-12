const removeFromArray = function(arr, ...args) {
    let filtered = arr;
    for(let i = 0; i< args.length;i++){
        filtered = filtered.filter((val) =>val !== args[i])
    }
    return filtered;   
};

module.exports = removeFromArray;
