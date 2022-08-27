import React, { FC, useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, FormControl } from '@mui/material/'
import { makeStyles } from "tss-react/mui";
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks/redux';
import { login, } from '../../../store/actions/UserActionCreator'

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

const Login: FC = () => {
    const dispatch: any = useAppDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()
    const { classes } = useStyles()
    //authorization happens when you click
    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(login({ user: { email, password }, navigate }))
    }
    return (
        <Paper elevation={10} className={classes.paper} >
            <form onSubmit={handleClick}>
                <Grid className={classes.grid}>
                    <Avatar className={classes.avatar}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField onChange={e => setEmail(e.target.value)} className={classes.userNameField} label='Email' placeholder='Enter Email' variant="outlined" fullWidth required />
                <TextField onChange={e => setPassword(e.target.value)} label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required />
                <Button type='submit' color='primary' variant="contained" className={classes.btn} fullWidth>Sign in</Button>
                <Typography > Do you have an account ?
                    <Link to="/register" >
                        Sign Up
                    </Link>
                </Typography>
            </form>
        </Paper>
    )
}

export default Login


