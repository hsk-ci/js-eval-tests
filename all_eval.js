// eval szenarios

// simple outputs
console.log(eval('2 + 2'));
// Expected output: 4

console.log(eval(new String('2 + 2')));
// Expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// Expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// Expected output: false




// new Function szenarios


// test closure
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // error: value is not defined


// simple test
let sayHi = new Function('alert("Hello")');

sayHi(); // Hello


let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3
