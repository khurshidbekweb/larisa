import Navbar from "./components/navbar";
import Advantage from "./sections/advantage";
import Faq from "./sections/faq";
import Hero from "./sections/hero";
import Instruction from "./sections/instruction";
import MyInfo from "./sections/my-info";
import Recommunded from "./sections/recommunded";
import Reviews from "./sections/reviews";
import Semptomp from "./sections/semptomp";
import Services from "./sections/services";
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
        <Instruction/>
        <Services/>
        <MyInfo/>
        <Advantage/>
        <Reviews/>
        <Instruction/>
        <Faq/>
      </main>
    </>
  );
};

export default App;