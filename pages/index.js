/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ColorModeContext } from "./_app";
import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import iconDarkImage from "../public/icon_dark.png";
import iconLightImage from "../public/icon_light.png";
import profileImage from "../public/profile_image.png";
import Chip from "@mui/material/Chip";

export default function Home() {
  const colorMode = useContext(ColorModeContext);
  const [isDarkMode, setDarkMode] = useState(false);
  const onToggleColorMode = () => {
    colorMode.toggleColorMode();
    setDarkMode(!isDarkMode);
  };

  return (
    <div>
      <Head>
        <title>Godprogrammer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Container maxWidth={false} disableGutters>
          <AppBar>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box sx={{ pt: 0.5 }}>
                  <img
                    src={isDarkMode ? iconDarkImage : iconLightImage}
                    width={36}
                    height={36}
                    alt={"icon image"}
                  />
                </Box>
                <h3>odprogrammer</h3>
              </Box>
              <IconButton aria-label="delete" onClick={onToggleColorMode}>
                <DarkModeIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Container>
      </header>
      <main className={styles.main}>
        <h3>Hello I’m Kiadtisak Buangam.</h3>

        <img
          src={profileImage}
          style={{ width: "10rem", height: "10rem" }}
          alt={"profile image"}
        />
        <p>
          I’m a Fullstack Developer I developed the web app, mobile app,
          backend, and have been developed some desktop apps.
        </p>
        <p>
          I have wide range of knowledge in software development, DevOps, and
          Infra.
        </p>
        <p>
          I’m a last year student of Computer Engineering King Mongkut's
          Institute of Technology Ladkrabang
        </p>
        <p>I’m currently looking for a Fullstack Developer job.</p>
        <h3>My Skills</h3>
        <p>
          <p>
            Proficient:
            <Chip color="primary" label="Flutter" />
            <Chip color="primary" label="Nest.js" />
            <Chip color="primary" label="Vue.js" />
            <Chip color="primary" label="Typescript" />
            <Chip color="primary" label="Javascript" />
            <Chip color="primary" label="Git" />
            <Chip color="primary" label="Linux" />
            <Chip color="primary" label="Linux OS" />
            <Chip color="primary" label="MySQL" />
            <Chip color="primary" label="Node.js" />
            <Chip color="primary" label="Firebase" />
          </p>
          <p>
            Intermediate:
            <Chip color="primary" label="Angular" />
            <Chip color="primary" label="React.js" />
            <Chip color="primary" label="React Native" />
            <Chip color="primary" label="Python" />
            <Chip color="primary" label="C" />
            <Chip color="primary" label="C++," />
            <Chip color="primary" label="Java" />
            <Chip color="primary" label="CI/CD" />
            <Chip color="primary" label="Mongo DB" />
            <Chip color="primary" label="OOP" />
            <Chip color="primary" label="Data structures & Algorithm" />
          </p>
          <p>
            Basic:
            <Chip color="primary" label="Electron.js" />
            <Chip color="primary" label="PHP" />
            <Chip color="primary" label="Docker" />
            <Chip color="primary" label="Kubernetes" />
            <Chip color="primary" label="C# .Net core MVC" />
          </p>
        </p>
      </main>
      <Divider />
      <Box sx={{ textAlign: "center", p: "1rem" }}>
        Developed by Godprogrammer with Next.js
      </Box>
    </div>
  );
}
