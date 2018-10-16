import React, { Component } from "react";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Jumbo from "./components/JumboTron/Jumbo";
import Image from "./components/Image/Image";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images
  };
  render() {
    return (
      <div>
        <NavBar />
        <Jumbo />

        <div>
          {this.state.images.map(pic => (
            <Image key={pic.id} id={pic.id} image={pic.image} />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
