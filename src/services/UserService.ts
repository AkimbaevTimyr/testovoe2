import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { UserType } from '../types/user';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in' }),
    endpoints: (builder) =>({
        getUsersById: builder.query<any, any>({
            query: (id: number) => `/api/users/${id}`
        }),
    }),
      
})

export const {useGetUsersByIdQuery} = userApi;

