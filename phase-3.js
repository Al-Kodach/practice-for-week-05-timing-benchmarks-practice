const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  let nums = [];

  for (let i = increment; i <= 10 * increment; i+= increment) {
    console.time('addnums');
    let el = addNums(i);
    console.timeLog('addnums');
    nums.push(el);
    console.timeEnd('addnums');
  }

  return nums;
}

function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

let nums = [];
for (let i = increment; i <= 10 * increment; i += increment) {
  console.time('addManyNums10Timing');
  let num = addManyNums(i);
  console.timeLog('addManyNums10Timing');

  nums.push(num);

  console.timeEnd('addManyNums10Timing');
}

return nums;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
