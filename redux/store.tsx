import { configureStore } from '@reduxjs/toolkit';
import buyModalReducer from './modalSlice';

// calling the configuration function passing in an object with the reducer
export default configureStore({
  reducer: {
    buyModal: buyModalReducer
  }
});

export interface RootState {
  BuyModal: {
    isOpen: boolean;
    // Add other modal properties here if needed
  };
  // Add other slices' state properties here
}