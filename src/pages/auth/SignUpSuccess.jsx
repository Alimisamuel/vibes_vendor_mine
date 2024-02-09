import React from 'react';
import backgroundImage  from '../../assets/img/1.png';
import logo from '../../assets/logo/logo.svg';
import { Box, Button, Typography } from '@mui/material';
import imgsvg from '../../assets/icons/signup.svg';

const SignUpSuccess = () => {
  return (
  <>
  <Box sx={{height:'100vh', backgroundColor:'#000000', backgroundImage:`url('${backgroundImage}')`, backgroundSize:'cover', backgroundPosition:'center', display:'flex',}}>
<Box sx={{height:'100vh', width:'70%', margin:'0 auto', bgcolor:'#000000b7', display:'grid', placeItems:'center'}}>
<Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <Box>

<img src={imgsvg}/>
    </Box>

<Typography variant='h2' sx={{mt:4}}>Setup Complete</Typography>
<Typography variant='body1' sx={{mt:2, textAlign:'center'}}>You can now start accepting reservations from VibezsUp users at<br/> your fine establishment.</Typography>

<Box sx={{mt:5}}>
    <Button variant='contained' sx={{height:'63px', width:'300px', borderRadius:'10px'}}>Continue to Dashboard</Button>
</Box>
<Box sx={{mt:5}}>
    <img src={logo}/>
</Box>
</Box>
</Box>
  </Box>
  </>
  )
}

export default SignUpSuccess