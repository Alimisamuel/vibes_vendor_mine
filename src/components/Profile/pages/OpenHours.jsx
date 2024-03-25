import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  ListItemButton,
  InputLabel,
  TextField,
} from "@mui/material";
import Info from "../../common/Info";
import CustomInput from "../../Custom/CustomInput";
import { useSnackbar } from "notistack";
import { getProflie, updateOpeningHours } from "../../../api";
import Loader from "../../common/Loader";

const OpenHours = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const days = [
    { name: "Monday", short: "Mon" },
    { name: "Tuesday", short: "Tue" },
    { name: "Wednesday", short: "Wed" },
    { name: "Thursday", short: "Thu" },
    { name: "Friday", short: "Fri" },
    { name: "Saturday", short: "Sat" },
    { name: "Sunday", short: "Sun" },
  ];


    const handleAlert = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };
  const handleOpeningHours = async () => {
    setIsLoading(true);
    await updateOpeningHours(schedule)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
              handleAlert(`${res.data?.message}`, "success");
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
            handleAlert(`${err.response.data.message}`, "error");
      });
  };

  const [schedule, setSchedule] = useState([]);

  const updateSchedule = (day, openTime, closeTime) => {
    // Create a copy of the current schedule
    const updatedSchedule = [...schedule];
    // Check if there is existing data for the day
    const index = updatedSchedule.findIndex((item) => item.day === day);
    if (index !== -1) {
      // If data exists, update it with the new openTime and closeTime
      updatedSchedule[index].open_time = openTime;
      updatedSchedule[index].close_time = closeTime;
    } else {
      // If no data exists, create a new entry for the day
      updatedSchedule.push({ day, open_time: openTime, close_time: closeTime });
    }
    // Update the state variable
    setSchedule(updatedSchedule);
  };

  const removeSchedule = (day) => {
    // Create a copy of the current schedule
    const updatedSchedule = schedule.filter((item) => item.day !== day);
    // Update the state variable
    setSchedule(updatedSchedule);
  };

  const handleGetProfile = async () => {
    setIsLoading(true);
    await getProflie()
      .then((res) => {
        setIsLoading(false);
        setData(res?.data?.data?.opening_hours);
        console.log(res?.data?.data?.opening_hours);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleGetProfile();
  }, []);

  useEffect(() => {
    if (data) {
      const formattedSchedule = data?.map((item) => ({
        day: item.day,
        open_time: item.open_time,
        close_time: item.close_time,
      }));
      console.log(data?.opening_hours, "for");
      setSchedule(formattedSchedule);
    }
  }, [data]);

  console.log(schedule, "this");
  return (
    <Box>
      {isLoading && <Loader />}
      <Typography variant="subtitle1">
        Open Hours{" "}
        <Info content="Specify the opening and closing hours of your establishment for online reservations. Ensure accurate details to welcome and host guests at the scheduled times." />
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography sx={{ color: "#151515" }}>Open Days</Typography>
        <Box sx={{ mt: 1, display: "flex", columnGap: 3, width: "80%" }}>
          {days.map((day, index) => {
            const isSelected = schedule?.some((item) => item.day === day.name);
            return (
              <Box key={index}>
                <ListItemButton
                  selected={isSelected}
                  onClick={(e) => {
                    if (isSelected) {
                      removeSchedule(day?.name);
                    } else {
                      updateSchedule(
                        day?.name,
                        0,
                        0,
                        schedule?.find((item) => item.day === day)
                          ?.close_time || ""
                      );
                    }
                  }}
                  sx={{
                    width: "63px",
                    height: "63px",
                    border: "1.57px solid #dedede",
                    borderRadius: "8px",
                    "&.Mui-selected": {
                      color: "#75007E",
                      border: "1.57px solid #75007E",
                    },
                  }}
                >
                  {day?.short}
                </ListItemButton>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ borderTop: "1.5px solid #dedede", mt: 5 }}>
          <Typography sx={{ color: "#151515", mt: 3 }}>
            Open Hours For Each Days{" "}
            <span style={{ color: "#8f8f8f", fontWeight: 300 }}>
              (24Hrs Format)
            </span>
          </Typography>
          <Box sx={{ mt: 2, ml: 6 }}>
            {days?.map((day, index) => {
              const isSelected = schedule?.some(
                (item) => item.day === day.name
              );
              return (
                <Box key={index} sx={{ display: "flex", columnGap: 3 }}>
                  <Box
                    sx={{
                      width: "150px",
                      py: 2,
                      opacity: isSelected ? 1 : 0.2,
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <Typography sx={{ color: "#151515" }}>
                      {day?.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      borderLeft: "1px solid #dedede",
                      display: "flex",
                      columnGap: 2,
                      pl: 3,
                    }}
                  >
                    <Box
                      sx={{ color: "#151515", opacity: isSelected ? 1 : 0.2 }}
                    >
                      <InputLabel sx={{ color: "#151515" }}>Open</InputLabel>
                      <TextField
                        disabled={!isSelected}
                        onChange={(e) =>
                          updateSchedule(
                            day?.name,
                            e.target.value,
                            schedule?.find((item) => item.day === day?.name)
                              ?.close_time || ""
                          )
                        }
                        value={
                          schedule?.find((item) => item.day === day?.name)
                            ?.open_time || ""
                        }
                        sx={{ width: "140px" }}
                        margin="dense"
                        type="time"
                        InputProps={{
                          style: {
                            fontSize: "12px",
                            fontWeight: 500,
                            border: "1px solid #151515",
                          },
                        }}
                      />
                    </Box>
                    <Box sx={{ opacity: isSelected ? 1 : 0.2 }}>
                      <InputLabel sx={{ color: "#151515" }}>Close</InputLabel>
                      <TextField
                        disabled={!isSelected}
                        onChange={(e) =>
                          updateSchedule(
                            day?.name,
                            schedule?.find((item) => item.day === day?.name)
                              ?.open_time || "",
                            e.target.value
                          )
                        }
                        value={
                          schedule?.find((item) => item.day === day.name)
                            ?.close_time || ""
                        }
                        sx={{ width: "140px" }}
                        margin="dense"
                        type="time"
                        InputProps={{
                          style: {
                            fontSize: "12px",
                            fontWeight: 500,
                            border: "1px solid #151515",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box align="right" sx={{ mt: 5 }}>
            <Button variant="contained" sx={{px:6}} onClick={handleOpeningHours}>Save Changes</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OpenHours;
