import { styled, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const Container = styled(Box)({
  width: "calc(100% - 40px)",
  maxWidth: "640px",
  minWidth: "330px",
  display: "flex",
  minHeight: "300px",
  margin: "3.5vh auto",
  height: "calc(100vh - 100px)",
  background: "white",
  ".MuiDataGrid-root": {
    boxShadow: "0px 4px 6px rgb(0 0 0 / 10%)",
    fontSize: "0.78rem",
    letterSpacing: "0.017rem",
  },
});

export const Resources = styled(DataGrid)({
  ".MuiDataGrid-columnHeaderTitle": {
    color: "#2E3B52",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
