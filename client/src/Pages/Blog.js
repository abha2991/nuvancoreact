import Header from '../Component/Header';
import Footer from '../Component/Footer';
import RecentPost from '../Component/Contact/Blog/RecentPost';
import BannerBlog from '../Component/Contact/Blog/BannerBlog';
import OtherBlog from '../Component/Contact/Blog/OtherBlog';
function App() {
  return (
    <div className="App">
    <Header />
    <BannerBlog />
    <RecentPost />
    <OtherBlog />
    <Footer />
    </div>
  );
}

export default App;

