import React from "react";
import { Box } from "@mui/material";

const Card = ({ children, height }) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#fff",
          height: height ? height : "auto",
          border: "1px solid #DEDEDE",
          borderRadius: "12px",
          padding: 3,
          boxSizing: "border-box",
          overflow:'hidden'
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Card;
