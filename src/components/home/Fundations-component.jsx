import React, {useState, useEffect} from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { database } from "../../base";

import { useStyles } from "./help-styles";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";

export const FundationsComponent = ({text}) => {
  const { container, list } = useStyles();
  const document = database.collection("funds").doc("1");
  const [funds, setFunds] = useState('');
  const [kk, setk] = useState('');
  const [eh, seteh] = useState('');
  const q = database.collection("funds");

//   async function getData() {
//     const snapshot = await database.collection('funds').get()
//     setk(snapshot.docs.map(doc => doc.data()))
//     return snapshot;
// }
// const clickFunds = () => {
//     getData()
// }
// useEffect(() => {
//     async function getData() {
//         const snapshot = await database.collection('funds').get()
//         setk(snapshot.docs.map(doc => doc.data()))
//         return snapshot;
//     }
//     return getData();
//   }, []);

  return (
    <>
      <Container className={container} name="fundations">
        <Box className={list}>
            {/* {
                text.map(el => <SuperBox title={el.title} desc={el.desc} tags={el.tags}/></SuperBox>))
            } */}
          <Box>
            <Typography variant="h5">{funds.title}</Typography>
            <Typography variant="h6" style={{ margin: "20px 0" }}>
              {funds.text}
            </Typography>
          </Box>
          <Typography variant="subtitle1">{funds.tags}{console.log("kk: ", kk)}</Typography>
        </Box>
        <Box className={list}>
          <Box>
            <Typography variant="h5">Fundacja “Lorem Ipsum 2”</Typography>
            <Typography variant="h6" style={{ margin: "20px 0" }}>
            Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.
            </Typography>
          </Box>
          <Typography variant="subtitle1">Ut, aliquam, purus, sit, amet</Typography>
        </Box>
        <Box className={list}>
          <Box>
            <Typography variant="h5">Fundacja “Lorem Ipsum 3”</Typography>
            <Typography variant="h6" style={{ margin: "20px 0" }}>
            Scelerisque in dictum non consectetur a erat nam.
            </Typography>
          </Box>
          <Typography variant="subtitle1">Mi, quis, hendrerit, dolor</Typography>
        </Box>
      </Container>
    </>
  );
};
