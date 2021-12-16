import { withFormik } from 'formik';
import { getDateTimeForInput } from '../../misc/date-utils';

const DemoFormikForm = ({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => {
  return (
    <div>
      <h1>Demo Formik Form</h1>
      <p><em>View submitted data in JS Console</em></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.firstName && touched.firstName && <b>{errors.firstName}</b>}
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.lastName && touched.lastName && <b>{errors.lastName}</b>}
        <input
          type="datetime-local"
          name="dateOfBirth"
          step={1}
          value={values.dateOfBirth}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.dateOfBirth && touched.dateOfBirth && <b>{errors.dateOfBirth}</b>}
        <button>Submit</button>
      </form>
    </div>
  );
};

// Wrap form above with props that manage the form via formik
// including handling initialization, changes, blur, submission and validation

const DemoFormikFormHOC = withFormik({
  // initial form value
  mapPropsToValues: () => ({
    firstName: "",
    lastName: "",
    dateOfBirth: getDateTimeForInput()
  }),
  validate: formFields => {
    const errors = {};

    if (!formFields.firstName) {
      errors.firstName = 'Required';
    }
    if (!formFields.lastName) {
      errors.lastName = 'Required';
    }
    if (!formFields.dateOfBirth) {
      errors.dateOfBirth = 'Required';
    }

    return errors;
  },
  handleSubmit: (data, { setSubmitting }) => {
    console.log('submitted', data);
    // do something async, then clear submitting flag to allow another submit
    setSubmitting(false);
  }
})(DemoFormikForm);

export default DemoFormikFormHOC;
