const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let nums = [];

  for (let i = increment; i <= 10 * increment; i+= increment) {
    let el = addNums(i);
    nums.push(el);
  }

  return nums;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
 let nums = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    let num = addManyNums(i);
    nums.push(num);
  }

  return nums;
}

module.exports = [addNums10, addManyNums10];
