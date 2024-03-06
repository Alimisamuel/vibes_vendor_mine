import React from "react";
import {
  Box,
  Button,
  Drawer,
  Typography,
  IconButton,
  InputLabel,
  TextField,
  InputAdornment,
} from "@mui/material";
import cancelIcon from "../../assets/icons/cancel.svg";
import galleryIcon from "../../assets/icons/gallery.svg";

const AddMenu = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          border: "0.71px solid #75007E",
          color: "#75007E",
          bgcolor: "#FCEDFE",
        }}
      >
        Add New Menu Item
      </Button>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            bgcolor: "#fff",
            height: "100vh",
            width: 650,
            p: 5,
            boxSizing: "border-box",
            overflow: "scroll",
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
              Add New Menu Item
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <img src={cancelIcon} />
            </IconButton>
          </Box>
          <Box sx={{ borderRadius: "10px", mt: 3, bgcolor: "#FCEDFE", p: 3 }}>
            <Box>
              <InputLabel sx={{ color: "#75007E", fontWeight: 500 }}>
                Menu Item Name
              </InputLabel>
              <TextField
                fullWidth
                margin="dense"
                placeholder="Enter Item Name"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    border: "1px solid #75007e",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <InputLabel sx={{ color: "#75007E", fontWeight: 500 }}>
                Menu Item Classification
              </InputLabel>
              <TextField
                fullWidth
                margin="dense"
                placeholder="Enter Item Name"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    border: "1px solid #75007e",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <InputLabel sx={{ color: "#75007E", fontWeight: 500 }}>
                Max Guest Serving
              </InputLabel>
              <TextField
                fullWidth
                margin="dense"
                placeholder="Enter Item Name"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    border: "1px solid #75007e",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <InputLabel sx={{ color: "#75007E", fontWeight: 500 }}>
                Item Image
              </InputLabel>
              <Box
                sx={{
                  width: "112px",
                  height: "112px",
                  borderRadius: "10px",
                  border: "1px dashed #75007e",
                  mt: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={galleryIcon} />
                <Typography
                  sx={{ mt: 1, color: "#8f8f8f", textAlign: "center" }}
                >
                  Click to add image
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <InputLabel sx={{ color: "#75007E", fontWeight: 500 }}>
                Unit Price
              </InputLabel>
              <TextField
                fullWidth
                margin="dense"
                placeholder="Enter Unit price"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    border: "1px solid #75007e",
                  },
                  startAdornment: (
                    <InputAdornment>
                      <Typography
                        sx={{
                          pr: 2,
                          mr: 2,
                          borderRight: "1px solid #75007e",
                          color: "#75007e",
                          fontWeight: 500,
                          fontSize: "16px",
                        }}
                      >
                        N
                      </Typography>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <InputLabel sx={{ color: "#75007E", fontWeight: 500 }}>
                Menu Item Description
              </InputLabel>
              <TextField
                fullWidth
                margin="dense"
                placeholder="Enter Unit price"
                multiline
                rows={7}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    border: "1px solid #75007e",
                  },
                }}
              />
              <Box
                sx={{
                  width: "90%",
                  margin: "0 auto",
                  borderTop: "1px solid #8f8f8fb7",
                  pt: 1,
                  mt: -6,
                }}
              >
                <Typography sx={{ color: "#8f8f8f" }}>0/50</Typography>
              </Box>
              <Box sx={{ mt: 3 }} />
            </Box>
          </Box>
          <Box align="center" sx={{ mt: 4 }}>
            <Button variant="contained" sx={{ px: 10, py: 2, borderRadius: 3 }}>
              Add Menu Item
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default AddMenu;
