import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      return {
        ...state,
        isOpen: true,
      };
    },
    closeModal: (state) => {
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
