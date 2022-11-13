import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TopBar from '../components/TopBar';
import { Alert, Box, Button, Grid, IconButton, Input } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styleAlert = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
};

function createData(name, expiracion, cantidad) {
  return { name, expiracion, cantidad };
}

const rows = [
  createData('Product 1', "Caduco", 5),
  createData('Product 2', "Caduco", 4),
  createData('Product 3', "2 dias", 20),
  createData('Product 4', "3 dias", 15),
  createData('Product 5', "5 dias", 12),
];

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#bf7245",
      contrastText: "#fff",
    }, 
    secondary: {
      main:"#f2b279", 
      contrastText: "#fff",}, 
    light: {
      main:"#f2cc85", 
      contrastText: "#fff",}, 
    dark: {
      main:"#592816", 
      contrastText: "#fff",}, 
    inherit: {
      main:"#fff",
      contrastText: "#fff",},
  },
});

export default function Inventory() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openAlert, setOpenAlert] = React.useState(false);
  const handleOpenAlert = () => {
    setOpenAlert(true),
    setOpen(false)
  };
  const handleCloseAlert = () => setOpenAlert(false);

  const [openError, setOpenError] = React.useState(false);
  const handleOpenError = () => {
    setOpenError(true),
    setOpen(false)
  };
  const handleCloseError = () => setOpenError(false);

  

  return (
      <ThemeProvider theme={mainTheme}>
      <TopBar></TopBar>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Nombre</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="right">Expiracion</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="right">Cantidad</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="center">Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.expiracion}</TableCell>
              <TableCell align="right">{row.cantidad}</TableCell>

              <TableCell align="center">
              <Grid  sm spacing={0}>
                <Grid item xs={4} sx={{mb: 1}}>
                  <Button variant="contained" onClick={handleOpen}><AddCircleOutlineIcon/></Button>
                </Grid>
                <Grid item xs={4}>
                  <Button color='secondary' variant="contained" onClick={handleOpen}><RemoveCircleOutlineIcon/></Button>
                </Grid>
              </Grid>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* Modal */}
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rellenar Stock
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ingrese la cantidad:
          </Typography>
          <Input></Input>
          <br /><br />

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Button onClick={handleOpenAlert} color="primary" variant="contained">Aceptar</Button>
            </Grid>

            <Grid item xs={4}>
              <Button onClick={handleOpenError} color='secondary' variant="contained">Cancelar</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

{/* Alert Success */}
      <Modal
    open={openAlert}
    onClose={handleCloseAlert}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box sx={styleAlert} container>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="dark"
              size="small"
              onClick={handleCloseAlert}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ bgcolor: '#28B463', fontWeight: 'bold', color:"white" }}
        >
          Operacion realizada con éxito!! :)
        </Alert>
        </Box>
      </Modal>

{/* Alert Error */}
      <Modal
    open={openError}
    onClose={handleCloseError}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box sx={styleAlert} container>
        <Alert severity="error"
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={handleCloseError}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ bgcolor: '#E74C3C', fontWeight: 'bold', color:"white" }}
        >
          Operacion fallida :(
        </Alert>
        </Box>
      </Modal>

      

</ThemeProvider>
  );
}