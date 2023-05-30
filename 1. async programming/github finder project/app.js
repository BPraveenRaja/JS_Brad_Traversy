const github = new GitHub;
const ui = new UI;
document.getElementById('searchUser').addEventListener('keyup', getUser);

function getUser(e){
    const usertext = e.target.value;

    if(usertext != ""){
        github.getUser(usertext)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // alert("Hey not found");
                ui.alertMessage('The user is not found', 'alert alert-danger');
            } else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
    })
    }
    ui.clearProfile();
}