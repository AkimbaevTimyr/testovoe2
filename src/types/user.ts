export interface UserStoreType {
    users: UserType[];
    error: string;
    userProfile: UserProfileType;
    isAuth: boolean;
}

export type UserType =  {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export type LoginType = {
    email: string;
    password: string;
}

export type UserProfileType = {
    email: string;
    password: string;
    token: string;
}