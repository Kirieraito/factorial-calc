/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
import NumericInput from 'react-numeric-input';
import FactorialResult from './factorial-result';
import './index.css';

class FactorialCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      integer: 3,
    };
  }

    updateResult = (newInteger) => {
      this.setState({
        integer: newInteger,
      });
    }

    render() {
      return (
        <div className="factorialCalc">
          <div className="content">
            <div className="header">
              <h1>Calculate the factorial of an integer</h1>
            </div>
            <div className="calculator">
              <NumericInput value={this.state.integer} class="numInput" onChange={this.updateResult} />
            </div>
            <div className="results">
              <FactorialResult integer={this.state.integer} />
            </div>
          </div>
        </div>
      );
    }
}

ReactDOM.render(
  <FactorialCalc />,
  document.getElementById('root'),
);
