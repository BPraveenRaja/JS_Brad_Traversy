// // ITERATOR

// function namesIterator(names){
//     let nextIndex =0;
//     return {
//         next: function(){
//             console.log(nextIndex);
//             return nextIndex < names.length ? 
//             { value: names[nextIndex++], done: false }: 
//             { done:true }
//         }
//     }
// }
// const names = ["Jack", "Jill", "Up"];

// const name1 = namesIterator(names);

// console.log(name1.next().value); // Jack

// console.log(name1.next().value); // Jill

// console.log(name1.next().value); // Up

// console.log(name1.next()); // { done: true }

// // GENERATORS

// function* itsagenerator(){
//     yield 'Jack';
//     yield 'Jill';
//     yield 'Up';
// }

// const name2 = itsagenerator();

// console.log(name2.next().value); // Jack
// console.log(name2.next().value); // Jill
// console.log(name2.next().value); // Up
// console.log(name2.next()); // Object { value: undefined, done: true }

// // Generators Example 2

// function* createIDs(){
//     let index = 0;

//     while(true){
//         yield index++;
//     }
// }
// const ids = createIDs();
// console.log(ids.next()); //Object { value: 0, done: false }
// console.log(ids.next()); //Object { value: 1, done: false }
// console.log(ids.next()); //Object { value: 2, done: false }


// SYMBOLS

// const sym1 = Symbol();
// const sym2 = Symbol();
// console.log(sym1); //Symbol()
// console.log(sym2); //Symbol()

// console.log(sym1 === sym2); //false

// console.log(`Hello ${String(sym1)}`); // there is aneed to manually convert it to string

// // Unique Object keys
// const obj = {};
// obj[sym1] = 'prp1';
// obj[sym2] = 'prp2';
// obj.sym1 = 'prp3'; // sym1 is not taken as symbol, it is a regular key
// obj.key2 = 'prp4';

// console.log(obj[sym1]); //prp1

// console.log(obj[sym2]); //prp2

// console.log(obj.sym1); //prp3
// // Symbols will not be iterated when in keyword is used.
// for(let key in obj){
//     console.log(`${key} is ${obj[key]}`); //the symbols keys will be missed out in the output
// }
// //output
// //sym1 is prp3 app.js:81:13
// //key2 is prp4


// console.log(JSON.stringify({key: 'prop1'}));
// console.log(JSON.stringify({[Symbol('key')]: 'prop1'})); //{}


// DESTRUCTURING


// //Array destructuring
// let [a, b, ...rest] = [1, 2, 3, 4, 5];

// console.log(a); //1
// console.log(b); //2
// console.log(rest); //[3, 4, 5]

// // Object destructuring
// const person = {
//     name: 'Praveen',
//     age: 25,
//     hello: function(){
//         console.log('Hello');
//     }
// }

// let {name1, age, hello} = person;
// console.log(name1);
// console.log(age);

// hello(); //hello

// MAPS

// const map1 = new Map();

// // Set Keys
// const key1 = 'Some string',
//       key2 = {},
//       key3 = function(){};

// map1.set(key1, 'Value of key1');
// map1.set(key2, 'Value of key2');
// map1.set(key3, 'Value of key3');

// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// console.log(map1.size);

// // Iterate through maps using for of
// for(let key of map1.keys()){
//     console.log(`key is ${key}`);
// }

// for(let value of map1.values()){
//     console.log(`key is ${value}`);
// }

// for(let [key, value] of map1){
//     console.log(`key is ${key}: ${value}`);
// }

// map1.forEach(function(value, key){
//     console.log(`key is ${key}: ${value}`);
// })

// // Convert to Arrays
// const mapArray = Array.from(map1);
// console.log(mapArray[2][0]);
// // Array(3) [ (2) […], (2) […], (2) […] ]
// // ​
// // 0: Array [ "Some string", "Value of key1" ]
// // ​
// // 1: Array [ {}, "Value of key2" ]
// // ​
// // 2: Array [ key3(), "Value of key3" ]

// const keyArray = Array.from(map1.keys());
// const valueArray = Array.from(map1.values());

// console.log(keyArray);


// SETS, A unique values in javascript


const set1 = new Set();

set1.add(100);
set1.add(true);
set1.add('some string');
set1.add({name: 'john'});

// console.log(set1.has(100)); //true
// console.log(set1.has({name: 'john'})); //false because objects are nothing but reference

console.log(set1.delete(101)); // false
console.log(set1);

// Iterating through sets

for(let entry of set1){
    console.log(`${entry}`);
}

set1.forEach((entry) =>{
    console.log(entry);
})

// Convert sets to arrays

const setArray = Array.from(set1);
console.log(setArray);




