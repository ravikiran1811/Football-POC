// import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import DashboardStyles from "./Dashboard.module.scss";
import TagsSearch from "../../components/TagsSearch/TagsSearch";
import useCurrentLocation from "../../utils/useCurrentLocation";
// import SelectInput from "../../components/SelectComponent/SelectInput";
// import { list } from "../../DummyData/SelectInputData";
// import React from "react";
const Dashboard = () => {
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   navigate("/login");
  // };
  const location = useCurrentLocation();
  console.log(location, "location");
  // const [selectedState, setSelectedState] = React.useState<string>("");

  // const handleChange = (ans: string) => {
  //   setSelectedState(ans);
  // };
  // console.log(selectedState);
  return (
    <div className={DashboardStyles.container}>
      <SideDrawer />
      <TagsSearch />
      <Outlet />
      {/* <SelectInput
        list={list}
        selectedState={selectedState}
        handleChange={handleChange}
      /> */}

      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Dashboard;
