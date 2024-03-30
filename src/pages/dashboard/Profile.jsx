import React from "react";
import Header from "../../Layouts/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import ProfileSidebar from "../../components/Profile/ProfileSidebar";

const Profile = () => {
  const NAVWIDTH = 220;
  return (
    <>
      <Header
        title="Profile"
        caption="Manage and review your Profile details"
      />
      <Box sx={{ mt: 15, display: "flex", columnGap: 3 }}>
        <ProfileSidebar />
        <Box
          className="hide_scrollbar"
          sx={{
            bgcolor: "#fff",
            width: `calc(100% - ${NAVWIDTH}px)`,
            borderRadius: "12px 12px 0px 0px",
            border: "1px solid #DEDEDE",
            p: 4,
            height: "80vh",
            overflow: "scroll",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Profile;
