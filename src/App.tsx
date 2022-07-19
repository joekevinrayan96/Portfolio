import React, { useRef } from "react";
import "./App.css";
import coverImage from "./assets/cover.jpg";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import profilePhoto from "./assets/profile-photo.jpg";
import NavBar from "./components/NavBar";
import About from "./components/About";
import TypingText from "./styles/AnimatedText/TypingText";

function App() {
  const aboutSection = useRef<HTMLDivElement>(null);
  const skillsSection = useRef<HTMLDivElement>(null);
  const educationSection = useRef<HTMLDivElement>(null);
  const experienceSection = useRef<HTMLDivElement>(null);
  const contactmeSection = useRef<HTMLDivElement>(null);

  const styles = {
    paperContainer: {
      // backgroundImage: `url(${coverImage})`,
      height: "500px",
      width: "100%",
      top: "34px",
    },
  };

  return (
    <>
      <NavBar
        aboutRef={aboutSection}
        skillsRef={skillsSection}
        educationRef={educationSection}
        experienceRef={experienceSection}
        contactmeRef={contactmeSection}
      />

      <Paper variant="elevation" elevation={5} style={styles.paperContainer}>
        <TypingText>TimeBuy</TypingText>
        <br />

        <p style={{ zIndex: 1, position: "absolute" }}>Loading...</p>
        <img
          src={coverImage}
          alt="cover"
          style={{
            height: "500px",
            width: "100%",
            position: "absolute",
            zIndex: 0,
            top: "34px",
          }}
        />
      </Paper>
      <Avatar
        alt="profile photo"
        src={profilePhoto}
        sx={{ width: 192, height: 192 }}
      />
      <About ref={aboutSection} />
      <h2>Competencies</h2>
      <p>Write about your skills</p>
      <h2>Education</h2>
      <p>Write about your education</p>
      <Accordion>
        <AccordionSummary>
          <Typography>Certfications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>React Certification</Typography>
        </AccordionDetails>
      </Accordion>
      <h2>Projects</h2>
      <Card>Next JS playground</Card>
      <h2>Experience</h2>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="BuildBuddy"></Avatar>
          </ListItemAvatar>
          <ListItemText>
            <Typography>BuildBuddy Pty Ltd</Typography>
          </ListItemText>
        </ListItem>
      </List>
      <h2>Contact Me</h2>
      <form>
        <p>Name</p>
        <input type="text" />
        <p>Email</p>
        <input type="text" />
        <br />
        <button>Submit</button>
        <br />
      </form>
      <br />
      {/*This is footer*/}
      <Paper variant="elevation" elevation={3}>
        {" "}
        {/*make sure to change the paper background color using useStyles hook. follow the url : https://react.school/material-ui/paper */}
        <Avatar alt="linkedin"></Avatar>
        <Typography>LinkedIn</Typography>
      </Paper>
    </>
  );
}

export default App;
