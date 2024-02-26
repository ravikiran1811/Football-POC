import { Box, Typography } from "@mui/material";
import RegistrationBox from "../RegistrationBox/RegistrationBox";
import WhyUsSectionStyles from "./WhyUsSection.module.scss";
import SectionHeading from "../HeadingField/HeadingField";
import PopularIndianClubsSection from "../PopularIndianClubsSection/PopularIndianClubsSection";
import { soccerScoutData } from "../../DummyData/SoccerScoutData";

const WhyUsSection = () => {
  return (
    <Box className={WhyUsSectionStyles.SoccerSection}>
      <Box className={WhyUsSectionStyles.SoccerSection__part1}>
        <SectionHeading
          heading={"SOCCER SCOUT"}
          subHeading={"WHY"}
          colors="false"
        />
        <Box className={WhyUsSectionStyles.SoccerSection__part1__description}>
          <Typography
            className={
              WhyUsSectionStyles.SoccerSection__part1__description__para
            }
          >
            {soccerScoutData.paragraph1}
          </Typography>
          <Typography className={WhyUsSectionStyles.para}>
            {soccerScoutData.paragraph2}
          </Typography>
          <Typography className={WhyUsSectionStyles.para}>
            {soccerScoutData.paragraph3}
          </Typography>
          <Typography className={WhyUsSectionStyles.para}>
            {soccerScoutData.paragraph4}
          </Typography>
        </Box>
      </Box>
      <Box className={WhyUsSectionStyles.part2}>
        <PopularIndianClubsSection />
      </Box>
      <Box className={WhyUsSectionStyles.part3}>
        <RegistrationBox
          heading={"Register YOUR CLUB HERE"}
          subHeading={"shape tomorrow's soccer stars"}
        />
      </Box>
    </Box>
  );
};
export default WhyUsSection;
