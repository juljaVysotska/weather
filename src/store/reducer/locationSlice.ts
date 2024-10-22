import { createSlice } from '@reduxjs/toolkit';

const initialState: {
    location: [number, number] | null;
} = {
    location: null
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        addCoordinates: (state, action) => {
            state.location = action.payload.location;
        },
        deleteCoordinates: (state) => {
            state.location = null;
        }
    }
});


export const { addCoordinates, deleteCoordinates } = locationSlice.actions;
export const locationSelector = (state: any) => state.location;
export default locationSlice.reducer;