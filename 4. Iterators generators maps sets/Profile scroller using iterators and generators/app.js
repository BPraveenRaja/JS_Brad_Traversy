const data = [
    {
        name: "Praveena",
        age: 25,
        gender: "female",
        lookingfor: "male",
        location: "Miami FL",
        image: "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
        name: "Praveen",
        age: 26,
        gender: "male",
        lookingfor: "female",
        location: "Boston MA",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name: "Raji",
        age: 24,
        gender: "female",
        lookingfor: "male",
        location: "Chicago IL",
        image: "https://randomuser.me/api/portraits/women/74.jpg"
    }
]

const profile = profilesIterator(data);
function profilesIterator(profiles){
    let index = 0;
    return {
        next: function(){
            return index < profiles.length ? 
            {value: profiles[index++], done: false}:
            {done: true}
    }
}
}
nextProfile();
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){
    const currentProfile = profile.next().value;

    if(currentProfile != undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <li class="list-group">
            <ul class="list-group-item">${currentProfile.name}</ul>
            <ul class="list-group-item">${currentProfile.age}</ul>
            <ul class="list-group-item">${currentProfile.gender}</ul>
            <ul class="list-group-item">${currentProfile.lookingfor}</ul>
            <ul class="list-group-item">${currentProfile.location}</ul>
        </li>
        `;
        document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}">
        `;
    }
    else{
        window.location.reload();
    }
}