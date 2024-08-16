import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  jobit,
  tripguide,
  praveen,
  nextImg,
  framerImg,
  aspImg,
  pwaImg,
  tailwindImg,
  current,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Experiences",
    title: "Experiences",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "blog",
    title: "Blogs",
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
    title: "ReactJs Developer",
    icon: reactjs,
  },
  {
    title: "Javascript Developer",
    icon: javascript,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web developer",
    company_name: "Web Tech Pvt. Ltd.",
    icon: praveen,
    iconBg: "#383E56",
    date: "Nov 2020 - May 2022",
    points: [
"Built responsive websites using React, Tailwind CSS, and TypeScript, improving user experience and performance.",
   "Collaborated with cross-functional teams to deliver projects on time, ensuring technical and design requirements were met.",
  "Implemented scalable front-end architectures with reusable components in Next.js, enhancing development efficiency across projects." ],
  },
  
  {
    title: "Self Learning",
    company_name: "Open Source",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Developing soft skills like HTML, CSS, Javascript, and ReactJs",
      "Learnt and followed department processes to help develop software according to requirements.",
      "identified and suggested opportunities for innovative platform improvements, using developed design and building skills.",
      "Developing and maintaining web applications using React.js and other related technologies.",
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
    name: "FInd Country Details",
 
    image: current,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const blogs = [
  {
    name: "Why Next.js is Revolutionizing Web Development",
    image: nextImg,
    date:"14 Aug,2024",
    source_code_link: "https://github.com/",
    blog_link: "https://medium.com/@vidhichauhan2712/why-next-js-is-revolutionizing-web-development-d49ac78991f6",
  },
  
  {
    name: "Migrating from ASP.NET to .NET Core: Key Features and Considerations",
    image: aspImg,
    date:"14 Aug,2024",
    source_code_link: "https://github.com/",
    blog_link: "https://medium.com/@vidhichauhan2712/migrating-from-asp-net-to-net-core-key-features-and-considerations-4466f1562c5c",
  },
  {
    name: "Animating the Web with Framer Motion: A New Era in UI/UX Design",
    image: framerImg,
    date:"14 Aug,2024",
    source_code_link: "https://github.com/",
    blog_link: "https://medium.com/@vidhichauhan2712/animating-the-web-with-framer-motion-a-new-era-in-ui-ux-design-e46d77a221bb",
  },
 
  {
    name: "Progressive Web Apps (PWA): The Future of Web Development",
    image: pwaImg,
    date:"14 Aug,2024",
    source_code_link: "https://github.com/",
    blog_link: "https://medium.com/@vidhichauhan2712/progressive-web-apps-pwa-the-future-of-web-development-e9070b271a4c",
  },
  {
    name: "Tailwind CSS: Revolutionizing Front-End Development",
    image: tailwindImg,
    date:"14 Aug,2024",
    source_code_link: "https://github.com/",
    blog_link: "https://medium.com/@vidhichauhan2712/tailwind-css-revolutionizing-front-end-development-f061ac69ba08",
  },
  {
    name: "Exploring the Latest Features in ASP.NET: What’s New and Why It Matters",
    image: aspImg,
    date:"14 Aug,2024",
    source_code_link: "https://github.com/",
    blog_link: "https://medium.com/@vidhichauhan2712/exploring-the-latest-features-in-asp-net-whats-new-and-why-it-matters-9e75c5b55fc5",
  },
];

export { services, technologies, experiences, testimonials, projects, blogs };
