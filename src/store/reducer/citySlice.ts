import { createSlice } from '@reduxjs/toolkit';

const citySlice = createSlice({
    name: 'city',
    initialState: {
        city: process.env.REACT_APP_DEFAULT_CITY
    },
    reducers: {
        addCity: (state, action) => {
            state.city = action.payload.city;
        },
        deleteCity: (state) => {
            state.city = '';
        }
    }
});


export const { addCity, deleteCity } = citySlice.actions;
export const citySelector = (state: any) => state.city;
export default citySlice.reducer;