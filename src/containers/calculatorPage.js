import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as calcsActions from '../actions/calcsActions';
import CalculatorHistory from '../components/calculatorHistory';
import CalculatorResult from '../components/calculatorResult';
import CalculatorRow from '../components/calculatorRow';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            calc:[],
        }
        this.handleDigit = this.handleDigit.bind(this);
        this.setResult = this.setResult.bind(this);
    }

    setResult() {
        if(this.state.calc.length === 0) {
            return null;
        }
        try {
            eval(this.state.calc.join(''));
            let result = Object.assign({}, {
                calc: this.state.calc.join(''),
              });
            this.props.actions.addCalc(result);
            return this.setState({ result: eval(this.state.calc.join('')), calc: [] });
        } catch (e) {
            if (e instanceof SyntaxError) {
                return null;
            }
        }
    }

    handleDigit(digit, display) {
        let formatedCalc = this.state.calc;
        switch(digit) {
            case 'C':
                return this.setState({ result: '', calc: [] });
            case '=':
                return this.setResult();
            case '√':
                return null;
            case ',':
                return null;
            case '%':
                return null;
            default:
                if (formatedCalc.length && formatedCalc[formatedCalc.length-1].match(/^[0-9]+$/) && digit.match(/^[0-9]+$/)) {
                    formatedCalc[formatedCalc.length-1] = `${formatedCalc[formatedCalc.length-1]}${digit}`;
                } else {
                    formatedCalc.push(digit);
                }
        }
        return this.setState({ result: formatedCalc.join(''), calc: formatedCalc });
    }

    componentDidMount() {
        document.getElementById("calculator").addEventListener("click",e => {
        if (e.target && e.target.matches("div.calculator-digit")) {
            this.handleDigit(e.target.getAttribute('data-digit', e.target.innerHTML));
            }
        });
    }

    getPastCalcs() {
        return this.props.calcs.map(item => {
            return item.calc;
        });
    }

    render() {
        return (
            <div id="calculator" className="calculator">
                <CalculatorHistory calcs={this.getPastCalcs()} />
                <CalculatorResult result={this.state.result} />
                <CalculatorRow digits={[
                    {digit:'( )', operator: true, hidden: true},
                    {digit:'√', operator: true, hidden: true},
                    {digit:'%', operator: true, hidden: true},
                    {digit:'*', display:'×', operator: true},
                ]} />
                <CalculatorRow digits={[
                    {digit:'1', operator: false,},
                    {digit:'2', operator: false},
                    {digit:'3', operator: false},
                    {digit:'/', display:'÷', operator: true},
                ]} />
                <CalculatorRow digits={[
                    {digit:'4', operator: false},
                    {digit:'5', operator: false},
                    {digit:'6', operator: false},
                    {digit:'-', operator: true},
                ]} />
                <CalculatorRow digits={[
                    {digit:'7', operator: false},
                    {digit:'8', operator: false},
                    {digit:'9', operator: false},
                    {digit:'+', operator: true},
                ]} />
                <CalculatorRow digits={[
                    {digit:'0', operator: false},
                    {digit:',', operator: true, hidden: true},
                    {digit:'C', operator: true},
                    {digit:'=', operator: true},
                ]} />
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