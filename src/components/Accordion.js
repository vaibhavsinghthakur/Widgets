import React, { useState } from "react";
import "./Accordion.css";
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const ontitleClicked = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="ui styled accordion acordion">
      {items.map((item, index) => {
        const active = index === activeIndex ? "active" : "";
        return (
          <div key={index} onClick={() => ontitleClicked(index)}>
            <div className={`title ${active}`}>
              <i className="dropdown icon"></i>
              {item.title}
            </div>
            <div className={`content ${active}`}>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
