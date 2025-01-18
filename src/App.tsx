import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Statisics from "./sections/statisics";

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Statisics/>
      </main>
    </>
  );
};

export default App;