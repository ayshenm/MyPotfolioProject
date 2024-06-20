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
import motion from "@/src/assets/svg/framer-motion.svg";
import js from "@/src/assets/svg/js.svg";
import ts from "@/src/assets/svg/ts.svg";
import react from "@/src/assets/svg/react.svg";
import next from "@/src/assets/svg/nextjs.svg";
import redux from "@/src/assets/svg/redux.svg";
import swr from "@/src/assets/svg/swr.svg";
import tanstack from "@/src/assets/svg/tanstack.svg";
import bootstrap from "@/src/assets/svg/bootstrap.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";



// tools
// import github from "@/assets/svg/github.svg";

// import trello from "@/assets/svg/trello.svg";

// projects
// import jubee from "@/assets/images/jubee.png";
// import rahatbina from "@/assets/images/rahatbina.jpg";
// import dashboard from "@/assets/images/dashboard.webp";
// import blog from "@/assets/images/blog.jpg";
// import ecommerce from "@/assets/images/e-commerce.jpg";
// import facebook from "@/assets/images/facebook.png";

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

// -------------------------------------------------------------------------------------
export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "p-3 lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },

  // {
  //   id: 4,
  //   title: "Tech enthusiast with a passion for development.",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  // {
  //   id: 6,
  //   title: "Do you want to start a project together?",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  //   img: "",
  //   spareImg: "",
  // },
];


export const experienceData = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Azerbaijan, Sumgait city",
    description: [
      "Lease of assignments given on the project", "Creating new modules", "Optimization control",
    ],
    date: "2022- 2023",
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Freelancer - Baku, Azerbaijan",
    description: [
      "Lease of assignments given on the project", "Creating new modules", "Optimization control",
    ],
    date: "2023- created",
  },
];

// -------------------------------------------------------------------------------------

export const educationData = [
  {
    id:1,
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
    title: "Angel Investor",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: "/p1.svg",
    iconLists: ["html", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://ayshenm.github.io/InvestorCourse.github.io/",
  },
  {
    id: 2,
    title: "Kitty Zoo Shop",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://kitty-ruddy.vercel.app/",
  },
  {
    id: 3,
    title: "Volti-Electic Bike",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://volti-seven.vercel.app/",
  },
  {
    id: 4,
    title: "Netflix cover",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
    img: "/p1.svg",
    iconLists: ["/app.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://netflix-phi-sandy.vercel.app/",
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
        title: "Material UI",
        icon: mui,
      },
      {
        id: 10,
        title: "Shadcn UI",
        icon: mui,
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

  
    
  