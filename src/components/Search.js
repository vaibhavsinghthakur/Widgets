import React, { useState, useEffect } from "react";
import "./Search.css";
import axios from "./axios";
import "./Search.css";

function Search() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get("", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: input,
        },
      });
      setResults(response.data.query?.search);
      return response;
    }
    if (input && !results.length) {
      fetchdata();
    } else {
      //setting a delay 0f 550sec till user ends typing and saving timeoutId (interval) and later removing it.
      const timeoutId = setTimeout(() => {
        if (input) {
          fetchdata();
        }
      }, 400);

      //deleting old timeoutId and setting it to new
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [input]);

  return (
    <div className="search">
      <div className="search_h1">
        <h1>Wikipedia Search</h1>
      </div>
      <label>Enter Search Term</label>
      <input
        className="search_input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="ui celled list">
        {results?.map((result) => {
          return (
            <div key={result.pageid} className="item it">
              <div className="right floated content ">
                <a
                  className="ui button"
                  target="_blank"
                  href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >
                  {" "}
                  Go
                </a>
              </div>
              <div className="content">
                <div className="content_h1">{result.title}</div>
                <span
                  className="span"
                  dangerouslySetInnerHTML={{ __html: result.snippet }}
                ></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
