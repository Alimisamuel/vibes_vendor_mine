import { Box, Button, ListItemButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileNavConfig from "./NavConfig";
import RouterLink from "../../hooks/router-link";
import { usePathname } from "../../hooks/use-pathname";
import PropTypes from "prop-types";
import { UseDispatch, useDispatch } from "react-redux";
import { logoutUser } from "../../store/userSlice";

const ProfileSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    dispatch(logoutUser());
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "#fff",
          width: "220px",
          borderRadius: "12px",
          border: "1px solid #DEDEDE",
          height: "fit-content",
          // position: "static",
        }}
      >
        <Box
          sx={{
            margin: "0 auto",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1,
            mb: 2,
          }}
        >
          {ProfileNavConfig.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
          <Button
            fullWidth
            onClick={handleLogout}
            color="error"
            sx={{
              bgcolor: "#FFE8E5",
              mt: 10,
              color: "#A71200",
              textAlign: "left",
              fontSize: "13px",
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProfileSidebar;

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.link === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.link}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        width: "100%",
        my: 1,
        typography: "body2",
        color: "#8F8F8F",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        ...(active && {
          color: "#75007E",
          fontWeight: "fontWeightSemiBold",
          bgcolor: "#EEE7EF",
          "&:hover": {
            bgcolor: "#EEE7EF",
          },
        }),
      }}
    >
      <Box component="span" sx={{ textAlign: "left" }}>
        {item.title}{" "}
      </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
