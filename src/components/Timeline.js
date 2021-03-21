import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { timelineData } from "../data/timelineData";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  const styles = {
    fontSize: "1.5rem",
    color: "#fff",
    fontWeight: 400,
  };

  return (
    <VerticalTimeline>
      {timelineData.map((element) => (
        <VerticalTimelineElement
          key={element.id}
          date={element.date}
          iconStyle={{ backgroundColor: "transparent" }}
        >
          <h2 style={styles}>{element.title}</h2>
          <p style={{ fontSize: "1.3rem" }}>{element.description}</p>
          <p style={{ fontSize: "1.3rem" }}>{element.addition}</p>
          {element.spec ? (
            <p style={{ fontSize: "1.3rem" }}>{element.spec}</p>
          ) : null}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
