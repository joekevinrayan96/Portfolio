import { Typography } from "@mui/material";
import { RefObject } from "react";
import classes from "./Link.module.css";

interface LinkType {
  onClick?: React.MouseEventHandler<HTMLElement>;
  topRef: RefObject<HTMLDivElement>;
  children: any;
}

const Link = (props: LinkType) => {
  const scrollDown = () => {
    window.scrollTo({
      top: props.topRef.current!.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Typography onClick={scrollDown} className={classes.Link}>
      {props.children}
    </Typography>
  );
};

export default Link;
