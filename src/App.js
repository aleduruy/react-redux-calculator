import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
    );
  }
}

export default App;
