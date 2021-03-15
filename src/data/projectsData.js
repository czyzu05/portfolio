import weather from "../images/weather-app.jpg";
import ipAddressTracker from "../images/ip-address-tracker.jpg";
import contactBook from "../images/contact-book.PNG";
export const projectsData = [
  {
    title: "IP Address Tracker",
    description:
      "Application which integrate two APIs. IPify for fetch data connected with provided address IP and Leaflet for display geolocation.",
    technologies: "React, React Hooks, REST APIs, JavaScript",
    img: ipAddressTracker,
  },
  {
    title: "Weather App",
    description:
      "Mobile application that was created at the workshops organized by Facebook. Application allows you to check the current and long-term weather. Used Context API for state management.",
    technologies: "React Native, React Hooks, Context API, REST API",
    img: weather,
  },
  {
    title: "Exchange Rate App",
    description:
      "Application for convert the most popular currencies into polish currency (PLN). Actual currencies are fetching from NBP API",
    technologies: "React, Axios, React Hooks",
    img: contactBook,
  },
  {
    title: "Contact Book",
    description:
      "CRUD Single Page Application where I used Redux for state management.",
    technologies: "React, React Router, Redux, React Hooks",
    img: contactBook,
  },
];
