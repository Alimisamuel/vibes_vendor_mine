import React from 'react'
import Header from '../../Layouts/Header'
import { Box, Grid } from '@mui/material';
import AllReservations from '../../components/Reservation/AllReservations'

const Reservations = () => {
  return (
  <>
  <Header title="Reservations" caption="Review and manage your upcoming reservations "/>
  <Box sx={{ mt:17}}>
    <Grid container >
        <Grid item md={6}></Grid>
        <Grid item md={6}>
            <AllReservations/>
        </Grid>
    </Grid>
  </Box>
  </>
  )
}

export default Reservations