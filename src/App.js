import React from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const items = [
    {
      title: "What is React",
      content: "React is a front end javascript framework",
    },
    {
      title: "why use React",
      content: "Recat is favourite JS library among engineers",
    },
    {
      title: "How do you use React??",
      content: "You use React by creting components",
    },
  ];

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/Accordion">
            <Accordion items={items} />
          </Route>
          <Route path="/Dropdown">
            <Dropdown />
          </Route>
          <Route path="/Translate">
            <Translate />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
/*
https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming
*/

// <Search />
export default App;
