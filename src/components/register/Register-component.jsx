import React, { useState } from "react";
import { Container, Box, Button, TextField } from "@material-ui/core";
import { DecorationComponent } from "../decoration/Decoration-component";
import { useStyles, formStyle } from "../login/login-styles";
import { registerFormStyle } from "./register-styles";

export const RegisterComponent = () => {
  const { container, start, butttons, input, box } = useStyles();
  const [value, setValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target, event.target.value);
  };

  return (
    <>
      <Container className={container}>
        <Box className={start}>
          <DecorationComponent text="Zarejestruj sie"></DecorationComponent>
          <form style={registerFormStyle} value={value} onChange={handleChange}>
            <TextField
              className={input}
              id="email"
              label="Email"
              name="email"
              onChange={handleChange}
            />
            <TextField
              className={input}
              id="password"
              label="Haslo"
              name="password"
            />
            <TextField
              className={input}
              id="confirmPassword"
              label="Powtorz Haslo"
              name="confirmPassword"
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
