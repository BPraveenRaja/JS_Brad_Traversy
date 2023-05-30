let posts = [
    {
        title: 1,
        content: "This is content"
    },
    {
        title: 2,
        content: "This is content2"
    },
    // {
    //     title: 3,
    //     content: "This is content3"
    // }
    
]

// function createPost(post, callback){
//     console.log(posts);
//     setTimeout(function(){
//         console.log(posts);
//         posts.push(post);
//         callback();
//     },2000);
// }

function createPost(post){
    console.log(posts);
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(posts);
            posts.push(post);
            let error = true;
            if(!error){
                resolve();
            } else{
                reject("Error something went wrong");
            }
        },2000);
    }
    );
    return promise;
}

function getPosts(){
    console.log(posts);
    let output = ``;
    setTimeout(() => {
        posts.forEach(element => {
            output += `<li>${element.title} and ${element.content}</li>`
        });
        document.body.innerHTML = output
    }, 1000);
}

createPost({title:3, content: "this is content3"}).then(getPosts).catch(function(err){
    console.log(err); //Error something went wrong
});

// getPosts();