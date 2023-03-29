import {
  mobile,
  backend,
  creator,
  web,
  tesla,
  carrent,
  jobit,
  tripguide,
  singaporepoly,
  github,
  instagram,
  linkedin,
  githubsocial,
  lms
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Works",
    title: "Projects",
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

const social = [
  {
    id: "github",
    title: "github",
    icon: githubsocial,
    link: "https://www.github.com/devynchew"
  },
  {
    id: "linkedin",
    title: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/devyn-chew-798653126/"
  },
  {
    id: "instagram",
    title: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/devyn_chew/",
  },
];


const experiences = [
  {
    title: "Diploma in Applied AI & Analytics",
    company_name: "Singapore Polytechnic",
    icon: singaporepoly,
    iconBg: "#E6DEDD",
    date: "March 2020 - Mar 2023",
    points: [
      "Picked up HTML, CSS and Javascript and learnt how to use React in one of my games store website.",
      "Learnt Python, data visualisation and how to apply machine learning and deep learning to solve problems.",
      "Created a full stack inventory demand forecast web app using Angular, D3.js and .NET.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "eFusion Technology Pte Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Aug 2023",
    points: [
      "Gained key insights into best practices for eCommerce websites such as SEO, hosting, CDN and CMS.",
      "Hands-on practice on Prestashop and Wordpress.",
      "Honed CSS skills by implementing responsive design and unique figma layouts.",
    ],
  },
];


const projects = [
  {
    name: "Learning Management System Website",
    description:
      "Front-end LMS web-based platform that serves as a business landing page, allowing users to view their services, customer testimonies and contact page.",
    tags: [
      {
        name: "HTML"
      },
      {
        name: "CSS"
      },
      {
        name: "Javascript"
      },
    ],
    image: lms,
    github_code: "https://github.com/devynchew/learning-management-system-website",
    livedemo: "https://tourmaline-tiramisu-5ba136.netlify.app/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    github_code: "https://github.com/devynchew/learning-management-system-website",
    livedemo: "https://github.com/",
  },
  {
    name: "LMS",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    github_code: "https://github.com/devynchew/learning-management-system-website",
    livedemo: "https://github.com/",
  },
];

export { navLinks, social, projects, experiences };