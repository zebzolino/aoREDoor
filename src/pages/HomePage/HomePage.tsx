import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Content } from "../../components/Content.style";
import { ContainerContent } from "../../components/ContainerContent.style";
import Illustration from "../../assets/illustration.svg";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Content
        style={{
          background:
            "linear-gradient(90deg, rgba(16,138,236,1) 30%, rgba(140,96,167,1) 90%)",
          maxHeight: "350px",
          minHeight: "338px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ContainerContent style={{ marginTop: 0, marginBottom: 0 }}>
            <h1
              style={{
                textAlign: "center",
                fontFamily: "'Roboto', sans-serif",
                color: "white",
                fontSize: "1.2rem",
                marginBottom: "30px",
              }}
            >
              Listamos todos os <br /> Recursos Educacionais Digitais ao seu
              redoor.
            </h1>
          </ContainerContent>
          <img
            style={{ height: "300px", zIndex: 900 }}
            src={Illustration}
            alt="ilustração"
          />
        </Box>
      </Content>
      <Content
        style={{
          background: "white",
          border: "none",
        }}
      >
        <ContainerContent
          style={{
            marginTop: "30px",
            marginBottom: "30px",
            fontFamily: "'Roboto', sans-serif",
            color: "#4d4d4d",
          }}
        >
          <h3>O que são Recursos Educacionais Digitais (RED)?</h3>
          <p>
            Recursos Educacionais Digitais, são arquivos ou mídias digitais que
            ficam disponíveis para uso com finalidades educacionais.{" "}
          </p>
          <p>
            Neste espaço você tem acesso a recursos produzidos por portais
            parceiros do MEC e por professores, ou seja, animações, animações e
            outros recursos digitais com propósito educativo.{" "}
          </p>

          <Button
            variant="outlined"
            style={{
              color: "#F2720C",
              borderColor: "#F2720C",
              width: "100%",
              marginTop: "10px",
            }}
            onClick={() => {
              navigate("/recursos");
            }}
          >
            VER RECURSOS
          </Button>
        </ContainerContent>
      </Content>
    </Grid>
  );
};
