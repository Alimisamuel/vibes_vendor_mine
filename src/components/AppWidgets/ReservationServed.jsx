import React from 'react';
import Card from '../common/Card';
import { Box, Typography } from '@mui/material';
import reservedIcon from '../../assets/icons/reserved.svg'

const ReservationServed = () => {
  return (
    <>
    <Card height="117px">
  <Box sx={{display:'flex', alignItems:'center', columnGap:2}}>

<img src={reservedIcon}/>
<Typography variant='subtitle2' sx={{}}>Reservations Served</Typography>
  </Box>
  <Typography variant='h3' sx={{mt:2.5}}>0</Typography>
</Card>
    </>
  )
}

export default ReservationServed