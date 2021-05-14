import React from "react";
import { Container, Box, Typography } from "@material-ui/core";

import { useStyles } from "./steps-styles";
import icon1 from "./Icon-1.svg";
import icon2 from "./Icon-2.svg";
import icon3 from "./Icon-3.svg";
import icon4 from "./Icon-4.svg";

export const FourStepsComponent = () => {
  const { container2, start2 } = useStyles();

  return (
    <>
      <Container className={container2}>
        <Box className={start2}>
          <Box
            style={{
              backgroundImage: `url(${icon1})`,
              height: "83px",
              width: "85px",
            }}
          ></Box>
          <Typography style={{ marginTop: "30px" }}>Wybierz rzeczy</Typography>
          <Box
            style={{
              border: "1px solid #707070",
              width: "40%",
              margin: "10px 0",
            }}
          ></Box>
          <Typography>ubrania, zabawki, sprzęt i inne</Typography>
        </Box>

        <Box className={start2}>
          <Box
            style={{
              backgroundImage: `url(${icon2})`,
              height: "83px",
              width: "85px",
            }}
          ></Box>
          <Typography style={{ marginTop: "30px" }}>Spakuj je</Typography>
          <Box
            style={{
              border: "1px solid #707070",
              width: "40%",
              margin: "10px 0",
            }}
          ></Box>
          <Typography>skorzystaj z worków na śmieci</Typography>
        </Box>
        <Box className={start2}>
          <Box
            style={{
              backgroundImage: `url(${icon3})`,
              height: "83px",
              width: "85px",
            }}
          ></Box>
          <Typography style={{ marginTop: "30px" }}>
            Zdecyduj komu chcesz pomóc
          </Typography>
          <Box
            style={{
              border: "1px solid #707070",
              width: "40%",
              margin: "10px 0",
            }}
          ></Box>
          <Typography>wybierz zaufane miejsce</Typography>
        </Box>
        <Box className={start2}>
          <Box
            style={{
              backgroundImage: `url(${icon4})`,
              height: "83px",
              width: "85px",
            }}
          ></Box>
          <Typography style={{ marginTop: "30px" }}>Zamów kuriera</Typography>
          <Box
            style={{
              border: "1px solid #707070",
              width: "40%",
              margin: "10px 0",
            }}
          ></Box>
          <Typography>kurier przyjedzie w dogodnym terminie</Typography>
        </Box>
      </Container>
    </>
  );
};
