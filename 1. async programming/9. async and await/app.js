async function hello(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 5000);
    });
    const error = true;
    if(!error){
        const res = await promise;
        return res;
    }
    else {
        await Promise.reject(new Error('Someting went wrong'));
    //     Error: Someting went wrong
    // hello http://127.0.0.1:5500/app.js:11
    // <anonymous> http://127.0.0.1:5500/app.js:19
    }
}

hello().then(res => console.log(res)).catch(err => console.log(err));


async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const resp = await response.json();

    return resp;
}

getUsers().then(data => console.log(data));