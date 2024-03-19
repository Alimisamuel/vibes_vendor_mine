import { TextField } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { alpha, styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  color: "#fff",
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#75007E",
      color: "#fff",
    },
  },
});

const CustomInput = ({ ...props }) => {
  return (
    <>
      <CssTextField
        {...props}
        variant="outlined"
        fullWidth
        id="custom-css-outlined-input"
        InputProps={{
          style: {
            border: props.error && "1px solid #EA8072",
            borderRadius: "12px",
            color: "#fff",
            fontFamily: "outfit",
          },
        }}
      />
    </>
  );
};

export default CustomInput;
