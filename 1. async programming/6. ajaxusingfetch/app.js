document.getElementById('id1').addEventListener('click', getText);
document.getElementById('id2').addEventListener('click', getJSON);
document.getElementById('id3').addEventListener('click', getAPIdata);

// function getText(){
//     // console.log('here')
//     fetch('data1.txt')
//     .then(function(response){
//         // console.log('here');
//         return response.text();
//     })
//     .then(function(data){
//         console.log(data);
//         // document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err){
//         // you need to throw an error for network errors inorder to catch here.
//         console.log(err);
//     });
// }

// function getJSON(){
//     fetch('data.json').then(function(response){
//         // console.log('here');
//         return response.json();
//     }).then(function(data){
//         let output = ``;
//         data.forEach(function(content){
//             output += `<li>${content.title} and ${content.body}</li>`;
//         })
//         // console.log(data);
//         document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err){
//         console.log(err);
//     });
// }

// function getAPIdata(){
//     fetch('https://api.github.com/userss')
//     .then(function(response){
//         // console.log('here');
//         return response.json();
//     }).then(function(data){
//         let output = ``;
//         data.forEach(function(content){
//             output += `<li>${content.id} and ${content.login}</li>`;
//         })
//         // console.log(data);
//         document.getElementById('output').innerHTML = output;
//     }).catch(function(err){
//         console.log(err);
//     });
// }


//USING ARROW FUNCTIONS

function getText(){
    // console.log('here')
    fetch('data1.txt')
    .then(response => response.text())
    .then((data)=>{
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch((err)=>{
        // you need to throw an error for network errors inorder to catch here.
        console.log(err);
    });
}

function getJSON(){
    fetch('data.json')
    .then((response)=>response.json())
    .then((data)=>{
        let output = ``;
        data.forEach(function(content){
            output += `<li>${content.title} and ${content.body}</li>`;
        })
        // console.log(data);
        document.getElementById('output').innerHTML = output;
    })
    .catch(err=>console.log(err));
}

function getAPIdata(){
    fetch('https://api.github.com/userss')
    .then((response)=>response.json())
    .then((data)=>{
        let output = ``;
        data.forEach(function(content){
            output += `<li>${content.id} and ${content.login}</li>`;
        })
        // console.log(data);
        document.getElementById('output').innerHTML = output;
    }).catch(err=>console.log(err));
}