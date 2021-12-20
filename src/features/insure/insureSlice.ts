import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { Insurance, InsuranceProduct } from '../../types/insurance';
import { fetchProduct } from './insureAPI';

export interface InsureState {
  value: InsuranceProduct | undefined;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: InsureState = {
  value: undefined,
  status: 'idle',
};

export const fetchProductAsync = createAsyncThunk(
  'insure/fetchProduct',
  async (payload: Insurance) => {
    const response = await fetchProduct(payload);
    // The value we return becomes the `fulfilled` action payload
    return response.data as InsuranceProduct;
  }
);

export const insureSlice = createSlice({
  name: 'insure',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    reset: (state) => (state.value = undefined),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log(['fulfilled', action]);
        state.value = action.payload;
      });
  },
});

export const { reset } = insureSlice.actions;

export const selectInsure = (state: RootState) => state.insure.value;

export default insureSlice.reducer;
