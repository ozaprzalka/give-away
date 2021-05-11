import { makeStyles } from "@material-ui/core";

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
    margin: "10px 20px",
    display: "flex",
    justifyContent: "flex-end",
  },
}));
