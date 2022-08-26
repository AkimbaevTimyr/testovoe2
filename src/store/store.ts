import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import { userApi } from "../services/UserService";
import usersReducer from "./reducers/UsersSlice";
import userReducer from './reducers/UserSlice'

export const rootReducer = combineReducers<any>({
    users: usersReducer,
    user:  userReducer,
    [userApi.reducerPath]: userApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware: any) =>  getDefaultMiddleware({
            thunk: {
              extraArgument: userApi,
            },
            serializableCheck: false,
          }),
})}





export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>; 
export type AppDispatch = AppStore['dispatch']