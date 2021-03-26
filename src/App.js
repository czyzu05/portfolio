import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import HamburgerMenu from "./components/HamburgerMenu";
import Contact from "./views/Contact";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <ScrollToTop />
        <HamburgerMenu toggle={toggle} isOpen={isOpen} />
        <Navbar isOpen={isOpen} toggle={toggle} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
