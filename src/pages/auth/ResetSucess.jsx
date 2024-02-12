import React, { useState } from "react";
import backgroundImage from "../../assets/img/1.png";
import logo from "../../assets/logo/logo.svg";
import { Backdrop, Box, Button, Typography } from "@mui/material";
import imgsvg from "../../assets/icons/reset.svg";
import imgsvg2 from "../../assets/icons/signup.svg";
import Loader from "../../components/common/Loader";
import { Link, useNavigate, useParams } from "react-router-dom";


const ResetSuccess = () => {
  const [open, setopen] = useState(false);
  const navigate = useNavigate()
const {variant} = useParams()


  const handleLogin = async () =>{
    navigate("/")
  }

  const isSuccess = variant === "success"
  
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
              <img src={isSuccess ? imgsvg2 : imgsvg} />
            </Box>

            <Typography variant="h2" sx={{ mt: 4 }}>
            {isSuccess ? "Password Successfully Updated!" : "Password Reset Done!"}
            </Typography>
            {
                isSuccess ? (
                    <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>Proceed to Login page to access your account</Typography>
                ):(
                    <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
                    Kindly check your email for a password reset link to setup a new 
                      <br /> password for your profile..
                    </Typography>
                )
            }
          

            <Box sx={{ mt: 5 }}>
                <Link to="/login">
              <Button
              onClick={handleLogin}
                variant="contained"
                sx={{ height: "63px", width: "300px", borderRadius: "10px" }}
              >
              {isSuccess ? 'Login' : "Back to Login Page"}
              </Button>
              </Link>
            </Box>
            <Box sx={{ mt: 8 }}>
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

export default ResetSuccess;
