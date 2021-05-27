console.log('Damien Pejcev')
console.log('---------------')
let myVariable = true;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');
}

console.log('---------------')

let a = 7;
if (a < 5) {
    console.log(a/2);
} else {
    console.log(a*2);
}

console.log('---------------')

let bookCount = 20;

for (let i = 0; i <= bookCount; i++) {
  console.log(i);
}

console.log('------Exercise------')

let x = 5;

let add = (a, b) => {
  return a+b;
}


console.log(add(5, 6))

console.log('---------------')

let printNumbersTill = (a) => {
    for (let i=1; i <= a; i++) {
      console.log(i)
    }
    
}

console.log(printNumbersTill(15))

console.log('---------------')

let getGreetingTo = (name) => {
    let Hello = 'Hello ';
    let excl = '!';
    return Hello + name + excl;
}

console.log(getGreetingTo('Eliska'))

console.log('---------------')

// let printValues = (array) => {
//   for (let i = 0; i < array.length; i++){
//     console.log(array[i])
//   }
// }

// console.log(printValues([0, 3, 6, 7, 9]))

console.log('---------------')

let myNumbers = [10, 20, 30, 50, 12];

myNumbers.forEach((number) => {
  console.log(number);
});

console.log('---------------')

let printValues = (array) => {
  array.forEach((number) => {
  console.log(number);
  });
}

console.log(printValues([10, 20, 30, 50, 12]))

console.log('---------------')

