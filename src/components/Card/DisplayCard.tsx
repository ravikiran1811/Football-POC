import { Box } from "@mui/material";
import { card } from "../../DummyData/CardData";
import DisplayCardStyles from "./DisplayCard.module.scss"
const DisplayCard = () => {
    return (
        <>
            <Box >
                {card.map((e: any) => (
                    <Box className={DisplayCardStyles.cardStyle}
                    >
                        <Box className={DisplayCardStyles.cardStyle__image}>
                            <img className={DisplayCardStyles.cardStyle__image__imageStyles} src={e.image} />
                        </Box>
                        <Box className={DisplayCardStyles.cardStyle__text__title}>
                        <Box className={DisplayCardStyles.cardStyle__text__title}>
                            {e.title}
                        </Box>
                        <Box className={DisplayCardStyles.cardStyle__text__description}>
                            {e.description}
                        </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    )
}
export default DisplayCard;
