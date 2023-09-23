import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  detailCuisine: [],
  ingredient: [],
  instruction: [],
};

let id = '716429';
const key = {
  headers: { 'x-api-key': '21b35e49426d4c9d8e3ded0fb737f76b' },
};

export const fetchDetail = createAsyncThunk('user/fetchDetail', async () => {
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, key);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    getId: (state, action) => {
      id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.detailCuisine = action.payload;
      state.ingredient = action.payload.extendedIngredients;
      state.instruction = action.payload.instructions;
    });
  },
});

export const { getId } = detailSlice.actions;
export default detailSlice.reducer;
