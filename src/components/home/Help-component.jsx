import React, { useState } from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { database } from "../../base";
import { useStyles } from "./help-styles";
import { DecorationComponent } from "../decoration/Decoration-component";

export const HelpComponent = () => {
  const { container, start, butttons, wrap, textWrap, list } = useStyles();
  const [collection, setCollection] = useState("");
  const funds = "funds";
  const org = "organizations";
  const local = "locals";

  async function getData(search) {
    const snapshot = await database.collection(search).get();
   
    return snapshot;
  }
  const clickFunds = async () => {
    setCollection("");
    const getCollection = await getData(funds);
    setCollection(getCollection.docs.map((doc) => doc.data()));
  };
  const clickOrganizations = async () => {
    setCollection("");
    const getCollection = await getData(org);
    setCollection(getCollection.docs.map((doc) => doc.data()));
  };
  const clickLocals = async () => {
    setCollection("");
    const getCollection = await getData(local);
    setCollection(getCollection.docs.map((doc) => doc.data()));
  };

  return (
    <>
      <Container className={container} name="help">
        <Box className={start}>
          <Box className={start} style={{ width: "50%" }}>
            <DecorationComponent text="Komu pomagamy?"></DecorationComponent>
          </Box>
        </Box>
        <Box className={wrap}>
          <Button className={butttons} onClick={clickFunds}>
            Fundacjom
          </Button>
          <Button className={butttons} onClick={clickOrganizations}>Organizacjom pozarzadowym</Button>
          <Button className={butttons} onClick={clickLocals}>Lokalnym zbiorkom</Button>
        </Box>
        <Box className={textWrap}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </Box>
        {collection.length
          ? collection.map((values, key) => {
              console.log(key, "values",  values);
              return (
                <Box className={list} key={key}>
                  <Box>
                    <Typography variant="h5">{values.title}</Typography>
                    <Typography variant="h6" style={{ margin: "20px 0" }}>
                      {values.text}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1">{values.tags}</Typography>
                </Box>
              );
            })
          : null}
      </Container>
    </>
  );
};
