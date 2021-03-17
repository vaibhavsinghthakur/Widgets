import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";
function Dropdown() {
  const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "A shade of Blue",
      value: "blue",
    },
  ];

  const [selected, setSelected] = useState(options[0]);

  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    function onBodyClick(event) {
      //here we are checking current status of open form
      //this will check if element clicked is inside the form or outside. If inside return nothing means close the dropdown and if outside then also  close dropdown by usetOpen(false).
      if (ref.current?.contains(event.target)) {
        return;
      } else {
        setOpen(false);
      }
    }

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click".length, onBodyClick);
    };
  }, []);

  return (
    <div className="dropdown">
      <h1>Dropdown Stuff</h1>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">Select a Color</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu  ${open ? "visible transition" : ""}`}>
              {options.map((option, id) => {
                if (option.value === selected.value) {
                  return null;
                }
                return (
                  <div
                    key={id}
                    className="item"
                    onClick={() => setSelected(option)}
                  >
                    {option.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ color: `${selected.value}` }}>
        {`The text is ${selected.value}`}
      </h1>
    </div>
  );
}

export default Dropdown;
