import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  ListItemButton,
  InputLabel,
  TextField,
  Switch,
  InputAdornment,
} from "@mui/material";
import { getProflie } from "../../../api";
import Loader from "../../common/Loader";

const OnlineReservation = () => {
    const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    {
      isLoading && <Loader/>
    }
      <Box>
        <Typography variant="subtitle1">Online Reservation Link</Typography>
        <Typography variant="body2" sx={{ color: "#8f8f8f", mt: 1 }}>
          Enable online reservations effortlessly by copying and displaying this
          link on your social media platforms or website. Prospective guests can
          easily access your menu and place reservations with convenience.
        </Typography>

        <Box sx={{ mt: 3, width: "80%" }}>
          <TextField
            fullWidth
            value={"https://www.vibezsup.com/velvettlounge/id=12930180"}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <Button
                    variant="contained"
                    sx={{
                      py: 1.8,
                      px: 6,
                      mr: -2,
                      background: "#FFB872",
                      border: "1.57px solid #C56000",
                      borderRadius: "0px 10px 10px 0px",
                      color: "#C56000",
                      fontWeight: 700,
                      fontSize: "13px",
                      "&:hover": {
                        background: "#FFB872",
                      },
                    }}
                  >
                    Copy Link
                  </Button>
                </InputAdornment>
              ),
              style: {
                border: "1.57px solid #C56000",
                borderRadius: "10px",
                background: "#FFF2E5",
                color: "#C56000",
              },
            }}
          />
        </Box>
        <Box sx={{ borderBottom: "1px solid #8f8f8f", my: 4, width: "60%" }} />
        <Box sx={{ display: "flex", alignItems: "center", columnGap: 5 }}>
          <Box>
            <Typography sx={{ color: "#151515", fontWeight: 700 }}>
              Dark Mode Website
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#8f8f8f", fontWeight: 400 }}
            >
              Enabling this option will make your reservation link a dark themed
              website when users browse your link
            </Typography>
          </Box>
          <Switch size="medium" />
        </Box>
        <Box sx={{ mt: 4 }}>
          <a href="">
            <Typography color="primary" sx={{ textDecoration: "underline" }}>
              Click here to view how your profile appears for online reservation
            </Typography>
          </a>
        </Box>
      </Box>
    </>
  );
};

export default OnlineReservation;
