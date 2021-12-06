import { useState } from 'react';
import { getDateTimeForInput } from '../../misc/date-utils';


const DemoFormFunctional = (props) => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: getDateTimeForInput()
  });

  function handleSubmit(event) {
    alert(JSON.stringify(person));
    event.preventDefault();
  }

  function handleChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setPerson({
      ...person,
      [fieldName]: fieldValue
    });
    e.preventDefault();
  }
  return (
    <div>
      <h1>Demo Form Functional</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="dateOfBirth"
          value={person.dateOfBirth}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default DemoFormFunctional;
