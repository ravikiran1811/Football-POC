// import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import DashboardStyles from "./Dashboard.module.scss";
import TagsSearch from "../../components/TagsSearch/TagsSearch";
import useCurrentLocation from "../../utils/useCurrentLocation";
import UploadMedia from "../../components/UploadMedia/UploadMedia";

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
      <SideDrawer />
      <TagsSearch />
      <UploadMedia multiple={true} />
      <Outlet />
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
