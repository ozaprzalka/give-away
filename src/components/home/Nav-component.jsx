import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  MenuItem,
} from "@material-ui/core";
import { useStyles } from "./home-style";

export const NavComponent = () => {
  const { header, container } = useStyles();

  return (
    <>
      <Container className={container}>
        <AppBar position="static" className={header}>
          <Toolbar style={{ alignSelf: "flex-end" }}>
            <MenuItem component={Link} to="/login">
              Zaloguj
            </MenuItem>
            <MenuItem
              style={{ border: "1px solid yellow" }}
              component={Link}
              to="/register"
            >
              Zaloz konto
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
