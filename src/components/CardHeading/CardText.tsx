import { Box } from "@mui/material";
<<<<<<< HEAD
import { cardsHeading } from "../../DummyData/CardsHeading";
<<<<<<< HEAD
import CardTextStyle from "./CardText.module.scss"
=======
=======
import { cardsHeading } from "../../DummyData/cardsHeading";
>>>>>>> 05cca8a71b19bcefb3a0f934d4554dba31b8b307
import CardTextStyle from "./CardText.module.scss";
>>>>>>> fa8efe1443fb583e5107eb2a4e0277446ad66f6c
const CardText = () => {
  return (
    <>
      <Box className={CardTextStyle.title}>
        {cardsHeading.map((e: any) => (
          <Box className={CardTextStyle.title__text}>{e.heading}</Box>
        ))}
      </Box>
    </>
  );
};
export default CardText;
