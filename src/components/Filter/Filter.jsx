import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Filter = () => {
  const dispatch = useDispatch();

  const setFilterValue = event => dispatch(setFilter(event.target.value));

  return (
    <TextField
      id="filter"
      name="filter"
      label="Find contacts by name"
      variant="standard"
      onChange={setFilterValue}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Filter;
