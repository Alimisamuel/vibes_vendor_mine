import {
  Box,
  Button,
  Drawer,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableRow,
  TableCell,
  ListItem,
  Avatar,
} from "@mui/material";
import React from "react";
import cancelIcon from "../../assets/icons/cancel.svg";

const chipData = [
  "All",
  "Tsbles",
  "Platters",
  "Starters",
  "Main Course",
  "Tsbles",
  "Platters",
];
const NewInvoice = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Button
        variant="contained"
        sx={{ px: 6, borderRadius: "7px" }}
        onClick={toggleDrawer(true)}
      >
        Generate Invoice
      </Button>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
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
              New Invoice
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <img src={cancelIcon} />
            </IconButton>
          </Box>

          <Box sx={{ mt: 5, bgcolor: "#FCEDFE", p: 3, borderRadius: "12px" }}>
            <Typography color={"primary"} variant="subtitle1">
              Add Menu Item to Cart
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                columnGap: 2,
                alignItems: "center",
                overflow: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {chipData.map((item, index) => (
                <Box
                  sx={{
                    height: "28px",
                    border: "1px solid #8f8f8f",
                    width: "fit-content",
                    px: 3,
                    display: "grid",
                    placeItems: "center",
                    fontSize: "12px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: 500,
                    transition: "0.2s all linear",
                    color: "#000000b7",
                    "&:hover": {
                      border: "1px solid #75007E",
                      color: "#75007E",
                    },
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle2" color="primary">
                Tables - 2 Menu Items
              </Typography>
              <TableItem />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NewInvoice;

const TableItem = () => {
  return (
    <>
      <Table sx={{ mt: 2 }}>
        <TableBody>
          <TableRow>
            <TableCell align="center" sx={{ border: "none" }}>
              <Avatar
                variant="rounded"
                sx={{ height: "53px", width: "56px" }}
              />
            </TableCell>
            <TableCell sx={{ border: "none" }}>
              <Typography sx={{color:'#151515', fontWeight:500}}>Odogwu Marley Table</Typography>
            </TableCell>
            <TableCell sx={{ border: "none" }}></TableCell>
            <TableCell sx={{ border: "none" }}>
              <Typography>Add to cart</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
