const add = function(...args) {
  return args.reduce((total,curr)=> total + curr)
};

const subtract = function(...args) {
  return args.reduce((total,curr)=> total - curr)
};

const sum = function(args) {
  return [...args].reduce((total,curr)=> {
    return total + curr
  },0)
};

const multiply = function(args) {
  return [...args].reduce((total,curr)=> {
    return total * curr
  },1)
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
  let product = 1;
	for(let i=1; i<=a;i++){
    product *= i;
  }
  return product
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
