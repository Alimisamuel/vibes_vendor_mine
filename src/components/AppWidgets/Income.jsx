import React from 'react'
import Card from '../common/Card'
import { Box, Typography } from '@mui/material';
import Charts from '../Charts/Charts'

const Income = () => {
  return (
   <>
   <Card height="260px">
    <Box>

<Typography variant='h6'>Income  Per Day - ‘000 NGN</Typography>
    </Box>
    <Box>
        <Charts color="#007E23"/>
    </Box>
   </Card>
   </>
  )
}

export default Income;