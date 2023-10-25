import weather from "../images/weather-app.jpg";
import leadDistribution from "../images/leadDistribution.jpg";
import taskmanager from '../images/taskmanager.png'
import billingSystem from '../images/billingSystem.png'
export const projectsData = [
  {
    title: "TASK MANAGER",
    description:
      "Web-based application for coordinating and streamlining workflows on construction sites, enabling coworkers to stay aligned on real-time progress, the status of operating machines, and available resources.",
    technologies: "React, TypeScript, React Hooks, Context API, Styled Components",
    img: taskmanager,
    link: "https://tasks.connect.volvoce.com/"
  },
  {
    title: "BILLING SYSTEM",
    description:
      "The platform allowed administrators to easily process payments, view detailed billing information, and customize installment plans to meet their customers needs.",
    technologies: "React, Redux, Redux Toolkit, Java Spring Boot, PL/SQL",
    img: billingSystem,
    link: ""
  },
  {
    title: "LEAD DISTRIBUTION PLATFORM",
    description:
      "The innovative application designed to streamline insurance services by seamlessly connecting insurers with customers, while facilitating data collection and generating detailed charts to visualize sales progress.",
    technologies: "React, React Hooks, ChartJS, SCSS",
    img: leadDistribution,
    link: ""
  },
  {
    title: "WEATHER APP",
    description:
      "Developed a mobile application designed during the international student workshops organized by Facebook, allowing the user to check current and long-term weather.",
    technologies: "React Native, React Hooks, Context API, REST API",
    img: weather,
    link: "https://github.com/czyzu05/weather-app"
  },
];
