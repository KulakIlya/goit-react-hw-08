import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import ErrorMessage from '../ErrorMessage';
import FetchLoader from '../Loader';
import SearchBox from '../SearchBox';

import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/selectors';

import styles from './App.module.css';

const App = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {isLoading && !error ? <FetchLoader /> : <ContactList />}
    </div>
  );
};
export default App;
