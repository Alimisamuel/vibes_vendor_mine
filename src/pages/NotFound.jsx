import { Box, Button, Typography } from "@mui/material";
import React from "react";
import bg from "../assets/img/404.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Box
        className="not_found"
        sx={{
          height: "100vh",
          backgroundColor: "#FCEDFE",
          backgroundImage: `url('${bg}')`,
          backgroundSize: "contain",
          backgroundPosition: "150px",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ color: "#000", fontSize: "80px", fontWeight: 600 }}>
          404
        </Typography>
        <Typography
          sx={{
            fontFamily: "Gavency Free",
            color: "#000",
            mt: 7,
            fontSize: "40px",
          }}
        >
          Page Not Found
        </Typography>
        <Typography sx={{ color: "#8f8f8f", mt: 3, fontSize: "16px" }}>
          Oops! the page you requested could not be found
        </Typography>
        <Link to="/">
          <Button variant="contained" sx={{ mt: 4 }}>
            Back to Home
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default NotFound;
