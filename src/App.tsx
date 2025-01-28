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
import {BrowserRouter} from 'react-router-dom'
import { Helmet, } from "react-helmet-async";
import { useTranslation } from "react-i18next";

type LangKeys = "uz" | "ru";

const App = () => {
  if(!localStorage.getItem('language')){
    localStorage.setItem('language', 'ru')
  }
  const {i18n} = useTranslation()
  // SEO text object
const seoText = {
  uz: {
    title: "Endokrinolog Larisa Yuryevna Kim | Integrativ va profilaktik tibbiyot mutaxassisi",
    description:
      "Endokrinolog Kim Larisa Yuryevna — integrativ va profilaktik tibbiyot bo‘yicha shifokor, nutrisiolog va IV-terapiya mutaxassisi. Prevent Age shifokorlari assotsiatsiyasi a’zosi. Endokrin tizim muammolarini aniqlash va davolash, shuningdek, sog‘lom turmush tarzini shakllantirish bo‘yicha maslahatlar. Sog‘lig‘ingizni ishonchli qo‘llarga topshiring.",
    phone: "+(998) 90 941 85 49",
    address: "Toshkent, Kichik Xalqa yo'li 51",
  },
  ru: {
    title: "Эндокринолог Лариса Юрьевна Ким | Специалист по интегративной и профилактической медицине",
    description:
      "Эндокринолог Ким Лариса Юрьевна — врач интегративной и профилактической медицины, нутрициолог и специалист по IV-терапии. Член ассоциации врачей Prevent Age. Диагностика и лечение эндокринных заболеваний, а также консультации по формированию здорового образа жизни. Доверьте своё здоровье надёжным рукам.",
    phone: "+(998) 90 941 85 49",
    address: "Ташкент, Кичик Халка йули 51",
  },
};

// useEffect(() => {
//   const pathLang = window.location.pathname.split("/")[1];
//   const storageLang = getLanguageFromStorageOrCookie();

//   if (!["uz", "ru"].includes(pathLang)) {
//     if (pathLang !== storageLang) {
//       window.location.pathname = `/${storageLang}/`;
//     }
//   } else if (i18n.language !== pathLang) {
//     i18n.changeLanguage(pathLang);
//   }
// }, []);

// useEffect(() => {
//   const recordVisit = async () => {
//     try {
//       await Axios.post("counter/add?button=VISIT");
//     } catch (error) {
//       console.error("Error recording visit:", error);
//     }
//   };

//   recordVisit();
// }, []);

// Get current language SEO content
const currentLang:LangKeys = (i18n.language as LangKeys) || "uz"; // Fallback to "uz" if language is not set
const currentSEO = seoText[currentLang] || seoText.uz;

  return (<BrowserRouter>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="phone" content={currentSEO.phone} />
        <meta name="address" content={currentSEO.address} />
      </Helmet>
      <>
        <Navbar/>
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
      </>
      </BrowserRouter>
  );
};

export default App;