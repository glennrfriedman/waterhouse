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
  constructor(props) {
    super(props);
    this.state = {
      data: {
        current: {
          wageQRE: '$1,937,800',
          supplyQRE: '$40,089',
          contractQRE: '$891,091',
          wageCredit: '$174,402',
          supplyCredit: '$3,608',
          contractCredit: '$80,198'
        },
        prior: {
          wageQRE: '$1,504,500',
          supplyQRE: '$38,089',
          contractQRE: '$758,091',
          wageCredit: '$174,402',
          supplyCredit: '$3,608',
          contractCredit: '$80,198'
        },
        prior2: {
          wageQRE: '$1,637,800',
          supplyQRE: '$42,991',
          contractQRE: '$405,190',
          wageCredit: '$174,402',
          supplyCredit: '$3,608',
          contractCredit: '$80,198'
        },
        prior3: {
          wageQRE: '$1,437,700',
          supplyQRE: '$32,871',
          contractQRE: '$604,331',
          wageCredit: '$174,402',
          supplyCredit: '$3,608',
          contractCredit: '$80,198'
        }
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div style={{ margin: '2%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SummaryCard year="2018" desc="current" data={this.state.data} />
          <SummaryCard year="2017" desc="prior" data={this.state.data} />
          <SummaryCard year="2016" desc="prior2" data={this.state.data} />
          <SummaryCard year="2015" desc="prior3" data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
