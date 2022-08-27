import React, { useEffect } from 'react';
import Main from './components/Main/Main';
import { useAppDispatch, useAppSelector,  } from './hooks/redux';
import { setUsers,  } from './store/actions/UsersActionCreator';
import { check  } from './store/actions/UserActionCreator';
import { Routes, Route} from 'react-router-dom'
import UserPage from './components/Users/UserPage/UserPage';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Pages/Login/Login'
import Register from './components/Pages/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Pages/Profile/Profile';

const App = () => {
  const dispatch: any = useAppDispatch();
  const {isAuth} = useAppSelector(state => state.user)
  useEffect(()=>{
    dispatch(setUsers(1))  //adding users to the state
    dispatch(check())  //token verification
  }, [])
  return (
    <div>
      {isAuth == true ? (<>
          <NavBar />
          <Routes>
            <Route path='*' element={<NotFound text="Page not found"/>}/>
            <Route path="/" element={<Main/>} />
            <Route path="/user/:id*" element={<UserPage />} />
            <Route path="/profile*" element={<Profile />} />
          </Routes>
          </>) : 
          <Routes>
            <Route path='*' element={<NotFound text="Page not found"/>}/>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes> 
      }
    </div>
  );
}

export default App;
