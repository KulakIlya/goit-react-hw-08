import { ErrorMessage, Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { addContact } from '../../redux/contactsSlice';
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
        <label className={styles.formLabel}>
          <span className={styles.labelTitle}>Name</span>
          <Field name="name" className={styles.formField} />
          <ErrorMessage name="name" component="span" className={styles.errorMessage} />
        </label>
        <label>
          <span className={styles.labelTitle}>Number</span>
          <Field name="number" className={styles.formField} />
          <ErrorMessage name="number" component="span" className={styles.errorMessage} />
        </label>
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
