import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  IconButton,
} from "@mui/material";
import "./App.css";
import Routes from "./Routes/section";
import Theme from "./Themes";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";
import ReportComplete from "./components/Custom/ReportComplete";
import SuccessAlert from "./components/Custom/SuccessAlert";
import bartender from "./assets/img/bartender.jpg";
import logo from "./assets/logo/logo2.svg";
import noPhone from "./assets/icons/no-phone.svg";
import buttonImg from "./assets/icons/button.svg";
import twitter from "./assets/icons/Vector (2).svg";
import insta from "./assets/icons/Vector (3).svg";
import linkedin from "./assets/icons/Vector (4).svg";

import { useMediaQuery, useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("1000"));
  return (
    <>
      {isMobile ? (
        <>
          <Box
            sx={{
              height: "100vh",
              background: `url('${bartender}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              px: 2,
            }}
          >
            <img src={logo} />

            <img src={noPhone} style={{ marginTop: "80px" }} />
            <Typography
              sx={{
                mt: 3,
                color: "#fff",
                fontFamily: "outfit",
                fontWeight: 600,
                fontSize: "27px",
                textAlign: "center",
              }}
            >
              Kindly use a laptop or tablet to access your Vendor Profile
            </Typography>
            <a href="https://www.vibezsup.com/vendor">
              <Button sx={{ mt: 5 }}>
                <img src={buttonImg} />
              </Button>
            </a>

            <Box
              sx={{
                mt: 7,
                display: "flex",
                columnGap: 2,
              }}
            >
              <IconButton>
                <a href="https://x.com/vibezsup?s=21&t=r0PdwUOKkFVjmk8OQNFNKA">
                  <img src={twitter} width={20} />
                </a>
              </IconButton>

              <IconButton>
                <a href="https://www.instagram.com/vibezsup?igsh=djFpeDRiMmFhejNq">
                  <img src={insta} width={20} />
                </a>
              </IconButton>
              <IconButton>
                <a href="https://www.linkedin.com/company/deck-socials/about/?viewAsMember=true">
                  <img src={linkedin} width={20} />
                </a>
              </IconButton>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            Components={{ error: ReportComplete, success: SuccessAlert }}
          >
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={Theme}>
                  <Routes />
                </ThemeProvider>
              </PersistGate>
            </Provider>
          </SnackbarProvider>
        </>
      )}
    </>
  );
}

export default App;
