import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AppBar, Grid } from '@mui/material';
import { Home, PhotoAlbumOutlined, Search, Settings } from '@mui/icons-material';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={8} sx={{ alighnItmes: 'center' }}>
    
      <AppBar sx={{
        top: 'auto', bottom: 5,borderRadius:30,
        backgroundImage: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)'
      }}>
        <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" >

          <Tab icon={<Home />} aria-label="Home"  sx={{width:'40%'}}/>
          <Tab icon={<Search />} aria-label="Search" sx={{width:'40%'}} />
          <Tab icon={<Settings />} aria-label="Settings" sx={{width:'40%'}}/>
          <Tab icon={<PhotoAlbumOutlined />} aria-label="About us" sx={{width:'40%'}} />
        </Tabs>
      </AppBar>
      
    </Grid>
  );
}