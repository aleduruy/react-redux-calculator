import React from 'react';

class CalculatorResult extends React.Component {
    render() {
        return (
            <div className="calculator-result">{this.props.result}</div>
        )
    }
};

CalculatorResult.defaultProps = {
    children: ''
}

export default CalculatorResult;
