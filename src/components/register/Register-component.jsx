import React, { useState } from "react";
import { Container, Box, Button, TextField } from "@material-ui/core";
import { DecorationComponent } from "../decoration/Decoration-component";
import { useStyles, formStyle } from "../login/login-styles";
import { registerFormStyle } from "./register-styles";
import { useHistory } from "react-router";

import app from "../../base";
import { database } from "../../base";

export const RegisterComponent = () => {
  const { container, start, butttons, input, box } = useStyles();
  const history = useHistory();
  const [value, setValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue(prevState => ({
      ...prevState,
      [name]: value
  }));
  };

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
    if(value.confirmPassword !== value.password) {
      setError(prevState => ({
        ...prevState,
        confirmPassword: "Passwords are mismatched"
    }));
    }
    app
    .auth()
    .createUserWithEmailAndPassword(value.email, value.password)
    .then(() => {
      history.push("/home");
      let loggedIn = app.auth().currentUser;
      let user = {
        email: value.email,
        password: value.password,
        uid: loggedIn.uid,
        created: loggedIn.metadata.lastSignInTime,
      };
      database.collection("users").doc(user.uid).set(user);
    })
    .catch((error) => {
      setError(error.message);
    });
  }

  return (
    <>
      <Container className={container}>
        <Box className={start}>
          <DecorationComponent text="Zarejestruj sie"></DecorationComponent>
          <Box style={{color: "red"}}>{error.email}</Box>
          <Box style={{color: "red"}}>{error.password}</Box>
          <Box style={{color: "red"}}>{error.confirmPassword}</Box>
          <form style={registerFormStyle} onChange={handleChange}>
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
            <TextField
              className={input}
              id="confirmPassword"
              label="Powtorz Haslo"
              name="confirmPassword"
              type="password"
              value={value.confirmPassword}
            />
          </form>
          <Box className={box}>
            <Button onClick={validate}  className={butttons}>
              Zaloz konto
            </Button>
            <Button
            href="/login"
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
