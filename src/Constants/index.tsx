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
  swift,
} from "../Assets";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navigation
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export type Experience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type Skill = {
  skill_name: string;
  Image: string;
  width: number;
  height: number;
};

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
    title: "Software Application Development Engineer",
    company_name: "Intel",
    icon: intel,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Present",
    points: [
      "Co-led migration of 4+ legacy apps to a Microfrontend architecture using React and TypeScript for Intel Foundry Services (IFS), reducing release cycle time by 10% and cutting maintenance overhead by 30%.",
      "Designed and implemented RESTful APIs using .NET Core, enabling new business workflows and reducing cross-service integration time by 25%.",
      "Migrated legacy API endpoints to GraphQL, enabling more efficient data fetching and cutting front-end load times by 15% across multiple applications.",
      "Automated 10-step manual critical processes into single backend endpoints, reducing processing time from 3 hours to 5 minutes.",
      "Resolved production incidents and service tickets, improving system reliability and reducing average turnaround time for issue resolution.",
    ],
  },
  {
    title: "Sr Cloud Engineer",
    company_name: "Wind River",
    icon: wr,
    iconBg: "#383E56",
    date: "Jul 2022 - Feb 2024",
    points: [
      "Built and deployed 6+ microservices using Node.js, TypeScript, and PostgreSQL, supporting 20% more users.",
      "Led front-end feature development using Angular for Wind River’s SaaS platform, driving scalable UI component design and mentoring developers on best practices.",
      "Migrated cloud provisioning from AWS CLI to Terraform and blueprints, improving deployment speed by 25%.",
      "Improved sprint planning by translating business requirements into clear user stories, increasing team velocity by 20%.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "Intel",
    icon: intel,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Jul 2022",
    points: [
      "Built and deployed 4+ critical applications serving 2000+ users for Intel’s Advance Industrial Systems group using C#, .NET Core, Apigee, and DBaaS, containerized and orchestrated via Docker and Kubernetes.",
      "Developed front-end features across 3+ apps using React, Angular, and MAUI, creating a shared component library that reduced code duplication by 20%.",
      "Maintained 99.9% uptime for Advance Industrial Systems through proactive monitoring and rapid incident resolution.",
      "Led integrations of 3rd-party tools, including replacing a licensed system with an open-source math solver; delivering cost savings of over $1M.",
      "Mentored team members via pair programming and led code reviews to maintain code quality standards.",
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
  {
    skill_name: "Swift",
    Image: swift,
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
