// alert("Hello123");

//Traversing the DOM
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// Get child nodes
val = list.childNodes; 
// Returns all the nodes including the elements. Elements are nothing but html elements like <li>
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1-Element
// 2-Attribute(deprecated)
// 3-Text Node
// 8-Comment
// 9-Document
// 10-Doctype

// Get children element nodes
val = list.children;
// Returns the html elements <li>

val = list.children[0].children[1].id = "test-link"

//First child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

//Note: the following has listItem not the list
//get parent node
val = listItem.parentNode;

// get parent element
val = listItem.parentElement;

//next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;



//CREATING ELEMENTS

const li = document.createElement('li');

li.className = 'collection-item';

li.id = 'new-item';

li.setAttribute('title', 'New Item');

//create text node and append to the list
li.appendChild(document.createTextNode('Hello World'));

// create new link element
const link = document.createElement("a");
// add classes
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);
//append li as child to ul
document.querySelector('ul.collection').appendChild(li);



// REPLACING ELEMENTS

// create new heading
const newHeading = document.createElement('h2');

newHeading.id = 'task-title';

newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('task-title');
//parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);



// REMOVING ELEMENTS

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item;
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];


val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://www.google.com');
link.setAttribute('title', 'Google');
val = link.getAttribute('title');
link.removeAttribute('title');
val = link;


// EVENT LISTENERS and THE EVENT OBJECT
// .clear-tasks is a anchor tag

document.querySelector('.clear-tasks').addEventListener('click',
function(e){
    console.log("Hello world!");

    e.preventDefault(); // This prevents the default behvaior.
    // Which means lets say it is a link. A link has a defined to go to a certain link
    // href="#" This is the default value which is nothing but the same page.
    // but if there is a link https://google.com then we can prevent the default behavior using
    // the above command.
}
)

document.querySelector('.clear-tasks').addEventListener('click',
onClickfunction
);

function onClickfunction(e){
    console.log("Hello world!");

    let val;
    val = e;

    // Event target element
    val = e.target; // This gives the anchor element
    val = e.target.className;
    e.target.innerHTML = "Hello";

    // Event type
    val = e.type;

    val = e.timeStamp; // Gives the timestamp of the clicks

    // coordinates relative to the window
    val = e.clientY;
    val = e.clientX;

    // coordinates relative to the element
    val = e.offsetY;
    val = e.offsetX;

    e.preventDefault(); // This prevents the default behvaior.
    // Which means lets say it is a link. A link has a defined to go to a certain link
    // href="#" This is the default value which is nothing but the same page.
    // but if there is a link https://google.com then we can prevent the default behavior using
    // the above command.
};



// MOUSE EVENTS

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

clearBtn.addEventListener('click', runEvent); // click
clearBtn.addEventListener('dblclick', runEvent); // output: doubleclick
clearBtn.addEventListener('mousedown', runEvent);
clearBtn.addEventListener('mouseup', runEvent);
card.addEventListener('mouseenter', runEvent); // fires off only on the parent element
card.addEventListener('mouseleave', runEvent); // fires off only on the parent element
card.addEventListener('mouseover', runEvent); // fires off only on the children element like list or anchor
card.addEventListener('mouseout', runEvent); // fires off only on the children element like list or anchor
card.addEventListener("mousemove", runEvent); // fires off whenver the mouse is moving on the card.




