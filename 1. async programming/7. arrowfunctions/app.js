function hello(){
    console.log('hello');
}
const hello1 = () => {
    console.log('hello');
}

hello1();
// single line function
const hello2= () => 'hello';

console.log(hello2());

// object literals
const hello3 = () => ({message: 'hello'});

console.log(hello3());

// single params doesnt need paranthesis

const hello4 = name => `hey there ${name}`;

console.log(hello4('yes'));

// multiple params need paranthesis

const hello5 = (name, lname) => `hey there ${name} and ${lname}`;

console.log(hello5('yes', 'no'));

const users = ['a', 'b', 'c'];
const userLength1 = users.map(function(name){
    return name.length;
})
const userLength = users.map(name => name.length);