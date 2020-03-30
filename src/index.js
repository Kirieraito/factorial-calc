import React from 'react';
import ReactDOM from 'react-dom';
import NumericInput from 'react-numeric-input';
import './index.css';
const factorial = require('./factorial');

class FactorialCalc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            integer: 3,
            result: 6,
        }
    }

    render() {
        return (
        <div className="factorialCalc">
            <div className="content">
                <div className="header">
                    <h1>Calculate the factorial of an integer</h1>
                </div>
                <div className="calculator">
                    <NumericInput min={0} max={40} value={this.state.integer} class='numInput' onChange={this.updateResult} />
                </div>
                <div className="results">
                    <p className="result">Result: {this.state.result}</p> 
                </div>
            </div>
        </div>
        );
    }
    
    updateResult = (newInteger) => {
        var newResult;
        if (newInteger < 0) {
            newResult = factorial(0);
            this.setState({
                integer: 0,
                result: newResult,
            })
        } else if (newInteger > 40) {
            newResult = factorial(40);
            this.setState({
                integer: 40,
                result: newResult,
            })
        } else {
            newResult = factorial(newInteger);
            this.setState({
                integer: newInteger,
                result: newResult,
            })
        }
    }
}

ReactDOM.render(
    <FactorialCalc />,
    document.getElementById('root')
  );