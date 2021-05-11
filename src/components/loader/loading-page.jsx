import React from "react";
import { Container } from "@material-ui/core";
import { DualRing } from "react-spinners-css";
import { useStyles } from "./loading-styles";

export const Loading = () => {
  const { container } = useStyles();

  return (
    <Container className={container}>
      <DualRing color="#bde0fe" size={400} />
    </Container>
  );
};
