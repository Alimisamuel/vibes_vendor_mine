
import { ThemeProvider } from '@mui/material';
import './App.css';
import Routes from './Routes/section';
import Theme from './Themes';
import { Provider } from "react-redux";
import { persistor, store } from './store/store';
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
   <>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
   <ThemeProvider theme={Theme}>
  <Routes/>
  </ThemeProvider>
  </PersistGate>
  </Provider>
   </>
    
  );
}

export default App;
