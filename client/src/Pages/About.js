import Header from "../Component/Header";
import Banner from "../Component/AboutComponent/Banner";
import ManageTeam from "../Component/AboutComponent/ManageTeam";
import Footer from "../Component/Footer";
import OurValue from "../Component/AboutComponent/OurValue";
import OurStory from "../Component/AboutComponent/OurStory";
import useUser from "../hooks/useUser";
function App() {
  return (
    <div className="App">
      <h1>About</h1>
      <Header />
      <Banner />
      <OurStory />
      <OurValue />
      <ManageTeam />
      <Footer />
    </div>
  );
}

export default App;
