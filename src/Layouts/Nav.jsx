import React from "react";
import { usePathname } from "../hooks/use-pathname";
import { Box, Typography, ListItemButton } from "@mui/material";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import RouterLink from "../hooks/router-link";
import navConfig from "./config-Navigation";
import bgImg from "../assets/img/Rectangle 152158.jpg";
import logo from "../assets/logo/single.svg";
import Faqs from "../pages/dashboard/Faqs";

const Nav = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('${bgImg}')`,
          height: "100vh",
          width: "242px",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mt: 6 }}>
          <img src={logo} />
        </Box>
        <Stack component="nav" spacing={3} sx={{ px: 2, mt: 7 }}>
          {navConfig.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
          <Box >
            <Faqs />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Nav;

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: "body2",
        color: "#8F8F8F",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        ...(active && {
          color: "#F489FD",
          fontWeight: "fontWeightSemiBold",
          bgcolor: "",
          "&:hover": {
            bgcolor: "",
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {active ? item.icon2 : item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
