import { Component } from "react";
import { getDateTimeForInput } from "../../misc/date-utils";

export default class DemoFormClassBased extends Component {
  state = {
    person: {
      firstName: "",
      lastName: "",
      dateOfBirth: getDateTimeForInput()
    }
  };

  handleSubmit = (event) => {
    alert(JSON.stringify(this.state));
    event.preventDefault();
  };

  handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    this.setState((previousState) => {
      return {
        person: {
          ...previousState.person,
          [fieldName]: fieldValue
        }
      };
    });
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Demo Form Class Based</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.person.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            value={this.state.person.lastName}
            onChange={this.handleChange}
          />
          <input
            type="datetime-local"
            name="dateOfBirth"
            value={this.state.person.dateOfBirth}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
