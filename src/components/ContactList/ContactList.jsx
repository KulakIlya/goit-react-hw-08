import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Contact from './Contact';

import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

import styles from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(selectNameFilter);
  const items = useSelector(selectContacts);

  const filteredContacts = items.filter(({ name }) => name.toLowerCase().includes(filter));

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} contactNumber={number} />
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
