document.getElementById('getDataBtn').addEventListener('click', function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);


    // console.log('READYSTATE', xhr.readyState); // 1
    xhr.onprogress = function() {
        // You can add a spinner here.
        console.log('READYSTATE', xhr.readyState); // READYSTATE 3
    }
    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState); // READYSTATE 4
        if(this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

//     xhr.onreadystatechange = function(){
//         console.log('READYSTATE', xhr.readyState);
// //         READYSTATE 1 app.js:7:13
// // READYSTATE 2 app.js:15:17
// // READYSTATE 3 app.js:15:17
// // READYSTATE 4
//         if(this.status === 200 && this.readyState === 4){
//             console.log(this.responseText);
//         }
//     }
    xhr.onerror = function(){
        console.log('Request error...');
    }
    xhr.send();
})

// ready state values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished response is ready