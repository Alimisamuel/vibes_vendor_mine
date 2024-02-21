import React from "react";
import CustomOtp from "../../Custom/CustomOtp";
import { Box, Button, InputLabel, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import passwordicon from "../../../assets/icons/password.svg";
import { Link } from "react-router-dom";

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
  const [otp, setOtp] = React.useState("");
  const handleChange = (newValue) => {
    // setError(false);
    setOtp(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box>
        <InputLabel sx={{ color: "#151515", mb: 1 }}>
          Enter new six (6) digit Password
        </InputLabel>
        <Box>
          <CustomOtp light={true} otp={otp} handleChange={handleChange} />
        </Box>
        <InputLabel sx={{ color: "#151515", mb: 1, mt: 5 }}>
          Confirm six (6) digit Password
        </InputLabel>
        <CustomOtp light={true} />

        <Box sx={{ mt: 5 }}>
          <Button
            onClick={handleOpen}
            // disabled={!otp}
            variant="contained"
            sx={{
              height: "63px",
              width: "300px",
              borderRadius: "10px",
              "&:disabled": { background: "#5b5b5b" },
            }}
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
              <Button variant="contained" sx={{ mt: 3, px: 6, py: 1 }}>
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
