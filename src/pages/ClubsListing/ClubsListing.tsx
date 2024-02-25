import { Box } from "@mui/material";
import HeadingField from "../../components/HeadingField/HeadingField";
import CardWithDetails from "../../components/CardWithDetails/CardWithDetails";
import ClubsListingStyles from './ClubsListing.module.scss';
import clubListingImage from '../../assets/image 25.svg'
const ClubsListing=()=>{
    return(
        <Box className={ClubsListingStyles.clubsList}>
            <Box className={ClubsListingStyles.clubsListImage}>
                <img src={clubListingImage} />
            </Box>
            <Box className={ClubsListingStyles.heading}>
            <HeadingField heading={"YOUR AREA"} subHeading={"EXPLORE FOOTBALL OPPURTUNITIES IN "} />
            </Box>
            <Box>
            <CardWithDetails />
            </Box>
            
        </Box>
    )
}
export default ClubsListing;