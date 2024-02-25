import { Box } from "@mui/material";
import {  TeriaryCard  } from "../../DummyData/TeritaryCardData";
import TotalCardStyles from "./TotalCard.module.scss"
const TotalCard = () => {
    return (
        <>
            <Box className={TotalCardStyles.TotalCard} >
                {TeriaryCard.map((e: any) => (
                    <Box className={TotalCardStyles.TotalCard__cardStyle}
                    >
                        <Box className={TotalCardStyles.TotalCard__cardStyle__image}>
                            <img className={TotalCardStyles.TotalCard__cardStyle__image__imageStyles} src={e.image} />
                        </Box>
                        <Box className={TotalCardStyles.totalText}>

                        <Box className={TotalCardStyles.TotalCard__cardStyle__text}>
                            
                        <Box className={TotalCardStyles.TotalCard__cardStyle__text__title}>
                            {e.title}
                        </Box>
                        <Box className={TotalCardStyles.TotalCard__cardStyle__text__description}>
                            {e.description}
                        </Box>
                        </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    )
}
export default TotalCard;

