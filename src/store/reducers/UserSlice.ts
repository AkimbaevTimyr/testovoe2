import { createSlice } from "@reduxjs/toolkit";
import { UserStoreType } from "../../types/user";
import { login, setError, setUsers } from "../actions/UserActionCreator";


const initialState: UserStoreType = {
    users: [],
    error: '',
    userProfile: {email: "", password: "", token: ""},
    isAuth: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: {
        [setUsers.fulfilled.type]: (state, action) =>{
            state.users = action.payload
        },
        [setError.fulfilled.type]: (state, action) =>{
            state.error = action.payload;
        },
        [login.fulfilled.type]: (state, action) =>{
            console.log(action.payload)
            state.userProfile = action.payload
        }
    }
})



export default userSlice.reducer;