import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Test from "./Component/Test";
import StartProject from "./Component/UserDashboard/UserForm/StartProject";
import { Navigate, Route, Routes } from "react-router-dom";
import useUser from "./hooks/useUser";
import React from "react";
import AuthRoute from "./routes/AuthRoute";
import UnAuthRoute from "./routes/UnAuthRoute";
import UserDashboard from "./Pages/UserDashboard";
import UserDraft from "./Pages/UserDraft";
import UserDesignRequest from "./Pages/UserDesignRequest";
import UserProfile from "./Pages/UserProfile";
import UserProfileUpdate from "./Pages/UserProfileUpdate";
import UserUploadImage from "./Pages/UserUploadImage";
import Logout from "./Component/Logout";
import FormDetails from "./Component/UserDashboard/UserForm/FormDetails";
import UserBasicDetails from "./Component/UserDashboard/UserForm/UserBasicDetails";
import DraftTable from "./Component/UserDashboard/DraftTable";
import Draft from "./Component/UserDashboard/Draft";
import UserFormDetails from "./Component/UserDashboard/UserForm/UserFormDetails";

function App() {
  const { initializing } = useUser();

  if (initializing) {
    return <>Loading...</>;
  }

  return (
    <>
      {/*<AuthRoute disallow={["/start-project"]} />*/}
      <UnAuthRoute disallow={["/start-project", "/dashboard"]} />
      <Routes>
        <Route path={"*"} element={<Navigate to={"/"} />} />
        <Route path={"/start-project"} element={<StartProject />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/form-details"} element={<FormDetails />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/career"} element={<Career />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/test"} element={<Test />} />
        <Route path={"/logout"} element={<Logout />} />
        <Route path={"/dashboard"} element={<UserDashboard />} />
        <Route path={"/user-draft"} element={<UserDraft />} />
        <Route path={"/user-design-request"} element={<UserDesignRequest />} />
        <Route path={"/user-profile"} element={<UserProfile />} />
        <Route path={"/user-profile-update"} element={<UserProfileUpdate />} />
        <Route path={"/user-update-image"} element={<UserUploadImage />} />
        <Route path={"/user-basic-details"} element={<UserBasicDetails />} />
        <Route path={"/user-draft-table"} element={<DraftTable />} />
        <Route path={"/user-form-details"} element={<UserFormDetails />} />
      </Routes>
    </>
  );
}

export default App;
