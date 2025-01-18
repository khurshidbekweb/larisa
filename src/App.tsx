import Navbar from "./components/navbar";
import SwiperCarousel from "./components/swiper-test";
import Hero from "./sections/hero";
import Recommunded from "./sections/recommunded";
import Semptomp from "./sections/semptomp";
import Statisics from "./sections/statisics";

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Statisics/>
        <Recommunded/>
        <Semptomp/>
        <SwiperCarousel/>
      </main>
    </>
  );
};

export default App;