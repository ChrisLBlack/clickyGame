import React, { Component } from "react";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Jumbo from "./components/JumboTron/Jumbo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbo />
        <Footer />
      </div>
    );
  }
}

export default App;
