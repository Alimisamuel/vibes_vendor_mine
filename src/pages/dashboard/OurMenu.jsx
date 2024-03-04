import React from "react";
import Header from "../../Layouts/Header";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  ListItemButton,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import Card from "../../components/common/Card";
import img1 from "../../assets/img/menu/1.jpg";
import moreIcon from "../../assets/icons/more.svg";
import serveIcon from "../../assets/icons/serve.svg";
import editIcon from "../../assets/icons/edit.svg";
import delIcon from "../../assets/icons/delete.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxSizing: "border-box",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const OurMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Header
        title="Our Menu"
        caption="Manage and review the Menu Items that Guests can see on your profile"
      />
      <Box sx={{ mt: 17 }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Card>
              <Typography variant="subtitle2" sx={{ color: "#151515" }}>
                Menu Classifications
              </Typography>
              <Box sx={{ mt: 3 }}>
                <ListItemButton
                  sx={{ border: "1px solid #151515", borderRadius: "12px" }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#151515",
                        fontWeight: 500,
                        fontSize: "12px",
                      }}
                    >
                      Tables
                    </Typography>
                    <Typography sx={{ color: "#8f8f8f", fontSize: "10px" }}>
                      4 Menu Items
                    </Typography>
                  </Box>
                </ListItemButton>
                <Divider sx={{ my: 2 }} />
                <Box>
                  <MenuCard active={true} />
                  <MenuCard active={true} />
                  <MenuCard active={true} />
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Button
                    onClick={handleOpen}
                    fullWidth
                    sx={{
                      border: "2px dashed #007E23",
                      color: "#007E23",
                      py: 2,
                      borderRadius: "12px",
                    }}
                  >
                    Add New Classification
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item md={8}>
            <Card>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="subtitle2" sx={{ color: "#151515" }}>
                  All Menu Items for Tables
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", columnGap: 3 }}
                >
                  <Typography
                    color="error"
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    Clear Filter
                  </Typography>
                  <Button
                    sx={{
                      border: "0.71px solid #75007E",
                      color: "#75007E",
                      bgcolor: "#FCEDFE",
                    }}
                  >
                    Add New Menu Item
                  </Button>
                </Box>
              </Box>
              <Box sx={{ mt: 5 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ color: "#8f8f8f" }}></TableCell>
                      <TableCell sx={{ color: "#8f8f8f" }}>Item Name</TableCell>
                      <TableCell sx={{ color: "#8f8f8f" }}>
                        Unit Price
                      </TableCell>
                      <TableCell sx={{ color: "#8f8f8f" }}>
                        Resv Count
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: "#8f8f8f" }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ border: "none" }}>
                      <TableCell sx={{ border: "none" }}>
                        <Avatar src={img1} variant="rounded" />
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "none",
                          color: "#151515",
                          fontWeight: 500,
                        }}
                      >
                        Odogwu Marley Table
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "none",
                          color: "#151515",
                          fontWeight: 500,
                        }}
                      >
                        N157,000
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "none",
                          color: "#151515",
                          fontWeight: 500,
                        }}
                      >
                        15
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          border: "none",
                        }}
                      >
                        <IconButton>
                          <img src={moreIcon} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={serveIcon} />
            <Typography
              sx={{
                color: "#151515",
                fontWeight: 500,
                fontSize: "12px",
                mt: 2,
              }}
            >
              What would you like to Name this new Menu Classification
            </Typography>
            <Box sx={{ width: "100%", mt: 3 }}>
              <TextField
                placeholder="What would you like to name this classification?"
                fullWidth
                InputProps={{
                  style: {
                    borderRadius: "12px",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                width: "80%",
                mt: 4,
                display: "flex",
                alignItems: "center",
                columnGap: 2,
              }}
            >
              <Button
                variant="contained"
                disabled
                sx={{ borderRadius: "7px", py: 1 }}
              >
                Add Classification
              </Button>
              <Button onClick={handleClose} sx={{px:8}}>
              <Typography color="error" sx={{ textDecoration: "underline" }}>
                Cancel
              </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default OurMenu;

const MenuCard = ({ active }) => {
  return (
    <>
      <ListItemButton
        selected
        sx={{
          border: "1px solid #151515",
          borderRadius: "12px",
          "&.Mui-selected": {
            border: "1px solid #75007E",
            color: "#75007E",
            mb: 2,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#151515",
                fontWeight: 500,
                fontSize: "12px",
                ...(active && {
                  color: "#75007E",
                }),
              }}
            >
              Tables
            </Typography>
            <Typography
              sx={{
                color: "#8f8f8f",
                fontSize: "10px",
                ...(active && {
                  color: "#75007E",
                }),
              }}
            >
              4 Menu Items
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <img src={editIcon} />
            </IconButton>
            <IconButton>
              <img src={delIcon} />
            </IconButton>
          </Box>
        </Box>
      </ListItemButton>
    </>
  );
};
