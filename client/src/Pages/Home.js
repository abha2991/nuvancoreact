import Header from "../Component/Header";
import Banner from "../Component/Banner";
import GenrateAi from "../Component/GenrateAi";
import HowWork from "../Component/HowWork";
import RaiseRequest from "../Component/RaiseRequest";
import WhyChoose from "../Component/WhyChoose";
import Blog from "../Component/Blog";
import Specialiest from "../Component/Specialiest";
import BlogSection from "../Component/BlogSection";
import Feedback from "../Component/Feedback";
import useUser from "../hooks/useUser";

import Patner from "../Component/Patner";
import Footer from "../Component/Footer";
function Home() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <GenrateAi />
      <HowWork />
      <RaiseRequest />
      <WhyChoose />
      <Blog />
      <Specialiest />
      <BlogSection />
      <Feedback />

      <Patner />
      <Footer />
    </div>
  );
}

export default Home;
