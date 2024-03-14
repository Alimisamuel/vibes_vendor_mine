import React from "react";
import Card from "../common/Card";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
  TableBody,
  TableContainer,
} from "@mui/material";

const ReservationView = () => {
  return (
    <>
      <Card>
        <Typography
          sx={{ color: "#151515", fontWeight: 700, fontSize: "14px" }}
        >
          Reservations View
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TableContainer sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    Mon
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    Tue
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    Wed
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    Thur
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    Fri
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    Sat
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    Sun
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip cancelled={true} />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip reserved={true} />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip cancelled={true} />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip reserved={true} />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip cancelled={true} />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip reserved={true} />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "none",
                      color: "#8f8f8f",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    <DateChip />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </>
  );
};

export default ReservationView;

const DateChip = ({ reserved, cancelled }) => {
  return (
    <>
      <Box
        align="right"
        sx={{
          border: "1.5px solid #8f8f8f",
          borderRadius: "10px",
          width: "54px",
          height: "54px",
          ...(reserved && {
            border: "1.5px solid #75007E",
          }),
          ...(cancelled && {
            opacity: 0.3,
          }),
        }}
      >
        <Box
          align="center"
          sx={{
            bgcolor: "#75007E",
            borderRadius: "50%",
            width: "14px",
            height: "14px",
            color: "#fff",
            fontSize: "9px",
            mt: -1,
            zIndex: "-1000px",
          }}
        >
          5
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
              color: "#8f8f8f",
              fontWeight: 700,
              textAlign: "center",
              ...(reserved && {
                color: " #75007E",
              }),
            }}
          >
            Feb
          </Typography>
          <Typography
            sx={{
              fontSize: "10px",
              color: "#8f8f8f",
              fontWeight: 700,
              textAlign: "center",
              ...(reserved && {
                color: " #75007E",
              }),
            }}
          >
            27
          </Typography>
        </Box>
      </Box>
    </>
  );
};
