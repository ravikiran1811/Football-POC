import { hallOfFameData } from "../../DummyData/hallOfFameData";
import ChampionsSection from "../../components/ChampionsSection/ChampionsSection";
import HallOfFame from "../../components/HallOfFame/HallOfFame";

const TournamentDetails = () => {
  return (
    <>
      <HallOfFame data={hallOfFameData} />
      <ChampionsSection />
    </>
  );
};

export default TournamentDetails;
