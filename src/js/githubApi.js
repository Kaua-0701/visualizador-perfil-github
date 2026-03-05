 const baseURL = 'https://api.github.com';

export async function fetchGithubUser(userName) {   
    const response = await fetch(`${baseURL}/users/${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado.');
    }

    return await response.json();
}


export async function fetchGithubUsersRepos(userName) {
    const response = await fetch(`${baseURL}/users/${userName}/repos?per_page=10&sort=created`);
    if (!response.ok) {
        throw new Error('Repositório não encontrado.');
    }

    return await response.json();
}