const http = new easyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, responseText){
//     if(error){
//         console.log("ERRor", error);
//     }
//     else{
//         console.log(responseText);
//     }
// });

//POST
const data = {
    title: "Hey",
    body: "This is content1"
}
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, responseText){
//     if(error){
//         console.log("ERROR", error);
//     }
//     else{
//         console.log(responseText);
//     }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/101', data, function(error, responseText){
//     if(error){
//         console.log("ERROR", error);
//     }
//     else{
//         console.log(responseText);
//     }
// });


http.delete('https://jsonplaceholder.typicode.com/posts/101', function(error, responseText){
    if(error){
        console.log("ERROR", error);
    }
    else{
        console.log(responseText);
    }
});