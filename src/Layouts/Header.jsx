import { Box, Typography } from "@mui/material";
import React from "react";

const Header = ({ title, caption }) => {
  const formatDate = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek} ${dayOfMonth} ${month}, ${year}`;
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          width: "77%",
          boxSizing: "border-box",
          backdropFilter: "blur(12px)",
          pt: 6,
          pb: 1,
          zIndex: 1000,
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ color: "#000", fontWeight: 900 }}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#8f8f8f", fontWeight: 500 }}
          >
            {caption}
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              bgcolor: "#FFF2E5",
              border: "1px solid #FFB872",
              px: 2,
              borderRadius: "20px",
            }}
          >
            <Typography sx={{ color: "#C56000", fontSize: "10px" }}>
              3 Reservations Today
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#8f8f8f", mt: 1, fontWeight: 500 }}
          >
            {formatDate()}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;
