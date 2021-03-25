// Only change code below this line
function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}

function* insideGenerator1() {
  for (var x = 1; x <= 5; x++) {
    yield x;
  }
}

function* insideGenerator2() {
  for (var x = 10; x <= 15; x++) {
    yield x;
  }
}

function* insideGenerator3() {
  for (var x = 6; x <= 9; x++) {
    yield x;
  }
}

let iterator = myGenerator();

let fifteenArray = [];
let fifteenArrayStr = "";
for (let i = 0; i <= 15; i++) {
  let { value } = iterator.next();
  fifteenArray.push(value);
  if (value) {
    fifteenArrayStr += value + "#, ";
  } else {
    fifteenArrayStr += value + "!";
  }
}
//console.log(fifteenArray);
console.log(fifteenArrayStr);
// Only change code above this line
module.exports = { fifteenArray, myGenerator };
