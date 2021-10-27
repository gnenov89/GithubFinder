class GitHub {
    constructor(){
        this.client_id = '4372a65255ff0378f6a6';
        this.client_secret = '6b7b431b8883cfa71cf0c093743145caec39fb1c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser (user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

         

        const profile = await profileResponse.json();
        
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}
