import React from "react";
import { Box, Button, ListItemButton, Typography } from "@mui/material";
import Info from "../../common/Info";
import teamImg from "../../../assets/icons/team.svg";
import AddTeam from "../../Team/AddTeam";

const Team = () => {
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
            Team{" "}
            <Info content="Enlist team members on your profile to facilitate guest check-ins or generate invoices for payment collection to VibezsUp guests. Streamline collaboration and enhance efficiency with your team." />
          </Typography>
 <AddTeam/>
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
          <Typography sx={{ color: "#151515", mt: 3, width: "60%" , textAlign:'center'}}>
            Currently, there are no team members added. Utilize the "Add Team
            Member" button above to include a new member. Once added, the member
            can log in using the team member login option on the login page.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Team;
