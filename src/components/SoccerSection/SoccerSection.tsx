import { Box, Typography } from "@mui/material"
import HeadingField from "../HeadingField/HeadingField";
import PrimaryClubsField from "../PrimaryClubsField/PrimaryClubsField";
import RegistrationBox from "../RegistrationBox/RegistrationBox";
import { SoccerScoutData } from "../../DummyData/SoccerScoutData"; 
import SoccerSectionStyles from './SoccerSection.module.scss'
const SoccerSection =()=>{
    return(
        <Box className={SoccerSectionStyles.SoccerSection}>
            <Box className={SoccerSectionStyles.SoccerSection__part1}>
                <HeadingField heading={"SOCCER SCOUT"} subHeading={"WHY"} />
                <Box className={SoccerSectionStyles.SoccerSection__part1__description}>
                <Typography className={SoccerSectionStyles.SoccerSection__part1__description__para}>
                    {SoccerScoutData[0].paragraph1}
                </Typography>
                <Typography className={SoccerSectionStyles.SoccerSection__part1__description__para}>
                    {SoccerScoutData[0].paragraph2}
                </Typography>
                <Typography className={SoccerSectionStyles.SoccerSection__part1__description__para}>
                    {SoccerScoutData[0].paragraph3}
                </Typography>
                <Typography className={SoccerSectionStyles.SoccerSection__part1__description__para}>
                    {SoccerScoutData[0].paragraph4}
                </Typography>
                </Box>
               
            </Box>
            <Box className={SoccerSectionStyles.SoccerSection__part2}>
                <PrimaryClubsField />
            </Box>
            <Box className={SoccerSectionStyles.SoccerSection__part3}>
                <RegistrationBox heading={"Register YOUR CLUB HERE"} subHeading={"shape tomorrow's soccer stars"} />
            </Box>
        </Box>
    )
}
export default SoccerSection;