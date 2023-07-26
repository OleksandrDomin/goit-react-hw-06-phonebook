import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contactList: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNewContact: {
      reducer(state, action) {
        state.contactList.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contactList.findIndex(
        contact => contact.id === action.payload
      );
      state.contactList.splice(index, 1);
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
