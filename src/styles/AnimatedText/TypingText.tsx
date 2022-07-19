import { Typography } from "@mui/material";
import classes from "./TypingText.module.css";

const TypingText = (props: any) => {
  return (
    <div className={classes.animTypewriter}>
      <Typography>{props.children}</Typography>
    </div>
  );
};

export default TypingText;
