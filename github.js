class GitHub {
    constructor(){
        this.client_id = '4372a65255ff0378f6a6';
        this.client_secret = '6b7b431b8883cfa71cf0c093743145caec39fb1c'
    }

    async getUser (user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=
        ${this.client_secret}`);
      
        const profile = await profileResponse.json();
        // repos 'https://api.github.com/users/gnenov89/repos'
        return {
            profile
        }
    }
}
