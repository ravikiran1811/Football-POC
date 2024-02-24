import { Box } from "@mui/material";
import HeadingField from "../HeadingField/HeadingField";
import ShowCard from "../CardSecondary/ShowCard";
import PrimaryClubsFieldStyles from './PrimaryClubsField.module.scss'

const PrimaryClubsField=()=>{
    return(
        <Box className={PrimaryClubsFieldStyles.clubFields}>
            <Box>
            <HeadingField heading="CLUBS" subHeading="POPULAR INDIAN" />
            </Box>
            <Box className={PrimaryClubsFieldStyles.clubFields__cards}>
                <ShowCard />
            </Box>
        </Box>
    )
}
export default PrimaryClubsField;