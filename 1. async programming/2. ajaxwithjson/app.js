document.getElementById('getDataBtn1').addEventListener('click', loadCustomer);
document.getElementById('getDataBtn2').addEventListener('click', loadCustomers);


function loadCustomers(){
    const xml = new XMLHttpRequest();

    xml.open('GET', 'customers.json', true);

    xml.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach(function(customer){
                output += `
                <ul>
                <li>${customer.id}</li>
                <li>${customer.name}</li>
                <li>${customer.phone}</li>
                </ul>
                `
            });


            document.getElementById('customers').innerHTML = output;
        }
    }
    xml.send();
}

function loadCustomer(){
    const xml = new XMLHttpRequest();

    xml.open('GET', 'customer.json', true);

    xml.onload = function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>
            <li>${customer.id}</li>
            <li>${customer.name}</li>
            <li>${customer.phone}</li>
            </ul>
            `
            document.getElementById('customer').innerHTML = output;
        }
    }
    xml.send();
}