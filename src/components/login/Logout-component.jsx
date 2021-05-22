import React from "react";
import { Container, Box, Button } from "@material-ui/core";
import { DecorationComponent } from "../decoration/Decoration-component";
import { useStyles } from "./login-styles";

export const LogoutComponent = () => {
  const { container, start, butttons } = useStyles();

  return (
    <>
      <Container className={container}>
        <Box className={start}>
          <DecorationComponent text="Wylogowanie nastapilo pomyslnie!"></DecorationComponent>
          <Box>
            <Button
            href="/"
              className={butttons}
              style={{ border: "1px solid #3C3C3C" }}
            >
              Strona glowna
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
