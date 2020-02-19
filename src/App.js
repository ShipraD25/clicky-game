import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import Gamecard from "./components/Gamecard";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Images from "./images.json"

class App extends Component {
  state = {
    Images,
    currentscore: 0,
    topscore: 0,
    clickedcard: [],
    message: "Click an image to begin!"
  }

  componentDidMount() {
    console.log(this.state.Images)
    //show all the images and message click on the image to begin
  }

  handleBtnClick = id => {

    if (this.state.clickedcard.indexOf(id) === -1) {   // no clicked before
      let tempClickedcard = this.state.clickedcard
      tempClickedcard.push(id)
      this.setState({
        currentscore: this.state.currentscore + 1,
        topscore: this.state.currentscore + 1 > this.state.topscore ? this.state.currentscore + 1 : this.state.topscore,
        clickedcard: tempClickedcard,
        Images: this.shuffle(this.state.Images),
        message: "You guessed correctly!"

      })

    } else {
      this.setState({
        currentscore: 0,
        clickedcard: [],
        Images: this.shuffle(this.state.Images),
        message: "You lost! "
      })

    }

  }
  shuffle = elements =>{
    let newImages = elements.sort(() => Math.random() - 0.5)
    return newImages
  }
  render() {
    return (
      
      <div>
        <Navbar
          score={this.state.currentscore}
          topscore={this.state.topscore}
          message={this.state.message}
        >
        </Navbar>
        <Title/>
        <Wrapper>
        <div className="game-container">
          {this.state.Images.map(elem => (
            <Gamecard
              key={elem.id}
              id={elem.id}
              image={elem.image}
              handleBtnClick={this.handleBtnClick}
            />
          ))}
         </div>
        </Wrapper>
        <Footer />
      </div>
      
    );
  }
}
export default App;
