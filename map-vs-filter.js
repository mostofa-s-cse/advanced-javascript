const numbers = [2, 3, 5, 8, 9];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);



// const result = numbers.map(function(element, index, array) {
//     return element * element;
//     // console.log(element, index, array);
// })
// console.log(result);



// const square = element => element * element;

// const square = x => x * x;


// const result = numbers.map(x => x * x);
// console.log(result);


//...............................filter.............................//

// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);

const isThere = numbers.find(x => x > 5);
console.log(isThere);