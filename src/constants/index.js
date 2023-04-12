import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Author",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Developer",
    company_name: "MangoCart MVC",
    icon: creator,
    iconBg: "#383E56",
    date: "October 2022",
    points: [
      "Developing and maintaining web applications using JavaScript and other related technologies.",
      "Implemented MVC Architecture",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Developer",
    company_name: "Movification",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Sep 2022",
    points: [
      "Developing and maintaining web applications using express.js and other related technologies.",
      "Implemented features with MVC archetecture",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React Native Devoloper",
    company_name: "Emojizer",
    icon: creator,
    iconBg: "#383E56",
    date: "Mar 2023",
    points: [
      "Developing and maintaining web applications using React Native and other related technologies.",
      // "Couldn't upload on Playstore because of Financial issues "
    ],
  },
  {
    title: "React Developer",
    company_name: "ArtiGenious",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Apr 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ArtiGenius",
    description:
      "An AI image generation tool with it's own community.Built with React & MongoDB using express.js as backend and openAI API",
    tags: [
      {
        name: "openaiapi",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Emojizer",
    description:
      "An application which can edit pictures with the emojies from different platforms and OS'es",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "cross-platform",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Moviefication",
    description:
      "A mock webapp which allows us to book shows on different screenings, Built in MVC archetecture",
    tags: [
      {
        name: "mvc",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
