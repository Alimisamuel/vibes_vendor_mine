import React from "react";
import AuthLayout from "./AuthLayout";
import { Box, Typography, Button } from "@mui/material";

const Signup = () => {
  return (
    <>
      <AuthLayout>
        <Box sx={{ width: "70%" }}>
          <Typography variant="h2">Hello Rosenthal,</Typography>
          <Typography variant="body1" sx={{ lineHeight: "19px", mt: 3 }}>
            Welcome to VibezsUp.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: "19px", mt: 1 }}>
            A profile has been created for your establishment -
            <span style={{ color: "#F489FD" }}> Velvett Resto Lounge</span>
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: "19px", mt: 1 }}>
          Kindly setup a six digits Password to secure your profile and complete setup
          </Typography>
          <Box sx={{mt:4}}>
            <Button variant='contained' sx={{height:'63px', width:'300px', borderRadius:'10px'}}> Complete Setup </Button>
        </Box>

          <Box sx={{mt:10}}>
          <Typography variant="body1" sx={{ lineHeight: "19px", mt: 1 }}>
          By completing this setup, you agree to VibezsUp 
            <span style={{ color: "#F489FD", textDecoration:'underline' }}> Terms and Conditions</span>
          </Typography>
            
          </Box>
        </Box>
      </AuthLayout>
    </>
  );
};

export default Signup;
