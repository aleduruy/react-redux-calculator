import React from 'react';

class CalculatorHistory extends React.Component {
    renderItems() {
        let { calcs } = this.props;
    
        return calcs.map((item, index) => {
          return <div key={index} className="calculator-history-item">{item}</div>;
        });
      }

    render() {
        return (
            <div className="calculator-history">
                {this.renderItems()}
            </div>
        )
    }
};

CalculatorHistory.defaultProps = {
    calcs: []
}

export default CalculatorHistory;
