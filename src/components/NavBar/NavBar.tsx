import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import {Link} from 'react-router-dom'


const NavBar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar sx={{ alignItems: 'center', display: 'flex'  }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textDecoration: "none" }}
        >
        <Link to="/">
          App
          </Link>
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{display: { xs: 'none', sm: 'block' },cursor: "pointer" }}
        >
        <Link to="/profile">
          Profile
        </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar