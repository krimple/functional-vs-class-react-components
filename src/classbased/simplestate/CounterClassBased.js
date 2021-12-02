import { Component } from "react";

export default class CounterClassBased extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    setTimeout(() => {
      setInterval(() => {
        this.setState({ counter: this.state.counter + 1 });
      }, 2000);
    });
  }

  render() {
    return <p>Counter (Class-based): {this.state.counter}!</p>;
  }
}
