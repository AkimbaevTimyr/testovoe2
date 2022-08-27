import { getUser } from '../../hooks/getUser/getUser'
import { Typography, Paper, Button, Container } from '@mui/material';
import { makeStyles } from "tss-react/mui";
import { useAppDispatch } from '../../hooks/redux';
import { exit,  } from '../../store/actions/UserActionCreator';
import { useNavigate } from 'react-router-dom'

//component styling
const useStyles = makeStyles()(() => ({
    container: {
        marginTop: 20,
        width: 300,
        marginLeft: 800,
        overflowX: "hidden",
        overflowWrap: "break-word",
        wordWrap: "break-word",
    },
    info: {
        display: "block",
        margin: "0 auto",
        marginTop: 30,
    },
    typography: {
        maxWidth: 200,
        fontSize: 11,
    }
}));

const Profile = () => {
    const navigate = useNavigate();
    const { email, token } = getUser('user')  //getting user data from local storage
    const { classes } = useStyles();
    const dispatch: any = useAppDispatch()
    // Click to exit the profile
    const handleClick = () => {
        dispatch(exit(navigate))
    }
    return (
        <Paper elevation={3} className={classes.container}>
            <Container className={classes.info}>
                <Typography gutterBottom variant="h5" component="div">
                    email - {email}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    token -
                </Typography>
                <Typography className={classes.typography} gutterBottom variant="h6" component="div">
                    {token}
                </Typography>
            </Container>
            <Button onClick={handleClick} variant="outlined">Выйти</Button>
        </Paper>

    )
}

export default Profile