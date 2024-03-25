import React, { useState } from "react";
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
import { updateTax } from "../../../api";
import Loader from "../../common/Loader";
import { useSnackbar } from "notistack";

const Taxes = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [addedTax, setAddedTax] = useState(true);
  const [consumptionTax, setConsumptionTax] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setAddedTax(event.target.checked);
    handleUpdateTax();
  };

  const handleAlert = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const handleChange2 = (event) => {
    setConsumptionTax(event.target.checked);
    handleUpdateTax();
  };

  console.log(addedTax, consumptionTax);

  const handleUpdateTax = async () => {
    setIsLoading(true);
    await updateTax(addedTax, consumptionTax)
      .then((res) => {
        setIsLoading(false);
        if (res?.data?.status) {
          handleAlert(`${res.data?.message}`, "success");
        }
        console.log(res);
      })
      .catch((err) => {
        setIsLoading(false);
        handleAlert(`${err.response.data.message}`, "error");
      });
  };
  return (
    <>
      {isLoading && <Loader />}
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
            <Switch checked={addedTax} size="medium" onChange={handleChange} />
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
            <Switch
              checked={consumptionTax}
              size="medium"
              onChange={handleChange2}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Taxes;
