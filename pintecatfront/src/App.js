import React, { Component } from 'react';
import _ from 'lodash';
import Header from "./components/Header";
import HeaderButton from "./components/HeaderButton";
import CatCard from "./components/CatCard";
import CardsWrapper from "./components/CardsWrapper";
import API from "./utils/API"
import './App.css';

// remarks:
// 1. move "getImages()", "getFacts()" and "Promise.all" to a different file.
// 2. make sorting click to sort first word when clicked again
// 3. change the array in the state to object :)
// 4 take the "CardsWrapper" oparation logic (showing cards) out of the render 
// 5. change "Show Fav Cats" button text when clicked

class App extends Component {

  constructor() {
    super();
    this.state = {
      cards: [],
      showOnlyFav: false
    };
    this.handleSortClickButton = this.handleSortClickButton.bind(this);
    this.handleFavClickButton = this.handleFavClickButton.bind(this);
    this.handleFavClickCard = this.handleFavClickCard.bind(this);
  }

  componentDidMount() {
    function getImages() {
      return API.getPic()
        .then(results => {
          var parser = new DOMParser();
          // returns a Document, but not a SVGDocument nor a HTMLDocument (can use "text/html")
          var doc = parser.parseFromString(results.data, "application/xml");
          // turn HTMLCollection (of all "url" tags) to an array- then map throgh it and get the image src
          let images = Array.from(doc.getElementsByTagName("url")).map(urlElement => urlElement.textContent)
          return Promise.resolve(images);
        }, (error) => {
          console.log('error:', error);
        })
    };

    function getFacts() {
      return API.getText()
        .then(results => {
          let facts = results.data.data.map(element => element.fact);
          return Promise.resolve(facts)
        }, (error) => {
          console.log('error:', error);
        })
    };

    Promise.all([getImages(), getFacts()]).then(([images, facts]) => {
      let cards = _.zip(images, facts, _.fill(Array(25), false), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
      console.log("cards:", cards);
      this.setState({ cards: cards });
    });
  }

  handleSortClickButton(event) {
    event.preventDefault();
    var cards = this.state.cards;
    cards.sort(function (a, b) {
      var fact1 = a[1].match(/\b\w+\b/g).pop().charAt(0).toUpperCase();
      var fact2 = b[1].match(/\b\w+\b/g).pop().charAt(0).toUpperCase();
      if (fact1 < fact2) {
        return -1;
      }
      if (fact1 > fact2) {
        return 1;
      }
      return 0;
    });
    this.setState({ cards: cards });
  }

  handleFavClickButton() {
    this.setState({
      showOnlyFav: !this.state.showOnlyFav
    })
  }

  handleFavClickCard(event) {
    event.preventDefault();
    var clickedCard = event.target.id;
    console.log(clickedCard);
    var cards = this.state.cards;
    cards.map(card => {
      if ((card[3] === +clickedCard) && (card[2] === false)) {
        console.log("true");
        card[2] = true;
        return card;
      } else if ((card[3] === +clickedCard) && (card[2] === true)) {
        console.log("false");
        card[2] = false;
        return card;
      } else { return card }
    })
    this.setState({ cards: cards });
  }

  render() {
    return (
      <div>
        <Header>
          <HeaderButton onClick={this.handleSortClickButton}>
            Sort!
          </HeaderButton>
          <HeaderButton onClick={() => this.handleFavClickButton()}>
            Show Fav Cats
          </HeaderButton>
        </Header>

        <CardsWrapper>
          {this.state.cards.map(element => {
            if (this.state.showOnlyFav && !element[2]) {
              return null
            }
            else {
              return <CatCard
                handleFavClickCard={this.handleFavClickCard}
                img={element[0]}
                fact={element[1]}
                fav={element[2]}
                id={element[3]} />
            }
          })}
        </CardsWrapper>
      </div>
    );
  }
}

export default App;