import DashboardStyles from "./Dashboard.module.scss";
import { Outlet } from "react-router-dom";
import useCurrentLocation from "../../utils/useCurrentLocation";
// import SummarySection from "../../components/SummarySection/SummarySection";
import { SummaryData } from "../../DummyData/SummaryContent";
import { sideNavData } from "../../DummyData/sideNavData";
import SideNav from "../../components/SideNavBar/SideNav";
// import SoccerSection from "../../components/SoccerSection/SoccerSection";
const Dashboard = () => {
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   navigate("/login");
  // };

  const location = useCurrentLocation();
  console.log(location);

  return (
    <div className={DashboardStyles.container}>
      <Outlet />
      {/* <SoccerSection /> */}
      <SideNav content ={sideNavData[0].durandCup}/>
      {/* <SummarySection Eligibility={SummaryData.DuranCup.Eligibility} About={SummaryData.DuranCup.About}/> */}
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
