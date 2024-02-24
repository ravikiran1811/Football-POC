import styles from "./Header.module.scss";
import { HeaderList } from "./HeaderData";
import headerlogo from "../../assets/Frame 7.png";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box, { boxClasses } from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
// import { CareerPath } from "./HeaderData";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import homeImage from "../../assets/image 25.png";
import game from '../../assets/1100229001-preview.mp4';
const Header = () => {
  const navigate = useNavigate();
  const [showSublinks, setShowSublinks] = useState(false);
  return (
    <>
      <AppBar position="static" className={styles.container}>
        <Container maxWidth="xl" className={styles.container}>
          <div className={styles.container__logo}>
            <img src={headerlogo} onClick={() => navigate("/home")} />
          </div>
           <Box className={styles.container__content}>
      {HeaderList.map((page, index) => (
        <Box className={index === 3 ? styles.PathButton : ''}>
        <Button 
        key={page.id}
        onClick={() => {
          if (index < 3) {
            navigate(page.path);
          } else if (index === 3) {
            setShowSublinks(!showSublinks); 
          }
        }}>
          {page.name}
          {index==3 && <div className={styles.triangleDown}>
          </div>}
        </Button>
        {index === 3 && showSublinks && HeaderList[3]?.subLinks && (
        <div className={styles.pathCard}>
            {HeaderList[3].subLinks.map((item, index) => (
              <p key={index} onClick={()=>navigate(item.name)}>{item.name}</p>
            ))}
        </div>
      )}
        </Box>
      ))}
    </Box>
        </Container>
      </AppBar>
      <Box>
        <div className={styles.homeImage}>
        <video autoPlay muted loop>
          <source src={game}></source>
        </video>
        </div>
        <div className={styles.homeImage__textright}>
          TODAY, TOMORROW
          <p>& ALWAYS.</p>
        </div>
        <div className={styles.homeImage__textleft}>
          UNVEIL THE REALM OF
          <p>INDIAN SOCCER</p>
        </div>
      </Box>
      <Box>
        <div>
            <div>
            <h1>Soccer Scout</h1>
            </div>
        Soccer Scout is dedicated to becoming the online destination for everything related to Indian football. Our mission is to elevate the sport's profile, foster a vibrant community, and drive growth by promoting awareness, appreciation, and participation in Indian football at all levels.  In the midst of India's burgeoning football resurgence, Indian Football Hub stands as a beacon of passion and purpose. With over 2000+ local, district, and state-level groups fuelling the grassroots movement, coupled with India's remarkable viewership figures, our platform serves as the nexus for this exhilarating revolution. We are committed to providing comprehensive coverage, fostering connections, and igniting enthusiasm that transcends borders, uniting fans and players alike in celebration of India's football renaissance.  Whether you're a fervent supporter, an aspiring athlete, a seasoned coach, or simply a curious observer eager to delve into the captivating world of Indian football, Soccer Scout beckons you to embark on this exhilarating journey of discovery, growth, and celebration. Together, let's propel Indian football to unprecedented heights of excellence and acclaim!  As Indian football scales new heights and captures the imagination of millions, Indian Football Hub invites you to be a part of this extraordinary journey. Whether you're a seasoned enthusiast, a budding player, or simply curious about the magic of the beautiful game, come join us as we celebrate India's footballing renaissance and embark on a thrilling quest to shape the future of football together.
        </div>
      </Box>
    </>
  );
};

export default Header;
