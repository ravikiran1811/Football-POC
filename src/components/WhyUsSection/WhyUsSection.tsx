import { Box, Typography } from "@mui/material";
import RegistrationBox from "../RegistrationBox/RegistrationBox";
import { SoccerScoutData } from "../../DummyData/SoccerScoutData";
import WhyUsSectionStyles from "./WhyUsSection.module.scss";
import SectionHeading from "../HeadingField/HeadingField";
import PopularIndianClubsSection from "../PopularIndianClubsSection/PopularIndianClubsSection";

const WhyUsSection = () => {
  return (
    <Box className={WhyUsSectionStyles.SoccerSection}>
      <Box className={WhyUsSectionStyles.SoccerSection__part1}>
        <SectionHeading heading={"SOCCER SCOUT"} subHeading={"WHY"} />
        <Box className={WhyUsSectionStyles.SoccerSection__part1__description}>
          <Typography
            className={
              WhyUsSectionStyles.SoccerSection__part1__description__para
            }
          >
            {SoccerScoutData[0].paragraph1}
          </Typography>
          <Typography
            className={
              WhyUsSectionStyles.SoccerSection__part1__description__para
            }
          >
            {SoccerScoutData[0].paragraph2}
          </Typography>
          <Typography
            className={
              WhyUsSectionStyles.SoccerSection__part1__description__para
            }
          >
            {SoccerScoutData[0].paragraph3}
          </Typography>
          <Typography
            className={
              WhyUsSectionStyles.SoccerSection__part1__description__para
            }
          >
            {SoccerScoutData[0].paragraph4}
          </Typography>
        </Box>
      </Box>
      <Box className={WhyUsSectionStyles.SoccerSection__part2}>
        <PopularIndianClubsSection />
      </Box>
      <Box className={WhyUsSectionStyles.SoccerSection__part3}>
        <RegistrationBox
          heading={"Register YOUR CLUB HERE"}
          subHeading={"shape tomorrow's soccer stars"}
        />
      </Box>
    </Box>
  );
};
export default WhyUsSection;
