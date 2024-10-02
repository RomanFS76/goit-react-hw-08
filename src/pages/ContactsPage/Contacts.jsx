import React, { useEffect } from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectLoading } from '../../redux/contacts/selectors'
import { fetchContacts } from '../../redux/contacts/operations'

const Contacts = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>      
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">Please log in</p>}
      <ContactList />
    </div>
  )
}

export default Contacts