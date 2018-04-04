import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import QRE from './QRE';
import Study from './Study';

class Home extends Component {
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

  renderView() {
    return (
      <Switch>
        <Route exact path="/" render={props => <Landing data={this.state.data} routeProps={props} />} />
        <Route exact path="/qre" render={props => <QRE data={this.state.data} routeProps={props} />} />
        <Route exact path="/:desc" render={props => <Study data={this.state.data} routeProps={props} />} />
      </Switch>
    );
  }

  render() {
    return (
      <div>
        <Nav />
        {this.renderView()}
      </div>
    );
  }
}

export default Home;
