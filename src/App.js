import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './Form';
import List from './List';
import './App.css';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      flexiConfig: ''
    };
  }
 

  render() {
    return (
      <div>
          <Form/>

      </div>
    );
  }
}


export default App;