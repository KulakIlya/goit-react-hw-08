import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import FormLabel from './FormLabel';

import { addContact } from '../../redux/contactsOps';

import styles from './ContactForm.module.css';

const INITIAL_VALUES = { name: '', number: '', id: '' };

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Required').min(3, 'Too short').max(50, 'Too long'),
  number: Yup.string().required('Required').min(3, 'Too short').max(50, 'Too long'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={VALIDATION_SCHEMA}
    >
      <Form className={styles.form} autoComplete="off">
        <FormLabel title="name" />
        <FormLabel title="number" />
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;

ContactForm.propTypes = {
  handleAddContact: PropTypes.func,
};
