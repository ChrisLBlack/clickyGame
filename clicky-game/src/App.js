import React, { Component } from "react";
import ImageCard from "./components/ImageCard/ImageCard";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import Column from "./components/Column/Column";
import Footer from "./components/Footer/Footer";
import images from "./images.json";
import "./App.css";
//this function shuffles the images in an array and throws them on the DOM
function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    images,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };
  //event handler for clicking on an image
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };
  //increment counter for score keeping
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };
  //resets the game if wrong / currentScore back to zero
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "WRONGGG!",
      clicked: []
    });
    this.handleShuffle();
  };
  //shuffles the images on page
  handleShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({ images: shuffledImages });
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          title="Rick And Morty Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Clicky Game! Click on an image to earn points, but don't click on any
          image more than once!
        </Title>

        <Container>
          <Row>
            {this.state.images.map(image => (
              <Column size="md-3 sm-6">
                <ImageCard
                  key={image.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={image.id}
                  image={image.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
