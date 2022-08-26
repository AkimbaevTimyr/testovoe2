import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const setUsers = createAsyncThunk(
    "users/setUsers",
    async(page: number, thunkAPI) =>{
        try{
            const {data} = await axios.get<any, any>(`https://reqres.in/api/users?page=${page}`)
            return data.data
        }catch(e){
            console.log(e)
        }
    }
)