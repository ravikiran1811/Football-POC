import { Box, Typography } from "@mui/material";
import HeadingField from "../HeadingField/HeadingField";
import ShowCard from "../CardSecondary/ShowCard";
import PrimaryClubsFieldStyles from './PrimaryClubsField.module.scss'

const PrimaryClubsField=()=>{
    return(
        <Box className={PrimaryClubsFieldStyles.clubFields}>
            <Box className={PrimaryClubsFieldStyles.clubFields__heading}>
            <HeadingField heading="CLUBS" subHeading="POPULAR INDIAN" />
            <Typography className={PrimaryClubsFieldStyles.clubFields__heading__viewmore}>View Club Details</Typography>
            </Box>
            <Box className={PrimaryClubsFieldStyles.clubFields__cards}>
                <ShowCard />
            </Box>
        </Box>
    )
}
export default PrimaryClubsField;