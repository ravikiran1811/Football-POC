import { clubDetailsData, locationData } from "../../DummyData/clubdetailsdata";
import { visionData } from "../../DummyData/founderData";
import AboutTheClub from "../../components/AboutTheClub/AboutTheClub";
import ClubpageFounder from "../../components/ClubpageFounder/ClubpageFounder";
import ClubHeaderDetails from "../../components/Clubs/ClubHeaderDetails";
import clubImage from "../../assets/DurandCup.svg";
import { Box, Stack } from "@mui/material";
import ClubDetailsStyles from "./ClubDetails.module.scss";
import ClubReview from "../../components/ClubReview/ClubReview";

const ClubDetails = () => {
  return (
    <Box className={ClubDetailsStyles.container}>
      <ClubHeaderDetails
        image={clubImage}
        name={"Durand Cup Club"}
        details={clubDetailsData}
        locations={locationData}
      />
      <Stack className={ClubDetailsStyles.AboutClubContainer}>
        <AboutTheClub />
        <ClubpageFounder
          heading="Vision"
          subheading="Founder’s"
          description={visionData}
          image="https://via.placeholder.com/150"
        />
      <ClubReview/>
      </Stack>
    </Box>
  );
};

export default ClubDetails;
