import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import { Box, Typography, Button } from "@mui/material";
import CustomInput from "../../components/Custom/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../../api";
import Loader from "../../components/common/Loader";
import { useSnackbar } from "notistack";

const Reset = () => {
  const [email, setEmail] = useState("");
    const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

    const handleAlert = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const handleForgotPassword = async () => {
    setLoading(true);
    await forgotPassword(email)
      .then((res) => {
        setLoading(false);
        console.log(res);
        if(res?.data?.status){
          navigate("/reset/done")
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
            handleAlert(`${err.response.data.message}`, "error");
      });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setError(!validateEmail(value));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <>
      <AuthLayout>
        {loading && <Loader />}
        <Box sx={{ width: "70%" }}>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "butler",
              fontWeight: "bolder",
              fontSize: "24px",
            }}
          >
            Password Reset
          </Typography>

          <Typography variant="body1" sx={{ mt: 3 }}>
            Enter your VibezsUp Vendor Registered email
          </Typography>
          <Box sx={{ mt: 5 }}>
            {error ? (
              <Typography variant="body1" sx={{ color: "#EA8072" }}>
                Email (Invalid Email)
              </Typography>
            ) : (
              <Typography variant="body1">Email</Typography>
            )}
            <CustomInput
              error={error}
              value={email}
              onChange={handleInputChange}
              margin="dense"
              fullWidth
              placeholder="Enter your registered email"
            />
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Button
          disabled={error || !email}
            onClick={handleForgotPassword}
            variant="contained"
            sx={{ height: "63px", width: "300px", borderRadius: "10px",                 "&:disabled": { background: "#5b5b5b", color: "#fff" }, }}
          >
            {" "}
            Reset Password{" "}
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Link to="/login">
            <Typography
              variant="body1"
              sx={{ color: "#F489FD", textDecoration: "underline" ,  }}
            >
              Back to Login
            </Typography>
          </Link>
        </Box>
      </AuthLayout>
    </>
  );
};

export default Reset;
