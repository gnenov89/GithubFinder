//Init gihub 
const github = new GitHub;

// Init UI
const ui = new UI;
// Search input 
const searchUser = document.getElementById('searchUser');

// Seach input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== '') {
        github.getUser(userText)
         .then(data => {
           if(data.profile.message === 'Not found') {
               //Show alert
           } else {
               // Show profile
               ui.showProfile(data.profile);
           }
    })
    } else {
        //Clear profile

    }
});