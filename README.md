# Clicky-Game
This is a memory game in which user has to click on an images to gain points. The deck is shuffled everytime the user clicks a card. The catch is to not repeat any card otherwise you loose and game starts over.
This is my first react app.
### App-Demo 
![app-demo](https://media.giphy.com/media/js6NBhYYeHC2fQ1Srz/giphy.gif)

### Technology used
- React
- HTML
- Bootstrap
- CSS

 ### Code Snippet

This is the part of the code that I used to handle the click of the card and also the shuffling to the card deck. Also a sniipet of how everything renders on the page.

```
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
```
#### Deployed Link 
-
#### My links
 - Linkedin https://www.linkedin.com/in/shipra-dyundi-01ba0b14b/
