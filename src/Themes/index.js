import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#75007E",
    },
  },
  typography: {
    fontFamily: "outfit",
    color:'#fff',
    h1: {
      fontSize: "32px",
      color: "#121417",
      fontWeight: 900,
      color:'#fff'
    },
    h2: {
      fontSize: "24px",
      color: "#fff",
      fontWeight: 700,
      fontFamily: "butler",
    },
    h3:{
        fontSize: "20px",
        color: "#151515",
        fontWeight: 700,
        fontFamily: "outfit", 
      
    },
    h6:{
      fontSize: "12px",
      color: "#151515",
      fontWeight: 700,
      fontFamily: "outfit",
    },
    body1:{
        fontSize: "14px",
        color: "#fff",
        fontWeight: 400,
        fontFamily: "outfit", 
        lineHeight:'20px' 
    },
    body2:{
        fontSize: "13px",
        color: "#121417",
        fontWeight: 400,
        fontFamily: "outfit", 
      
    },
    subtitle2:{
        fontSize: "12px",
        color: "#8f8f8f",
        fontWeight: 500,
        fontFamily: "outfit",
    },
    button:{
        textTransform:'initial',
        fontFamily:'outfit',
        '&:hover':{
          border:'5px solid red'
        }
    }
  },


});

export default Theme;
