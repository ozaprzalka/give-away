import { makeStyles } from "@material-ui/core";
import asset1 from "./Home-Hero-Image.jpg";

export const useStyles = makeStyles(() => ({
  container: {
    minWidth: "100vw",
    marginTop: "10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  image: {
    backgroundImage: `url(${asset1})`,
    width: "50%",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  start: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    flexDirection: "column",
  },
  butttons: {
    fontSize: "25px",
    margin: "20px",
    marginBottom: "0",
    padding: "30px 10px",
    border: "1px solid #3C3C3C",
  },
}));
