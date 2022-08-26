import { UserProfileType } from "../../types/user"

export function setUser (name: string,userProfile: UserProfileType | string){
    localStorage.setItem(`${name}`, JSON.stringify(userProfile))
    return ''
}