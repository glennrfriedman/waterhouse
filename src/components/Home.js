import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import QRE from './QRE';

class Home extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   url: 'https://warm-cliffs-55595.herokuapp.com'
    // };
  }

  renderView() {
    return (
      <Switch>
        <Route exact path="/" render={props => <Landing />} />
        <Route exact path="/qre" render={props => <QRE />} />
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
