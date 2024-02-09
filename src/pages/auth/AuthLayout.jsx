import { Box } from '@mui/material'
import React from 'react';
import backgroundImage  from '../../assets/img/1.png'

import logo from '../../assets/logo/logo.svg'

const AuthLayout = ({children}) => {
  return (
<>
<Box sx={{height:'100vh', backgroundColor:'#000000', backgroundImage:`url('${backgroundImage}')`, backgroundSize:'cover', backgroundPosition:'center', display:'flex',}}>
<Box sx={{width:'70%', backgroundColor:'#000000b7', display:'grid', placeItems:'center' }}>
    <Box sx={{margin:'0 auto', width:'80%'}}>

{children}
    </Box>
</Box>
<Box sx={{width:'30%', display:'flex', justifyContent:'center' }}>
    <Box sx={{mt:12}}>

    <img src={logo}/>
    </Box>
</Box>
</Box>
</>
  )
}

export default AuthLayout