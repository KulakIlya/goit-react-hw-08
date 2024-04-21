import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';

import styles from './FormLabel.module.css';

const FormLabel = ({ title }) => {
  return (
    <label className={styles.formLabel}>
      <span className={styles.labelTitle}>{title}</span>
      <Field name={title} className={styles.formField} />
      <ErrorMessage name={title} component="span" className={styles.errorMessage} />
    </label>
  );
};
export default FormLabel;

FormLabel.propTypes = {
  title: PropTypes.string,
};
