function easyHTTP(){
    this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback){
    console.log('here')
    this.http.open('GET', url, true);

    let self = this;

    this.http.onload = function(){
        console.log("STATUS", this.status);
        // console.log("STATUS_USING_self", self.http.status);
        if(self.http.status === 200){
            return callback(null, self.http.responseText);
        } else{
            return callback(this.status, self.http.responseText)
        }
        // if(this.status === 200){
        //     console.log(this.responseText); // it also works
        // }
    }
    this.http.send();
}

easyHTTP.prototype.post = function(url, data, callback){
    console.log('here')
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');
    let self = this;

    this.http.onload = function(){
        console.log("STATUS", this.status);
        // console.log("STATUS_USING_self", self.http.status);
        if(self.http.status === 201){
            return callback(null, self.http.responseText);
        } else{
            return callback(this.status, self.http.responseText)
        }
        // if(this.status === 200){
        //     console.log(this.responseText); // it also works
        // }
    }
    this.http.send(JSON.stringify(data));
}


easyHTTP.prototype.put = function(url, data, callback){
    console.log('here')
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');
    let self = this;

    this.http.onload = function(){
        console.log("STATUS", this.status);
        // console.log("STATUS_USING_self", self.http.status);
        if(self.http.status === 201){
            return callback(null, self.http.responseText);
        } else{
            return callback(this.status, self.http.responseText)
        }
        // if(this.status === 200){
        //     console.log(this.responseText); // it also works
        // }
    }
    this.http.send(JSON.stringify(data));
}


easyHTTP.prototype.delete = function(url, callback){
    console.log('here')
    this.http.open('DELETE', url, true);

    let self = this;

    this.http.onload = function(){
        console.log("STATUS", this.status);
        // console.log("STATUS_USING_self", self.http.status);
        if(self.http.status === 200){
            return callback(null, "SUCCESSFULLY deleted");
        } else{
            return callback(this.status, self.http.responseText)
        }
        // if(this.status === 200){
        //     console.log(this.responseText); // it also works
        // }
    }
    this.http.send();
}