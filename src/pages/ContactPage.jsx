import { Container, Typography } from '@mui/material';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/actions';

export const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{
        pt: 8,
        pb: 6,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Phonebook
      </Typography>
      <Form />

      <Typography
        component="h2"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </Container>
  );
};
