import React from "react";
import { Container, Box, Typography } from "@material-ui/core";

import { useStyles } from "./about-styles";
import { DecorationComponent } from "../decoration/Decoration-component";

export const AboutComponent = () => {
  const { container, start, image, signature, text } = useStyles();

  return (
    <>
      <Container className={container} name="about" disableGutters={true}>
        <Box className={start}>
          <DecorationComponent text="O nas!"></DecorationComponent>
          <Typography className={text} gutterBottom>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </Typography>
          <Box className={signature}></Box>
        </Box>
        <Box className={image}></Box>
      </Container>
    </>
  );
};
