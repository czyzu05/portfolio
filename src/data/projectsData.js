import weather from "../images/weather-app.jpg";
import ipAddressTracker from "../images/ip-address-tracker.jpg";
import contactBook from "../images/contact-book.PNG";
export const projectsData = [
  {
    title: "Weather App",
    description:
      "Developed a mobile application designed during the international student workshops organized by Facebook, allowing the user to check current and long-term weather.",
    technologies: "React Native, React Hooks, Context API, REST API",
    img: weather,
    path: "https://github.com/czyzu05/weather-app",
  },
  {
    title: "IP Address Tracker",
    description:
      "Created an interactive web application which fetches information about given address IP and displays associated geolocation.",
    technologies: "React, React Hooks, REST APIs",
    img: ipAddressTracker,
    path: "https://github.com/czyzu05/ip-address-tracker",
  },
  {
    title: "Exchange Rate App",
    description:
      "Application for converting foreign currencies into polish currency (PLN). Actual currencies are fetched from NBP API",
    technologies: "React, React Hooks, CSS",
    img: contactBook,
    path: "https://github.com/czyzu05/exchange-rates",
  },
  {
    title: "Contact Book",
    description:
      "Designed and implemented CRUD app called Contact Book allowing the user to store and manage contacts.",
    technologies: "React, Redux, React Router, React Hooks",
    img: contactBook,
    path: "https://github.com/czyzu05/contact-book",
  },
];
