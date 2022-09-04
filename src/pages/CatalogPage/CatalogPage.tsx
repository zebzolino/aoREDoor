import { GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { Container, Resources } from "./CatalogPage.style";

const columns: GridColDef[] = [
  {
    field: "thumbnail",
    headerName: "Capa do RED",
    headerAlign: "center",
    flex: 1,
    renderCell: (params: any) => (
      <img
        src={`https://api.portalmec.c3sl.ufpr.br/${params.value}`}
        alt="thumbnail"
      />
    ),
  },
  {
    field: "name",
    headerName: "Nome do RED",
    headerAlign: "center",
    flex: 2,
  },
  {
    field: "object_type",
    headerName: "Categoria",
    headerAlign: "center",
    flex: 1,
    headerClassName: "datagrid-class--header",
  },
  {
    field: "id",
    headerName: "Link",
    headerAlign: "center",
    flex: 1,
    renderCell: (params) => (
      <Link to={`/recurso/${params.value}`}>
        <OpenInNewIcon sx={{ color: "#F2720C" }} />
      </Link>
    ),
  },
];

export function CustomToolbar() {
  const navigate = useNavigate();
  return (
    <Button
      variant="text"
      style={{
        color: "#F2720C",
        borderColor: "#F2720C",
        marginTop: "10px",
        width: "100%",
      }}
      onClick={() => {
        navigate("/");
      }}
    >
      <ArrowBackIcon />
    </Button>
  );
}

export const Catolog: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://api.portalmec.c3sl.ufpr.br/v1/learning_objects")
      .then((response) => {
        const resources = [];
        const { data } = response;
        for (let i = 0; i < 5; i += 1) {
          resources.push(...data);
        }
        setRows(resources);
      });
  }, []);

  return (
    <Container
      sx={{
        "& .MuiDataGrid-cellContent": {
          margin: "auto",
        },
        "& .datagrid-class--header": {
          "& > .MuiDataGrid-columnSeparator": {
            visibility: "hidden",
          },
        },
        ".css-1yc7znk-MuiDataGrid-root .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell":
          {
            justifyContent: "center",
          },
      }}
    >
      <Resources
        rowHeight={120}
        rows={rows}
        columns={columns}
        pageSize={15}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </Container>
  );
};
