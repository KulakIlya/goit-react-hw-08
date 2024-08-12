import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { logIn } from '../../redux/auth/operations';

import showToastError from '../../helpers/showToastError';
import FormLabel from '../FormLabel';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email('Enter valid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(logIn(values)).unwrap().catch(showToastError);
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
      >
        <Form>
          <FormLabel title="email" />
          <FormLabel title="password" />
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </>
  );
};
export default LoginForm;
