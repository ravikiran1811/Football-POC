import { Box } from "@mui/material";
import {  TeriaryCard  } from "../../DummyData/TeritaryCardData";
import TotalCardStyles from "./TotalCard.module.scss"
const TotalCard = () => {
    return (
        <>
            <Box >
                { TeriaryCard.map((e: any) => (
                    <Box className={TotalCardStyles.cardStyle}
                    >
                        <Box className={TotalCardStyles.cardStyle__image}>
                            <img className={TotalCardStyles.cardStyle__image__imageStyles} src={e.image} />
                        </Box>
                        <Box className={TotalCardStyles.cardStyle__text}>
                            <Box className={TotalCardStyles.cardStyle__text__title}>
                                {e.title}
                            </Box>
                            <Box className={TotalCardStyles.cardStyle__text__description}>
                                {e.description}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    )
}
export default TotalCard;
