import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import logo from '../assets/logo.jpg'

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }} className="container" >
      <AppBar position="static" color='dark'>
        <Toolbar>
        <Avatar sx={{mx: 2}} alt="Don Galleto" src={logo} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Don Galleto
          </Typography>
          <Button color="inherit" href='/'>Galletas</Button>
          <Button color="inherit" href='/inventario'>Inventario</Button>
          <Button color="inherit" href=''>Comprar</Button>
          <Button color="inherit" href=''>Vender</Button>
          <Button color="inherit" href=''>Compras</Button>
          <Button color="inherit" href=''>Ventas</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}