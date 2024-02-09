import { TextField } from '@mui/material'
import React from 'react'

const CustomInput = ({...props}) => {
  return (
<>
<TextField
{...props}

  InputProps={{
    style: {
      border:props.error ? "1px solid #EA8072" : "1px solid #fff",
      borderRadius: "12px",
      color: "#fff",
      fontFamily: "outfit",
    //   background: "rgba(0, 14, 6, 0.50)",
    },
}}
/>
</>
  )
}

export default CustomInput