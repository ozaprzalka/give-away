import React, { useState } from "react";
import { Container, Box, Button, TextField } from "@material-ui/core";

import { useStyles } from "./contact-styles";
import { DecorationComponent } from "../decoration/Decoration-component";

const msg = document.querySelector("#msg");

export const ContactComponent = () => {
  const { container, start, buttons, input } = useStyles();
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const fetchProduct = async () => {
    const response =  await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      })
      const getResp = await response.json();
      console.log(getResp.status)
      if (getResp.status !== "success") {
          setError(getResp.errors[0].msg)
      }
      if (getResp.status === "success") {
          setError("Your message was sent successfully")
          msg.style.color= "green"
      }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
        ...prevState,
        [name]: value
      }));
  };

  return (
    <>
      <Container className={container} name="contact" disableGutters={true}>
        <Box className={start}>
          <DecorationComponent text="Skontaktuj sie z nami"></DecorationComponent>
          <Box className={start} id="msg" style={{color: "red", fontSize: "20px"}}>{error.length ? error : null}</Box>
          <form onChange={handleChange}>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "space-beteeen",
            }}
          >
            <TextField
              label="Imie"
              type="email"
              helper="Wpisz swoje imie"
              className={input}
              variant="outlined"
              name="name"
              value={data.name}
            ></TextField>
            <TextField
              label="Email"
              type="email"
              helper="Wpisz swoj email"
              className={input}
              variant="outlined"
              name="email"
              value={data.email}
            ></TextField>
          </Box>
          <TextField
            label="Wpisz swoja wiadomosc"
            multiline
            rows={5}
            variant="outlined"
            style={{ width: "100%", marginRight: "20px" }}
            name="message"
            value={data.message}
          />
          </form>
          <Button className={buttons} onClick={fetchProduct}>Wyslij</Button>
        </Box>
      </Container>
    </>
  );
};
