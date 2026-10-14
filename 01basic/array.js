//arrays
/*
const myArr = [1, 2, 3, 4, 5];
console.log(myArr);
console.log(myArr[0]);

const myArr2 = new Array(6, 7, 8, 9, 10);
console.log(myArr2);
console.log(myArr2[0]);

//array methods
myArr.push(6);
myArr.push(7);
myArr.pop();
//myArr.unshift(9);
myArr.shift();
console.log(myArr);*/


//Array Method Functions

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
console.log(fruits.toString());  
fruits.push("Grape");
console.log(fruits);
console.log(fruits.at(2));*/

let number = [1, 2, 3, 4, 5];
console.log(number);
console.log(number.slice(1, 3));
console.log(number.pop());
console.log(number.shift());
console.log(number.unshift(50));
console.log(number);
let result = number.find(n =>n > 2);
console.log(result);
let result1 = number.findIndex(n =>n > 2);
console.log(result1);
console.log(number.indexOf(3));
console.log(number.includes(100));
console.log(number.some(number=> number > 2));
console.log(number.slice(1, 3));
console.log(number.splice(1, 3));










