import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

import styles from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div className={styles.wrapper}>
      <p>Find contacts by name</p>
      <input type="text" className={styles.input} value={filter} onChange={handleFilterChange} />
    </div>
  );
};
export default SearchBox;

SearchBox.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
