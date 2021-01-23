import React, { Component } from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";

class App extends Component {
  state = {
    active: false,
    time: 0
  };

  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.idInterval);
    } else {
      this.idInterval = setInterval(() => this.addSecond(), 1000);
    }
    this.setState(() => ({
      active: !this.state.active
    }));
  };

  addSecond() {
    this.setState({
      time: this.state.time + 1
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.time}</p>
        <SwitchButton active={this.state.active} click={this.handleClick} />
      </div>
    );
  }
}

export default App;
