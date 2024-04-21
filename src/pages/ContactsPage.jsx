import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
import { fetchContacts } from '../redux/contacts/operations';
import DeleteModal from '../components/DeleteModal/DeleteModal';
import { Helmet } from 'react-helmet-async';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ padding: '30px' }}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <DeleteModal />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
