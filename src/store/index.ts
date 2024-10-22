import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { weatherApi } from '../service/weather';
import citySlice from './reducer/citySlice';
import locationSlice from './reducer/locationSlice';

export const store = configureStore({
    reducer: combineReducers({
        [weatherApi.reducerPath]: weatherApi.reducer,
        city: citySlice,
        location: locationSlice,
    }),
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
