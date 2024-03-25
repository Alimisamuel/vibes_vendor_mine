import React, { useEffect, useState } from "react";
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
import { useSnackbar } from "notistack";
import { getFaq } from "../../api";
import Loader from "../../components/common/Loader";
import EmptyData from "../../components/common/EmptyData";

const Faqs = () => {
    const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


    const handleAlert = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleGetFaq = async () => {
    setIsLoading(true)
    await getFaq()
      .then((res) => {
        setIsLoading(false)
        if (res?.data?.status){
        
          setData(res?.data?.data)
        } console.log(res);
      })
      .catch((err) => {
        setIsLoading(false)
       handleAlert(`${err.response?.data?.message}`, "error");
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetFaq();
  }, []);
  return (
    <>
    {
      isLoading && (<Loader/>)
    }
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
{
  (!data || data?.length === 0) ? (
    <>
    <Box sx={{mt:4}}>
      <EmptyData text="No Faqs available"/>
    </Box>
    </>
  ):(
    <>
    {
      data?.map((item, index)=>(
                    <Accordion sx={{ borderRadius: "8px", bgcolor: "none", mb:3 }}>
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
             {item?.question}
              </AccordionSummary>
              <AccordionDetails
                sx={{ bgcolor: "#f6f6f6", color: "#737373", fontSize: "12px" }}
              >
             {item?.answer}
              </AccordionDetails>
            </Accordion>
      ))
    }
    </>
  )
}
       
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Faqs;
