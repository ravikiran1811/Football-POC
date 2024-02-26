import { summaryData } from "../../DummyData/summaryContent";
import { hallOfFameData } from "../../DummyData/hallOfFameData";
import { sideNavData } from "../../DummyData/sideNavData";
import ChampionsSection from "../../components/ChampionsSection/ChampionsSection";
import HallOfFame from "../../components/HallOfFame/HallOfFame";
import SideNav from "../../components/SideNavBar/SideNav";
import SummarySection from "../../components/SummarySection/SummarySection";

const TournamentDetails = () => {
  return (
    <>
      <SummarySection
        About={summaryData.DuranCup.About}
        Eligibility={summaryData.DuranCup.Eligibility}
      />
      <SideNav content={sideNavData[0].durandCup} />
      <HallOfFame data={hallOfFameData} />
      <ChampionsSection />
    </>
  );
};

export default TournamentDetails;
