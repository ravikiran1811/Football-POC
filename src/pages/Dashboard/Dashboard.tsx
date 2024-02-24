// import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import DashboardStyles from "./Dashboard.module.scss";
import useCurrentLocation from "../../utils/useCurrentLocation";
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
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
