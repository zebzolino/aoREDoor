import { Box, Button, Divider, Grid, Rating, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import { ContainerContent } from "../../components/ContainerContent.style";
import { Content } from "../../components/Content.style";
import { LearningObjects } from "../../types/interfaces";

export const Resource: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [name, setName] = useState("");
  const [thumb, setThumb] = useState("");
  const [review, setReview] = useState(0);
  const [author, setAuthor] = useState("");
  const [rtype, setRstype] = useState("");
  const [keywords, setKeywords] = useState("");
  const [description, setDescription] = useState("");
  const [download, setDownload] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.portalmec.c3sl.ufpr.br/v1/learning_objects/${params.id}`
      )
      .then((response: AxiosResponse<LearningObjects>) => {
        setName(response.data.name);
        setThumb(response.data.thumbnail);
        setReview(response.data.review_average);
        setAuthor(response.data.author);
        setRstype(response.data.object_type);
        setDescription(response.data.description);

        const words = [];

        for (let i = 0; i < response.data.tags.length; i += 1) {
          words.push(response.data.tags[i].name);
        }

        setKeywords(words.join(", "));
        setDownload(response.data.default_attachment_location);
      });
  }, []);

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
          background: "white",
          border: "none",
        }}
      >
        <ContainerContent>
          <img
            src={`https://api.portalmec.c3sl.ufpr.br/${thumb}`}
            alt="thumbnail"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h1
            style={{
              color: "#F2720C",
              fontFamily: "'Roboto', sans-serif",
              fontSize: "1.2rem",
            }}
          >
            {name}
          </h1>
          <Box
            sx={{
              display: "flex",
              my: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Rating value={Number(review)} readOnly />
            <Typography sx={{ fontWeight: 700, fontSize: 25 }}>
              <Button
                variant="text"
                onClick={() => {
                  window.open(download, "_blank");
                }}
              >
                <DownloadIcon />
              </Button>
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", my: 1 }}>
            <Typography sx={{ fontWeight: 700, mr: 1 }}>Autor(es):</Typography>
            <Typography>{author}</Typography>
          </Box>

          <Box sx={{ display: "flex", my: 1 }}>
            <Typography sx={{ fontWeight: 700, mr: 1 }}>Categoria:</Typography>
            <Typography>{rtype}</Typography>
          </Box>

          <Box sx={{ display: "flex", my: 1 }}>
            <Typography sx={{ fontWeight: 700, mr: 1 }}>Tags:</Typography>
            <Typography>{keywords}</Typography>
          </Box>
          <Divider />
          <Typography sx={{ my: 2 }}>{description}</Typography>
          <Box
            sx={{
              display: "flex",
              my: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="outlined"
              style={{
                color: "#F2720C",
                borderColor: "#F2720C",
                marginTop: "10px",
                marginRight: "5px",
                flex: "1",
              }}
              onClick={() => {
                navigate("/recursos");
              }}
            >
              VOLTAR
            </Button>
            <Button
              variant="outlined"
              style={{
                color: "#F2720C",
                borderColor: "#F2720C",
                marginTop: "10px",
                marginLeft: "5px",
                flex: "1",
              }}
              onClick={() => {
                window.open(
                  `https://portalmec.c3sl.ufpr.br/recurso/${params.id}`,
                  "_blank"
                );
              }}
            >
              PÁGINA DO RED
            </Button>
          </Box>
        </ContainerContent>
      </Content>
    </Grid>
  );
};
