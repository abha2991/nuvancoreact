import Header from "../Component/UserDashboard/Header";
import SideBar from "../Component/UserDashboard/SideBar";
import Footer from "../Component/UserDashboard/Footer";

import UpdateProfile from "../Component/UserDashboard/UpdateProfile";

const UserProfileUpdate = () => {
  return (
    <>
      <Header />
      <SideBar />

      <UpdateProfile />
      <Footer />
    </>
  );
};

export default UserProfileUpdate;
