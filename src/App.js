import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/navtabs";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Jumbotron from "./components/jumbotron";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Jumbotron>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Footer>
          <span>mXiongDesign | Built with ♥</span>
        </Footer>
        </Jumbotron>
        
      </div>
    </Router>
  );
}

export default App;
