import React from "react";
import { Container, Box, Typography } from "@material-ui/core";

import { useStyles } from "./footer-styles";

export const FooterComponent = () => {
  const { container, facebook, instagram } = useStyles();

  return (
    <>
      <Container className={container} name="footer">
    <Box style={{marginRight: "30%", width: "50%", textAlign: "right"}}>Copyright by CodersLab & Aleksandra Zaprzalka</Box>
    {/* <Box></Box> */}
        <Box className={facebook}></Box>
        <Box className={instagram}></Box>
    {/* </Box> */}
      </Container>
    </>
  );
};