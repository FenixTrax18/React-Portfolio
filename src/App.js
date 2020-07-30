import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioPg from "./pages/portfolio";
import Portfolio from './components/Portfolio';
import Images from '../src/assets/images';

{/* import images (issue with paths), import node projects, fix FDL, ?pages/routing? */}

function App() {
  return (
      <Router>
      <div>
          <Route exact path="/" component={PortfolioPg} />
      </div>
    </Router>
  );
}

export default App;
