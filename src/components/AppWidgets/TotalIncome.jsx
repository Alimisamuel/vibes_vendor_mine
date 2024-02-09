import { Box, Typography } from '@mui/material'
import React from 'react';
import Card from '../common/Card';
import moneyIcon from '../../assets/icons/moneys.svg'

const TotalIncome = () => {
  return (
   <>
<Card height="117px">
  <Box sx={{display:'flex', alignItems:'center', columnGap:2}}>

<img src={moneyIcon}/>
<Typography variant='subtitle2'>Total Income</Typography>
  </Box>
  <Typography variant='h3' sx={{mt:2.5}}>0</Typography>
</Card>
   </>
  )
}

export default TotalIncome