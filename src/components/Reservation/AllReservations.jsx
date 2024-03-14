import React, { useState } from "react";
import Card from "../common/Card";
import {
  Avatar,
  AvatarGroup,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import copyIcon from "../../assets/icons/copy.svg";
import { MdDone } from "react-icons/md";
import ViewDetails from "./ViewDetails";

const AllReservations = () => {
  return (
    <>
      <Card height="1000px">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontSize: "14px" }}>
            All Reservations
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ textDecoration: "underline" }}
          >
            View Past Reservations
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <ReservationCard />
          <ReservationCard />
          <ReservationCard />
        </Box>
      </Card>
    </>
  );
};

export default AllReservations;

const ReservationCard = () => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false)

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "#FCEDFE",
          p: 3,
          border: "1.7px solid #75007E",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box>
          <AvatarGroup max={4} sx={{ width: "fit-content" }}>
            <Avatar sx={{ width: 26, height: 26, border: "2px solid #000" }} />
            <Avatar
              sx={{ width: 26, height: 26, border: "1px solid #75007e" }}
            />
            <Avatar
              sx={{ width: 26, height: 26, border: "1px solid #75007e" }}
            />
            <Avatar
              sx={{ width: 26, height: 26, border: "1px solid #75007e" }}
            />
          </AvatarGroup>
          <Typography color="primary" sx={{ mt: 1, fontSize: "12px" }}>
            Nosakhere Chinedu + 3 Others
          </Typography>
          <Typography
            color="primary"
            sx={{ fontWeight: 700, fontSize: "12px", mt: 1 }}
          >
            N132,000
          </Typography>
          <Typography
            sx={{
              mt: 1,
              bgcolor: "#FFF2E5",
              color: "#C56000",
              borderRadius: "10px",
              border: "1px solid #C56000",
              width: "fit-content",
              fontSize: "10px",
              px: 3,
              fontWeight: 500,
            }}
          >
            via VibezsUp App
          </Typography>
        </Box>
        <Box
          align="center"
          sx={{ borderLeft: "1px solid #75007Eb7", width: "30%" }}
        >
          <Typography sx={{ fontSize: "12px" }} color="primary">
            Reservation Id:
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: 700 }}
            color="primary"
          >
            {" "}
            R103857300{" "}
            <IconButton onClick={() => handleCopy("  R103837300")}>
              {copied ? (
                <MdDone style={{ fontSize: "14px" }} />
              ) : (
                <img src={copyIcon} />
              )}
            </IconButton>
          </Typography>

          <Typography color="primary" sx={{ mt: 3, fontSize: "12px" }}>
            Menu Items:
          </Typography>
          <Typography
            color="primary"
            sx={{ mt: 1, fontSize: "12px", fontWeight: 700 }}
          >
            7
          </Typography>
        </Box>
        <Box
          align="center"
          sx={{ borderLeft: "1px solid #75007Eb7", width: "30%" }}
        >
          <Typography
            sx={{ fontSize: "12px", fontWeight: 700, textAlign: "center" }}
            color="primary"
          >
            Feb 27
          </Typography>
          <Typography
            sx={{ fontSize: "12px", fontWeight: 500, textAlign: "center" }}
            color="primary"
          >
            03:30pm
          </Typography>

          <Button variant="contained" sx={{ mt: 2 }}>
            Check in
          </Button>
          <Typography
          onClick={()=>setOpen(true)}
            color="primary"
            sx={{
              mt: 1,
              fontSize: "12px",
              fontWeight: 700,
              textDecoration: "underline",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            View Details
          </Typography>
        </Box>
      </Box>

      <ViewDetails open={open} onClose={()=>setOpen(false)}/>
    </>
  );
};
