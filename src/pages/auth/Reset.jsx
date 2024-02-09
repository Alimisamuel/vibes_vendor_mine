import React from "react";
import AuthLayout from "./AuthLayout";
import { Box, Typography, Button } from "@mui/material";
import CustomInput from "../../components/Custom/CustomInput";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <>
      <AuthLayout>
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
            <Typography variant="body1">Email</Typography>
            <CustomInput
              margin="dense"
              fullWidth
              placeholder="Enter your registered email"
            />
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            sx={{ height: "63px", width: "300px", borderRadius: "10px" }}
          >
            {" "}
            Reset Password{" "}
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Link to="/login">
            <Typography
              variant="body1"
              sx={{ color: "#F489FD", textDecoration: "underline" }}
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
