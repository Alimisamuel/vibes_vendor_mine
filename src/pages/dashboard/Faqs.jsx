import React from "react";
import {
  ListItemButton,
  Box,
  Drawer,
  Typography,
  IconButton,
} from "@mui/material";
import icon from "../../assets/icons/nav/7.svg";
import cancelIcon from "../../assets/icons/cancel.svg";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faqs = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <ListItemButton
        onClick={toggleDrawer(true)}
        sx={{
          mt: 7,
          minHeight: 44,
          borderRadius: 0.75,
          typography: "body2",
          color: "#8F8F8F",
          textTransform: "capitalize",
          fontWeight: "fontWeightMedium",
        }}
      >
        <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
          <img src={icon} />
        </Box>

        <Box component="span" sx={{ color: "#F489FD" }}>
          FAQs
        </Box>
      </ListItemButton>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          className="hide_scrollbar"
          sx={{
            bgcolor: "#fff",
            height: "100vh",
            width: 650,
            p: 5,
            boxSizing: "border-box",
            overflow: "scroll",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontWeight: 700 }}
              variant="subtitle1"
              color="primary"
            >
              FAQs
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <img src={cancelIcon} />
            </IconButton>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Accordion sx={{ borderRadius: "8px", bgcolor: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  border: "1px solid #d7d7d7",
                  borderRadius: "8px",
                }}
              >
                How do I book a table on VibezsUp?
              </AccordionSummary>
              <AccordionDetails
                sx={{ bgcolor: "#f6f6f6", color: "#737373", fontSize: "12px" }}
              >
                Browse through our extensive list of fine locations to book
                specially curated tables for you and your guests. All prices are
                tax inclusive for bills convenience
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: "8px", bgcolor: "none", mt: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  border: "1px solid #d7d7d7",
                  borderRadius: "8px",
                }}
              >
                How do I book a table on VibezsUp?
              </AccordionSummary>
              <AccordionDetails
                sx={{ bgcolor: "#f6f6f6", color: "#737373", fontSize: "12px" }}
              >
                Browse through our extensive list of fine locations to book
                specially curated tables for you and your guests. All prices are
                tax inclusive for bills convenience
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Faqs;
