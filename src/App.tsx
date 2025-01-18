import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Recommunded from "./sections/recommunded";
import Statisics from "./sections/statisics";

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Statisics/>
        <Recommunded/>
      </main>
    </>
  );
};

export default App;