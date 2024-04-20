import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
      prepare: contact => {
        return { payload: { ...contact, id: nanoid() } };
      },
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(({ name }) => name !== payload);
    },
  },
  selectors: {
    selectContacts: state => state.items,
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const { selectContacts } = contactsSlice.selectors;
