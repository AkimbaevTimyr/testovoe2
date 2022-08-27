import React, {FC} from 'react'
import { useParams } from 'react-router-dom'
import { useGetUsersByIdQuery } from '../../../services/UserService'
import { Container, CardMedia,Typography } from '@mui/material/';
import { makeStyles } from "tss-react/mui";
import Loader from '../../Loader/Loader';
import NotFound from '../../NotFound/NotFound';

////component styling
const useStyles = makeStyles()(() => ({
    container: {
        display: "flex",
        marginTop: 20,
    },
    img: {
        width: 250,
        marginRight:100,
        borderRadius: 20
    },
    info: {
        display: "block",
        textAlign: "center",
        marginTop: 30
    }

}));

const UserPage: FC = () => {
    let { id } = useParams()
    const { data, isLoading, isError } = useGetUsersByIdQuery(Number(id))
    const { avatar = "", email = "", first_name = "", last_name = "" } = { ...data?.data }
    const { classes } = useStyles()
    return (
        <>
        {isLoading == true ? <Loader /> :<Container maxWidth="sm" className={classes.container}>
        {
            isError === true ? <NotFound text='User not found'/> : <><CardMedia
            component="img"
            className={classes.img}
            image={avatar}
            alt={first_name}
        />
        <div className={classes.info}>
            <Typography gutterBottom variant="h5" component="div">
                {`${first_name} ${last_name}`}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {email}
            </Typography>
        </div></>
        }
    </Container> }
    </>
    )
}

export default UserPage