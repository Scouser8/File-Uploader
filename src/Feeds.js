import React from "react";
import "./Feeds.css";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import FileDetails from "./FileDetails";
import Summary from "./Summary";
import Statistics from "./Statistics";
import Form from "./Form";

function Feeds() {
  return (
    /* As we are wrapping our application in a BrowserRouter tag as we mentioned in the 
    App Component, so we can display a specific component depending on the URI determined 
    from the NavBar tabs switching. By default Form & FileDetails will be rendered because 
    '/' is the default route */
    <div className="feeds">
      <NavBar />

      <Route exact path="/" component={Form} />
      {/* Statistics & Summary are for testing Navigation purpose only. */}
      <Route exact path="/Statistics" component={Statistics} />
      <Route exact path="/Summary" component={Summary} />

      {/* This is just a logical order, it doesn't matter if we put it above Statistics & 
        Summary. */}
      <Route exact path="/" component={FileDetails} />
    </div>
  );
}

export default Feeds;
