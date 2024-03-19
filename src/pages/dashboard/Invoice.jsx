import React, { useState } from "react";
import Header from "../../Layouts/Header";
import { Box, Button } from "@mui/material";
import Card from "../../components/common/Card";
import EmptyData from "../../components/common/EmptyData";
import NewInvoice from "../../components/Invoice/NewInvoice";

const Invoice = () => {
  const [data, setData] = useState(null);
  return (
    <>
      <Header
        title={"Generate Invoice"}
        caption={"Easily collect payment from walk-in VibezsUp users"}
      />

      <Box sx={{ mt: 15 }}>
        <Card>
          {!data || data?.length === 0 ? (
            <>
              <EmptyData
                text={
                  "You are yet to generate your first invoice. Use the button below to collect instant payment from walk-in VibezsUp users."
                }
                width={"50%"}
              />
              <Box align="center" sx={{ mt: 5 }}>
      <NewInvoice/>
              </Box>
            </>
          ) : (
            <></>
          )}
        </Card>
      </Box>
    </>
  );
};

export default Invoice;
