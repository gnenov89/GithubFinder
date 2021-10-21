//Init gihub 
const github = new GitHub;
// Search input 
const searchUser = document.getElementById('searchUser');

// Seach input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== '') {
        github.getUser(userText)
         .then(data => {
         console.log(data);
    })
    }
});