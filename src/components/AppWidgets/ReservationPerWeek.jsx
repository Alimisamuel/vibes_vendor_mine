import React from 'react'
import Card from '../common/Card'
import { Box, Typography } from '@mui/material';
import Charts from '../Charts/Charts'

const ReservationPerWeek = () => {
  return (
   <>
   <Card height="260px">
    <Box>

<Typography variant='h6'>Reservations Per Week</Typography>
    </Box>
    <Box>
        <Charts color="#75007E"/>
    </Box>
   </Card>
   </>
  )
}

export default ReservationPerWeek