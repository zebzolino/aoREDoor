import React from "react";
import { Global, css } from "@emotion/react";
import { Box } from "@mui/material";
import Logo from "./assets/logo.svg";
import { RouteMap } from "./routes";

const App: React.FC = () => {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #f0efef !important;
          }
        `}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3px",
          marginBottom: "10px",
        }}
      >
        <img src={Logo} alt="logo" />
      </Box>
      <RouteMap />
    </>
  );
};

export default App;
