import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Box,
  Button,
  TextField,
} from "@material-ui/core";
import asset2 from "../../assets/Decoration.svg";

const useStyles = makeStyles(() => ({
  container: {
    minWidth: "100vw",
    margin: "10px 20px",
    display: "flex",
    justifyContent: "center",
  },
  start: {
    marginTop: "5%",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "35px",
    flexDirection: "column",
  },
  decoration: {
    backgroundImage: `url(${asset2})`,
    width: "32%",
    height: "30px",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    margin: "40px 0",
  },
  butttons: {
    fontSize: "20px",
    margin: "20px",
    marginBottom: "0",
    padding: "20px 10px",
  },
  input: {
    maxWidth: "75%",
    padding: "40px 0",
    marginLeft: "30px",
  },
  box: {
    minWidth: "110%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const formStyle = {
  height: "250px",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#F0F1F1",
  padding: "40px",
};

export const LoginComponent = () => {
  const { container, start, decoration, butttons, input, box } = useStyles();
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
          <Box>Zaloguj sie</Box>
          <Box className={decoration}></Box>
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
