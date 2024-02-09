import React from "react";
import Card from "../common/Card";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

const AllReservations = () => {
  return (
    <>
      <Card height="1000px">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontSize: "14px" }}>
            All Reservations
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ textDecoration: "underline" }}
          >
            View Past Reservations
          </Typography>
        </Box>
        <Box sx={{mt:3}}>
          <ReservationCard/>
        </Box>
      </Card>
    </>
  );
};

export default AllReservations;


const ReservationCard = () =>{

  return (
<>
<Box sx={{bgcolor:'#FCEDFE', p:3, border:'1px solid #75007E', borderRadius:2}}>
<Box>
  <AvatarGroup max={4} spacing={15}>
<Avatar/>
<Avatar/>
<Avatar/>
<Avatar/>
  </AvatarGroup>
</Box>
<Box></Box>
<Box></Box>
</Box>
</>
  )
}