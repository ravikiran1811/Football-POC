import { Box, Typography } from "@mui/material";
import SectionHeading from "../HeadingField/HeadingField";
import AboutTheClubStyles from "./AboutTheClud.module.scss";
import { aboutTheFounder } from "../../DummyData/founderData";

const AboutTheClub = () => {
  return (
    <>
      <Box className={AboutTheClubStyles.aboutTheClub__part1}>
        <SectionHeading heading={"SOCCER SCOUT"} subHeading={"WHY"} />
        <Box className={AboutTheClubStyles.aboutTheClub__part1__description}>
          <Typography
            className={
              AboutTheClubStyles.aboutTheClub__part1__description__para
            }
          >
            {aboutTheFounder.paragraph1}
          </Typography>
          <Typography
            className={
              AboutTheClubStyles.aboutTheClub__part1__description__para
            }
          >
            {aboutTheFounder.paragraph2}
          </Typography>
          <Typography
            className={
              AboutTheClubStyles.aboutTheClub__part1__description__para
            }
          >
            {aboutTheFounder.paragraph3}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AboutTheClub;
