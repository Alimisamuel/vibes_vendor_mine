import React, { useState } from "react";
import CustomOtp from "../../Custom/CustomOtp";
import { Box, Button, IconButton, InputLabel, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import passwordicon from "../../../assets/icons/password.svg";
import { Link } from "react-router-dom";
import { changePassword } from "../../../api";
import { useSnackbar } from "notistack";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Loader from "../../common/Loader";

const style = {
  position: "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const ChangePassword = () => {
  const [password, setPassword] = React.useState("");

  const [confrirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false)
  const handleChange = (newValue) => {
    // setError(false);
    setPassword(newValue);
  };
  const handleChange2 = (newValue) => {
    setConfirmPassword(newValue);
    if (newValue !== password) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleAlert = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const handleChangePassword = async () => {
    setLoading(true)
    await changePassword(password, confrirmPassword)
      .then((res) => {
        setLoading(false);
        if(res?.data?.status){
       
  setOpen(true)
        }
        console.log(res);
      
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
            handleAlert(`${err.message}`, "error")
      });
  };

  return (
    <>
    {
      loading && <Loader/>
    }
      <Box>
        <InputLabel sx={{ color: "#151515", mb: 1 }}>
          Enter new six (6) digit Password
        </InputLabel>
        <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
          <CustomOtp
            light={true}
            otp={password}
            handleChange={handleChange}
            type={visible}
          />
          <IconButton onClick={() => setVisible(!visible)}>
            {visible ? (
              <FaRegEyeSlash style={{ color: "#151515", fontSize: "16px" }} />
            ) : (
              <FaRegEye style={{ color: "#151515", fontSize: "16px" }} />
            )}
          </IconButton>
        </Box>
        {error ? (
          <Typography variant="body1" sx={{ mt: 3, color: "#EA8072" }}>
            Confirm Password (password must match)
          </Typography>
        ) : (
          <Typography variant="body1" sx={{ mt: 3, color: "#151515" }}>
            Confirm six (6) digit Password
          </Typography>
        )}
        <CustomOtp
          light={true}
          otp={confrirmPassword}
          handleChange={handleChange2}
          type={visible}
        />

        <Box sx={{ mt: 5 }}>
          <Button
            onClick={handleChangePassword}
            // disabled={!otp}
            variant="contained"
            sx={{
              height: "63px",
              width: "300px",
              borderRadius: "10px",
              "&:disabled": { background: "#5b5b5b" },
            }}
            disabled={error || !password || !confrirmPassword}
          >
            Change Password
          </Button>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={passwordicon} />
            <Typography sx={{ color: "#151515", textAlign: "center" }}>
              Your password has been successfully updated. Please login again.
            </Typography>
            <Link to="/login">
              <Button variant="contained" sx={{ mt: 3, px: 6, py: 1 }} >
                Login
              </Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ChangePassword;
