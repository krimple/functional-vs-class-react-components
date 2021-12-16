import { useForm } from 'react-hook-form';
import { form } from './DemoReactHookFormFunctional.module.scss';
import { getDateTimeForInput } from '../../misc/date-utils';

import * as styles from './DemoReactHookFormFunctional.module.scss';

const DemoReactHookForm = () => {

  function doSubmit (data) {
    // do something!
    console.log('Submitted', JSON.stringify(data));
  }

  // useForm provides our form lifecycle methods and settings
  const {
    register,                   // set up a field
    handleSubmit,               // the submit handler wrapper
   formState: { errors, isDirty, isValid }       // errors are automatically managed

  } = useForm({ mode: 'onChange',
      defaultValues: {
        dateOfBirth: getDateTimeForInput()
    },
 });


  return (
    <div>
      <h1>Demo React Hook Form</h1>
      <p><em>View submitted data in JS Console</em></p>
      <form className={form}
            onSubmit={handleSubmit(doSubmit)}>
        <div className={styles.formField}>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            {...register('firstName', {required: true})} />

          { errors?.firstName?.type || '' }
        </div>

        <div className={styles.formField}>
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            {...register('lastName', {required: true, minLength: 4})} />
            { errors.lastName?.type || '' }
        </div>

        <div className={styles.formField}>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            name="dateOfBirth"
            type="datetime-local"
            step={1}
            {...register('dateOfBirth', {required: true })} />
            { errors.dateOfBirth?.type || '' }
        </div>

        <div className={styles.buttonBar}>
          <button
            type="submit"
            disabled={!isValid}>Submit</button>
          <button type="reset">Clear</button>
        </div>
      </form>
    </div>
  );
};

export default DemoReactHookForm;
