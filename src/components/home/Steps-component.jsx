import React from "react";
import { Container, Box, Button } from "@material-ui/core";

import { useStyles } from "./steps-styles";
import { DecorationComponent } from "../decoration/Decoration-component";
import { FourStepsComponent } from "./Four-steps-component";

export const StepsComponent = () => {
  const { container, start, butttons, wrap } = useStyles();

  return (
    <>
      <Container className={container} disableGutters={true} name="steps">
        <Box className={start}>
          <Box className={wrap}>
            <DecorationComponent text="Wystarczą 4 proste kroki"></DecorationComponent>
          </Box>
          <FourStepsComponent style={{ width: "100%" }}></FourStepsComponent>
          <Button href="/giveaway" className={butttons}>
            Oddaj rzeczy
          </Button>
        </Box>
      </Container>
    </>
  );
};
