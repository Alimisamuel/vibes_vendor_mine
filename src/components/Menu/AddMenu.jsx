import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Drawer,
  Typography,
  IconButton,
  InputLabel,
  TextField,
  InputAdornment,
  Avatar,
  MenuItem,
  Modal,
} from "@mui/material";
import cancelIcon from "../../assets/icons/cancel.svg";
import galleryIcon from "../../assets/icons/gallery.svg";
import { addMenuItem } from "../../api";
import Loader from "../common/Loader";
import { useSnackbar } from "notistack";
import serveIcon from "../../assets/icons/serve.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxSizing: "border-box",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const AddMenu = ({ selectData, action }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [name, setName] = useState("");
  const [menu_class_id, setMenuClassId] = useState("");
  const [max_guest_serving, setMaxGuestServing] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [g_error, setG_Error] = useState(false);

  const handleAlert = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(" ");
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };
  const [selectedFileURL, setSelectedFileURL] = useState(null);
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target.result;
        setSelectedFileURL(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const wordsArray = description.split(/\s+/);

  const wordCount = wordsArray.length;
  useEffect(() => {
    if (wordCount > 50) {
      setError(true);
    } else {
      setError(false);
    }
  }, [description]);

  const handleChange = (event) => {
    const newValue = event.target.value;

    // Limit the input to 50 words
    if (newValue.split(" ").length <= 50) {
      setDescription(newValue);
    }
  };

  const handleAddMenuClass = async () => {

    if (
      !name ||
      !menu_class_id ||
      !max_guest_serving ||
      !unit_price ||
      !selectedFileURL
    ) {
      setG_Error(true);
    }

    setIsLoading(true);
    await addMenuItem(
      name,
      menu_class_id,
      max_guest_serving,
      selectedFile,
      unit_price,
      description
    )
      .then((res) => {
        setIsLoading(false);
        console.log(false);
        setOpen2(true);
        setOpen(false);
        action();

        setMaxGuestServing("")
        setUnitPrice("")
        setDescription("")
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        handleAlert(`${err.response.data.message}`, "error");
      });
  };

  return (
    <>
      {isLoading && <Loader />}
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
              <InputLabel
                sx={{
                  color: g_error && !name ? "#A71200" : "#75007E",
                  fontWeight: 500,
                }}
              >
                Menu Item Name{" "}
                {g_error && !name && " (This field is Compulsory)"}
              </InputLabel>
              <TextField
                value={name}
                error={g_error && !name}
                onChange={(e) => setName(e.target.value)}
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
              <InputLabel
                sx={{
                  color: g_error && !menu_class_id ? "#A71200" : "#75007E",
                  fontWeight: 500,
                }}
              >
                Menu Item Classification{" "}
                {g_error && !menu_class_id && " (This field is Compulsory)"}
              </InputLabel>
              <TextField
                fullWidth
                error={g_error && !menu_class_id}
                select
                margin="dense"
                placeholder="Enter Item Name"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    border: "1px solid #75007e",
                    bgcolor: "#FCEDFE",
                  },
                }}
              >
                {selectData?.map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item?.name}
                    onClick={() => setMenuClassId(item?.id)}
                    sx={{ color: "#151515" }}
                  >
                    {item?.name}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ mt: 2 }}>
              <InputLabel
                sx={{
                  color: g_error && !max_guest_serving ? "#A71200" : "#75007E",
                  fontWeight: 500,
                }}
              >
                Max Guest Serving{" "}
                {g_error && !max_guest_serving && " (This field is Compulsory)"}
              </InputLabel>
              <TextField
                fullWidth
                error={g_error && !max_guest_serving}
                type="number"
                value={max_guest_serving}
                onChange={(e) => setMaxGuestServing(e.target.value)}
                margin="dense"
                placeholder="Enter Max Guest No."
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    border: "1px solid #75007e",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <InputLabel
                sx={{
                  color: g_error && !selectedFileURL ? "#A71200" : "#75007E",
                  fontWeight: 500,
                }}
              >
                Item Image {g_error && !selectedFileURL && "(Upload an Image)"}
              </InputLabel>
              <Box
                onClick={handleButtonClick}
                sx={{
                  cursor: "pointer",
                  width: "112px",
                  height: "112px",
                  borderRadius: "10px",
                  border:
                    g_error && !selectedFileURL
                      ? "1px dashed #A71200"
                      : "1px dashed #75007e",
                  mt: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />
                {selectedFileURL ? (
                  <Avatar
                    sx={{ width: "100px", height: "100px", borderRadius: 1 }}
                    variant="square"
                    src={selectedFileURL}
                    alt="Selected File"
                    // onClick={handleButtonClick}
                  />
                ) : (
                  <>
                    <img src={galleryIcon} />
                    <Typography
                      sx={{ mt: 1, color: "#8f8f8f", textAlign: "center" }}
                    >
                      Click to add image
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <InputLabel
                sx={{
                  color: g_error && !unit_price ? "#A71200" : "#75007E",
                  fontWeight: 500,
                }}
              >
                Unit Price{" "}
                {g_error && !unit_price && " (This field is Compulsory)"}
              </InputLabel>
              <TextField
                fullWidth
                error={g_error && !unit_price}
                type="number"
                value={unit_price}
                onChange={(e) => setUnitPrice(e.target.value)}
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
                Menu Item Description (optional)
              </InputLabel>
              <TextField
                fullWidth
                value={description}
                error={error}
                onChange={handleChange}
                margin="dense"
                placeholder="Enter Menu Item Description"
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
                <Typography sx={{ color: "#8f8f8f" }}>
                  {" "}
                  {wordCount}/50
                </Typography>
              </Box>
              <Box sx={{ mt: 3 }} />
            </Box>
          </Box>
          <Box align="center" sx={{ mt: 4 }}>
            <Button
              onClick={handleAddMenuClass}
              variant="contained"
              sx={{ px: 10, py: 2, borderRadius: 3 }}
            >
              Add Menu Item
            </Button>
          </Box>
        </Box>
      </Drawer>

      <Modal
        open={open2}
        onClose={() =>{

        setOpen2(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={serveIcon} />
            <Typography
              sx={{
                color: "#151515",
                fontWeight: 500,
                fontSize: "12px",
                mt: 2,
              }}
            >
              “{name}” has been successfully added as a Menu Item
            </Typography>
            <Box
              align="center"
              sx={{
                mt: 4,
              }}
            >
              <Button onClick={() => setOpen2(false)} sx={{}}>
                <Typography color="error" sx={{ textDecoration: "underline" }}>
                  Close
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddMenu;
