const ftoc = function(temp) {
  let fah = (temp - 32) / 1.8;
  return Math.round(fah*10) / 10
};

const ctof = function(temp) {
  let cel = temp * 1.8 + 32
  return Math.round(cel*10) / 10
};

module.exports = {
  ftoc,
  ctof
};
