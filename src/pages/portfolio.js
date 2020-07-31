import React, { Component } from "react";
import PortNav from '../components/Navbar';
import Face from '../components/Face';
import About from '../components/About';
import Quote from '../components/Quote';
import PortHeader from '../components/PortHeader';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import portCardArr from "../cards.json";

class PortfolioPg extends Component {
  state = {
    portCardArr
  };

  render() {
    return (
      <div className="App parallax">
        <PortNav/>
        <Face/>
        <span id="about"></span>
        <About/>
        <Quote/>
        <PortHeader/>
        <Portfolio attrPortCardArr={this.state.portCardArr}/>  
        <Footer/>
      </div>
    );
  }
}
  
export default PortfolioPg;
