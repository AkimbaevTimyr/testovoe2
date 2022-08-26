export interface UserStoreInterface {
    userProfile: UserProfileType;
    isAuth: boolean;
}

export type LoginType = {
    email: string;
    password: string;
}

export interface UserProfileInterface{
    email: string;
    token: string;
}

export type UserProfileType  = {
    email: string;
    token: string;
}

export type ObjType = {
    user: LoginType;
    navigate : any;
}