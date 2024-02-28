import React, { useEffect, useState } from "react";
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
import { createHouseRules } from "../../api";
import successIcon from "../../assets/icons/password.svg";

import Modal from "@mui/material/Modal";
import Loader from "../common/Loader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 7,
  boxSizing: "border-box",
};

const NewRule = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen2(true);
  const handleClose = () => setOpen2(false);
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const wordsArray = description.split(/\s+/);

  const wordCount = wordsArray.length - 1;

  useEffect(() => {
    if (wordCount > 50) {
      setError(true);
    } else {
      setError(false);
    }
  }, [description]);

  const handleCreateRule = async () => {
    setIsLoading(true);
    await createHouseRules(title, description)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        if (res?.data?.status) {
          setOpen2(true);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <Button
        variant="outlined"
        sx={{ background: "#FCEDFE", px: 3 }}
        onClick={toggleDrawer(true)}
      >
        Set New Rule
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
              Set a New Rule
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <img src={cancelIcon} />
            </IconButton>
          </Box>

          <Box sx={{ mt: 5, bgcolor: "#FCEDFE", p: 5, borderRadius: "12px" }}>
            <InputLabel
              sx={{ color: "#75007E", fontWeight: 500 }}
              color="primary"
            >
              Rule Title
            </InputLabel>
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              margin="dense"
              size="medium"
              placeholder="Eg. Dress Rule, Pet Rule etc"
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
              New Rule Description
            </InputLabel>
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              error={error}
              helperText={error && "exceeded 50 words"}
              margin="dense"
              multiline
              minRows={6}
              size="medium"
              placeholder="Enter a short description of the new rule"
              InputProps={{
                style: {
                  border: "1px solid #75007e",
                  borderRadius: "10px",
                },
              }}
            />
            <Box sx={{ borderTop: "0.5px solid #8f8f8f", mx: 1 }}>
              <Typography sx={{ color: "#8f8f8f", fontWeight: 400, mt: 0.5 }}>
                {wordCount}/50
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 5 }} align="center">
            <Button
              variant="contained"
              onClick={handleCreateRule}
              sx={{ py: 1, px: 6 }}
              disabled={!title || !description || wordCount > 50}
            >
              Add Rule
            </Button>
          </Box>
        </Box>
        <Modal
          open={open2}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: 3,
              }}
            >
              <img src={successIcon} />
              <Typography variant="subtitle1">
                New Rule Successfully Added
              </Typography>

              <Button
                sx={{ textDecoration: "underline", color: "#A71200" }}
                onClick={handleClose}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      </Drawer>
    </>
  );
};

export default NewRule;
