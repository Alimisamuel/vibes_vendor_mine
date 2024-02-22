import React from "react";
import {
  Box,
  Button,
  Typography,
  ListItemButton,
  InputLabel,
  TextField,
  Divider,
} from "@mui/material";
import Info from "../../common/Info";
import Switch from "@mui/material/Switch";

const Taxes = () => {
  return (
    <>
      <Box>
        <Typography variant="subtitle1">
          Taxes{" "}
          <Info content="Opt to apply VAT and Consumption Tax to your menu costs. When enabled, unit prices will be tax-inclusive for a seamless payment experience for your guests." />
        </Typography>

        <Box
          sx={{ mt: 5, display: "flex", alignItems: "center", columnGap: 3 }}
        >
          <Box sx={{ width: "350px" }}>
            <Typography sx={{ color: "#151515", fontWeight: 700 }}>
              Value Added Tax - 7.5%
            </Typography>
            <Typography sx={{ color: "#8f8f8f", mt: 2 }}>
              Enabling this option will add an extra 7.5% cost to all
              reservations placed at your establishment
            </Typography>
          </Box>

          <Box>
            <Switch size="medium" />
          </Box>
        </Box>

        <Box
          sx={{ height: "1px", bgcolor: "#dedede", width: "600px", my: 3 }}
        />
        <Box
          sx={{ mt: 5, display: "flex", alignItems: "center", columnGap: 3 }}
        >
          <Box sx={{ width: "350px" }}>
            <Typography sx={{ color: "#151515", fontWeight: 700 }}>
              Consumption Tax - 5%
            </Typography>
            <Typography sx={{ color: "#8f8f8f", mt: 2 }}>
              Enabling this option will add an extra 5% cost to all reservations
              placed at your establishment
            </Typography>
          </Box>
          <Box>
            <Switch size="medium" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Taxes;
