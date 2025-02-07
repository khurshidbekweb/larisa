import user1 from "@/assets/image/user1.jpg";
import user2 from "@/assets/image/user2.jpg";
import user3 from "@/assets/image/user3.jpg";
import user4 from "@/assets/image/user6.jpg";
import user5 from "@/assets/image/user5.jpg";

import user6 from "@/assets/image/user6_.jpg";
import user7 from "@/assets/image/user7.jpg";
import user8 from "@/assets/image/user8.jpg";





interface ISliderData {
  id: number;
  image: string;
  title: { ru: string; uz: string };
}



export const SliderData: ISliderData[] = [
  { id: 1, image: user1, title: { ru: "Слабость", uz: "Zaiflik" } },
  { id: 2, image: user2, title: { ru: "Скачки веса", uz: "Vazn o'zgarishi" } },
  { id: 3, image: user3, title: { ru: "Выпадение волос", uz: "Soch to'kilishi" } },
  { id: 4, image: user4, title: { ru: "Чувство жажды", uz: "Chanqoqlik" } },
  { id: 5, image: user5, title: { ru: "Раздражительность", uz: "Jahldorlik" } },
  { id: 6, image: user6, title: { ru: "ПМС", uz: "PMS" } },
  { id: 7, image: user7, title: { ru: "Тяга к сладкому", uz: "Shirinlikka ishtiyoq." } },
  { id: 8, image: user8, title: { ru: "Не регулярный менструальный цикл.", uz: "Noregulyar hayz tsikli" } },
];
