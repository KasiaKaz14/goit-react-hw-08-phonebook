import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/selectors';

export const Home = () => {
  const isLogged = useSelector(selectLoggedIn);
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Welcome to the Phonebook!
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        This is a contact storage web application. You are{' '}
        {isLogged
          ? 'logged in. Check contacts page to manage your phonebook.'
          : 'logged out. Please sign in or register to use this page.'}
      </Typography>
    </Container>
  );
};
