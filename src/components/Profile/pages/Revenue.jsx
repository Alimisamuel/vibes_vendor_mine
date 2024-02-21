import { Box, Button, Grid, Typography , Table, TableBody, TableRow, TableCell} from "@mui/material";
import React from "react";
import creditIcon from '../../../assets/icons/credit.svg'
import debitIcon from '../../../assets/icons/debit.svg'

import { MdInfoOutline } from "react-icons/md";
import Info from "../../common/Info";

const Revenue = () => {
  return (
    <>
      <Box>
        <Typography variant="subtitle1">
          Revenue & Income <Info content="Explore your reservation revenue and income in this section.  Instantly settle your funds to your bank from here. Keep track of your transaction history seamlessly."/>
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={8}>
            <Grid item md={4.5}>
              <Box>
                <Box
                  sx={{
                    bgcolor: "#FCEDFE",
                    p: 3,
                    borderRadius: "8px",
                    boxSizing: "border-box",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontSize: "10px" }}>
                    Vibezs Balance
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700, fontSize: "20px", mt: 0.5 }}
                    color="primary"
                  >
                    N515,000
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, fontSize: "10px" }}
                  >
                    Withdraw Balance to Bank
                  </Button>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#FCEDFE",
                    p: 3,
                    mt: 3,
                    borderRadius: "8px",
                    boxSizing: "border-box",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontSize: "10px", fontWeight:600 }}>
                  Account Number
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700, fontSize: "16px", mt: 0.5 }}
                    color="primary"
                  >
               9123456789
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontSize: "10px", fontWeight:600 , mt:2}}>
                  Bank
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700, fontSize: "16px", mt: 0.5 }}
                    color="primary"
                  >
             Wema Bank
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontSize: "10px", fontWeight:600 , mt:2}}>
                  Account name
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700, fontSize: "16px", mt: 0.5 }}
                    color="primary"
                  >
         Velvett Lounge & Co
                  </Typography>
                  <Box sx={{mt:3, bgcolor:'#FFF2E5', border:'1px solid #FFB872', p:2, borderRadius:'20px'}}>
                    <Typography sx={{color:'#C56000', fontSize:'12px'}}>
                      All Balance withdrawal are settled into this bank details. Kindly contact your account manager to update the details if you need to.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={7.5}>
              <Box>
                        <Typography variant="subtitle1" sx={{ fontSize: "13px", fontWeight:600 , }}>
                  Transaction History
                  </Typography>
                  <Table>
<TableBody>

<TableRow>
  <TableCell>
    <Box sx={{display:'flex', alignItems:'center', columnGap:3}}>
<img src={creditIcon}/>
      <Box>
           <Typography variant="subtitle2" sx={{color:'#1a1c1f', fontWeight:700, fontSize:'13px'}}>Bank Withdrawal</Typography>
    <Typography variant="subtitle2">N124,000</Typography>
      </Box>
    </Box>

  </TableCell>
  <TableCell align="right">
    <Typography variant="subtitle2" >09:23</Typography>
    <Typography variant="subtitle2">Jul 28</Typography>
  </TableCell>
</TableRow>
<TableRow>
  <TableCell>
    <Box sx={{display:'flex', alignItems:'center', columnGap:3}}>
<img src={debitIcon}/>
      <Box>
           <Typography variant="subtitle2" sx={{color:'#1a1c1f', fontWeight:700, fontSize:'13px'}}>Bank Withdrawal</Typography>
    <Typography variant="subtitle2">N124,000</Typography>
      </Box>
    </Box>

  </TableCell>
  <TableCell align="right">
    <Typography variant="subtitle2" >09:23</Typography>
    <Typography variant="subtitle2">Jul 28</Typography>
  </TableCell>
</TableRow>
</TableBody>
                    </Table>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Revenue;
