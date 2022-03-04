import weather from "../images/weather-app.jpg";
import leadDistribution from "../images/leadDistribution.jpg";
import votingApp from "../images/votingApp.jpg";
import billingSystem from '../images/billingSystem.png'
export const projectsData = [
  {
    title: "BILLING SYSTEM",
    description:
      "System for managing a mobile phone subscriptions, installment plan and billings.",
    technologies: "React, Redux, Redux Toolkit, Java Spring Boot, PL/SQL",
    img: billingSystem,
  },
  {
    title: "LEAD DISTRIBUTION PLATFORM",
    description:
      "Lead and user management platform which contains statistical data and engine configurator.",
    technologies: "React, React Hooks, Azure, SCSS" ,
    img: leadDistribution,
  },
  {
    title: "VOTING APPLICATION",
    description:
      "Application with several voting cycles for the best universities in Italy. Collecting votes and creating rankings, integrated with CMS",
    technologies: "React, React Context, Drupal, Swagger",
    img: votingApp,
  },
  {
    title: "Weather App",
    description:
      "Developed a mobile application designed during the international student workshops organized by Facebook, allowing the user to check current and long-term weather.",
    technologies: "React Native, React Hooks, Context API, REST API",
    img: weather,
  },
];
