import { ThemeProvider } from "@mui/material";
import "./App.css";
import Routes from "./Routes/section";
import Theme from "./Themes";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";
import ReportComplete from "./components/Custom/ReportComplete";
import SuccessAlert from "./components/Custom/SuccessAlert";

function App() {
  return (
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
  );
}

export default App;
