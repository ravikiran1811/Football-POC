import styles from "./Header.module.scss";
import headerlogo from "../../assets/Frame 7.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { headerList } from "./HeaderData";
import { useNavigate } from "react-router-dom";
import { videoConstants } from "../../constants/homeVideoConstants";
import { useState } from "react";
import game from "../../assets/1100229001-preview.mp4";
const Header = () => {
  const navigate = useNavigate();
  const [showSublinks, setShowSublinks] = useState(false);
  return (
    <>
      <AppBar position="static" className={styles.container}>
        <Container maxWidth="xl" className={styles.container}>
          <Box className={styles.container__logo}>
            <img src={headerlogo} onClick={() => navigate("/home")} />
          </Box>
          <Box className={styles.container__content}>
            {headerList.map((page) => (
              <Box className={page.subLinks ? styles.PathButton : ""}>
                <Button
                  key={page.id}
                  onClick={() => {
                    if (!page.subLinks) {
                      navigate(page.path);
                    } else {
                      setShowSublinks(!showSublinks);
                    }
                  }}
                >
                  {page.name}
                  {page.subLinks && <Box className={styles.triangleDown}></Box>}
                </Button>
                {page.subLinks && showSublinks && (
                  <Box className={styles.pathCard}>
                    {page.subLinks.map((item, index) => (
                      <p key={index} onClick={() => navigate(item.name)}>
                        {item.name}
                      </p>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </AppBar>
      <Box>
        <Box className={styles.homeImage}>
          <video autoPlay muted loop>
            <source src={game}></source>
          </video>
        </Box>
        <Box className={styles.homeImage__textright}>
          <p>{videoConstants.videoMedia.rightText}</p>
        </Box>
        <Box className={styles.homeImage__textleft}>
          <p>{videoConstants.videoMedia.leftText}</p>
        </Box>
      </Box>
      </>
)
}
export default Header;
