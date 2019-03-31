import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as calcsActions from '../actions/calcsActions';

class Calculator extends React.Component {
    render() {
        return (
            <div className="registration-form">
                <div className="calculator">
                <div className="calculator-history">
                    <div className="calculator-history-item">220-100</div>
                    <div className="calculator-history-item">60*50</div>
                    <div className="calculator-history-item">655+97</div>
                </div>
                <div className="calculator-result">122+13</div>
                <div className="calculator-row">
                    <div className="calculator-digit operator-digit"></div>
                    <div className="calculator-digit operator-digit">√</div>
                    <div className="calculator-digit operator-digit">%</div>
                    <div className="calculator-digit operator-digit">×</div>
                </div>
                <div className="calculator-row">
                    <div className="calculator-digit">1</div>
                    <div className="calculator-digit">2</div>
                    <div className="calculator-digit">3</div>
                    <div className="calculator-digit operator-digit">÷</div>
                </div>
                <div className="calculator-row">
                    <div className="calculator-digit">4</div>
                    <div className="calculator-digit">5</div>
                    <div className="calculator-digit">6</div>
                    <div className="calculator-digit operator-digit">-</div>
                </div>
                <div className="calculator-row">
                    <div className="calculator-digit">7</div>
                    <div className="calculator-digit">8</div>
                    <div className="calculator-digit">9</div>
                    <div className="calculator-digit operator-digit">+</div>
                </div>
                <div className="calculator-row">
                    <div className="calculator-digit">0</div>
                    <div className="calculator-digit operator-digit">C</div>
                    <div className="calculator-digit operator-digit">,</div>
                    <div className="calculator-digit operator-digit">=</div>
                </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        calcs: state.calcs,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(calcsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);