import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import HamburgerMenu from "./components/HamburgerMenu";
import Contact from "./views/Contact";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <HamburgerMenu toggle={toggle} isOpen={isOpen} />
        <Navbar isOpen={isOpen} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
