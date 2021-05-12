import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    container: {
      minWidth: "100vw",
      margin: "10px 0",
      display: "flex",
      justifyContent: "center",
    },
    start: {
      marginTop: "5%",
      width: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "35px",
      flexDirection: "column",
    },
    butttons: {
      fontSize: "20px",
      margin: "20px",
      marginBottom: "0",
      padding: "20px 10px",
    },
    input: {
      maxWidth: "75%",
      padding: "40px 0",
      marginLeft: "30px",
    },
    box: {
      minWidth: "110%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  }));
 
  const formStyle = {
    height: "250px",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F0F1F1",
    padding: "40px",
  };

export { formStyle };
