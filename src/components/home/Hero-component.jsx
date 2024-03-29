import React from "react";
import { Container, Box, Button } from "@material-ui/core";

import { useStyles } from "./hero-styles";
import { DecorationComponent } from "../decoration/Decoration-component";
import { ColumnsComponent } from "./Columns-component";
import { StepsComponent } from "./Steps-component";
import { AboutComponent } from "./About-component";
import { HelpComponent } from "./Help-component";
import {ContactComponent } from "./Contact-component";
import { FooterComponent } from "./Footer-component";

export const HeroComponent = () => {
  const { container, image, start, butttons, wrap } = useStyles();

  return (
    <>
      <Container className={container}>
        <Box className={image}></Box>
        <Box className={start}>
          <DecorationComponent
            text="Zacznij pomagac!"
            text2="Oddaj niechciane rzeczy w zaufane rece"
          ></DecorationComponent>
          <Box className={wrap}>
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
      <AboutComponent></AboutComponent>
      <HelpComponent></HelpComponent>
      <ContactComponent></ContactComponent>
      <FooterComponent></FooterComponent>
    </>
  );
};
