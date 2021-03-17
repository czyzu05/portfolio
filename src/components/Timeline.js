import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { timelineData } from "../data/timelineData";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <VerticalTimeline>
      {timelineData.map((element) => (
        <VerticalTimelineElement
          key={element.id}
          date={element.date}
          iconStyle={{ backgroundColor: "transparent" }}
        >
          <h2 style={{ fontSize: "1.5rem", color: "#fff", fontWeight: 400 }}>
            {element.title}
          </h2>
          <p style={{ fontSize: "1.3rem" }}>{element.description}</p>
          <p style={{ fontSize: "1.3rem" }}>{element.addition}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
