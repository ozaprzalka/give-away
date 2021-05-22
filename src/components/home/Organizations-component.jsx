import React from "react";
import { Container, Box, Typography } from "@material-ui/core";

import { useStyles } from "./help-styles";

export const OrganizationsComponent = () => {
  const { container, list } = useStyles();

  return (
    <>
      <Container className={container} name="organizations">
        <Box className={list}>
          <Box>
            <Typography variant="h5">Organizacja “Lorem Ipsum 1”</Typography>
            <Typography variant="h6" style={{margin: "20px 0"}}>
              Quis varius quam quisque id diam vel quam elementum pulvinar.
            </Typography>
          </Box>
          <Typography variant="subtitle1">Egestas, sed, tempus</Typography>
        </Box>
        <Box className={list}>
          <Box>
            <Typography variant="h5">Organizacja “Lorem Ipsum 2”</Typography>
            <Typography variant="h6" style={{margin: "20px 0"}}>
            Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.
            </Typography>
          </Box>
          <Typography variant="subtitle1">Ut, aliquam, purus, sit, amet</Typography>
        </Box>
        <Box className={list}>
          <Box>
            <Typography variant="h5">Organizacja “Lorem Ipsum 3”</Typography>
            <Typography variant="h6" style={{margin: "20px 0"}}>
            Scelerisque in dictum non consectetur a erat nam.
            </Typography>
          </Box>
          <Typography variant="subtitle1">Mi, quis, hendrerit, dolor</Typography>
        </Box>
      </Container>
    </>
  );
};
