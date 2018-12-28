import React, { Component } from 'react';
import _ from 'lodash';
import Header from "./components/Header";
import CatCard from "./components/CatCard";
import CardWrapper from "./components/CardWrapper";
import API from "./utils/API"
import './App.css';

// remarks:
// 1. move "getImages()", "getFacts()" and "Promise.all" to a different file.
// 2.

class App extends Component {

  constructor() {
    super();
    this.state = {
      cards: []
    };
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
      let cards = _.zip(images, facts, _.fill(Array(25), false));
      console.log("cards:", cards);
      this.setState({ cards: cards });
    });
  }

  render() {
    return (
      <div>
        <Header />

        <div>
          <CardWrapper>
            {this.state.cards.map(element => {
              return <CatCard
                img={element[0]}
                fact={element[1]}
                fav={element[2]} />
            })}
          </CardWrapper>
        </div>

      </div>
    );
  }
}

export default App;