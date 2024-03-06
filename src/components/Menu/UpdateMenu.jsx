import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  Typography,
  IconButton,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import cancelIcon from "../../assets/icons/cancel.svg";
import galleryIcon from "../../assets/icons/gallery.svg";

const UpdateMenu = ({ open, onClose, edit }) => {
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    if (edit) {
      setIsEdit(true);
    }
  }, [edit]);
  return (
    <>
      <Drawer anchor="right" open={open} onClose={onClose}>
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
            <IconButton onClick={onClose}>
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
                aria-readonly
                value={"samuell"}
                margin="dense"
                placeholder="Enter Item Name"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    border: "1px solid #75007e",
                  },
                  readOnly: !isEdit,
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
                  readOnly: !isEdit,
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
                  readOnly: !isEdit,
                }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <InputLabel sx={{ color: "#75007E", fontWeight: 500 }}>
                Item Image
              </InputLabel>
              <Box sx={{ display: "flex", alignItems: "end" }}>
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
                {isEdit && (
                  <Typography
                    color="primary"
                    sx={{ textDecoration: "underline", ml: 1, fontWeight:500 }}
                  >
                    Change Image
                  </Typography>
                )}
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
                  readOnly: !isEdit,
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
                  readOnly: !isEdit,
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
            {!isEdit && (
              <Button
                variant="contained"
                onClick={() => setIsEdit(true)}
                sx={{ px: 10, py: 2, borderRadius: 3 }}
              >
                Edit Menu Details
              </Button>
            )}
            {isEdit && (
              <Button
                variant="contained"
                onClick={() => setIsEdit(false)}
                sx={{ px: 10, py: 2, borderRadius: 3 }}
              >
                Save Update
              </Button>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default UpdateMenu;
