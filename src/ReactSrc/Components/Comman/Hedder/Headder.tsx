
import { Home } from '@mui/icons-material';
import { AppBar, Grid } from '@mui/material';
import React from 'react'
import { name } from '../../Constant'
import Item from '../Item/item';


export default function Headder() {
  return (
    <React.Fragment>
      <Grid item xs={12} >
        <Item sx={{position:'static'}}> 
        
          {name}
         
        </Item>
         
      </Grid>

    </React.Fragment>
  );
}
