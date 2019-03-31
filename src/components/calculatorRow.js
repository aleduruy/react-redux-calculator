import React from 'react';

class CalculatorRow extends React.Component {
    renderItems() {
        let { digits } = this.props;
    
        return digits.map((item, index) => {
          return <div key={index} className={`calculator-digit ${item.operator ? 'operator-digit' : ''}`}>{item.digit}</div>;
        });
      }

    render() {
        return (
            <div className="calculator-row">
                {this.renderItems()}
            </div>
        )
    }
};

CalculatorRow.defaultProps = {
    digits: []
}

export default CalculatorRow;
