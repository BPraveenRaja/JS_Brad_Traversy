class GitHub{
    constructor(){
        this.clientid= '95aced130b59b0eec7df';
        this.clientsecret = '6adefae95b5a7fbab97b80e9d06cf94b76742260';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user){
        const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientid}
        &client_secret=${this.clientsecret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&
        client_id=${this.clientid}&client_secret=${this.clientsecret}`);
        const profile = await response.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        };
    }
}