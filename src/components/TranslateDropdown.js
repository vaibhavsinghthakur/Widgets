import React, { useState, useEffect, useRef } from "react";

function TranslateDropdown({ selected, options, onSelectedChange }) {
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
    <div ref={ref} className="ui form" style={{ marginTop: "20px" }}>
      <div className="field">
        <label className="label">Select a language</label>
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
                  onClick={() => onSelectedChange(option)}
                >
                  {option.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TranslateDropdown;
