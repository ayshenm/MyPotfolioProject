import {
  Instagram,
  Linkedin,
  Github,
  Wallpaper,
  Hammer,
  Database,
  TabletSmartphone,
  InstagramIcon,
} from "lucide-react";

// front end
import html from "@/src/assets/svg/html.svg";
import css from "@/src/assets/svg/css.svg";
import tailwind from "@/src/assets/svg/tailwind.svg";
import mui from "@/src/assets/svg/mui.svg";
import ac from "@/src/assets/images/ac.webp";
import motion from "@/src/assets/svg/framer-motion.svg";
import js from "@/src/assets/svg/js.svg";
import ts from "@/src/assets/svg/ts.svg";
import react from "@/src/assets/svg/react.svg";
import next from "@/src/assets/svg/nextjs.svg";
import redux from "@/src/assets/svg/redux.svg";
import bootstrap from "@/src/assets/svg/bootstrap.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

import angelInvestor from "@/src/assets/project/angel.png"
import kitty from "@/src/assets/project/kitty.png"
import volti from "@/src/assets/project/volti.png"
import portfolio from "@/public/photohead.png"
import netflix from "@/src/assets/project/netflix.png"
import animenu from "@/src/assets/project/animation-menu.png"
import fitness from "@/src/assets/project/fitness.png"
import drop from "@/src/assets/project/image-click.png"
import calc from "@/src/assets/project/calc.png"
import vumes from "@/src/assets/project/vumes.png"


// -------------------------------------------------------------------------------------

export const navLinks = [
  {
    id: 1,
    title: "ABOUT",
    path: "#about",
  },
  {
    id: 2,
    title: "WORK",
    path: "#portfolio",
  },
  {
    id: 3,
    title: "CONTACT",
    path: "#contact",
  },
];

// -------------------------------------------------------------------------------------

export const socialMediaLinks = [
  {
    id: 1,
    icon: FaInstagram,
    path: "https://www.instagram.com/ayisha_13/",
  },
  {
    id: 2,
    icon: FaLinkedin,
    path: "https://www.linkedin.com/in/ayshen-mirzayeva-462077167/",
  },
  {
    id: 3,
    icon: FaGithub,
    path: "https://github.com/ayshenm",
  },
];

export const experienceData = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Azerbaijan, Sumgait city",
    description: [
      "Lease of assignments given on the project",
      "Creating new modules",
      "Optimization control",
    ],
    date: "2022- 2023",
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Freelancer - Baku, Azerbaijan",
    description: [
      "Lease of assignments given on the project",
      "Creating new modules",
      "Optimization control",
    ],
    date: "2023- created",
  },
];

// -------------------------------------------------------------------------------------

export const educationData = [
  {
    id: 1,
    location: "Div Academy Course",
    title: "Frontend Developer",
    date: "2023 - 2024",
  },
  {
    id: 2,
    location: "Sumgait State University",
    title: "Computer engineer",
    date: "2021 - 2026",
  },
  {
    id: 3,
    location: "Baku State College of Communication and Transport",
    title: "Computer Networks and Calculation Techniques",
    date: "2015 - 2018",
  },
];

// -------------------------------------------------------------------------------------

export const projects = [
  {
    id: 1,
    title: "My Potfolio Website",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: portfolio,
    iconLists: ["next js", "react js","typescript", "tailwind css", "Aceternity ui", "frame motion"],
    link: "https://my-potfolio-project-ayshenms-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Netflix cover",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: netflix,
    iconLists: ["next js", "react js", "tailwind css","prisma","mongo db","hero icon"],
    link: "https://netflix-phi-sandy.vercel.app/",
  },
  {
    id: 3,
    title: "Kitty Zoo Shop",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: kitty,
    iconLists: ["htmt", "css", "javascript"],
    link: "https://kitty-ruddy.vercel.app/",
  },
  {
    id: 4,
    title: "Volti-Electic Bike",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: volti,
    iconLists: ["htmt", "css", "javascript"],
    link: "https://volti-seven.vercel.app/",
  },
  {
    id: 5,
    title: "Angel Investor",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: angelInvestor,
    iconLists: ["htmt", "css", "bootstrap", "javascript"],
    link: "https://ayshenm.github.io/InvestorCourse.github.io/",
  },
  {
    id: 6,
    title: "Vumes Website",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: vumes,
    iconLists: ["htmt", "css", "tailwind css", "javascript"],
    link: "https://ayshenm.github.io/VumesWebsitee-github.io/"
  },
  {
    id: 7,
    title: "Fitness Website",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: fitness,
    iconLists: ["htmt", "css", "bootstrap"],
    link: "https://ayshenm.github.io/FitnessTemplate.github.io/",
  },
  {
    id: 8,
    title: "Calculator",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: calc,
    iconLists: ["htmt", "css",  "javascript"],
    link: "https://ayshenm.github.io/Calculator.github.io/",
  },
  {
    id: 9,
    title: "Image Task",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: drop,
    iconLists: ["react js", "bootstrap" ],
    link: "https://ayshenm.github.io/ImageCloseOpen.github.io/ ",
  },
  {
    id: 10,
    title: "Animation Menu",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: animenu,
    iconLists: ["htmt", "css",  "javascript"],
    link: "https://animations-menu-github-io.vercel.app/",
  },
  
];

// -------------------------------------------------------------------------------------

export const skillsData = [
  {
    id: 1,
    title: "HTML",
    icon: html,
  },
  {
    id: 2,
    title: "CSS",
    icon: css,
  },
  {
    id: 3,
    title: "JavaScript",
    icon: js,
  },
  {
    id: 4,
    title: "TypeScript",
    icon: ts,
  },
  {
    id: 5,
    title: "React JS",
    icon: react,
  },
  {
    id: 6,
    title: "Next JS",
    icon: next,
  },
  {
    id: 7,
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 8,
    title: "Bootstrap Css",
    icon: bootstrap,
  },
  {
    id: 9,
    title: "Aceternity UI",
    icon: ac,
  },
  {
    id: 10,
    title: "Shadcn UI",
    icon: ac,
  },

  {
    id: 11,
    title: "Redux Toolkit",
    icon: redux,
  },
  {
    id: 12,
    title: "Framer Motion",
    icon: motion,
  },
];
