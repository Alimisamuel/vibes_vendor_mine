import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import { usePathname } from "../hooks/use-pathname";
import { NAV } from "./config-layout";
import { useResponsive } from "../hooks/use-responsiveness";
import { useEffect } from "react";
import { getProflie } from "../api";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";


// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({ children, sx, ...other }) {
  const pathname = usePathname();

  const isComingUp =
    pathname === "/reservation" ||
    pathname === "/pending-orders" ||
    pathname === "/" ||
    pathname === "/generate-invoice";

  const lgUp = useResponsive("up", "lg");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEditProfile = async () => {
    await getProflie()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err?.message === "Request failed with status code 401") {
          navigate("/login");
          dispatch(logoutUser);
        }
      });
  };

  useEffect(() => {
    handleEditProfile();
  }, []);
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
        // py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          px: 2,
          //   py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...(isComingUp && {
          px: 0,
        }),
        ...sx,
      }}
      {...other}
    >
      <Box
        className="hide_scrollbar"
        sx={{
          width: "95%",
          margin: "0 auto",
          pt: 0,
          height: "100vh",
          overflow: "scroll",
          overflowX: "hide",
          boxSizing: "border-box",
          ...(isComingUp && {
            width: "100%",
          }),
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
