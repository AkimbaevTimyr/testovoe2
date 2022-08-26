import { createSlice } from "@reduxjs/toolkit";
import { UsersStoreType } from "../../types/users";
import { setUsers } from "../actions/UsersActionCreator";


const initialState: UsersStoreType = {
    users: [],
}

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: {
        [setUsers.fulfilled.type]: (state, action) =>{
            state.users = action.payload
        },
    }
})

export default usersSlice.reducer;