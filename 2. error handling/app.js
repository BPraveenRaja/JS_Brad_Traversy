const user = {email:'joe@gmail.com'}
try{
    // Produce a Reference error
    // my();

    //Produce a type error
    //null.myfunc();

    //produce a URI error;
    // decodeURIComponent('%');s

    //will produce a syntax error
    // eval('Hello world'); => it should be eval('"HelloWorld"')
    if(!user.name){
        throw SyntaxError('No new name');
    }
}
catch(e) {
    console.log(e);
    console.log(e.name);
    console.log(e.message);
    console.log(e instanceof SyntaxError);
}
finally{
    console.log("it comes here whatever happens");
}

// output:
// SyntaxError: No new name
//     <anonymous> http://127.0.0.1:5500/app.js:5
// app.js:9:13
// SyntaxError app.js:10:13
// No new name app.js:11:13
// true
// it comes here whatever happens