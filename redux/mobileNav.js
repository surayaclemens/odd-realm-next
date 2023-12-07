import { createSlice } from '@reduxjs/toolkit';

export const mobileNavSlice = createSlice({
    name: "mobileNav",
    initialState: {
        value: false
    },
    reducers: {
        show: (state) => {
            state.value = true;
            console.log('show reducer clicked, state = ', state.value)
        },
        hide: (state) => {
            state.value = false;
            console.log('hide reducer clicked, state = ', state.value)

        }
    }
});

export const { show, hide } = mobileNavSlice.actions;
export default mobileNavSlice.reducer;