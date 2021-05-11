import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  TextField,
} from "@material-ui/core";
import {DecorationComponent} from "./../decoration/decoration-component"
import { useStyles, formStyle } from "./login-styles";

export const LoginComponent = () => {
  const { container, start, butttons, input, box } = useStyles();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChange2 = (event) => {
    setPass(event.target.value);
  };
  return (
    <>
      <Container className={container}>
        <Box className={start}>
          <DecorationComponent text="Zaloguj sie"></DecorationComponent>
          <form style={formStyle}>
            <TextField
              className={input}
              id="email"
              label="Email"
              value={name}
              onChange={handleChange}
            />
            <TextField
              className={input}
              id="password"
              label="Haslo"
              value={pass}
              onChange={handleChange2}
            />
          </form>
          <Box className={box}>
            <Button href="/register" className={butttons}>
              Zaloz konto
            </Button>
            <Button
              className={butttons}
              style={{ border: "1px solid #3C3C3C" }}
            >
              Zaloguj sie
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
