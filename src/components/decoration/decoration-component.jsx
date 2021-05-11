import { Box } from "@material-ui/core";
import asset2 from "./Decoration.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  decoration: {
    backgroundImage: `url(${asset2})`,
    width: "30%",
    height: "25px",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    margin: "20px 0",
  },
}));

export const DecorationComponent = ({ text, text2 }) => {
  const { decoration } = useStyles();
  return (
    <>
      <Box>{text}</Box>
      <Box>{text2}</Box>
      <Box className={decoration}></Box>
    </>
  );
};
