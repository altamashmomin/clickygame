import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json"
//image imports (since I'm not using a server)
import Leaf_1 from "./images/Leaf_1.jpg"
import Leaf_2 from "./images/Leaf_2.jpg"
import Leaf_3 from "./images/Leaf_3.jpg"
import Leaf_4 from "./images/Leaf_4.jpg"
import Leaf_5 from "./images/Leaf_5.jpg"
import Leaf_6 from "./images/Leaf_6.jpg"
import Leaf_7 from "./images/Leaf_7.jpg"
import Leaf_8 from "./images/Leaf_8.jpg"
import Leaf_9 from "./images/Leaf_9.jpg"
import Leaf_10 from "./images/Leaf_10.jpg"
import Leaf_11 from "./images/Leaf_11.jpg"
import Leaf_12 from "./images/Leaf_12.jpg"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  // credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct! Great job!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "That was incorrect. Do you want to play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "Leaf_1":
        return `${Leaf_1}`
      case "blackberries":
        return `${Leaf_2}`
      case "Leaf_3":
        return `${Leaf_3}`
      case "Leaf_4":
        return `${Leaf_4}`
      case "Leaf_5":
        return `${Leaf_5}`
      case "Leaf_6":
        return `${Leaf_6}`
      case "Leaf_7":
        return `${Leaf_7}`
      case "Leaf_8":
        return `${Leaf_8}`
      case "Leaf_9":
        return `${Leaf_9}`
      case "Leaf_10":
        return `${Leaf_10}`
      case "Leaf_11":
        return `${Leaf_11}`
      case "Leaf_12":
        return `${Leaf_12}`
      default:
        return `${Leaf_1}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
