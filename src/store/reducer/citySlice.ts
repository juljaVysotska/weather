import { createSlice } from '@reduxjs/toolkit';

const initialState: { city: string | null; } = {
    city: ''
};
const citySlice = createSlice({
    name: 'city',
    initialState,
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