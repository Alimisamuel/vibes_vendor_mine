import React from "react";
import Card from "../common/Card";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

const Upcoming = () => {
  return (
    <>
      <Card height="248px">
        <Typography variant="h6">Upcoming Reservations</Typography>

        <Box className="hide_scrollbar" sx={{ mt: 2, overflow: "scroll", height:'200px' }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Box
                    sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
                  >
                    <Avatar
                      sx={{
                        height: "26px",
                        width: "26px",
                        borderRadius: "2.5px",
                      }}
                    />
                    <Typography
                      sx={{ fontWeight: 700, color: "#000", fontSize: "12px" }}
                    >
                      Assantee Sana{" "}
                      <span style={{ color: "#8f8f8f" }}>+5 others</span>
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: "12px" }}>
                  N313,500
                </TableCell>
                <TableCell
                  sx={{
                    color: "#75007E",
                    fontWeight: 700,
                    textDecoration: "underline",
                  }}
                >
                  View Reservation
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box
                    sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
                  >
                    <Avatar
                      sx={{
                        height: "26px",
                        width: "26px",
                        borderRadius: "2.5px",
                      }}
                    />
                    <Typography
                      sx={{ fontWeight: 700, color: "#000", fontSize: "12px" }}
                    >
                      Assantee Sana{" "}
                      <span style={{ color: "#8f8f8f" }}>+5 others</span>
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: "12px" }}>
                  N313,500
                </TableCell>
                <TableCell
                  sx={{
                    color: "#75007E",
                    fontWeight: 700,
                    textDecoration: "underline",
                  }}
                >
                  View Reservation
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box
                    sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
                  >
                    <Avatar
                      sx={{
                        height: "26px",
                        width: "26px",
                        borderRadius: "2.5px",
                      }}
                    />
                    <Typography
                      sx={{ fontWeight: 700, color: "#000", fontSize: "12px" }}
                    >
                      Assantee Sana{" "}
                      <span style={{ color: "#8f8f8f" }}>+5 others</span>
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: "12px" }}>
                  N313,500
                </TableCell>
                <TableCell
                  sx={{
                    color: "#75007E",
                    fontWeight: 700,
                    textDecoration: "underline",
                  }}
                >
                  View Reservation
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box
                    sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
                  >
                    <Avatar
                      sx={{
                        height: "26px",
                        width: "26px",
                        borderRadius: "2.5px",
                      }}
                    />
                    <Typography
                      sx={{ fontWeight: 700, color: "#000", fontSize: "12px" }}
                    >
                      Assantee Sana{" "}
                      <span style={{ color: "#8f8f8f" }}>+5 others</span>
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: "12px" }}>
                  N313,500
                </TableCell>
                <TableCell
                  sx={{
                    color: "#75007E",
                    fontWeight: 700,
                    textDecoration: "underline",
                  }}
                >
                  View Reservation
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Card>
    </>
  );
};

export default Upcoming;
