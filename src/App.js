import React, { Component } from 'react';
import Alarm from './Alarm.js';
import './App.css';
import 'react-date-picker/index.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Alarm/>
      </div>
    );
  }
}
