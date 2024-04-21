import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Contact from './Contact';

import { selectFilteredContacts } from '../../redux/selectors';

import styles from './ContactList.module.css';

const ContactList = () => {
  const items = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {items.map(({ id, name, number }) => (
        <Contact key={id} name={name} contactNumber={number} id={id} />
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDeleteContact: PropTypes.func,
};
