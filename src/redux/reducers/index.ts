import { combineReducers } from '@reduxjs/toolkit';
import searchResultReducer from './searchResultReducer';

const rootReducer = combineReducers({
    fetchedData: searchResultReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
