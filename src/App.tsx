import React, { useEffect } from 'react';
import Main from './components/Main/Main';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setUsers } from './store/actions/UserActionCreator';
import { Routes, Route} from 'react-router-dom'
import UserPage from './components/Users/UserPage';
import { AppDispatch } from './store/store';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login'
import Register from './components/Register/Register';

const App = () => {
  const dispatch: any = useAppDispatch();
  useEffect(()=>{
    dispatch(setUsers(1))
  }, [])
  const {error, isAuth} = useAppSelector(state => state.users)
  console.log(error, isAuth)
  return (
    <div>
      <NavBar />
      <Routes>
          <Route path="" element={<Main/>} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/register/" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
