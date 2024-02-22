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
import CustomInput from "../Custom/CustomInput";

const AddTeam = () => {
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
            <InputLabel
              sx={{ color: "#75007E", fontWeight: 500 }}
              color="primary"
            >
              Employee Name
            </InputLabel>
            <TextField
              fullWidth
              margin="dense"
              size="medium"
              placeholder="Enter Item Name"
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
              margin="dense"
              size="medium"
              placeholder="How many guest can this menu item serve?"
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

export default AddTeam;
