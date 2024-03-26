import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  ListItemButton,
  InputLabel,
  TextField,
  Drawer,
  List,
  IconButton,
} from "@mui/material";
import cancelIcon from "../../assets/icons/cancel.svg";
import copyIcon from "../../assets/icons/copy.svg";
import CustomInput from "../Custom/CustomInput";
import { addTeam } from "../../api";
import { useSnackbar } from "notistack";
import Loader from "../common/Loader";
import { MdDone } from "react-icons/md";

const AddTeam = ({ action }) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [created, setCreated] = useState(false);
  const [copied, setCopied] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleAlert = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const [data, setData] = useState(null);

  const handleAddTeam = async () => {
    setIsLoading(true);
    await addTeam(name, email)
      .then((res) => {
        console.log(res);
        const { data } = res;
        if (data?.status) {
          setCreated(true);
          setData(data?.data);
          action();
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        handleAlert(`${err.response?.data?.message}`, "error");
      });
  };

  const toggleDrawer = (newOpen) => () => {
    setName("")
    setEmail("")
    setOpen(newOpen);
    setCreated(false);
  };

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  };
  return (
    <>
      {isLoading && <Loader />}
      <Button
        variant="outlined"
        sx={{ background: "#FCEDFE", px: 3 }}
        onClick={toggleDrawer(true)}
      >
        Add Team Member
      </Button>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            bgcolor: "#fff",
            height: "100vh",
            width: 650,
            p: 5,
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontWeight: 700 }}
              variant="subtitle1"
              color="primary"
            >
              Add Team Member
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <img src={cancelIcon} />
            </IconButton>
          </Box>

          <Box sx={{ mt: 5, bgcolor: "#FCEDFE", p: 5, borderRadius: "12px" }}>
            {created ? (
              <>
                <Typography variant="subtitle1" color="primary">
                  A profile has been successfully created for {name}. See Login
                  details below
                </Typography>
                <InputLabel
                  sx={{ color: "#75007E", fontWeight: 500, mt: 3 }}
                  color="primary"
                >
                  Login Email
                </InputLabel>
                <TextField
                  fullWidth
                  value={data?.email}
                  disabled
                  margin="dense"
                  size="medium"
                  sx={{ width: "80%" }}
                  InputProps={{
                    style: {
                      border: "1px solid #75007e",
                      borderRadius: "10px",
                    },
                  }}
                />
                <InputLabel
                  sx={{ color: "#75007E", fontWeight: 500, mt: 3 }}
                  color="primary"
                >
                  Login Access Code
                </InputLabel>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    columnGap: 2,
                  }}
                >
                  <Typography
                    color="primary"
                    sx={{ fontWeight: 700, fontSize: "20px" }}
                  >
                    {data?.login_access_code}
                  </Typography>
                  <IconButton
                    onClick={() => handleCopy(data?.login_access_code)}
                  >
                    {copied ? (
                      <MdDone style={{ fontSize: "14px" }} />
                    ) : (
                      <img src={copyIcon} />
                    )}
                  </IconButton>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <InputLabel
                    sx={{ color: "#75007E", fontWeight: 500 }}
                    color="primary"
                  >
                    Employee Name
                  </InputLabel>
                  <TextField
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="dense"
                    size="medium"
                    placeholder="Enter Employee Name"
                    InputProps={{
                      style: {
                        border: "1px solid #75007e",
                        borderRadius: "10px",
                      },
                    }}
                  />
                  <InputLabel
                    sx={{ color: "#75007E", fontWeight: 500, mt: 3 }}
                    color="primary"
                  >
                    Email Address
                  </InputLabel>
                  <TextField
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="dense"
                    size="medium"
                    placeholder="Enter Email Address"
                    InputProps={{
                      style: {
                        border: "1px solid #75007e",
                        borderRadius: "10px",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ mt: 5 }} align="center">
                  <Button
                    variant="contained"
                    sx={{ py: 2, px: 6 }}
                    onClick={handleAddTeam}
                    disabled={!name || !email}
                  >
                    Add Team Member
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default AddTeam;
