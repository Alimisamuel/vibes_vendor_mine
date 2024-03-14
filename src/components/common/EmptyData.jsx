import { Box, Typography } from "@mui/material";
import React from "react";
import emptyIcon from "../../assets/icons/team.svg";

const EmptyData = ({ text, width }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={emptyIcon} />
        <Typography sx={{ color: "#8f8f8f", textAlign: "center", mt: 3, width:width }}>
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default EmptyData;
