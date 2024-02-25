import { Box } from "@mui/material";
import TournamentSectionStyles from "./TournamentSection.module.scss";
import DisplayCard from "../Card/DisplayCard";
import { card } from "../../DummyData/CardData";
import SectionHeading from "../HeadingField/HeadingField";
import SecondarySectionHeading from "../TotalTournaments/TotalTournaments";
const TournamentSection = () => {
  return (
    <>
      <Box className={TournamentSectionStyles.totalTournament}>
        <SectionHeading heading="Tournaments" subHeading="POPULAR INDIAN" />
        <SecondarySectionHeading heading={"NATIONAL AND TROPHY"} />
        <DisplayCard cardArray={card.primary} variant={"primary"} />
        <SecondarySectionHeading heading={"LOCAL AND STATE"} />
        <DisplayCard cardArray={card.teritiary} variant={"teritiary"} />
      </Box>
    </>
  );
};
export default TournamentSection;
