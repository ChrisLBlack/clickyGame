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
        <Image>
          <div>
            {this.state.images.map(image => (
              <div size="md-3 sm-6">
                <Image key={image.id} id={image.id} image={image.image} />
              </div>
            ))}
          </div>
        </Image>
        <Footer />
      </div>
    );
  }
}

export default App;
