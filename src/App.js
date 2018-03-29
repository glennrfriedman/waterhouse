import React, { Component } from 'react';
import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
  Card,
  Elevation
} from '@blueprintjs/core';
import Nav from './components/Nav';
import SummaryCard from './components/SummaryCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div style={{ margin: '2%' }}>
          <SummaryCard year="2018" />
          <SummaryCard year="2017" />
          <SummaryCard year="2016" />
          <SummaryCard year="2015" />
        </div>
      </div>
    );
  }
}

export default App;
