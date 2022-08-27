import { createAsyncThunk } from "@reduxjs/toolkit";
import {  ObjType,  } from "../../types/user";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from 'firebase/auth';
import { authentication } from "../../firebase-config";
import { getUser } from "../../hooks/getUser/getUser";
import { setUser } from "../../hooks/setUserToLocalStorage/setUser";

// Adding a user profile to the state
export const setUserProfile = createAsyncThunk(
    "user/setUserProfile",
    async(_, thunkAPI) =>{
        try{    
            const {token, email} = JSON.parse(localStorage.getItem('user') || '{}')
            return {email, token}
        }catch(e){

        }
    }
)

// Checking the existence of the token in the local storage
export const check = createAsyncThunk(
    "user/check",
    async(_, thunkAPI) =>{
        try{
            const {token} = getUser('user') // Retrieving a user token from the repository
           if(token){
            return true
           }else{
            return false
           }
        }catch(e){
            console.log(e)
        }
    }
)
// authorization function
export const login = createAsyncThunk(
    "user/login",
    async(obj: ObjType, thunkAPI) =>{
        const {user, navigate} = obj;
        try{
            signInWithEmailAndPassword(authentication, user.email, user.password)
            .then((userCredential: any) => {
                const {user} = userCredential;
                setUser('user', {email: user.email, token: user.accessToken})  //Adding a user to the local storage
                thunkAPI.dispatch(check())  // Checking the existence of the token in the local storage
                navigate('/')
            }).catch(() => alert("Не верный логин или пароль"))
        }catch(e){
            console.log(e)
        }
    }
)

//registration function
export const register = createAsyncThunk(
    "user/register",
    async(obj: ObjType, thunkAPI) =>{
        const {user, navigate} = obj;
        try{
            createUserWithEmailAndPassword(authentication, user.email, user.password)
            .then((userCredential) => {
                navigate('/')
            }).catch((error) => { alert('Invalid user')});
        }catch(e){
            console.log(e)
        }
    }
)

//exit profile function
export const exit = createAsyncThunk(
    "user/exit",
    async(navigate: any, thunkAPI) =>{
        try{
            setUser('user', '')
            thunkAPI.dispatch(check())
            navigate('/')
        }catch(e){
            console.log(e)
        }
    }
)