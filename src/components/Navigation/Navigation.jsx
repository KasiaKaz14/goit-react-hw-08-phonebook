import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/selectors';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Link as RouterLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';

export const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isLogged = useSelector(selectLoggedIn);
  const contactsButton = isLogged ? (
    <Button
      component={RouterLink}
      to="/contacts"
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      CONTACTS
    </Button>
  ) : (
    ''
  );

  const userMenuSection = isLogged ? (
    <UserMenu />
  ) : (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      <Button
        component={RouterLink}
        to="/login"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        LOG IN
      </Button>
      <Button
        component={RouterLink}
        to="/register"
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        SIGN UP
      </Button>
    </Box>
  );

  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <PhoneAndroidIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PHONEBOOK
            </Typography>
            {/* Reaktywność - np. na telefonie */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography component={RouterLink} to="/" textAlign="center">
                    HOME
                  </Typography>
                </MenuItem>
                {isLogged ? (
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      component={RouterLink}
                      to="/contacts"
                      textAlign="center"
                    >
                      CONTACTS
                    </Typography>
                  </MenuItem>
                ) : (
                  ''
                )}
              </Menu>
            </Box>
            {/* Komputerow/Tablet */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={RouterLink}
                to="/"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                HOME
              </Button>
              {contactsButton}
            </Box>

            {userMenuSection}
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};
