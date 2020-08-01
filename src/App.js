import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPg from "./pages/about";
import PortfolioPg from "./pages/portfolio";
// import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/React-Portfolio/" component={AboutPg} />
          <Route exact path="/React-Portfolio/Portfolio/" component={PortfolioPg} />
      </div>
    </Router>
  );
}

export default App;
