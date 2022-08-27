import React, {useState, FC} from 'react'
import { makeStyles } from "tss-react/mui";
import { Grid, Paper, Avatar, TextField, Button, Typography, } from '@mui/material/'
import {Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks/redux';
import { register } from '../../../store/actions/UserActionCreator';

//component styling
const useStyles = makeStyles()(() => ({
    paper: {
        padding: 20, width: 280, height: 350, margin: "20px auto"
    },
    grid: {
        textAlign: "center"
    },
    avatar: {
        backgroundColor: '#1bbd7e',
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    btn: {
        margin: '8px 0'
    },
    userNameField: {
        marginBottom: 10
    }
}));

const Register: FC = () => {
    const {classes} = useStyles()
    const dispatch: any = useAppDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()
    //registration happens when you click on
    const handleClick = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
       dispatch(register({user: {email, password}, navigate}))
    }
    return (
        <Paper elevation={10} className={classes.paper} >
            <form onSubmit={handleClick}>
            <Grid className={classes.grid}>
                <Avatar className={classes.avatar}></Avatar>
                <h2>Sign Up</h2>
            </Grid>
            <TextField onChange={e => setEmail(e.target.value)} className={classes.userNameField} label='Username' placeholder='Enter username' variant="outlined" fullWidth required />
            <TextField onChange={e => setPassword(e.target.value)} label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required />
            <Button  type='submit' color='primary' variant="contained" className={classes.btn} fullWidth>Sign Up</Button>
            <Typography > Do you have an account ?
                <Link to="/" >
                    Sign In
                </Link>
            </Typography>
            </form>
        </Paper>
    )
}

export default Register