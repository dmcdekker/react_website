import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
/*import Footer from "./Footer";*/
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Routes />
        
      </div>
    );
  }
}

export default App;