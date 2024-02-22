import React from "react";
import { Box, Button, ListItemButton, Typography } from "@mui/material";
import Info from "../../common/Info";
import teamImg from "../../../assets/icons/team.svg";

import NewRule from "../../HouseRules/NewRule";

const HouseRules = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "#151515" }}>
            House Rules{" "}
            <Info content="Establish dining rules to guide prospective guests on the best behavior at your establishment. Clarify expectations for a positive and enjoyable experience." />
          </Typography>
          <NewRule />
        </Box>
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={teamImg} />
          <Typography
            sx={{ color: "#151515", mt: 3, width: "60%", textAlign: "center" }}
          >
            No house rules are currently added. Click the "Set New Rule" button
            above to add a new house rule. Once added, prospective guests will
            be informed of these rules upon the approval of their reservation.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HouseRules;
