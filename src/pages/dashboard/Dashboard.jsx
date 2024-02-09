import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "../../Layouts/Header";
import TotalIncome from "../../components/AppWidgets/TotalIncome";
import ReservationServed from "../../components/AppWidgets/ReservationServed";
import AverageGuest from "../../components/AppWidgets/AverageGuest";
import ReservationPerWeek from "../../components/AppWidgets/ReservationPerWeek";
import Income from "../../components/AppWidgets/Income";
import Upcoming from '../../components/AppWidgets/Upcoming'
import Leads from "../../components/AppWidgets/Leads";
import BestSeller from "../../components/AppWidgets/BestSeller";


const Dashboard = () => {
  return (
    <>
      <Header
        title="Dashboard"
        caption="An overview of your Business analytics and performance"
      />
      <Box sx={{mt:15}}>
        <Grid container spacing={2}>
            <Grid item md={4}>
             <TotalIncome/>
            </Grid>
            <Grid item md={4}>
          <ReservationServed/>
            </Grid>
            <Grid item md={4}>
        <AverageGuest/>
            </Grid>
            <Grid item md={6}>
      <ReservationPerWeek/>
            </Grid>
            <Grid item md={6}>
      <Income/>
            </Grid>
            <Grid item md={6}>
                <Upcoming/>
            </Grid>
            <Grid item md={3}>
            <BestSeller/> 
            </Grid>
            <Grid item md={3}>
            <Leads/>
            </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
