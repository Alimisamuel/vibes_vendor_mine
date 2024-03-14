import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  ListItemButton,
  InputLabel,
  TextField,
  Drawer,
  List,
  IconButton,
  MenuItem,
} from "@mui/material";
import cancelIcon from "../../assets/icons/cancel.svg";
import copyIcon from "../../assets/icons/copy.svg";
import CustomInput from "../Custom/CustomInput";
import { addTeam } from "../../api";
import { useSnackbar } from "notistack";
import Loader from "../common/Loader";
import { MdDone } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { MdChevronRight } from "react-icons/md";

const ViewDetails = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [created, setCreated] = useState(false);
  const [copied, setCopied] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleAlert = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const [data, setData] = useState(null);

  const handleAddTeam = async () => {
    setIsLoading(true);
    await addTeam(name, email)
      .then((res) => {
        console.log(res);
        const { data } = res;
        if (data?.status) {
          setCreated(true);
          setData(data?.data);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        handleAlert(`${err.message}`, "error");
      });
  };

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  };
  return (
    <>
      {isLoading && <Loader />}

      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box
          sx={{
            bgcolor: "#fff",
            height: "100vh",
            width: 650,
            p: 5,
            boxSizing: "border-box",
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
              Order #R103837300
            </Typography>
            <IconButton onClick={onClose}>
              <img src={cancelIcon} />
            </IconButton>
          </Box>

          <Box
            sx={{
              mt: 5,
              bgcolor: "#FCEDFE",
              p: 3,
              px: 5,
              borderRadius: "12px",
            }}
          >
            {created ? (
              <>
                <Typography variant="subtitle1" color="primary">
                  A profile has been successfully created for {name}. See Login
                  details below
                </Typography>
                <InputLabel
                  sx={{ color: "#75007E", fontWeight: 500, mt: 3 }}
                  color="primary"
                >
                  Login Email
                </InputLabel>
                <TextField
                  fullWidth
                  value={data?.email}
                  disabled
                  margin="dense"
                  size="medium"
                  sx={{ width: "80%" }}
                  InputProps={{
                    style: {
                      border: "1px solid #75007e",
                      borderRadius: "10px",
                    },
                  }}
                />
                <InputLabel
                  sx={{ color: "#75007E", fontWeight: 500, mt: 3 }}
                  color="primary"
                >
                  Login Access Code
                </InputLabel>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    columnGap: 2,
                  }}
                >
                  <Typography
                    color="primary"
                    sx={{ fontWeight: 700, fontSize: "20px" }}
                  >
                    {data?.login_access_code}
                  </Typography>
                  <IconButton
                    onClick={() => handleCopy(data?.login_access_code)}
                  >
                    {copied ? (
                      <MdDone style={{ fontSize: "14px" }} />
                    ) : (
                      <img src={copyIcon} />
                    )}
                  </IconButton>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Typography color="primary">Reserved by:</Typography>
                  <Box
                    sx={{
                      mt: 3,
                      bgcolor: "#000",
                      p: 3,
                      width: "70%",
                      boxSizing: "border-box",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <AvatarGroup max={6} sx={{ width: "fit-content" }}>
                        <Avatar
                          alt="Remy Sharp"
                          sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                          alt="Travis Howard"
                          sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                          alt="Cindy Baker"
                          sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                          alt="Agnes Walker"
                          sx={{ width: 24, height: 24 }}
                        />
                      </AvatarGroup>
                      <Typography sx={{ mt: 2, fontSize: "12px" }}>
                        Shukura El Shaleye + 3 Others
                      </Typography>
                 
                    </Box>
                    <Box>
                      <IconButton>
                        <MdChevronRight style={{ color: "#fff" }} />
                      </IconButton>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography color="primary" sx={{ fontSize: "12px" }}>
                        Reservation Id:
                      </Typography>
                      <Typography
                        color="primary"
                        sx={{ fontSize: "12px", fontWeight: 700 }}
                      >
                        R103837300{" "}
                        <IconButton onClick={() => handleCopy("  R103837300")}>
                          {copied ? (
                            <MdDone style={{ fontSize: "14px" }} />
                          ) : (
                            <img src={copyIcon} />
                          )}
                        </IconButton>
                      </Typography>
                    </Box>
                    <Box>
                      <Typography color="primary" sx={{ fontSize: "12px" }}>
                        Reservation Date
                      </Typography>
                      <Typography
                        color="primary"
                        sx={{ fontSize: "12px", fontWeight: 700 }}
                      >
                        Mar 4 - 07:30pm
                      </Typography>
                    </Box>
                    <Box>
                      <Typography color="primary" sx={{ fontSize: "12px" }}>
                        Reservation Value
                      </Typography>
                      <Typography
                        color="primary"
                        sx={{ fontSize: "12px", fontWeight: 700 }}
                      >
                        N75,900
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </>
            )}
          </Box>
          <Box
            sx={{
              mt: 3,
              bgcolor: "#FCEDFE",
              p: 3,
              px: 5,
              borderRadius: "12px",
            }}
          >
            <Typography color="primary">Reservation Order</Typography>
            <Box sx={{ mt: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#151515",
                    fontWeight: 500,
                    fontSize: "12px",
                    width: "70%",
                  }}
                >
                  Seafood Platter - 1 Pack
                </Typography>
                <Typography
                  sx={{ color: "#151515", fontWeight: 500, fontSize: "12px" }}
                >
                  N30,900
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#151515",
                    fontWeight: 500,
                    fontSize: "12px",
                    width: "70%",
                  }}
                >
                  Seafood Platter - 1 Pack
                </Typography>
                <Typography
                  sx={{ color: "#151515", fontWeight: 500, fontSize: "12px" }}
                >
                  N30,900
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 3, borderTop: "1px solid #75007E", pt: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#151515",
                    fontWeight: 500,
                    fontSize: "12px",
                    width: "70%",
                  }}
                >
                  Total
                </Typography>
                <Typography
                  sx={{ color: "#151515", fontWeight: 500, fontSize: "12px" }}
                >
                  N75,900
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  color="error"
                  sx={{
                    fontWeight: 500,
                    fontSize: "12px",
                    width: "70%",
                  }}
                >
                  Service Charge (10%)
                </Typography>
                <Typography
                  color="error"
                  sx={{ fontWeight: 500, fontSize: "12px" }}
                >
                  -N7,590
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#151515",
                    fontWeight: 500,
                    fontSize: "12px",
                    width: "70%",
                  }}
                >
                  VAT (7.5%)
                </Typography>
                <Typography
                  sx={{ color: "#151515", fontWeight: 500, fontSize: "12px" }}
                >
                  N5,692.5
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#151515",
                    fontWeight: 500,
                    fontSize: "12px",
                    width: "70%",
                  }}
                >
                  Consumption Tax (5%)
                </Typography>
                <Typography
                  sx={{ color: "#151515", fontWeight: 500, fontSize: "12px" }}
                >
                  N3,795
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 3, borderTop: "1px solid #75007E", pt: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#007E23",
                    fontWeight: 500,
                    fontSize: "12px",
                    width: "70%",
                  }}
                >
                  Total Receivable
                </Typography>
                <Typography
                  sx={{ color: "#007E23", fontWeight: 500, fontSize: "12px" }}
                >
                  N77,797.5
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap: 5,
              mt: 5,
            }}
          >
            <Button variant="contained">Approve Request</Button>
            <Button sx={{ textDecoration: "underline", color: "#A71200" }}>
              Decline Request
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default ViewDetails;
