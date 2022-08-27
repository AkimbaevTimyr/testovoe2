//custom hook to get the user from the local storage
export function getUser(name: string){
    const {token, email} = JSON.parse(localStorage.getItem(`${name}`) || '{}')
    return {
        token,
        email
    }
}

