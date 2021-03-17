import React, { useState, useEffect } from "react";
import axios from "axios";
function Convert({ language, text }) {
  const [output, setOutput] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 400);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setOutput(response.data.data.translations[0].translatedText);
      return response;
    }
    //This is cleanup function
    fetchData();
  }, [language, debouncedText]);

  return (
    <div style={{ marginTop: "30px" }}>
      {output ? <span style={{ fontSize: "2rem" }}>Output</span> : null}

      <h1 className="" style={{ fontSize: "2.3rem" }}>
        {output}
      </h1>
    </div>
  );
}

export default Convert;
