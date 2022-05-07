
function sum(fromN, toN) {
  let total = 0;
  if(toN === fromN) {
    return total + fromN;
  } else {
    return toN + sum(fromN, toN - 1);
  }
}

module.exports = sum;
