import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/actions';
import { selectLoggedInUser } from 'redux/selectors';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleLogout = () => {
    setAnchorElUser(null);
    dispatch(logOut());
  };

  const user = useSelector(selectLoggedInUser);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Typography
          textAlign="center"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            color: 'inherit',
            textDecoration: 'none',
            padding: '15px',
          }}
        >
          {user.email}
        </Typography>
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">LOGOUT</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
