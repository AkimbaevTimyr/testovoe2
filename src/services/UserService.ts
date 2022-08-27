import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { getUsersByIdType } from '../types/users';



export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in' }),
    endpoints: (builder) =>({
        //enndpoint to get a user profile
        getUsersById: builder.query<getUsersByIdType, {}>({
            query: (id: number) => `/api/users/${id}`
        }),
    }),
      
})

export const {useGetUsersByIdQuery} = userApi;

