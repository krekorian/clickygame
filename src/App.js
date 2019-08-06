import React, { Component } from 'react';
import logos from './logos.json';
import Logo from "./components/logo/logo.js"
import './App.css';
import Window from "./components/window/window";
import Main from "./components/main/main";
import Header from "./components/header/header";


class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    logos,
    score: 0,
    highscore: 0,
    message: "click on any icon, do not click on the same icon twice"
  };


  clickLogo = a => {
    // console.log("clicked item");
    // console.log(a);
    // console.log("after click");
    // console.log(logos)

    // console.log("after shuffle");
    // console.log(logos);
    this.state.logos.find((obj, index) => {
      if (obj.id === a) {
        console.log("status before changing");
        console.log(logos[index].guessed);
        console.log(obj.id)
        if (logos[index].guessed === false) {
          logos[index].guessed = true;
          console.log("status after changing");
          console.log(logos[index].guessed)
          this.setState({
            logos: shuffle(logos), function() {
              console.log("asfdasf");
            }
          });
          this.setState({ score: this.state.score + 1 }, function () {
            console.log("adding to score");
          });
          this.setState({ message: "Correct guess" }, function () {
            console.log("Correct guess");
          });

          if (this.state.score >= this.state.highscore) {
            this.setState({ highscore: this.state.highscore + 1 }, function () {
              console.log("adding to highscore");
            });
          }
          return true
        } else {
          this.resetScore();
        }


      }
      // console.log("index=");
      // console.log(index);
      // console.log("object=");
      // console.log(obj.id);
      // console.log(obj.guessed);



    })

  }

  resetScore = () => {
    this.setState({ score: 0 }, function () {
      console.log("resetting score");
    });
    this.setState({ message: "Incorrect guess" }, function () {
      console.log("Incorrect guess");
    });
    this.state.logos.forEach(element => {
      element.guessed = false;
    });
  }


  render() {
    console.log("before app.js return");
    console.log(logos)
    return (

      <Window>
        <Header message={this.state.message} score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        <Main>
          {this.state.logos.map(logo => (


            <Logo
              clickLogo={this.clickLogo}
              id={logo.id}
              key={logo.id}
              image={logo.image}

            />


          ))}
        </Main>


      </Window>


    )
  }

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


export default App;
