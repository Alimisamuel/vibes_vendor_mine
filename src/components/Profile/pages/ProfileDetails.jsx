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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getProflie } from "../../../api";
import plus from "../../../assets/icons/plus.svg";
import minus from "../../../assets/icons/minus.svg";
import Loader from "../../common/Loader";
import Info from "../../common/Info";
import delIcon from "../../../assets/icons/del.svg";
import gallery from "../../../assets/icons/gallery.svg";
import TagConfig from "../../../assets/Data/TagConfig";

const ProfileDetails = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [instaLink, setInstaLink] = useState("");
  const [maxGuest, setMaxGuest] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);

   const handleTagSelection = (title) => {
    // Check if the item is already selected
    const isSelected = selectedTags.includes(title);

    // If selected, remove it from the array, otherwise add it
    if (isSelected) {
      setSelectedTags(selectedTags.filter(itemId => itemId !== title));
    } else {
      setSelectedTags([...selectedTags, title]);
    }
  };

  useEffect(() => {
    setInstaLink(data?.instagram_link);
    setMaxGuest(data?.max_guest_size);
  }, [data]);

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
                    background: `url('${data?.logo}')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography
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
    const isSelected = selectedTags.includes(tag.title);
                  return(
                  <Grid item md="93px"key={index}>
                    <Box
                    onClick={()=>handleTagSelection(tag.title)}
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
                     ...(
                      isSelected && {
                                 border: "1.35px solid #75007E",
                          bgcolor:'#FCEDFE'
                      }
                     )
                      }}
                    >
                      <img src={isSelected ? tag.activeIcon : tag.icon} />
                      <Typography
                        sx={{ fontSize: "12px", color:isSelected ? "#75007E": "#8f8f8f", mt: 1 }}
                      >
                        {tag.title}
                      </Typography>
                    </Box>
                  </Grid>)
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileDetails;

const ImageCard = ({ image }) => {
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
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "4px",
              background: `url('${image}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <IconButton sx={{ mt: -4, ml: 12 }}>
              {" "}
              <img src={delIcon} />
            </IconButton>
          </Box>
        )}
      </Box>
    </>
  );
};
