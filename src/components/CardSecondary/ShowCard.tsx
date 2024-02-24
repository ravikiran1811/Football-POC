import { Box } from "@mui/material";
import { SecondaryCard } from "../../DummyData/SecondaryCardData";
import ShowCardStyles from "./ShowCard.module.scss"
const ShowCard = () => {
    return (
        <>
            <Box >
                {SecondaryCard.map((e: any) => (
                    <Box className={ShowCardStyles.cardStyle}
                    >
                        <Box className={ShowCardStyles.cardStyle__image}>
                            <img className={ShowCardStyles.cardStyle__image__imageStyles} src={e.image} />
                        </Box>
                        <Box className={ShowCardStyles.cardStyle__text}>
                            <Box className={ShowCardStyles.cardStyle__text__title}>
                                {e.title}
                            </Box>
                            <Box className={ShowCardStyles.cardStyle__text__description}>
                                {e.description}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    )
}
export default ShowCard;
