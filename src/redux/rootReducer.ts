import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    users: usersReducer,
});

export default rootReducer;
