import { Box } from "@mui/material";
import { cardsHeading } from "../../DummyData/CardsHeading";
<<<<<<< HEAD
import CardTextStyle from "./CardText.module.scss"
=======
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
