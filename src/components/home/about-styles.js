import { makeStyles } from "@material-ui/core";
import asset5 from "./People.jpg";
import asset6 from "./Signature.svg";

export const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#F0F1F1",
    minWidth: "100vw",
    margin: "10px 0",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  start: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    flexDirection: "column",
  },
  image: {
    backgroundImage: `url(${asset5})`,
    width: "50%",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  signature: {
    backgroundImage: `url(${asset6})`,
    width: "25%",
    height: "50px",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    margin: "20px 0",
    marginLeft: "50%",
  },
  text: {
    fontSize: "20px",
    textAlign: "center",
    margin: "20px",
  },
}));
