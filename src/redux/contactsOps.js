import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://662409ef04457d4aaf9b7dce.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const data = await axios.get('/contacts');
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const data = await axios.post('/contacts', {
        name,
        number,
      });
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const data = await axios.delete(`/contacts/${id}`);
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
