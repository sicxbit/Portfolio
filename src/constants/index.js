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
  emojizer,
  artigenius,
  summarizer
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
    title: "Data Analyst",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    company_name: "Aeon ecommerce",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "November 2023 ",
    points: [
      "Conceptualized, designed, and developed a highly modular and configurable e-commerce website and an intuitive admin dashboard for efficient management.",
      "Ensured code maintainability and reusability by implementing a flexible architecture that allows users to easily customize the platform to meet their specific needs.",
      "Developed with React.js and Next.js, utilizing a component-based architecture for easy modification and extension and utilized Styled Components for styling, allowing for seamless theming and styling adjustments.",
    ],
  },
  {
    title: "Developer",
    company_name: "Article summarizer",
    icon: creator,
    iconBg: "#383E56",
    date: "Mar 2023",
    points: [
      "Developed an AI-powered summarizer using advanced NLP techniques to extract key information and create concise summaries, enhancing readability and saving time. The system efficiently handles diverse content, providing accurate and coherent summaries across various topics and domains.",
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

const testimonials = []
const projects = [
  {
    name: "Digestify",
    description:
      "An article summarizer which uses openAI API as backend. Built with Redux and Rapid API as API client",
    tags: [
      {
        name: "openaiapi",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "vite-react",
        color: "pink-text-gradient",
      },
    ],
    image: summarizer,
    source_code_link: "https://gitlab.com/arunjith.official/summerizer/",
    deployment_link: "https://summarizer-amber.vercel.app/",
    download_link:"",
  },
  {
    name: "ArtiGenius",
    description:
      "An AI image generation tool with it's own community.Built with MERN stack and openAI API",
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
    image: artigenius,
    source_code_link: "https://gitlab.com/arunjith.official/ai-image-generator-mern",
    deployment_link: "https://artigenius.vercel.app/",
    download_link:"",
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
    image: emojizer,
    source_code_link: "https://gitlab.com/arunjith.official/appreactnative",
    deployment_link: "",
    download_link:"www.google.com",
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
    source_code_link: "https://gitlab.com/arunjith.official/movieticketbookingusingmongodbandmvc",
    deployment_link: "",
    download_link:"",
  },
];

export { services, technologies, experiences, testimonials, projects };
