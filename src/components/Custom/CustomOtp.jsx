import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";

const CustomOtp = ({ otp, handleChange, error, light , type}) => {
  return (
    <>
      <MuiOtpInput
        style={{ borderRadius: "10px" }}
        value={otp}
        onChange={handleChange}
        length={6}
        TextFieldsProps={{
          type: type=== true ? "password" : "number",
          inputProps: {
            style: {
              border: error
                ? `2px solid #EA8072`
                : `1.5px solid ${light ? "#151515" : "#fff "}`,
              borderRadius: "10px",
              color: light ? "#151515" : "#fff",
              fontFamily: "outfit",
              width: "30px",
              height: "38px",
              fontSize: "18px",
            },
          },

          size: "small",
          border: "1px solid #fff",
        }}
      />
    </>
  );
};

export default CustomOtp;
