// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    // Display loading icon
    document.getElementById('loading').style.display = 'block';

    // display results
    document.getElementById('results').style.display = 'none';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate results
function calculateResults(){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) /100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(3);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        // Display loading icon
        document.getElementById('loading').style.display = 'none';

        // display results
        document.getElementById('results').style.display = 'block';
    } else {
        showError();
    }
    // e.preventDefault();
}


// Show Error
function showError(){
    // Display loading icon
    document.getElementById('loading').style.display = 'none';

    // display results
    document.getElementById('results').style.display = 'none';
    
    // create a div
    const errorDiv = document.createElement('div');

    // add class
    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode("Please enter valid numbers"));

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert.alert-danger').remove();
}