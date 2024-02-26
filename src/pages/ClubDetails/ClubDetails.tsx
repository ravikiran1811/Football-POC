import { visionData } from "../../DummyData/founderData";
import AboutTheClub from "../../components/AboutTheClub/AboutTheClub";
import ClubpageFounder from "../../components/ClubpageFounder/ClubpageFounder";

const ClubDetails = () => {
  return (
    <>
      <AboutTheClub />
      <ClubpageFounder
        heading="Vision"
        subheading="Founder’s"
        description={visionData}
        image="https://via.placeholder.com/150"
      />
    </>
  );
};

export default ClubDetails;
