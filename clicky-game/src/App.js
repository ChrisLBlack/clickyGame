import React, { Component } from "react";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Jumbo from "./components/JumboTron/Jumbo";
import Wrapper from "./components/Wrapper/Wrapper";
import ImageCard from "./components/ImageCard/ImageCard";
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
        <Wrapper>
          {this.state.images.map(pic => (
            <ImageCard key={pic.id} id={pic.id} image={pic.image} />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
