import React, { Component } from 'react';
import { Card, Callout, Tooltip } from '@blueprintjs/core';
import SummaryTable from './SummaryTable';
import { Redirect, Link } from 'react-router-dom';

class SummaryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipDesc: 'Study Complete'
    };
  }

  componentDidMount() {
    this.checkDesc(this.props.desc);
  }

  clickedCard = () => {
    return <Redirect to="/year" push />;
  };

  checkDesc = desc => {
    if (desc === 'current') {
      this.setState({ tooltipDesc: 'Study in Progress' });
    }
  };

  render() {
    const year = this.props.year;
    const desc = this.props.desc;
    const data = this.props.data[desc];
    return (
      <Card
        elevation="4"
        interactive="true"
        style={{ margin: '1%', width: '55%' }}
        onClick={this.clickedCard}
      >
        <Callout intent={this.props.intent}>
          <Tooltip content={this.state.tooltipDesc}>
            <h5>
              <Link to="/year">{year} Sample Co. R&D Tax Credit Study</Link>
            </h5>
          </Tooltip>
        </Callout>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SummaryTable data={data} />
        </div>
      </Card>
    );
  }
}

export default SummaryCard;
