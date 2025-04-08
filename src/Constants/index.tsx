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
    title: "Software Development Engineer",
    company_name: "Intel",
    icon: intel,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Present",
    points: [
      "Co-led front-end development for Intel Foundry Services (IFS), migrating 4+ legacy apps to a scalable Microfrontend architecture using React and TypeScript—improving UX and reducing maintenance costs.",
      "Provided technical mentorship through code reviews and architectural guidance, helping reduce front-end defects by 30% and accelerating feature delivery by 20% across the team.",
    ],
  },
  {
    title: "Sr Cloud Engineer",
    company_name: "Wind River",
    icon: wr,
    iconBg: "#383E56",
    date: "Jul 2022 - Feb 2024",
    points: [
      "Built and deployed microservices using Node.js, TypeScript, and PostgreSQL, boosting platform scalability by 30% and reducing latency. Collaborated cross-functionally to ensure seamless integration.",
      "Led front-end feature development using Angular for Wind River’s core SaaS platform, driving the creation of scalable and reusable UI components. Provided technical leadership and guided developers on best practices to ensure the successful delivery of high-quality features.",
      "Migrated cloud provisioning from AWS CLI to Terraform and blueprints, improving deployment speed and resource efficiency by 30% across AWS and Azure.",
      "Streamlined sprint planning by translating business needs into clear user stories and tasks, improving backlog clarity and increasing team velocity by 20%.",
    ],
  },

  {
    title: "Software Development Engineer",
    company_name: "Intel",
    icon: intel,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Jul 2022",
    points: [
      "Designed, developed, and deployed over 4 production-ready Tier 1 applications for Intel’s Advance Industrial Systems group, building microservices and APIs using C#, .NET Core, Apigee, and DBaaS; containerized and orchestrated via Docker and Kubernetes.",
      "Contributed to front-end development using React, Angular and MAUI across 3+ applications, emphasizing reusability and user experience; provided guidance to developers on best practices and accessibility standards.",
      "Provided full production support within the Advance Industrial Systems organization, ensuring 99.9% uptime through proactive monitoring, rapid issue resolution, and continuous system health checks.",
      "Mentored new team members, helping them ramp up quickly through pair programming and knowledge-sharing sessions; led code reviews to uphold high standards and improve overall team code quality.",
      "Led integrations of 3rd-party tools across multiple teams, with the most impactful being the replacement of a licensed system by integrating an open-source math solver—boosting performance and delivering cost savings of over $2M.",
      "Collaborated with senior engineers and product owners to refine epics into user stories, improving sprint planning and deepening Agile workflow experience.",
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
