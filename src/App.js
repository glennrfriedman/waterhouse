import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
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
        <BrowserRouter>
          <Route path="/" render={props => <Home {...props} />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
