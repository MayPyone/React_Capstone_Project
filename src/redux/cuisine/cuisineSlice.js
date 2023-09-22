import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  totalcuisines: [],
};
let country = 'Korean';
const key = {
  headers: { 'x-api-key': '21b35e49426d4c9d8e3ded0fb737f76b' },
};

export const fetchCuisine = createAsyncThunk('user/fetchCuisine', async () => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${country}`, key);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const cuisineSlice = createSlice({
  name: 'cuisine',
  initialState,
  reducers: {
    search: (state, action) => {
      country = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCuisine.fulfilled, (state, action) => {
      state.totalcuisines = action.payload.results;
    });
  },
});

export const { search } = cuisineSlice.actions;
export default cuisineSlice.reducer;
