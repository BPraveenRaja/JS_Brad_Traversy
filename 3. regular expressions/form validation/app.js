document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipCode').addEventListener('blur', validatezipCode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){
    let name = document.getElementById('name');

    let re = /^[a-zA-Z]{2,10}$/;

    console.log(re.test(name.value));
    if (!re.test(name.value)){
        name.classList.add('is-invalid');
    }
    else {
        name.classList.remove('is-invalid');
    }
}

function validatezipCode(){
    let zipCode = document.getElementById('zipCode');

    let re = /^[0-9]{5}(-[0-9]{4})?$/;

    if (!re.test(zipCode.value)){
        zipCode.classList.add('is-invalid');
    }
    else {
        zipCode.classList.remove('is-invalid');
    }
}

function validateEmail(){
    let email = document.getElementById('email');

    let re = /^([a-zA-Z0-9_\.\-])+@([a-zA-Z0-9_\.\-])+\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)){
        email.classList.add('is-invalid');
    }
    else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone(){
    let phone = document.getElementById('phone');

    let re = /^\(?\d{3})?[\. \-]?\d{3}[\. \-]?\d{4}$/;

    if (!re.test(phone.value)){
        phone.classList.add('is-invalid');
    }
    else {
        phone.classList.remove('is-invalid');
    }
}