import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import insureReducer from '../features/insure/insureSlice';

export const store = configureStore({
  reducer: {
    insure: insureReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
