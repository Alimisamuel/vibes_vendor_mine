import React from "react";
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

const NewRule = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
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
              Menu Item Description
            </InputLabel>
            <TextField
              fullWidth
              margin="dense"
              multiline
              rows={6}
              size="medium"
              placeholder="Enter a short description of the new rule"
              InputProps={{
                style: {
                  border: "1px solid #75007e",
                  borderRadius: "10px",
                },
              }}
            />
          </Box>

          <Box sx={{ mt: 5 }} align="center">
            <Button variant="contained">Add Team Member</Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NewRule;
