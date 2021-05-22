import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
  },
  container2: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#F0F1F1",
    flexDirection: "row",
    marginBottom: "30px",

  },
  start: {
    width: "100%",
    margin: "50px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  wrap: {
    width: "60%",
    marginBottom: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    flexDirection: "column",
  },
  start2: {
    width: "20%",
    height: "300px",
    margin: "40px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "32px",
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
