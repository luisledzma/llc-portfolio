import {
  angular,
  aws,
  azure,
  backend,
  cloud,
  computer,
  csharp,
  css,
  docker,
  dotNet,
  git,
  graphql,
  html5,
  intel,
  java,
  js,
  kubernetes,
  mobile,
  mongodb,
  mysql,
  nextjs,
  nodejs,
  postgresql,
  python,
  react,
  sass,
  tailwind,
  terraform,
  ts,
  wr,
} from "../Assets";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navigation
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const navLinks = [
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Section
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const services = [
  {
    title: "Frontend Developer",
    icon: computer,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Engineer",
    icon: cloud,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: intel,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: wr,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: intel,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const frontend_skills = [
  {
    skill_name: "Angular",
    Image: angular,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: css,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Html 5",
    Image: html5,
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    Image: js,
    width: 80,
    height: 80,
  },
  {
    skill_name: "NextJs",
    Image: nextjs,
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: react,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Sass",
    Image: sass,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind Css",
    Image: tailwind,
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    Image: ts,
    width: 80,
    height: 80,
  },
];

const backend_skills = [
  {
    skill_name: "C#",
    Image: csharp,
    width: 80,
    height: 80,
  },
  {
    skill_name: ".Net Core",
    Image: dotNet,
    width: 80,
    height: 80,
  },
  {
    skill_name: "GraphQL",
    Image: graphql,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    Image: java,
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    Image: mongodb,
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySql",
    Image: mysql,
    width: 80,
    height: 80,
  },
  {
    skill_name: "NodeJs",
    Image: nodejs,
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    Image: postgresql,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    Image: python,
    width: 80,
    height: 80,
  },
];

const fullStack_skills = [
  {
    skill_name: "Aws",
    Image: aws,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Azure",
    Image: azure,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    Image: docker,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kubernetes",
    Image: kubernetes,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Terraform",
    Image: terraform,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Git",
    Image: git,
    width: 80,
    height: 80,
  },
];

export {
  backend_skills,
  experiences,
  frontend_skills,
  fullStack_skills,
  navLinks,
  services,
};
