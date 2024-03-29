import React, { useState } from "react";
import backgroundImage from "../../assets/img/1.png";
import logo from "../../assets/logo/logo.svg";
import { Backdrop, Box, Button, Typography } from "@mui/material";
import imgsvg from "../../assets/icons/signup.svg";
import Loader from "../../components/common/Loader";
import { useNavigate } from "react-router-dom";


const SignUpSuccess = () => {
  const [open, setopen] = useState(false);
  const navigate = useNavigate()



  const handleLogin = async () =>{
    navigate("/")
  }
  
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#000000",
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "70%",
            margin: "0 auto",
            bgcolor: "#000000b7",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <img src={imgsvg} />
            </Box>

            <Typography variant="h2" sx={{ mt: 4 }}>
              Setup Complete
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
              You can now start accepting reservations from VibezsUp users at
              <br /> your fine establishment.
            </Typography>

            <Box sx={{ mt: 5 }}>
              <Button
              onClick={handleLogin}
                variant="contained"
                sx={{ height: "63px", width: "300px", borderRadius: "10px" }}
              >
                Continue to Dashboard
              </Button>
            </Box>
            <Box sx={{ mt: 5 }}>
              <img src={logo} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* <Backdrop open={open} sx={{ zIndex: 1000 }}>
        {
          open &&   <Loader />
        }
      
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            height: "100vh",
            bgcolor: "#000000b7",
            width: "100%",
          }}
        >
          <Typography>Setting up your Dashboard...</Typography>
        </Box>
      </Backdrop> */}
    </>
  );
};

export default SignUpSuccess;
