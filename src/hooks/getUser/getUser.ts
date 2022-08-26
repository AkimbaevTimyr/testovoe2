export function getUser(name: string){
    const {token, email} = JSON.parse(localStorage.getItem(`${name}`) || '{}')
    return {
        token,
        email
    }
}

