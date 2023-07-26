import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../redax/filterSlice';
import { selectFilter } from '../../redax/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(addFilter(event.target.value));
  };

  return (
    <label className={css.filterLabel}>
      <span className={css.filterLabelText}>Find contact by name</span>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};
