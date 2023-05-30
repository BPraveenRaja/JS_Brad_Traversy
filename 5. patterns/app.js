// ES5(old) module pattern(module exports)

// Immediately invoked Function expression(IFFE)

(function(){
    // Declare private variables and functions

    return {
        // Declare public variables and functions
    }
})();


// STANDARD MODULE PATTERN

// const uiCtrl = (function(){
//     const text = "Hello world!";

//     const changeText = function(){
//         const h1tag = document.querySelector(`h1`);
//         h1tag.textContent = text;
//     }

//     return {
//         callChangeText: function(){
//             changeText();
//             console.log(text);
//         }
//     }
// })();


// uiCtrl.callChangeText();
// // uiCtrl.changeText(); // cannot be accessed
// // uiCtrl.text; //u cannot access it as it is a private variable


// // REVEALING MODULE PATTERN

// const itemCtrl = (function(){
//     let data = [];
//     function add(item){
//         data.push(item);
//         console.log('Item added...');
//     }

//     function get(id){
//         data.find(function(item){
//             if(item.id === id){
//                 console.log(item);
//             }
//         })
//     }

//     return {
//         add: add,
//         get: get
//     }

// })();


// itemCtrl.add({id: 1, name: 'John'});
// itemCtrl.add({id:2, name: 'Kept'})
// itemCtrl.get(2);



// // SINGLETON

// const Singleton = (function(){
//     let instance = null;

//     function createInstanceObject(){
//         let object = new Object({name: 'Praveen'});
//         return object
//     }

//     function getInstance(){
//         if(!instance){
//             instance = createInstanceObject();
//         }
//         return instance;
//     }
//     return {
//         getInstance: getInstance
//     }
// })();

// const singleton1 = Singleton.getInstance();
// const singleton2 = Singleton.getInstance();
// console.log(singleton1 === singleton2);


// FACTORY PATTERN
// function MemberFactory(){
//     this.createMember = function(name, type){
//         if(type === 'simple'){
//             member = new SimpleMembership(name);
//         }
//         else if(type === 'standard'){
//             member = new StandardMembership(name);
//         }
//         else if(type === 'premium'){
//             member = new PremiumMembership(name);
//         }
//         member.type = type;
//         member.define = function(){
//             console.log(`${this.name}: ${this.type}: ${this.cost}`);
//         }
//         return member;
//     }
// }
// const SimpleMembership = function(name){
//     this.name = name;
//     this.cost = "Rs.5";
// }

// const StandardMembership = function(name){
//     this.name = name;
//     this.cost = "Rs.15";
// }

// const PremiumMembership = function(name){
//     this.name = name;
//     this.cost = "Rs.5";
// }

// const memberfactory = new MemberFactory();

// let members = [];

// members.push(memberfactory.createMember('Joe', 'simple'));
// members.push(memberfactory.createMember('Smith', 'standard'));
// members.push(memberfactory.createMember('John', 'simple'));
// members.push(memberfactory.createMember('Brad', 'premium'));

// members.forEach(function(member){
//     member.define();
// })


// OBSERVER PATTERNS
// function EventObservers(){
//     this.observers = [];
// }

// EventObservers.prototype = {
//     subscribe: function(fn){
//         this.observers.push(fn);
//         console.log(`You are subscribed to ${fn.name}`);
//     },
//     unsubscribe: function(fn){
//         this.observers = this.observers.filter(function(item){
//             if(item!=fn){
//                 return item;
//             }
//         })
//         console.log(`You are unsubscribed from ${fn.name}`);
//     },
//     fire: function(){
//         this.observers.forEach(function(item){
//             item.call();
//         })
//     }
// }

// const click = new EventObservers();
// document.querySelector('.sub-ms').addEventListener('click', function(){
//     click.subscribe(getCurrentTimeInMilliseconds);

// });
// document.querySelector('.unsub-ms').addEventListener('click', function(){
//     click.unsubscribe(getCurrentTimeInMilliseconds);

// });
// document.querySelector('.sub-s').addEventListener('click', function(){
//     click.subscribe(getCurrentTimeInSeconds);

// });
// document.querySelector('.unsub-s').addEventListener('click', function(){
//     click.unsubscribe(getCurrentTimeInSeconds);

// });
// document.querySelector('.fire').addEventListener('click', function(){
//     click.fire();

// });

// function getCurrentTimeInMilliseconds(){
//     console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
// }

// function getCurrentTimeInSeconds(){
//     console.log(`Current seconds: ${new Date().getSeconds()}`);
// }


// MEDIATOR PATTERNS
// Here in this example, chatroom is a mediator pattern

// function User(name){
//     this.name = name;
//     this.chatroom = null;
// }

// User.prototype = {
//     send: function(message, to=null){
//         this.chatroom.send(message, this, to);
//     },
//     receive: function(message, from){
//         console.log(`${from.name} to ${this.name}: ${message}`);

//     }
// }

// function chatRoom(){
//     let users = {};

//     return {
//         register: function(user){
//             users[user.name] = user;
//             user.chatroom = this;
//         },
//         send: function(message, from, to){
            
//             if(to){
//                 console.log(to);
//                 to.receive(message, from);
//             }
//             else {
//                 console.log(users);
//                 for(let key in users){
//                     if(users[key] !== from){
//                         users[key].receive(message, from);
//                     }
//                 }
//             }
//         }
//     }

// }

// const jeff = new User('Jeff');
// const brad = new User('Brad');
// const sara = new User('Sara');
// console.log(sara);
// // alert('hey');

// const chatroom = new chatRoom();
// chatroom.register(jeff);
// chatroom.register(brad);
// chatroom.register(sara);
// console.log(sara);

// jeff.send('Hey', sara);
// jeff.send('Hey', brad);
// jeff.send('Hello');


// STATE PATTERN

const PageState = function(){
    let currentState = new homeState(this);

    this.init = function(){
        this.change(new homeState);
    }

    this.change = function(state) {
        currentState = state;
    }
};


const homeState = function(page){
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
    Hey this is a home page`;
}

const aboutState = function(page){
    document.querySelector('#heading').textContent = 'About US';
    document.querySelector('#content').innerHTML = `
    Hey this is about page`;
}

const contactState = function(page){
    document.querySelector('#heading').textContent = 'Contact US';
    document.querySelector('#content').innerHTML = `
    Hey this is contact page`;
}


const page = new PageState();
page.init();

document.getElementById('home').addEventListener('click', (e)=> {
    page.change(new homeState);

    e.preventDefault();
});

document.getElementById('about').addEventListener('click', (e)=> {
    page.change(new aboutState);

    e.preventDefault();
});

document.getElementById('contact').addEventListener('click', (e)=> {
    page.change(new contactState);

    e.preventDefault();
});
















