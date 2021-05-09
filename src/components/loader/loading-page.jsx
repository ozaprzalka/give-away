import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { DualRing } from "react-spinners-css";

const useStyles = makeStyles(() => ({
  container: {
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Loading = () => {
  const { container } = useStyles();

  return (
    <Container className={container}>
      <DualRing color="#bde0fe" size={400} />
    </Container>
  );
};
