import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioPg from "./pages/portfolio";
// import Portfolio from './components/Portfolio';

{/* import images (issue with paths), import node projects, fix FDL, ?pages/routing? */}

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/React-Portfolio/" component={PortfolioPg} />
          <Route exact path="/React-Portfolio/about" component={PortfolioPg} />
      </div>
    </Router>
  );
}

export default App;
