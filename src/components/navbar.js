import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" >The Shopping Store</Typography>&emsp;
        <Typography variant="p" component="div" >Home</Typography>&emsp;
        <Typography sx={{ flexGrow: 1 }} variant="p" component="div" >All Products</Typography>
          <Button  color="inherit">
           <ShoppingCartIcon />
          </Button>
          <Button color="inherit"><AccountCircleIcon /></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