function runEvent(e){
    console.log(`EVENT TYPE ${e.type}`);

    heading.textContent = `X: ${e.offsetX} Y: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}


// KEYBOARD AND INPUT EVENTS

const form = document.querySelector('form');
const taskInput = document.querySelector('task');
taskInput.value = '';

form.addEventListener('submit', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(taskInput.value);

    e.preventDefault();
}


taskInput.addEventListener('keydown', runEvent);
taskInput.addEventListener('keyup', runEvent); // logs when you releast the key
taskInput.addEventListener('keypress', runEvent);
taskInput.addEventListener('focus', runEvent); // clicking on the taskinput
taskInput.addEventListener('blur', runEvent); // when you click on out of the input
taskInput.addEventListener('cut', runEvent); //it triggers when you cut
taskInput.addEventListener('paste', runEvent);  //it triggers when you paste

// we can also use change event
select = document.querySelector('change', runEvent);
select.addEventListener('change', runEvent)

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);

    e.preventDefault();
}

// EVENT BUBBLING AND DELEGATION

// EVENT bubbling
// When an event is occured on a element, it will bubble up through the parents

// EVENT delegation
// When an event is occured on the parent, it will be delegated
// to all its elements of the parents

// EVENT bubbling

document.querySelector(".card-title").addEventListener('click', function(
){
    console.log('card-title');
});

document.querySelector(".card-content").addEventListener('click', function(
    ){
        console.log('card-content');
});

document.querySelector(".card").addEventListener('click', function(
    ){
        console.log('card');
    });

document.querySelector(".col").addEventListener('click', function(
        ){
            console.log('col');
        });


// WHen you click on the card title all the parent elements events will be triggered

// Event delegation

document.body.addEventListener('click', deleteItem);
// click anywhere the delete event will be called

function deleteItem(e){
    // if(e.target.parentElement.className === 'delete-item secondary-content' ){
    //     console.log("delete item")
    // }

    if(e.target.parentElement.classList.contains('delete-item') ){
        console.log("delete item");
        // e.target is delete icon
        //  e.target.parentElement is anchor tag
        // e.target.parentElement.parentElement is the li
        e.target.parentElement.parentElement.remove();
    }
    
}


// Local storage and session storage

// The data in the local storage will be there as long as
// we dont remove them

// This is not same with the session storage. It would go away
// once the browser session is closed.

//methods
localStorage.setItem("name", "john");
localStorage.setItem("age", 30);
localStorage.removeItem("name");
localStorage.removeItem("age");

sessionStorage.setItem("name", "john");
sessionStorage.setItem("age", 30);

localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
    let taskValue = document.getElementById('task').value;

    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(taskValue);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("task saved");

    e.preventDefault();

})


// Chapter 5: Object oriented Javascript ES5 & ES2015

// constructors and this keyword

// new Date('2023-05-05').getTime()
// 1683244800000
// new Date(1683244800000)
// Date Fri May 05 2023 05:30:00 GMT+0530 (India Standard Time)

// ​
function Person(name, dob){
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() -1970);
    }
}

const brad = new Person('Brad', '1991-10-09');
console.log(brad.calculateAge())


// BUILT IN CONSTRUCTORS SHOULD NT BE USED(for many reasons, one being that it will slow down the execution)

const str1 = new String('praveen'); //this would return a object

const num1 = new Number(1);

const bool1 = new Boolean(true); // but why?

const getfunc = new Function('a', 'b', 'return 1+1'); //it defines a new function

const object = new Object({name: 'praveen'});

const arr = new Array(1,2,3,4);

const reg1 = /\w+/; // regular method
const re2 = new RegExp('\\w+');


// PROTOTYPES


function Person(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() -1970);
    // }
}

// calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() -1970);
}

Person.prototype.getFullName = function(){
    return `${this.firstname} + ${this.lastname}`;
}

Person.prototype.getsMarried = function(changedName){
    this.lastname = changedName;
}

const praveen = new Person('Praveen', '1991-10-09');
console.log(praveen.calculateAge());
console.log(praveen.getFullName());
praveen.getsMarried('lastname');
console.log(praveen.getFullName());

console.log(praveen.hasOwnProperty('firstname')); //returns true
console.log(praveen.hasOwnProperty('getFullName')); //returns false



// PROTOTYPE INHERITANCE

function Person1(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person1.prototype.greeting = function(){
    return `${this.firstname} + ${this.lastname}`;
}

function Customer(firstname, lastname, phone, membership){
    Person1.call(firstname, lastname);
    this.phone = phone;
    this.membership = membership;
}

Customer.prototype = Object.create(Person1.prototype);

Customer.prototype.constructor = Customer;

// you can override the functions
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstname} + ${this.lastname}`;
}



const customer1 = new Customer('Praveen', 'raja', 0999, 'standard');


// OBJECT CREATE USING PROTOTYPES

const personprototypes = {
    greeting: function(){
        return `Hey there! ${this.firstname1} and ${this.lastname1} `;
    },
    getsMarried1: function(changedName){
        this.lastname1 = changedName;
    }
}

const person2 = Object.create(personprototypes);

person2.firstname1 = 'Hey';
person2.lastname1 = 'there!';
person2.age = 27;
person2.getsMarried1('not there');
console.log(person2.greeting());


// another way of using object.create

const brad2 = Object.create(personprototypes, {
    firstName: {value: 'Brad'},
    lastname: {value: 'lastname'},
    age: {value: 30}
})


// ES6 classes

class Person {
    constructor(firstname, lastname, dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = dob;
    }
        greeting(){
            return `Hello there! ${this.firstname} and ${this.lastname}`;
        }

        getsMarried(changedName){
            this.lastname = changedName;
        }

        calculateAge(){
            const ageDiff = Date.now() - this.birthday.getTime();
            const date = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() -1970);
        }
        
        static addnumbers(x, y){
            return x + y;
        }
}

const pr = Person('first', 'last', '2023-10-02');

pr.greeting();
pr.getsMarried('yes');
pr.greeting();
pr.calculateAge()
pr.addnumbers(1,2); // throws error since it is a static method;

Person.addnumbers(1,2); // 3

// SUB CLASSESS or INHERITANCE

class Person {
    constructor(firstname, lastname, dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = dob;
    }
        greeting(){
            return `Hello there! ${this.firstname} and ${this.lastname}`;
        }
    }

class Customer extends Person {
    constructor(firstname, lastname, phone, membership){
        super(firstname, lastname);

        this.phone = phone;
        this.membership = membership;
    }
        calculateMembershipCost(){
            return 500;
        }
    }

const cust1 = new Customer('hey', 'there', '555', 'standard');

console.log(cust1.greeting());
console.log(cust1.calculateMembershipCost());

