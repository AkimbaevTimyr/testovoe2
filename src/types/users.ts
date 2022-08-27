export interface UsersStoreType {
    users: UsersType[];
}

export type UsersType =  {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export type getUsersByIdType = {
    data: UsersType;
    support: {};
}