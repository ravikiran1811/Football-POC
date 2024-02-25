import DashboardStyles from "./Dashboard.module.scss";
import { Outlet } from "react-router-dom";
import useCurrentLocation from "../../utils/useCurrentLocation";
import ClubsListing from "../ClubsListing/ClubsListing";


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
      <ClubsListing />
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
