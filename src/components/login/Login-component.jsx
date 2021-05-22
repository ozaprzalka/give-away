import React, { useState, useCallback } from "react";
import { Container, Box, Button, TextField } from "@material-ui/core";
import { DecorationComponent } from "../decoration/Decoration-component";
import { useStyles, formStyle } from "./login-styles";
import app from "../../base";
import {useHistory} from "react-router";
import { Redirect } from "react-router";

export const LoginComponent = () => {
  const { container, start, butttons, input, box } = useStyles();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] =useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue(prevState => ({
      ...prevState,
      [name]: value
  }));
  };
  const history = useHistory();

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      app
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(() => {
          console.log(value.email)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    []
  );


  const validate = () => {
    setError(({password: "", email: ""}));
    const emailValidate = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    console.log(emailValidate.test(value.email));
    console.log(value)
    if (emailValidate.test(value.email) !== true) {
      setError(prevState => ({
        ...prevState,
        email: "Email is incorrect"
    }));
    }
    if (value.password.length < 6) {
      setError(prevState => ({
        ...prevState,
        password: "Password is too short"
    }));
    }
  }

  return (
    <>
      <Container className={container}>
        <Box className={start}>
          <DecorationComponent text="Zaloguj sie"></DecorationComponent>
          <Box style={{color: "red"}}>{error.email}</Box>
          <Box style={{color: "red"}}>{error.password}</Box>

          <form id="form" style={formStyle} onChange={handleChange}>
            <TextField
              className={input}
              id="email"
              label="Email"
              name="email"
              value={value.email}
            />
            <TextField
              className={input}
              id="password"
              label="Haslo"
              name="password"
              type="password"
              value={value.password}
            />
          </form>
          <Box className={box}>
            <Button href="/register" className={butttons}>
              Zaloz konto
            </Button>
            <Button
            onClick={validate}
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
