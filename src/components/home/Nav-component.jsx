import React from "react";
import { Link } from "react-router-dom";
import { Container, AppBar, Toolbar, MenuItem } from "@material-ui/core";
import { useStyles } from "./home-style";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const NavComponent = () => {
  const { header, container } = useStyles();

  const scrollToSteps = () => {
    scroller.scrollTo("steps", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToAbout = () => {
    scroller.scrollTo("about", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToHelp = () => {
    scroller.scrollTo("help", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

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
          <Toolbar style={{ alignSelf: "flex-end" }}>
            <MenuItem component={Link} to="/">
              Start
            </MenuItem>
            <MenuItem onClick={scrollToSteps}>
              O co chodzi?
            </MenuItem>
            <MenuItem onClick={scrollToAbout}>
              O nas
            </MenuItem>
            <MenuItem onClick={scrollToHelp}>
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
