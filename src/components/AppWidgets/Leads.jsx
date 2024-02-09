import { Box, Typography } from "@mui/material";
import React from "react";
import Donut from "../Charts/Donut";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Leads = () => {
  return (
    <>
      <Box
        sx={{
          p: 3,
          boxSizing: "border-box",
          bgcolor: "#FA531C",
          height: "248px",
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" sx={{ color: "#fff" }}>
          Reservation Leads
        </Typography>
        <Box sx={{mt:1}}>
          <Donut />
          <Box sx={{ mt: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb:0.5
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "#fff" }}
                />
                <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>
                  VibezsUp App
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>
                221
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb:0.5
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "#ffffff4d" }}
                />
                <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>
                Instagram
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>
                221
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb:0.5
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
                <FiberManualRecordIcon
                  sx={{ fontSize: "12px", color: "#ffffffcc" }}
                />
                <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>
                Twitter
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>
                221
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Leads;
