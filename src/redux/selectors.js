export const selectLoggedIn = state => state.auth.isLoggedIn;
export const selectLoggedInUser = state => state.auth.user;

export const getFilteredContacts = state =>
  state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

export const getAllContacts = state => state.contacts;
