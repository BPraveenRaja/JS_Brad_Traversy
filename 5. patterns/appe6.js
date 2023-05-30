// OBSERVER PATTERNS
class EventObservers{
    constructor(){
        this.observers = [];
    }
    subscribe(fn){
        this.observers.push(fn);
        console.log(`You are subscribed to ${fn.name}`);
    }
    unsubscribe(fn){
        this.observers = this.observers.filter(function(item){
            if(item!=fn){
                return item;
            }
        })
        console.log(`You are unsubscribed from ${fn.name}`);
    }
    fire(){
        this.observers.forEach(function(item){
            item.call();
        })
    }
}

const click = new EventObservers();
document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurrentTimeInMilliseconds);

});
document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurrentTimeInMilliseconds);

});
document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurrentTimeInSeconds);

});
document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurrentTimeInSeconds);

});
document.querySelector('.fire').addEventListener('click', function(){
    click.fire();

});

function getCurrentTimeInMilliseconds(){
    console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}

function getCurrentTimeInSeconds(){
    console.log(`Current seconds: ${new Date().getSeconds()}`);
}