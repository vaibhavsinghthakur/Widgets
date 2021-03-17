import React, { useState } from "react";
import TranslateDropdown from "./TranslateDropdown";
import Convert from "./Convert";
const options = [
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },

  {
    label: "Turkish",
    value: "tr",
  },
  {
    label: "Gujarati",
    value: "gu",
  },
];

function Translate() {
  const [language, setlanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div style={{ padding: "30px" }}>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <TranslateDropdown
        selected={language}
        options={options}
        onSelectedChange={setlanguage}
      />

      <Convert text={text} language={language} />
    </div>
  );
}

export default Translate;
