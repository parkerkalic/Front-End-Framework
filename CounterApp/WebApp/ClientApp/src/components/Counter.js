/// <reference path="home.js" />
import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
      this.state = { currentCount1: 0, currentCount2: 0, currentCount3: 0, currentCount4: 0 };
      this.increment1 = this.increment1.bind(this);
      this.increment2 = this.increment2.bind(this);
      this.increment3 = this.increment3.bind(this);
      this.increment4 = this.increment4.bind(this);

      this.decrement1 = this.decrement1.bind(this);
      this.decrement2 = this.decrement2.bind(this);
      this.decrement3 = this.decrement3.bind(this);
      this.decrement4 = this.decrement4.bind(this);

      this.resetTotal = this.resetTotal.bind(this);
    }

    // increment
    increment1() {
        this.setState({
          currentCount1: this.state.currentCount1 + 1
        });
    }
    increment2() {
        this.setState({
            currentCount2: this.state.currentCount2 + 1
        });
    }
    increment3() {
        this.setState({
            currentCount3: this.state.currentCount3 + 1
        });
    }
    increment4() {
        this.setState({
            currentCount4: this.state.currentCount4 + 1
        });
    }

    // decrement
  decrement1() {
      this.setState({
          currentCount1: this.state.currentCount1 - 1
      });
    }
    decrement2() {
        this.setState({
            currentCount2: this.state.currentCount2 - 1
        });
    }
    decrement3() {
        this.setState({
            currentCount3: this.state.currentCount3 - 1
        });
    }
    decrement4() {
        this.setState({
            currentCount4: this.state.currentCount4 - 1
        });
    }

    // reset
    resetTotal() {
        this.setState({
            resetTotal1: this.state.currentCount1 = 0,
            resetTotal2: this.state.currentCount2 = 0,
            resetTotal3: this.state.currentCount3 = 0,
            resetTotal4: this.state.currentCount4 = 0
        });
    }

    // end user
  render() {
    return (
      <div>
        <h1>Shopping App</h1>

        <p>Please add whichever items you want to your cart: </p>

        <p>Total items: <strong>{this.state.currentCount1 + this.state.currentCount2 + this.state.currentCount3 + this.state.currentCount4}</strong></p>

            <button className="btn btn1" onClick={this.increment1}>+</button>
            <button className="btn btn1" onClick={this.decrement1}>-</button>

            <p>Raisins: <strong>{this.state.currentCount1}</strong></p>

            <p></p>

            <button className="btn btn2" onClick={this.increment2}>+</button>
            <button className="btn btn2" onClick={this.decrement2}>-</button>

            <p>Broccoli: <strong>{this.state.currentCount2}</strong></p>

            <p></p>

            <button className="btn btn3" onClick={this.increment3}>+</button>
            <button className="btn btn2" onClick={this.decrement3}>-</button>

            <p>Wonder bread: <strong>{this.state.currentCount3}</strong></p>

            <p></p>

            <button className="btn btn4" onClick={this.increment4}>+</button>
            <button className="btn btn2" onClick={this.decrement4}>-</button>

            <p>Salted Pretzels: <strong>{this.state.currentCount4}</strong></p>

            <button className="btn refresh" onClick={this.resetTotal}>Reset</button>
      </div>
    );
  }
}
