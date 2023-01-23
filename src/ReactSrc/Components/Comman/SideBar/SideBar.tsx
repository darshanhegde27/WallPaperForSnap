import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import Drawer from '@mui/material/Drawer';
type Props = {
  navItems:string[],
  container:HTMLElement|(() => Element),
  mobileOpen:boolean,
  handleDrawerToggle:any,
  drawerWidth:number
}

 const SideBar = (props: Props) => {
  return (
    <div> 
          <Drawer
          container={props.container}
          variant="temporary"
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
          }}
        >
        <Box onClick={props.handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            MUI
          </Typography>
          <Divider />
          <List>
            {props.navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        </Drawer>
      </div>
  )
}
export default SideBar;