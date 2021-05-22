import { makeStyles } from "@material-ui/core";
import asset9 from "./Facebook.svg";
import asset10 from "./Instagram.svg";

export const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#ffffff",
    fontWeight: 600,
    color: "#000000",
    textAlign: "right",
    maxWidth: "40%",
    boxShadow: "none",
  },
  container: {
    minWidth: "100vw",
    margin: "10px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  facebook: {
    backgroundImage: `url(${asset9})`,
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    width: "30px",
    height: "30px",
  },
  instagram: {
    backgroundImage: `url(${asset10})`,
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    width: "30px",
    height: "30px",
  },
}));
