import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    minWidth: "100vw",
    display: "flex",
    justifyContent: "space-between",
  },
  start: {
    width: "30vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "90px",
    flexDirection: "column",
  },
}));
