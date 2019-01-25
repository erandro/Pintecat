import React, { Component } from 'react';
// import _ from 'lodash';
import Header from "./components/Header";
import HeaderButton from "./components/HeaderButton";
import SortButton from "./components/SortButton";
import CatCard from "./components/CatCard";
import CardWrapper from "./components/CardWrapper";
import CardsWrapper from "./components/CardsWrapper";
import APICall from "./utils/APICall"
import './App.css';

// possible changes in the future:
// 1. DONE: move "getImages()", "getFacts()" and "Promise.all" to a different file.
// 2. DONE: make sorting click to sort first word when clicked again?
// 3. DONE: change the array in the state to object :) (changes all logic)
// 4. EDIT-DONE: take the "CardsWrapper" oparation logic (showing cards) to a the component
// 5. DENIED: change "Show Fav Cats" button text when clicked
// 6. DONE: when using the "_.zip" I use an array of id (change logic)
// 7. maybe changed the "CardsWrapper" css- the sorting is from up to down in every column (not left to right)
// 8. change "<h1>Loading...</h1>" to a component
// 9. DENIED: can change all the function to arrow function and get rid of the "bind(this)"

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      cards: [],
      sorted: false,
      showOnlyFav: false,
      showOnlyOne: false,
      currentOneCard: 0
    };
    this.handleShowAllClick = this.handleShowAllClick.bind(this);
    this.handleSortClickButton = this.handleSortClickButton.bind(this);
    this.handleFavClickButton = this.handleFavClickButton.bind(this);
    this.handleFavClickCard = this.handleFavClickCard.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  componentDidMount() {
    Promise.all([APICall.getImages(), APICall.getFacts()])
      .then(([images, facts]) => {
        // let cards = _.zip(images, facts, _.fill(Array(25), false), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
        let cards = []
        for (let i = 0; i < 25; i++) {
          let obj = {
            id: +[i] + 1,
            img: images[i],
            fact: facts[i],
            fav: false
          }
          cards.push(obj)
        }
        this.setState({
          cards: cards,
          isLoading: false
        })
      }).catch((err) => console.log(err))
  }

  handleShowAllClick(event) {
    event.preventDefault();
    this.setState({
      showOnlyFav: false,
      showOnlyOne: false
    })
  }

  handleSortClickButton(event) {
    event.preventDefault();
    if ((!this.state.showOnlyOne) || !(!this.state.showOnlyFav)) {
      var cards = this.state.cards;
      if (this.state.sorted) {
        // sort alphabetically by the first word in the cat fact
        cards.sort(function (a, b) {
          var fact1 = a.fact.match(/\b\w+\b/g)[0].charAt(0).toUpperCase();
          var fact2 = b.fact.match(/\b\w+\b/g)[0].charAt(0).toUpperCase();
          //var fact1 = a[1].match(/\b\w+\b/g)[0].charAt(0).toUpperCase();
          //var fact2 = b[1].match(/\b\w+\b/g)[0].charAt(0).toUpperCase();
          if (fact1 < fact2) {
            return -1;
          }
          if (fact1 > fact2) {
            return 1;
          }
          return 0;
        });
        this.setState({
          cards: cards,
          sorted: false
        });
      } else {
        // sort alphabetically by the last word in the cat fact
        cards.sort(function (a, b) {
          var fact1 = a.fact.match(/\b\w+\b/g).pop().charAt(0).toUpperCase();
          var fact2 = b.fact.match(/\b\w+\b/g).pop().charAt(0).toUpperCase();
          // var fact1 = a[1].match(/\b\w+\b/g).pop().charAt(0).toUpperCase();
          // var fact2 = b[1].match(/\b\w+\b/g).pop().charAt(0).toUpperCase();
          if (fact1 < fact2) {
            return -1;
          }
          if (fact1 > fact2) {
            return 1;
          }
          return 0;
        });
        this.setState({
          cards: cards,
          sorted: true
        });
      }
    }
  }

  handleFavClickButton() {
    this.setState({
      showOnlyFav: true,
      showOnlyOne: false
    })
  }

  handleFavClickCard(event) {
    event.preventDefault();
    var clickedCard = event.target.id;
    var cards = this.state.cards;
    cards.map(card => {
      if ((card.id === +clickedCard) && (card.fav === false)) {
        card.fav = true;
        return card;
      } else if ((card.id === +clickedCard) && (card.fav === true)) {
        card.fav = false;
        return card;
      } else { return card }
    })
    this.setState({ cards: cards });
  }

  handleShowOneClickButton() {
    this.setState(prevState => {
      return { showOnlyOne: !prevState.showOnlyOne }
    })
  }

  handlePreviousClick(event) {
    event.preventDefault();
    if (this.state.currentOneCard > 0) {
      this.setState(prevState => {
        return { currentOneCard: prevState.currentOneCard - 1 }
      });
    } else {
      this.setState(prevState => {
        return { currentOneCard: prevState.cards.length - 1 }
      });
    }
  }

  handleNextClick(event) {
    event.preventDefault();
    if (this.state.currentOneCard < this.state.cards.length - 1) {
      this.setState(prevState => {
        return { currentOneCard: prevState.currentOneCard + 1 }
      });
    } else {
      this.setState({ currentOneCard: 0 });
    }
  }

  render() {
    return (
      <div>
        <Header
          handleShowAllClick={this.handleShowAllClick}>
          <SortButton
            // React don't see attribute as booleon and expect a string
            // that's why I add the "toString()" 
            showingonecard={this.state.showOnlyOne.toString()}
            showingfavcards={this.state.showOnlyFav.toString()}
            onClick={this.handleSortClickButton}
          >
            Sort ⇓
          </SortButton>
          <HeaderButton
            onClick={() => this.handleFavClickButton()}>
            Favocats ♥
          </HeaderButton>
          <HeaderButton
            onClick={() => this.handleShowOneClickButton()}>
            There can be only one
          </HeaderButton>
        </Header>
        {
          this.state.isLoading ?
            <h1>Loading...</h1> :
            this.state.showOnlyOne ?
              <CardWrapper
                oneCard={this.state.cards[this.state.currentOneCard]}
                handleFavClickCard={this.handleFavClickCard}
                handlePreviousClick={this.handlePreviousClick}
                handleNextClick={this.handleNextClick}
              />
              :
              <CardsWrapper
                cards={this.state.cards}
                showOnlyFav={this.state.showOnlyFav}
                handleFavClickCard={this.handleFavClickCard}
              />
        }
      </div>
    );
  }
}

export default App;