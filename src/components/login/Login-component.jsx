import React, { useState } from "react";
import { Container, Box, Button, TextField } from "@material-ui/core";
import { DecorationComponent } from "../decoration/Decoration-component";
import { useStyles, formStyle } from "./login-styles";

export const LoginComponent = () => {
  const { container, start, butttons, input, box } = useStyles();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target, event.target.value);
  };
  return (
    <>
      <Container className={container}>
        <Box className={start}>
          <DecorationComponent text="Zaloguj sie"></DecorationComponent>
          <form style={formStyle} value={value} onChange={handleChange}>
            <TextField
              className={input}
              id="email"
              label="Email"
              name="email"
            />
            <TextField
              className={input}
              id="password"
              label="Haslo"
              name="password"
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
