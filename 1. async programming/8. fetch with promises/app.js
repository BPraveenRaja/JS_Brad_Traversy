const http = new EasyHttp;

// http.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data)).catch(err => console.log(err));

const user = {
    name: 'Praveen',
    username: 'prvn'
}

// http.post('https://jsonplaceholder.typicode.com/users', user)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/11', user)
// .then(data => console.log(data))
// .catch(err => console.log(JSON.stringify(err)));

http.delete('https://jsonplaceholder.typicode.com/users/11')
.then(data => console.log(data))
.catch(err => console.log(err));

// console.log(users);