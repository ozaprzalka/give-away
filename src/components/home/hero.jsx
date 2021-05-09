import React from "react";
import { Container, makeStyles, Box, Button } from "@material-ui/core";
import asset1 from "../../assets/Home-Hero-Image.jpg";
import asset2 from "../../assets/Decoration.svg";

const useStyles = makeStyles(() => ({
  container: {
    minWidth: "100vw",
    margin: "10px 20px",
    display: "flex",
    justifyContent: "flex-end",
  },
  image: {
    backgroundImage: `url(${asset1})`,
    width: "50%",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  start: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "32px",
    flexDirection: "column",
  },
  decoration: {
    backgroundImage: `url(${asset2})`,
    width: "25%",
    height: "25px",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    margin: "10px 0",
  },
  butttons: {
    fontSize: "25px",
    margin: "20px",
    marginBottom: "0",
    padding: "30px 10px",
    border: "1px solid #3C3C3C",
  },
}));

export const HeroComponent = () => {
  const { container, image, start, decoration, butttons } = useStyles();

  return (
    <>
      <Container className={container}>
        <Box className={image}></Box>
        <Box className={start}>
          <Box>Zacznij pomagac!</Box>
          <Box>Oddaj niechciane rzeczy w zaufane rece</Box>
          <Box className={decoration}></Box>
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
    </>
  );
};
