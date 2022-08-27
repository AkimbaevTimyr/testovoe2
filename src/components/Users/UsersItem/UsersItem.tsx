import React, {FC} from 'react'
import {Card, CardContent,  CardMedia, Typography, CardActionArea }from '@mui/material/';
import { makeStyles } from "tss-react/mui";
import {Link} from 'react-router-dom'

interface UsersItemProps {
    id: number;
    avatar: string;
    first_name: string;
}
//component styling
const useStyles = makeStyles()(()=> ({
    card: {
        display: "flex"
    },
    img: {
        maxWidht: 142,
        maxHeight: 140
    }
}))

const UsersItem: FC<UsersItemProps> = ({id,avatar, first_name}) => {   
    const {classes} = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
            <Link to={`/user/${id}`}>
                <CardMedia
                component="img"
                className={classes.img}
                image={avatar}
                alt={first_name}
                />
            </Link>

            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {first_name}
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default UsersItem