import { AppBar } from "@mui/material";
import { RefObject, useRef } from "react";
import Link from "../styles/Link/Link";

interface NavBarType {
  aboutRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  educationRef: RefObject<HTMLDivElement>;
  experienceRef: RefObject<HTMLDivElement>;
  contactmeRef: RefObject<HTMLDivElement>;
}

const NavBar = (props: NavBarType) => {
  const resumeSection = useRef<HTMLDivElement>(null);

  const downloadResume = () => {
    alert("Your resume is downloaded!");
  };

  return (
    <AppBar
      position="static"
      sx={{
        flexDirection: "row",
        justifyContent: "flex-end",
        // background: "#7E685A",
        background: "#251a10",
      }}
    >
      <Link topRef={props.aboutRef}>About</Link>
      <Link topRef={props.skillsRef}>Skills</Link>
      <Link topRef={props.educationRef}>Education</Link>
      <Link topRef={props.experienceRef}>Experience</Link>
      <Link topRef={props.contactmeRef}>Contact Me</Link>

      <Link onClick={downloadResume} topRef={resumeSection}>
        Resume
      </Link>
    </AppBar>
  );
};

export default NavBar;
