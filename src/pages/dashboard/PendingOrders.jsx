import React, { useState } from "react";
import Header from "../../Layouts/Header";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Popover,
  Typography,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";
import Card from "../../components/common/Card";
import EmptyData from "../../components/common/EmptyData";
import menuIcon from "../../assets/icons/more.svg";
import ViewDetails from "../../components/PendingOrders/ViewDetails";
import Modal from "@mui/material/Modal";
import summerImg from "../../assets/icons/summer.svg";
import Comingsoon from "../Comingsoon";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxSizing: "border-box",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxSizing: "border-box",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const PendingOrders = () => {
  const [data, setData] = useState(["sam"]);
  const [drawer, setDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>

    <Comingsoon/>
      {/* <Header
        title="Pending Orders"
        caption="Accept or Reject reservation requests from prospective guests"
      />

      <Box sx={{ mt: 17 }}>
        <Card>
          {!data || data.length === 0 ? (
            <>
              <Box
                sx={{ height: "600px", display: "grid", placeItems: "center" }}
              >
                <EmptyData
                  text="You currently have no pending reservation orders. 
All orders will appear here when a guest books a reservation from the app or online."
                  width="50%"
                />
              </Box>
            </>
          ) : (
            <>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#8f8f8f", fontSize: "13px" }}>
                      Reserved By
                    </TableCell>
                    <TableCell sx={{ color: "#8f8f8f", fontSize: "13px" }}>
                      Guest Size
                    </TableCell>
                    <TableCell sx={{ color: "#8f8f8f", fontSize: "13px" }}>
                      Resv Value
                    </TableCell>
                    <TableCell sx={{ color: "#8f8f8f", fontSize: "13px" }}>
                      Resv Time
                    </TableCell>
                    <TableCell sx={{ color: "#8f8f8f", fontSize: "13px" }}>
                      Resv Lead
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "#8f8f8f", fontSize: "13px" }}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Shukura El Shaleye</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>N75,900</TableCell>
                    <TableCell>Mar 4 - 07:30pm</TableCell>
                    <TableCell>VibezsUp App</TableCell>
                    <TableCell align="right">
                      <IconButton aria-describedby={id} onClick={handleClick}>
                        <img src={menuIcon} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </>
          )}
        </Card>
      </Box> */}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem
          sx={{ py: 1, color: "#151515", px: 2, mt: 2 }}
          onClick={() => {
            setDrawer(true);
            handleClose();
          }}
        >
          View Details
        </MenuItem>
        <MenuItem
          onClick={handleOpenModal}
          sx={{ py: 1, color: "#007E23", px: 2 }}
        >
          Approve Request
        </MenuItem>
        <MenuItem
          onClick={() => {
            setOpenModal2(true);
            handleClose();
          }}
          sx={{ py: 1, color: "#A71200", px: 2, mb: 2 }}
        >
          Decline Request
        </MenuItem>
      </Popover>

      <ViewDetails open={drawer} onClose={() => setDrawer(false)} />

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={summerImg} />
            <Typography
              variant="h2"
              sx={{ color: "#151515", mt: 2, textAlign: "center" }}
            >
              Order Successfully Accepted
            </Typography>
            <Typography
              sx={{
                color: "#8f8f8f",
                textAlign: "center",
                fontSize: "12px",
                mt: 1,
              }}
            >
              The guest has been informed and you can access the order details
              in the reservations section
            </Typography>
            <Button
              onClick={handleCloseModal}
              sx={{ mt: 2, textDecoration: "underline", color: "#A71200" }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openModal2}
        onClose={() => setOpenModal2(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                color: "#A71200",
                fontSize: "18px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Decline Order
            </Typography>
            <Typography sx={{ mt: 1, color: "#151515", textAlign: "center" }}>
              Kindly let the guest know why you are declining the order
            </Typography>

            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                multiline
                rows={8}
                placeholder="e.g “We are currently out of stock for your selected menu”"
                InputProps={{
                  style: {
                    background: "#d9d9d9",
                    borderRadius: "25px",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                columnGap: 5,
                mt: 3,
              }}
            >
              <Button
                sx={{
                  bgcolor: "#8f8f8f",
                  color: "#fff",
                  fontSize: "12px",
                  px: 3,
                }}
              >
                Decline Request
              </Button>
              <Button sx={{ textDecoration: "underline", color: "#A71200" }}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PendingOrders;
