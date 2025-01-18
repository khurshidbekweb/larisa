import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Instruction from "./sections/instruction";
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
      </main>
    </>
  );
};

export default App;