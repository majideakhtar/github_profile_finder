class Github {
    constructor(){
        this.client_id = 'c2bb614312caf70cb4f2';
        this.client_secret = 'c2b550bab33db97d7f7d577da10561c3b96683b0';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();


        return {
            profile, repos
        }
    } 
}