/* eslint-disable */
import React, { useCallback } from "react";
import { Container, Box, Button } from "@material-ui/core";
import { DecorationComponent } from "../decoration/Decoration-component";
import { useStyles } from "./login-styles";
import app from "../../base";

export const MemberComponent = () => {
  const { container, start, butttons } = useStyles();

  const handleLogout = useCallback(async () => {
    try {
      app.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Container className={container}>
        <Box className={start}>
          <DecorationComponent text="Witaj!"></DecorationComponent>
          <Box>
            <Button
              onClick={handleLogout}
              href="/logout"
              className={butttons}
              style={{ border: "1px solid #3C3C3C" }}
            >
              Wyloguj
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
