import React from "react";
import { Container, Box, Button } from "@material-ui/core";

import { useStyles } from "./hero-styles";
import {DecorationComponent} from "../decoration/Decoration-component"
import { ColumnsComponent} from "./Columns-component"
import { StepsComponent} from "./Steps-component"



export const HeroComponent = () => {
  const { container, image, start, butttons } = useStyles();

  return (
    <>
      <Container className={container}>
        <Box className={image}></Box>
        <Box className={start}>
          <DecorationComponent text="Zacznij pomagac!" text2="Oddaj niechciane rzeczy w zaufane rece"></DecorationComponent>
          <Box>
            <Button href="/giveaway" className={butttons}>
              Oddaj rzeczy
            </Button>
            <Button href="fund" className={butttons}>
              Zorganizuj zbiorke
            </Button>
          </Box>
        </Box>
      </Container>
      <ColumnsComponent></ColumnsComponent>
      <StepsComponent></StepsComponent>
    </>
  );
};
