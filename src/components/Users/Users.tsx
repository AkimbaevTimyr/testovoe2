import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import Container from '@mui/material/Container';
import { UserType } from '../../types/user';
import UsersItem from './UsersItem';
import { makeStyles } from "tss-react/mui";
import Paginationn from '../Pagination/Pagination';


const useStyles = makeStyles()(() => ({
    container: {
        display: "flex",
        marginTop: 20,
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    pagination: {
        display: "flex",
        justifyContent: "center",
        marginTop: 20
    }
}));

const  Users = () => {
    const {users} = useAppSelector(state => state.users)
    const {classes} = useStyles()
  return (
    <>
    <Container maxWidth="lg" className={classes.container}>
            {users.map((el: UserType) =>(
                <UsersItem key={el.id} id={el.id} avatar={el.avatar} first_name={el.first_name}/>
            ))}
    </Container>
    <Container className={classes.pagination}>
      <Paginationn />
    </Container>
    </>
  )
}

export default Users