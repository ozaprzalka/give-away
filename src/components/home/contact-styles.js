import { makeStyles } from "@material-ui/core";
import asset7 from "./Form-Hero-Image.jpg";
import asset8 from "./Background-Contact-Form.jpg";


export const useStyles = makeStyles(() => ({
  container: {
    minWidth: "100vw",
    display: "flex",
    justifyContent: "flex-end",
    backgroundImage: `url(${asset8})`,
    // opacity: '0.2',
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    flexDirection: "row",
    position: "relative"
  },
  start: {
    opacity: "1",
    width: "50vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    margin: "40px",
    flexDirection: "column"
  },
  input: {
    maxWidth: "40%",
    margin: "30px 20px",
  },
  image: {
    backgroundImage: `url(${asset7})`,
    width: "40vw",
    marginLeft: "10%",
    opacity: "0.2",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "contain",
  },
  buttons: {
    width: "10%",
    margin: "20px 0",
    marginBottom: "0",
    padding: "5px 10px",
    border: "0.75px solid #3C3C3C",
    marginRight: "-40%",
  },
}));