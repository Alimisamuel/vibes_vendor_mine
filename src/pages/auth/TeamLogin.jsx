import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/img/1.png";
import AuthLayout from "./AuthLayout";
import CustomInput from "../../components/Custom/CustomInput";
import { Link } from "react-router-dom";
import CustomOtp from "../../components/Custom/CustomOtp";
import {  team_login } from "../../api";
import Loader from "../../components/common/Loader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/userSlice";

const TeamLogin = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChange = (newValue) => {
    setError(false)
    setOtp(newValue);
  };

  useEffect(() => {
    if (otp.length === 6) {
      handleLogin();
    }
  }, [otp]);

  const handleLogin = async () => {
    setLoading(true);
    setError(false)
    await team_login(email, otp)
      .then((res) => {
        setLoading(false);
        const {data} = res;
        if(data.status){
          
          localStorage.setItem("vendorInfo", JSON.stringify(data?.data))
          dispatch(setUser(data?.data))
          navigate("/")
        }
        console.log(res);

      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError(true)
      });
  };
  return (
    <>
      <AuthLayout>
        {loading && <Loader />}

        <Box sx={{ width: "70%" }}>
          <Typography
            sx={{
              fontFamily: "Butler",
              color: "#fff",
              fontSize: "24px",
              fontWeight: "bolder",
            }}
          >
            Welcome Back
          </Typography>
          <Typography variant="body1" sx={{ mt: 3 }}>
            Enter your email & password to Login
          </Typography>
          <Box sx={{ mt: 5 }}>
            {
              error ? (

                <Typography variant="body1" sx={{color:'#EA8072'}}>Email (Incorrect User details)</Typography>
                ):(
                  
                  <Typography variant="body1">Email</Typography>
              )
            }
            <CustomInput
error={error}
              margin="dense"
              fullWidth
              placeholder="Enter your registered email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {
              error ? (
                <Typography variant="body1"   sx={{ mt: 3, color:'#EA8072' }}>
                Access Code (Incorrect User details)
              </Typography>
              ):(
                <Typography variant="body1"  sx={{ mt: 3,  }}>
              Access Code
              </Typography>
              )
            }
          
            <Box sx={{ mt: 1 }}>
              <CustomOtp      light={false}  otp={otp} handleChange={handleChange} error={error}    type={true}/>
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Button
            onClick={handleLogin}
              disabled={otp.length < 6 || !email}
              variant="contained"
              sx={{
                height: "63px",
                width: "300px",
                borderRadius: "10px",
                "&:disabled": { background: "#5b5b5b" },
              }}
            >
              {" "}
              Login{" "}
            </Button>
          </Box>
          <Box sx={{ mt: 3 }}>
          
            <Link to="/login">
              <Typography
                variant="body1"
                sx={{ color: "#F489FD", textDecoration: "underline", mt: 2 }}
              >
              Go Back to Vendor Login
              </Typography>
            </Link>
          </Box>
        </Box>
      </AuthLayout>
    </>
  );
};

export default TeamLogin;
