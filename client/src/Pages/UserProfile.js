import Header from "../Component/UserDashboard/Header";
import SideBar from "../Component/UserDashboard/SideBar";
import Footer from "../Component/UserDashboard/Footer";

import Profile from "../Component/UserDashboard/Profile";

const UserProfile = () => {
  return (
    <>
      <Header />
      <SideBar />

      <Profile />
      <Footer />
    </>
  );
};

export default UserProfile;
