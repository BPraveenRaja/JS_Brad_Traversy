class Weather {
    constructor(city, state){
        this.apiKey = '99dfe35fcb7de1ee';
        this.city = city;
        this.state = state;
    }

    async getWeather(){
        const string = await this.city + this.state;
        return {string};
        const response = await fetch(`https://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
        const responseData = await response.json();
        return responseData.current_observation;
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}