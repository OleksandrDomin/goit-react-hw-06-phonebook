import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redax/selectors';
import { deleteContact } from 'redax/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ name, id, number }) => (
        <li key={id} className={css.contactListItem}>
          <span className={css.contactListItemText}>
            {`${name}: ${number}`}
          </span>
          <button
            className={css.contactListItemBtn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
