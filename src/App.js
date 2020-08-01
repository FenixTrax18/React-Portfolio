import React from 'react';
import './App.css';
import { HashRouter as HashRouter, Link } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPg from "./pages/about";
import PortfolioPg from "./pages/portfolio";
// import Portfolio from './components/Portfolio';

function App() {
  return (
    <HashRouter>
      <div>
          <Link to="/React-Portfolio/" component={AboutPg} />
          <Link to="/React-Portfolio/Portfolio/" component={PortfolioPg} />
      </div>
    </HashRouter>
  );
}

export default App;
