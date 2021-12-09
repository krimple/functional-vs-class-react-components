import { Component } from "react";

const colors = ['red', 'brown', 'blue', 'green', 'black'];

export default class CounterClassBased extends Component {
  // see https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
  _mounted = false;

  state = {
    counter: 0
  };

  componentDidMount() {
    this._mounted = true;
    this.handle = setInterval(() => {
        if (this._mounted) {
          this.setState({ counter: this.state.counter + 1});
        }
      }, 200);
  }

  componentWillUnmount() {
    // clean up!
    clearInterval(this.handle);
  }

  render() {
    return (
      <p 
        style={
          { color: colors[this.state.counter % colors.length]}}>
            { this.props.message }
      </p>
    );
  }
}
