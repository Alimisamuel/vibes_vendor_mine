import React, { useEffect, useState, useRef } from "react";
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
  Avatar,
  Modal,
} from "@mui/material";
import cancelIcon from "../../assets/icons/cancel.svg";
import galleryIcon from "../../assets/icons/gallery.svg";
import { editMenuItem } from "../../api";
import { useSnackbar } from "notistack";
import Loader from "../common/Loader";
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

const UpdateMenu = ({ open, onClose, edit, data, selectData, action }) => {
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    if (edit) {
      setIsEdit(true);
    }
  }, [edit]);
  const { enqueueSnackbar } = useSnackbar();

  const [open2, setOpen2] = useState(false);
  const [name, setName] = useState("");
  const [menu_class_id, setMenuClassId] = useState("");
  const [max_guest_serving, setMaxGuestServing] = useState("");
  const [unit_price, setUnitPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [g_error, setG_Error] = useState(false);
  const [id, setId] = useState("");

  const handleAlert = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    if (data) {
      setName(data?.name);
      setMenuClassId(data?.menu_classification?.menu_class_id);
      setDescription(data?.description);
      setUnitPrice(data?.unit_price);
      setMaxGuestServing(data?.max_guest_serving);
      setSelectedFileURL(data?.image);
      setSelectedFile(data?.image);
      setId(data?.id);
    }
  }, [data]);

  

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

  const handleEditItem = async () => {
    setIsLoading(true);
    await editMenuItem(
      id,
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

        action();

        setMaxGuestServing("");
        setUnitPrice("");
        setDescription("");
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
                value={name}
                aria-readonly
                onChange={(e) => setName(e.target.value)}
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
                select
                value={menu_class_id}
                onChange={(e) => setMenuClassId(e.target.value)}
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
                    value={item?.id}
                    // onClick={() => setMenuClassId(item?.id)}
                    sx={{ color: "#151515" }}
                  >
                    {item?.name}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ mt: 2 }}>
              <InputLabel sx={{ color: "#75007E", fontWeight: 500 }}>
                Max Guest Serving
              </InputLabel>
              <TextField
                fullWidth
                value={max_guest_serving}
                onChange={(e) => setMaxGuestServing(e.target.value)}
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
                  onClick={isEdit && handleButtonClick}
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
                {isEdit && (
                  <Typography
                    onClick={isEdit && handleButtonClick}
                    color="primary"
                    sx={{
                      textDecoration: "underline",
                      ml: 1,
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
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
                value={unit_price}
                onChange={(e) => setUnitPrice(e.target.value)}
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
                value={description}
                onChange={handleChange}
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
                <Typography sx={{ color: "#8f8f8f" }}>
                  {wordCount}/50
                </Typography>
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
                onClick={handleEditItem}
                sx={{ px: 10, py: 2, borderRadius: 3 }}
              >
                Save Update
              </Button>
            )}
          </Box>
        </Box>
      </Drawer>

      <Modal
        open={open2}
        onClose={() => {
          setOpen2(false);
        }}
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

export default UpdateMenu;
