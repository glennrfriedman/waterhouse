import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import numeral from 'numeral';

class Credit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barChartData: []
    };
  }

  componentDidMount() {
    this.createBarData();
  }

  // Next Steps:
  // Add show one page for each years' study
  // in show one page have big cards one for Wage - show current and % of prior year
  // same for supply and cr
  // clicking on wage will bring you to a wage survey portal with table showing employee % and salaries
  // clicking on supply/cr will bring up the same

  createBarData = () => {
    let barChartData = {
      labels: ['2018', '2017', '2016', '2015'],
      datasets: [
        {
          label: 'Wage Credit',
          data: [
            numeral(this.props.data.current.wageCredit).value(),
            numeral(this.props.data.prior.wageCredit).value(),
            numeral(this.props.data.prior2.wageCredit).value(),
            numeral(this.props.data.prior3.wageCredit).value()
          ],
          backgroundColor: '#eb8c00'
        },
        {
          label: 'Supply Credit',
          data: [
            numeral(this.props.data.current.supplyCredit).value(),
            numeral(this.props.data.prior.supplyCredit).value(),
            numeral(this.props.data.prior2.supplyCredit).value(),
            numeral(this.props.data.prior3.supplyCredit).value()
          ],
          backgroundColor: '#dc6900'
        },
        {
          label: 'CR Credit @ 65%',
          data: [
            numeral(this.props.data.current.contractCredit).value(),
            numeral(this.props.data.prior.contractCredit).value(),
            numeral(this.props.data.prior2.contractCredit).value(),
            numeral(this.props.data.prior3.contractCredit).value()
          ],
          backgroundColor: '#602320'
        }
      ]
    };
    this.setState({ barChartData: barChartData });
  };

  render() {
    // console.log('bar data is', this.state.barChartData);
    const data = this.state.barChartData;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '90%', margin: '5%' }}>
        <Bar
          data={data}
          options={{
            title: {
              display: true,
              text: 'R&D Credit Comparison by Year',
              fontSize: 25
            },
            legend: {
              display: true,
              position: 'bottom'
            },
            responsive: true
          }}
        />
      </div>
    );
  }
}

export default Credit;
