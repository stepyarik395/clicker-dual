import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popap__comp from './Components/Popap-comp/Popap-comp';
import Popap__item from './Components/Popap-item/Popap-item';

class App extends Component {
  render() {
    return (
      <div>
        <Popap__comp></Popap__comp>
        <Popap__item></Popap__item>


      </div>
    );
  }
}

export default App;
