import Header from "../Component/Header";
import Footer from "../Component/Footer";
import BannerCareer from "../Component/Career/BannerCareer";
import WhyJoin from "../Component/Career/WhyJoin";
import FormCareer from "../Component/Career/FormCareer";
function App() {
  return (
    <div className="App">
      <Header />
      <BannerCareer />
      <WhyJoin />
      <FormCareer />
      <Footer />
    </div>
  );
}

export default App;
