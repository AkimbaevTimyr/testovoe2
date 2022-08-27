import { UserProfileType } from "../../types/user"

//custom hook to add a user to the local storage
export function setUser (name: string,userProfile: UserProfileType | string){
    localStorage.setItem(`${name}`, JSON.stringify(userProfile))
    return ''
}