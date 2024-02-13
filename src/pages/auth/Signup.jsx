import React, { useEffect, useState } from "react";
import AuthLayout from "./AuthLayout";
import { Box, Typography, Button, Skeleton } from "@mui/material";
import CustomOtp from "../../components/Custom/CustomOtp";
import { onboarding, onboardingDetails } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import Loader from "../../components/common/Loader";
import { useSnackbar } from "notistack";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null)
  const { id,  } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const token = new URLSearchParams(window.location.search).get('token');

  const vendor_id = `${id}/?token=${token}`
  // console.log(vendor_id, "=>Token")

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

  const handleAlert = (message, variant) =>{
    enqueueSnackbar(message, { variant })
  }

  const handleOnboarding = async () => {
    setLoading2(true);
    await onboarding(vendor_id, password, confirmPassword)
      .then((res) => {
        setLoading2(false);
        if(res?.data?.status){
          localStorage.setItem("vendorInfo", JSON.stringify(res?.data?.data))
          dispatch(setUser(res?.data?.data))
          navigate(`/signed-up`)
        }
        console.log(res);
      
      })
      .catch((err) => {
        setLoading2(false);
        console.log(err);
      });
  };

  useEffect(()=>{
const getOnboardingDetails = async () =>{
  setLoading(true)
  await onboardingDetails(token).then((res)=>{
    setLoading(false)
    setData(res?.data?.data)

    console.log(res)
  }).catch((err)=>{
    setLoading(false)
    navigate("/login")
    console.log(err)
    handleAlert("Vendor already onboard, Login instead", "error")
  })
}

getOnboardingDetails()
  },[token])

  return (
    <>
    {
      loading2 && <Loader/>
    }
      <AuthLayout>
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
          <Typography variant="body1" sx={{ lineHeight: "19px", mt: 3 }}>
            Welcome to VibezsUp.
          </Typography>
      
          <Typography
            variant="body1"
            sx={{
              lineHeight: "19px",
              mt: 1,
              display: loading ? "flex" : "block",
              alignItems: "center",
            }}
          >
            A profile has been created for your establishment -
            {loading ? (
              <Skeleton
                width={130}
                height={30}
                sx={{ bgcolor: "grey.900", borderRadius: 0 }}
              />
            ) : (
              <span style={{ color: "#F489FD" }}> {data?.
                spot_name}</span>
            )}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: "19px", mt: 1 }}>
            Kindly setup a six digits Password to secure your profile and
            complete setup
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Typography variant="body1" sx={{ mt: 3 }}>
              Create six (6) digit Password
            </Typography>
            <Box sx={{ mt: 1 }}>
              <CustomOtp otp={password} handleChange={handlePasswordChange} />
            </Box>
            {
            error ? (
              <Typography variant="body1" sx={{ mt: 3, color:'#EA8072' }}>
              Confirm Password (password must match)
            </Typography>
            ):(
              <Typography variant="body1" sx={{ mt: 3 }}>
              Confirm six (6) digit Password
            </Typography>
            )
          }
            <Box sx={{ mt: 1 }}>
              <CustomOtp
                otp={confirmPassword}
                handleChange={handleConfirmPasswordChange}
              />
            </Box>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Button
            disabled={!password || !confirmPassword}
              onClick={handleOnboarding}
              variant="contained"
              sx={{ height: "63px", width: "300px", borderRadius: "10px",  "&:disabled": { background: "#5b5b5b" }, }}
            >
              {" "}
              Complete Setup{" "}
            </Button>
          </Box>

          <Box sx={{ mt: 10 }}>
            <Typography variant="body1" sx={{ lineHeight: "19px", mt: 1 }}>
              By completing this setup, you agree to VibezsUp
              <span style={{ color: "#F489FD", textDecoration: "underline" }}>
                {" "}
                Terms and Conditions
              </span>
            </Typography>
          </Box>
        </Box>
      </AuthLayout>
    </>
  );
};

export default Signup;
