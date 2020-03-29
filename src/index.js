import React from 'react';
import ReactDOM from 'react-dom';
import NumericInput from 'react-numeric-input';
import './index.css';

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

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        var result = 1;
        for (let i=1; i<n+1; i++) {
            result *= i;
        }
        return result;
    }
}

ReactDOM.render(
    <FactorialCalc />,
    document.getElementById('root')
  );