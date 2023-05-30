let output = ``;
document.querySelector('.get-jokes').addEventListener('click', function(e){
    console.log('here');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);
    console.log('here');
    console.log(xhr.readyState);
    xhr.onload = function(){
        console.log(xhr.readyState);
        console.log('status', this.status);
        if(this.status === 200){
            console.log('here');
            const output1 = JSON.parse(this.responseText);
            console.log(output);
            output += `<li>${output1.value}</li>`
            document.querySelector('.jokes').innerHTML = output;
        }
        else{
            output += `<li>Something went wrong</li>`
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
});