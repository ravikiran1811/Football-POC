import { Box } from "@mui/material";
import { SecondaryCard } from "../../DummyData/SecondaryCardData";
import ShowCardStyles from "./ShowCard.module.scss"
const ShowCard = () => {
    return (
        <>
            <Box className={ShowCardStyles.TotalCard}>
                {SecondaryCard.map((e: any) => (
                    <Box className={ShowCardStyles.TotalCard__cardStyle}
                    >
                        <Box className={ShowCardStyles.TotalCard__cardStyle__image}>
                            <img className={ShowCardStyles.TotalCard__cardStyle__image__imageStyles} src={e.image} />
                        </Box>
                        <Box className={ShowCardStyles.TotalCard__cardStyle__text}>
                            <Box className={ShowCardStyles.TotalCard__cardStyle__text__title}>
                                {e.title}
                            </Box>
                            <Box className={ShowCardStyles.TotalCard__cardStyle__text__description}>
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