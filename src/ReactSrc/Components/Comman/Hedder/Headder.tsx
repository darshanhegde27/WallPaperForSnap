import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Category,name } from '../../Constant';
import SideBar from '../SideBar/SideBar';



const drawerWidth =200;


export default function Hedder() {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

 

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx=
            {
              { mr: 2, display: { sm: 'none' } }
            }
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={
              { flexGrow: 1, display: { xs: 'none', sm: 'block' } 
            }}
          >
           {name}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {Category.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
     <SideBar
       container={document.body}
       mobileOpen={mobileOpen}
       handleDrawerToggle={handleDrawerToggle}
       drawerWidth={drawerWidth}
       navItems={Category}
     ></SideBar>
    </Box>
  );
}