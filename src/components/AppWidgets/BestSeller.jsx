import React from 'react'
import Card from '../common/Card'
import { Box, Typography, Table, TableBody, TableCell, TableRow, Avatar } from '@mui/material'

const BestSeller = () => {
  return (
 <>
 <Card height="248px">
<Typography variant='h6' sx={{pb:1}}>Best Seller - Menu</Typography>
<Box className="hide_scrollbar" sx={{height:'200px', overflow:'scroll'}}>
<Table>
            <TableBody >
              <TableRow sx={{px:0, }}>
                <TableCell sx={{px:0}}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
                  >
                    <Avatar
                      sx={{
                        height: "20px",
                        border:'1px solid #75007E',
                        width: "20px",
                        borderRadius: "6px",
                      }}
                    />
                    <Typography
                      sx={{ fontWeight: 700, color: "#000", fontSize: "10px" }}
                    >
Estobar G Table
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontWeight: 500, fontSize: "10px", pr:0 }}>
                  77 Orders
                </TableCell>
               
              </TableRow>
              <TableRow sx={{px:0, }}>
                <TableCell sx={{px:0}}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
                  >
                    <Avatar
                      sx={{
                        height: "20px",
                        border:'1px solid #75007E',
                        width: "20px",
                        borderRadius: "6px",
                      }}
                    />
                    <Typography
                      sx={{ fontWeight: 700, color: "#000", fontSize: "10px" }}
                    >
Estobar G Table
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontWeight: 500, fontSize: "10px", pr:0 }}>
                  77 Orders
                </TableCell>
               
              </TableRow>
              <TableRow sx={{px:0, }}>
                <TableCell sx={{px:0}}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
                  >
                    <Avatar
                      sx={{
                        height: "20px",
                        border:'1px solid #75007E',
                        width: "20px",
                        borderRadius: "6px",
                      }}
                    />
                    <Typography
                      sx={{ fontWeight: 700, color: "#000", fontSize: "10px" }}
                    >
Estobar G Table
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontWeight: 500, fontSize: "10px", pr:0 }}>
                  77 Orders
                </TableCell>
               
              </TableRow>
              <TableRow sx={{px:0, }}>
                <TableCell sx={{px:0}}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
                  >
                    <Avatar
                      sx={{
                        height: "20px",
                        border:'1px solid #75007E',
                        width: "20px",
                        borderRadius: "6px",
                      }}
                    />
                    <Typography
                      sx={{ fontWeight: 700, color: "#000", fontSize: "10px" }}
                    >
Estobar G Table
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontWeight: 500, fontSize: "10px", pr:0 }}>
                  77 Orders
                </TableCell>
               
              </TableRow>
              <TableRow sx={{px:0, }}>
                <TableCell sx={{px:0}}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
                  >
                    <Avatar
                      sx={{
                        height: "20px",
                        border:'1px solid #75007E',
                        width: "20px",
                        borderRadius: "6px",
                      }}
                    />
                    <Typography
                      sx={{ fontWeight: 700, color: "#000", fontSize: "10px" }}
                    >
Estobar G Table
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontWeight: 500, fontSize: "10px", pr:0 }}>
                  77 Orders
                </TableCell>
               
              </TableRow>
           
            </TableBody>
          </Table>
</Box>
 </Card>
 </>
  )
}

export default BestSeller