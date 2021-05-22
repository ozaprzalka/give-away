import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";
import { database } from "../../base";

import { useStyles } from "./help-styles";
import { DecorationComponent } from "../decoration/Decoration-component";

const funds = document.querySelector("[name='fundations']");

export const HelpComponent = () => {
  const { container, start, butttons, wrap, textWrap, list } = useStyles();
  const [num, setNum] = useState("1");
  const [k, setk] = useState("");
  const [f, setf] = useState([]);
  const org = "organizations";
  const local = "local";

  const showFunds = (e, number) => {
    e.preventDefault();
    setNum(number);

    funds.style.minHeight = "315px";
  };

  const obj = {
    fundations: [{ nazwa: "test", opis: "dfdfs", tagi: "wqeweqe, qweqwe" }, {}],
    organizations: [
      { nazwa: "test", opis: "dfdfs", tagi: "wqeweqe, qweqwe" },
      {},
    ],
  };

  // const selectData = (num) => {
  //     const element = "";
  //     swich(num) {
  //         case "1":
  //             element = obj.fundations
  //             break;
  //     }
  //     return element;
  // }

  //   const getHelp = (help) => {
  //     setf('');
  //     const snapshot = database.collection(help).get();
  //     setf(snapshot.docs.map((doc) => doc.data()));
  //     console.log("fuckingFunds", f)
  //     return snapshot;
  //   }

  async function getData() {
    const snapshot = await database.collection("funds").get();
    setk(snapshot.docs.map((doc) => doc.data()));
    return snapshot;
  }
  const clickFunds = async () => {
    await getData();
    if (k.length) {
      const res = k.map((el) => ({
        value: el.title,
        text: el.text,
        tags: el.tags,
      }));
      console.log("object response: ", res);
    }
  };

  let entries = Object.entries(k);
  var newmap = new Map(entries);

  function previewData() {
    for (const [key, values] of newmap.entries()) {
        return (
      newmap.forEach((values, key) => {
        console.log(key, values);
          <Box className={list} style={{width: "400px", height: "400px"}}>
            <Box>
              <Typography variant="h5">{values.title}</Typography>
              <Typography variant="h6" style={{ margin: "20px 0" }}>
                {values.text}
              </Typography>
            </Box>
            <Typography variant="subtitle1">{values.tags}</Typography>
          </Box>
      // );
      }));
    }
   }

  // for(let [index, [key, value]] of entries.entries()){
  //  console.log("VALUE", value, "TITLE", value.title, "TEXT", value.text, "TAGS", value.tags);

  // }

  // for (let property in k) {
  // let arr = k[property][i];
  // console.log("property: ", arr)
  // for (let i = 0; i < arr.length; i++) {
  //     const obj = arr[i]
  //     console.log("obj: ", obj)
  //     for(let key in k){
  //         console.log("kurwa", k[key]);
  //   }
  //     for (let prop in obj) {
  //         if(obj.hasOwnProperty(prop)){
  //             console.log("propobj", prop, "obj")
  //         }
  //     }
  // }
  //      return (
  //     <Box className={list}>
  //     <Box>
  //       <Typography variant="h5">{k.title}</Typography>
  //       <Typography variant="h6" style={{ margin: "20px 0" }}>
  //       {k[i].text}
  //       </Typography>
  //     </Box>
  //     <Typography variant="subtitle1">{k[i].tags}</Typography>
  //   </Box>
  //     )
  // }
  // }
  //     for (let property in k) {
  //         let arr = k[property];
  //         console.log("property: ", arr)
  //         // for (let i = 0; i < arr.length; i++) {
  //         //     const obj = arr[i]
  //         //     console.log("obj: ", obj)
  //         //     for(let key in k){
  //         //         console.log("kurwa", k[key]);
  //         //   }
  //         //     for (let prop in obj) {
  //         //         if(obj.hasOwnProperty(prop)){
  //         //             console.log("propobj", prop, "obj")
  //         //         }
  //         //     }
  //         // }
  //     return (
  //     <Box className={list}>
  //     <Box>
  //       <Typography variant="h5">{k[property].title}</Typography>
  //       <Typography variant="h6" style={{ margin: "20px 0" }}>
  //       {k[property].text}
  //       </Typography>
  //     </Box>
  //     <Typography variant="subtitle1">{k[property].tags}</Typography>
  //   </Box>
  //     )
  // }
  // }

  // for (const property in k) {
  //     return (
  //     <Box className={list}>
  //     <Box>
  //       <Typography variant="h5">{k[property].title}</Typography>
  //       <Typography variant="h6" style={{ margin: "20px 0" }}>
  //       {k[property].text}
  //       </Typography>
  //     </Box>
  //     <Typography variant="subtitle1">{k[property].tags}</Typography>
  //   </Box>
  //     )
  // }

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
          <Button className={butttons}>Organizacjom pozarzadowym</Button>
          <Button className={butttons}>Lokalnym zbiorkom</Button>
        </Box>
        <Box className={textWrap}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </Box>
        {k.length
          ? newmap.forEach((values, key) => {
              console.log(key, "values",  values);
              return (
                <Box className={list}>
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
        {/* <Box>
          {newmap.forEach((values, key) => {
            console.log(key, values);
            return (
              <Box className={list}>
                <Box>
                  <Typography variant="h5">{values.title}</Typography>
                  <Typography variant="h6" style={{ margin: "20px 0" }}>
                    {values.text}
                  </Typography>
                </Box>
                <Typography variant="subtitle1">{values.tags}</Typography>
              </Box>
            );
          })}
        </Box> */}
        <Box>
            {k.length ? previewData() : null}
        </Box>
      </Container>
    </>
  );
};
