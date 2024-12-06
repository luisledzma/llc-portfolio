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
      "Develop, design, and test web components and APIs based on business requirements using .Net Core, C# and React.",
      "Coaching team members and lead team.",
    ],
  },
  {
    title: "Sr Cloud Engineer",
    company_name: "Wind River",
    icon: wr,
    iconBg: "#383E56",
    date: "Jul 2022 - Feb 2024",
    points: [
      "Leading development efforts for the innovative Wind River Studio project, dedicated to providing a cloud-native toolset for mission-critical systems. My contributions span the entire software development lifecycle.",
      "Designing and building small software pieces called microservices using Node.js and Kubernetes to make sure the project is scalable.",
      "Prioritizing security by hardening Docker images to fortify our application against potential vulnerabilities.",
      "Deploying resources in AWS and Azure using IaaC with technologies like terraform and blueprints.",
    ],
  },

  {
    title: "Software Development Engineer",
    company_name: "Intel",
    icon: intel,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Jul 2022",
    points: [
      "Worked on a linear programming project, eliminating 3rd party dependencies and introducing an open-source solver solution, resulting in annual savings exceeding $1 million in licensing costs and boosting business performance.",
      "Developed, designed, and thoroughly tested APIs using a microservices architecture, with a focus on .Net Core and C#.",
      "Created various web application components and introduced new features by leveraging technologies such as ReactJs and Angular.",
      "Assumed responsibility for designing, developing, enhancing, and testing database queries, views, and stored procedures to ensure efficient data handling.",
      "Exposed APIs through Apigee to facilitate integration with external organizations seeking to incorporate the team’s applications.",
      "Implemented Continuous Integration/Continuous Deployment (CI/CD) pipelines and successfully deployed applications to production using GitLab and GitHub actions.",
      "Played a pivotal role in mentoring and coaching new team members, offering guidance through code reviews and engaging in pair programming sessions.",
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
