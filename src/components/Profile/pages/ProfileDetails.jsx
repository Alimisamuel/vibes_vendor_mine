import {
  Box,
  Button,
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
  IconButton,
  InputLabel,
  TextField,
  InputAdornment,
  Modal,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { editProfile, getProflie } from "../../../api";
import plus from "../../../assets/icons/plus.svg";
import minus from "../../../assets/icons/minus.svg";
import Loader from "../../common/Loader";
import Info from "../../common/Info";
import delIcon from "../../../assets/icons/del.svg";
import gallery from "../../../assets/icons/gallery.svg";
import TagConfig from "../../../assets/Data/TagConfig";
import { useSnackbar } from "notistack";

const ProfileDetails = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [instaLink, setInstaLink] = useState("");
  const [maxGuest, setMaxGuest] = useState(0);
  const [selectedTags, setSelectedTags] = useState(null);
  const [spot_name, setSpot_Name] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [commission, setCommission] = useState("");
  const [location, setLocation] = useState("");
  const [backup_number, setBackupPhone] = useState(null);

  useEffect(() => {
    setInstaLink(data?.instagram_link);
    setMaxGuest(data?.max_guest_size);
    setSelectedFileURL(data?.logo);
    setSpot_Name(data?.spot_name);
    setAddress(data?.address);
    setName(data?.contact_person);
    setEmail(data?.email_address);
    setPhone(data?.phone_number);
    setCommission(data?.agreed_commission);
    setLocation(data?.short_location);
    setSelectedTags(data?.tag?.map((item) => item.id));
  }, [data]);
  // console.log(location, "Loa")

  const handleEditProfile = async () => {
    setIsLoading(true);
    await editProfile(
      selectedFile,
      selectedImages,
      selectedTags,
      backup_number,
      instaLink,
      maxGuest
    )
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        handleAlert(`${res.data?.message}`, "success");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        handleAlert(`${err.response.data.message}`, "error");
      });
  };

  const handleAlert = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);

  const [selectedFile, setSelectedFile] = useState(" ");
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };
  const handleButtonClick2 = () => {
    fileInputRef2.current.click(); // Trigger file input click
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


  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  console.log(imageUrls);

  const handleImageChange = (e) => {
    const files = e.target.files;

    // Update selectedImages state with the selected image files
    setSelectedImages((prevImages) => [...prevImages, ...files]);

    // Read and store URLs of the selected images
    const urls = [];
    for (const file of files) {
      const url = URL.createObjectURL(file);
      urls.push(url);
    }
    setImageUrls((prevUrls) => [...prevUrls, ...urls]);
  };

  const handleRemoveImage = (index) => {
    // Remove the selected image and URL from the states
    const updatedSelectedImages = [...selectedImages];
    updatedSelectedImages?.splice(index, 1);
    setSelectedImages(updatedSelectedImages);

    const updatedImageUrls = [...imageUrls];
    updatedImageUrls.splice(index, 1);
    setImageUrls(updatedImageUrls);
  };

  const handleTagSelection = (id) => {
    // Check if the item is already selected
    const isSelected = selectedTags.includes(id);

    // If selected, remove it from the array, otherwise add it
    if (isSelected) {
      setSelectedTags(selectedTags.filter((itemId) => itemId !== id));
    } else {
      setSelectedTags([...selectedTags, id]);
    }
  };
  console.log(selectedTags);
  const handlePlus = () => {
    setMaxGuest((prev) => prev + 1);
  };

  const handleMinus = () => {
    // alert("samm");
    if (maxGuest > 1) {
      setMaxGuest((prev) => prev - 1);
    }
  };

  const handleGetProfile = async () => {
    setIsLoading(true);
    await getProflie()
      .then((res) => {
        setIsLoading(false);
        setData(res?.data?.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleGetProfile();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <Box>
        <Typography variant="subtitle1">Vibezs Spot Details </Typography>
        <Grid container sx={{ mt: 4 }}>
          <Grid item md={7}>
            <Box sx={{ width: "80%" }}>
              <InputLabel
                sx={{ color: "#151515", fontSize: "12px", fontWeight: 500 }}
              >
                Spot Name
              </InputLabel>
              <TextField
                margin="dense"
                value={data?.spot_name}
                disabled
                sx={{}}
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    backgroundColor: "#dedede",
                    color: "#151515",
                    border: "1px solid #151515",
                    fontWeight: 500,
                  },
                }}
              />
              <InputLabel
                sx={{
                  color: "#151515",
                  fontSize: "12px",
                  fontWeight: 500,
                  mt: 2,
                }}
              >
                Address
              </InputLabel>
              <TextField
                margin="dense"
                disabled
                value={data?.address}
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    backgroundColor: "#dedede",
                    color: "#151515",
                    border: "1px solid #151515",
                    fontWeight: 500,
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item md={4} sx={{ borderLeft: "1px solid #8f8f8f" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  border: "1px dashed #75007E",
                  borderSpacing: "40px",
                  borderRadius: 1,
                  width: "112px",
                  height: "112px",
                  p: 0.5,
                  boxSizing: "border-box",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "4px",
                    background: `url('${selectedFileURL}')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography
                  onClick={handleButtonClick}
                  color="primary"
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Click to change Logo
                </Typography>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderBottom: "1px solid #8f8f8f", my: 4 }} />
        <Box>
          <Typography variant="subtitle1">Contact Details </Typography>
          <Grid
            container
            columnSpacing={4}
            rowSpacing={2}
            sx={{ mt: 1, width: { lg: "90%", md: "100%" } }}
          >
            <Grid item md={6}>
              <InputLabel
                sx={{ color: "#151515", fontSize: "12px", fontWeight: 500 }}
              >
                Contact Name
              </InputLabel>
              <TextField
                margin="dense"
                value={data?.contact_person}
                disabled
                sx={{}}
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    backgroundColor: "#dedede",
                    color: "#151515",
                    border: "1px solid #151515",
                    fontWeight: 500,
                  },
                }}
              />
            </Grid>
            <Grid item md={6}>
              <InputLabel
                sx={{ color: "#151515", fontSize: "12px", fontWeight: 500 }}
              >
                Email Address
              </InputLabel>
              <TextField
                margin="dense"
                value={data?.email_address}
                disabled
                sx={{}}
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    backgroundColor: "#dedede",
                    color: "#151515",
                    border: "1px solid #151515",
                    fontWeight: 500,
                  },
                }}
              />
            </Grid>
            <Grid item md={6}>
              <InputLabel
                sx={{ color: "#151515", fontSize: "12px", fontWeight: 500 }}
              >
                Phone Number
              </InputLabel>
              <TextField
                margin="dense"
                value={data?.phone_number}
                disabled
                sx={{}}
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    backgroundColor: "#dedede",
                    color: "#151515",
                    border: "1px solid #151515",
                    fontWeight: 500,
                  },
                }}
              />
            </Grid>
            <Grid item md={6}>
              <InputLabel
                sx={{ color: "#151515", fontSize: "12px", fontWeight: 500 }}
              >
                Backup Phone Number
              </InputLabel>
              <TextField
                margin="dense"
                sx={{}}
                value={backup_number}
                onChange={(e) => setBackupPhone(e.target.value)}
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    // backgroundColor:'#dedede',
                    color: "#151515",
                    border: "1px solid #151515",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ borderBottom: "1px solid #8f8f8f", my: 4 }} />
          <Grid
            container
            columnSpacing={4}
            rowSpacing={2}
            sx={{ mt: 1, width: { lg: "90%", md: "100%" } }}
          >
            <Grid item md={6}>
              <InputLabel
                sx={{ color: "#151515", fontSize: "12px", fontWeight: 500 }}
              >
                Instagram Profile Link
              </InputLabel>
              <TextField
                margin="dense"
                sx={{}}
                value={instaLink}
                onChange={(e) => setInstaLink(e.target.value)}
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    // backgroundColor:'#dedede',
                    color: "#151515",
                    border: "1px solid #151515",
                  },
                }}
              />
            </Grid>
            <Grid item md={6}>
              <InputLabel
                sx={{ color: "#151515", fontSize: "12px", fontWeight: 500 }}
              >
                Max Guest Size Per Resv.
              </InputLabel>
              <TextField
                margin="dense"
                sx={{}}
                fullWidth
                value={maxGuest}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        onClick={handlePlus}
                        sx={{ borderRadius: 1, p: 0, mr: 1 }}
                      >
                        {" "}
                        <img src={plus} />
                      </IconButton>
                      <IconButton
                        onClick={handleMinus}
                        sx={{ borderRadius: 1, p: 0 }}
                      >
                        <img src={minus} />
                      </IconButton>
                    </InputAdornment>
                  ),
                  style: {
                    borderRadius: "10px",
                    // backgroundColor:'#dedede',
                    color: "#151515",
                    border: "1px solid #151515",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ borderBottom: "1px solid #8f8f8f", my: 4 }} />
          <Box>
            <Typography variant="subtitle1">
              Images
              <Info content="Upload up to 10 images of your restaurant or lounge for guests to experience your ambiance. For the best presentation, utilize images with a 750px by 750px aspect ratio." />
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {data?.images.map((image, index) => (
                <Grid item md="120px" sx={{}}>
                  <ImageCard image={image.image} />
                </Grid>
              ))}
              {imageUrls.map((url, index) => (
                <Grid item md="120px" key={index} sx={{}}>
                  <ImageCard image={url} deleteAction={handleRemoveImage} />
                </Grid>
              ))}

              <Grid item md="120px">
                <Box
                  sx={{
                    cursor: "pointer",
                    border: "1px dashed #75007E",
                    borderSpacing: "40px",
                    borderRadius: 1,
                    width: "120px",
                    height: "120px",
                    p: 0.5,
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    onClick={handleButtonClick2}
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "4px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={gallery} />
                    <Typography
                      sx={{
                        color: "#8f8f8f",
                        textAlign: "center",
                        fontSize: "10px",
                        fontWeight: 300,
                        mt: 1,
                      }}
                    >
                      Click to add image
                    </Typography>
                    <input
                      type="file"
                      ref={fileInputRef2}
                      style={{ display: "none" }}
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ borderBottom: "1px solid #8f8f8f", my: 4 }} />
          <Box>
            <Typography variant="subtitle1">
              Tags
              <Info content="Enhance your visibility by choosing tags that best describe your establishment. This ensures that potential guests can easily find you on the VibezsUp App." />
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                {TagConfig.map((tag, index) => {
                  const isSelected = selectedTags?.includes(tag.id);
                  return (
                    <Grid item md="93px" key={index}>
                      <Box
                        onClick={() => handleTagSelection(tag.id)}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "93px",
                          height: "93px",
                          border: "1.35px solid #f4f4f4",
                          borderRadius: 3,
                          boxSizing: "border-box",
                          cursor: "pointer",
                          transition: "0.2s all linear",
                          "&:hover": {
                            border: "2px solid #75007E",
                            // bgcolor:'#FCEDFE'
                          },
                          ...(isSelected && {
                            border: "1.35px solid #75007E",
                            bgcolor: "#FCEDFE",
                          }),
                        }}
                      >
                        <img src={isSelected ? tag.activeIcon : tag.icon} />
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: isSelected ? "#75007E" : "#8f8f8f",
                            mt: 1,
                          }}
                        >
                          {tag.title}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Button
                variant="contained"
                sx={{ px: 6 }}
                onClick={handleEditProfile}
              >
                Save Changes
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileDetails;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  // bgcolor: "#151515",

  boxShadow: 24,
};

const ImageCard = ({ image, deleteAction }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          border: "1px dashed #75007E",
          borderSpacing: "40px",
          borderRadius: 1,
          width: "120px",
          height: "120px",
          p: 0.5,
          boxSizing: "border-box",
        }}
      >
        {!image ? (
          <Skeleton
            animation="wave"
            variant="sqare"
            sx={{ height: "100%", width: "100%" }}
          />
        ) : (
          <Box sx={{ width: "100%", height: "100%" }}>
            <IconButton sx={{ mt: -4, ml: 12 }} onClick={deleteAction}>
              {" "}
              <img src={delIcon} />
            </IconButton>
            <Box
              onClick={() => setOpen(true)}
              sx={{
                mt: -2.5,
                width: "100%",
                height: "100%",
                borderRadius: "4px",
                background: `url('${image}')`,
                backgroundSize: "cover",
                cursor: "pointer",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
          </Box>
        )}
      </Box>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box align="right" sx={{ mt: -5 }}>
            <IconButton
              sx={{ borderRadius: 1, px: 2 }}
              onClick={() => setOpen(false)}
            >
              {" "}
              <Typography sx={{ color: "#fff" }}>Close</Typography>
            </IconButton>
          </Box>

          <Box
            sx={{ mt: 0, bgcolor: "#000000b7", backdropFilter: "blur(0.5)" }}
          >
            <Box
              sx={{
                width: "500px",
                height: "300px",
                borderRadius: "4px",
                background: `url('${image}')`,
                backgroundSize: "contain",
                cursor: "pointer",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};
