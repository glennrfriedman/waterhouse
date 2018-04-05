import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import numeral from 'numeral';

class QRE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barChartData: []
    };
  }

  componentDidMount() {
    this.createBarData();
  }

  createBarData = () => {
    let barChartData = {
      labels: ['2018', '2017', '2016', '2015'],
      datasets: [
        {
          label: 'Wage QRE',
          data: [
            numeral(this.props.data.current.wageQRE).value(),
            numeral(this.props.data.prior.wageQRE).value(),
            numeral(this.props.data.prior2.wageQRE).value(),
            numeral(this.props.data.prior3.wageQRE).value()
          ],
          backgroundColor: '#eb8c00'
        },
        {
          label: 'Supply QRE',
          data: [
            numeral(this.props.data.current.supplyQRE).value(),
            numeral(this.props.data.prior.supplyQRE).value(),
            numeral(this.props.data.prior2.supplyQRE).value(),
            numeral(this.props.data.prior3.supplyQRE).value()
          ],
          backgroundColor: '#dc6900'
        },
        {
          label: 'CR QRE @ 65%',
          data: [
            numeral(this.props.data.current.contractQRE).value(),
            numeral(this.props.data.prior.contractQRE).value(),
            numeral(this.props.data.prior2.contractQRE).value(),
            numeral(this.props.data.prior3.contractQRE).value()
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
              text: 'R&D QRE Comparison by Year',
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

export default QRE;
