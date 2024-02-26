import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  ListItemButton,
  MenuItem,
  Typography,
} from "@mui/material";
import Info from "../../common/Info";
import teamImg from "../../../assets/icons/team.svg";
import { deleteHouseRules, getProflie } from "../../../api";
import delIcon from "../../../assets/icons/del-circle.svg";
import NewRule from "../../HouseRules/NewRule";
import Loader from "../../common/Loader";
import { FaChevronRight } from "react-icons/fa6";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HouseRules = () => {
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleGetProfile = async () => {
    setIsLoading(true);
    await getProflie()
      .then((res) => {
        setIsLoading(false);
        setData(res?.data?.data?.house_rules);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    handleGetProfile();
  }, []);

  const handleDelete = async (id) => {
    setIsLoading(true);
    await deleteHouseRules(id)
    .then((res)=>{
      setIsLoading(false)
      if(res?.data.status){
        handleGetProfile()
      }
    }).catch((err)=>{
      setIsLoading(false)
    })
  };
  return (
    <>
      {isLoading && <Loader />}
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
        {!data || data?.length === 0 ? (
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
              sx={{
                color: "#151515",
                mt: 3,
                width: "60%",
                textAlign: "center",
              }}
            >
              No house rules are currently added. Click the "Set New Rule"
              button above to add a new house rule. Once added, prospective
              guests will be informed of these rules upon the approval of their
              reservation.
            </Typography>
          </Box>
        ) : (
          <Box sx={{ mt: 4 }}>
            {data.map((rule, index) => (
        

              <Accordion
              key={index}
                sx={{
                  mb: 2,
                  background: "#EEE7EF",
                  boxShadow: "none",
                  borderRadius: 7,
                  borderBottom: "0px solid red",
                  "&::before": { bgcolor: "transparent" },
                }}
              >
                <AccordionSummary
                  key={index}
                  sx={{
                    border: "1px solid #d7d7d7",
                    borderRadius: "8px",
                    bgcolor: "#f6f6f6",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 5,
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Box
                    sx={{ display: "flex", columnGap: 3, alignItems: "center" }}
                  >
                    <IconButton onClick={() => handleDelete(rule?.id)}>
                      <img src={delIcon} />
                    </IconButton>
                    <Typography variant="subtitle1">
                      {rule?.rule_title}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#EEE7EF", fontSize: "13px" }}>
                  {rule?.rule_description}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default HouseRules;
