// Only change code below this line
let shoppingList = new Map([
  ["Banana", 3],
  ["Pineapple", 5],
  ["Pear", 2],
  ["Carrot", 10],
  ["Apple", 1.5],
]);
let arrKey = [];
for (let col of shoppingList.entries()) {
  arrKey.push(col[0]);
  console.log(`groceries: ${col[0]}`);
}
let arrValue = [];
for (let col of shoppingList.entries()) {
  arrValue.push(col[1]);
  console.log(`amount: ${col[1]}`);
}
for (let col of shoppingList.entries()) {
  console.log([col[0], col[1]]);
}

// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };
