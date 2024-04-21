import PropTypes from 'prop-types';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/contactsOps';

import styles from './Contact.module.css';

const Contact = ({ name, id, contactNumber }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <li className={styles.contactItem}>
      <div>
        <p className={styles.text}>
          <FaUser className={styles.icon} /> {name}
        </p>
        <p className={styles.text}>
          <FaPhoneAlt className={styles.icon} /> {contactNumber}
        </p>
      </div>
      <button type="button" className={styles.deleteBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};
export default Contact;

Contact.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  contactNumber: PropTypes.string,
  handleDeleteContact: PropTypes.func,
};
