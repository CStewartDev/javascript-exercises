const sumAll = function(...args) {
    if(!Number.isInteger(args[0])|| !Number.isInteger(args[1])) return "ERROR";
    if(args[0] < 0 || args[1] < 0) return "ERROR";

    args.sort((a,b)=>a-b);
    let result = 0;
    for(let i = args[0];i<=args[1]; i++){
        result += i;
    }
    return result;


};

module.exports = sumAll;
