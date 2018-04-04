import React, { Component } from 'react';
import numeral from 'numeral';

class SummaryTable extends Component {
  render() {
    const calcTotalQRE = () => {
      let sumQRE =
        numeral(this.props.data.wageQRE).value() +
        numeral(this.props.data.supplyQRE).value() +
        numeral(this.props.data.contractQRE).value();
      return numeral(sumQRE).format('$0,0.00');
    };
    const calcTotalCredit = () => {
      let sumCredit =
        numeral(this.props.data.wageCredit).value() +
        numeral(this.props.data.supplyCredit).value() +
        numeral(this.props.data.contractCredit).value();
      return numeral(sumCredit).format('$0,0.00');
    };
    return (
      <table className="pt-html-table .modifier pt-html-table-bordered pt-html-table-striped">
        <thead>
          <tr>
            <th>Cost Type</th>
            <th>QRE</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wage</td>
            <td>{this.props.data.wageQRE}</td>
            <td>{this.props.data.wageCredit}</td>
          </tr>
          <tr>
            <td>Supply</td>
            <td>{this.props.data.supplyQRE}</td>
            <td>{this.props.data.supplyCredit}</td>
          </tr>
          <tr>
            <td>Contract Research @ 65%</td>
            <td>{this.props.data.contractQRE}</td>
            <td>{this.props.data.contractCredit}</td>
          </tr>
          <tr style={{ fontWeight: 'bold' }}>
            <td>Totals</td>
            <td>{calcTotalQRE()}</td>
            <td>{calcTotalCredit()}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default SummaryTable;
