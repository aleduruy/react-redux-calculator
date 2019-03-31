import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as calcsActions from '../actions/calcsActions';
import CalculatorHistory from '../components/calculatorHistory';
import CalculatorResult from '../components/calculatorResult';
import CalculatorRow from '../components/calculatorRow';

class Calculator extends React.Component {
    render() {
        return (
            <div className="calculator">
                <CalculatorHistory calcs={['220-100','60*50','655+97']} />
                <CalculatorResult result="122+13" />
                <CalculatorRow digits={[{digit:'', operator: true}, {digit:'√', operator: true}, {digit:'%', operator: true}, {digit:'×', operator: true}]} />
                <CalculatorRow digits={[{digit:'1', operator: false}, {digit:'2', operator: false}, {digit:'3', operator: false}, {digit:'÷', operator: true}]} />
                <CalculatorRow digits={[{digit:'4', operator: false}, {digit:'5', operator: false}, {digit:'6', operator: false}, {digit:'-', operator: true}]} />
                <CalculatorRow digits={[{digit:'7', operator: false}, {digit:'8', operator: false}, {digit:'9', operator: false}, {digit:'+', operator: true}]} />
                <CalculatorRow digits={[{digit:'0', operator: false}, {digit:'C', operator: true}, {digit:',', operator: true}, {digit:'=', operator: true}]} />
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