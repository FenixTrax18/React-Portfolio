import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioPg from "./pages/portfolio";
import AboutPg from "./pages/about";
// import Portfolio from './components/Portfolio';

{/* import images (issue with paths), import node projects, fix FDL, ?pages/routing? */}

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/React-Portfolio/" component={AboutPg} />
          <Route exact path={process.env.PUBLIC_URL+"/Portfolio/"} component={PortfolioPg} />
      </div>
    </Router>
  );
}

export default App;
