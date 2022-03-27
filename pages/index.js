import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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
        <p>
          <Button variant="contained">Contained</Button>
        </p>
      </main>
      <Divider />
      <Box sx={{ textAlign: "center", p: "1rem" }}>
        Developed by Godprogrammer with Next.js
      </Box>
    </div>
  );
}
