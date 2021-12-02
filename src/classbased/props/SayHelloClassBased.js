import React, { Component } from "react";
import PropTypes from "prop-types";
export default class SayHelloClassBased extends Component {
  render() {
    return <p>Hello, Class {this.props.name}!</p>;
  }
}

SayHelloClassBased.propTypes = {
  name: PropTypes.string.isRequired
};
