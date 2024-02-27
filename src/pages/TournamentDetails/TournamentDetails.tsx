import { summaryData } from "../../DummyData/summaryContent";
import { hallOfFameData } from "../../DummyData/hallOfFameData";
import { sideNavData } from "../../DummyData/sideNavData";
import { Box } from "@mui/material";
import ChampionsSection from "../../components/ChampionsSection/ChampionsSection";
import HallOfFame from "../../components/HallOfFame/HallOfFame";
import SideNav from "../../components/SideNavBar/SideNav";
import SummarySection from "../../components/SummarySection/SummarySection";
import ClubsChart from "../../components/ClubsChart/ClubsChart";
import TournamentDetailsStyles from "./TournamentDetails.module.scss";
import TournamentDetais from "../../components/TournamentDetails/TournamentDetails";
import { tournamentDetails } from "../../DummyData/tournamentDetails";
import ViewerShipGraph from "../../components/ViewerShipGraph/ViewerShipGraph";
import TournamentDetailsKeyHighlights from "../../components/TournamentDetailsKeyHighlights/TournamentDetailsKeyHighlights";
import { tournamentHighlightData } from "../../DummyData/tournamentHighlightsData";
const TournamentDetails = () => {
  return (
    <>
      <TournamentDetais
        tournamentName={tournamentDetails[0].name}
        tournamentAgeGroup={tournamentDetails[0].age}
        tournamentLevel={tournamentDetails[0].level}
        tournamentClubAssociated={tournamentDetails[0].clubAssociated}
        tournamentPrize={tournamentDetails[0].prize}
        tournamentUpcomingMatch={tournamentDetails[0].upcomingMatch}
      />{" "}
      <Box className={TournamentDetailsStyles.summarySection}>
        <SummarySection
          About={summaryData.DuranCup.About}
          Eligibility={summaryData.DuranCup.Eligibility}
        />
        <SideNav content={sideNavData[0].durandCup} scrollValue={1000} />
      </Box>
      <TournamentDetailsKeyHighlights data={tournamentHighlightData} />
      <ViewerShipGraph />
      <ClubsChart />
      <HallOfFame data={hallOfFameData} />
      <ChampionsSection />
    </>
  );
};

export default TournamentDetails;
