import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    minWidth: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
    flexDirection: "column",
  },
  start: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    flexDirection: "column",
    margin: "20px 0"
  },
  wrap: {
    width: "60%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "40px",
    flexDirection: "row",
  },
  butttons: {
    fontSize: "25px",
    margin: "0 40px",
    marginBottom: "0",
    padding: "0 40px",
  },
  textWrap: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "25px",
    flexDirection: "row",
    margin: "45px 0"
  },
  list: {
    height: "350px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
    margin: "40px 0",
    borderBottom: "2px solid #3C3C3C",
  }
}));
