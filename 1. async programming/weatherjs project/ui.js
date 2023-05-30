class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.feels = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');

    }

    paint(weather){
        this.location.textContent = weather.string;//weather.display_location.full;
        this.description.textContent = `Partly cloudy`;//weather.weather;
        this.string.textContent = `43.7 F (6.5C)`;//weather.temperature_string;
        this.icon.setAttribute('src', `weather.icon_url`);
        this.humidity.textContent = `Relative Humidity: 40%`;//`Relative Humidity: ${weather.relative_humidity}`;
        this.dewpoint.textContent = `DewPoint: 21F(-6C)`;//`DewPoint: ${weather.dewpoint_string}`;
        this.feels.textContent = `Feels like 36F(2 C)`;//`Feels Like: ${weather.feelslike_string}`;
        this.wind.textContent = `Wind: storms wind is coming`;//`Wind: ${weather.wind_string}`;
    }
}