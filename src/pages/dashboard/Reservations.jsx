import React from "react";
import Header from "../../Layouts/Header";
import { Box, Grid } from "@mui/material";
import AllReservations from "../../components/Reservation/AllReservations";
import ReservationView from "../../components/Reservation/ReservationView";
import Card from "../../components/common/Card";
import EmptyData from "../../components/common/EmptyData";
import Comingsoon from "../Comingsoon";

const Reservations = () => {
  return (
    <>
    <Comingsoon/>
      {/* <Header
        title="Reservations"
        caption="Review and manage your upcoming reservations "
      />
      <Box sx={{ mt: 17 }}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <ReservationView />
              </Grid>
              <Grid item md={12}>
                <Card>
                  <EmptyData
                    text="You currently have no active reservations. Once you check in a reservation, you can access it here"
                    width="60%"
                  />
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <AllReservations />
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
};

export default Reservations;
