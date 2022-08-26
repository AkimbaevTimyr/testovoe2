import { createSlice } from "@reduxjs/toolkit";
import { UserStoreInterface  } from "../../types/user";
import { check, setUserProfile,  } from "../actions/UserActionCreator";


const initialState: UserStoreInterface  = {
    userProfile: {email: "",  token: ""},
    isAuth: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: {
        [setUserProfile.fulfilled.type]: (state, action) =>{
            state.userProfile = action.payload
        },
        [check.fulfilled.type] : (state, action) =>{
            state.isAuth = action.payload
        }
    }
})



export default userSlice.reducer;