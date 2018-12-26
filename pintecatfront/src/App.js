import React, { Component } from 'react';
import Header from "./components/Header";
//import API from "./utils/API"
import './App.css';

class App extends Component {

  state = {
    //catCards: {},
    //favCats: [],
    //showOne: false,
    //showSort: false
  };

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
