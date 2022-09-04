import {
  people01,
  people02,
  people03,
  send,
  shield,
  star,
} from "../assets";

import first from "../assets/clients/1.png";
import second from "../assets/clients/2.png";
import third from "../assets/clients/3.png";
import fourth from "../assets/clients/4.png";
import fifth from "../assets/clients/5.jpg";
import sixth from "../assets/clients/6.jpg";

export const images = [first, second, third, fourth, fifth, sixth]

export const navLinks = [
  {
    id: "home",
    title: "Bosh sahifa",
  },
  {
    id: "features",
    title: "Yechimlar",
  },
  {
    id: "products",
    title: "Dastur",
  },
  {
    id: "clients",
    title: "Mijozlar",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Qurilish mollari biznesi uchun yaratilgan",
    content:
      "Alo24 ning boshqa dasturlardan farqi va afzalligi shundaki ushbu dastur qurilish mollari savdosi bilan shug'ullanuvchi tadbirkorlar expertizasi asosida yaratilgan.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Asosiy maqsadimiz",
    content:
      "Bizning asosiy maqsadimiz ushbu dasturni shunchaki ommalashtirish emas balki biznesingizni rivoji va uning to'liq nazoratingizda bo'lishiga yordam berish",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Maksimal servis",
    content:
      "Biz sizga shunchaki dastur emas balki omborxonangizdagi barcha mahsulotlaringizni dasturga kiritib  100% tayyor tizim beramiz",
  },
];

export const infosFirst = [
  {
    id: "feature-1",
    icon: shield,
    title: "Omborxona nazorati",
    content:
      "Qurilish mollari do'konlarida eng katta muammo bu omborona nazorati. Alo24 dasturi orqali esa siz omborxonadagi mahsulotlaringiz soni, qiymati va kam qolgan mahsulotlaringizni kuzatib turishingiz mumkin",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Sotuvchilar nazorati",
    content:
      "Qurilish mollari savdosida sotuvchilarni nazorat qilish juda qiyin yoki iloji yo'q. Alo24 dasturi orqali esa har bir sotuvchingizni to'liq nazorat qilshingiz mumkin",
  },
  {
    id: "feature-3",
    icon: shield,
    title: "Qarzdorlar ro'yxati",
    content: "Har qanday savdo sohasida qarzga savdo amalga oshiriladi. Lekin ularni har doim ham nazorat qila olmaysiz. Alo24 orqali qarzdorlar ro'yxati avtomatik yuritiladi. "
  },
];

export const infosSecond = [
  {
    id: "feature-4",
    icon: shield,
    title: "Filiallar nazorati",
    content:"Savdo sohasida filiallarni nazorat qilish imkonsiz. Bizning dastur orqali esa bitta tizimda istalgancha filial yaratishingiz va ularni to'liq nazorat qilishingiz mumkin",
  },
  {
    id: "feature-5",
    icon: shield,
    title: "Moliyaviy hisobotlar",
    content:"Yuqorida keltirilgan muammolar sizda mavjud ekan tabiiyki sizda moliyaviy holatingiz bo'yicha hisobotlar mavjud emas. Bizning dastur esa filiallaringiz va omborxonangiz bo'yicha 100% lik hisobotlarni avtomatik yuritadi"
  },
  {
    id: "feature-6",
    icon: shield,
    title: "Yetkazib beruvchilar bilan hisob kitob",
    content: "Tabiiyki har doim ham omborxonangizga qahon qaysi yetkazib beruvchidan qancha mahsulot kelganini aniq bilmaysiz. Bizning dasturda esa har bir kelib tushgan mahsulotlar hisobi yuritiladi va ushbu hisobotlarni istalgan vaqtda yuklab olishingiz mumkin"
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "vaqt tejalishi",
    value: "3x",
  },
  {
    id: "stats-2",
    title: "Savdo samaradorligi",
    value: "70%",
  },
  {
    id: "stats-3",
    title: "aniqlikda hisobot",
    value: "100% ",
  },
];

export const footerLinks = [
  {
    title: "Telefon",
    links: [
      {
        name: "+998992234244",
        link: "tel:+998992234244",
      }
    ],
  },
  {
    title: "Telegram",
    links: [
      {
        name: "http://t.me/alo24",
        link: "http://t.me/alo24",
      }
    ],
  },
  {
    title: "Instagram",
    links: [
      {
        name: "Alo24",
        link: "http://t.me/alo24",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-3",
    icon: "phone",
    link: "tel:+998992234244",
  },
  {
    id: "social-media-2",
    icon: "telegram",
    link: "https://t.me/alo24",
  },
  {
    id: "social-media-1",
    icon: "instagram",
    link: "https://www.instagram.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: '0',
  },
  {
    id: "client-2",
    logo: '1',
  },
  {
    id: "client-3",
    logo: '2',
  },
  {
    id: "client-4",
    logo: '3',
  },
  {
    id: "client-5",
    logo: '4',
  },
  {
    id: "client-6",
    logo: '5',
  },
];
