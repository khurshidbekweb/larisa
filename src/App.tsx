import Navbar from "./components/navbar";
import Advantage from "./sections/advantage";
import Hero from "./sections/hero";
import Instruction from "./sections/instruction";
import MyInfo from "./sections/my-info";
import Recommunded from "./sections/recommunded";
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
      </main>
    </>
  );
};

export default App;