import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";

import { styled } from "@mui/system";

// Define the styled component
const CssOtpInput = styled(MuiOtpInput)(({ error, theme }) => ({
  "& input": {
    borderRadius: "10px",
    color: "#fff",
    fontFamily: "outfit",
    width: "30px",
    height: "38px",
    fontSize: "18px",
    border: error && "1px solid #EA8072",
    "&:focus": {
      // borderColor: error &&  "#E0E3E7",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000" ,
      borderRadius: "10px",
      ...(error && {
        borderColor: "#000",
      }),
    },
    "&:hover fieldset": {
      borderColor: error ? "#EA8072" : "#75007E",
    },
    "&.Mui-focused fieldset": {
      borderColor: error ? "#EA8072" : "#75007E",
      color: "#fff",
    },
  },
}));

const CustomOtpDark = ({ otp, handleChange, error, light, type }) => {
  console.log(light);
  return (
    <>
      <CssOtpInput
        value={otp}
        onChange={handleChange}
        length={6}
        TextFieldsProps={{
          type: type ? "password" : "number",
          inputProps: {
            style: {
              borderRadius: "10px",
              color: light ? "#151515" : "#fff",
              fontFamily: "outfit",
              width: "30px",
              height: "38px",
              fontSize: "18px",
            },
          },
          size: "small",
        }}
        error={error}
        theme={light}
      />
    </>
  );
};

export default CustomOtpDark;
