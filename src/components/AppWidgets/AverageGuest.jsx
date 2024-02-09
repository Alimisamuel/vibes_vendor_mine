import React from 'react'
import Card from '../common/Card'
import { Box, Typography } from '@mui/material';
import leaf1 from '../../assets/icons/leaf1.svg'
import leaf2 from '../../assets/icons/leaf2.svg'

const AverageGuest = () => {
  return (
<>
<Card height="117px">
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
<Box sx={{display:'flex', alignItems:'center', columnGap:1}}>
<img src={leaf1}/>
<Typography color="primary" variant='h3'>-</Typography>
<img src={leaf2}/>

</Box>
<Typography variant='subtitle2'sx={{mt:1}}>Average Guest Rating</Typography>
    </Box>
</Card>
</>
  )
}

export default AverageGuest