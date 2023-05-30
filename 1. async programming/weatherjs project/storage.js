class Storage{
    constructor(){
        this.city;
        this.state;
        this.defaultCity = 'Boston';
        this.defaultState = 'MA';
    }

    getLocationData(){
        let city = localStorage.getItem('city');
        let state = localStorage.getItem('state');
        if(city === null){
            this.city = this.defaultCity;
        }
        else{
            this.city = city;
        }

        if(state === null){
            this.state = this.defaultState;
        }
        else{
            this.state = state;
        }

        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(city, state){
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }
}