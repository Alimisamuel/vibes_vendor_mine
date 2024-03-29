import React, { useState, useEffect } from "react";
import AuthLayout from "./AuthLayout";
import { Box, Typography, Button, Skeleton } from "@mui/material";
import CustomOtp from "../../components/Custom/CustomOtp";
import { onboardingDetails, resetPassword } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import Loader from "../../components/common/Loader";
import { useSnackbar } from "notistack";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const token = new URLSearchParams(window.location.search).get("token");

  const vendor_id = `${id}/?token=${token}`;

  const handlePasswordChange = (newValue) => {
    setPassword(newValue);
  };

  const handleConfirmPasswordChange = (newValue) => {
    setConfirmPassword(newValue);
    if (newValue !== password) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleAlert = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const handleResetPassword = async () => {
    setLoading2(true);
    await resetPassword(vendor_id, password, confirmPassword)
      .then((res) => {
        setLoading2(false);
        if (res?.data?.status) {
          navigate(`/reset/success`);
        }
        console.log(res);
      })
      .catch((err) => {
        setLoading2(false);
        console.log(err);
        handleAlert(`${err.message}`, "error");
      });
  };

  //   useEffect(()=>{
  // const getOnboardingDetails = async () =>{
  //   setLoading(true)
  //   await onboardingDetails(token).then((res)=>{
  //     setLoading(false)
  //     setData(res?.data?.data)

  //     console.log(res)
  //   }).catch((err)=>{
  //     setLoading(false)
  //     // navigate("/login")
  //     console.log(err)
  //     handleAlert("Vendor already onboard, Login instead", "error")
  //   })
  // }

  // getOnboardingDetails()
  //   },[token])
  return (
    <>
      <AuthLayout>
        {loading2 && <Loader />}
        <Box sx={{ width: "70%" }}>
          {loading ? (
            <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
              <Typography variant="h2">Hello </Typography>
              <Skeleton
                width={130}
                height={40}
                sx={{ bgcolor: "grey.900", borderRadius: 0 }}
              />
            </Box>
          ) : (
            <Typography variant="h2">Hello {data?.name},</Typography>
          )}

          <Typography
            variant="body1"
            sx={{
              lineHeight: "19px",
              mt: 3,
              display: loading ? "flex" : "block",
              alignItems: "center",
            }}
          >
            Kindly setup a new six digits password for your profile-
            {loading ? (
              <Skeleton
                width={130}
                height={30}
                sx={{ bgcolor: "grey.900", borderRadius: 0 }}
              />
            ) : (
              <span style={{ color: "#F489FD" }}> {data?.spot_name}</span>
            )}
          </Typography>

          <Box sx={{ mt: 5 }}>
            <Typography variant="body1" sx={{ mt: 3 }}>
              Create six (6) digit Password
            </Typography>
            <Box sx={{ mt: 1 }}>
              <CustomOtp
                type
                otp={password}
                handleChange={handlePasswordChange}
              />
            </Box>
            {error ? (
              <Typography variant="body1" sx={{ mt: 3, color: "#EA8072" }}>
                Confirm Password (password must match)
              </Typography>
            ) : (
              <Typography variant="body1" sx={{ mt: 3 }}>
                Confirm six (6) digit Password
              </Typography>
            )}
            <Box sx={{ mt: 1 }}>
              <CustomOtp
                type
                error={error}
                otp={confirmPassword}
                handleChange={handleConfirmPasswordChange}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Button
              disabled={!password || !confirmPassword || error}
              onClick={handleResetPassword}
              variant="contained"
              sx={{
                height: "63px",
                width: "300px",
                borderRadius: "10px",
                "&:disabled": { background: "#5b5b5b" },
              }}
            >
              {" "}
              Reset Password{" "}
            </Button>
          </Box>
        </Box>
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
