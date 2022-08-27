import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from "tss-react/mui";

//component styling
const useStyles = makeStyles()(() => ({
    link: {
      textDecoration: "none",
      color: "white"
    }
}));

const NavBar: FC = () => {
  const {classes} = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar sx={{ alignItems: 'center', display: 'flex'  }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },  }}
        >
        <Link to="/" className={classes.link}>
          App
          </Link>
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{display: { xs: 'none', sm: 'block' },cursor: "pointer" }}
        >
        <Link to="/profile" className={classes.link}>
          Profile
        </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar