import Navbar from "./components/navbar";
import Advantage from "./sections/advantage";
import Contact from "./sections/contact";
import Endocrina from "./sections/endocrina";
import Faq from "./sections/faq";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Instruction from "./sections/instruction";
import MyInfo from "./sections/my-info";
import Onlineonsultation from "./sections/online-consultation";
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
        <Onlineonsultation/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
};

export default App;