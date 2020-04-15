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
                    <NumericInput value={this.state.integer} class='numInput' onChange={this.updateResult} />
                </div>
                <div className="results">
                    <FactorialResult integer={this.state.integer} />
                </div>
            </div>
        </div>
        );
    }
    
    updateResult = (newInteger) => {
        this.setState({
            integer: newInteger,
        })
    }
}

class FactorialResult extends React.Component {
    render() {
        try {
            if (this.props.integer === undefined) throw new Error("argument wasn't passed");
            else if (this.props.integer < 0) throw new Error("the argument can't be negative");
            else if (this.props.integer > 40) throw new Error("the argument is too big");
            else {
                var newResult = factorial(this.props.integer);
                return <p className="result">Result: {newResult}.</p>
            }
        }
        catch (e) {
            return <p className="result">Error: {e.message}!</p>
        }
    }
}

ReactDOM.render(
    <FactorialCalc />,
    document.getElementById('root')
  );