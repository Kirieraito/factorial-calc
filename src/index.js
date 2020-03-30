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
            <div className="header">
                <h1>Calculate the factorial of a positive integer</h1>
            </div>
            <div>
                <NumericInput min={1} value={this.state.integer} class='numInput' onChange={this.updateResult} />
                <h>{this.state.result}</h>
            </div>
        </div>
        );
    }
    
    
    updateResult = (newInteger) => {
        var newResult = factorial(newInteger);
        this.setState({
            integer: newInteger,
            result: newResult,
        })
    }

    

}

ReactDOM.render(
    <FactorialCalc />,
    document.getElementById('root')
  );