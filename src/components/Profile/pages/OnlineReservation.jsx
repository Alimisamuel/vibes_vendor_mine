import React, { useState } from "react";
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

const OnlineReservation = () => {
  const [mon, setMon] = useState(false);
  const [tues, setTues] = useState(false);
  const [wed, setWed] = useState(false);
  const [thur, setThur] = useState(false);
  const [fri, setFri] = useState(false);
  const [sat, setSat] = useState(false);
  const [sun, setSun] = useState(false);

  return (
    <Box>
      <Typography variant="subtitle1">
        Open Hours{" "}
        <Info content="Specify the opening and closing hours of your establishment for online reservations. Ensure accurate details to welcome and host guests at the scheduled times." />
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography sx={{ color: "#151515" }}>Open Days</Typography>
        <Box sx={{ mt: 1, display: "flex", columnGap: 5, width: "80%" }}>
          <Box>
            <ListItemButton
              selected={mon}
              onClick={() => setMon(!mon)}
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
              Mon
            </ListItemButton>
          </Box>
          <Box>
            <ListItemButton
              selected={tues}
              onClick={() => setTues(!tues)}
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
              Tue
            </ListItemButton>
          </Box>
          <Box>
            <ListItemButton
              selected={wed}
              onClick={() => setWed(!wed)}
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
              Wed
            </ListItemButton>
          </Box>
          <Box>
            <ListItemButton
              selected={thur}
              onClick={() => setThur(!thur)}
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
              Thur
            </ListItemButton>
          </Box>
          <Box>
            <ListItemButton
              selected={fri}
              onClick={() => setFri(!fri)}
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
              Fri
            </ListItemButton>
          </Box>
          <Box>
            <ListItemButton
              selected={sat}
              onClick={() => setSat(!sat)}
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
              Sat
            </ListItemButton>
          </Box>
          <Box>
            <ListItemButton
              selected={sun}
              onClick={() => setSun(!sun)}
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
              Sun
            </ListItemButton>
          </Box>
        </Box>
        <Box sx={{ borderTop: "1.5px solid #dedede", mt: 5 }}>
          <Typography sx={{ color: "#151515", mt: 3 }}>
            Open Hours For Each Days{" "}
            <span style={{ color: "#8f8f8f", fontWeight: 300 }}>
              (24Hrs Format)
            </span>
          </Typography>
          <Box sx={{ mt: 2, ml: 6 }}>
            <Box sx={{ display: "flex", columnGap: 3 }}>
              <Box
                sx={{
                  width: "150px",
                  py: 2,
                  opacity: mon ? 1 : 0.2,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Typography sx={{ color: "#151515" }}>Monday</Typography>
              </Box>
              <Box
                sx={{
                  borderLeft: "1px solid #dedede",
                  display: "flex",
                  columnGap: 2,
                  pl: 3,
                }}
              >
                <Box sx={{ color: "#151515", opacity: mon ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Open</InputLabel>
                  <TextField
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ opacity: mon ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Close</InputLabel>
                  <TextField
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", columnGap: 3 }}>
              <Box
                sx={{
                  width: "150px",
                  py: 2,
                  opacity: tues ? 1 : 0.2,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Typography sx={{ color: "#151515" }}>Tuesday</Typography>
              </Box>
              <Box
                sx={{
                  borderLeft: "1px solid #dedede",
                  display: "flex",
                  columnGap: 2,
                  pl: 3,
                }}
              >
                <Box sx={{ color: "#151515", opacity: tues ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Open</InputLabel>
                  <TextField
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ opacity: tues ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Close</InputLabel>
                  <TextField
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", columnGap: 3 }}>
              <Box
                sx={{
                  width: "150px",
                  py: 2,
                  opacity: wed ? 1 : 0.2,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Typography sx={{ color: "#151515" }}>Wednessday</Typography>
              </Box>
              <Box
                sx={{
                  borderLeft: "1px solid #dedede",
                  display: "flex",
                  columnGap: 2,
                  pl: 3,
                }}
              >
                <Box sx={{ color: "#151515", opacity: wed ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Open</InputLabel>
                  <TextField
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ opacity: wed ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Close</InputLabel>
                  <TextField
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", columnGap: 3 }}>
              <Box
                sx={{
                  width: "150px",
                  py: 2,
                  opacity: thur ? 1 : 0.2,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Typography sx={{ color: "#151515" }}>Thursday</Typography>
              </Box>
              <Box
                sx={{
                  borderLeft: "1px solid #dedede",
                  display: "flex",
                  columnGap: 2,
                  pl: 3,
                }}
              >
                <Box sx={{ color: "#151515", opacity: thur ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Open</InputLabel>
                  <TextField
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ opacity: thur ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Close</InputLabel>
                  <TextField
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", columnGap: 3 }}>
              <Box
                sx={{
                  width: "150px",
                  py: 2,
                  opacity: fri ? 1 : 0.2,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Typography sx={{ color: "#151515" }}>Friday</Typography>
              </Box>
              <Box
                sx={{
                  borderLeft: "1px solid #dedede",
                  display: "flex",
                  columnGap: 2,
                  pl: 3,
                }}
              >
                <Box sx={{ color: "#151515", opacity: fri ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Open</InputLabel>
                  <TextField
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ opacity: fri ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Close</InputLabel>
                  <TextField
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", columnGap: 3 }}>
              <Box
                sx={{
                  width: "150px",
                  py: 2,
                  opacity: sat ? 1 : 0.2,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Typography sx={{ color: "#151515" }}>Saturday</Typography>
              </Box>
              <Box
                sx={{
                  borderLeft: "1px solid #dedede",
                  display: "flex",
                  columnGap: 2,
                  pl: 3,
                }}
              >
                <Box sx={{ color: "#151515", opacity: sat ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Open</InputLabel>
                  <TextField
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ opacity: sat ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Close</InputLabel>
                  <TextField
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", columnGap: 3 }}>
              <Box
                sx={{
                  width: "150px",
                  py: 2,
                  opacity: sun ? 1 : 0.2,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Typography sx={{ color: "#151515" }}>Sunday</Typography>
              </Box>
              <Box
                sx={{
                  borderLeft: "1px solid #dedede",
                  display: "flex",
                  columnGap: 2,
                  pl: 3,
                }}
              >
                <Box sx={{ color: "#151515", opacity: sun ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Open</InputLabel>
                  <TextField
                    disabled={!sun}
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ opacity: sun ? 1 : 0.2 }}>
                  <InputLabel sx={{ color: "#151515" }}>Close</InputLabel>
                  <TextField
                    disabled={!sun}
                    sx={{ width: "100px" }}
                    margin="dense"
                    type="time"
                    InputProps={{
                      style: {
                        fontSize: "10px",
                        border: "1px solid #151515",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OnlineReservation;
