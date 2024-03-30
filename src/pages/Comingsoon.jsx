import { Box, Button, Typography } from "@mui/material";
import React from "react";
import bg from "../assets/img/404.svg";
import { Link } from "react-router-dom";

const Comingsoon = () => {
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
          Coming Soon
        </Typography>

        <Typography sx={{ color: "#000000b7", mt: 6, fontSize: "16px" }}>
          This section is still in development, you will be notified once it
          goes live
        </Typography>
        <Link to="/profile">
          <Button variant="contained" sx={{ mt: 4 }}>
            Back to Profile
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Comingsoon;
