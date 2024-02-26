import { clubDetailsData, locationData } from "../../DummyData/clubdetailsdata";
import { visionData } from "../../DummyData/founderData";
import AboutTheClub from "../../components/AboutTheClub/AboutTheClub";
import ClubpageFounder from "../../components/ClubpageFounder/ClubpageFounder";
import ClubHeaderDetails from "../../components/Clubs/ClubHeaderDetails";
import { Box, Stack } from "@mui/material";
import ClubDetailsStyles from "./ClubDetails.module.scss";
import ClubReview from "../../components/ClubReview/ClubReview";
import founder from "../../assets/Screenshot 2024-02-23 at 19.24 1.png"
import petraClub from "../../assets/Screenshot 2024-02-22 at 22.11 1.png"
const ClubDetails = () => {
  return (
    <Box className={ClubDetailsStyles.container}>
      <ClubHeaderDetails
        image={petraClub}
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
          image={founder}
        />
      <ClubReview/>
      </Stack>
    </Box>
  );
};

export default ClubDetails;
