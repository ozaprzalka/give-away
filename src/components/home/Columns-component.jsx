import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import asset3 from "./3-Columns.png";
import { useStyles } from "./columns-styles";

export const ColumnsComponent = () => {
  const { container, start } = useStyles();

  return (
    <>
      <Container
        className={container}
        style={{
          backgroundImage: `url(${asset3})`,
          height: "384px",
          width: "100%",
        }}
      >
        <Box className={start}>
          <Typography variant="h1" gutterBottom>
            10
          </Typography>
          <Typography variant="h2" style={{ fontSize: "18px" }} gutterBottom>
            ODDANYCH WORKÓW
          </Typography>
          <Typography
            variant="h3"
            style={{ fontSize: "16px", marginTop: "30px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </Typography>
        </Box>
        <Box className={start}>
          <Typography variant="h1" gutterBottom>
            5
          </Typography>
          <Typography variant="h2" style={{ fontSize: "18px" }} gutterBottom>
            WSPARTYCH ORGANIZACJI
          </Typography>
          <Typography
            variant="h3"
            style={{ fontSize: "16px", marginTop: "30px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </Typography>
        </Box>
        <Box className={start}>
          <Typography variant="h1" gutterBottom>
            7
          </Typography>
          <Typography variant="h2" style={{ fontSize: "18px" }} gutterBottom>
            ZORGANIZOWANY ZBIÓREK
          </Typography>
          <Typography
            variant="h3"
            style={{ fontSize: "16px", marginTop: "30px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </Typography>
        </Box>
      </Container>
    </>
  );
};
