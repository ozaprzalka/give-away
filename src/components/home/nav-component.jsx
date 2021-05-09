import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#ffffff",
    fontWeight: 600,
    color: "#000000",
    textAlign: "right",
    maxWidth: "40%",
    boxShadow: "none",
  },
  container: {
    minWidth: "100vw",
    margin: "10px 20px",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export const NavComponent = () => {
  const { header, container } = useStyles();

  return (
    <>
      <Container className={container}>
        <AppBar position="static" className={header}>
          <Toolbar>
            <MenuItem
              style={{ border: "1px solid yellow" }}
              component={Link}
              to="/register"
            >
              Zaloz konto
            </MenuItem>
            <MenuItem component={Link} to="/login">
              Zaloguj
            </MenuItem>
          </Toolbar>
          <Toolbar>
            <MenuItem component={Link} to="/">
              Start
            </MenuItem>
            <MenuItem component={Link} to="/ideas">
              O co chodzi?
            </MenuItem>
            <MenuItem component={Link} to="/about">
              O nas
            </MenuItem>
            <MenuItem component={Link} to="/organizations">
              Fundacja i organizacje
            </MenuItem>
            <MenuItem component={Link} to="/contact">
              Kontakt
            </MenuItem>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};
