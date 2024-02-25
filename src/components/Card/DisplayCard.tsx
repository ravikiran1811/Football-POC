import { Box } from "@mui/material";
import DisplayCardStyles from "./DisplayCard.module.scss"
interface IcardProps {
    cardArray: any;
    nameOfTheClass: any;
}
const DisplayCard: React.FC<IcardProps> = ({ cardArray, nameOfTheClass }) => {
    return (
        <>
            <Box className={nameOfTheClass ==="teritiary" ?  DisplayCardStyles.TotalCard: DisplayCardStyles.TotalCard}>
                {cardArray.map((e: any) => (
                    <Box className={nameOfTheClass ==="teritiary" ?  DisplayCardStyles.cardStyle: DisplayCardStyles.cardStyle}
                    >
                        <Box className={nameOfTheClass ==="teritiary" ?  DisplayCardStyles.secondaryImage: DisplayCardStyles.image}>
                            <img className={DisplayCardStyles.imageStyles} src={e.image} />
                        </Box>
                        <Box className={nameOfTheClass ==="teritiary" ?  DisplayCardStyles.totalText : DisplayCardStyles.primary}>
                            <Box className={DisplayCardStyles.text}>
                                <Box className={DisplayCardStyles.title}>
                                    {e.title}
                                </Box>
                                <Box className={nameOfTheClass ==="teritiary" ?  DisplayCardStyles.SecondaryDescription: DisplayCardStyles.description}>
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
export default DisplayCard;
