const storage = new Storage();
const weather = new Weather(storage.getLocationData().city, storage.getLocationData().state);
const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
    .then(results => {
        console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err));
}

document.getElementById('w-change-btn').addEventListener('click', changeLocation);

function changeLocation(){
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);
    storage.setLocationData(city, state);
    
    getWeather();

    $('#locModal').modal('hide');

}