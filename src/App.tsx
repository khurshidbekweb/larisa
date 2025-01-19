import Navbar from "./components/navbar";
import Advantage from "./sections/advantage";
import Endocrina from "./sections/endocrina";
import Faq from "./sections/faq";
import Hero from "./sections/hero";
import Instruction from "./sections/instruction";
import MyInfo from "./sections/my-info";
import Recommunded from "./sections/recommunded";
import Reviews from "./sections/reviews";
import Semptomp from "./sections/semptomp";
import Sertificate from "./sections/sertificate";
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
        <Sertificate/>
        <Endocrina/>
      </main>
    </>
  );
};

export default App;