import React from "react";
import { MdInfoOutline } from "react-icons/md";
import Popover from "@mui/material/Popover";
import { Typography, IconButton, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { CloseOutlined } from "@mui/icons-material";

const Info = ({ content }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <IconButton
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <MdInfoOutline style={{ color: "#000", fontSize: "15px" }} />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ bgcolor: "#151515", p: 1, width: "300px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "#fff", fontSize: "10px" }}>
              What does this Section do?
            </Typography>
            <IconButton
              onClick={handleClose}
              sx={{ border: "1px solid #fff", borderRadius: 1, p: 0.5 }}
            >
              <CloseOutlined sx={{ color: "#fff", fontSize: "10px" }} />
            </IconButton>
          </Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "10px",
              mt: 1,
              textAlign: "justify",
            }}
          >
      {content}
          </Typography>
        </Box>
      </Popover>
    </>
  );
};

export default Info;
