import { useSelector } from 'react-redux';
import { selectContacts } from '../redax/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.container}>
      <div className={css.phoneBookWrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={css.contactsWrapper}>
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {contacts.length === 0 ? (
          <h3 className={css.title}>
            There are no contacts in your phone book.
          </h3>
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
};
