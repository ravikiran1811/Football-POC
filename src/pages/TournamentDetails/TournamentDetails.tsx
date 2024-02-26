import { summaryData } from "../../DummyData/summaryContent";
import { hallOfFameData } from "../../DummyData/hallOfFameData";
import { sideNavData } from "../../DummyData/sideNavData";
import { Box } from "@mui/material";
import ChampionsSection from "../../components/ChampionsSection/ChampionsSection";
import HallOfFame from "../../components/HallOfFame/HallOfFame";
import SideNav from "../../components/SideNavBar/SideNav";
import SummarySection from "../../components/SummarySection/SummarySection";
import ClubsChart from "../../components/ClubsChart/ClubsChart";
import TournamentDetailsStyles from './TournamentDetails.module.scss'
const TournamentDetails = () => {
  return (
    <>
    <Box className={TournamentDetailsStyles.summarySection}>
    <SummarySection
        About={summaryData.DuranCup.About}
        Eligibility={summaryData.DuranCup.Eligibility}
      />
      <SideNav  content={sideNavData[0].durandCup} />
    </Box>
    

      <ClubsChart />
      <HallOfFame data={hallOfFameData} />
      <ChampionsSection />
    </>
  );
};

export default TournamentDetails;
