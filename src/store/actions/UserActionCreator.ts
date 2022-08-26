import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginType, UserType } from "../../types/user";
import axios from 'axios'
import { $host } from "../../http";
import {useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from "../../firebase-config";


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

export const setError = createAsyncThunk(
    "users/setError",
    async(error: string, thunkAPI) =>{
        try{
            return error
        }catch(e){
            console.log(e)
        }
    }
)

export const setIsAuth = createAsyncThunk(
    "users/setIsAuth",
    async(isAuth: boolean, thunkAPI) =>{
        try{
            return isAuth
        }catch(e){
            console.log(e)
        }
    }
)

type obj = {
    user: LoginType;
    navigate : any;
}
export const login = createAsyncThunk(
    "users/login",
    async(obj: obj, thunkAPI) =>{
        const {user, navigate} = obj;
        let userProfile = {}
        try{
            signInWithEmailAndPassword(authentication, user.email, user.password)
            .then((userCredential: any) => {
              const {user} = userCredential;
              navigate('/')
              userProfile = { email: user.email,
                    token: user.accessToken,
                    id: user.id}
            }).catch(() => alert("Не верный логин или пароль"))
            return userProfile
        }catch(e){
            console.log(e)
        }
    }
)

export const register = createAsyncThunk(
    "users/register",
    async(obj: obj, thunkAPI) =>{
        const {user, navigate} = obj;
        try{

        }catch(e){
            console.log(e)
        }
    }
)