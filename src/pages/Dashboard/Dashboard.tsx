// import { useNavigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import SideDrawer from "../../components/SideDrawer/SideDrawer";
import DashboardStyles from "./Dashboard.module.scss";
// import TagsSearch from "../../components/TagsSearch/TagsSearch";
import useCurrentLocation from "../../utils/useCurrentLocation";
import RegistrationBox from "../../components/RegistrationBox/RegistrationBox";
const Dashboard = () => {

  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   navigate("/login");
  // };
  
  const location = useCurrentLocation();
  console.log(location, "location");

  return (
    <div className={DashboardStyles.container}>
      {/* <DetailsField /> */}
      <RegistrationBox heading='Register YOUR CLUB HERE' subHeading="shape tomorrow's soccer stars" />
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
