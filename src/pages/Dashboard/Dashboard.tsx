import DashboardStyles from "./Dashboard.module.scss";
import { Outlet } from "react-router-dom";
import useCurrentLocation from "../../utils/useCurrentLocation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TournamentDetais from "../../components/TournamentDetails/TournamentDetais";
import {tournamentDetails} from '../../DummyData/tournamentDetails';
const Dashboard = () => {
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   navigate("/login");
  // };

  const location = useCurrentLocation();
  console.log(location);

  return (
    <>
      <div className={DashboardStyles.container}>
        {/* <Header />
        <Outlet />

        <Footer /> */}
        <TournamentDetais tournamentName={tournamentDetails[0].name} tournamentAgeGroup={tournamentDetails[0].age} tournamentLevel={tournamentDetails[0].level}
        tournamentClubAssociated={tournamentDetails[0].clubAssociated} tournamentPrize={tournamentDetails[0].prize} tournamentUpcomingMatch={tournamentDetails[0].upcomingMatch}/>
        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>
    </>
  );
};

export default Dashboard;
