
// Only change code below this line

let numberArray = [9,5,4,11,5,12,13,15,4,2,5];
let uniqueSet = new Set(numberArray);
let uniqueArray = [];
for (let item of uniqueSet){
uniqueArray.push(item);

}

uniqueArray.sort((a,b) => a-b);
console.log(uniqueArray);
// Only change code above this line
module.exports = {numberArray, uniqueArray};    